// Keep the original table for desktop/print; render labelled rows for narrow screens.
export default function responsiveTables() {
  return tree => {
    function visit(parent) {
      if (!parent.children) return;
      parent.children = parent.children.map(node => {
        if (node.type === 'element' && node.tagName === 'table') {
          const head = node.children.find(child => child.tagName === 'thead');
          const body = node.children.find(child => child.tagName === 'tbody');
          const headers = head?.children.find(child => child.tagName === 'tr')?.children.filter(child => child.tagName === 'th') ?? [];
          const rows = body?.children.filter(child => child.tagName === 'tr') ?? [];
          if (!headers.length || !rows.length) return node;
          const copy = value => JSON.parse(JSON.stringify(value));
          const element = (tagName, className, children) => ({type:'element', tagName, properties:{className:[className]}, children});
          const records = rows.map(row => {
            const cells = row.children.filter(child => child.tagName === 'td');
            return element('dl', 'table-record', cells.map((cell, index) => element('div', 'record-field', [
              element('dt', 'record-label', copy(headers[index]?.children ?? [{type:'text',value:`Kolom ${index + 1}`} ])),
              element('dd', 'record-value', copy(cell.children)),
            ])));
          });
          const mobile = element('div', 'mobile-table', records);
          return element('div', 'responsive-table', [node, mobile]);
        }
        visit(node);
        return node;
      });
    }
    visit(tree);
  };
}

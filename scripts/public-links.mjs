import path from 'node:path';
export default function publicLinks() {
  return (tree, file) => {
    const source = file.path?.split('/docs/')[1] ?? 'index.md';
    const parent = path.posix.dirname(source);
    const directory = parent === '.' ? '/sop-masjid/' : `/sop-masjid/${parent}/`;
    function rewrite(value) {
      if (!value || /^(?:[a-z]+:|\/\/|#)/i.test(value)) return value;
      const [target, fragment] = value.split('#');
      let result = target.startsWith('/sop-masjid/') ? target : target.startsWith('/') ? `/sop-masjid${target}` : path.posix.normalize(`${directory}${target}`);
      result = result.replace(/\.md$/, '').replace(/\/index$/, '/');
      if (!path.posix.extname(result) && !result.endsWith('/')) result += '/';
      return result + (fragment ? `#${fragment}` : '');
    }
    function visit(node) {
      if (node.type === 'link' || node.type === 'image') node.url = rewrite(node.url);
      if (node.type === 'html') node.value = node.value.replace(/href="([^"]+)"/g, (_, url) => `href="${rewrite(url)}"`);
      node.children?.forEach(visit);
    }
    visit(tree);
  };
}

import type { MarkdownInstance } from 'astro';
export const base = '/sop-masjid/';
export const href = (route = '') => route ? base + route.replace(/^\//, '').replace(/\/?$/, '/') : base;
const files = import.meta.glob<MarkdownInstance<Record<string, unknown>>>(['../../docs/**/*.md', '!../../docs/index.md', '!../../docs/paket/index.md'], { eager: true });
export const documents = Object.entries(files).filter(([path]) => !['../../docs/index.md', '../../docs/paket/index.md'].includes(path)).map(([path, doc]) => {
  const slug = path.replace('../../docs/', '').replace(/(?:\/index)?\.md$/, '');
  const title = doc.rawContent().match(/^# (.+)/m)?.[1].replace(/<[^>]+>/g, '') ?? slug;
  const kind = slug.includes('/sop/') || slug.endsWith('sop-inti') ? 'SOP' : slug.includes('/template/') ? 'Template' : slug.includes('/checklist/') || slug.endsWith('alat-kerja') ? 'Checklist' : 'Panduan';
  const packageName = slug.includes('mushola-starter') ? 'Mushola Starter' : slug.includes('masjid-dasar') ? 'Masjid Dasar' : 'Umum';
  return { slug, title, kind, packageName, doc };
});
export const materials = documents.filter(d => d.slug.startsWith('paket/') && !['paket/mushola-starter','paket/masjid-dasar'].includes(d.slug));

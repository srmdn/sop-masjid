"""Validate local links and public-only output after an Astro build."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import re

root = Path('dist')
base = '/sop-masjid/'
errors = []
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.links = []; self.ids = set()
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs: self.ids.add(attrs['id'])
        for key in ('href', 'src'):
            if key in attrs: self.links.append(attrs[key])
pages = {}
for path in root.rglob('*.html'):
    text = path.read_text()
    page = Page(); page.feed(text); pages[path] = page
    if re.search(r'raudhatul|Boss Said|BEGIN (?:RSA |EC )?PRIVATE KEY|gcp-service-account|\.local/', text, re.I):
        errors.append(f'{path}: internal content marker')
for path, page in pages.items():
    for link in page.links:
        url = urlsplit(link)
        if url.scheme or url.netloc: continue
        if not url.path: target = path
        elif not url.path.startswith(base):
            errors.append(f'{path}: link outside base {link}'); continue
        else:
            target = root / unquote(url.path[len(base):])
            if target.is_dir(): target /= 'index.html'
        if not target.is_file(): errors.append(f'{path}: missing {link}')
        elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
            errors.append(f'{path}: missing anchor {link}')
for path in root.rglob('*'):
    if path.suffix in {'.xlsx','.docx','.pem','.key'}:
        errors.append(f'{path}: unexpected public file')
if errors:
    print('\n'.join(errors)); raise SystemExit(1)
print(f'PASS: {len(pages)} pages, local links/anchors, base path, public-only output')

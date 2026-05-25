# AGENTS.md — sop-masjid

## Project
- Open-source SOP/template/checklist toolkit for mosque/musholla management
- Website: VitePress (`docs/`), deployed to GitHub Pages
- Target audience: Indonesian mosque admins (non-technical)

## Package Terminology
- Paket Mushola Starter (`mushola-starter`) — mushola/surau kecil
- Paket Masjid Dasar (`masjid-dasar`) — masjid dengan operasional rutin
- Paket Masjid Aktif (`masjid-aktif`) — masjid dengan kegiatan rutin
- Paket Masjid Lengkap (`masjid-lengkap`) — masjid dengan tata kelola lengkap
- Paket Keuangan Masjid (`keuangan-masjid`) — modul tambahan keuangan
- Paket Ramadhan (`ramadhan`) — modul musiman
- Paket Kurban (`kurban`) — modul musiman
- Paket Digital Admin (`digital-admin`) — modul tambahan digital
- Paket Serah Terima Pengurus (`serah-terima-pengurus`) — modul tambahan serah-terima
- NEVER use location-based names like "kampung", "kota", "perumahan" in package names
- Use neutral, operation-based terms that scale by complexity, not geography

## Conventions
- `.local/` — project manifests, PRD, internal planning docs (gitignored)
- Content language: Indonesian
- SOP structure: Tujuan → Peralatan → Langkah → Catatan
- Templates: Google Sheets/Docs link-only in repo, never raw `.xlsx`/`.docx`
- Dual license: MIT (code), CC BY-SA 4.0 (content)
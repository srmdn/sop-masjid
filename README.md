# SOP Masjid

Toolkit SOP, template, dan checklist operasional masjid/mushola — open source, siap pakai.

**[Buka Website →](https://srmdn.github.io/sop-masjid/)**

## Untuk Siapa?

- **Pengurus mushola/masjid**: Baca panduan, sesuaikan, dan cetak checklist. Tidak perlu paham GitHub.
- **Kontributor**: Tambah SOP baru, perbaiki template, usulkan paket via pull request.

## Mulai dari Mana?

Kunjungi [Mulai di Sini](https://srmdn.github.io/sop-masjid/mulai) — pilih paket sesuai kebutuhan operasional masjid/mushola kamu.

## Paket

| Paket | Status |
|---|---|
| [Paket Mushola Starter](https://srmdn.github.io/sop-masjid/paket/mushola-starter/) | Panduan tersedia; salinan Google belum tersedia |
| [Paket Masjid Dasar](https://srmdn.github.io/sop-masjid/paket/masjid-dasar/) | Panduan adaptasi tersedia; belum teruji di lapangan |
| Masjid Aktif, Masjid Lengkap, Keuangan Masjid, Ramadhan, Kurban, Digital Admin, Serah Terima Pengurus | Dalam rencana; belum tersedia sebagai paket lengkap |

## Lisensi

- **Kode**: [MIT](LICENSE)
- **Konten** (SOP, template, checklist): [CC BY-SA 4.0](LICENSE)

## Berkontribusi

Lihat [CONTRIBUTING.md](CONTRIBUTING.md).

## Pengembangan lokal

Website memakai Astro static. Konten Markdown ada di `docs/`, layout dan
halaman di `src/`.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

URL dasar `/sop-masjid/` dipertahankan untuk GitHub Pages. Hasil build ada
di `dist/`. Dokumen internal berada di `.local/` dan tidak ikut build.
Tautan salinan Google Sheets belum tersedia; halaman template menampilkan
struktur serta panduan pengisian.

Validasi tautan dan batas konten publik setelah build:

```sh
python3 scripts/check-build.py
```

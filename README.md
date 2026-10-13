# SOP Masjid

Toolkit SOP, template, dan checklist operasional masjid/mushola — open source, untuk disesuaikan bersama pengurus.

**[Buka Website →](https://srmdn.github.io/sop-masjid/)**

## Untuk Siapa?

- **Pengurus mushola/masjid**: Baca panduan, sesuaikan, dan cetak checklist. Tidak perlu paham GitHub.
- **Kontributor**: Tambah SOP baru, perbaiki template, usulkan paket via pull request.

## Mulai dari Mana?

Kunjungi [Mulai di Sini](https://srmdn.github.io/sop-masjid/mulai) — pilih paket sesuai kebutuhan operasional masjid/mushola kamu.

## Template

[Daftar seluruh template dan statusnya](https://srmdn.github.io/sop-masjid/template/):
template kas, jadwal petugas, dan checklist operasional tersedia untuk disalin; 20 template lainnya belum tersedia sebagai
file Google. Sebagian rancangan sudah dapat dibaca.

## Paket

| Paket | Status |
|---|---|
| [Paket Mushola Starter](https://srmdn.github.io/sop-masjid/paket/mushola-starter/) | Panduan tersedia; template kas dan jadwal petugas Google Sheets dapat disalin |
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
Template kas, jadwal petugas, dan checklist operasional Google
Sheets tersedia sebagai master dan contoh simulasi. [Katalog template](https://srmdn.github.io/sop-masjid/template/)
memuat tautan file serta panduan penggunaan. Sebagian template lainnya masih
berupa struktur dan panduan pengisian.

Validasi tautan dan batas konten publik setelah build:

```sh
python3 scripts/check-build.py
```

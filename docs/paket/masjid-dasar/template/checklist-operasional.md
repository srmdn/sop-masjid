# Template Checklist Operasional

T04 mencatat hasil pemeriksaan per layanan atau shift, pemeriksaan hasil,
dan pekerjaan yang masih perlu ditindaklanjuti. Lima kelompok tugasnya adalah
kesiapan shalat, kebersihan, buka/akhir layanan, Jumat, dan pemeriksaan berkala.

## File

- [Master — buat salinan untuk masjidmu](https://docs.google.com/spreadsheets/d/1xkUJ594gJ2GGZMsana-ywqBqVYTBPZyMvIyyetgqfKA/edit)
- [Contoh simulasi Masjid Contoh](https://docs.google.com/spreadsheets/d/14QsxscWWQWb2MImVSWTfsfrztZIGIODwyhlO7Kday4M/edit)

Master menyediakan 23 usulan tugas; pengaturan lokal dan log pelaksanaannya
kosong. Contoh memakai nilai rekaan dan label peran. Skenario termasuk air
tidak mengalir, lantai masih basah, penguncian ditunda karena kegiatan,
layanan 24 jam, isian belum lengkap, dan catatan ganda. Contoh belum diuji
di lapangan dan tidak menetapkan jadwal atau mandat untuk masjid pengguna.

## Cara memakai

1. Buat salinan master. Isi **Pengaturan Lokal** bersama pengurus: jam
   layanan, area, peran/pengganti, pemeriksa, pemicu pemeriksaan, perangkat
   yang tetap menyala, serta aturan akhir layanan dan eskalasi.
2. Sesuaikan **Daftar Tugas**, terutama hasil minimum, area, dan frekuensi.
   Setiap tugas mempunyai ID unik. Buat ID berbeda untuk area atau versi
   baru; jangan mengubah isi tugas yang sudah dipakai dalam riwayat.
3. Siapkan baris **Pemeriksaan** untuk tugas yang berlaku pada satu layanan.
   Gunakan satu ID layanan untuk satu tanggal dan layanan/shift. Kombinasi
   ID layanan + ID tugas hanya dipakai satu kali. Tugas yang sama untuk area
   berbeda memerlukan ID tugas terpisah.
4. Isi tanggal, layanan/shift, ID tugas, area aktual, petugas, waktu catat,
   dan hasil. Kolom E serta S:U berisi rumus; isi A:D dan F:R. Log cukup
   lebar, sehingga sebagian kolom perlu digulir ke kanan. Kolom pengenal
   dan baris judul dibekukan.
5. Untuk **Terkendala**, isi temuan, tindakan, rujukan log, PJ tindak lanjut,
   tenggat, dan status. Untuk **Tidak berlaku**, tulis alasan/dasar lokal.
   Selama T06 belum tersedia sebagai file Google, rujukan log internal manual
   dapat digunakan. Kerusakan atau kekurangan stok dapat merujuk ID T03.
6. Catat hasil pemeriksaan secara terpisah. **Diterima** dan **Perlu diulang**
   memerlukan pemeriksa serta tanggal/waktu pada Q, misalnya
   `13/10/2026 04:30`; tanggal pemeriksaan tidak boleh mendahului tanggal
   layanan. Kolom H hanya berisi jam catat, misalnya `04:25`. Perlu diulang memerlukan tindak lanjut
   berstatus Terbuka sampai pekerjaan dan pemeriksaan diperbarui.
7. Pilih tanggal mulai/akhir pada **Rekap**. Angka periode menghitung baris
   tugas, bukan jumlah layanan. Indikator seluruh log tetap menunjukkan
   isian tanpa tanggal, duplikasi, ID layanan yang tidak konsisten, dan
   tindak lanjut lengkap yang melewati tenggat.
8. Isi satu ID layanan pada **Cetak**. Pilih hanya A1:G sampai baris terakhir
   terisi, lalu cetak dalam orientasi lanskap dengan lebar disesuaikan.
   Tampilan ini menyediakan 40 tugas per ID. Jika melebihi batas, perluas
   rumus/tampilan terlebih dahulu. ID yang mencampur tanggal/shift ditandai
   dan daftar cetaknya ditahan sampai diperbaiki.

Pratinjau contoh Subuh dengan tiga tugas pada A1:G10 menghasilkan satu
halaman **A4 lanskap** setelah memilih **Sel yang dipilih / Selected cells**
dan **Sesuaikan lebar / Fit to width**. Mencetak seluruh tab membawa baris
kosong; pilih rentang terisi sesuai jumlah tugas.

## Tab dan hasil

| Tab | Fungsi |
|---|---|
| Baca Dulu | Petunjuk, batas tugas, privasi, sumber, kapasitas, dan lisensi. |
| Pengaturan Lokal | Keputusan yang perlu ditetapkan bersama pengurus. |
| Daftar Tugas | Usulan tugas yang dapat disesuaikan dengan area dan layanan. |
| Pemeriksaan | Catatan hasil pelaksanaan, pemeriksaan, serta tindak lanjut. |
| Rekap | Jumlah tugas menurut periode dan masalah isian pada seluruh log. |
| Cetak | Catatan tugas untuk satu ID layanan yang dipilih. |

Hasil pelaksanaan: **Selesai / Terkendala / Tidak berlaku**. Hasil pemeriksaan:
**Belum diperiksa / Diterima / Perlu diulang**. Isian kosong tetap perlu
dicatat. Status lengkap berarti isian yang diperiksa rumus telah terpenuhi;
keputusan keselamatan dan kelayakan layanan tetap memerlukan pemeriksaan
manusia yang sesuai.

## Batas tugas dan penyesuaian

- Periksa hasil yang dapat diamati. Lantai yang baru dipel masih dapat licin;
  kendalikan akses selama basah dan sediakan jalur yang dapat dilalui. Pilih
  bahan serta cara pembersihan menurut petunjuk permukaan/produk. [HSE — Cleaning](https://www.hse.gov.uk/slips/cleaning.htm)
- Ikuti label bahan, ventilasi, dan perlindungan yang diperlukan. Jangan
  mencampur pemutih/disinfektan dengan pembersih lain. [CDC — keselamatan bahan](https://www.cdc.gov/hygiene/about/cleaning-and-disinfecting-with-bleach.html)
- Tugas lampu, kipas, dan fasilitas rutin mencatat fungsi/gejala dari lokasi
  aman. Pekerjaan instalasi, pembongkaran, servis, atau ketinggian dilakukan
  pihak yang kompeten dengan cara kerja dan kewenangan yang sesuai.
- Periksa ruang dan jamaah/kegiatan sebelum penguncian. Untuk layanan
  24 jam, gunakan aturan pengamanan/serah-terima yang ditetapkan setempat.
- Uji audio seperlunya dengan kanal/pengaturan menurut layanan. Penggunaan
  speaker dalam/luar memiliki pedoman tersendiri. Mendengar suara saja tidak
  membuktikan hasil pengukuran desibel. [Kemenag — pedoman pengeras suara](https://sulteng.kemenag.go.id/berita/l7p8/menag-terbitkan-pedoman-penggunaan-pengeras-suara-di-masjid-dan-musala)
- Pemeriksaan jalur keluar atau akses APAR yang tersedia merupakan bagian
  pemeriksaan rutin. Jadwal servis, jumlah/jenis peralatan, kapasitas,
  kelayakan struktur, dan rencana darurat ditetapkan dengan pihak kompeten.
  Rujukan praktik: [GOV.UK — jalur keluar](https://www.gov.uk/workplace-fire-safety-your-responsibilities/fire-safety-and-evacuation-plans) dan [Gulkarmat DKI — APAR serta pelatihan](https://pemadam.jakarta.go.id/portal/artikel/2025-05-27_gerakan-masyarakat-punya-apar-gempar_qde3jj9).
- Rujukan HSE/GOV.UK/CDC dipakai untuk praktik keselamatan; tidak diperlakukan
  sebagai aturan hukum Indonesia. Materi sumber dan batas adaptasinya tersedia
  pada Baca Dulu. [Kemenkes — PHBS tempat umum](https://ayosehat.kemkes.go.id/?p=1644) juga menjadi rujukan kebersihan dasar.

## Kapasitas dan akses

Rumus awal mencakup **100 ID tugas dan 300 baris pemeriksaan**. Jika menambah
kapasitas, perpanjang tabel, formula, dropdown, perlindungan peringatan, serta
rujukan rekap/cetak. Peringatan rumus membantu mencegah pengubahan tanpa
sengaja; pemilik salinan tetap dapat mengeditnya.

Semua tab dapat dilihat penerima akses file. Batasi salinan kerja kepada
petugas terkait; kode akses, lokasi rahasia kunci, nomor telepon, serta data
pribadi yang tidak dibutuhkan disimpan terpisah. Tampilan cetak dapat memuat
catatan internal sehingga penerimanya juga perlu dipilih sesuai kebutuhan.

Rumus, perubahan input, dropdown, dan tampilan desktop Google Sheets telah
diperiksa dengan simulasi. Penggunaan pada aplikasi HP fisik, akun pengguna
lain, cetak fisik, dan praktik lapangan belum diverifikasi. Hubungan ke
T02/T03/T06/T07/T08 memakai rujukan manual, belum sinkronisasi antarfile.

## Lisensi

Konten: CC BY-SA 4.0. © srmdn / SOP Masjid. [Baca lisensi](https://creativecommons.org/licenses/by-sa/4.0/).

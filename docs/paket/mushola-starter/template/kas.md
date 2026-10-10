# Template Buku Kas dan Laporan Kas Masjid

Versi: 0.3 — 10 Oktober 2026. Template Google Sheets untuk pencatatan kas sederhana.

## Buka template

**Tersedia — Google Sheets dapat disalin.**

- [Master kosong — buat salinan untuk masjidmu](https://docs.google.com/spreadsheets/d/18LIm5UuJ6eXGEp0EYxxTrqvfNwpYz4Zr45SDGvVn9hk/edit)
- [Contoh terisi — simulasi Masjid Contoh](https://docs.google.com/spreadsheets/d/1JNwRx22bAiEXgIM3YSa1qeDNLVVrYkF2IXLxtXSZFKc/edit)

Kedua file dapat dilihat melalui tautan. Untuk mengisi, masuk ke akun Google,
buka master kosong, lalu pilih **File → Make a copy / Buat salinan**. Simpan
salinan di folder internal masjid. Tidak perlu Excel atau Numbers.
Gunakan bersama [SOP kas](../sop/kas-infak).

> Template ini membantu pencatatan kas masuk, kas keluar, dan ringkasan saldo
> masjid. Silakan sesuaikan dengan kebutuhan serta kondisi masing-masing masjid.
> Template ini bukan laporan keuangan lengkap sesuai standar akuntansi.
> Pengguna bertanggung jawab atas kebenaran data, bukti transaksi, dan pemeriksaan
> saldo. Contoh terisi merupakan simulasi.

## Isi template

Input transaksi sekali pada tab **Transaksi**; tab laporan mengambil data tersebut.

| Tab | Kegunaan | Yang diisi pengguna |
|---|---|---|
| Menu | Tautan antartab, panduan, dan status | Tidak perlu |
| Pengaturan | Identitas, periode, rekening, dana/program, kategori, anggaran, saldo awal dan aktual | Sel kuning muda |
| Transaksi | Pencatatan kas dan referensi bukti | Kolom A–N, baris 6–105 |
| Buku Kas | Rincian dan saldo berjalan per rekening | Pilih rekening di B3 |
| Rekap | Ringkasan harian dan periode | Tidak perlu |
| Program | Saldo dana dan realisasi belanja terhadap anggaran | Tidak perlu |
| Kuitansi | Bukti penerimaan dari ID transaksi | ID di B3; terbilang B15 dan nama/tanda tangan B17 manual |
| Laporan Jamaah | Ringkasan kas tanpa rincian identitas transaksi | Tidak perlu |
| Pemeriksaan | Isian bermasalah, transfer, dan selisih saldo | Lihat hasil, betulkan sumber input |

## Cara mulai

1. Buat salinan **master kosong**. Gunakan contoh terisi hanya untuk belajar.
2. Isi Pengaturan: nama masjid, periode pencatatan dan laporan, peran,
   rekening, dana/program, kategori, serta anggaran bila digunakan. Periode
   bawaan Oktober 2026 harus disesuaikan.
3. Isi saldo awal per kombinasi rekening dan dana/program. Saldo awal bukan
   pemasukan pada periode berjalan. Dana umum dapat memakai `Operasional Umum`.
4. Catat transaksi di A–N baris 6–105. Gunakan ID unik, tanggal DD/MM/YYYY,
   dan nominal angka tanpa mengetik `Rp`. Pilih jenis/rekening/program/kategori
   dari daftar. Tepat satu kolom Masuk atau Keluar berisi nominal positif.
5. Lengkapi referensi bukti, pencatat, dan pemeriksa. Pencatat dan pemeriksa
   berbeda. Simpan bukti dan data pihak transaksi secara internal.
6. Pada Pengaturan, isi saldo aktual tunai/rekening dan tanggal pemeriksaan
   sesuai akhir periode laporan. Bandingkan dengan saldo buku di Pemeriksaan.
7. Betulkan isian atau selisih sebelum membagikan laporan. Pilih rekening pada
   Buku Kas atau ID pemasukan pada Kuitansi sesuai keluaran yang diperlukan.

Pemindahan antarpenyimpanan menggunakan dua baris: keluar di rekening asal dan
masuk di rekening tujuan, dengan referensi transfer, dana, tanggal, dan nominal
sama. Pemindahan internal tidak menjadi donasi atau belanja luar.

## Pemeriksaan dan batas penggunaan

- Saldo akhir = saldo awal + pemasukan luar − pengeluaran luar untuk seluruh
  kas; transfer internal yang lengkap tidak mengubah total saldo.
- Status `Valid` dan `Siap ditinjau` merupakan hasil kontrol rumus, bukan bukti
  transaksi benar atau tanda persetujuan pengurus.
- Nominal Laporan Jamaah menampilkan `#N/A` jika pengisian atau rekonsiliasi
  belum lengkap/bermasalah. Master kosong memang belum menghasilkan laporan
  yang siap dibagikan. Perbaiki input; jangan menimpa hasil rumus dengan nol.
- Bagian otomatis memakai peringatan proteksi. Jika peringatan muncul, batalkan
  dan isi sel input. Pemilik salinan tetap dapat melanjutkan perubahan rumus.
- Kapasitas awal **100 transaksi**, maksimal baris 105; pengaturan menampung
  3 rekening, 4 program, 6 kombinasi saldo awal, dan 9 kategori. Menambah di
  luar kapasitas memerlukan perluasan semua rumus, dropdown, dan rentang terkait.
- Jika perlu menyortir input, pilih seluruh rentang **A6:N105**. Hindari
  menyortir satu kolom saja; O–Q adalah rumus kontrol.
- Belum mencakup utang, piutang, titipan, uang muka, aset atau penyusutan.
  Janji donasi belum diterima bukan kas masuk. Template ini belum dinilai
  kepatuhannya terhadap standar laporan keuangan nonlaba.

## Cetak dan bagikan

Untuk ringkasan jamaah, pilih **Laporan Jamaah A1:C26**. Untuk kuitansi,
pilih **Kuitansi A1:B20**, lengkapi terbilang serta nama/tanda tangan manual.
Pilih **File → Print → Selected cells**, A4, portrait, fit to width, dan
nonaktifkan gridlines. Periksa pratinjau serta status sebelum mencetak atau
menyimpan PDF melalui pilihan yang tersedia pada perangkatmu.

Bagikan PDF atau ringkasan terpisah kepada jamaah. Jangan membagikan seluruh
workbook internal: penerimanya dapat mengakses semua tab, termasuk tab yang
disembunyikan. Tautan bukti internal tetap memerlukan pengaturan akses sendiri.

## Pengujian versi ini

Rumus dan salinan diuji langsung di Google Sheets: perhitungan saldo, transfer,
ID ganda, input salah, pencocokan saldo aktual, tanggal/rupiah Indonesia,
pengurutan, pemulihan data, serta transaksi ke-100. Pratinjau laporan dan
kuitansi masing-masing satu halaman. Contoh simulasi memiliki 7 transaksi,
saldo awal Rp300.000, pemasukan Rp275.000, pengeluaran Rp40.000, dan saldo akhir
Rp535.000. Transfer internal tidak dihitung sebagai pemasukan/pengeluaran luar.

Belum diuji pada akun pengguna berbeda, HP asli/aplikasi Google Sheets, cetak
fisik, atau operasional lapangan. Browser dengan layar kecil perlu digeser
horizontal. Kompatibilitas Excel/Numbers belum diuji.

Lisensi konten: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
Silakan menyesuaikan dan membagikan kembali dengan atribusi SOP Masjid serta
lisensi yang sama sesuai ketentuan lisensi.

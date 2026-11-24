# Template Inventaris, Stok, Perawatan, dan Peminjaman

T03 memisahkan **aset yang dipakai berulang** dari **stok yang habis dipakai**. Satu workbook juga mencatat perubahan, pengadaan, perawatan, peminjaman, dan ringkasan pengingat.

## File

- [Master kosong — buat salinan untuk masjidmu](https://docs.google.com/spreadsheets/d/1DZS8TrwWmWRte_4kXB9kW4-k8xcDze6fApy14DT4ylc/edit)
- [Contoh simulasi Masjid Contoh](https://docs.google.com/spreadsheets/d/1o3V24B0p7fipV5k-LqNuXNa0LEpB4ESyubnvGRDFZ8Y/edit)

Contoh berisi nilai rekaan untuk menunjukkan alur; bukan data lapangan, rekomendasi batas stok, atau praktik yang telah diuji di masjid. Master sengaja kosong. Isi salinan kerja dengan data lokal seperlunya dan batasi aksesnya.

## Cara memulai

1. Buka master, lalu pilih **File → Buat salinan**. Tentukan pengurus yang mengisi dan memeriksa.
2. Tentukan format ID unik, lokasi penyimpanan, peran penanggung jawab, kategori, serta batas minimum stok yang disepakati setempat.
3. Masukkan aset satu per satu ke **Aset**. Gunakan **Mutasi Aset** untuk mencatat perubahan penting, lalu perbarui nilai terkini pada **Aset**.
4. Pisahkan bahan habis pakai di **Stok**. Isi saldo awal dan batas minimum; catat penerimaan, penggunaan, dan koreksi masing-masing satu kali di **Mutasi Stok** dengan jumlah positif.
5. Catat permintaan sampai penerimaan pada **Pengadaan**. Setelah barang benar-benar diterima, catat satu baris `Masuk` pada **Mutasi Stok** dengan ID permintaan yang sama. Pengeluaran uang dan bukti transaksinya tetap dicatat di T01.
6. Catat jadwal atau tindak lanjut perbaikan di **Perawatan**, serta barang keluar dan kembali di **Peminjaman**. Pengingat membantu menandai tenggat; tetap konfirmasikan kondisi dan tindakan kepada petugas terkait.
7. Lihat angka ringkas di **Ringkasan** dan cocokkan dengan catatan sumber. Formula hanya mencakup ruang baris awal yang tersedia; tambah baris dengan menyalin formula/validasi/format yang sesuai.

## Tab dalam workbook

| Tab | Fungsi |
|---|---|
| Baca Dulu | Cara penggunaan, privasi, batas kapasitas, dan lisensi. |
| Ringkasan | Hitungan aset, stok minimum, perawatan jatuh tempo, dan pinjaman terbuka/terlambat. |
| Aset | Satu baris untuk setiap barang tahan lama/peralatan, dengan status lokasi dan kondisi terkini. |
| Mutasi Aset | Riwayat perubahan aset; jangan menghapus riwayat barang hilang atau dihapus. |
| Stok | Saldo awal, batas minimum lokal, saldo hasil mutasi, serta lokasi dan peran penanggung jawab. |
| Mutasi Stok | Catatan `Masuk`, `Keluar`, dan koreksi. Saldo dihitung dari tab ini. |
| Pengadaan | Permintaan, persetujuan, pemesanan, penerimaan, dan rujukan transaksi T01. |
| Perawatan | Jadwal, keluhan, kebutuhan teknisi, status, hasil, dan pengingat. Ikuti petunjuk alat dan kompetensi pelaksana. |
| Peminjaman | Kondisi saat keluar/kembali, tenggat, status, dan pengingat keterlambatan. |

## Batas dan privasi

- Status stok adalah pengingat pada atau di bawah batas minimum yang ditetapkan masjid; angka itu bukan rekomendasi standar.
- Saldo stok mengikuti mutasi yang dicatat, bukan pemeriksaan fisik otomatis. Rekonsiliasi dengan stok nyata secara berkala.
- Catatan pinjaman di versi ini hanya memuat satu peminjam, satu pengembalian, dan status sederhana. Aturan kelayakan barang, persetujuan, pengembalian sebagian, dan tindak lanjut kehilangan perlu ditetapkan pengurus sesuai kebutuhan lokal.
- Gunakan nama/peran seperlunya. Hindari nomor telepon, alamat, identitas sensitif, dan tautan bukti yang memberi akses lebih luas dari kebutuhan.
- Workbook memiliki beberapa tab kerja. Siapa pun yang mendapat akses file dapat melihat semua tab; menyembunyikan tab bukan kontrol akses. Jangan membagikan salinan kerja berisi data aktual sebagai contoh publik.
- T03 mencatat kebutuhan dan rujukan, bukan saldo kas. Catat transaksi uang di [T01 — Kas Masuk-Keluar](./kas).

## Lisensi

Konten: CC BY-SA 4.0. © srmdn / SOP Masjid. [Baca lisensi](https://creativecommons.org/licenses/by-sa/4.0/).

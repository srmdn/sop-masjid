# SOP Pencatatan Inventaris dan Stok Mushola

Panduan untuk mencatat aset, persediaan, perawatan, dan peminjaman menggunakan aturan yang disepakati pengurus.

## Tujuan

- Mengetahui barang yang tersedia, kondisi/lokasinya, dan tindak lanjut yang masih berjalan.
- Memisahkan aset yang digunakan berulang dari stok habis pakai.
- Menyediakan jejak perubahan serta rujukan pengadaan/perawatan tanpa membuat catatan kas tandingan.

## Peralatan

- [Template T03 — Inventaris, Stok, Perawatan, dan Peminjaman](../template/inventaris.md), salinannya, atau buku kerja setempat.
- Daftar barang, aturan akses, batas minimum stok, dan pembagian peran yang telah disepakati.
- Petunjuk pabrik atau rujukan teknisi yang sesuai untuk pemeriksaan/perbaikan.

## Langkah

1. **Tetapkan cara pencatatan.** Pengurus menentukan ID unik, kategori, lokasi, penanggung jawab (peran), siapa yang mencatat/memeriksa, dan akses ke salinan kerja.
2. **Catat aset.** Masukkan barang tahan lama/peralatan satu per satu ke tab Aset. Catat kondisi dan status keberadaan sesuai pemeriksaan. Jangan menebak tanggal atau nilai perolehan; gunakan “tidak diketahui” bila perlu.
3. **Catat perubahan.** Simpan perubahan lokasi, kondisi, status pinjam, kehilangan/penemuan, atau penghapusan pada Mutasi Aset. Perbarui status terkini di Aset tanpa menghapus riwayat. Pastikan dugaan kehilangan diperiksa sebelum status diubah.
4. **Catat stok.** Masukkan barang habis pakai ke Stok dengan satuan konsisten, saldo awal terverifikasi, dan batas minimum yang diputuskan secara lokal. Catat setiap barang masuk/keluar atau koreksi satu kali pada Mutasi Stok; gunakan jumlah positif dan tipe mutasi yang benar.
5. **Kelola pengadaan.** Catat permintaan, keputusan sesuai mandat, pemesanan, dan penerimaan pada Pengadaan. Setelah barang diterima, masukkan satu mutasi `Masuk` yang merujuk ID permintaan. Catat nilai dan pembayaran pada T01 sesuai prosedur kas masjid.
6. **Jadwalkan perawatan.** Gunakan petunjuk alat, kondisi, dan jadwal lokal. Catat keluhan, tenggat, status, serta hasil. Pekerjaan yang memerlukan kompetensi, kewenangan, atau perlindungan khusus diteruskan kepada teknisi yang sesuai.
7. **Catat peminjaman.** Sebelum barang keluar, periksa kondisi, catat tenggat dan peran/nama seperlunya. Saat barang kembali, catat tanggal serta kondisi dan tindak lanjuti keterlambatan/kehilangan. Perbarui status keberadaan aset dan riwayat mutasinya.
8. **Periksa ringkasan dan catatan nyata.** Cocokkan pengingat stok, perawatan, dan pinjaman dengan pemeriksaan fisik atau konfirmasi kepada petugas. Ringkasan formula bukan bukti pemeriksaan fisik.

## Catatan

- Jadwal, batas stok, kategori, izin pinjam, dan siapa yang berwenang menyetujui ditetapkan pengurus sesuai kondisi masjid; template tidak menetapkan angka atau mandat tersebut.
- Batasi akses ke data peminjam dan catatan barang. Hindari nomor telepon atau data pribadi yang tidak diperlukan. Jangan memakai master/contoh publik untuk memasukkan data aktual.
- Semua tab dalam satu workbook dapat terlihat oleh penerima akses file. Menyembunyikan tab tidak membatasi akses.
- T03 mencatat kebutuhan, penerimaan, dan rujukan saja; transaksi kas dicatat pada [SOP Pengelolaan Kas Infak Sederhana](./kas-infak) dan T01.
- Template adalah alat bantu awal, bukan bukti bahwa prosedur telah diuji di lapangan atau sesuai untuk setiap masjid.

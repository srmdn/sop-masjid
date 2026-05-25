# Template Kas Masuk-Keluar

Template spreadsheet untuk mencatat pemasukan dan pengeluaran kas mushola secara harian, rapi, dan transparan.

## Cara Dapatkan

### Opsi 1: Download CSV (langsung pakai)

1. Download file CSV di bawah
2. Buka [Google Sheets](https://sheets.google.com) → **File → Import → Upload**
3. Pilih file CSV → **Import data**
4. Ulangi untuk sheet kedua
5. Mulai catat transaksi

| Sheet | Download |
|---|---|
| Buku Kas Harian | [kas-harian.csv](/template/kas-harian.csv) |
| Rekap Bulanan | [kas-rekap.csv](/template/kas-rekap.csv) |

### Opsi 2: Google Sheet template *(segera hadir)*

::: info Template Google Sheet siap pakai
Template Google Sheet yang bisa langsung disalin dengan **File → Buat Salinan** akan tersedia segera.

Sementara itu, gunakan Opsi 1 (CSV) di atas — hasilnya sama.
:::

## Struktur Template

Template terdiri dari beberapa **sheet** (tab):

### Sheet 1: Buku Kas Harian

| Kolom | Keterangan | Contoh Isi |
|---|---|---|
| No | Nomor urut transaksi | 1 |
| Tanggal | Format: DD/MM/YYYY | 15/06/2025 |
| Jenis | Pemasukan / Pengeluaran | Pemasukan |
| Sumber / Tujuan | Dari mana uang masuk, atau untuk apa uang keluar | "Infak Kotak Jumat" / "Beli Sabun Cuci Tangan" |
| Jumlah | Nominal dalam Rupiah (tanpa Rp) | 150000 |
| Saldo | Saldo setelah transaksi ini (dihitung otomatis dengan rumus) | 1.250.000 |
| Keterangan | Info tambahan | "Dibelikan di Toko A" |
| Bukti | Link foto kwitansi/struk (jika ada) | — |

### Sheet 2: Rekap Bulanan

| Kolom | Keterangan |
|---|---|
| Bulan | Nama bulan & tahun |
| Total Pemasukan | Jumlah semua pemasukan bulan ini (dihitung otomatis) |
| Total Pengeluaran | Jumlah semua pengeluaran bulan ini (dihitung otomatis) |
| Saldo Awal | Saldo dari akhir bulan sebelumnya |
| Saldo Akhir | Saldo Awal + Pemasukan − Pengeluaran (dihitung otomatis) |
| Catatan Bulanan | Info tambahan (rencana pengeluaran besar, dll) |

## Cara Isi

### Mencatat Pemasukan

1. **Tentukan sumber** — tulis di kolom "Sumber / Tujuan" dari mana uang berasal:
   - "Infak Kotak Harian"
   - "Infak Jumat"
   - "Donasi dari Bpk. Ahmad"
   - "Transfer dari Bank"
2. **Pilih "Pemasukan"** di kolom Jenis.
3. **Tulis jumlah** — angka saja, tanpa "Rp" atau titik ribuan (contoh: `150000`). Spreadsheet bisa diformat otomatis.
4. **Saldo akan otomatis bertambah** — jika menggunakan rumus. Saldo awal diisi manual sekali.

### Mencatat Pengeluaran

1. **Tentukan tujuan** — tulis di kolom "Sumber / Tujuan" untuk apa uang dikeluarkan:
   - "Beli Sabun Cuci Tangan"
   - "Bayar Listrik Bulan Juni"
   - "Perbaikan Kran Air"
2. **Pilih "Pengeluaran"** di kolom Jenis.
3. **Simpan bukti** — foto kwitansi/struk dengan HP. Jika memungkinkan, masukkan link foto ke kolom "Bukti".
4. **Saldo akan otomatis berkurang** — jika menggunakan rumus.

### Rumus yang Disarankan

Di kolom **Saldo**, gunakan rumus:
```
=IF(B2="","", IF(D2="Pemasukan", G1+E2, G1-E2))
```
*(B2 = Tanggal, D2 = Jenis, G1 = Saldo sebelumnya, E2 = Jumlah)*

Ini akan otomatis menghitung saldo tanpa harus menghitung manual.

## Tips

- **Catat setiap hari** — jangan ditunda. Semakin lama ditunda, semakin besar kemungkinan lupa dan selisih.
- **Jangan gabung transaksi** — setiap pemasukan dan pengeluaran dicatat terpisah. Jangan gabung "Infak Senin + Selasa" dalam satu baris.
- **Cek saldo fisik mingguan** — cocokkan jumlah uang di kotak penyimpanan dengan saldo di spreadsheet. Jika selisih, telusuri transaksi minggu itu.
- **Foto bukti** — biasakan memfoto kwitansi atau struk segera setelah belanja. Simpan di folder Google Drive yang sama.
- **Transparan ke jamaah** — cetak rekap bulanan dan tempel di papan pengumuman. Jamaah yang tahu uangnya tercatat rapi akan lebih percaya.
- **Gunakan warna** — beri warna hijau untuk baris Pemasukan, merah untuk Pengeluaran. Mata langsung tahu apakah bulan ini surplus atau defisit.

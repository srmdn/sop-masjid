# Template Kas Masuk-Keluar

Versi: 0.2 — 9 Oktober 2026. Struktur tabel dan contoh rumus, bukan file siap pakai.

## Ketersediaan

Salinan Google dan file unduhan belum tersedia. Buat tabel di buku atau
aplikasi pilihanmu. Gunakan bersama [SOP kas](../sop/kas-infak).
Simpan catatan transaksi dan bukti secara internal.

## Buku kas per penyimpanan

Buat satu buku/tabel untuk tunai dan masing-masing rekening, dengan periode
serta saldo awal yang diperiksa. Jangan mencampur saldo semua tempat ke dalam
buku tunai. Gunakan susunan kolom berikut jika mencoba rumus di bawah.

| Kolom | Isi | Contoh simulasi |
|---|---|---|
| A — No | Nomor transaksi/ref pemindahan | TR-001 |
| B — Tanggal | Nilai tanggal, tampilkan DD/MM/YYYY | 09/10/2026 |
| C — Jenis | Pemasukan / Pengeluaran / Pemindahan masuk / Pemindahan keluar | Pemasukan |
| D — Sumber/tujuan | Asal donasi, kebutuhan belanja, atau penyimpanan tujuan | Infak harian |
| E — Jumlah | Angka rupiah positif, tanpa mengetik Rp atau pemisah ribuan | 50000 |
| F — Saldo | Saldo berjalan; hitung manual atau dengan rumus | 150000 |
| G — Keterangan | Dasar izin, pencatat/pemeriksa, serta kendala | Pemeriksa kas bertugas |
| H — Bukti | Nomor/link bukti internal | HITUNG-001 |
| I — Pemeriksaan input | Rumus: Kosong / Valid / Periksa input | Valid |

Bukti dan izin tetap diperiksa orang; status `Valid` hanya memeriksa beberapa
isian, bukan membuktikan transaksi benar. Nomor referensi, bukti, dan hasil
pemeriksaan orang tidak boleh diabaikan hanya karena rumus menghasilkan saldo.

## Cara mencatat

1. Isi saldo awal yang diperiksa, bukan memasukkannya sebagai pemasukan.
2. Catat transaksi menurut urutan tanggal. Pilih jenis persis dari daftar dan
   isi sumber/tujuan serta angka positif. Nol, angka negatif, atau teks nominal
   perlu diperiksa, bukan dipakai sebagai transaksi biasa.
3. Catat penerimaan donatur pada penyimpanan yang menerima, belanja pada yang
   membayar. Pemindahan antarpenyimpanan memakai dua catatan dengan nomor
   referensi yang sama: keluar di asal dan masuk di tujuan.
4. Simpan bukti, izin belanja, pencatat, dan pemeriksa. Periksa nomor referensi
   agar transaksi tidak tercatat dua kali.

## Contoh rumus saldo

Contoh ditulis dengan alamat sel Google Sheets. Pada baris 1 buat judul kolom
A–I, pada D2 tulis `Saldo awal`, dan isi F2 dengan saldo awal numerik yang
sudah diperiksa (misalnya `100000`). Biarkan B2, C2, dan E2 kosong.
Transaksi pertama dimulai pada baris 3.

Pada I3, periksa isian B–E:

```text
=IF(COUNTA(B3:E3)=0,"Kosong",IF(AND(ISNUMBER(B3),B3>0,OR(C3="Pemasukan",C3="Pengeluaran",C3="Pemindahan masuk",C3="Pemindahan keluar"),D3<>"",ISNUMBER(E3),E3>0),"Valid","Periksa input"))
```

Pada F3, hitung hanya jika input valid dan saldo sebelumnya berupa angka:

```text
=IF(I3="Kosong",F2,IF(AND(I3="Valid",ISNUMBER(F2)),F2+IF(OR(C3="Pemasukan",C3="Pemindahan masuk"),E3,-E3),NA()))
```

Salin **kedua rumus** ke bawah. Referensi F2/B3 dan seterusnya harus ikut
bergeser. Baris kosong membawa saldo sebelumnya tanpa menambah transaksi.
Input salah menghasilkan `Periksa input` dan saldo `#N/A`; baris berikutnya
belum menghasilkan saldo sampai kesalahan sebelumnya diperbaiki. Jangan
menggantinya dengan nol atau menyembunyikan kesalahan memakai IFERROR.

Kolom tanggal harus berupa nilai tanggal aplikasi, bukan teks yang hanya
terlihat seperti tanggal. Pemeriksaan angka positif belum memastikan tanggal
berada dalam periode buku; pemeriksa tetap mencocokkannya. Format angka saldo
boleh memakai pemisah ribuan. Jangan mengetik ulang hasil rumus.

Setelan lokal tertentu memakai titik koma sebagai pemisah argumen. Numbers
memakai tabel dan referensi yang perlu disesuaikan; contoh ini belum diuji
langsung di Numbers atau Excel. Jika rumus belum berhasil, gunakan hitungan
manual dengan pemeriksa. Jangan menjadikan buku percobaan sebagai catatan kas
resmi sebelum hasilnya cocok dengan skenario berikut.

### Skenario sebelum dipakai

| Simulasi dengan saldo awal 100000 | Hasil yang diharapkan |
|---|---|
| Pemasukan 50000, lalu pengeluaran 20000 | 150000, lalu 130000 |
| Baris B–E kosong di antara dua transaksi di atas | Saldo tetap 150000 di baris kosong; berikutnya 130000 |
| Salah ketik jenis, tanggal teks/kosong, sumber kosong, atau nominal teks/nol/negatif | Periksa input; saldo #N/A |
| Transaksi valid setelah baris salah | Saldo tetap #N/A sampai baris salah dibetulkan |
| Pemindahan keluar 30000 dari tunai ke bank | Tunai turun 30000, bank naik 30000; total tidak berubah |
| Periode baru dengan saldo awal 130000, lalu pemasukan 10000 | 140000 |

Jika menyortir transaksi, pilih seluruh baris transaksi A–I, jangan ikutkan
baris saldo awal. Setelahnya salin ulang rumus I3/F3 ke seluruh baris transaksi
agar rantai referensi tetap sesuai urutan, lalu periksa kembali saldo akhir.

## Rekap bulanan dan pemeriksaan

Rekap berikut diisi dari transaksi yang sudah diperiksa; rumus rekap otomatis
belum disediakan. Buat satu rekap per penyimpanan/periode.

| Hal yang dicatat | Isian |
|---|---|
| Periode dan penyimpanan | [isi] |
| Saldo awal yang diperiksa | [isi] |
| Pemasukan dari luar | [jumlah jenis Pemasukan] |
| Pengeluaran ke luar | [jumlah jenis Pengeluaran] |
| Pemindahan masuk / keluar | [jumlah masing-masing jenis, dengan pasangan referensi] |
| Saldo akhir buku | [saldo awal + pemasukan − pengeluaran + pemindahan masuk − pemindahan keluar] |
| Saldo aktual dan tanggal pemeriksaan | [uang fisik atau saldo rekening sesuai penyimpanan] |
| Selisih dan tindak lanjut | [saldo aktual − saldo buku; alasan, PJ, tenggat] |
| Pencatat dan pemeriksa | [isi peran/nama pada salinan internal] |

Untuk rekap seluruh masjid, jumlahkan saldo penyimpanan dan cocokkan pasangan
pemindahan. Pemindahan internal tidak dihitung sebagai donasi atau belanja.
Uang muka/pemindahan belum selesai dan selisih harus dijelaskan terpisah;
jangan menyatakan semua saldo cocok jika masih ada yang belum diperiksa.
Publikasikan ringkasan tanpa kontak, nomor rekening lengkap, atau bukti pribadi.

Referensi fungsi: [IF](https://support.google.com/docs/answer/3093364?hl=en)
dan [NA](https://support.google.com/docs/answer/3093359?hl=en) pada dokumentasi
Google Sheets. Referensi fungsi bukan bukti pengujian lintas aplikasi.

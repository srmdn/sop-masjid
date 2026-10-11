# Template Jadwal Petugas dan Pengganti

Format kerja untuk menjadwalkan imam, muadzin, khatib, dan petugas lain yang
ditetapkan masjid. Gunakan bersama [SOP jadwal dan pengganti](/paket/masjid-dasar/sop-inti/#sop-01--jadwal-dan-pengganti-petugas-ibadah)
dan isi aturan setempat pada [lembar pengaturan lokal](/paket/masjid-dasar/pengaturan-lokal/).

## Ketersediaan

**Tersedia sebagai Google Sheets.** [Buka master kosong dan buat salinan](https://docs.google.com/spreadsheets/d/1xDe9tmztWr9O2UvfJzhZlQaZaMzGFzL8C-EBuhGFtfY/edit)
untuk mulai mengisi. [Lihat contoh simulasi Masjid Contoh](https://docs.google.com/spreadsheets/d/1k5bVCqyh_VfTxeewwUspXpSVKB4KeMBwYSjue86KF1A/edit).
Contoh memakai data tiruan, bukan jadwal yang disetujui atau diuji di lapangan.

Salin master ke akun sendiri sebelum memasukkan data. Workbook memuat tab
internal untuk kontak/ketersediaan, perubahan, dan kehadiran; jangan bagikan
salinan kerja secara publik. Untuk mengumumkan jadwal, salin hanya Tampilan
Jamaah ke berkas terpisah setelah memeriksa penugasan.

Susunan ini adalah format awal; batas konfirmasi, peran, dan kanal
pemberitahuan ditetapkan pengurus setempat.

## Sebelum mengisi

- Gunakan satu jadwal resmi dan tetapkan siapa yang memperbarui serta
  menyampaikan perubahan.
- Catat satu baris untuk setiap tanggal, layanan, dan fungsi. Jika satu orang
  menjalankan dua fungsi, catat terpisah agar benturan tugas terlihat.
- Pengganti hanya dicatat setelah menyatakan bersedia dan menerima penugasan.
  Nama yang dimasukkan atau pesan yang terkirim belum berarti tugas disetujui.
- Simpan nomor kontak, ketersediaan rinci, alasan berhalangan, serta catatan
  kehadiran di berkas internal dengan akses terbatas. Jangan tampilkan pada
  tampilan jadwal petugas untuk jamaah.
- Jangan membagikan seluruh spreadsheet sebagai jadwal publik: tab internal
  tetap dapat dilihat penerima berkas. Salin hanya kolom yang diperlukan ke
  tampilan jadwal petugas untuk jamaah, setelah tugas lengkap, dikonfirmasi,
  dan bebas benturan.
- Saat mencetak jadwal berkala, pilih hanya rentang baris yang akan dipakai;
  lembar kerja menyediakan banyak baris kosong untuk pengisian berikutnya.

## Susunan lembar kerja

### 1. Pengaturan peran

| Fungsi/tugas | Layanan yang memakai | Kriteria/ketentuan lokal | Penanggung jawab jadwal | Tenggat konfirmasi |
|---|---|---|---|---|
| Imam | [Subuh/dll.] | [isi sesuai ketentuan masjid] | [peran] | [tanggal/jam sebelum layanan] |
| Muadzin | [Subuh/dll.] | [isi jika ada ketentuan] | [peran] | [tanggal/jam sebelum layanan] |
| Khatib | [Jumat jika diselenggarakan] | [isi sesuai ketentuan masjid] | [peran] | [misalnya H-3, jika disepakati] |
| [Tugas lain] | [layanan] | [isi] | [peran] | [isi] |

Jangan menganggap kriteria atau batas waktu contoh sebagai aturan semua masjid.
Tugas Jumat, bilal, atau kegiatan lain dapat dihapus jika tidak digunakan.

### 2. Ketersediaan dan kontak — internal

| ID petugas | Nama/peran internal | Fungsi yang dapat dijalankan | Tanggal/waktu tersedia atau tidak tersedia | Kontak internal | Terakhir diperbarui |
|---|---|---|---|---|---|
| P-01 | [isi pada salinan internal] | [fungsi] | [periode/keterangan secukupnya] | [nomor/kanal internal] | [tanggal] |

Batasi akses ke petugas yang menyusun jadwal. Isi alasan ketidaktersediaan
hanya jika diperlukan untuk koordinasi. Jangan menyalin lembar ini ke papan
pengumuman atau keluaran publik.

### 3. Jadwal

| ID jadwal | Tanggal dan waktu | Layanan/kegiatan | Fungsi | Petugas utama | Status konfirmasi | Cadangan yang bersedia | Status pengganti | Terakhir diperbarui oleh/pada |
|---|---|---|---|---|---|---|---|---|
| J-001 | [tanggal/jam] | [shalat/kegiatan] | Imam | Imam Cadangan (simulasi) | Terkonfirmasi | Imam Utama (simulasi) | Diterima | [peran/tanggal] |
| J-002 | [tanggal/jam] | [shalat/kegiatan] | Muadzin | Muadzin Bertugas (simulasi) | Terkonfirmasi | Muadzin Cadangan (simulasi) | Belum diperlukan | [peran/tanggal] |

Status konfirmasi yang disarankan: `Belum diminta`, `Menunggu jawaban`,
`Terkonfirmasi`, atau `Berhalangan`. Status pengganti: `Belum diperlukan`,
`Menunggu jawaban`, `Diterima`, atau `Belum ada pengganti`. Sesuaikan daftar
ini bila pengurus memakai istilah lain.

### 4. Konfirmasi dan perubahan — internal

Catat setiap perubahan sebagai baris baru agar jadwal lama dan tindakan yang
diambil dapat ditelusuri.

| ID perubahan | ID jadwal | Waktu dicatat | Pemicu/perubahan | Petugas sebelumnya | Pengganti yang dihubungi | Jawaban pengganti | Jadwal setelah perubahan | Diberitahukan kepada/pada |
|---|---|---|---|---|---|---|---|---|
| C-001 | J-001 | [tanggal/jam] | Contoh simulasi: petugas berhalangan | Imam Utama (simulasi) | Imam Cadangan (simulasi) | Diterima | Imam Cadangan (simulasi) | [peran/tanggal] |

Jika pengganti belum menerima, biarkan tugas berstatus belum terisi dan teruskan
kepada penanggung jawab sesuai urutan kontak lokal. Jangan menampilkan alasan
pribadi pada keluaran jamaah.

### 5. Kehadiran dan pelaksanaan — internal

| ID jadwal | Petugas terjadwal | Hasil pemeriksaan sebelum layanan | Pelaksana aktual | Hadir/tidak hadir | Waktu diperiksa | Tindak lanjut/ID kendala |
|---|---|---|---|---|---|---|
| J-001 | Imam Cadangan (simulasi) | Petugas hadir | Imam Cadangan (simulasi) | Hadir | [tanggal/jam] | Contoh simulasi; sesuaikan |

Periksa dan catat kehadiran sesuai kesepakatan lokal. Catatan ini untuk
koordinasi internal, bukan penilaian otomatis terhadap petugas. Jika tidak
hadir atau layanan terancam terganggu, hubungi pengganti/koordinator dan catat
penyelesaian atau rujukan ke log kendala.

### 6. Tampilan jadwal untuk jamaah

| Tanggal/waktu | Layanan/kegiatan | Petugas yang diumumkan | Informasi perubahan yang perlu diketahui |
|---|---|---|---|
| [tanggal/jam] | [shalat/kegiatan] | [nama tampilan atau label peran yang disetujui] | [isi singkat; tanpa alasan pribadi] |

Tampilkan hanya penugasan yang sudah dikonfirmasi dan memang perlu diumumkan.
Periksa kembali setelah ada perubahan. Jangan sertakan nomor telepon, jadwal
ketersediaan, riwayat hadir, atau seluruh tab internal.

## Alur pembaruan

1. Kumpulkan ketersediaan untuk periode yang akan dijadwalkan.
2. Isi kebutuhan setiap layanan dan fungsi; periksa kemungkinan benturan waktu.
3. Minta konfirmasi sebelum tenggat yang disepakati. Pesan terkirim bukan bukti
   penerimaan tugas.
4. Jika petugas berhalangan, catat perubahan dan minta kesediaan pengganti.
   Perbarui jadwal setelah pengganti menerima, lalu beri tahu pihak terkait.
5. Menjelang layanan, periksa kehadiran. Jika petugas tidak hadir, ikuti
   prosedur pengganti darurat dan kewenangan lokal.
6. Perbarui tampilan jamaah dan riwayat perubahan; tinjau pola kendala saat
   menyusun jadwal periode berikutnya.

Semua baris contoh berlabel **simulasi** dan menggunakan peran, bukan identitas
orang. Contoh tidak menyatakan prosedur ini telah disetujui atau diuji lapangan.

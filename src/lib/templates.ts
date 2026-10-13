export type Template = {
  id: string;
  title: string;
  description: string;
  stage: 'awal' | 'lanjutan';
  guide?: string;
  sheet?: string;
  example?: string;
};

// Daftar publik; jangan masukkan tautan salinan internal atau data masjid aktual.
export const templates: Template[] = [
  { id: 'T01', title: 'Buku kas dan laporan kas', description: 'Transaksi, buku kas, rekap, dana/program, kuitansi, dan pemeriksaan saldo.', stage: 'awal', guide: 'paket/mushola-starter/template/kas', sheet: 'https://docs.google.com/spreadsheets/d/18LIm5UuJ6eXGEp0EYxxTrqvfNwpYz4Zr45SDGvVn9hk/edit', example: 'https://docs.google.com/spreadsheets/d/1JNwRx22bAiEXgIM3YSa1qeDNLVVrYkF2IXLxtXSZFKc/edit' },
  { id: 'T02', title: 'Jadwal petugas dan pengganti', description: 'Jadwal imam/muadzin, konfirmasi, pengganti, dan kehadiran.', stage: 'awal', guide: 'paket/mushola-starter/template/jadwal-imam', sheet: 'https://docs.google.com/spreadsheets/d/1xDe9tmztWr9O2UvfJzhZlQaZaMzGFzL8C-EBuhGFtfY/edit', example: 'https://docs.google.com/spreadsheets/d/1k5bVCqyh_VfTxeewwUspXpSVKB4KeMBwYSjue86KF1A/edit' },
  { id: 'T03', title: 'Inventaris, stok, perawatan, dan peminjaman', description: 'Barang, persediaan, perbaikan, peminjaman, dan pengembalian.', stage: 'awal', guide: 'paket/mushola-starter/template/inventaris' },
  { id: 'T04', title: 'Checklist operasional', description: 'Hasil pemeriksaan kesiapan, kebersihan, buka-tutup, Jumat, serta tindak lanjut dan cetak per layanan.', stage: 'awal', guide: 'paket/masjid-dasar/template/checklist-operasional', sheet: 'https://docs.google.com/spreadsheets/d/1xkUJ594gJ2GGZMsana-ywqBqVYTBPZyMvIyyetgqfKA/edit', example: 'https://docs.google.com/spreadsheets/d/14QsxscWWQWb2MImVSWTfsfrztZIGIODwyhlO7Kday4M/edit' },
  { id: 'T05', title: 'Pengelolaan kegiatan', description: 'Kalender, persiapan, petugas, pelaksanaan, dan evaluasi kegiatan.', stage: 'awal', guide: 'paket/masjid-dasar/alat-kerja' },
  { id: 'T06', title: 'Kendala, tindak lanjut, dan evaluasi', description: 'Catatan masalah, penanggung jawab, tenggat, dan hasil tindak lanjut.', stage: 'awal', guide: 'paket/masjid-dasar/alat-kerja' },
  { id: 'T07', title: 'Pengaturan lokal masjid', description: 'Layanan, peran, kewenangan, dan keputusan operasional setempat.', stage: 'awal', guide: 'paket/masjid-dasar/pengaturan-lokal' },
  { id: 'T08', title: 'Serah-terima petugas', description: 'Penyerahan tugas, kunci/peralatan, kondisi, dan pekerjaan tersisa.', stage: 'awal', guide: 'paket/masjid-dasar/alat-kerja' },
  { id: 'T09', title: 'Koordinasi layanan jenazah', description: 'Permintaan bantuan, tim/rujukan, perlengkapan, jadwal, dan penyelesaian sesuai layanan masjid.', stage: 'awal' },
  { id: 'T10', title: 'Pengelolaan Ramadhan', description: 'Jadwal layanan, petugas, relawan, konsumsi, dan persiapan kegiatan.', stage: 'lanjutan' },
  { id: 'T11', title: 'Pengelolaan Kurban', description: 'Peserta, hewan, panitia, penerima, distribusi, dan evaluasi.', stage: 'lanjutan' },
  { id: 'T12', title: 'Pendidikan TPA/TPQ/tahsin', description: 'Program, kelas, pengajar, peserta, kehadiran, dan perkembangan.', stage: 'lanjutan' },
  { id: 'T13', title: 'Bantuan sosial', description: 'Kebutuhan, keputusan, alokasi, penyaluran, dan tindak lanjut.', stage: 'lanjutan' },
  { id: 'T14', title: 'Permohonan penggunaan fasilitas', description: 'Permohonan ruang, waktu, persetujuan, dan kondisi sebelum/sesudah kegiatan.', stage: 'lanjutan' },
  { id: 'T15', title: 'Rencana program dan anggaran tahunan', description: 'Program, target, penanggung jawab, anggaran, dan evaluasi.', stage: 'lanjutan' },
  { id: 'T16', title: 'Rapat dan keputusan', description: 'Agenda, pembahasan, keputusan, penanggung jawab, dan tenggat.', stage: 'lanjutan' },
  { id: 'T17', title: 'Kalender komunikasi dan publikasi', description: 'Pesan, kanal, pemeriksa, jadwal, dan status publikasi.', stage: 'lanjutan' },
  { id: 'T18', title: 'Surat dan administrasi', description: 'Format surat, penomoran, isi, penandatangan, dan arsip.', stage: 'lanjutan' },
  { id: 'T19', title: 'Register dokumen dan arsip', description: 'Dokumen, versi, penanggung jawab, lokasi, akses, dan jadwal tinjau.', stage: 'lanjutan' },
  { id: 'T20', title: 'Akun dan akses digital', description: 'Pemilik akun, admin/cadangan, peran akses, dan tinjauan; tanpa menyimpan kata sandi.', stage: 'lanjutan' },
  { id: 'T21', title: 'Berita acara serah-terima pengurus', description: 'Pergantian pengurus, ringkasan tanggung jawab, lampiran, dan pengesahan.', stage: 'lanjutan' },
  { id: 'T22', title: 'Daftar pemeriksaan serah-terima pengurus', description: 'Pemeriksaan kas, aset, dokumen, akses, dan pekerjaan tersisa.', stage: 'lanjutan' },
  { id: 'T23', title: 'Peta risiko dan kesiapan keadaan darurat', description: 'Risiko area, kontak bantuan lokal, akses keluar, penanggung jawab, dan pemeriksaan.', stage: 'lanjutan' },
];

export const templateForGuide = (slug: string) => templates.find(t => t.guide === slug);

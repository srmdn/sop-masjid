import { defineConfig } from "vitepress";

export default defineConfig({
  title: "SOP Masjid",
  description:
    "Toolkit SOP, template, dan checklist operasional masjid/mushola",
  lang: "id-ID",
  base: "/sop-masjid/",

  themeConfig: {
    nav: [
      { text: "Beranda", link: "/" },
      { text: "Mulai", link: "/mulai" },
      { text: "Paket", link: "/paket/" },
      { text: "Kontribusi", link: "/kontribusi" },
    ],

    sidebar: {
      "/paket/mushola-starter/": [
        {
          text: "Paket Mushola Starter",
          items: [
            { text: "Ringkasan", link: "/paket/mushola-starter/" },
            { text: "Panduan Mulai", link: "/paket/mushola-starter/panduan-mulai" },
            {
              text: "SOP",
              collapsed: false,
              items: [
                {
                  text: "Buka-Tutup Mushola",
                  link: "/paket/mushola-starter/sop/buka-tutup",
                },
                {
                  text: "Kebersihan Harian",
                  link: "/paket/mushola-starter/sop/kebersihan",
                },
                {
                  text: "Kas Infak Sederhana",
                  link: "/paket/mushola-starter/sop/kas-infak",
                },
                {
                  text: "Inventaris Barang",
                  link: "/paket/mushola-starter/sop/inventaris",
                },
              ],
            },
            {
              text: "Template",
              collapsed: false,
              items: [
                {
                  text: "Jadwal Imam/Muadzin",
                  link: "/paket/mushola-starter/template/jadwal-imam",
                },
                {
                  text: "Kas Masuk-Keluar",
                  link: "/paket/mushola-starter/template/kas",
                },
                {
                  text: "Inventaris Barang",
                  link: "/paket/mushola-starter/template/inventaris",
                },
              ],
            },
            {
              text: "Checklist",
              collapsed: false,
              items: [
                {
                  text: "Checklist Harian",
                  link: "/paket/mushola-starter/checklist/harian",
                },
                {
                  text: "Checklist Mingguan",
                  link: "/paket/mushola-starter/checklist/mingguan",
                },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/srmdn/sop-masjid" },
    ],

    footer: {
      message:
        "Konten dilisensikan di bawah CC BY-SA 4.0 · Kode dilisensikan di bawah MIT",
    },
  },
});

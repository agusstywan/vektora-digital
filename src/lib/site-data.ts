export const WA_NUMBER = "6285643672009";
export const WA_DISPLAY = "085643672009";
export const EMAIL = "agosst7@gmail.com";
export const CONTACT_MESSAGE =
  "Halo Vektora Digital, saya tertarik untuk berdiskusi mengenai kebutuhan desain atau website untuk bisnis saya. Bisa saya mendapatkan informasi lebih lanjut?";

export const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const CONTACT_WA = waLink(CONTACT_MESSAGE);

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/layanan", label: "Layanan" },
  { to: "/paket-website", label: "Paket Website" },
  { to: "/karya", label: "Karya" },
  { to: "/proses", label: "Proses" },
  { to: "/tentang", label: "Tentang" },
  { to: "/kontak", label: "Kontak" },
] as const;

export const SERVICES = [
  {
    title: "Brand Identity & Logo Design",
    desc: "Logo, palet warna, tipografi, dan panduan visual yang membuat brand mudah dikenali dan konsisten di setiap titik.",
    // GANTI GAMBAR: taruh file di folder public/images/layanan/ lalu isi path-nya (rekomendasi rasio 4:3, ±800×600 px)
    image: "" as string, // contoh: "/images/layanan/brand-identity.jpg"
  },
  {
    title: "Social Media & Campaign Design",
    desc: "Desain konten dan materi kampanye yang rapi, selaras dengan karakter brand, dan siap tampil di media sosial.",
    // GANTI GAMBAR: taruh file di folder public/images/layanan/ lalu isi path-nya (rekomendasi rasio 4:3, ±800×600 px)
    image: "" as string, // contoh: "/images/layanan/social-media.jpg"
  },
  {
    title: "Business Branding Kit",
    desc: "Katalog, company profile, dan kartu nama yang menghadirkan kesan profesional saat brand bertemu calon pelanggan.",
    // GANTI GAMBAR: taruh file di folder public/images/layanan/ lalu isi path-nya (rekomendasi rasio 4:3, ±800×600 px)
    image: "" as string, // contoh: "/images/layanan/branding-kit.jpg"
  },
  {
    title: "Website & Landing Page",
    desc: "Website responsif dan landing page yang jelas, cepat, dan dirancang untuk mengarahkan pengunjung mengambil tindakan.",
    // GANTI GAMBAR: taruh file di folder public/images/layanan/ lalu isi path-nya (rekomendasi rasio 4:3, ±800×600 px)
    image: "" as string, // contoh: "/images/layanan/website.jpg"
  },
  {
    title: "E-Commerce & Digital Solutions",
    desc: "Solusi digital untuk membantu bisnis berjualan dan melayani pelanggan secara online dengan lebih tertata.",
    // GANTI GAMBAR: taruh file di folder public/images/layanan/ lalu isi path-nya (rekomendasi rasio 4:3, ±800×600 px)
    image: "" as string, // contoh: "/images/layanan/e-commerce.jpg"
  },
];

export type Pkg = {
  name: string;
  price: string;
  domain: string;
  admin: boolean;
  summary: string;
  features: string[];
  note?: string;
  featured?: boolean;
};

export const PACKAGES: Pkg[] = [
  {
    name: "BASIC",
    price: "Rp300.000",
    domain: ".vercel.app",
    admin: false,
    summary: "Landing page ringkas untuk mulai hadir secara online.",
    features: ["1 Landing Page", "5 Section", "Domain .vercel.app", "Hosting 1 Tahun", "Tombol WA", "Basic SEO"],
    note: "Cocok buat langkah awal bisnis, jadi 2–3 hari aja!",
  },
  {
    name: "STARTER",
    price: "Rp699.000",
    domain: ".com",
    admin: false,
    summary: "Landing page dengan domain .com milik sendiri.",
    features: ["1 Landing Page", "5 Section", "Domain .com", "Hosting 1 Tahun", "SSL Gratis", "Tombol WA", "Basic SEO"],
    note: "Cocok buat langkah awal bisnis, jadi 2–3 hari aja!",
    featured: true,
  },
  {
    name: "PRO",
    price: "Rp900.000",
    domain: ".com",
    admin: true,
    summary: "Website multi-halaman yang bisa dikelola sendiri.",
    features: ["Hingga 7 Halaman", "Dashboard Admin", "Domain .com", "Company Profile", "Galeri", "Integrasi WA & Google Maps", "SEO Dasar"],
    note: "Konten dan pesanan lebih gampang dikelola sendiri.",
  },
  {
    name: "PREMIUM",
    price: "Rp1.500.000",
    domain: ".com",
    admin: true,
    summary: "Website lengkap dengan desain premium.",
    features: ["Hingga 10 Halaman", "Desain premium", "Domain .com", "Dashboard admin lengkap", "Gratis maintenance awal"],
  },
  {
    name: "CUSTOM",
    price: "Rp7.000.000",
    domain: ".com",
    admin: true,
    summary: "Website premium yang dirancang khusus sesuai kebutuhan dan alur bisnis Anda.",
    features: [
      "Jumlah halaman sesuai kebutuhan",
      "Desain premium eksklusif",
      "Fitur sesuai request",
      "Dashboard admin sesuai kebutuhan",
      "Domain .com",
      "Konsultasi & pendampingan proyek",
    ],
    note: "Punya kebutuhan khusus? Kita rancang bersama dari nol.",
  },
];

export const packageWa = (p: Pkg) =>
  waLink(
    `Halo Vektora Digital, saya tertarik dengan Paket Website ${p.name} (mulai ${p.price}). Bisa saya mendapatkan informasi lebih lanjut?`,
  );

export const WORKS = [
  { name: "Inclowd Apparel", url: "http://gawekaos.my.id/", cat: "Apparel & Custom Clothing" },
  { name: "Jasa Cleaning Jogja", url: "http://jasacleaningjogja.my.id/", cat: "Cleaning Service" },
  { name: "Jumain Coffee", url: "http://jumaincoffee.netlify.app/", cat: "Food & Beverage" },
  { name: "Sneakers Wash", url: "http://sneakerswash.netlify.app/", cat: "Sneaker Care" },
  { name: "Risol Aleyda", url: "http://risol-aleyda.vercel.app/", cat: "Food Business" },
  { name: "Papatwin Grup", url: "https://www.instagram.com/rotibakar_papatwin/", cat: "Food & Beverage" },
];

export const PROCESS = [
  { title: "Discovery & Brief", desc: "Memahami bisnis, audiens, tujuan, dan kebutuhan proyek secara menyeluruh." },
  { title: "Creative Direction", desc: "Menentukan arah visual, nada komunikasi, dan konsep yang paling relevan." },
  { title: "Design & Development", desc: "Mewujudkan konsep menjadi desain dan website yang rapi serta fungsional." },
  { title: "Review & Refinement", desc: "Meninjau hasil bersama dan menyempurnakan detail sesuai masukan." },
  { title: "Final Delivery", desc: "Menyerahkan file final atau meluncurkan website, siap digunakan." },
];

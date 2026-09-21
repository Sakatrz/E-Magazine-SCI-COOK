# 🍳 E-Magazine SCI-COOK: Sains di Balik Dapur Madura

> **Majalah Digital Edukasi Interaktif Berbasis Etnosains & Kuliner Lokal**  
> Mengintegrasikan pembelajaran IPA (Suhu, Kalor, dan Pemuaian) dengan kearifan lokal pembuatan Petis Madura secara interaktif, responsif, dan elegan.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

---

## 🌟 Demo Langsung (Live Preview)

- **GitHub Pages:** [https://sakatrz.github.io/E-Magazine-SCI-COOK/](https://sakatrz.github.io/E-Magazine-SCI-COOK/)
- **Vercel Deploy:** [https://e-magazine-sci-cook.vercel.app](https://e-magazine-sci-cook.vercel.app)

---

## 📖 Tentang Proyek

**E-Magazine SCI-COOK** adalah platform majalah digital interaktif yang dikembangkan untuk media pembelajaran sains tingkat sekolah/akademik. Mengusung konsep **Etnosains**, majalah ini membedah konsep fisika dan kimia di balik proses tradisional pengolahan **Petis Madura**, seperti fenomena perpindahan kalor (konduksi, konveksi, radiasi), pemuaian logam pada tungku, perubahan suhu, hingga pengukuran termometer.

Setiap halaman dirancang interaktif dengan area sentuh (*interactive trigger hotspots*) yang memungkinkan pembaca membuka kartu informasi pop-up, bermain kuis sains eksternal, menjelajahi daftar isi secara instan, serta membaca dengan nyaman di semua perangkat.

---

## ✨ Fitur Utama

- ⚡ **Smart Background Preloader (0-Detik Lag):** Sistem cerdas yang mengunduh gambar halaman berikutnya dan pop-up secara diam-diam di latar belakang saat pembaca sedang membaca, sehingga transisi halaman berlangsung instan tanpa *buffering*.
- ⏳ **Loading State & Cache Fallback:** Indikator animasi loading yang elegan saat melompat jauh ke halaman yang belum di-cache.
- 📱 **Desain Responsif Penuh (Mobile, Tablet, Desktop):** 
  - Kompatibel dari layar kecil (*Mobile S 320px, Mobile M 375px, Mobile L 425px*), tablet (*iPad/Tablet 768px-1024px*), hingga layar lebar *Desktop*.
  - Auto-centering vertikal & horizontal dengan Dynamic Viewport Height (`100dvh`).
  - Halaman majalah terkunci pada rasio standar A4 secara presisi.
- 🎯 **Navigasi Multi-Metode:**
  - Ketik langsung nomor halaman pada header (dengan fitur *debounce* otomatis dan tombol *Enter*).
  - Navigasi tombol panah *Keyboard* (`←` dan `→`).
  - Hotspot sentuh navigasi pada halaman (*Lanjut* / *Kembali* / *Daftar Isi*).
- 🔍 **Zoom & Fullscreen Engine:**
  - Fitur perbesar (*Zoom In* hingga 300%), perkecil (*Zoom Out*), dan reset ukuran.
  - Mode Layar Penuh (*Fullscreen API*) untuk pengalaman membaca imersif tanpa gangguan antarmuka browser.
- 💬 **Interactive Pop-up Modals:** Kartu penjelasan etnosains dan istilah sains yang dapat diklik langsung di atas halaman majalah.
- 🛠️ **Visual Trigger Picker Tool:** Alat pemetaan koordinat visual berbasis *HTML5 Canvas* bawaan di dalam folder `tools/` untuk memudahkan developer menambahkan tombol, daftar isi, pop-up, dan link eksternal dengan cepat.

---

## 💻 Teknologi yang Digunakan (Tech Stack)

| Teknologi | Versi / Standar | Keterangan & Penggunaan |
| :--- | :--- | :--- |
| **HTML** | **HTML5** | Struktur semantik, elemen Canvas API untuk tool pemetaan koordinat, dan meta viewport responsif |
| **CSS** | **CSS3 (Vanilla CSS)** | Flexbox, Dynamic Viewport Units (`dvh`), CSS Transitions & Keyframe Animations, Clean Academic UI Palette |
| **JavaScript** | **ES6+ (Vanilla JS)** | Logika aplikasi tanpa framework/library berat (Zero Dependencies): DOM Manipulation, Preloading Engine, Debounced Input, Fullscreen API |
| **Typography** | **Google Fonts** | Menggunakan font modern & elegan **Outfit** |
| **Hosting & CI/CD**| **GitHub Pages & Vercel** | Deployment otomatis berbasis repositori Git |

---

## 📂 Struktur Direktori Proyek

```plaintext
E-Magazine-SCI-COOK/
├── images/                  # Aset gambar halaman majalah (H1 s.d. H46, Cover, Daftar Isi)
│   └── popups/              # Aset gambar kartu informasi pop-up etnosains
├── tools/
│   └── trigger-picker.html  # Visual tool untuk memetakan koordinat hotspot trigger
├── index.html               # File utama antarmuka pembaca majalah
├── style.css                # Desain visual, tema akademik elegan, dan media query responsive
├── script.js                # Core engine: render halaman, preloader, zoom, fullscreen, event triggers
├── pages-data.js            # Basis data konfigurasi halaman, rasio aspek, dan array triggers
└── README.md                # Dokumentasi proyek
```

---

## 🛠️ Cara Menjalankan Secara Lokal (Local Development)

Proyek ini dibangun murni menggunakan **Vanilla Web Technologies** (tanpa perlu `npm install` atau proses *build*):

1. **Clone Repositori:**
   ```bash
   git clone https://github.com/sakatrz/E-Magazine-SCI-COOK.git
   ```
2. **Masuk ke Folder Proyek:**
   ```bash
   cd E-Magazine-SCI-COOK
   ```
3. **Jalankan Aplikasi:**
   - Cukup buka file `index.html` langsung di browser Anda, atau
   - Gunakan ekstensi **Live Server** di VS Code untuk pengalaman *hot-reload*.

---

## 👨‍💻 Kontributor & Pengembang

- **Pengembang & Penyusun Konten:** Tim E-Magazine SCI-COOK
- **Fakultas / Institusi:** Pendidikan IPA - Universitas Trunojoyo Madura

---

<p align="center">
  Dibuat dengan ❤️ untuk kemajuan pendidikan sains berbasis kearifan lokal Indonesia.
</p>

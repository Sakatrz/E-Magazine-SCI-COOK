// script.js
// DEBUG_TRIGGERS = true -> semua area trigger diwarnai merah transparan,
// supaya gampang cek apakah posisinya sudah pas menutupi tombol/teks di gambar.
// Set kembali ke false kalau sudah pas.
const DEBUG_TRIGGERS = false;

// Durasi animasi balik halaman dalam milidetik (ms).
// Harus sama dengan nilai transition di .flipper di style.css agar sinkron.
const FLIP_DURATION = 800; // ms — samakan dengan transition di style.css (.flipper)
// Penanda apakah animasi balik sedang berjalan — mencegah klik ganda saat animasi berlangsung.
let isFlipping = false;

// Indeks halaman yang sedang tampil (0 = halaman pertama dalam array PAGES).
let currentPageIndex = 0;
// Tingkat zoom saat ini; 1.0 = 100% (ukuran normal).
let currentZoom = 1.0; // 1.0 = 100%
// Batas bawah zoom: tidak boleh lebih kecil dari 50%.
const ZOOM_MIN = 0.5;
// Batas atas zoom: tidak boleh lebih besar dari 300%.
const ZOOM_MAX = 3.0;

// ===== Referensi Elemen di Halaman =====
// Mengambil referensi ke elemen-elemen HTML yang sering dipakai, agar tidak
// perlu mencarinya ulang setiap kali fungsi dijalankan (lebih efisien).
const pageContainer = document.getElementById("page-container");
const pageImage = document.getElementById("page-image");
const pageLoader = document.getElementById("page-loader");
const popupOverlay = document.getElementById("popup-overlay");
const popupTitle = document.getElementById("popup-title");
const popupBody = document.getElementById("popup-body");
const popupClose = document.getElementById("popup-close");
const magazineMain = document.getElementById("magazine-main");
const magazineWrapper = document.getElementById("magazine-wrapper");

// Header UI elements
// Elemen-elemen kontrol di bar atas
const elPageInput = document.getElementById("page-input");
const elTotalPages = document.getElementById("total-pages");
const elBtnZoomReset = document.getElementById("btn-zoom-reset");

// Rasio halaman A4 sebagai cadangan jika data halaman tidak menyertakan rasio sendiri.
const DEFAULT_RATIO = 210 / 297; // fallback A4 kalau halaman belum punya ratio

// ===== Penyesuaian Ukuran Container =====
// Tujuan   : Menghitung ukuran kotak halaman (dalam piksel) agar setinggi-lebarnya
//            yang mungkin tanpa melebihi ruang layar, sambil menjaga rasio gambar.
// Dipanggil: Setiap kali layar di-resize, zoom berubah, atau halaman berganti.
// Hasilnya : Lebar dan tinggi elemen #page-container diperbarui di CSS.
//
// Menghitung ukuran container (dalam pixel) sebesar mungkin tanpa
// melebihi ruang yang tersedia, sambil menjaga rasio halaman saat ini.
// Padding dibaca dari DOM agar otomatis sinkron dengan CSS breakpoint.
function fitContainer() {
  const page = PAGES[currentPageIndex];
  const ratio = (page && page.ratio) || DEFAULT_RATIO;

  // Baca padding wrapper dari DOM — sinkron dengan media query CSS
  const wStyle = getComputedStyle(magazineWrapper);
  // Total padding horizontal (kiri + kanan) dalam piksel
  const hPad = parseFloat(wStyle.paddingLeft) + parseFloat(wStyle.paddingRight);
  // Total padding vertikal (atas + bawah) dalam piksel
  const vPad = parseFloat(wStyle.paddingTop) + parseFloat(wStyle.paddingBottom);

  // Ruang yang tersedia di dalam main area
  const availW = magazineMain.clientWidth - hPad;
  const availH = magazineMain.clientHeight - vPad;

  // Coba isi lebar penuh dulu, lalu hitung tingginya dari rasio
  let width = availW;
  let height = width / ratio;

  // Jika tinggi melampaui ruang yang tersedia, balik: isi tinggi penuh dulu
  if (height > availH) {
    height = availH;
    width = height * ratio;
  }

  // Pastikan tidak negatif
  width = Math.max(width, 0);
  height = Math.max(height, 0);

  // Terapkan zoom
  width = width * currentZoom;
  height = height * currentZoom;

  pageContainer.style.width = width + "px";
  pageContainer.style.height = height + "px";
}

// ===== Pembaruan Tampilan Header =====
// ── Header UI helpers ─────────────────────────────────────────
// Tujuan   : Menyinkronkan angka-angka di header (nomor halaman, persen zoom)
//            dengan nilai aktual di dalam program.
// Dipanggil: Setiap kali halaman berganti atau zoom berubah.
function updateHeaderUI() {
  if (elPageInput) elPageInput.value = currentPageIndex + 1;
  if (elTotalPages) elTotalPages.textContent = PAGES.length;
  // Ubah angka desimal (mis. 1.2) ke persen bulat (mis. 120%) untuk label tombol zoom
  const pct = Math.round(currentZoom * 100);
  if (elBtnZoomReset) elBtnZoomReset.textContent = pct + "%";
}

// ===== Zoom =====
// Zoom: delta = 0.1 (in), -0.1 (out), 0 (reset)
// Tujuan   : Mengubah tingkat zoom dan memperbarui tampilan.
// Dipanggil: Dari tombol zoom di toolbar (onclick di index.html).
// Hasilnya : currentZoom diperbarui, ukuran container dan label tombol diperbarui.
function handleZoom(delta) {
  if (delta === 0) {
    // delta 0 berarti reset ke 100%
    currentZoom = 1.0;
  } else {
    // Tambah atau kurangi zoom, lalu batasi agar tidak melampaui min/max.
    // toFixed(2) → bulatkan ke 2 desimal untuk menghindari angka seperti 0.30000000000000004
    currentZoom = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, +(currentZoom + delta).toFixed(2)));
  }
  fitContainer();
  updateHeaderUI();
}

// ===== Layar Penuh =====
// Toggle fullscreen
// Tujuan   : Masuk atau keluar dari mode layar penuh browser.
// Dipanggil: Dari tombol fullscreen di toolbar (onclick di index.html).
function handleFullscreen() {
  if (!document.fullscreenElement) {
    // Belum layar penuh → minta browser untuk masuk mode layar penuh
    document.documentElement.requestFullscreen && document.documentElement.requestFullscreen();
  } else {
    // Sudah layar penuh → keluar
    document.exitFullscreen && document.exitFullscreen();
  }
}

// ===== Pra-unduh Gambar (Smart Image Preloading) =====
// ── Smart Image Preloading ──────────────────────────────────
// Mendownload gambar halaman & popup di latar belakang (background)
// agar ketika user klik "Lanjut" gambar langsung muncul 0-detik dari cache browser.

// Daftar URL gambar yang sudah pernah diunduh — mencegah pengunduhan ganda.
const preloadedImages = new Set();

// Tujuan   : Mengunduh satu gambar di latar belakang dan menyimpannya di memori browser.
// Dipanggil: Oleh preloadPageAssets() untuk setiap gambar yang perlu disiapkan.
function preloadImage(url) {
  if (!url || preloadedImages.has(url)) return;
  preloadedImages.add(url);
  const img = new Image();
  img.src = url;
}

// Tujuan   : Mengunduh semua aset (gambar halaman + gambar popup) milik satu halaman.
// Dipanggil: Oleh preloadAdjacentPages() dan startIdlePreload().
function preloadPageAssets(index) {
  const page = PAGES[index];
  if (!page) return;
  preloadImage(page.image);
  if (page.triggers) {
    page.triggers.forEach((t) => {
      if (t.type === "popup" && t.popup && t.popup.image) {
        preloadImage(t.popup.image);
      }
    });
  }
}

// Tujuan   : Mengunduh aset halaman aktif + beberapa halaman di sekitarnya
//            sehingga navigasi terasa instan.
// Dipanggil: Setiap kali halaman berpindah (dari renderPage).
function preloadAdjacentPages(currentIndex) {
  // 1. Pastikan aset halaman aktif (termasuk popup) sudah di-cache
  preloadPageAssets(currentIndex);

  // 2. Preload 3 halaman ke depan secara agresif (prioritas baca)
  for (let i = 1; i <= 3; i++) {
    const nextIdx = currentIndex + i;
    if (nextIdx < PAGES.length) {
      preloadPageAssets(nextIdx);
    }
  }

  // 3. Preload 1 halaman ke belakang
  if (currentIndex > 0) {
    preloadPageAssets(currentIndex - 1);
  }
}

// Preload bertahap untuk sisa seluruh halaman saat browser sedang santai/idle
// Indeks halaman yang sedang diantre untuk diunduh secara bertahap.
let idlePreloadIdx = 0;
// Tujuan   : Mengunduh seluruh sisa halaman satu per satu saat browser tidak sibuk,
//            tanpa mengganggu kecepatan tampilan halaman aktif.
// Dipanggil: Sekali saat halaman pertama dimuat, dari baris paling bawah file ini.
function startIdlePreload() {
  function loadNext() {
    if (idlePreloadIdx >= PAGES.length) return;
    preloadPageAssets(idlePreloadIdx);
    idlePreloadIdx++;
    if ("requestIdleCallback" in window) {
      // requestIdleCallback: browser menjalankan loadNext() hanya saat sedang tidak sibuk
      window.requestIdleCallback(loadNext, { timeout: 2000 });
    } else {
      // Cadangan jika browser lama tidak mendukung requestIdleCallback
      setTimeout(loadNext, 300);
    }
  }
  setTimeout(loadNext, 1200); // Mulai setelah halaman pertama selesai tampil
}

// ===== Efek Balik Halaman (Page Flip) =====
// ── Efek Balik Halaman (Page Flip) ────────────────────────────
// Tujuan   : Membuat elemen "kertas" yang akan diputar dalam animasi 3D.
// Parameter: imageSrc — URL gambar yang tampil di sisi depan kertas.
// Hasilnya : Elemen div .flipper berisi sisi depan (gambar) dan sisi belakang (putih).
function createFlipper(imageSrc) {
  const flipper = document.createElement("div");
  flipper.className = "flipper";

  const front = document.createElement("div");
  front.className = "flip-face flip-front";
  const img = document.createElement("img");
  img.src = imageSrc;
  img.alt = "";
  front.appendChild(img);

  const back = document.createElement("div");
  back.className = "flip-face flip-back";

  flipper.appendChild(front);
  flipper.appendChild(back);
  return flipper;
}

// Tujuan   : Menjalankan animasi balik halaman lalu menampilkan halaman tujuan.
// Parameter: target — indeks halaman tujuan dalam array PAGES (0-based).
// Dipanggil: Dari handleTriggerClick() saat area navigasi diklik, atau dari
//            pendengar keyboard (tombol panah).
async function goToPage(target) {
  // Abaikan jika animasi sedang berjalan, halaman tidak valid, atau sudah di halaman tujuan
  if (isFlipping) return;
  if (target < 0 || target >= PAGES.length || target === currentPageIndex) return;

  const goingNext = target > currentPageIndex;
  const oldPage = PAGES[currentPageIndex];
  const newPage = PAGES[target];

  // Jika user prefer-reduced-motion, langsung render tanpa animasi
  // (mempertimbangkan pengguna yang sensitif terhadap gerakan di layar)
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    renderPage(target);
    return;
  }

  isFlipping = true;

  // Preload gambar halaman tujuan sebelum animasi (agar tidak blank)
  // Menunggu (await) hingga gambar selesai diunduh sebelum animasi dimulai
  await new Promise((resolve) => {
    const img = new Image();
    img.onload = img.onerror = () => resolve();
    img.src = newPage.image;
  });

  pageContainer.classList.add("flipping");

  // Maju: halaman lama berputar ke kiri, menyingkap halaman baru di bawahnya.
  // Mundur: halaman baru berputar dari kiri ke kanan, menutup halaman lama.
  const flipper = createFlipper(goingNext ? oldPage.image : newPage.image);
  flipper.style.transform = goingNext ? "rotateY(0deg)" : "rotateY(-180deg)";
  flipper.style.opacity = goingNext ? "1" : "0";

  if (goingNext) renderPage(target); // halaman baru sudah siap di bawah flipper
  pageContainer.appendChild(flipper);

  // paksa reflow supaya transisi mulai dari kondisi awal
  // (tanpa ini, browser mungkin melewati kondisi awal dan langsung ke kondisi akhir)
  void flipper.offsetWidth; // paksa reflow supaya transisi mulai dari kondisi awal

  flipper.style.transitionProperty = "transform, opacity";
  flipper.style.transitionDuration = FLIP_DURATION + "ms, 250ms";
  // Saat maju: opacity mulai langsung; saat mundur: tidak ada jeda
  flipper.style.transitionDelay = goingNext ? "0ms, 550ms" : "0ms, 0ms";
  flipper.style.transform = goingNext ? "rotateY(-180deg)" : "rotateY(0deg)";
  flipper.style.opacity = goingNext ? "0" : "1";

  // Setelah animasi selesai: bersihkan elemen flipper dan izinkan klik lagi
  setTimeout(() => {
    if (!goingNext) renderPage(target); // render halaman tujuan setelah animasi selesai
    flipper.remove();
    pageContainer.classList.remove("flipping");
    isFlipping = false;
  }, FLIP_DURATION + 60); // +60ms sebagai jeda kecil agar animasi benar-benar tuntas
}

// ===== Render Halaman =====
// Tujuan   : Menampilkan gambar halaman ke layar dan membuat ulang semua area klik
//            (trigger) di atas gambar sesuai data halaman tersebut.
// Parameter: index — indeks halaman yang akan ditampilkan (0-based).
// Dipanggil: Saat pertama kali halaman dibuka, saat navigasi nav-page,
//            dan setelah animasi flip selesai.
function renderPage(index) {
  const page = PAGES[index];
  if (!page) return;

  currentPageIndex = index;

  fitContainer();
  updateHeaderUI();

  // Preload halaman-halaman sekitar di latar belakang
  preloadAdjacentPages(index);

  // Periksa apakah gambar sudah ada di cache browser
  // (complete = sudah selesai diunduh, naturalWidth != 0 = bukan gambar rusak)
  const testImg = new Image();
  testImg.src = page.image;

  if (testImg.complete && testImg.naturalWidth !== 0) {
    // Gambar sudah siap di memori -> langsung tampilkan tanpa loading spinner
    pageImage.src = page.image;
    if (pageLoader) pageLoader.classList.add("hidden");
  } else {
    // Gambar belum ada di memori -> tampilkan loading spinner lembut
    if (pageLoader) pageLoader.classList.remove("hidden");
    testImg.onload = () => {
      // Pastikan pembaca masih berada di halaman yang sama saat download selesai
      if (currentPageIndex === index) {
        pageImage.src = page.image;
        if (pageLoader) pageLoader.classList.add("hidden");
      }
    };
    testImg.onerror = () => {
      // Gambar gagal diunduh (mis. file tidak ditemukan) → sembunyikan spinner saja
      if (pageLoader) pageLoader.classList.add("hidden");
    };
    // Tetap pasang src ke pageImage
    pageImage.src = page.image;
  }

  // hapus trigger halaman sebelumnya
  document.querySelectorAll(".trigger").forEach((el) => el.remove());

  // buat ulang trigger sesuai data halaman ini
  // Setiap trigger menjadi satu elemen <button> tak terlihat di atas gambar
  page.triggers.forEach((trigger) => {
    const el = document.createElement("button");
    el.className = "trigger";
    // Jika mode debug aktif, tambahkan kelas "debug" agar area klik terlihat merah
    if (DEBUG_TRIGGERS) el.classList.add("debug");

    // Posisi dan ukuran dalam persen agar skala mengikuti ukuran gambar
    el.style.left = trigger.left + "%";
    el.style.top = trigger.top + "%";
    el.style.width = trigger.width + "%";
    el.style.height = trigger.height + "%";

    // Daftarkan pendengar aksi: saat area ini diklik, jalankan handleTriggerClick
    el.addEventListener("click", () => handleTriggerClick(trigger));
    pageContainer.appendChild(el);
  });
}

// ===== Penanganan Klik Area Trigger =====
// Tujuan   : Memutuskan aksi apa yang dijalankan berdasarkan tipe trigger yang diklik.
// Parameter: trigger — objek data trigger dari PAGES (berisi type, page, url, popup, dll.).
// Dipanggil: Dari pendengar aksi klik pada setiap elemen .trigger yang dibuat di renderPage.
function handleTriggerClick(trigger) {
  if (trigger.type === "nav-next") {
    // Gunakan goToPage() agar ada animasi balik halaman
    goToPage(currentPageIndex + 1);
  } else if (trigger.type === "nav-prev") {
    goToPage(currentPageIndex - 1);
  } else if (trigger.type === "nav-page" || trigger.type === "goto" || trigger.type === "daftar-isi") {
    // Navigasi ke halaman tertentu (nomor halaman 1 s.d. total halaman atau page ID)
    let targetIndex = -1;
    if (typeof trigger.page === "number") {
      targetIndex = trigger.page - 1; // Konversi nomor halaman 1-based ke index array 0-based
    } else if (typeof trigger.target === "number") {
      targetIndex = trigger.target - 1;
    } else if (typeof trigger.page === "string") {
      // Coba parse sebagai angka; jika gagal, cari berdasarkan id halaman
      const num = parseInt(trigger.page, 10);
      if (!isNaN(num)) {
        targetIndex = num - 1;
      } else {
        targetIndex = PAGES.findIndex((p) => p.id === trigger.page);
      }
    }
    if (targetIndex >= 0 && targetIndex < PAGES.length) {
      renderPage(targetIndex);
    }
  } else if (trigger.type === "link") {
    // Buka URL di tab baru; noopener,noreferrer untuk keamanan agar tab baru tidak bisa mengakses halaman ini
    window.open(trigger.url, "_blank", "noopener,noreferrer");
  } else if (trigger.type === "popup") {
    openPopup(trigger.popup);
  }
}

// ===== Popup =====
// Tujuan   : Menampilkan popup berisi gambar atau teks.
// Parameter: popup — objek dari data trigger; bisa berisi { image, alt } atau { title, body }.
// Dipanggil: Dari handleTriggerClick() saat trigger bertipe "popup" diklik.
function openPopup(popup) {
  if (popup.image) {
    // mode gambar: tampilkan card hasil export Figma apa adanya
    popupBody.innerHTML = "";
    popupTitle.textContent = "";
    // Sembunyikan judul saat popup hanya menampilkan gambar
    popupTitle.classList.add("hidden");

    const img = document.createElement("img");
    img.src = popup.image;
    img.alt = popup.alt || "";
    img.className = "popup-image";
    popupBody.appendChild(img);
  } else {
    // mode teks: fallback kalau belum ada desain gambarnya
    popupTitle.classList.remove("hidden");
    popupTitle.textContent = popup.title || "";
    popupBody.innerHTML = "";
    popupBody.textContent = popup.body || "";
  }

  // Tampilkan lapisan gelap dan kotak popup
  popupOverlay.classList.remove("hidden");
}

// Tujuan   : Menutup popup dan menyembunyikan lapisan gelap.
// Dipanggil: Dari tombol silang, klik area gelap, atau tekan Escape.
function closePopup() {
  popupOverlay.classList.add("hidden");
}

// ===== Pendengar Aksi (Event Listeners) =====
// Tombol silang di popup → tutup popup
popupClose.addEventListener("click", closePopup);
// Klik di area gelap di luar kotak popup → tutup popup
// (e.target === popupOverlay memastikan klik terjadi di area gelap, bukan di dalam kotak popup)
popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) closePopup();
});

// Navigasi keyboard (tombol panah & Escape) — pakai goToPage() untuk efek flip
// Pendengar keyboard di seluruh halaman
document.addEventListener("keydown", (e) => {
  // Jangan jalankan navigasi halaman kalau user sedang mengetik di input
  if (document.activeElement === elPageInput) return;
  if (e.key === "ArrowRight") goToPage(currentPageIndex + 1);
  if (e.key === "ArrowLeft")  goToPage(currentPageIndex - 1);
  if (e.key === "Escape") closePopup();
});

// Hitung ulang ukuran container setiap kali ukuran jendela browser berubah
window.addEventListener("resize", fitContainer);

// ===== Navigasi via Input Halaman =====
// ── Navigasi via input halaman ────────────────────────────────
// - Ketik angka → otomatis pindah setelah 600ms berhenti mengetik (debounce)
// - Enter → pindah langsung tanpa menunggu
// - Escape / klik luar → batal, nilai kembali ke halaman saat ini
// Penanda timeout debounce; dipakai untuk membatalkan perpindahan otomatis jika user masih mengetik.
let pageInputDebounce = null;

// Tujuan   : Membaca nilai di kotak input halaman dan berpindah ke halaman yang dimaksud.
// Dipanggil: Dari pendengar aksi input (debounce) dan Enter.
function navigateFromInput() {
  const raw = elPageInput.value.trim();
  // Terima format "2" atau "2/48"
  const num = parseInt(raw.split("/")[0], 10);
  if (!isNaN(num) && num >= 1 && num <= PAGES.length) {
    renderPage(num - 1);
    // TIDAK blur di sini: user tetap di dalam input, bisa langsung
    // ketik nomor halaman lain tanpa perlu klik lagi
  } else {
    // Angka di luar jangkauan → kembalikan ke nilai halaman saat ini
    elPageInput.value = currentPageIndex + 1;
  }
}

// Pasang semua pendengar aksi pada kotak input halaman
if (elPageInput) {
  // Debounce: pindah otomatis 1200ms setelah berhenti mengetik
  elPageInput.addEventListener("input", () => {
    clearTimeout(pageInputDebounce);
    pageInputDebounce = setTimeout(navigateFromInput, 1200);
  });

  // Enter: pindah langsung dan keluar dari input
  elPageInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      clearTimeout(pageInputDebounce);
      navigateFromInput();
      elPageInput.blur(); // keluar dari input setelah Enter
    }
    if (e.key === "Escape") {
      clearTimeout(pageInputDebounce);
      elPageInput.value = currentPageIndex + 1;
      elPageInput.blur();
    }
  });

  // Klik luar → kembalikan nilai ke halaman saat ini
  elPageInput.addEventListener("blur", () => {
    clearTimeout(pageInputDebounce);
    elPageInput.value = currentPageIndex + 1;
  });

  // Klik input → pilih semua teks agar mudah diganti
  elPageInput.addEventListener("focus", () => {
    elPageInput.select();
  });
}

// ===== Inisialisasi =====
// Tampilkan halaman pertama (indeks 0) saat website pertama kali dibuka
renderPage(0);
// Mulai mengunduh gambar sisa halaman secara bertahap di latar belakang
startIdlePreload();

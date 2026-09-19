// script.js
// DEBUG_TRIGGERS = true -> semua area trigger diwarnai merah transparan,
// supaya gampang cek apakah posisinya sudah pas menutupi tombol/teks di gambar.
// Set kembali ke false kalau sudah pas.
const DEBUG_TRIGGERS = false;

let currentPageIndex = 0;
let currentZoom = 1.0; // 1.0 = 100%
const ZOOM_MIN = 0.5;
const ZOOM_MAX = 3.0;

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
const elPageInput = document.getElementById("page-input");
const elTotalPages = document.getElementById("total-pages");
const elBtnZoomReset = document.getElementById("btn-zoom-reset");

const DEFAULT_RATIO = 210 / 297; // fallback A4 kalau halaman belum punya ratio

// Menghitung ukuran container (dalam pixel) sebesar mungkin tanpa
// melebihi ruang yang tersedia, sambil menjaga rasio halaman saat ini.
// Padding dibaca dari DOM agar otomatis sinkron dengan CSS breakpoint.
function fitContainer() {
  const page = PAGES[currentPageIndex];
  const ratio = (page && page.ratio) || DEFAULT_RATIO;

  // Baca padding wrapper dari DOM — sinkron dengan media query CSS
  const wStyle = getComputedStyle(magazineWrapper);
  const hPad = parseFloat(wStyle.paddingLeft) + parseFloat(wStyle.paddingRight);
  const vPad = parseFloat(wStyle.paddingTop) + parseFloat(wStyle.paddingBottom);

  // Ruang yang tersedia di dalam main area
  const availW = magazineMain.clientWidth - hPad;
  const availH = magazineMain.clientHeight - vPad;

  let width = availW;
  let height = width / ratio;

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

// ── Header UI helpers ─────────────────────────────────────────
function updateHeaderUI() {
  if (elPageInput) elPageInput.value = currentPageIndex + 1;
  if (elTotalPages) elTotalPages.textContent = PAGES.length;
  const pct = Math.round(currentZoom * 100);
  if (elBtnZoomReset) elBtnZoomReset.textContent = pct + "%";
}

// Zoom: delta = 0.1 (in), -0.1 (out), 0 (reset)
function handleZoom(delta) {
  if (delta === 0) {
    currentZoom = 1.0;
  } else {
    currentZoom = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, +(currentZoom + delta).toFixed(2)));
  }
  fitContainer();
  updateHeaderUI();
}

// Toggle fullscreen
function handleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen && document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen && document.exitFullscreen();
  }
}

// ── Smart Image Preloading ──────────────────────────────────
// Mendownload gambar halaman & popup di latar belakang (background)
// agar ketika user klik "Lanjut" gambar langsung muncul 0-detik dari cache browser.
const preloadedImages = new Set();

function preloadImage(url) {
  if (!url || preloadedImages.has(url)) return;
  preloadedImages.add(url);
  const img = new Image();
  img.src = url;
}

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
let idlePreloadIdx = 0;
function startIdlePreload() {
  function loadNext() {
    if (idlePreloadIdx >= PAGES.length) return;
    preloadPageAssets(idlePreloadIdx);
    idlePreloadIdx++;
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadNext, { timeout: 2000 });
    } else {
      setTimeout(loadNext, 300);
    }
  }
  setTimeout(loadNext, 1200); // Mulai setelah halaman pertama selesai tampil
}

function renderPage(index) {
  const page = PAGES[index];
  if (!page) return;

  currentPageIndex = index;

  fitContainer();
  updateHeaderUI();

  // Preload halaman-halaman sekitar di latar belakang
  preloadAdjacentPages(index);

  // Periksa apakah gambar sudah ada di cache browser
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
      if (pageLoader) pageLoader.classList.add("hidden");
    };
    // Tetap pasang src ke pageImage
    pageImage.src = page.image;
  }

  // hapus trigger halaman sebelumnya
  document.querySelectorAll(".trigger").forEach((el) => el.remove());

  // buat ulang trigger sesuai data halaman ini
  page.triggers.forEach((trigger) => {
    const el = document.createElement("button");
    el.className = "trigger";
    if (DEBUG_TRIGGERS) el.classList.add("debug");

    el.style.left = trigger.left + "%";
    el.style.top = trigger.top + "%";
    el.style.width = trigger.width + "%";
    el.style.height = trigger.height + "%";

    el.addEventListener("click", () => handleTriggerClick(trigger));
    pageContainer.appendChild(el);
  });
}

function handleTriggerClick(trigger) {
  if (trigger.type === "nav-next") {
    if (currentPageIndex < PAGES.length - 1) {
      renderPage(currentPageIndex + 1);
    }
  } else if (trigger.type === "nav-prev") {
    if (currentPageIndex > 0) {
      renderPage(currentPageIndex - 1);
    }
  } else if (trigger.type === "link") {
    window.open(trigger.url, "_blank", "noopener,noreferrer");
  } else if (trigger.type === "popup") {
    openPopup(trigger.popup);
  }
}

function openPopup(popup) {
  if (popup.image) {
    // mode gambar: tampilkan card hasil export Figma apa adanya
    popupBody.innerHTML = "";
    popupTitle.textContent = "";
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

  popupOverlay.classList.remove("hidden");
}

function closePopup() {
  popupOverlay.classList.add("hidden");
}

popupClose.addEventListener("click", closePopup);
popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) closePopup();
});

// Navigasi keyboard (tombol panah & Escape)
document.addEventListener("keydown", (e) => {
  // Jangan jalankan navigasi halaman kalau user sedang mengetik di input
  if (document.activeElement === elPageInput) return;
  if (e.key === "ArrowRight") handleTriggerClick({ type: "nav-next" });
  if (e.key === "ArrowLeft") handleTriggerClick({ type: "nav-prev" });
  if (e.key === "Escape") closePopup();
});

window.addEventListener("resize", fitContainer);

// ── Navigasi via input halaman ────────────────────────────────
// - Ketik angka → otomatis pindah setelah 600ms berhenti mengetik (debounce)
// - Enter → pindah langsung tanpa menunggu
// - Escape / klik luar → batal, nilai kembali ke halaman saat ini
let pageInputDebounce = null;

function navigateFromInput() {
  const raw = elPageInput.value.trim();
  // Terima format "2" atau "2/48"
  const num = parseInt(raw.split("/")[0], 10);
  if (!isNaN(num) && num >= 1 && num <= PAGES.length) {
    renderPage(num - 1);
    // TIDAK blur di sini: user tetap di dalam input, bisa langsung
    // ketik nomor halaman lain tanpa perlu klik lagi
  } else {
    elPageInput.value = currentPageIndex + 1;
  }
}

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

renderPage(0);
startIdlePreload();

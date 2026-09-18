// script.js
// DEBUG_TRIGGERS = true -> semua area trigger diwarnai merah transparan,
// supaya gampang cek apakah posisinya sudah pas menutupi tombol/teks di gambar.
// Set kembali ke false kalau sudah pas.
const DEBUG_TRIGGERS = false;

let currentPageIndex = 0;

const pageContainer = document.getElementById("page-container");
const pageImage = document.getElementById("page-image");
const popupOverlay = document.getElementById("popup-overlay");
const popupTitle = document.getElementById("popup-title");
const popupBody = document.getElementById("popup-body");
const popupClose = document.getElementById("popup-close");

const WRAPPER_PADDING = 32; // total padding kiri+kanan / atas+bawah yang disediakan untuk container (px)
const DEFAULT_RATIO = 210 / 297; // fallback A4 kalau halaman belum punya ratio

// Menghitung ukuran container (dalam pixel) sebesar mungkin tanpa
// melebihi ruang yang tersedia, sambil menjaga rasio halaman saat ini.
// Ini yang membuat rasio A4 selalu presisi baik di layar sempit-tinggi
// (mobile potret) maupun lebar-pendek (desktop).
function fitContainer() {
  const page = PAGES[currentPageIndex];
  const ratio = (page && page.ratio) || DEFAULT_RATIO;

  const availW = window.innerWidth - WRAPPER_PADDING;
  const availH = window.innerHeight - WRAPPER_PADDING;

  let width = availW;
  let height = width / ratio;

  if (height > availH) {
    height = availH;
    width = height * ratio;
  }

  pageContainer.style.width = width + "px";
  pageContainer.style.height = height + "px";
}

function renderPage(index) {
  const page = PAGES[index];
  if (!page) return;

  currentPageIndex = index;

  // set gambar background halaman
  pageImage.src = page.image;

  fitContainer();

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

// opsional: navigasi pakai tombol panah keyboard, enak buat testing di desktop
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") handleTriggerClick({ type: "nav-next" });
  if (e.key === "ArrowLeft") handleTriggerClick({ type: "nav-prev" });
  if (e.key === "Escape") closePopup();
});

window.addEventListener("resize", fitContainer);

renderPage(0);

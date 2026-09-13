// pages-data.js
//
// Cara isi halaman yang masih kosong (2,3,4,5,6,7,8,9):
//   1. Buka tools/trigger-picker.html di browser
//   2. Load gambar halaman terkait
//   3. Drag di atas gambar untuk gambar kotak trigger (navigasi / popup)
//   4. Atur tipe & isi popup di panel kanan
//   5. Copy hasil dari kotak "Hasil" lalu tempel ke properti "triggers" di bawah

const PAGES = [
  {
    id: "cover",
    image: "images/cover.png",
    ratio: 1202 / 1698,
    triggers: [
      {
        type: "nav-next",
        left: 81.6,
        top: 87.9,
        width: 15.0,
        height: 4.1
      }
    ]
  },
  {
    id: "salam-redaksi",
    image: "images/salam redaksi.png",
    ratio: 1202 / 1698, // TODO: sesuaikan dengan ukuran asli hasil export
    triggers: [
      {
        type: "nav-next",
        left: 7.6,
        top: 92.9,
        width: 7.9,
        height: 2.3
      },
      {
        type: "nav-next",
        left: 85.6,
        top: 92.7,
        width: 7.9,
        height: 2.3
      }
    ]
  },
  {
    id: "daftar-isi",
    image: "images/daftar isi.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "nav-prev",
        left: 7.6,
        top: 92.9,
        width: 8,
        height: 2.3
      },
      {
        type: "nav-next",
        left: 85.6,
        top: 92.6,
        width: 8,
        height: 2.4
      }
    ]
  },
  {
    id: "daftar-isi-lanjutan",
    image: "images/daftar isi lanjutan.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "nav-next",
        left: 7.5,
        top: 92.9,
        width: 8,
        height: 2.4
      },
      {
        type: "nav-next",
        left: 85.6,
        top: 92.7,
        width: 7.9,
        height: 2.3
      }
    ]
  },
  {
    id: "h3",
    image: "images/h3.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "nav-prev",
        left: 7.4,
        top: 92.9,
        width: 8.2,
        height: 2.3
      },
      {
        type: "nav-next",
        left: 85.6,
        top: 92.7,
        width: 7.9,
        height: 2.2
      }
    ]
  },
  {
    id: "h4",
    image: "images/h4.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "nav-prev",
        left: 7.5,
        top: 92.9,
        width: 8.3,
        height: 2.3
      },
      {
        type: "nav-next",
        left: 85.6,
        top: 92.7,
        width: 8.1,
        height: 2.4
      }
    ]
  },
  {
    id: "h5",
    image: "images/h5.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "nav-next",
        left: 85.5,
        top: 92.9,
        width: 8,
        height: 2.4
      },
      {
        type: "nav-prev",
        left: 7.7,
        top: 93,
        width: 8.2,
        height: 2.4
      }
    ]
  },
  {
    id: "h6",
    image: "images/h6.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "nav-prev",
        left: 7.7,
        top: 92.8,
        width: 8,
        height: 2.5
      },
      {
        type: "nav-next",
        left: 85.7,
        top: 92.7,
        width: 8,
        height: 2.5
      }
    ]
  },
  {
    id: "h7",
    image: "images/h7.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "nav-prev",
        left: 5.7,
        top: 88.8,
        width: 13,
        height: 2.9
      },
      {
        type: "nav-next",
        left: 81,
        top: 88.8,
        width: 12.5,
        height: 3.1
      }
    ]
  },
  {
    id: "h8",
    image: "images/h8.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "popup",
        left: 43.6,
        top: 27.2,
        width: 6.5,
        height: 2,
        popup: { title: "gedeg", body: "Anyaman dari bilah bambu yang biasa digunakan untuk dinding rumah, sekat rumah, atau pagar" }
      },
      {
        type: "popup",
        left: 75.1,
        top: 26.9,
        width: 5.7,
        height: 2.2,
        popup: { title: "dapor", body: "Tungku yang terbuat dari tanah liat, biasanya menggunakan kayu sebagai bahan bakar" }
      },
      {
        type: "nav-prev",
        left: 7.6,
        top: 92.8,
        width: 8,
        height: 2.4
      },
      {
        type: "nav-next",
        left: 85.5,
        top: 92.5,
        width: 8.2,
        height: 2.6
      }
    ]
  }
];

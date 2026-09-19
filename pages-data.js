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
        height: 4.1,
      },
    ],
  },
  {
    id: "salam-redaksi",
    image: "images/salam redaksi.png",
    ratio: 1202 / 1698, // TODO: sesuaikan dengan ukuran asli hasil export
    triggers: [
      {
        type: "nav-prev",
        left: 7.6,
        top: 92.8,
        width: 8,
        height: 2.6,
      },
      {
        type: "nav-next",
        left: 85.7,
        top: 92.5,
        width: 7.9,
        height: 2.5,
      },
    ],
  },
  {
    id: "daftar-isi",
    image: "images/daftar isi.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "nav-page",
        left: 11.3,
        top: 19,
        width: 79.4,
        height: 2.7,
        page: 2
      },
      {
        type: "nav-page",
        left: 11.3,
        top: 22.2,
        width: 79.4,
        height: 1.7,
        page: 3
      },
      {
        type: "nav-page",
        left: 11.2,
        top: 24.3,
        width: 79.2,
        height: 2.3,
        page: 5
      },
      {
        type: "nav-page",
        left: 11.1,
        top: 26.9,
        width: 79.6,
        height: 2.3,
        page: 6
      },
      {
        type: "nav-page",
        left: 11.1,
        top: 29.6,
        width: 79.8,
        height: 2.1,
        page: 7
      },
      {
        type: "nav-page",
        left: 10.9,
        top: 32.1,
        width: 80.6,
        height: 2.4,
        page: 8
      },
      {
        type: "nav-page",
        left: 11.8,
        top: 36.5,
        width: 79.4,
        height: 2.6,
        page: 10
      },
      {
        type: "nav-page",
        left: 11.7,
        top: 39.5,
        width: 80.1,
        height: 2.5,
        page: 11
      },
      {
        type: "nav-page",
        left: 11.7,
        top: 42.3,
        width: 79.8,
        height: 1.8,
        page: 12
      },
      {
        type: "nav-page",
        left: 11.7,
        top: 44.4,
        width: 79.9,
        height: 2.1,
        page: 15
      },
      {
        type: "nav-page",
        left: 11.5,
        top: 47,
        width: 80.9,
        height: 2,
        page: 16
      },
      {
        type: "nav-page",
        left: 11.7,
        top: 49.3,
        width: 80.7,
        height: 2.1,
        page: 17
      },
      {
        type: "nav-page",
        left: 11.7,
        top: 51.7,
        width: 80.5,
        height: 2.4,
        page: 18
      },
      {
        type: "nav-page",
        left: 11.4,
        top: 56.8,
        width: 80.5,
        height: 2.3,
        page: 20
      },
      {
        type: "nav-page",
        left: 11.4,
        top: 59.3,
        width: 80.5,
        height: 2.1,
        page: 22
      },
      {
        type: "nav-page",
        left: 11.7,
        top: 61.7,
        width: 80,
        height: 2.3,
        page: 25
      },
      {
        type: "nav-page",
        left: 11.3,
        top: 64.3,
        width: 80.5,
        height: 2.6,
        page: 26
      },
      {
        type: "nav-page",
        left: 11.2,
        top: 67.2,
        width: 80.7,
        height: 1.8,
        page: 28
      },
      {
        type: "nav-page",
        left: 11.1,
        top: 69.3,
        width: 80.9,
        height: 2.2,
        page: 29
      },
      {
        type: "nav-page",
        left: 11.2,
        top: 71.8,
        width: 80.4,
        height: 2.6,
        page: 30
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
        left: 85.6,
        top: 92.6,
        width: 8.1,
        height: 2.4
      }
    ],
  },
  {
    id: "daftar-isi-lanjutan",
    image: "images/daftar isi lanjutan.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "nav-page",
        left: 11.2,
        top: 18.9,
        width: 77,
        height: 1.9,
        page: 32
      },
      {
        type: "nav-page",
        left: 11.2,
        top: 21.1,
        width: 77.9,
        height: 1.8,
        page: 33
      },
      {
        type: "nav-page",
        left: 11.2,
        top: 23.2,
        width: 78.9,
        height: 2,
        page: 36
      },
      {
        type: "nav-page",
        left: 11.2,
        top: 25.5,
        width: 79.1,
        height: 1.9,
        page: 37
      },
      {
        type: "nav-page",
        left: 11.1,
        top: 27.6,
        width: 79.6,
        height: 2.4,
        page: 38
      },
      {
        type: "nav-page",
        left: 11,
        top: 32.2,
        width: 77.2,
        height: 2.1,
        page: 39
      },
      {
        type: "nav-page",
        left: 10.9,
        top: 34.7,
        width: 77.9,
        height: 1.8,
        page: 43
      },
      {
        type: "nav-page",
        left: 10.9,
        top: 36.8,
        width: 78.2,
        height: 1.8,
        page: 44
      },
      {
        type: "nav-page",
        left: 10.8,
        top: 39.1,
        width: 77.8,
        height: 2,
        page: 45
      },
      {
        type: "nav-page",
        left: 10.7,
        top: 41.4,
        width: 78.9,
        height: 2.2,
        page: 47
      },
      {
        type: "nav-prev",
        left: 7.7,
        top: 92.8,
        width: 8,
        height: 2.6
      },
      {
        type: "nav-next",
        left: 85.7,
        top: 92.5,
        width: 8,
        height: 2.6
      }
    ],
  },
  {
    id: "h3",
    image: "images/H3.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "nav-prev",
        left: 7.4,
        top: 92.9,
        width: 8.2,
        height: 2.3,
      },
      {
        type: "nav-next",
        left: 85.6,
        top: 92.7,
        width: 7.9,
        height: 2.2,
      },
    ],
  },
  {
    id: "h4",
    image: "images/H4.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "nav-prev",
        left: 7.5,
        top: 92.9,
        width: 8.3,
        height: 2.3,
      },
      {
        type: "nav-next",
        left: 85.6,
        top: 92.7,
        width: 8.1,
        height: 2.4,
      },
    ],
  },
  {
    id: "h5",
    image: "images/H5.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "nav-next",
        left: 85.5,
        top: 92.9,
        width: 8,
        height: 2.4,
      },
      {
        type: "nav-prev",
        left: 7.7,
        top: 93,
        width: 8.2,
        height: 2.4,
      },
    ],
  },
  {
    id: "h6",
    image: "images/H6.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "nav-prev",
        left: 7.7,
        top: 92.8,
        width: 8,
        height: 2.5,
      },
      {
        type: "nav-next",
        left: 85.7,
        top: 92.7,
        width: 8,
        height: 2.5,
      },
    ],
  },
  {
    id: "h7",
    image: "images/H7.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "nav-prev",
        left: 5.7,
        top: 88.8,
        width: 13,
        height: 2.9,
      },
      {
        type: "nav-next",
        left: 81,
        top: 88.8,
        width: 12.5,
        height: 3.1,
      },
    ],
  },
  {
    id: "h8",
    image: "images/h8.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "popup",
        left: 42.2,
        top: 26.6,
        width: 8.8,
        height: 2.6,
        popup: { image: "images/popups/h8-gedeg.png" },
      },
      {
        type: "popup",
        left: 74.1,
        top: 26.7,
        width: 7.9,
        height: 2.7,
        popup: { image: "images/popups/H8-Dapor.png" },
      },
      {
        type: "nav-next",
        left: 82.4,
        top: 91.1,
        width: 14,
        height: 6.1,
      },
      {
        type: "nav-prev",
        left: 4.1,
        top: 91.4,
        width: 17.7,
        height: 6.1,
      },
    ],
  },
  {
    id: "h9",
    image: "images/h9.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "popup",
        left: 74.8,
        top: 26.1,
        width: 5.8,
        height: 3,
        popup: { image: "images/popups/H9-Ikan.png" },
      },
      {
        type: "popup",
        left: 80.9,
        top: 26.1,
        width: 6.9,
        height: 3.3,
        popup: { image: "images/popups/H9-Udang.png" },
      },
      {
        type: "popup",
        left: 15.8,
        top: 28.4,
        width: 10.3,
        height: 3.2,
        popup: { image: "images/popups/H9-Kupang.png" },
      },
      {
        type: "nav-next",
        left: 81.4,
        top: 90.9,
        width: 14.7,
        height: 6.2,
      },
      {
        type: "nav-prev",
        left: 3.1,
        top: 90.9,
        width: 19.4,
        height: 6.6,
      },
    ],
  },
  {
    id: "h10",
    image: "images/h10.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "popup",
        left: 39.3,
        top: 27.7,
        width: 11,
        height: 2.4,
        popup: { image: "images/popups/H10-Sari ikan.png" },
      },
      {
        type: "popup",
        left: 65.7,
        top: 68.8,
        width: 10.5,
        height: 3.1,
        popup: { image: "images/popups/H10-Partikel.png" },
      },
      {
        type: "nav-next",
        left: 81.3,
        top: 90.7,
        width: 15.9,
        height: 6.4,
      },
      {
        type: "nav-prev",
        left: 4.1,
        top: 90.9,
        width: 16.1,
        height: 6,
      },
    ],
  },
  {
    id: "h11",
    image: "images/h11.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "popup",
        left: 57.6,
        top: 80.5,
        width: 18.1,
        height: 1.6,
        popup: { image: "images/popups/H11- termometer klinis.png", alt: "" },
      },
      {
        type: "popup",
        left: 77.1,
        top: 80.4,
        width: 11.2,
        height: 1.8,
        popup: { image: "images/popups/H11- termometer digital.png", alt: "" },
      },
      {
        type: "popup",
        left: 13.2,
        top: 82.7,
        width: 6.4,
        height: 2,
        popup: { image: "images/popups/H11- termometer digital.png", alt: "" },
      },
      {
        type: "popup",
        left: 22.1,
        top: 82.9,
        width: 23.5,
        height: 1.5,
        popup: { image: "images/popups/H11- termometer inframerah.png", alt: "" },
      },
      {
        type: "popup",
        left: 47.8,
        top: 82.7,
        width: 21.3,
        height: 2.1,
        popup: { image: "images/popups/H11- termometer ruangan.png", alt: "" },
      },
      {
        type: "popup",
        left: 71.2,
        top: 82.8,
        width: 16.3,
        height: 1.7,
        popup: { image: "images/popups/H11- termometer lab.png", alt: "" },
      },
      {
        type: "popup",
        left: 13.1,
        top: 85.2,
        width: 19.1,
        height: 1.5,
        popup: { image: "images/popups/H11- termometer bimetal.png", alt: "" },
      },
      {
        type: "nav-prev",
        left: 7.7,
        top: 92.8,
        width: 7.9,
        height: 2.4,
      },
      {
        type: "nav-next",
        left: 85.4,
        top: 92.5,
        width: 8.3,
        height: 2.4,
      },
    ],
  },
  {
    id: "h12",
    image: "images/h12.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "popup",
        left: 24.8,
        top: 17.9,
        width: 12.8,
        height: 3.2,
        popup: { image: "images/popups/H12- Celsius.png" },
      },
      {
        type: "popup",
        left: 38.1,
        top: 17.9,
        width: 14.9,
        height: 3.1,
        popup: { image: "images/popups/H12- Fahrenheit.png" },
      },
      {
        type: "popup",
        left: 53.5,
        top: 18,
        width: 13,
        height: 3,
        popup: { image: "images/popups/H12-Reamur.png" },
      },
      {
        type: "popup",
        left: 70.7,
        top: 18.1,
        width: 11.8,
        height: 3,
        popup: { image: "images/popups/H12-Kelvin.png" },
      },
      {
        type: "nav-next",
        left: 81.9,
        top: 91.2,
        width: 15.5,
        height: 5.9,
      },
      {
        type: "nav-prev",
        left: 3.2,
        top: 90.9,
        width: 17.5,
        height: 5.6,
      },
    ],
  },
  {
    id: "h13",
    image: "images/h13.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "nav-next",
        left: 80.9,
        top: 91,
        width: 16.4,
        height: 5.9,
      },
      {
        type: "nav-prev",
        left: 3.1,
        top: 91.1,
        width: 20,
        height: 6.1,
      },
    ],
  },
  {
    id: "h14",
    image: "images/h14.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "nav-next",
        left: 81.7,
        top: 91.2,
        width: 15.9,
        height: 5.3,
      },
      {
        type: "nav-prev",
        left: 2.4,
        top: 91,
        width: 18.7,
        height: 6.3,
      },
    ],
  },
  {
    id: "h15",
    image: "images/h15.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "link",
        left: 28,
        top: 67.2,
        width: 44.9,
        height: 7.1,
        url: "https://www.educaplay.com/learning-resources/30362352-padanan_suhu_termometer_dan_konversi_skala.html",
      },
      {
        type: "nav-next",
        left: 79.1,
        top: 90.7,
        width: 20.8,
        height: 6.4
      },
      {
        type: "nav-prev",
        left: 3.4,
        top: 90.6,
        width: 18.2,
        height: 7.4
      }
    ]
  },
  {
    id: "h16",
    image: "images/h16.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "popup",
        left: 65.3,
        top: 81.7,
        width: 20.6,
        height: 5.8,
        popup: { image: "images/popups/H16- Kunci Jawaban.png" }
      },
      {
        type: "nav-next",
        left: 81.1,
        top: 90.8,
        width: 16.7,
        height: 6.2
      },
      {
        type: "nav-prev",
        left: 2.1,
        top: 91,
        width: 17.9,
        height: 6.1
      }
    ]
  },
  {
    id: "h17",
    image: "images/h17.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "nav-prev",
        left: 2.6,
        top: 87.6,
        width: 21.8,
        height: 7.4
      },
      {
        type: "nav-next",
        left: 75,
        top: 87.3,
        width: 22.3,
        height: 7.5
      }
    ]
  },
  {
    id: "h18",
    image: "images/h18.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "nav-next",
        left: 83.3,
        top: 91.4,
        width: 13.9,
        height: 5.5
      },
      {
        type: "nav-prev",
        left: 2.4,
        top: 91.4,
        width: 17,
        height: 5.4
      }
    ]
  },
  {
    id: "h19",
    image: "images/h19.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "nav-next",
        left: 82.2,
        top: 91.1,
        width: 15.4,
        height: 6.2
      },
      {
        type: "nav-prev",
        left: 2.4,
        top: 91.7,
        width: 17.7,
        height: 5.9
      }
    ]
  },
  {
    id: "h20",
    image: "images/H20.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "popup",
        left: 69.2,
        top: 25,
        width: 14.7,
        height: 2.6,
        popup: { image: "images/popups/H20- Petis madura.png" }
      },
      {
        type: "popup",
        left: 74.2,
        top: 27.7,
        width: 9.8,
        height: 2.6,
        popup: { image: "images/popups/H20- Tungku.png" }
      },
      {
        type: "popup",
        left: 38.8,
        top: 57.9,
        width: 34.3,
        height: 3.2,
        popup: { image: "images/popups/H20- Kalor berbeda dengan suhu.png" }
      },
      {
        type: "nav-next",
        left: 81.9,
        top: 90.9,
        width: 15,
        height: 6.2
      },
      {
        type: "nav-prev",
        left: 2.4,
        top: 91.2,
        width: 16.3,
        height: 6
      }
    ]
  },
  {
    id: "h21",
    image: "images/H21.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "popup",
        left: 23.7,
        top: 45.1,
        width: 26.4,
        height: 2.9,
        popup: { image: "images/popups/H21- Q=m.c.t.png" }
      },
      {
        type: "popup",
        left: 67.8,
        top: 58.6,
        width: 22.7,
        height: 3.7,
        popup: { image: "images/popups/H21- Pojok etno.png" }
      },
      {
        type: "nav-next",
        left: 80.2,
        top: 90.9,
        width: 17,
        height: 6.2
      },
      {
        type: "nav-prev",
        left: 2.4,
        top: 91.7,
        width: 20.4,
        height: 5.5
      }
    ]
  },
  {
    id: "h22",
    image: "images/H22.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "popup",
        left: 31.9,
        top: 27,
        width: 24.5,
        height: 3.4,
        popup: { image: "images/popups/H22-Setimbang secara termal.png" }
      },
      {
        type: "popup",
        left: 19.9,
        top: 60.6,
        width: 20.9,
        height: 3.9,
        popup: { image: "images/popups/H22-Qlepas=Qterima.png" }
      },
      {
        type: "popup",
        left: 72.2,
        top: 82.1,
        width: 14.6,
        height: 6.5,
        popup: { image: "images/popups/H22-Pojok Etno.png" }
      },
      {
        type: "nav-next",
        left: 81.9,
        top: 91.3,
        width: 15.4,
        height: 5.9
      },
      {
        type: "nav-prev",
        left: 2.4,
        top: 90.9,
        width: 17.3,
        height: 6.9
      }
    ]
  },
  {
    id: "h23",
    image: "images/H23.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "popup",
        left: 55.6,
        top: 52.2,
        width: 35.5,
        height: 4.5,
        popup: { image: "images/popups/H23- Kunci Jawaban 1.png" }
      },
      {
        type: "popup",
        left: 54.5,
        top: 86.9,
        width: 34.6,
        height: 4,
        popup: { image: "images/popups/H23- Kunci Jawaban 2.png" }
      },
      {
        type: "nav-next",
        left: 81.7,
        top: 91.4,
        width: 15.5,
        height: 5.9
      },
      {
        type: "nav-prev",
        left: 2.4,
        top: 91.3,
        width: 17.4,
        height: 5.5
      }
    ]
  },
  {
    id: "h24",
    image: "images/H24.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "popup",
        left: 79.8,
        top: 24.9,
        width: 13.7,
        height: 6.2,
        popup: { image: "images/popups/H24-Pojok Etno.png" }
      },
      {
        type: "popup",
        left: 18.2,
        top: 30.3,
        width: 11.9,
        height: 2.6,
        popup: { image: "images/popups/H24- Konduksi.png" }
      },
      {
        type: "popup",
        left: 40.4,
        top: 61.9,
        width: 13.1,
        height: 3.6,
        popup: { image: "images/popups/H22- Konveksi.png" }
      },
      {
        type: "nav-next",
        left: 80.5,
        top: 91.3,
        width: 16.8,
        height: 5
      },
      {
        type: "nav-prev",
        left: 2.4,
        top: 91.6,
        width: 20.7,
        height: 5.6
      }
    ]
  },
  {
    id: "h25",
    image: "images/H25.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "popup",
        left: 14.7,
        top: 15.2,
        width: 10.1,
        height: 3,
        popup: { image: "images/popups/H25- Radiasi.png" }
      },
      {
        type: "popup",
        left: 74.2,
        top: 39.8,
        width: 12.9,
        height: 5.5,
        popup: { image: "images/popups/H25-Pojok Etno.png" }
      },
      {
        type: "popup",
        left: 75.2,
        top: 67.3,
        width: 14.7,
        height: 2.4,
        popup: { image: "images/popups/H25-Sumber panas.png" }
      },
      {
        type: "nav-next",
        left: 78.8,
        top: 91.4,
        width: 18.7,
        height: 4.8
      },
      {
        type: "nav-prev",
        left: 2.4,
        top: 91.4,
        width: 19.4,
        height: 5.6
      }
    ]
  },
  {
    id: "h26",
    image: "images/H26.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "nav-next",
        left: 81.1,
        top: 91,
        width: 16.4,
        height: 6.5
      },
      {
        type: "nav-prev",
        left: 2.4,
        top: 91.4,
        width: 20.1,
        height: 6.2
      }
    ]
  },
  {
    id: "h27",
    image: "images/H27.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "popup",
        left: 63.3,
        top: 81.4,
        width: 25.5,
        height: 7.9,
        popup: { image: "images/popups/H27- Kunci Jawaban.png" }
      },
      {
        type: "nav-next",
        left: 80.9,
        top: 91.3,
        width: 16.5,
        height: 5.1
      },
      {
        type: "nav-prev",
        left: 2.4,
        top: 91.6,
        width: 17.3,
        height: 5.3
      }
    ]
  },
  {
    id: "h28",
    image: "images/H28.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "link",
        left: 28.1,
        top: 67,
        width: 42.6,
        height: 7.3,
        url: "https://www.educaplay.com/learning-resources/30362489-rangkaian_perpindahan_kalor.html",
      },
      {
        type: "nav-next",
        left: 79.8,
        top: 91.3,
        width: 20.1,
        height: 5.3
      },
      {
        type: "nav-prev",
        left: 0.9,
        top: 91.3,
        width: 19.9,
        height: 5.4
      }
    ]
  },
  {
    id: "h29",
    image: "images/H29.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "nav-next",
        left: 77.1,
        top: 87,
        width: 20,
        height: 7.1
      },
      {
        type: "nav-prev",
        left: 2.5,
        top: 87.9,
        width: 20.3,
        height: 6.3
      }
    ]
  },
  {
    id: "h30",
    image: "images/H30.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "link",
        left: 28,
        top: 70.7,
        width: 44.8,
        height: 8.2,
        url: "https://www.educaplay.com/learning-resources/30301382-pemuaian.html",
      },
      {
        type: "nav-next",
        left: 82,
        top: 89.5,
        width: 18,
        height: 6.3
      },
      {
        type: "nav-prev",
        left: 1.1,
        top: 89.6,
        width: 19.5,
        height: 6.1
      }
    ]
  },
  {
    id: "h31",
    image: "images/H31.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "popup",
        left: 27.8,
        top: 25.6,
        width: 12.6,
        height: 3.1,
        popup: { image: "images/popups/H31- Pemuain.png" }
      },
      {
        type: "popup",
        left: 46.6,
        top: 62.8,
        width: 22.5,
        height: 3.4,
        popup: { image: "images/popups/H31- Bergetar lebih cepat.png" }
      },
      {
        type: "popup",
        left: 76.6,
        top: 82.2,
        width: 14.6,
        height: 5.9,
        popup: { image: "images/popups/H31- Pojok etno.png" }
      },
      {
        type: "nav-next",
        left: 84.4,
        top: 89.7,
        width: 13,
        height: 5.8
      },
      {
        type: "nav-prev",
        left: 2.9,
        top: 89.7,
        width: 16.3,
        height: 6
      }
    ]
  },
  {
    id: "h32",
    image: "images/H32.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "popup",
        left: 51.1,
        top: 38.5,
        width: 19.9,
        height: 3.1,
        popup: { image: "images/popups/H32-Pemuaian panjang.png" }
      },
      {
        type: "popup",
        left: 37.2,
        top: 69.3,
        width: 27.9,
        height: 3.3,
        popup: { image: "images/popups/H32-Peralatan bahan logam.png" }
      },
      {
        type: "nav-next",
        left: 82.7,
        top: 89.6,
        width: 14.6,
        height: 6.1
      },
      {
        type: "nav-prev",
        left: 2.6,
        top: 89.5,
        width: 18.6,
        height: 6.7
      }
    ]
  },
  {
    id: "h33",
    image: "images/H33.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "popup",
        left: 36.7,
        top: 21,
        width: 55.5,
        height: 3.1,
        popup: { image: "images/popups/H33- Pemanfaatan pemuaian.png" }
      },
      {
        type: "popup",
        left: 82.5,
        top: 39.4,
        width: 13.6,
        height: 7.2,
        popup: { image: "images/popups/H33- Pemanfaatan pemuaian (1).png" }
      },
      {
        type: "popup",
        left: 23.9,
        top: 82.8,
        width: 16.4,
        height: 3.1,
        popup: { image: "" }
      },
      {
        type: "nav-next",
        left: 81.8,
        top: 89.1,
        width: 15.6,
        height: 6.5
      },
      {
        type: "nav-prev",
        left: 2.5,
        top: 89.5,
        width: 19.5,
        height: 7.2
      }
    ]
  },
  {
    id: "h34",
    image: "images/H34.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "popup",
        left: 63.4,
        top: 84.2,
        width: 25,
        height: 4.6,
        popup: { image: "images/popups/H34- Kunci Jawaban.png" }
      },
      {
        type: "nav-next",
        left: 84.8,
        top: 90,
        width: 12.5,
        height: 5.1
      },
      {
        type: "nav-prev",
        left: 2.5,
        top: 90,
        width: 17.8,
        height: 6.1
      }
    ]
  },
  {
    id: "h35",
    image: "images/H35.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "link",
        left: 27.8,
        top: 79.8,
        width: 45,
        height: 7.5,
        url: "https://www.educaplay.com/learning-resources/30301230-kuis_termal_a_z.html",
      },
      {
        type: "nav-next",
        left: 82.2,
        top: 89.5,
        width: 17.6,
        height: 6.7
      },
      {
        type: "nav-prev",
        left: 1.1,
        top: 89.8,
        width: 21.6,
        height: 6.3
      }
    ]
  },
  {
    id: "h36",
    image: "images/H36.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "nav-next",
        left: 74.2,
        top: 86,
        width: 24.5,
        height: 8.1
      },
      {
        type: "nav-prev",
        left: 1.3,
        top: 86.7,
        width: 22.7,
        height: 7.8
      }
    ]
  },
  {
    id: "h37",
    image: "images/H37.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "nav-next",
        left: 82.7,
        top: 90,
        width: 16.9,
        height: 5.4
      },
      {
        type: "nav-prev",
        left: 2,
        top: 89.8,
        width: 19.1,
        height: 6.5
      }
    ]
  },
  {
    id: "h38",
    image: "images/H38.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "nav-next",
        left: 83.9,
        top: 89.6,
        width: 15.2,
        height: 5.9
      },
      {
        type: "nav-prev",
        left: 3.3,
        top: 89.8,
        width: 15.1,
        height: 6.4
      }
    ]
  },
  {
    id: "h39",
    image: "images/H39.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "nav-next",
        left: 82.5,
        top: 89.3,
        width: 17,
        height: 6
      },
      {
        type: "nav-prev",
        left: 1.4,
        top: 89.7,
        width: 18.2,
        height: 6.5
      }
    ]
  },
  {
    id: "h40",
    image: "images/H40.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "nav-next",
        left: 82.2,
        top: 89.9,
        width: 16.8,
        height: 6.3
      },
      {
        type: "nav-prev",
        left: 4.2,
        top: 89.9,
        width: 17,
        height: 6.4
      }
    ]
  },
  {
    id: "h41",
    image: "images/H41.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "nav-next",
        left: 82.2,
        top: 89.3,
        width: 17.1,
        height: 6.3
      },
      {
        type: "nav-prev",
        left: 2.3,
        top: 89.9,
        width: 19.8,
        height: 6.2
      }
    ]
  },
  {
    id: "h42",
    image: "images/H42.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "popup",
        left: 68.4,
        top: 58.5,
        width: 23.9,
        height: 5.3,
        popup: { image: "images/popups/H40- Kunci Jawaban.png" }
      },
      {
        type: "nav-next",
        left: 83.2,
        top: 89.5,
        width: 16.1,
        height: 6.1
      },
      {
        type: "nav-prev",
        left: 3.2,
        top: 89.7,
        width: 18.6,
        height: 6.2
      }
    ]
  },
  {
    id: "h43",
    image: "images/H43.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "nav-next",
        left: 82.2,
        top: 89.6,
        width: 17.1,
        height: 6.7
      },
      {
        type: "nav-prev",
        left: 2.9,
        top: 89.6,
        width: 19.1,
        height: 6.3
      }
    ]
  },
  {
    id: "h44",
    image: "images/H44.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "nav-next",
        left: 81.8,
        top: 89.3,
        width: 18,
        height: 5.9
      },
      {
        type: "nav-prev",
        left: 2.5,
        top: 89.8,
        width: 18.1,
        height: 6.8
      }
    ]
  },
  {
    id: "h45",
    image: "images/H45.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "nav-next",
        left: 77.5,
        top: 88,
        width: 20,
        height: 5.3
      },
      {
        type: "nav-prev",
        left: 2.9,
        top: 87.8,
        width: 23.1,
        height: 6.8
      }
    ]
  },
  {
    id: "h46",
    image: "images/H46.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "nav-prev",
        left: 0.2,
        top: 88.3,
        width: 17,
        height: 6.5
      }
    ]
  },
];

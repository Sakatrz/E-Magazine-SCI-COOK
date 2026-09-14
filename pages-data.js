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
        type: "nav-next",
        left: 7.6,
        top: 92.9,
        width: 7.9,
        height: 2.3,
      },
      {
        type: "nav-next",
        left: 85.6,
        top: 92.7,
        width: 7.9,
        height: 2.3,
      },
    ],
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
        height: 2.3,
      },
      {
        type: "nav-next",
        left: 85.6,
        top: 92.6,
        width: 8,
        height: 2.4,
      },
    ],
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
        height: 2.4,
      },
      {
        type: "nav-next",
        left: 85.6,
        top: 92.7,
        width: 7.9,
        height: 2.3,
      },
    ],
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
    image: "images/h4.png",
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
    image: "images/h5.png",
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
    image: "images/h6.png",
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
    image: "images/h7.png",
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
        left: 43.6,
        top: 27.2,
        width: 6.5,
        height: 2,
        popup: { title: "gedeg", body: "Anyaman dari bilah bambu yang biasa digunakan untuk dinding rumah, sekat rumah, atau pagar" },
      },
      {
        type: "popup",
        left: 75.1,
        top: 26.9,
        width: 5.7,
        height: 2.2,
        popup: { title: "dapor", body: "Tungku yang terbuat dari tanah liat, biasanya menggunakan kayu sebagai bahan bakar" },
      },
      {
        type: "nav-prev",
        left: 7.6,
        top: 92.8,
        width: 8,
        height: 2.4,
      },
      {
        type: "nav-next",
        left: 85.5,
        top: 92.5,
        width: 8.2,
        height: 2.6,
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
        left: 16.4,
        top: 28.4,
        width: 9.1,
        height: 3.3,
        popup: { title: "Kupang", body: "Kupang adalah jenis kerang laut berukuran sangat kecil (seukuran biji beras atau kedelai) yang hidup di daerah berlumpur." },
      },
      {
        type: "popup",
        left: 75.1,
        top: 26.4,
        width: 5.5,
        height: 2.6,
        popup: { title: "Ikan", body: "Ikan yang biasanya digunakan adalah ikan tongkol, ikan tuna, dan ikan layang" },
      },
      {
        type: "popup",
        left: 81.2,
        top: 26.3,
        width: 6.8,
        height: 3.1,
        popup: { title: "Udang", body: "Udang yang biasanya digunakan adalah udang rebon" },
      },
      {
        type: "nav-next",
        left: 83.5,
        top: 92.1,
        width: 11.9,
        height: 4.2,
      },
      {
        type: "nav-prev",
        left: 5.7,
        top: 91.8,
        width: 13,
        height: 4.3,
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
        left: 39.2,
        top: 27.6,
        width: 10.9,
        height: 2.7,
        popup: { title: "Sari Ikan", body: "Sari ikan adalah ekstrak daging ikan yang di peroleh dengan cara pengukusan atau penyulingan khusus" },
      },
      {
        type: "popup",
        left: 66.2,
        top: 69.3,
        width: 9.5,
        height: 2.7,
        popup: { title: "Partikel", body: "Partikel adalah satuan atau unit terkecil dari suatu materi yang masih memiliki sifat fisik atau kimia dari materi" },
      },
      {
        type: "nav-next",
        left: 83.9,
        top: 91.5,
        width: 12.9,
        height: 5.6,
      },
      {
        type: "nav-prev",
        left: 4.8,
        top: 91.4,
        width: 14.4,
        height: 5.6,
      },
    ],
  },
  {
    id: "h11",
    image: "images/h11.png",
    ratio: 1198 / 1684,
    triggers: [
      {
        type: "popup",
        left: 57.2,
        top: 79.9,
        width: 18.6,
        height: 2.9,
        popup: { title: "Termometer Klinis", body: "Termometer klinis adalah alat medis yang digunakan untuk mengukur suhu tubuh manusia" },
      },
      {
        type: "popup",
        left: 76.6,
        top: 79.9,
        width: 12.9,
        height: 3,
        popup: {
          title: "Termometer Digital",
          body: "Termometer digital adalah alat pengukur suhu modern yang menggunakan sensor elektronik (seperti termistor atau termokopel) untuk mendeteksi panas dan menampilkan hasilnya dalam bentuk angka digital pada layar LCD",
        },
      },
      {
        type: "popup",
        left: 12.4,
        top: 82.1,
        width: 8.3,
        height: 3,
        popup: {
          title: "Termometer Digital",
          body: "Termometer digital adalah alat pengukur suhu modern yang menggunakan sensor elektronik (seperti termistor atau termokopel) untuk mendeteksi panas dan menampilkan hasilnya dalam bentuk angka digital pada layar LCD",
        },
      },
      {
        type: "popup",
        left: 21.3,
        top: 82.1,
        width: 25.5,
        height: 3,
        popup: {
          title: "Termometer Inframerah",
          body: "Infrared thermometer (termometer inframerah atau thermogun) adalah alat pengukur suhu tanpa kontak langsung yang mendeteksi radiasi energi panas inframerah dari permukaan suatu objek atau tubuh",
        },
      },
      {
        type: "popup",
        left: 47.5,
        top: 82.6,
        width: 22,
        height: 2.4,
        popup: { title: "Termometer Ruangan", body: "Termometer ruangan adalah alat yang digunakan untuk mengukur suhu udara di dalam suatu ruangan" },
      },
      {
        type: "popup",
        left: 70.8,
        top: 82.7,
        width: 18.5,
        height: 2.6,
        popup: { title: "Termometer Lab", body: "Termometer laboratorium adalah alat ukur presisi yang dirancang khusus untuk mengontrol dan memantau suhu dalam berbagai proses, penelitian, atau eksperimen ilmiah" },
      },
      {
        type: "popup",
        left: 12.5,
        top: 85,
        width: 20.5,
        height: 2.6,
        popup: {
          title: "Termometer Bimetal",
          body: "Termometer bimetal adalah alat pengukur suhu analog yang menggunakan dua lempengan logam berbeda yang disatukan. Logam-logam ini memiliki koefisien pemuaian (ekspansi termal) yang tidak sama.",
        },
      },
      {
        type: "nav-next",
        left: 81.8,
        top: 91.6,
        width: 14.8,
        height: 5.6,
      },
      {
        type: "nav-prev",
        left: 4.1,
        top: 90.9,
        width: 15.1,
        height: 6.6,
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
        left: 24.9,
        top: 17.9,
        width: 12.8,
        height: 3.1,
        popup: {
          title: "Celsius",
          body: "Celsius<br>• Titik Lebur Es (Bawah): 0°C<br>• Titik Didih Air (Atas): 100°C<br>• Rentang Skala: 100 derajat<br>• Catatan: Skala standar yang paling umum digunakan dalam kehidupan sehari-hari dan kegiatan sains di Indonesia.",
        },
      },
      {
        type: "popup",
        left: 38.1,
        top: 18,
        width: 15.1,
        height: 3,
        popup: {
          title: "Fahrenheit",
          body: "Fahrenheit<br>• Titik Lebur Es (Bawah): 32°F<br>• Titik Didih Air (Atas): 212°F<br>• Rentang Skala: 180 derajat<br>• Catatan: Standar pengukuran suhu yang umum digunakan di Amerika Serikat dan beberapa negara persemakmuran.",
        },
      },
      {
        type: "popup",
        left: 53.6,
        top: 18,
        width: 13.3,
        height: 3,
        popup: {
          title: "Reamur",
          body: "Reamur<br>• Titik Lebur Es (Bawah): 0°R<br>• Titik Didih Air (Atas): 80°R<br>• Rentang Skala: 80 derajat<br>• Catatan: Sering digunakan dalam proses industri pengolahan makanan dan fermentasi tradisional tertentu.",
        },
      },
      {
        type: "popup",
        left: 70.6,
        top: 18,
        width: 11.4,
        height: 3,
        popup: {
          title: "Kelvin",
          body: "Kelvin<br>• Titik Lebur Es (Bawah): 273 K<br>• Titik Didih Air (Atas): 373 K<br>• Titik Nol Mutlak: 0 K (kondisi di mana semua partikel berhenti bergerak)<br>• Rentang Skala: 100 derajat (K = C+ 273)<br>• Catatan: Skala termodinamika mutlak yang menjadi Satuan Internasional (SI).",
        },
      },
      {
        type: "nav-next",
        left: 83.1,
        top: 91.4,
        width: 14.1,
        height: 6.3,
      },
      {
        type: "nav-prev",
        left: 4,
        top: 91.4,
        width: 15.4,
        height: 6.4,
      },
    ],
  },
  {
    id: "h13",
    image: "images/h13.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "nav-next",
        left: 83.1,
        top: 91.4,
        width: 14.1,
        height: 6.3,
      },
      {
        type: "nav-prev",
        left: 4,
        top: 91.4,
        width: 15.4,
        height: 6.4,
      },
    ],
  },
  {
    id: "h14",
    image: "images/h14.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "nav-next",
        left: 83.1,
        top: 91.4,
        width: 14.1,
        height: 6.3,
      },
      {
        type: "nav-prev",
        left: 4,
        top: 91.4,
        width: 15.4,
        height: 6.4,
      },
    ],
  },
  {
    id: "h15",
    image: "images/h15.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "nav-next",
        left: 83.1,
        top: 91.4,
        width: 14.1,
        height: 6.3,
      },
      {
        type: "nav-prev",
        left: 4,
        top: 91.4,
        width: 15.4,
        height: 6.4,
      },
    ],
  },
  {
    id: "h16",
    image: "images/h16.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "popup",
        left: 65.8,
        top: 81.9,
        width: 20.3,
        height: 5.3,
        popup: {
          title: "Kunci Jawaban",
          body: '• Pernyataan I = Klaim Berbasis Bukti Ilmiah Kuat / Pakar<br>Alasan: Dikemukakan oleh pakar/peneliti berbasis mekanisme termofisika yang terukur (suhu 105°, penurunan kadar air, dan aktivitas air aω). Pemanasan konstan memberikan energi laten untuk evaporasi air secara terukur.<br><br>• Pernyataan II = Opini Subjektif<br>Alasan: Pernyataan blogger kuliner menggunakan persepsi rasa subjektif dan klaim pseudosains ("energi gaib"). Tembaga memang memiliki konduktivitas termal tinggi yang meratakan panas, namun penjelasan "energi gaib" tidak memiliki bukti ilmiah.<br><br>• Pernyataan III = Mitos / Klaim Non-Pakar yang Keliru<br>Alasan: Menambahkan air dingin ke dalam cairan mendidih justru menurunkan suhu adonan secara mendadak (∆T turun) karena kalor adonan terserap oleh air dingin. Hal ini justru memperlambat proses penguapan dan memperlama waktu pengentalan petis.',
        },
      },
      {
        type: "nav-next",
        left: 83.4,
        top: 91.5,
        width: 13.2,
        height: 5.1,
      },
      {
        type: "nav-prev",
        left: 4.4,
        top: 91.6,
        width: 15.1,
        height: 5.6,
      },
    ],
  },
  {
    id: "h17",
    image: "images/h17.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "nav-next",
        left: 78,
        top: 87.9,
        width: 18,
        height: 6.5,
      },
      {
        type: "nav-prev",
        left: 4.3,
        top: 88.3,
        width: 19.6,
        height: 6.2,
      },
    ],
  },
  {
    id: "h18",
    image: "images/h18.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "nav-next",
        left: 78,
        top: 87.9,
        width: 18,
        height: 6.5,
      },
      {
        type: "nav-prev",
        left: 4.3,
        top: 88.3,
        width: 19.6,
        height: 6.2,
      },
    ],
  },
  {
    id: "h19",
    image: "images/h19.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "nav-next",
        left: 78,
        top: 87.9,
        width: 18,
        height: 6.5,
      },
      {
        type: "nav-prev",
        left: 4.3,
        top: 88.3,
        width: 19.6,
        height: 6.2,
      },
    ],
  },
  {
    id: "h20",
    image: "images/h20.png",
    ratio: 1202 / 1698, // TODO
    triggers: [
      {
        type: "popup",
        left: 69.2,
        top: 24.9,
        width: 13.9,
        height: 2.8,
        popup: { title: "Petis Madura", body: "Petis Madura adalah bumbu atau pasta kental khas Pulau Madura yang terbuat dari sari pati atau kaldu rebusan ikan (seperti ikan tuna) atau lorjuk yang dimasak hingga pekat" },
      },
      {
        type: "popup",
        left: 74.8,
        top: 27.8,
        width: 9,
        height: 2.6,
        popup: {
          title: "Tungku",
          body: "• Tungku tanah liat/batu berfungsi sebagai isolator alami yang menahan panas agar pembakaran kayu/arang tetap terfokus ke dasar wajan.<br>• Wajan logam yang luas mempercepat perpindahan kalor secara konduksi ke seluruh adonan sari ikan.<br>• Pengadukan terus-menerus membantu distribusi kalor secara merata dan mencegah kegosongan lokal di dasar wajan.",
        },
      },
      {
        type: "popup",
        left: 39.1,
        top: 57.9,
        width: 34.3,
        height: 3.3,
        popup: { title: "Perbedaan Kalor & Suhu", body: "GAMBAR" },
      },
      {
        type: "nav-next",
        left: 82.2,
        top: 91.6,
        width: 15.3,
        height: 5.4,
      },
      {
        type: "nav-prev",
        left: 4.1,
        top: 91.4,
        width: 18,
        height: 5.6,
      },
    ],
  },
];

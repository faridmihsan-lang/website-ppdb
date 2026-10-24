import { Program, CoreValue, LearningMethod, Facility, GalleryItem, WaveSchedule, FAQItem } from '../types';

import heroImg from '../assets/images/hero_pesantren_kautsar_1792641254554.jpg';
import tahfidzImg from '../assets/images/tahfidz_santri_quran_1792641255849.jpg';
import tahfidzOutdoorImg from '../assets/images/santri_tahfidz_outdoor.jpg';
import codingImg from '../assets/images/santri_coding_robotics_1792641256047.jpg';
import leadershipImg from '../assets/images/santri_leadership_surken_cropped.jpg';

export const INSTITUTION_INFO = {
  name: "Pesantren Tahfidz Telaga Al Kautsar",
  shortName: "Telaga Al Kautsar",
  tagline: "TAK Leadership School",
  level: "Pendidikan Pesantren & Sekolah Menengah Pertama (SMP)",
  academicYear: "2026-2027",
  phone: "085295125156",
  phoneFormatted: "+62 852-9512-5156",
  whatsappUrl: "https://wa.me/6285295125156",
  address: "Kp. Gunung Putri, No.96, RT 04/06, Ds. Sukatani, Kec. Pacet, Kab. Cianjur, Jawa Barat",
  socials: {
    instagram: {
      handle: "@tak_leadershipschool",
      url: "https://instagram.com/tak_leadershipschool"
    },
    facebook: {
      name: "Telaga Al Kautsar",
      url: "https://www.facebook.com/search/top?q=Telaga%20Al%20Kautsar"
    }
  }
};

export const CORE_VALUES: CoreValue[] = [
  {
    name: "Qur'ani",
    subtitle: "Kecintaan Terhadap Al-Qur'an",
    description: "Menanamkan kecintaan mendalam terhadap Al-Qur'an melalui hafalan yang mutqin, pemahaman maknawi, dan adab akhlak mulia dalam keseharian santri.",
    icon: "BookOpen"
  },
  {
    name: "Berkarakter",
    subtitle: "Integritas & Kepemimpinan",
    description: "Membangun kedisiplinan, kemandirian pribadi, rasa tanggung jawab sosial, serta kepemimpinan Islami yang amanah dan tangguh.",
    icon: "ShieldCheck"
  },
  {
    name: "Adaptif",
    subtitle: "Keterampilan Masa Depan",
    description: "Mengenalkan kemampuan teknologi abad ke-21 melalui computational thinking, pemrograman, robotika, dan komunikasi global.",
    icon: "Cpu"
  }
];

export const PROGRAMS: Program[] = [
  {
    id: "tahfidz",
    title: "Tahfidz Al-Qur'an",
    tagline: "Fondasi Hati dan Akhlak Mulia",
    description: "Membimbing santri dalam menghafal, menjaga, dan mencintai Al-Qur'an melalui pembelajaran yang terarah.",
    iconName: "BookOpen",
    image: tahfidzOutdoorImg,
    imagePosition: "center 68%",
    highlights: [
      "Bimbingan talaqqi dan sanad bacaan yang tartil",
      "Sistem muraja'ah berkala untuk menjaga kemutqinan hafalan",
      "Pendidikan adab penghafal Al-Qur'an dan tadabbur ayat",
      "Target capaian terukur sesuai potensi santri"
    ],
    focusAreas: ["Tahsin & Tajwid", "Ziyadah Hafalan Baru", "Muraja'ah Harian", "Tadabbur & Akhlak"]
  },
  {
    id: "kepemimpinan",
    title: "Kurikulum Kepemimpinan",
    tagline: "Membentuk Karakter Pemimpin Visioner",
    description: "Mengembangkan kepercayaan diri, komunikasi, tanggung jawab, kerja sama, dan kemampuan mengambil keputusan.",
    iconName: "Award",
    image: leadershipImg,
    imagePosition: "center 28%",
    highlights: [
      "Pelatihan public speaking dan komunikasi persuasif",
      "Simulasi pemecahan masalah dan kepemimpinan tim (organisasi santri)",
      "Kemandirian hidup berasrama dan manajemen waktu",
      "Kegiatan outbond kepemimpinan alam terbuka Pacet-Cianjur"
    ],
    focusAreas: ["Public Speaking", "Problem Solving", "Team Leadership", "Etika & Tanggung Jawab"]
  },
  {
    id: "coding-robotik",
    title: "Pembelajaran Coding dan Robotik",
    tagline: "Literasi Digital & Keterampilan Abad ke-21",
    description: "Mengenalkan logika komputasi, pemrograman, kreativitas, dan pemecahan masalah melalui kegiatan teknologi yang menarik.",
    iconName: "Cpu",
    image: codingImg,
    highlights: [
      "Dasar pemrograman visual & logika komputasional untuk tingkat SMP",
      "Praktik perakitan kit robotika dan sensorik terapan",
      "Pembiasaan berpikir kreatif, analitis, dan kolaboratif",
      "Proyek teknologi santri yang solutif dan bermanfaat"
    ],
    focusAreas: ["Computational Thinking", "Robotika Terapan", "Algoritma Pemula", "Proyek Sains & Teknologi"]
  },
  {
    id: "bahasa-inggris",
    title: "Pembelajaran Bahasa Inggris Intensif",
    tagline: "Jendela Komunikasi Global",
    description: "Mengembangkan kemampuan berkomunikasi dalam bahasa Inggris melalui latihan dan pembelajaran yang terstruktur.",
    iconName: "Globe",
    image: tahfidzImg, // Clean high quality photo
    highlights: [
      "Latihan percakapan harian (daily spoken English) santri",
      "Peningkatan kosakata bertahap dan pemahaman tata bahasa komunikatif",
      "Presentasi proyek dan pidato bahasa Inggris santri",
      "Menumbuhkan rasa percaya diri berinteraksi di kancah global"
    ],
    focusAreas: ["Daily Conversation", "Vocabulary Building", "English Speech & Storytelling", "Listening Comprehension"]
  }
];

export const ADVANTAGES = [
  {
    number: "01",
    title: "Pendidikan Al-Qur'an sebagai Fondasi Utama",
    description: "Al-Qur'an bukan sekadar target hafalan, melainkan pedoman hidup yang membentuk adab, kejujuran, dan ketenangan jiwa setiap santri.",
    category: "Spiritualitas"
  },
  {
    number: "02",
    title: "Pengembangan Kepemimpinan & Kemandirian",
    description: "Kehidupan berasrama melatih disiplin, manajemen diri, empati antarsesama, dan keberanian mengambil inisiatif kepemimpinan.",
    category: "Karakter"
  },
  {
    number: "03",
    title: "Pengenalan Coding & Robotik Sejak Dini",
    description: "Membekali santri SMP dengan nalar komputasi dan teknologi masa depan agar tidak sekadar menjadi konsumen teknologi, melainkan pencipta solusi.",
    category: "Teknologi"
  },
  {
    number: "04",
    title: "Pembelajaran Bahasa Inggris Intensif",
    description: "Membiasakan santri aktif berkomunikasi dalam bahasa internasional guna membuka wawasan global dan kesiapan studi lanjutan.",
    category: "Global"
  },
  {
    number: "05",
    title: "Lingkungan Pendidikan yang Suportif & Menenangkan",
    description: "Terletak di kawasan sejuk Pacet, Cianjur, dengan iklim asri dan atmosfer ukhuwah yang kondusif bagi kesehatan rohani dan jasmani.",
    category: "Lingkungan"
  }
];

export const LEARNING_METHODS: LearningMethod[] = [
  {
    number: "01",
    title: "Pembelajaran Terarah",
    description: "Setiap materi diajarkan dengan kurikulum yang berjenjang, target capaian yang jelas, dan pendampingan ustadz/ustadzah yang kompeten.",
    details: "Membantu santri menguasai konsep dasar secara mendalam sebelum beralih ke tahapan yang lebih kompleks."
  },
  {
    number: "02",
    title: "Praktik dan Proyek",
    description: "Santri diajak langsung mempraktikkan ilmu melalui pembuatan proyek robotik, hafalan setoran harian, dan praktik kepemimpinan nyata.",
    details: "Mendorong pemahaman berbasis pengalaman (experiential learning) sehingga ilmu melekat kuat."
  },
  {
    number: "03",
    title: "Pembiasaan Karakter",
    description: "Pembentukan akhlak dibangun melalui rutinitas ibadah berjamaah, shalat dhuha/tahajjud, adab pergaulan, dan budaya saling menghormati.",
    details: "Menjadikan karakter mulia sebagai kebiasaan alami (habit forming), bukan sekadar teori."
  },
  {
    number: "04",
    title: "Pengembangan Potensi Individu",
    description: "Menghargai keunikan minat dan bakat setiap santri, baik dalam bidang tahfidz Al-Qur'an, sains, teknologi komputasi, maupun kepemimpinan.",
    details: "Pendampingan personal agar setiap anak dapat bertumbuh optimal sesuai potensi fitrahnya."
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "asrama",
    name: "Asrama Santri yang Bersih & Nyaman",
    description: "Kamar tidur terawat dengan ventilasi udara sejuk khas perbukitan Pacet, ranjang individual, dan pendampingan musyrif.",
    badge: "Kehidupan Santri",
    icon: "Home"
  },
  {
    id: "masjid",
    name: "Masjid & Halaqah Tahfidz",
    description: "Pusat ibadah shalat berjamaah lima waktu, kajian keislaman, serta halaqah tahfidz Al-Qur'an harian yang khusyuk.",
    badge: "Pusat Ibadah",
    icon: "Moon"
  },
  {
    id: "lab-komputer",
    name: "Laboratorium Komputer & Coding",
    description: "Dilengkapi perangkat komputer dan kit robotik untuk praktik pemrograman, komputasi, dan eksplorasi sains teknologi.",
    badge: "Teknologi",
    icon: "Monitor"
  },
  {
    id: "kelas-multimedia",
    name: "Ruang Belajar Multimedia",
    description: "Ruang kelas modern dan interaktif untuk pembelajaran akademis SMP yang nyaman dan menstimulasi keaktifan santri.",
    badge: "Akademik",
    icon: "Book"
  },
  {
    id: "olahraga",
    name: "Area Olahraga & Halaman Terbuka",
    description: "Fasilitas kegiatan fisik santri, olahraga santai, senam pagi, dan latihan kepemimpinan di alam terbuka yang asri.",
    badge: "Kebugaran",
    icon: "Activity"
  },
  {
    id: "perpustakaan",
    name: "Ruang Literasi & Perpustakaan",
    description: "Koleksi buku keislaman, wawasan umum, sains, serta ensiklopedia untuk menumbuhkan budaya membaca santri.",
    badge: "Literasi",
    icon: "Library"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Halaqah Tahfidz Al-Qur'an Santri",
    category: "tahfidz",
    categoryLabel: "Kegiatan Tahfidz",
    image: tahfidzImg,
    caption: "Santri menyimak dan menyetorkan hafalan Al-Qur'an dengan bimbingan ustadz di ruang yang tenang dan sunlit."
  },
  {
    id: "gal-2",
    title: "Praktik Perakitan Robotik & Coding Komputer",
    category: "coding",
    categoryLabel: "Coding & Robotik",
    image: codingImg,
    caption: "Kolaborasi antarsantri dalam merakit perangkat robotik dan belajar baris kode pemrograman logika komputasi."
  },
  {
    id: "gal-3",
    title: "Pelatihan Kepemimpinan di Alam Terbuka",
    category: "kepemimpinan",
    categoryLabel: "Kepemimpinan",
    image: leadershipImg,
    caption: "Membangun rasa kebersamaan, tanggung jawab, dan mental tangguh santri di kawasan perbukitan Pacet Cianjur."
  },
  {
    id: "gal-4",
    title: "Panorama Kawasan Pesantren Telaga Al Kautsar",
    category: "pesantren",
    categoryLabel: "Kegiatan Santri & Pesantren",
    image: heroImg,
    caption: "Suasana asri dan sejuk lingkungan pesantren di Kp. Gunung Putri Pacet, menciptakan ketenangan dalam menuntut ilmu."
  },
  {
    id: "gal-5",
    title: "Sesi Muraja'ah Harian & Adab Qur'ani",
    category: "tahfidz",
    categoryLabel: "Kegiatan Tahfidz",
    image: tahfidzImg,
    caption: "Konsistensi santri dalam menjaga hafalan Al-Qur'an secara tartil dan berkesinambungan."
  },
  {
    id: "gal-6",
    title: "Eksplorasi Proyek Sains & Logika Terapan",
    category: "pembelajaran",
    categoryLabel: "Kegiatan Pembelajaran",
    image: codingImg,
    caption: "Pembelajaran aktif berbasis proyek yang merangsang daya nalar kritis dan pemecahan masalah."
  }
];

export const PPDB_WAVES: WaveSchedule[] = [
  {
    wave: "Gelombang 1",
    period: "Oktober 2026 – Desember 2026",
    status: "active",
    description: "Pendaftaran kuota prioritas awal dengan sesi konsultasi pendidikan khusus calon wali santri."
  },
  {
    wave: "Gelombang 2",
    period: "Januari 2027 – Maret 2027",
    status: "upcoming",
    description: "Pendaftaran reguler tahap kedua bagi calon santri tingkat SMP."
  },
  {
    wave: "Gelombang 3",
    period: "April 2027 – Juni 2027",
    status: "upcoming",
    description: "Pendaftaran tahap penutupan (kuota tersisa sebelum masuk tahun ajaran baru 2026/2027)."
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apa saja program unggulan Telaga Al Kautsar?",
    category: "Program",
    answer: "Pesantren Tahfidz Telaga Al Kautsar memiliki empat program unggulan: (1) Tahfidz Al-Qur'an dengan bimbingan talaqqi terarah, (2) Kurikulum Kepemimpinan untuk membangun kemandirian dan percaya diri, (3) Pembelajaran Coding dan Robotik untuk mengenalkan logika komputasi sejak dini, serta (4) Pembelajaran Bahasa Inggris Intensif untuk komunikasi global santri."
  },
  {
    id: "faq-2",
    question: "Bagaimana sistem pembelajaran tahfidz?",
    category: "Tahfidz",
    answer: "Sistem pembelajaran tahfidz dilaksanakan melalui halaqah Al-Qur'an terarah dengan pendampingan ustadz pembimbing. Santri dibimbing tahsin (tata cara membaca tartil sesuai tajwid), setoran hafalan baru (ziyadah), serta muraja'ah harian terjadwal untuk menjaga hafalan agar mutqin. Target hafalan disesuaikan secara bijak dengan kapasitas dan fitrah setiap santri."
  },
  {
    id: "faq-3",
    question: "Apakah santri belajar coding dan robotik?",
    category: "Teknologi",
    answer: "Ya, betul. Pesantren Tahfidz Telaga Al Kautsar memadukan nilai pesantren dengan keterampilan abad ke-21. Santri diperkenalkan pada logika pemrograman (coding dasar), perakitan mikrokontroler/robotik sederhana, serta pemecahan masalah secara komputasional. Hal ini melatih santri berpikir logis, kreatif, dan melek teknologi secara positif."
  },
  {
    id: "faq-4",
    question: "Bagaimana pembelajaran bahasa Inggris dilaksanakan?",
    category: "Bahasa",
    answer: "Pembelajaran bahasa Inggris dilaksanakan secara intensif dan terstruktur dengan pendekatan komunikatif. Santri dilatih pembiasaan kosakata sehari-hari (daily vocabulary), latihan percakapan (conversation), presentasi materi, hingga pidato bahasa Inggris santri guna meningkatkan keberanian dan kecakapan berkomunikasi aktif."
  },
  {
    id: "faq-5",
    question: "Bagaimana cara mendaftar sebagai santri baru?",
    category: "PPDB",
    answer: "Pendaftaran dapat diawali dengan menghubungi Panitia PPDB melalui nomor WhatsApp resmi 085295125156 atau mengisi formulir konsultasi minat di website ini. Calon santri dan orang tua akan dipandu untuk melengkapi biodata, jadwal silaturahmi/observasi calon santri, serta proses pendaftaran resmi.",
    needsAdminReview: true
  },
  {
    id: "faq-6",
    question: "Di mana lokasi pesantren?",
    category: "Lokasi",
    answer: "Pesantren Tahfidz Telaga Al Kautsar beralamat di: Kp. Gunung Putri, No.96, RT 04/06, Ds. Sukatani, Kec. Pacet, Kab. Cianjur, Jawa Barat. Lokasi berada di kawasan perbukitan yang sejuk, tenang, dan sangat kondusif untuk proses menghafal Al-Qur'an dan menuntut ilmu."
  },
  {
    id: "faq-7",
    question: "Bagaimana cara menghubungi panitia PPDB?",
    category: "Kontak",
    answer: "Orang tua dan calon wali santri dapat langsung menghubungi Panitia PPDB Telaga Al Kautsar melalui WhatsApp resmi di nomor 085295125156, atau berkunjung langsung ke sekretariat pesantren di Pacet, Cianjur sesuai jam kerja layanan informasi."
  }
];

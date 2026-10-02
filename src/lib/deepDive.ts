// Konten pendalaman untuk halaman yang sebelumnya tipis (status GSC "Di-crawl, saat ini tidak diindeks").
// Catatan editorial: rujukan regulasi dan praktik pasar di bawah ini perlu ditinjau praktisi sebelum dianggap final.

export type DeepDiveSection = { h: string; p?: string[]; ul?: string[]; note?: string; noteLabel?: string };
export type DeepDiveContent = { kicker?: string; title: string; intro?: string; sections: DeepDiveSection[] };

export const limbahB3: DeepDiveContent = {
  kicker: "Pendalaman",
  title: "Dari Penghasil Limbah sampai Gugatan: Di Mana Risikonya Muncul?",
  intro:
    "Banyak pemilik usaha mengira tanggung jawab atas limbah B3 selesai begitu limbah diserahkan ke pihak pengangkut. Dalam praktiknya, tanggung jawab penghasil limbah bisa tetap melekat sampai limbah itu benar-benar diolah. Bagian ini memetakan alur limbah dan titik-titik yang paling sering memicu tuntutan.",
  sections: [
    {
      h: "Tanggung jawab lingkungan di Indonesia bersifat ketat",
      p: [
        "UU Nomor 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup mengatur tanggung jawab mutlak (strict liability) bagi usaha yang kegiatannya menggunakan, menghasilkan, atau mengelola B3 dan limbah B3. Secara sederhana, pihak yang menuntut umumnya tidak perlu membuktikan adanya kesalahan; cukup menunjukkan bahwa kerugian bersumber dari kegiatan tersebut. Tata cara pengelolaan limbah B3 diatur lebih rinci dalam PP Nomor 22 Tahun 2021.",
        "Kewajiban yang berlaku untuk usaha Anda bergantung pada jenis dan volume limbah, sehingga sebaiknya dikonfirmasi dengan konsultan lingkungan atau penasihat hukum.",
      ],
    },
    {
      h: "Alur limbah B3 dan titik rawannya",
      ul: [
        "Penyimpanan sementara: drum atau wadah yang bocor, label tidak jelas, atau lantai yang tidak kedap dapat membuat limbah merembes ke tanah dan air sekitar.",
        "Pengangkutan: tumpahan di jalan atau kecelakaan kendaraan pengangkut. Gunakan pengangkut berizin dan simpan dokumen serah terima untuk setiap pengiriman.",
        "Pengolahan atau pemusnahan: bila pihak pengolah lalai, penghasil limbah tetap bisa terseret dalam sengketa karena limbah itu berasal dari usahanya.",
        "Keadaan darurat: kebakaran di gudang bahan kimia atau bengkel yang membuat limbah dan air pemadam mengalir ke lingkungan sekitar.",
      ],
    },
    {
      h: "Biaya yang sering terlupakan",
      p: [
        "Selain ganti rugi kepada pihak yang dirugikan, perusahaan bisa menghadapi biaya pembelaan hukum, biaya pemeriksaan lingkungan, dan biaya pemulihan lokasi. Biaya-biaya ini dapat berjalan lama dan sulit diperkirakan di awal, itu sebabnya perlindungan liability dirancang menanggung pembelaan hukum selain ganti rugi, sesuai batas dan syarat polis.",
      ],
    },
    {
      h: "Contoh skenario klaim",
      note:
        "Sebuah bengkel menyimpan oli dan aki bekas dalam drum di halaman belakang. Saat hujan deras, salah satu drum bocor dan oli mengalir ke selokan, lalu mencemari sumur warga di sekitarnya. Warga menuntut biaya pemulihan dan pemeriksaan. Polis properti biasanya mengecualikan pencemaran, sehingga beban jatuh langsung ke usaha. Pada polis liability limbah B3, tuntutan semacam ini dapat ditanggung sesuai limit, tetapi apakah kejadian dianggap mendadak atau bertahap akan memengaruhi hasilnya. Karena itu redaksi polis perlu dibaca teliti sebelum membeli.",
    },
    {
      h: "Checklist sebelum membeli polis",
      ul: [
        "Jenis dan perkiraan volume limbah B3 per bulan.",
        "Dokumen pengelolaan: tempat penyimpanan sementara, kontrak dengan pengangkut dan pengolah berizin, serta catatan serah terima.",
        "Riwayat insiden atau teguran terkait lingkungan, bila ada.",
        "Jarak lokasi usaha ke permukiman, sumber air, atau lahan pertanian.",
        "Limit pertanggungan yang realistis dan basis polis: berdasarkan kejadian (occurrence) atau berdasarkan klaim yang diajukan (claims-made).",
      ],
    },
  ],
};

export const employerLiability: DeepDiveContent = {
  kicker: "Pendalaman",
  title: "Kapan Tuntutan di Luar BPJS Benar-Benar Muncul?",
  intro:
    "BPJS Ketenagakerjaan memberi santunan sesuai ketentuan program, tetapi tidak menutup semua kemungkinan. Ada situasi di mana perusahaan tetap berhadapan dengan tuntutan tambahan setelah santunan dibayarkan, atau karena pekerja yang cedera tidak tercakup program sama sekali.",
  sections: [
    {
      h: "Situasi yang memicu tuntutan tambahan",
      ul: [
        "Pekerja atau keluarganya menilai santunan tidak sebanding dengan kerugian, lalu menuntut kekurangannya secara perdata dengan dalih kelalaian perusahaan, misalnya alat pelindung diri tidak disediakan atau perancah tidak layak.",
        "Kecelakaan menimpa pekerja yang tidak terdaftar, seperti pekerja harian, tenaga borongan, atau pekerja subkontraktor.",
        "Kecelakaan serius yang diperiksa pihak berwenang dan membutuhkan pendampingan serta pembelaan hukum.",
        "Pemberi kerja utama menuntut subkontraktor yang pekerjanya menjadi sumber kecelakaan di lokasi proyek.",
      ],
    },
    {
      h: "Apa yang umumnya ditanggung polis",
      p: [
        "Polis Employer's Liability umumnya menanggung tanggung gugat hukum perusahaan atas cedera atau kematian pekerja yang terjadi dalam hubungan kerja, termasuk biaya pembelaan hukum yang disetujui perusahaan asuransi, sesuai limit polis. Polis ini tidak menggantikan BPJS Ketenagakerjaan, melainkan melengkapinya.",
      ],
    },
    {
      h: "Yang biasanya tidak ditanggung",
      ul: [
        "Manfaat yang memang menjadi kewajiban program jaminan sosial.",
        "Tindakan yang sengaja dilakukan oleh perusahaan atau pengurusnya.",
        "Denda atau sanksi administratif.",
        "Kegiatan di luar jenis usaha yang dideklarasikan saat pembelian polis.",
      ],
    },
    {
      h: "Apa yang dinilai underwriter",
      ul: [
        "Jumlah dan kategori pekerja, termasuk pekerja harian dan borongan.",
        "Jenis pekerjaan dan tingkat bahayanya: ketinggian, alat berat, bahan kimia, mesin putar.",
        "Program K3 tertulis, pelatihan, penyediaan alat pelindung diri, dan catatan insiden sebelumnya.",
        "Kepesertaan BPJS Ketenagakerjaan untuk seluruh pekerja dan pengaturan dengan subkontraktor.",
      ],
      p: ["Perusahaan yang rapi dalam dokumentasi K3 biasanya lebih mudah mendapatkan penilaian risiko yang baik saat pengajuan maupun perpanjangan."],
    },
    {
      h: "Contoh skenario klaim",
      note:
        "Seorang tukang dari subkontraktor jatuh dari perancah di proyek renovasi dan mengalami cedera permanen. Santunan diproses melalui BPJS, tetapi keluarga menuntut ganti rugi tambahan karena menilai perancah tidak dipasang sesuai standar. Perusahaan harus menyewa pengacara dan menghadapi potensi ganti rugi. Polis Employer's Liability dapat membantu menanggung biaya pembelaan dan ganti rugi sepanjang tuntutan tersebut masuk cakupan dan limit polis.",
    },
  ],
};

export const trukNiaga: DeepDiveContent = {
  kicker: "Pendalaman",
  title: "Hal yang Sering Menentukan Hasil Klaim Truk Niaga",
  intro:
    "Klaim kendaraan niaga lebih sering dipersoalkan dibanding mobil pribadi karena penggunaannya lebih berat dan melibatkan banyak pihak. Beberapa hal berikut sebaiknya dipahami sebelum kejadian, bukan sesudahnya.",
  sections: [
    {
      h: "Muatan berlebih (ODOL) dan dampaknya pada klaim",
      p: [
        "Praktik muatan dan dimensi berlebih (Over Dimension Over Loading) menjadi sorotan regulator karena berkaitan dengan kerusakan jalan dan kecelakaan. Dari sisi asuransi, kendaraan yang dimuat melebihi kapasitas dapat membuat penilaian klaim lebih rumit, terutama bila kerusakan berkaitan langsung dengan beban berlebih, misalnya rem blong atau as patah. Tergantung redaksi polis, kondisi ini bisa menjadi dasar pengurangan atau penolakan klaim. Tanyakan sebelum kejadian bagaimana polis Anda memperlakukannya.",
      ],
    },
    {
      h: "Pengemudi dan SIM",
      p: [
        "Polis kendaraan umumnya mensyaratkan pengemudi memiliki SIM yang sah dan sesuai golongan kendaraan saat kejadian. Perusahaan dengan banyak sopir sebaiknya memeriksa masa berlaku dan golongan SIM secara berkala, bukan hanya saat sopir direkrut.",
      ],
    },
    {
      h: "Muatan tidak otomatis ditanggung polis kendaraan",
      p: [
        "Polis kendaraan melindungi kendaraannya, bukan barang yang diangkut. Material proyek, hasil galian, atau barang dagangan membutuhkan perlindungan kargo darat tersendiri. Periksa juga limit tanggung jawab hukum kepada pihak ketiga (TPL), karena kecelakaan truk berat dapat melibatkan banyak korban dan kerusakan properti.",
      ],
    },
    {
      h: "Medan kerja: proyek dan area galian",
      p: [
        "Truk yang beroperasi di area proyek, galian pasir atau batu, dan jalan berlumpur menghadapi risiko selip, terguling, dan benturan dengan alat berat. Pastikan penggunaan yang dideklarasikan di polis sesuai kenyataan di lapangan; penggunaan yang berbeda dari deklarasi dapat dipersoalkan saat klaim.",
      ],
    },
    {
      h: "Langkah saat terjadi kecelakaan",
      ul: [
        "Utamakan keselamatan, lalu amankan lokasi.",
        "Foto atau rekam posisi kendaraan, muatan, dan kondisi jalan sebelum dipindahkan.",
        "Buat laporan polisi bila ada korban atau pihak ketiga.",
        "Hubungi praktisi dalam batas waktu yang ada di polis Anda.",
        "Jangan memperbaiki kendaraan sebelum disurvei, kecuali dalam keadaan darurat yang terdokumentasi.",
        "Siapkan STNK, SIM pengemudi, dan bukti uji berkala (KIR) bila ada.",
      ],
    },
    {
      h: "Contoh skenario klaim",
      note:
        "Sebuah dump truk terguling di jalan menurun saat mengangkut material, melukai sopir dan menimpa pagar rumah warga. Kerusakan truk dinilai lewat polis kendaraan. Kerusakan pagar masuk wilayah tanggung jawab pihak ketiga (TPL), bila polis mencakupnya dan dalam limit. Muatan yang tumpah baru ditanggung jika ada polis kargo terpisah. Cedera sopir pada umumnya ditangani lewat BPJS atau perlindungan kecelakaan diri, bukan polis kendaraan. Satu kejadian bisa menyentuh empat jenis perlindungan berbeda.",
    },
  ],
};

export const armadaFleet: DeepDiveContent = {
  kicker: "Pendalaman",
  title: "Fleet Tidak Selalu Lebih Hemat: Cara Menilainya",
  intro:
    "Menggabungkan banyak kendaraan dalam satu polis sering diiklankan sebagai solusi, tetapi tidak selalu paling tepat. Bagian ini membantu menilai apakah armada Anda memang cocok untuk skema fleet.",
  sections: [
    {
      h: "Kapan konsolidasi biasanya masuk akal",
      ul: [
        "Unit banyak dengan tanggal perpanjangan yang berbeda-beda sehingga administrasi berulang sepanjang tahun.",
        "Satu pengelola atau pemilik yang mengurus seluruh armada.",
        "Ada kebutuhan penagihan dan pelaporan klaim yang terpusat.",
        "Data klaim armada rapi sehingga bisa dinegosiasikan.",
      ],
    },
    {
      h: "Kapan sebaiknya tidak digabung",
      ul: [
        "Jumlah unit sedikit dan jenisnya sangat beragam. Batas minimal unit untuk polis fleet berbeda antar perusahaan asuransi.",
        "Sebagian unit sudah tua dengan nilai rendah, sehingga perlindungan yang lebih sederhana mungkin cukup.",
        "Profil risiko antar kelompok unit sangat berbeda, misalnya kendaraan wisata dan dump truk, sehingga penggabungan menyulitkan penilaian.",
      ],
    },
    {
      h: "Cara tarif fleet dibentuk",
      p: [
        "Pada fleet, perusahaan asuransi biasanya menilai riwayat klaim seluruh armada, selain tarif dasar per jenis kendaraan. Armada dengan klaim rendah dalam beberapa tahun berpeluang mendapat penawaran lebih baik saat perpanjangan, sedangkan klaim yang sering dapat mendorong kenaikan tarif atau perubahan struktur risiko sendiri. Karena itu data klaim dua sampai tiga tahun terakhir menjadi dokumen penting saat pengajuan.",
      ],
    },
    {
      h: "Deductible dan struktur perlindungan",
      p: [
        "Besar risiko sendiri (deductible) dapat disesuaikan per kelompok unit. Deductible yang lebih tinggi biasanya menurunkan premi, tetapi menambah beban kas perusahaan setiap kali terjadi klaim. Tentukan angka yang sanggup ditanggung tanpa mengganggu operasional.",
      ],
    },
    {
      h: "Mengelola perubahan di tengah periode",
      p: [
        "Penambahan, pengurangan, atau penggantian unit dilakukan lewat endorsement dan dihitung proporsional. Laporkan perubahan sebelum unit mulai beroperasi atau sebelum dilepas, supaya tidak ada unit yang berjalan tanpa perlindungan atau tercatat padahal sudah dijual.",
      ],
    },
    {
      h: "Mencegah klaim di level armada",
      ul: [
        "Seleksi dan evaluasi pengemudi, termasuk masa berlaku SIM.",
        "Jadwal servis rutin dan pemeriksaan rem serta ban.",
        "Aturan kecepatan dan jam kerja yang jelas.",
        "Pencatatan insiden, termasuk kejadian nyaris celaka.",
        "Prosedur kecelakaan yang diketahui semua sopir: siapa yang dihubungi dan apa yang harus difoto.",
      ],
    },
    {
      h: "Contoh skenario",
      note:
        "Sebuah usaha rental mengelola dua belas mobil dengan tanggal perpanjangan yang berbeda-beda, sehingga klaim tersebar di beberapa polis dan sulit dievaluasi. Setelah semua unit digabung dengan satu tanggal perpanjangan, pemiliknya dapat melihat klaim seluruh armada dalam satu laporan dan membahas struktur deductible berdasarkan data tersebut.",
    },
  ],
};

export const kargoEksporImpor: DeepDiveContent = {
  kicker: "Pendalaman",
  title: "Incoterms, L/C, dan Kemasan: Hal Praktis yang Sering Terlewat Eksportir",
  intro:
    "Selain memahami klausul ICC, ada beberapa hal praktis yang sering memengaruhi apakah klaim berjalan mulus atau tersendat, mulai dari siapa yang wajib mengasuransikan sampai cara mengemas produk kerajinan.",
  sections: [
    {
      h: "Incoterms menentukan siapa yang wajib mengasuransikan",
      p: [
        "Incoterms menetapkan pembagian biaya dan risiko antara penjual dan pembeli. Pada term seperti CIF dan CIP, penjual wajib menyediakan asuransi untuk kepentingan pembeli. Menurut Incoterms 2020, tingkat minimumnya setara ICC (C) untuk CIF dan ICC (A) untuk CIP. Pada FOB, CFR, FCA, atau EXW, pembelilah yang mengurus asuransi, tetapi eksportir tetap berkepentingan karena sengketa sering muncul justru saat barang rusak di perjalanan. Sebelum menandatangani kontrak, pastikan term yang dipakai dan siapa yang membeli polis sudah jelas.",
      ],
    },
    {
      h: "L/C dan syarat dokumen asuransi",
      p: [
        "Jika pembayaran memakai Letter of Credit, bank memeriksa dokumen dengan ketat. Aturan UCP 600 pada umumnya mengharuskan dokumen asuransi menutup minimal 110% dari nilai CIF atau CIP, kecuali L/C menyatakan lain. Nama tertanggung, nilai, mata uang, rute, dan klausul juga harus sesuai dengan isi L/C. Ketidaksesuaian dapat menunda pembayaran. Bagikan draf L/C kepada praktisi sebelum polis diterbitkan agar penyesuaian dilakukan di awal.",
      ],
    },
    {
      h: "Warehouse-to-warehouse dan titik serah risiko",
      p: [
        "Perlindungan marine cargo umumnya berlaku sejak barang mulai dipindahkan dari gudang pengirim untuk dimuat sampai tiba di gudang tujuan, sesuai klausul transit pada polis. Artinya perjalanan darat dari pengrajin di Yogyakarta ke pelabuhan atau bandara keberangkatan termasuk dalam periode risiko. Pastikan titik awal dan titik akhir tertulis jelas pada polis dan sesuai dengan kontrak jual beli.",
      ],
    },
    {
      h: "Kemasan produk kerajinan Jogja",
      ul: [
        "Perak: bungkus per item dan beri sekat agar tidak saling tergores atau berbenturan.",
        "Gerabah dan keramik: gunakan pengisi peredam guncangan dan kemasan ganda.",
        "Batik dan tekstil: lindungi dari lembap dan jamur dengan plastik kedap dan penyerap kelembapan.",
        "Ukiran kayu: kemasan padat agar tidak bergeser, dan tanyakan ke forwarder soal dokumen legalitas bahan kayu yang diminta negara tujuan.",
      ],
      p: [
        "Kemasan yang tidak memadai adalah salah satu pengecualian umum pada polis marine cargo, sehingga investasi di kemasan sekaligus melindungi hak klaim Anda.",
      ],
    },
    {
      h: "Prosedur klaim lintas negara",
      ul: [
        "Catat kerusakan pada dokumen penerimaan saat barang tiba dan foto kondisinya.",
        "Simpan kemasan asli sebagai bukti.",
        "Ajukan surat klaim tertulis kepada pengangkut sesegera mungkin untuk menjaga hak penggantian dari pengangkut.",
        "Laporkan ke praktisi atau agen klaim secepatnya.",
        "Siapkan dokumen: polis atau sertifikat asuransi, invoice, packing list, B/L atau AWB, laporan survei, dan bukti kerugian.",
      ],
    },
  ],
};

export const mobilBanjir: DeepDiveContent = {
  kicker: "Pendalaman",
  title: "Membaca Polis, Mencegah Kerusakan, dan Menyiapkan Bukti Klaim Banjir",
  intro:
    "Selain memahami hydrolock, ada tiga hal yang menentukan nasib klaim banjir: apa yang tertulis di polis, bagaimana kendaraan diperlakukan saat dan setelah air datang, dan seberapa lengkap bukti yang Anda kumpulkan.",
  sections: [
    {
      h: "Cara membaca cakupan banjir di polis",
      ul: [
        "Periksa daftar risiko yang ditanggung: apakah banjir tercantum, atau hanya muncul sebagai perluasan dengan premi tambahan.",
        "Cek apakah ada risiko sendiri (deductible) khusus untuk kejadian banjir.",
        "Baca klausul tentang kerusakan mesin: sebagian polis menyoroti kerusakan akibat mesin dihidupkan setelah terendam.",
        "Pastikan batas waktu pelaporan dan dokumen yang diminta.",
      ],
    },
    {
      h: "Risiko di Jogja dan sekitarnya",
      p: [
        "Pada musim hujan, hujan lebat dapat menggenangi titik rendah dan area dekat sungai seperti Code, Gajah Wong, dan Winongo. Genangan lokal juga bisa muncul saat drainase tidak mampu menampung. Parkir di area rendah atau basement menambah risiko dan sebaiknya dipertimbangkan sejak sebelum hujan deras.",
      ],
    },
    {
      h: "Pencegahan praktis",
      ul: [
        "Pantau prakiraan cuaca dan pindahkan kendaraan dari titik rendah sebelum hujan deras.",
        "Jangan menerobos genangan bila kedalamannya sulit diperkirakan, terutama jika air sudah mendekati bagian bawah bodi.",
        "Simpan dokumen kendaraan dan polis di tempat yang aman dari air, dan simpan salinan digitalnya.",
        "Simpan nomor praktisi asuransi di ponsel agar bisa dihubungi segera.",
      ],
    },
    {
      h: "Checklist bukti untuk klaim banjir",
      ul: [
        "Foto atau video tinggi air pada kendaraan dan lingkungan sekitar, misalnya pada dinding atau tiang.",
        "Catat waktu dan lokasi kejadian.",
        "Dokumentasikan kondisi interior, panel, dan dasbor.",
        "Bila memungkinkan, simpan bukti pendukung seperti berita atau laporan banjir setempat.",
        "Jangan menghidupkan mesin; ikuti arahan survei mengenai cara membawa kendaraan ke bengkel.",
      ],
    },
    {
      h: "Contoh skenario",
      note:
        "Sebuah mobil terparkir di tepi jalan yang tergenang saat hujan deras malam hari. Pemiliknya mengambil foto tinggi air, tidak menghidupkan mesin, lalu menghubungi praktisi keesokan paginya dan membawa mobil dengan derek sesuai arahan. Karena buktinya lengkap dan mesin tidak dihidupkan, penilaian kerusakan lebih mudah dibanding kasus di mana mesin dicoba dinyalakan berkali-kali.",
    },
  ],
};

export const kargoUdaraLaut: DeepDiveContent = {
  kicker: "Panduan Tambahan",
  title: "Memilih Perlindungan dan Menyiapkan Klaim Marine Cargo",
  intro:
    "Setelah memahami risiko dan jalur pengiriman, dua pertanyaan berikutnya biasanya sama: tingkat perlindungan mana yang dipilih, dan apa yang harus dilakukan bila barang rusak.",
  sections: [
    {
      h: "Cara memilih tingkat perlindungan",
      p: [
        "ICC (A) adalah tingkat paling luas karena melindungi dari semua risiko kerugian fisik kecuali yang dikecualikan secara tegas. ICC (B) dan (C) hanya menanggung risiko yang disebutkan satu per satu, dengan (C) paling terbatas. Barang bernilai tinggi dan mudah rusak seperti kerajinan atau elektronik umumnya lebih tepat memakai ICC (A), sedangkan komoditas yang tahan banting dapat mempertimbangkan (B) atau (C). Pilihan akhir ditentukan oleh nilai dan sifat barang, Incoterms yang dipakai, serta syarat dari pembeli atau bank.",
      ],
    },
    {
      h: "Pengecualian umum",
      ul: [
        "Kemasan yang tidak memadai untuk perjalanan.",
        "Cacat bawaan atau sifat alami barang (inherent vice).",
        "Kerugian akibat keterlambatan.",
        "Kegagalan keuangan pengangkut atau pemilik kapal.",
        "Perbuatan sengaja dari tertanggung.",
        "Risiko perang atau pemogokan, yang umumnya baru ditanggung bila ditambahkan klausul khusus.",
      ],
    },
    {
      h: "Langkah saat barang rusak atau hilang",
      ul: [
        "Periksa barang saat penerimaan dan tulis catatan kerusakan pada dokumen penerimaan.",
        "Foto kondisi kemasan dan barang sebelum dibuka lebih jauh.",
        "Ajukan surat klaim tertulis kepada pengangkut sesegera mungkin untuk menjaga hak penggantian.",
        "Hubungi praktisi untuk memulai klaim.",
        "Siapkan polis atau sertifikat, invoice, packing list, B/L atau AWB, laporan survei, dan bukti kerugian.",
        "Jangan membuang kemasan sebelum survei selesai.",
      ],
    },
    {
      h: "Hal yang sering membuat klaim lambat",
      ul: [
        "Nilai di invoice berbeda dengan nilai pada polis.",
        "Nama tertanggung tidak sama antara polis dan dokumen pengiriman.",
        "Tidak ada surat klaim kepada pengangkut.",
        "Laporan kerusakan terlambat sehingga sulit dibuktikan kapan kerusakan terjadi.",
      ],
    },
    {
      h: "Contoh skenario",
      note:
        "Seorang eksportir kerajinan mengirim 40 koli lewat laut. Setibanya di tujuan, tiga koli basah karena kontainer bocor. Penerima mencatat kerusakan pada dokumen penerimaan dan mengambil foto. Eksportir segera mengirim surat klaim ke pelayaran dan melapor ke praktisi. Karena dokumen lengkap dan laporan dibuat tepat waktu, proses klaim berjalan tanpa bolak-balik meminta dokumen tambahan.",
    },
  ],
};

export const jaminanPenawaran: DeepDiveContent = {
  kicker: "Panduan Tambahan",
  title: "Penerbit yang Sah, Pencairan, dan Memilih Jenis Jaminan",
  intro:
    "Selain syarat nilai dan dokumen, ada hal-hal yang jarang dibahas tetapi memengaruhi keputusan kontraktor: siapa yang boleh menerbitkan, kapan jaminan bisa dicairkan, dan bagaimana membandingkannya dengan alternatif lain.",
  sections: [
    {
      h: "Siapa yang boleh menerbitkan",
      p: [
        "Dalam pengadaan pemerintah, jaminan penawaran umumnya dapat diterbitkan oleh bank umum, perusahaan penjaminan, atau perusahaan asuransi yang memenuhi ketentuan. Kelompok kerja pemilihan dapat memverifikasi keaslian jaminan langsung ke penerbitnya, sehingga jaminan dari penerbit yang tidak jelas berisiko membuat penawaran gugur. Selalu cocokkan jenis penerbit yang diterima dengan dokumen pemilihan paket yang diikuti.",
      ],
    },
    {
      h: "Kapan jaminan penawaran bisa dicairkan",
      p: [
        "Umumnya jaminan dapat dicairkan bila peserta yang ditetapkan sebagai pemenang mengundurkan diri, tidak menandatangani kontrak, atau tidak menyerahkan jaminan pelaksanaan sesuai ketentuan. Syarat pastinya tercantum dalam dokumen pemilihan dan peraturan yang berlaku, sehingga bagian itu perlu dibaca sebelum menawar.",
        "Bila jaminan dicairkan, kontraktor biasanya wajib mengganti nilainya kepada penerbit sesuai perjanjian, dan kejadian ini dapat berdampak pada reputasi serta sanksi dalam pengadaan.",
      ],
    },
    {
      h: "Bid bond, bank garansi, atau jaminan perusahaan penjaminan?",
      p: [
        "Bank garansi biasanya terkait fasilitas atau agunan di bank. Surety bond dari perusahaan asuransi atau penjamin umumnya didasarkan pada penilaian kelayakan perusahaan dan kapasitas proyek, dan tidak selalu memerlukan dana yang diblokir sebesar nilai jaminan, meski syaratnya berbeda antar penerbit. Pilihan terbaik bergantung pada arus kas, riwayat kerja sama, dan syarat paket tender.",
      ],
    },
    {
      h: "Alur dari permintaan sampai unggah",
      ul: [
        "Tentukan nilai dan masa berlaku berdasarkan dokumen pemilihan paket.",
        "Siapkan data perusahaan dan dokumen pendukung yang diminta penerbit.",
        "Ajukan permohonan dan lengkapi pernyataan atau perjanjian yang diperlukan.",
        "Tunggu penilaian dan penerbitan, lalu periksa isinya: nama pemberi kerja, nama paket, nilai, masa berlaku, dan penerbit.",
        "Unggah atau serahkan dokumen sesuai cara yang diatur dalam dokumen pemilihan.",
      ],
    },
    {
      h: "Contoh skenario",
      note:
        "Seorang kontraktor ditetapkan sebagai pemenang, tetapi setelah itu menyadari harga penawarannya terlalu rendah dan memilih mundur. Jaminan penawarannya dapat dicairkan oleh pemberi kerja, dan kontraktor harus mengganti nilainya kepada penerbit jaminan. Pelajarannya: hitung ulang harga dan kemampuan pelaksanaan sebelum mengajukan penawaran, bukan sesudah ditetapkan sebagai pemenang.",
    },
  ],
};

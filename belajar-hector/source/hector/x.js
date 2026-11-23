const SILA={
 s1:`<rect x="-17" y="-17" width="34" height="34" rx="6" fill="#1B1B1B"/><path d="M0 -13 L3.6 -4.4 L12.6 -4 L5.6 1.8 L8 10.6 L0 5.6 L-8 10.6 L-5.6 1.8 L-12.6 -4 L-3.6 -4.4Z" fill="#FFC93C"/>`,
 s2:`<rect x="-17" y="-17" width="34" height="34" rx="6" fill="#C8102E"/>${[...Array(12)].map((_,i)=>{const a=i*30*Math.PI/180,x=(10.5*Math.cos(a)).toFixed(1),y=(10.5*Math.sin(a)).toFixed(1);return i%2?`<circle cx="${x}" cy="${y}" r="2.6" fill="none" stroke="#FFC93C" stroke-width="1.6"/>`:`<rect x="${(x-2.4).toFixed(1)}" y="${(y-2.4).toFixed(1)}" width="4.8" height="4.8" rx=".8" fill="none" stroke="#FFC93C" stroke-width="1.6" transform="rotate(45 ${x} ${y})"/>`}).join('')}`,
 s3:`<rect x="-17" y="-17" width="34" height="34" rx="6" fill="#fff" stroke="#ccc"/><path d="M-2 14 V0 h4 V14 M-2 10 l-6 4 M2 10 l6 4 M0 4 l-6 -4 M0 4 l6 -4" stroke="#6B3A1E" stroke-width="2" fill="none" stroke-linecap="round"/><ellipse cy="-6" rx="13" ry="8" fill="#2E8B3E"/><ellipse cx="-6" cy="-9" rx="6" ry="4" fill="#3FA34D"/><ellipse cx="6" cy="-4" rx="5" ry="3.5" fill="#3FA34D"/>`,
 s4:`<rect x="-17" y="-17" width="34" height="34" rx="6" fill="#C8102E"/><path d="M-13 -12 q2 8 7 6 M13 -12 q-2 8 -7 6" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M-9 -6 q9 -4 18 0 q2 10 -3 16 q-6 4 -12 0 q-5 -6 -3 -16z" fill="#1B1B1B"/><circle cx="-4" cy="-1" r="1.4" fill="#fff"/><circle cx="4" cy="-1" r="1.4" fill="#fff"/><ellipse cy="7" rx="4" ry="2.4" fill="#444"/>`,
 s5:`<rect x="-17" y="-17" width="34" height="34" rx="6" fill="#fff" stroke="#ccc"/><path d="M-7 14 Q-9 0 -6 -14" stroke="#3FA34D" stroke-width="1.6" fill="none"/>${[-12,-8,-4,0,4].map((y,i)=>`<ellipse cx="${-6+(i%2?2.4:-2.4)}" cy="${y}" rx="2" ry="3.4" fill="#F5C518" transform="rotate(${i%2?30:-30} ${-6+(i%2?2.4:-2.4)} ${y})"/>`).join('')}<path d="M7 14 Q9 2 6 -8" stroke="#3FA34D" stroke-width="1.6" fill="none"/>${[[6,-10],[10,-2],[4,4]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="3.6" fill="#fff" stroke="#bbb"/><path d="M${x-3} ${y+3} l3 -2 l3 2" stroke="#3FA34D" stroke-width="1.2" fill="none"/>`).join('')}`,
};
/* ===== Rencana belajar malam (berdasarkan jadwal 2C, 23–27 Nov 2026) ===== */
const PLAN=[
 {key:'sen',day:'Minggu malam',for:'Senin, 23 Nov',school:[['Mandarin','Latihan ASAS Bab 1–6'],['PLH','Ulangan Bab 2'],['Conversation','TES ASAS: Fuzzy Wuzzy'],['Matematika','Bab 4 Posisi Benda'],['B. Indonesia','Pengayaan']],
  tasks:[['conv','Ucapkan tongue twister Fuzzy Wuzzy 5 kali sampai lancar','10 mnt'],['plh','Baca ulang catatan PLH Bab 2, lalu kerjakan latihan PLH','10 mnt'],['math','Latihan Posisi Benda (atas, bawah, kiri, kanan, antara)','10 mnt'],['mand','Ulang kosakata Mandarin: salam & angka','5 mnt']],tip:'Besok ada dua tes: PLH dan Conversation. Tidur cukup!'},
 {key:'sel',day:'Senin malam',for:'Selasa, 24 Nov',school:[['SBK','Origami lonceng Natal'],['Komputer','Mengetik 10 jari ASDF JKL;'],['Mandarin','Latihan ASAS Bab 1–6'],['PJOK','ASAS Praktek gerak'],['Matematika','Pola Benda']],
  tasks:[['pjok','Hafalkan jenis gerak: lokomotor, non-lokomotor, manipulatif','10 mnt'],['komp','Latihan mengetik baris ASDF JKL;','10 mnt'],['math','Latihan Pola Benda','10 mnt'],['mand','Ulang kosakata Mandarin: keluarga & hewan','5 mnt']],tip:'Siapkan kertas lipat, lem, dan gunting untuk SBK. Pakai baju olahraga.'},
 {key:'rab',day:'Selasa malam',for:'Rabu, 25 Nov',school:[['Matematika','Pola Warna'],['B. Inggris','Remedial test Unit 4'],['Mandarin','Review 1 (Bab 1–3)'],['B. Indonesia','Pengayaan'],['BK','Film & pesan moral']],
  tasks:[['eng','Pelajari ulang Unit 4 di buku cetak, lalu latihan B. Inggris','15 mnt'],['math','Latihan Pola Warna','10 mnt'],['mand','Mandarin Bab 1–3','10 mnt']],tip:'Besok ada remedial Unit 4. Fokus ke kata yang salah di tes sebelumnya.'},
 {key:'kam',day:'Rabu malam',for:'Kamis, 26 Nov',school:[['Agama','Sesuai agama Hector'],['Matematika','Latihan Bab 1–4 (persiapan ASAS)'],['B. Sunda','Ulangan Bab 2 Kaulinan Barudak'],['B. Inggris','ASAS Listening Unit 1–4'],['Mandarin','Review 2 (Bab 4–6)'],['B. Indonesia','Pengayaan']],
  tasks:[['sunda','Baca Bab 2 Kaulinan Barudak, lalu latihan B. Sunda','10 mnt'],['listen','Latihan listening B. Inggris Unit 1–4','10 mnt'],['math','Ulang Matematika Bab 1–4 (soal campuran)','10 mnt'],['mand','Mandarin Bab 4–6','5 mnt'],['agama','Baca bab agama sesuai jadwal','5 mnt']],tip:'Hari terpadat: ulangan B. Sunda dan listening. Bagi belajar jadi 2 sesi dengan istirahat.'},
 {key:'jum',day:'Kamis malam',for:'Jumat, 27 Nov',school:[['PKN','Latihan ASAS Bab 1–2'],['B. Inggris','Persiapan latihan ASAS Unit 1–4'],['Mandarin','Soal YCT 1'],['B. Indonesia','Pengayaan']],
  tasks:[['pkn','Latihan PKn Bab 1–2','15 mnt'],['eng','Ulang kosakata B. Inggris Unit 1–4','10 mnt'],['mand','Latihan kosakata YCT 1','10 mnt']],tip:'Hari terakhir. Bawa buku kotak untuk Mandarin.'}
];

/* ===== Mata pelajaran & soal ===== */
const SUBJ={
 math:{name:'Matematika',sub:'Bab 4 Posisi Benda · Pola · Bab 1–4',c:'#2F7FD0'},
 eng:{name:'B. Inggris',sub:'Unit 1–4 · kosakata & kalimat',c:'#E0466E',check:true},
 listen:{name:'Listening',sub:'B. Inggris Unit 1–4',c:'#8E4FD8',check:true},
 conv:{name:'Conversation',sub:'Tongue twister Fuzzy Wuzzy',c:'#D9822B'},
 mand:{name:'Mandarin',sub:'Bab 1–6 · YCT 1',c:'#C8102E'},
 pkn:{name:'PKn',sub:'Bab 1 & 2',c:'#B3261E',check:true},
 sunda:{name:'B. Sunda',sub:'Bab 2 Kaulinan Barudak',c:'#2E9E5B'},
 plh:{name:'PLH',sub:'Sampah & kebersihan',c:'#3D8B3D'},
 indo:{name:'B. Indonesia',sub:'Pengayaan',c:'#E0A100'},
 pjok:{name:'PJOK',sub:'Gerak lokomotor, non-lokomotor, manipulatif',c:'#13A6A0'},
 komp:{name:'Komputer',sub:'Mengetik 10 jari ASDF JKL;',c:'#5B5BD6'},
};
/* q: teks soal; o: pilihan; a: jawaban; n: pembahasan; say: dibacakan (listening); lang */
const QS={
 math:[
  {fig:'room',q:'Bola ada di … meja.',o:['atas','bawah','samping'],a:'atas',n:'Bola diletakkan <b>di atas</b> meja.'},
  {fig:'room',q:'Kucing ada di … meja.',o:['atas','bawah','depan'],a:'bawah',n:'Kucing tidur <b>di bawah</b> meja.'},
  {fig:'room',q:'Tas ada di sebelah … meja (dari arah kita melihat).',o:['kiri','kanan','atas'],a:'kiri',n:'Dari arah kita melihat, tas ada <b>di sebelah kiri</b> meja.'},
  {fig:'room',q:'Kursi ada di sebelah … meja.',o:['kiri','kanan','bawah'],a:'kanan',n:'Kursi ada <b>di sebelah kanan</b> meja.'},
  {fig:'room',q:'Benda apa yang ada di antara tas dan kursi?',o:['meja','bola','kucing'],a:'meja',n:'<b>Meja</b> berada di antara tas (kiri) dan kursi (kanan).'},
  {fig:'row',q:'Bentuk apa yang ada di urutan ke-3 dari kiri?',o:['bintang','segitiga','persegi'],a:'segitiga',n:'Dari kiri: lingkaran (1), bintang (2), <b>segitiga (3)</b>, persegi (4).'},
  {fig:'row',q:'Bentuk apa yang ada di sebelah kanan bintang?',o:['lingkaran','segitiga','persegi'],a:'segitiga',n:'Tepat di kanan bintang ada <b>segitiga</b>.'},
  {fig:'row',q:'Bintang ada di antara … dan segitiga.',o:['lingkaran','persegi','hati'],a:'lingkaran',n:'Bintang diapit <b>lingkaran</b> dan segitiga.'},
  {pat:['c','t','c','t','c','?'],q:'Pola Benda: bentuk apa selanjutnya?',o:['t','c','s'],a:'t',n:'Polanya lingkaran, segitiga, berulang. Setelah lingkaran adalah <b>segitiga</b>.'},
  {pat:['st','st','m','st','st','?'],q:'Pola Benda: gambar apa selanjutnya?',o:['st','m','c'],a:'m',n:'Polanya bintang, bintang, bulan. Jadi berikutnya <b>bulan</b>.'},
  {pat:['R','Y','R','Y','R','?'],q:'Pola Warna: warna apa selanjutnya?',o:['R','Y','B'],a:'Y',n:'Merah, kuning, berulang. Setelah merah adalah <b>kuning</b>.'},
  {pat:['B','B','G','B','B','?'],q:'Pola Warna: warna apa selanjutnya?',o:['B','G','R'],a:'G',n:'Biru, biru, hijau. Jadi berikutnya <b>hijau</b>.'},
  {pat:['R','Y','B','R','Y','?'],q:'Pola Warna: warna apa selanjutnya?',o:['R','Y','B'],a:'B',n:'Merah, kuning, biru, berulang. Berikutnya <b>biru</b>.'},
  {pat:['R','B','B','R','B','B','R','?'],q:'Pola Warna: warna apa selanjutnya?',o:['R','B','Y'],a:'B',n:'Merah, biru, biru, berulang. Setelah merah adalah <b>biru</b>.'},
  {fig:'room',q:'Kucing ada di bawah meja. Bola ada di … kucing.',o:['atas','bawah','samping'],a:'atas',n:'Bola di atas meja, kucing di bawah meja. Jadi bola ada <b>di atas</b> kucing.'},
  {fig:'row',q:'Persegi ada di urutan ke berapa dari kiri?',o:['4','2','1'],a:'4',n:'Lingkaran 1, bintang 2, segitiga 3, <b>persegi 4</b>.'},
  {fig:'row',q:'Bentuk apa yang paling kiri?',o:['lingkaran','persegi','bintang'],a:'lingkaran',n:'Paling kiri adalah <b>lingkaran</b>.'},
  {fig:'row',q:'Bentuk apa yang ada di sebelah kiri persegi?',o:['segitiga','bintang','lingkaran'],a:'segitiga',n:'Tepat di kiri persegi ada <b>segitiga</b>.'},
  {pat:['t','s','t','s','t','?'],q:'Pola Benda: bentuk apa selanjutnya?',o:['s','t','c'],a:'s',n:'Segitiga, persegi, berulang. Setelah segitiga adalah <b>persegi</b>.'},
  {pat:['c','c','t','c','c','?'],q:'Pola Benda: bentuk apa selanjutnya?',o:['c','t','st'],a:'t',n:'Lingkaran, lingkaran, segitiga. Berikutnya <b>segitiga</b>.'},
  {pat:['G','Y','Y','G','Y','Y','?'],q:'Pola Warna: warna apa selanjutnya?',o:['G','Y','R'],a:'G',n:'Hijau, kuning, kuning, berulang. Berikutnya <b>hijau</b>.'},
 ],
 eng:[
  {q:'"Good morning" artinya …',o:['Selamat pagi','Selamat malam','Sampai jumpa'],a:'Selamat pagi',n:'<b>Good morning</b> = selamat pagi.'},
  {q:'What is this?',img:'pencil',o:['pencil','ruler','eraser'],a:'pencil',n:'Ini <b>pencil</b> (pensil).'},
  {q:'What is this?',img:'bag',o:['book','bag','chair'],a:'bag',n:'Ini <b>bag</b> (tas).'},
  {q:'How many stars?',img:'stars12',o:['eleven','twelve','twenty'],a:'twelve',n:'Ada 12 bintang = <b>twelve</b>.'},
  {q:'She is my mother. "Mother" artinya …',o:['ibu','nenek','kakak'],a:'ibu',n:'<b>mother</b> = ibu.'},
  {q:'Pilih kalimat yang benar:',o:['I am happy.','I happy am.','Am I happy happy.'],a:'I am happy.',n:'Susunan yang benar: <b>I am happy.</b>'},
  {q:'The apple is … (gambar apel merah)',img:'apple',o:['red','blue','green'],a:'red',n:'Apelnya berwarna <b>red</b> (merah).'},
  {q:'"Open your book" artinya …',o:['Buka bukumu','Tutup bukumu','Baca bukumu'],a:'Buka bukumu',n:'<b>Open</b> = buka, <b>close</b> = tutup.'},
  {q:'"Good night" artinya …',o:['Selamat malam','Selamat siang','Selamat pagi'],a:'Selamat malam',n:'<b>Good night</b> = selamat malam (sebelum tidur).'},
  {q:'"Thank you" artinya …',o:['Terima kasih','Sama-sama','Permisi'],a:'Terima kasih',n:'<b>Thank you</b> = terima kasih.'},
  {q:'"Eraser" artinya …',o:['penghapus','penggaris','pensil'],a:'penghapus',n:'<b>eraser</b> = penghapus.'},
  {q:'"Ruler" artinya …',o:['penggaris','buku','tas'],a:'penggaris',n:'<b>ruler</b> = penggaris.'},
  {q:'"Book" artinya …',o:['buku','meja','kursi'],a:'buku',n:'<b>book</b> = buku.'},
  {q:'"Nineteen" adalah angka …',o:['19','90','9'],a:'19',n:'<b>nineteen</b> = 19. (ninety = 90)'},
  {q:'"Twenty" adalah angka …',o:['20','12','2'],a:'20',n:'<b>twenty</b> = 20.'},
  {q:'"Father" artinya …',o:['ayah','ibu','kakek'],a:'ayah',n:'<b>father</b> = ayah.'},
  {q:'"Sister" artinya …',o:['saudara perempuan','saudara laki-laki','nenek'],a:'saudara perempuan',n:'<b>sister</b> = saudara perempuan (kakak/adik perempuan).'},
  {q:'"I am sad." artinya …',o:['Aku sedih.','Aku senang.','Aku lapar.'],a:'Aku sedih.',n:'<b>sad</b> = sedih, <b>happy</b> = senang.'},
  {q:'Pilih kalimat yang benar:',o:['This is my book.','This my is book.','Book my this is.'],a:'This is my book.',n:'Susunan yang benar: <b>This is my book.</b>'},
  {q:'"Sit down, please." artinya …',o:['Silakan duduk.','Silakan berdiri.','Silakan masuk.'],a:'Silakan duduk.',n:'<b>Sit down</b> = duduk, <b>stand up</b> = berdiri.'},
  {q:'"Stand up" artinya …',o:['berdiri','duduk','berlari'],a:'berdiri',n:'<b>Stand up</b> = berdiri.'},
 ],
 listen:[
  {say:'pencil',q:'Dengarkan. Kata apa yang kamu dengar?',o:['pencil','pen','bag'],a:'pencil',n:'Kata yang dibacakan: <b>pencil</b>.'},
  {say:'fifteen',q:'Dengarkan. Angka berapa?',o:['15','50','5'],a:'15',n:'<b>fifteen</b> = 15. (fifty = 50)'},
  {say:'Close the door, please.',q:'Dengarkan. Apa perintahnya?',o:['Tutup pintunya','Buka pintunya','Buka jendelanya'],a:'Tutup pintunya',n:'"Close the door, please." = tolong tutup pintunya.'},
  {say:'My brother is tall.',q:'Dengarkan. Siapa yang tinggi?',o:['brother','sister','father'],a:'brother',n:'"My <b>brother</b> is tall." = kakak/adik laki-lakiku tinggi.'},
  {say:'I have a yellow ruler.',q:'Dengarkan. Warna penggarisnya?',o:['yellow','red','blue'],a:'yellow',n:'"I have a <b>yellow</b> ruler." = penggarisku kuning.'},
  {say:'thirteen',q:'Dengarkan. Angka berapa?',o:['13','30','3'],a:'13',n:'<b>thirteen</b> = 13. (thirty = 30)'},
  {say:'eraser',q:'Dengarkan. Benda apa?',o:['eraser','ruler','pencil'],a:'eraser',n:'Kata yang dibacakan: <b>eraser</b> (penghapus).'},
  {say:'nineteen',q:'Dengarkan. Angka berapa?',o:['19','90','9'],a:'19',n:'<b>nineteen</b> = 19.'},
  {say:'twenty',q:'Dengarkan. Angka berapa?',o:['20','12','2'],a:'20',n:'<b>twenty</b> = 20.'},
  {say:'seventeen',q:'Dengarkan. Angka berapa?',o:['17','70','7'],a:'17',n:'<b>seventeen</b> = 17. (seventy = 70)'},
  {say:'Good morning, teacher.',q:'Dengarkan. Apa yang diucapkan?',o:['Selamat pagi, Guru.','Selamat malam, Guru.','Terima kasih, Guru.'],a:'Selamat pagi, Guru.',n:'"<b>Good morning</b>, teacher." = Selamat pagi, Guru.'},
  {say:'Sit down, please.',q:'Dengarkan. Apa perintahnya?',o:['Silakan duduk','Silakan berdiri','Silakan keluar'],a:'Silakan duduk',n:'"<b>Sit down</b>, please." = Silakan duduk.'},
  {say:'Stand up, please.',q:'Dengarkan. Apa perintahnya?',o:['Silakan berdiri','Silakan duduk','Silakan tidur'],a:'Silakan berdiri',n:'"<b>Stand up</b>, please." = Silakan berdiri.'},
  {say:'This is my father.',q:'Dengarkan. Siapa yang dikenalkan?',o:['father','mother','brother'],a:'father',n:'"This is my <b>father</b>." = Ini ayahku.'},
  {say:'I am hungry.',q:'Dengarkan. Bagaimana perasaannya?',o:['lapar','sedih','senang'],a:'lapar',n:'"I am <b>hungry</b>." = Aku lapar.'},
  {say:'The bag is blue.',q:'Dengarkan. Apa warna tasnya?',o:['blue','red','green'],a:'blue',n:'"The bag is <b>blue</b>." = Tasnya biru.'},
  {say:'sister',q:'Dengarkan. Kata apa?',o:['sister','brother','mother'],a:'sister',n:'Kata yang dibacakan: <b>sister</b>.'},
  {say:'Open the window.',q:'Dengarkan. Apa perintahnya?',o:['Buka jendela','Tutup pintu','Buka buku'],a:'Buka jendela',n:'"<b>Open the window</b>." = Buka jendelanya.'},
  {say:'I have two pencils.',q:'Dengarkan. Apa yang dia punya?',o:['2 pensil','3 pensil','2 penggaris'],a:'2 pensil',n:'"I have <b>two pencils</b>." = Aku punya dua pensil.'},
  {say:'book',q:'Dengarkan. Kata apa?',o:['book','bag','ball'],a:'book',n:'Kata yang dibacakan: <b>book</b>.'},
 ],
 conv:[
  {speak:'Fuzzy Wuzzy was a bear.',q:'Ucapkan baris 1',n:''},
  {speak:'Fuzzy Wuzzy had no hair.',q:'Ucapkan baris 2',n:''},
  {speak:'Fuzzy Wuzzy wasn\'t fuzzy, was he?',q:'Ucapkan baris 3',n:''},
  {speak:'Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair. Fuzzy Wuzzy wasn\'t fuzzy, was he?',q:'Ucapkan semuanya!',n:''},
  {speak:'Fuzzy',q:'Ucapkan kata ini',n:''},
  {speak:'Wuzzy',q:'Ucapkan kata ini',n:''},
  {speak:'Fuzzy Wuzzy',q:'Ucapkan nama beruangnya',n:''},
  {speak:'bear',q:'Ucapkan kata ini',n:''},
  {speak:'hair',q:'Ucapkan kata ini',n:''},
  {speak:'wasn\'t',q:'Ucapkan kata ini',n:''},
  {speak:'was a bear',q:'Ucapkan potongan kalimat',n:''},
  {speak:'had no hair',q:'Ucapkan potongan kalimat',n:''},
  {speak:'Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair.',q:'Ucapkan baris 1 dan 2',n:''},
  {speak:'Fuzzy Wuzzy had no hair. Fuzzy Wuzzy wasn\'t fuzzy, was he?',q:'Ucapkan baris 2 dan 3',n:''},
  {q:'Fuzzy Wuzzy was a …',o:['bear','cat','bird'],a:'bear',n:'"Fuzzy Wuzzy was a <b>bear</b>." Fuzzy Wuzzy adalah seekor beruang.'},
  {q:'Fuzzy Wuzzy had no …',o:['hair','hat','shoes'],a:'hair',n:'"Fuzzy Wuzzy had no <b>hair</b>." Ia tidak punya bulu/rambut.'},
  {q:'Was Fuzzy Wuzzy fuzzy (berbulu)?',o:['No, he wasn\'t.','Yes, he was.'],a:'No, he wasn\'t.',n:'Ia tidak punya bulu, jadi <b>he wasn\'t fuzzy</b>.'},
  {q:'"Bear" artinya …',o:['beruang','kelinci','kucing'],a:'beruang',n:'<b>bear</b> = beruang.'},
  {q:'"Hair" artinya …',o:['rambut / bulu','tangan','kaki'],a:'rambut / bulu',n:'<b>hair</b> = rambut atau bulu.'},
  {q:'Kata yang bunyinya mirip (berima) dengan "bear" adalah …',o:['hair','fuzzy','was'],a:'hair',n:'<b>bear</b> dan <b>hair</b> berakhiran bunyi yang sama. Itulah yang membuat tongue twister ini seru.'},
 ],
 mand:[
  {zh:'你好',say:'你好',q:'Apa arti 你好 (nǐ hǎo)?',o:['halo','terima kasih','sampai jumpa'],a:'halo',n:'你好 <b>nǐ hǎo</b> = halo.'},
  {zh:'谢谢',say:'谢谢',q:'Apa arti 谢谢 (xièxie)?',o:['maaf','terima kasih','selamat pagi'],a:'terima kasih',n:'谢谢 <b>xièxie</b> = terima kasih.'},
  {zh:'再见',say:'再见',q:'Apa arti 再见 (zàijiàn)?',o:['sampai jumpa','halo','permisi'],a:'sampai jumpa',n:'再见 <b>zàijiàn</b> = sampai jumpa.'},
  {zh:'七',say:'七',q:'Angka berapa 七 (qī)?',o:['7','4','10'],a:'7',n:'七 <b>qī</b> = 7.'},
  {zh:'十',say:'十',q:'Angka berapa 十 (shí)?',o:['10','8','1'],a:'10',n:'十 <b>shí</b> = 10.'},
  {zh:'三',q:'Bagaimana pinyin 三 (angka 3)?',o:['sān','sì','shí'],a:'sān',n:'三 = <b>sān</b>. 四 = sì (4), 十 = shí (10).'},
  {zh:'妈妈',say:'妈妈',q:'Apa arti 妈妈 (māma)?',o:['ibu','ayah','kakak'],a:'ibu',n:'妈妈 <b>māma</b> = ibu. 爸爸 bàba = ayah.'},
  {zh:'猫',say:'猫',q:'Hewan apa 猫 (māo)?',o:['kucing','anjing','ikan'],a:'kucing',n:'猫 <b>māo</b> = kucing. 狗 gǒu = anjing.'},
  {zh:'大',q:'大 (dà) artinya …',o:['besar','kecil','banyak'],a:'besar',n:'大 <b>dà</b> = besar. 小 xiǎo = kecil.'},
  {zh:'你叫什么名字？',say:'你叫什么名字',q:'你叫什么名字？ artinya …',o:['Siapa namamu?','Berapa umurmu?','Apa kabar?'],a:'Siapa namamu?',n:'Nǐ jiào shénme míngzi? = Siapa namamu? Jawab: 我叫 Hector (Wǒ jiào Hector).'},
  {zh:'你几岁？',say:'你几岁',q:'你几岁？ (Nǐ jǐ suì?) artinya …',o:['Berapa umurmu?','Kamu di mana?','Siapa namamu?'],a:'Berapa umurmu?',n:'Nǐ jǐ suì? = Berapa umurmu? Jawab: 我七岁 (Wǒ qī suì) = umurku 7 tahun.'},
  {zh:'老师',say:'老师',q:'老师 (lǎoshī) artinya …',o:['guru','murid','teman'],a:'guru',n:'老师 <b>lǎoshī</b> = guru.'},
  {zh:'二',say:'二',q:'Angka berapa 二 (èr)?',o:['2','3','1'],a:'2',n:'二 <b>èr</b> = 2.'},
  {zh:'五',say:'五',q:'Angka berapa 五 (wǔ)?',o:['5','6','9'],a:'5',n:'五 <b>wǔ</b> = 5.'},
  {zh:'八',say:'八',q:'Angka berapa 八 (bā)?',o:['8','6','4'],a:'8',n:'八 <b>bā</b> = 8.'},
  {zh:'九',q:'Bagaimana pinyin 九 (angka 9)?',o:['jiǔ','liù','qī'],a:'jiǔ',n:'九 = <b>jiǔ</b>. 六 = liù (6), 七 = qī (7).'},
  {zh:'爸爸',say:'爸爸',q:'Apa arti 爸爸 (bàba)?',o:['ayah','ibu','adik'],a:'ayah',n:'爸爸 <b>bàba</b> = ayah.'},
  {zh:'狗',say:'狗',q:'Hewan apa 狗 (gǒu)?',o:['anjing','kucing','burung'],a:'anjing',n:'狗 <b>gǒu</b> = anjing.'},
  {zh:'小',q:'小 (xiǎo) artinya …',o:['kecil','besar','tinggi'],a:'kecil',n:'小 <b>xiǎo</b> = kecil. 大 dà = besar.'},
  {zh:'我',say:'我',q:'我 (wǒ) artinya …',o:['saya','kamu','dia'],a:'saya',n:'我 <b>wǒ</b> = saya. 你 nǐ = kamu.'},
  {zh:'喝水',say:'喝水',q:'喝水 (hē shuǐ) artinya …',o:['minum air','makan nasi','tidur'],a:'minum air',n:'喝 <b>hē</b> = minum, 水 <b>shuǐ</b> = air.'},
 ],
 pkn:[
  {img:'s1',q:'Simbol sila pertama Pancasila adalah …',o:['bintang','rantai','pohon beringin'],a:'bintang',n:'Sila ke-1, Ketuhanan Yang Maha Esa: <b>bintang</b>.'},
  {img:'s2',q:'Gambar ini adalah simbol sila ke …',o:['1','2','5'],a:'2',n:'<b>Rantai</b> adalah simbol sila ke-2.'},
  {img:'s3',q:'Pohon beringin adalah simbol sila ke …',o:['3','4','5'],a:'3',n:'Pohon beringin: sila ke-3, Persatuan Indonesia.'},
  {img:'s4',q:'Kepala banteng adalah simbol sila ke …',o:['2','4','1'],a:'4',n:'Kepala banteng: sila ke-4, kerakyatan / musyawarah.'},
  {img:'s5',q:'Padi dan kapas adalah simbol sila ke …',o:['3','5','2'],a:'5',n:'Padi dan kapas: sila ke-5, keadilan sosial.'},
  {q:'Berdoa sebelum belajar adalah contoh pengamalan sila ke …',o:['1','3','5'],a:'1',n:'Berdoa = Ketuhanan Yang Maha Esa, <b>sila ke-1</b>.'},
  {q:'Contoh aturan di sekolah adalah …',o:['datang tepat waktu','bermain HP saat belajar','mencoret meja'],a:'datang tepat waktu',n:'Aturan sekolah: <b>datang tepat waktu</b>, memakai seragam, menjaga kebersihan.'},
  {q:'Jika melanggar aturan di rumah, sikap yang baik adalah …',o:['meminta maaf dan tidak mengulangi','marah','menyalahkan adik'],a:'meminta maaf dan tidak mengulangi',n:'Kita <b>meminta maaf</b> dan berjanji tidak mengulangi.'},
  {q:'Teman berbeda agama sedang berdoa. Kita sebaiknya …',o:['menghormati dan tidak mengganggu','berisik','menertawakan'],a:'menghormati dan tidak mengganggu',n:'Saling <b>menghormati</b> perbedaan.'},
  {q:'Pancasila terdiri dari … sila.',o:['5','4','3'],a:'5',n:'Pancasila punya <b>5 sila</b>.'},
  {q:'Lambang negara Indonesia adalah …',o:['Garuda Pancasila','Harimau','Komodo'],a:'Garuda Pancasila',n:'Lambang negara kita adalah <b>Garuda Pancasila</b>.'},
  {q:'Semboyan pada pita Garuda Pancasila adalah …',o:['Bhinneka Tunggal Ika','Indonesia Raya','Merah Putih'],a:'Bhinneka Tunggal Ika',n:'<b>Bhinneka Tunggal Ika</b> = berbeda-beda tetapi tetap satu.'},
  {q:'Bunyi sila pertama Pancasila adalah …',o:['Ketuhanan Yang Maha Esa','Persatuan Indonesia','Kemanusiaan yang adil dan beradab'],a:'Ketuhanan Yang Maha Esa',n:'Sila ke-1: <b>Ketuhanan Yang Maha Esa</b>.'},
  {q:'Bunyi sila ketiga Pancasila adalah …',o:['Persatuan Indonesia','Ketuhanan Yang Maha Esa','Keadilan sosial bagi seluruh rakyat Indonesia'],a:'Persatuan Indonesia',n:'Sila ke-3: <b>Persatuan Indonesia</b>.'},
  {q:'Menolong teman yang jatuh adalah contoh pengamalan sila ke …',o:['2','4','1'],a:'2',n:'Peduli dan menolong sesama = <b>sila ke-2</b>, kemanusiaan.'},
  {q:'Memilih ketua kelas dengan musyawarah adalah contoh sila ke …',o:['4','3','5'],a:'4',n:'Musyawarah = <b>sila ke-4</b>.'},
  {q:'Bermain bersama teman dari suku yang berbeda adalah contoh sila ke …',o:['3','1','5'],a:'3',n:'Rukun walau berbeda = <b>sila ke-3</b>, persatuan.'},
  {q:'Membagi kue sama banyak kepada teman adalah contoh sila ke …',o:['5','2','4'],a:'5',n:'Bersikap adil = <b>sila ke-5</b>, keadilan sosial.'},
  {q:'Setelah selesai bermain, mainan sebaiknya …',o:['dirapikan kembali','dibiarkan berserakan','disembunyikan'],a:'dirapikan kembali',n:'Aturan di rumah: <b>rapikan mainan</b> setelah bermain.'},
  {q:'Jika semua orang mematuhi aturan, kehidupan menjadi …',o:['tertib dan nyaman','kacau','berisik'],a:'tertib dan nyaman',n:'Mematuhi aturan membuat hidup <b>tertib dan nyaman</b>.'},
 ],
 sunda:[
  {q:'"Kaulinan barudak" artinya …',o:['permainan anak-anak','lagu anak-anak','makanan anak-anak'],a:'permainan anak-anak',n:'<b>Kaulinan</b> = permainan, <b>barudak</b> = anak-anak.'},
  {q:'Melompat dengan satu kaki di kotak-kotak yang digambar di tanah. Namanya …',o:['sondah','congklak','oray-orayan'],a:'sondah',n:'<b>Sondah</b> (engklek) dimainkan dengan melompat satu kaki.'},
  {q:'Anak-anak berbaris memegang pundak teman, bergerak seperti ular. Namanya …',o:['oray-orayan','ucing-ucingan','sondah'],a:'oray-orayan',n:'<b>Oray</b> artinya ular, jadi <b>oray-orayan</b>.'},
  {q:'Permainan kejar-kejaran. Anak yang mengejar disebut "ucing". Namanya …',o:['ucing-ucingan','congklak','galah'],a:'ucing-ucingan',n:'<b>Ucing</b> artinya kucing. Permainannya <b>ucing-ucingan</b>.'},
  {q:'Permainan memakai papan berlubang dan biji-bijian. Namanya …',o:['congklak','sondah','bebentengan'],a:'congklak',n:'<b>Congklak</b> dimainkan dengan papan berlubang dan biji.'},
  {q:'"Oray" dalam bahasa Sunda artinya …',o:['ular','kucing','burung'],a:'ular',n:'<b>Oray</b> = ular. <b>Ucing</b> = kucing.'},
  {q:'Saat bermain bersama, sikap yang baik adalah …',o:['bergiliran dan jujur','curang supaya menang','marah kalau kalah'],a:'bergiliran dan jujur',n:'Bermain dengan <b>jujur</b>, <b>bergiliran</b>, dan menerima kalah.'},
  {q:'"Ulin" artinya …',o:['bermain','belajar','makan'],a:'bermain',n:'<b>Ulin</b> = bermain.'},
  {q:'"Babaturan" artinya …',o:['teman-teman','orang tua','guru'],a:'teman-teman',n:'<b>Babaturan</b> = teman-teman.'},
  {q:'Dua kelompok saling menjaga tiang atau benteng masing-masing. Namanya …',o:['bebentengan','sondah','congklak'],a:'bebentengan',n:'<b>Bebentengan</b>: tiap kelompok menjaga bentengnya.'},
  {q:'Dua tim; penjaga berusaha menghalangi lawan melewati garis. Namanya …',o:['galah','oray-orayan','paciwit-ciwit lutung'],a:'galah',n:'<b>Galah</b> (gobak sodor): penjaga berdiri di garis menghalangi lawan.'},
  {q:'Lagu "cingciripit" dinyanyikan untuk …',o:['menentukan siapa yang jadi','menidurkan adik','memulai upacara'],a:'menentukan siapa yang jadi',n:'<b>Cingciripit</b> dipakai untuk mengundi siapa yang jadi "ucing".'},
  {q:'Saling mencubit punggung tangan yang ditumpuk sambil bernyanyi. Namanya …',o:['paciwit-ciwit lutung','ucing-ucingan','galah'],a:'paciwit-ciwit lutung',n:'<b>Paciwit-ciwit lutung</b>: tangan ditumpuk dan saling mencubit pelan.'},
  {q:'Saat main sondah, pecahan genting yang dilempar ke kotak disebut …',o:['kereweng','kaleci','bal'],a:'kereweng',n:'Pecahan genting untuk sondah disebut <b>kereweng</b>.'},
  {q:'Main kelereng dalam bahasa Sunda disebut ulin …',o:['kaleci','sondah','galah'],a:'kaleci',n:'Kelereng dalam bahasa Sunda: <b>kaleci</b>.'},
  {q:'"Ucing sumput" adalah permainan …',o:['petak umpet','kejar bola','lompat tali'],a:'petak umpet',n:'<b>Ucing sumput</b> = petak umpet.'},
  {q:'"Sumput" artinya …',o:['sembunyi','lari','lompat'],a:'sembunyi',n:'<b>Sumput</b> = sembunyi.'},
  {q:'"Buruan" (tempat bermain di depan rumah) artinya …',o:['halaman','kamar','dapur'],a:'halaman',n:'<b>Buruan</b> = halaman rumah.'},
  {q:'"Eleh" artinya …',o:['kalah','menang','lelah'],a:'kalah',n:'<b>Eleh</b> = kalah.'},
  {q:'Manfaat kaulinan barudak adalah …',o:['badan sehat dan banyak teman','mata cepat lelah','jadi malas bergerak'],a:'badan sehat dan banyak teman',n:'Kaulinan barudak membuat <b>badan sehat</b> dan <b>banyak teman</b>.'},
 ],
 plh:[
  {sort:{bins:[['org','Organik','mudah membusuk'],['an','Anorganik','sulit membusuk']],items:[['kulit pisang','org'],['botol plastik','an'],['daun kering','org'],['kaleng minuman','an'],['sisa nasi','org'],['sedotan plastik','an'],['kulit jeruk','org'],['bungkus permen','an']]},q:'Seret setiap sampah ke tempat sampah yang benar.',n:'Organik: kulit pisang, daun kering, sisa nasi, kulit jeruk. Anorganik: botol plastik, kaleng, sedotan, bungkus permen.'},
  {q:'Sampah organik adalah sampah yang …',o:['mudah membusuk','sulit membusuk','terbuat dari plastik'],a:'mudah membusuk',n:'Sampah <b>organik</b> berasal dari makhluk hidup dan <b>mudah membusuk</b>, misalnya sisa makanan dan daun.'},
  {q:'Sampah anorganik adalah sampah yang …',o:['sulit membusuk','mudah membusuk','bisa dimakan'],a:'sulit membusuk',n:'Sampah <b>anorganik</b> seperti plastik, kaleng, dan kaca <b>sulit membusuk</b>.'},
  {q:'Kulit pisang termasuk sampah …',o:['organik','anorganik','berbahaya'],a:'organik',n:'Kulit pisang mudah membusuk, jadi termasuk sampah <b>organik</b>.'},
  {q:'Kaleng minuman termasuk sampah …',o:['anorganik','organik','makanan'],a:'anorganik',n:'Kaleng sulit membusuk, jadi termasuk sampah <b>anorganik</b>.'},
  {q:'Tempat sampah berwarna hijau biasanya untuk sampah …',o:['organik','anorganik','kaca'],a:'organik',n:'Umumnya: <b>hijau</b> untuk sampah organik, <b>kuning</b> untuk anorganik.'},
  {q:'Tempat sampah berwarna kuning biasanya untuk sampah …',o:['anorganik','organik','daun'],a:'anorganik',n:'Tempat sampah <b>kuning</b> untuk sampah anorganik seperti plastik dan kaleng.'},
  {q:'Sampah daun dan sisa sayur bisa diolah menjadi …',o:['pupuk kompos','botol','kertas'],a:'pupuk kompos',n:'Sampah organik bisa dijadikan <b>pupuk kompos</b> untuk menyuburkan tanaman.'},
  {q:'Membuang sampah ke sungai dapat menyebabkan …',o:['banjir','pelangi','sungai lebih bersih'],a:'banjir',n:'Sampah menyumbat aliran sungai, sehingga air meluap dan terjadi <b>banjir</b>.'},
  {q:'Sampah yang menumpuk dan bau akan didatangi …',o:['lalat','kupu-kupu','burung merpati'],a:'lalat',n:'<b>Lalat</b> suka hinggap di sampah dan membawa kuman penyakit.'},
  {q:'Jajan di sekolah, tetapi tidak ada tempat sampah di dekatmu. Bungkusnya sebaiknya …',o:['disimpan dulu, lalu dibuang di tempat sampah','dibuang di lantai','diselipkan di bawah meja'],a:'disimpan dulu, lalu dibuang di tempat sampah',n:'Simpan dulu bungkusnya di saku atau tas, lalu <b>buang di tempat sampah</b>.'},
  {q:'Membersihkan kelas secara bergiliran setiap hari disebut …',o:['piket','upacara','istirahat'],a:'piket',n:'Membersihkan kelas bergiliran disebut <b>piket kelas</b>.'},
  {q:'Warga membersihkan selokan bersama-sama. Kegiatan ini disebut …',o:['kerja bakti','lomba lari','bermain'],a:'kerja bakti',n:'Membersihkan lingkungan bersama-sama disebut <b>kerja bakti</b> (gotong royong).'},
  {q:'Botol plastik bekas dibuat menjadi pot bunga. Ini disebut …',o:['mendaur ulang','membuang','membakar'],a:'mendaur ulang',n:'Mengubah barang bekas menjadi barang berguna disebut <b>daur ulang</b>.'},
  {q:'Cara mengurangi sampah plastik di sekolah adalah …',o:['membawa botol minum sendiri','membeli minuman botol setiap hari','memakai banyak sedotan'],a:'membawa botol minum sendiri',n:'<b>Membawa botol minum sendiri</b> mengurangi sampah botol plastik.'},
  {q:'Kertas yang satu sisinya masih kosong sebaiknya …',o:['dipakai lagi untuk menulis','langsung dibuang','dibakar'],a:'dipakai lagi untuk menulis',n:'Kertas bekas yang masih kosong bisa <b>dipakai lagi</b>. Ini menghemat kertas.'},
  {q:'Sebelum makan, kita mencuci tangan dengan …',o:['sabun dan air mengalir','air di ember saja','tisu kering saja'],a:'sabun dan air mengalir',n:'Cuci tangan dengan <b>sabun dan air mengalir</b> agar kuman hilang.'},
  {q:'Kita menggosok gigi paling sedikit …',o:['2 kali sehari','1 kali seminggu','tidak perlu'],a:'2 kali sehari',n:'Gosok gigi <b>pagi hari dan sebelum tidur</b>, paling sedikit 2 kali sehari.'},
  {q:'Kuku yang panjang dan kotor bisa menyimpan …',o:['kuman','vitamin','air'],a:'kuman',n:'Kuku panjang menyimpan <b>kuman</b>. Potong kuku seminggu sekali.'},
  {sort:{bins:[['ya','Menjaga kebersihan','sikap baik'],['tidak','Tidak menjaga','sikap tidak baik']],items:[['membuang sampah di tempatnya','ya'],['mencuci tangan sebelum makan','ya'],['ikut piket kelas','ya'],['mencoret-coret dinding','tidak'],['membuang sampah ke sungai','tidak'],['meninggalkan sisa makanan di meja','tidak']]},q:'Seret setiap sikap ke kotak yang benar.',n:'Sikap baik: membuang sampah di tempatnya, cuci tangan, piket. Tidak baik: mencoret dinding, buang sampah ke sungai, meninggalkan sisa makanan.'},
  {q:'Lingkungan yang bersih membuat kita …',o:['sehat dan nyaman','mudah sakit','malas belajar'],a:'sehat dan nyaman',n:'Lingkungan bersih membuat kita <b>sehat dan nyaman</b> belajar dan bermain.'},
 ],
 indo:[
  {q:'Penulisan nama yang benar adalah …',o:['Hector pergi ke Bandung.','hector pergi ke bandung.','Hector pergi ke bandung.'],a:'Hector pergi ke Bandung.',n:'Nama orang dan nama kota diawali <b>huruf kapital</b>.'},
  {q:'Tanda baca yang tepat: "Siapa namamu …"',o:['?','.','!'],a:'?',n:'Kalimat tanya diakhiri <b>tanda tanya (?)</b>.'},
  {q:'Tanda baca yang tepat: "Awas, ada ular …"',o:['!','?',','],a:'!',n:'Kalimat seruan atau peringatan diakhiri <b>tanda seru (!)</b>.'},
  {q:'Lawan kata "besar" adalah …',o:['kecil','tinggi','luas'],a:'kecil',n:'Besar >< <b>kecil</b>.'},
  {q:'Lawan kata "rajin" adalah …',o:['malas','pintar','cepat'],a:'malas',n:'Rajin >< <b>malas</b>.'},
  {read:'Pagi itu Hector bangun pukul enam. Ia mandi, lalu sarapan roti. Ayah mengantar Hector ke sekolah naik motor.',q:'Hector ke sekolah naik …',o:['motor','mobil','sepeda'],a:'motor',n:'Bacaan: "Ayah mengantar Hector ke sekolah naik <b>motor</b>."'},
  {read:'Pagi itu Hector bangun pukul enam. Ia mandi, lalu sarapan roti. Ayah mengantar Hector ke sekolah naik motor.',q:'Apa sarapan Hector?',o:['roti','nasi','bubur'],a:'roti',n:'Bacaan: "Ia mandi, lalu sarapan <b>roti</b>."'},
  {q:'Penulisan kalimat yang benar adalah …',o:['Ibu memasak di dapur.','ibu memasak di dapur.','Ibu Memasak Di Dapur.'],a:'Ibu memasak di dapur.',n:'Awal kalimat memakai <b>huruf kapital</b>, kata lain huruf kecil.'},
  {q:'Penulisan nama hari yang benar adalah …',o:['Hari Senin','hari senin','Hari senin'],a:'Hari Senin',n:'Nama hari diawali <b>huruf kapital</b>: Senin.'},
  {q:'Tanda baca yang tepat: "Adik minum susu …"',o:['.','?','!'],a:'.',n:'Kalimat berita diakhiri <b>tanda titik (.)</b>.'},
  {q:'Persamaan kata "pandai" adalah …',o:['pintar','malas','lambat'],a:'pintar',n:'Pandai = <b>pintar</b>.'},
  {q:'Persamaan kata "gembira" adalah …',o:['senang','sedih','takut'],a:'senang',n:'Gembira = <b>senang</b>.'},
  {q:'Lawan kata "panas" adalah …',o:['dingin','hangat','terang'],a:'dingin',n:'Panas >< <b>dingin</b>.'},
  {q:'Lawan kata "tinggi" adalah …',o:['rendah','besar','jauh'],a:'rendah',n:'Tinggi >< <b>rendah</b>.'},
  {q:'"Kucing itu sangat lucu." Kata sifatnya adalah …',o:['lucu','kucing','sangat'],a:'lucu',n:'<b>Lucu</b> menjelaskan sifat kucing.'},
  {q:'"Hector menendang bola." Kata kerjanya adalah …',o:['menendang','Hector','bola'],a:'menendang',n:'<b>Menendang</b> adalah pekerjaan yang dilakukan.'},
  {q:'Susun menjadi kalimat: ke – pergi – sekolah – Hector',o:['Hector pergi ke sekolah.','Sekolah pergi ke Hector.','Pergi Hector sekolah ke.'],a:'Hector pergi ke sekolah.',n:'Kalimat yang benar: <b>Hector pergi ke sekolah.</b>'},
  {read:'Siti punya kucing bernama Mimi. Bulunya putih dan lembut. Mimi suka makan ikan.',q:'Siapa nama kucing Siti?',o:['Mimi','Siti','Kiki'],a:'Mimi',n:'Bacaan: "Siti punya kucing bernama <b>Mimi</b>."'},
  {read:'Siti punya kucing bernama Mimi. Bulunya putih dan lembut. Mimi suka makan ikan.',q:'Apa warna bulu Mimi?',o:['putih','hitam','oranye'],a:'putih',n:'Bacaan: "Bulunya <b>putih</b> dan lembut."'},
  {read:'Siti punya kucing bernama Mimi. Bulunya putih dan lembut. Mimi suka makan ikan.',q:'Mimi suka makan …',o:['ikan','roti','sayur'],a:'ikan',n:'Bacaan: "Mimi suka makan <b>ikan</b>."'},
 ],
 pjok:[
  {sort:{bins:[['lok','Lokomotor','berpindah tempat'],['non','Non-lokomotor','tidak berpindah'],['man','Manipulatif','memakai benda/bola']],items:[['berjalan','lok'],['berlari','lok'],['melompat','lok'],['menekuk','non'],['meliuk','non'],['mengayun','non'],['melempar','man'],['menangkap','man'],['menendang','man']]},q:'Seret setiap gerakan ke kelompoknya.',n:'Lokomotor = berpindah tempat. Non-lokomotor = di tempat. Manipulatif = memainkan benda.'},
  {q:'Berguling ke depan termasuk gerakan …',o:['senam','manipulatif','lokomotor'],a:'senam',n:'Bertumpu, keseimbangan, dan <b>berguling ke depan</b> adalah gerakan senam.'},
  {q:'Menendang bola termasuk gerak …',o:['manipulatif','non-lokomotor','lokomotor'],a:'manipulatif',n:'Memainkan bola = gerak <b>manipulatif</b>.'},
  {q:'Berlari termasuk gerak …',o:['lokomotor','non-lokomotor','manipulatif'],a:'lokomotor',n:'Berlari membuat kita berpindah tempat, jadi <b>lokomotor</b>.'},
  {q:'Melompat termasuk gerak …',o:['lokomotor','manipulatif','senam lantai'],a:'lokomotor',n:'Melompat berpindah tempat, jadi <b>lokomotor</b>.'},
  {q:'Menekuk lutut termasuk gerak …',o:['non-lokomotor','lokomotor','manipulatif'],a:'non-lokomotor',n:'Menekuk dilakukan di tempat, jadi <b>non-lokomotor</b>.'},
  {q:'Mengayun lengan termasuk gerak …',o:['non-lokomotor','lokomotor','manipulatif'],a:'non-lokomotor',n:'Mengayun di tempat = <b>non-lokomotor</b>.'},
  {q:'Meliuk termasuk gerak …',o:['non-lokomotor','manipulatif','lokomotor'],a:'non-lokomotor',n:'Meliuk dilakukan di tempat = <b>non-lokomotor</b>.'},
  {q:'Melempar bola termasuk gerak …',o:['manipulatif','lokomotor','non-lokomotor'],a:'manipulatif',n:'Memainkan bola = <b>manipulatif</b>.'},
  {q:'Menangkap bola termasuk gerak …',o:['manipulatif','non-lokomotor','lokomotor'],a:'manipulatif',n:'Menangkap bola = <b>manipulatif</b>.'},
  {q:'Gerak lokomotor adalah gerak yang …',o:['berpindah tempat','tidak berpindah tempat','memakai bola'],a:'berpindah tempat',n:'Lokomotor = <b>berpindah tempat</b>.'},
  {q:'Gerak non-lokomotor adalah gerak yang …',o:['tidak berpindah tempat','berpindah tempat','memakai alat'],a:'tidak berpindah tempat',n:'Non-lokomotor = <b>di tempat</b>, tidak berpindah.'},
  {q:'Gerak manipulatif adalah gerak yang …',o:['memainkan benda atau alat','berjalan jauh','diam saja'],a:'memainkan benda atau alat',n:'Manipulatif = <b>memainkan benda</b>, misalnya bola.'},
  {q:'Sebelum berolahraga, kita melakukan …',o:['pemanasan','tidur','makan banyak'],a:'pemanasan',n:'<b>Pemanasan</b> agar otot siap dan tidak cedera.'},
  {q:'Saat berguling ke depan, dagu ditempelkan ke …',o:['dada','lutut','lantai'],a:'dada',n:'Dagu menempel ke <b>dada</b> agar leher aman.'},
  {q:'Berdiri dengan satu kaki melatih …',o:['keseimbangan','kecepatan','kekuatan suara'],a:'keseimbangan',n:'Berdiri satu kaki melatih <b>keseimbangan</b>.'},
  {q:'Setelah berolahraga, sebaiknya kita …',o:['minum air putih dan istirahat','langsung tidur di lapangan','minum soda banyak'],a:'minum air putih dan istirahat',n:'<b>Minum air putih</b> dan istirahat sebentar.'},
  {q:'Pakaian yang tepat untuk pelajaran PJOK adalah …',o:['baju olahraga','baju pesta','seragam batik'],a:'baju olahraga',n:'Pakai <b>baju olahraga</b> agar bebas bergerak.'},
  {q:'Menendang bola menggunakan …',o:['kaki','tangan','kepala'],a:'kaki',n:'Menendang memakai <b>kaki</b>.'},
  {sort:{bins:[['lok','Lokomotor','berpindah tempat'],['non','Non-lokomotor','di tempat']],items:[['jalan jinjit','lok'],['lari kecil','lok'],['lompat katak','lok'],['memutar badan','non'],['membungkuk','non'],['mengangkat tangan','non']]},q:'Seret setiap gerakan ke kelompoknya.',n:'Berpindah tempat: jalan jinjit, lari kecil, lompat katak. Di tempat: memutar badan, membungkuk, mengangkat tangan.'},
 ],
 komp:[
  {q:'Jari telunjuk kiri diletakkan di tombol …',o:['F','A','J'],a:'F',n:'Telunjuk kiri di <b>F</b>, telunjuk kanan di <b>J</b>. Ada tonjolan kecil di kedua tombol itu.'},
  {q:'Jari kelingking kanan diletakkan di tombol …',o:[';','L','K'],a:';',n:'Tangan kanan: J (telunjuk), K (tengah), L (manis), <b>;</b> (kelingking).'},
  {q:'Jari kelingking kiri diletakkan di tombol …',o:['A','S','F'],a:'A',n:'Tangan kiri: <b>A</b> (kelingking), S (manis), D (tengah), F (telunjuk).'},
  {type:['asdf jkl;','ada','lada','kakak','salak','jalak','dada','asdf jkl; asdf jkl;'],q:'Latihan mengetik baris tengah',n:''},
  {q:'Jari telunjuk kanan diletakkan di tombol …',o:['J','K','F'],a:'J',n:'Telunjuk kanan di <b>J</b>.'},
  {q:'Jari tengah kiri diletakkan di tombol …',o:['D','S','F'],a:'D',n:'Tangan kiri: A, S, <b>D (tengah)</b>, F.'},
  {q:'Jari manis kanan diletakkan di tombol …',o:['L','K',';'],a:'L',n:'Tangan kanan: J, K, <b>L (manis)</b>, ;.'},
  {q:'Jari manis kiri diletakkan di tombol …',o:['S','A','D'],a:'S',n:'Tangan kiri: A, <b>S (manis)</b>, D, F.'},
  {q:'Jari tengah kanan diletakkan di tombol …',o:['K','J','L'],a:'K',n:'Tangan kanan: J, <b>K (tengah)</b>, L, ;.'},
  {q:'Tombol spasi ditekan dengan …',o:['ibu jari','kelingking','telunjuk'],a:'ibu jari',n:'Spasi ditekan dengan <b>ibu jari</b>.'},
  {q:'Tombol yang punya tonjolan kecil adalah …',o:['F dan J','A dan ;','S dan L'],a:'F dan J',n:'Tonjolan di <b>F dan J</b> membantu jari menemukan posisi tanpa melihat.'},
  {q:'Aplikasi yang dipakai untuk latihan mengetik di kelas adalah …',o:['Notepad','Kalkulator','Paint'],a:'Notepad',n:'Latihan mengetik memakai <b>Notepad</b>.'},
  {q:'Saat mengetik 10 jari, mata melihat ke …',o:['layar','keyboard','jari'],a:'layar',n:'Mata melihat <b>layar</b>, jari hafal posisinya.'},
  {q:'Posisi duduk yang baik saat mengetik adalah …',o:['tegak','membungkuk','tiduran'],a:'tegak',n:'Duduk <b>tegak</b> dan nyaman.'},
  {q:'Tombol untuk menghapus huruf di sebelah kiri adalah …',o:['Backspace','Enter','Shift'],a:'Backspace',n:'<b>Backspace</b> menghapus huruf di kiri kursor.'},
  {q:'Tombol untuk pindah ke baris baru adalah …',o:['Enter','Spasi','Backspace'],a:'Enter',n:'<b>Enter</b> membuat baris baru.'},
  {type:['fff jjj','ddd kkk','sss lll','aaa ;;;'],q:'Latihan jari: tekan tombol yang sama 3 kali',n:''},
  {type:['ada dada','lada salak','kakak ada'],q:'Latihan kata baris tengah',n:''},
  {type:['jalak','salad','dadak','kakak ada lada'],q:'Latihan kata baris tengah 2',n:''},
  {type:['asdf jkl;','fdsa ;lkj','asdf jkl; fdsa ;lkj'],q:'Latihan urutan jari maju dan mundur',n:''},
 ],
};
/* ===== gambar ===== */
const SV=(inner,vb='-20 -20 40 40',w=56,cls='')=>`<svg viewBox="${vb}" width="${w}" height="${w}" class="${cls}" aria-hidden="true">${inner}</svg>`;
const COL={R:'#E5484D',Y:'#F5C518',B:'#3D7BE0',G:'#3FA34D'},CNAME={R:'merah',Y:'kuning',B:'biru',G:'hijau'};
const SH={
 c:`<circle r="14" fill="#E5484D"/>`,t:`<path d="M0 -15 L15 12 H-15Z" fill="#3FA34D"/>`,s:`<rect x="-13" y="-13" width="26" height="26" rx="2" fill="#3D7BE0"/>`,
 st:`<path d="M0 -16 L4.7 -5.8 L15.8 -4.9 L7.3 2.4 L9.8 13.3 L0 7.5 L-9.8 13.3 L-7.3 2.4 L-15.8 -4.9 L-4.7 -5.8Z" fill="#F5C518"/>`,
 m:`<path d="M6 -14 A15 15 0 1 0 6 14 A11 11 0 1 1 6 -14Z" fill="#8E5BD8"/>`};
const SHN={c:'lingkaran',t:'segitiga',s:'persegi',st:'bintang',m:'bulan'};
const IMG={
 pencil:`<g transform="rotate(-38)"><rect x="-15" y="-4.5" width="22" height="9" fill="#F5C518"/><rect x="-20" y="-4.5" width="5" height="9" rx="2" fill="#F2708A"/><path d="M7 -4.5 L17 0 L7 4.5Z" fill="#EBCB9B"/><path d="M13.5 -1.6 L17 0 L13.5 1.6Z" fill="#333"/></g>`,
 bag:`<path d="M-6 -9 v-3 a6 6 0 0 1 12 0 v3" stroke="#A8282D" stroke-width="3" fill="none"/><rect x="-14" y="-9" width="28" height="25" rx="8" fill="#E5484D"/><rect x="-9" y="3" width="18" height="10" rx="3.5" fill="#C0353A"/>`,
 apple:`<path d="M0 -7 C-6 -13 -16 -10 -15 1 C-14 11 -6 16 0 12 C6 16 14 11 15 1 C16 -10 6 -13 0 -7Z" fill="#E5484D"/><path d="M0 -7 q1 -6 4 -9" stroke="#6B4220" stroke-width="2.5" fill="none"/><path d="M2 -12 q7 -5 11 0 q-6 4 -11 0Z" fill="#3FA34D"/>`,
 ...SILA};
function figRoom(){return `<svg viewBox="0 0 320 170" class="fig" role="img" aria-label="Gambar meja, bola, kucing, tas, dan kursi"><rect width="320" height="170" rx="14" fill="var(--paper2)"/><rect y="140" width="320" height="30" fill="var(--floor)"/>
  <rect x="110" y="70" width="110" height="10" rx="3" fill="#B5803F"/><path d="M118 80 V142 M212 80 V142" stroke="#8B5A2B" stroke-width="7" stroke-linecap="round"/>
  <circle cx="165" cy="56" r="14" fill="#E5484D"/><path d="M151 56 Q165 46 179 56 M165 42 V70" stroke="#fff" stroke-width="2" fill="none"/>
  <g transform="translate(165 126)"><ellipse rx="22" ry="12" fill="#F5A623"/><circle cx="18" cy="-8" r="9" fill="#F5A623"/><path d="M12 -16 l3 -7 l4 6z M20 -16 l4 -6 l2 7z" fill="#F5A623"/><path d="M14 -9 q2 1 3 0 M20 -9 q2 1 3 0" stroke="#3A2416" stroke-width="1.4" fill="none"/><path d="M-22 4 q-14 0 -12 -12" stroke="#F5A623" stroke-width="4" fill="none" stroke-linecap="round"/></g>
  <g transform="translate(62 116)"><path d="M-8 -22 v-4 a8 8 0 0 1 16 0 v4" stroke="#1F4FA0" stroke-width="3" fill="none"/><rect x="-18" y="-22" width="36" height="44" rx="9" fill="#3D7BE0"/><rect x="-12" y="0" width="24" height="12" rx="3" fill="#2A5FB8"/></g>
  <g transform="translate(262 100)"><path d="M14 -40 V42" stroke="#8B5A2B" stroke-width="6" stroke-linecap="round"/><path d="M-16 6 H16" stroke="#B5803F" stroke-width="8" stroke-linecap="round"/><path d="M-14 8 V42" stroke="#8B5A2B" stroke-width="6" stroke-linecap="round"/></g>
  <text x="62" y="160" text-anchor="middle" class="lb">tas</text><text x="165" y="160" text-anchor="middle" class="lb">meja</text><text x="262" y="160" text-anchor="middle" class="lb">kursi</text></svg>`}
function figRow(row){const r=row||['c','st','t','s'];return `<div class="shrow">${r.map((k,i)=>`<div><span class="n">${i+1}</span>${SV(SH[k],undefined,52)}<small>${SHN[k]}</small></div>`).join('')}</div><p class="hint">← kiri · · · kanan →</p>`}
const patItem=k=>k==='?'?`<span class="pq">?</span>`:COL[k]?`<span class="dot" style="background:${COL[k]}"></span>`:SV(SH[k],undefined,40);
const optLabel=(q,o)=>q.pat?(COL[o]?`<span class="dot" style="background:${COL[o]}"></span>${CNAME[o]}`:`${SV(SH[o],undefined,34)}${SHN[o]}`):o;

/* ===== suara & mikrofon ===== */
let TTS=null,DICT=null;const HAS_SS='speechSynthesis' in window&&'SpeechSynthesisUtterance' in window;
if(window.claude&&claude.use){claude.use('tts').then(t=>{TTS=t||null}).catch(()=>{});claude.use('dictation').then(d=>{DICT=d||null;if(d){d.onPartial(e=>SP.partial(e.text));d.onFinal(e=>SP.final(e.text));d.onState(e=>SP.state(e))}}).catch(()=>{})}
async function speak(text,lang='en',rate=.9){try{TTS&&TTS.stop().catch(()=>{})}catch(e){}try{HAS_SS&&speechSynthesis.cancel()}catch(e){}
  if(TTS){try{await TTS.speak(text,{rate,language:lang,voice:'airy'});return}catch(e){if(e&&(e.code==='not_granted'||e.code==='unavailable'))TTS=null;else return}}
  if(!HAS_SS)return;await new Promise(res=>{const u=new SpeechSynthesisUtterance(text);u.lang=lang==='zh'?'zh-CN':'en-US';const v=speechSynthesis.getVoices().find(x=>x.lang.toLowerCase().startsWith(lang==='zh'?'zh':'en'));if(v)u.voice=v;u.rate=rate;u.onend=res;u.onerror=res;setTimeout(res,1500+text.length*120);speechSynthesis.speak(u)})}
let AC=null;function tone(f,d=.12,v=.12,w=0){try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();const t=AC.currentTime+w,o=AC.createOscillator(),g=AC.createGain();o.type='triangle';o.frequency.value=f;g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g).connect(AC.destination);o.start(t);o.stop(t+d+.02)}catch(e){}}
const sfx={ok:()=>[523,659,784].forEach((f,i)=>tone(f,.16,.12,i*.08)),bad:()=>tone(220,.2,.08)};

/* ===== penyimpanan ===== */
const SKEY='hector.week.2026-11-23';let SAVE={};try{SAVE=JSON.parse(localStorage.getItem(SKEY)||'{}')||{}}catch(e){}
SAVE.done=SAVE.done||{};SAVE.best=SAVE.best||{};SAVE.att=SAVE.att||[];if(SAVE.name==null)SAVE.name='Hector';const persist=()=>{try{localStorage.setItem(SKEY,JSON.stringify(SAVE))}catch(e){}};

/* ===== tampilan rencana ===== */
const app=document.getElementById('app');let V={day:SAVE.day||'sen'};
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
function render(){const d=PLAN.find(p=>p.key===V.day);const allT=PLAN.flatMap(p=>p.tasks.map(t=>p.key+':'+t[0]+':'+t[1]));const doneN=allT.filter(k=>SAVE.done[k]).length;
  app.innerHTML=`<header class="top"><div><span class="eyebrow">Kelas 2C · SD Harapan Kasih · 23–27 November 2026</span><h1>Rencana Belajar <span class="nm">${esc(SAVE.name||'Murid')}</span></h1><p>Minggu persiapan <b>ASAS</b>. Belajar setiap malam ±30–40 menit, sesuai pelajaran besok.</p>
   <div class="namebox"><label for="nama">Nama murid</label><input id="nama" value="${esc(SAVE.name)}" placeholder="Tulis nama" maxlength="30" autocomplete="off"><button class="btn rap" data-rapor="1">Lihat nilai ›</button></div></div>
   <div class="prog"><b>${doneN}/${allT.length}</b><span>tugas malam selesai</span><div class="bar"><i style="width:${Math.round(doneN/allT.length*100)}%"></i></div></div></header>
  <nav class="days" aria-label="Pilih hari">${PLAN.map(p=>{const n=p.tasks.filter(t=>SAVE.done[p.key+':'+t[0]+':'+t[1]]).length;const test=p.school.some(s=>/ulangan|tes|remedial|asas/i.test(s[1]));return `<button class="day ${p.key===V.day?'on':''}" data-day="${p.key}"><small>${p.day}</small><b>${p.for.split(',')[0]}</b><span>${n}/${p.tasks.length} ✓${test?' · <em>ada tes</em>':''}</span></button>`}).join('')}</nav>
  <section class="daycard"><div class="school"><h2>Besok di sekolah <small>${d.for}</small></h2><ul>${d.school.map(([s,m])=>`<li><span class="sj">${s}</span><span class="${/ulangan|tes|remedial|asas/i.test(m)?'test':''}">${m}</span></li>`).join('')}</ul><p class="tip">${d.tip}</p></div>
   <div class="tasks"><h2>Malam ini belajar</h2>${d.tasks.map(t=>{const k=d.key+':'+t[0]+':'+t[1],on=!!SAVE.done[k],s=SUBJ[t[0]];return `<div class="task ${on?'done':''}"><input type="checkbox" id="t_${esc(k)}" data-task="${esc(k)}" ${on?'checked':''}><label for="t_${esc(k)}"><b style="color:${s?s.c:'var(--ink)'}">${s?s.name:'Agama'}</b> ${t[1]} <small>${t[2]}</small></label>${s?`<button class="go" data-quiz="${t[0]}">Latihan ›</button>`:''}</div>`}).join('')}</div></section>
  <section><h2 class="h2">Latihan soal <small>berdasarkan jadwal kelas 2C</small></h2>
   <div class="subs">${Object.entries(SUBJ).map(([k,s])=>`<button class="subc" data-quiz="${k}" style="--c:${s.c}"><b>${s.name}</b><span>${s.sub}</span><span class="meta">${QS[k].length} soal${SAVE.best[k]!=null?` · terbaik ${SAVE.best[k]}%`:''}${s.check?' · <em>cocokkan dgn buku</em>':''}</span></button>`).join('')}</div></section>
  <p class="foot">Soal bertanda <em>cocokkan dgn buku</em> dibuat dari materi umum kelas 2 karena isi bab/unit tidak tercantum di jadwal. Agama tidak dibuatkan soal karena perlu disesuaikan dengan agama Hector.</p>`}

/* ===== kuis ===== */
let Q=null;
function openQuiz(k){Q=null;const s=SUBJ[k],n=QS[k].length;
  app.innerHTML=`<div class="qbar"><button class="back" data-home="1">‹ Rencana</button><b style="color:${s.c}">${s.name}</b></div><section class="qcard start" style="--c:${s.c}"><span class="eyebrow">${s.sub}</span><h2>Mau latihan berapa soal?</h2><p>${n} soal tersedia${SAVE.best[k]!=null?` · nilai terbaik ${SAVE.best[k]}`:''}</p>
   <div class="startopts"><button class="sbtn" data-start="${k}:10"><b>10</b><span>soal acak</span><small>± 5 menit</small></button><button class="sbtn" data-start="${k}:20"><b>20</b><span>soal acak</span><small>± 10 menit</small></button><button class="sbtn" data-start="${k}:${n}"><b>${n}</b><span>semua soal</span><small>± 25 menit</small></button></div>
   <div class="histbox"><h3>Riwayat latihan</h3>${trend(histOf(k),s.c)}${histTable(histOf(k).slice(-10),false)}</div></section>`;scrollTo({top:0})}
function startQuiz(k,cnt){const all=QS[k];let list=all;if(cnt<all.length){list=all.map(q=>[Math.random(),q]).sort((x,y)=>x[0]-y[0]).slice(0,cnt).map(x=>x[1])}Q={k,i:0,ok:0,tries:0,list,P:{},t0:Date.now()};renderQ();scrollTo({top:0})}
function renderQ(){const s=SUBJ[Q.k],q=Q.list[Q.i];Q.tries=0;Q.done=false;
  let body='';
  if(q.fig==='room')body+=figRoom();if(q.fig==='row')body+=figRow();if(q.row)body+=figRow(q.row);
  if(q.pat)body+=`<div class="pat">${q.pat.map(patItem).join('')}</div>`;
  if(q.img==='stars12')body+=`<div class="stars">${[...Array(12)].map(()=>SV(SH.st,undefined,30)).join('')}</div>`;else if(q.img)body+=`<div class="bigimg">${SV(IMG[q.img],undefined,110)}</div>`;
  if(q.read)body+=`<blockquote class="read">${q.read}</blockquote>`;
  if(q.zh)body+=`<div class="zh"><span lang="zh">${q.zh}</span>${q.say?`<button class="spk" data-say="${esc(q.say)}" data-lang="zh">🔊 Dengar</button>`:''}</div>`;
  if(q.say&&!q.zh)body+=`<div class="lis"><button class="spk big" data-say="${esc(q.say)}" data-lang="en">🔊 Dengarkan</button><button class="spk" data-say="${esc(q.say)}" data-lang="en" data-slow="1">🐢 Pelan</button></div>`;
  let ans='';
  if(q.o)ans=`<div class="opts ${q.pat?'patopts':''}">${q.o.map(o=>`<button class="opt" data-pick="${esc(o)}">${optLabel(q,o)}</button>`).join('')}</div>`;
  if(q.sort)ans=sortHTML(q);
  if(q.speak)ans=speakHTML(q);
  if(q.type)ans=typeHTML(q);
  app.innerHTML=`<div class="qbar"><button class="back" data-home="1">‹ Rencana</button><b style="color:${s.c}">${s.name}</b><span>${Q.i+1}/${Q.list.length}</span><div class="bar"><i style="width:${Math.round(Q.i/Q.list.length*100)}%;background:${s.c}"></i></div></div>
   <section class="qcard" style="--c:${s.c}"><h2>${q.q}</h2>${body}${ans}<div class="msg" id="msg" aria-live="polite"></div><div id="fb"></div></section>`;
  if(q.say&&!q.zh)setTimeout(()=>speak(q.say,'en'),400);if(q.type)initType(q);if(q.sort)redrawSort()}
function pick(b){const q=Q.list[Q.i];if(Q.done||b.disabled)return;
  if(b.dataset.pick===q.a){b.classList.add('ok');Q.done=true;lock();if(Q.tries===0)Q.ok++;sfx.ok();burst(b);fb(true)}
  else{b.classList.add('bad');b.disabled=true;sfx.bad();Q.tries++;if(Q.tries>=2){Q.done=true;[...document.querySelectorAll('.opt')].find(x=>x.dataset.pick===q.a)?.classList.add('ok');lock();fb(false)}else document.getElementById('msg').textContent='Belum tepat, coba lagi!'}}
const lock=()=>document.querySelectorAll('.opt').forEach(x=>x.disabled=true);
function fb(ok,html){const q=Q.list[Q.i];Q.res=Q.res||[];if(Q.res[Q.i]==null)Q.res[Q.i]=ok?(Q.tries===0?1:.5):0;document.getElementById('msg').textContent='';
  document.getElementById('fb').innerHTML=`<div class="fbk ${ok?'good':'show'}"><b>${ok?(Q.tries===0?'Hebat, benar!':'Benar!'):'Ini jawabannya'}</b>${html||q.n?`<p>${html||q.n}</p>`:''}${ok?`<div class="auto"><i></i><span>Lanjut otomatis…</span></div>`:''}<button class="btn" id="nx">${Q.i<Q.list.length-1?'Soal berikutnya ›':'Lihat hasil ›'}</button></div>`;
  document.getElementById('nx').onclick=next;clearTimeout(Q.autoT);if(ok){const my=Q.i,kk=Q.k;Q.autoT=setTimeout(()=>{if(Q&&Q.k===kk&&Q.i===my&&document.getElementById('nx'))next()},2400)}document.getElementById('nx').focus({preventScroll:true});document.getElementById('fb').scrollIntoView({block:'nearest',behavior:'smooth'})}
function next(){clearTimeout(Q.autoT);if(Q.i<Q.list.length-1){Q.i++;Q.P={};Q.m=null;Q.sel=null;renderQ();document.querySelector('.qcard').scrollIntoView({block:'start',behavior:'smooth'})}else result()}
const PRED=v=>v>=90?['A','Sangat baik','#1E8A4C']:v>=75?['B','Baik','#2F6FD0']:v>=60?['C','Cukup','#C98A00']:['D','Perlu bimbingan','#C0392B'];
const fmtT=t=>{const d=new Date(t);return d.toLocaleDateString('id-ID',{weekday:'short',day:'numeric',month:'short'})+' '+d.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'})};
const fmtDur=ms=>{if(ms==null)return '–';const s=Math.max(1,Math.round(ms/1000)),m=Math.floor(s/60);return m?`${m} mnt ${s%60} dtk`:`${s} dtk`};
const histOf=k=>SAVE.att.filter(x=>x.k===k);
function histTable(list,showSubj){if(!list.length)return '<p class="na">Belum ada riwayat latihan.</p>';return `<div class="tblwrap"><table class="hist2"><thead><tr><th>Tanggal & jam</th>${showSubj?'<th>Mapel</th>':''}<th>Soal</th><th>Nilai</th><th>Predikat</th><th>Waktu</th><th>Per soal</th></tr></thead><tbody>${list.slice().reverse().map(x=>{const p=PRED(x.score);return `<tr><td>${fmtT(x.t)}</td>${showSubj?`<td><b style="color:${SUBJ[x.k].c}">${SUBJ[x.k].name}</b></td>`:''}<td class="num">${x.n}</td><td class="num"><b>${x.score}%</b></td><td><span class="chip" style="--p:${p[2]}">${p[0]}</span></td><td class="num">${fmtDur(x.dur)}</td><td class="num">${x.dur!=null?fmtDur(x.dur/x.n):'–'}</td></tr>`}).join('')}</tbody></table></div>`}
function trend(list,c){const L=list.slice(-10);if(!L.length)return '';return `<div class="trend" role="img" aria-label="Grafik nilai ${L.length} latihan terakhir">${L.map((x,i)=>`<div class="tb"><span class="tv">${x.score}</span><i style="height:${Math.max(4,x.score)}%;background:${c}"></i><small>${i+1}</small></div>`).join('')}</div>`}
const qText=q=>String(q.q||'').replace(/<[^>]+>/g,'');
function result(){const s=SUBJ[Q.k],n=Q.list.length,res=Q.res||[],pts=res.reduce((x,v)=>x+(v||0),0),score=Math.round(pts/n*100),first=res.filter(v=>v===1).length,second=res.filter(v=>v===.5).length,wrong=[...Array(n).keys()].filter(i=>!res[i]);
  const prevA=histOf(Q.k).slice(-1)[0],dur=Date.now()-(Q.t0||Date.now());SAVE.best[Q.k]=Math.max(SAVE.best[Q.k]||0,score);SAVE.att.push({k:Q.k,name:SAVE.name,score,n,first,second,wrong,t:Date.now(),dur});if(SAVE.att.length>200)SAVE.att=SAVE.att.slice(-200);persist();
  const p=PRED(score),nm=esc(SAVE.name||'kamu');
  app.innerHTML=`<div class="qbar"><button class="back" data-home="1">‹ Rencana</button><b style="color:${s.c}">${s.name}</b></div><section class="qcard res" style="--c:${s.c}">
   <span class="eyebrow">Nilai latihan · ${nm}</span><div class="scorewrap"><span class="big">${score}<small>%</small></span><span class="pred" style="--p:${p[2]}"><b>${p[0]}</b>${p[1]}</span></div>
   <h2>${score>=90?`Luar biasa, ${nm}! Siap ASAS!`:score>=75?`Bagus, ${nm}!`:score>=60?`Cukup, ${nm}. Ulangi sekali lagi, ya.`:`Ayo belajar lagi, ${nm}. Kamu pasti bisa!`}</h2>
   <div class="tally"><span class="t1"><b>${first}</b>benar langsung</span><span class="t2"><b>${second}</b>benar setelah mencoba</span><span class="t3"><b>${wrong.length}</b>belum tepat</span></div>
   <div class="tally"><span><b>${fmtDur(dur)}</b>waktu mengerjakan</span><span><b>${fmtDur(dur/n)}</b>rata-rata per soal</span>${prevA?`<span class="${score>prevA.score?'t1':score<prevA.score?'t3':''}"><b>${score>prevA.score?'▲ +'+(score-prevA.score):score<prevA.score?'▼ '+(score-prevA.score):'='}</b>dibanding latihan lalu (${prevA.score}%)</span>`:''}</div>
   <p class="rule">Cara menilai: benar langsung = 1 poin, benar di percobaan kedua = ½ poin. Nilai = poin ÷ ${n} × 100.</p>
   ${wrong.length?`<div class="wrongs"><h3>Soal yang perlu diulang</h3><ol>${wrong.map(i=>{const q=Q.list[i];return `<li>${esc(qText(q))}${q.a?` <span>Jawaban: <b>${esc(q.a.length<3&&q.pat?(CNAME[q.a]||SHN[q.a]||q.a):q.a)}</b></span>`:''}</li>`}).join('')}</ol></div>`:''}
   <div class="histbox"><h3>Riwayat latihan ${s.name}</h3>${trend(histOf(Q.k),s.c)}${histTable(histOf(Q.k).slice(-10),false)}</div>
   <div class="act"><button class="btn" data-quiz="${Q.k}">Ulangi</button><button class="btn alt" data-rapor="1">Lihat semua nilai</button><button class="btn alt" data-home="1">Rencana</button></div></section>`;if(score>=60){confetti();sfx.ok()}}

/* ===== rapor ===== */
function renderRapor(){Q=null;const nm=SAVE.name||'Murid',rows=Object.entries(SUBJ).map(([k,s])=>{const at=SAVE.att.filter(x=>x.k===k);return {k,s,at,last:at[at.length-1],best:at.length?Math.max(...at.map(x=>x.score)):null}});
  const done=rows.filter(r=>r.last),avg=done.length?Math.round(done.reduce((x,r)=>x+r.last.score,0)/done.length):null,pa=avg!=null?PRED(avg):null;
  const weak=done.filter(r=>r.last.score<75).map(r=>r.s.name);
  app.innerHTML=`<div class="qbar"><button class="back" data-home="1">‹ Rencana</button><b>Rapor latihan</b></div>
  <section class="rapor"><div class="rhead"><div><span class="eyebrow">Kelas 2C · Persiapan ASAS · 23–27 Nov 2026</span><h1>${esc(nm)}</h1><p>${done.length} dari ${rows.length} mata pelajaran sudah dilatih · ${SAVE.att.length} kali latihan</p></div>
   ${avg!=null?`<div class="avg" style="--p:${pa[2]}"><span>Rata-rata</span><b>${avg}</b><em>${pa[0]} · ${pa[1]}</em></div>`:`<div class="avg"><span>Rata-rata</span><b>–</b><em>Belum ada latihan</em></div>`}</div>
   ${weak.length?`<p class="advice">Perlu diulang: <b>${weak.join(', ')}</b> (nilai di bawah 75).</p>`:done.length?`<p class="advice good">Semua nilai terakhir 75 ke atas. Pertahankan!</p>`:''}
   <div class="tblwrap"><table><thead><tr><th>Mata pelajaran</th><th>Nilai terakhir</th><th>Terbaik</th><th>Predikat</th><th>Latihan</th><th>Terakhir</th></tr></thead><tbody>
   ${rows.map(r=>{const p=r.last?PRED(r.last.score):null;return `<tr><td><b style="color:${r.s.c}">${r.s.name}</b></td><td>${r.last?`<div class="mini"><i style="width:${r.last.score}%;background:${r.s.c}"></i></div><b class="num">${r.last.score}</b>`:'<span class="na">belum</span>'}</td><td class="num">${r.best??'–'}</td><td>${p?`<span class="chip" style="--p:${p[2]}">${p[0]} · ${p[1]}</span>`:'–'}</td><td class="num">${r.at.length}×${r.at.length>1?`<span class="spark">${r.at.slice(-6).map(x=>`<i style="height:${Math.max(3,x.score/100*18)}px;background:${r.s.c}"></i>`).join('')}</span>`:''}</td><td class="na">${r.last?fmtT(r.last.t):'–'}</td><td><button class="go" data-quiz="${r.k}">Latihan</button></td></tr>`}).join('')}
   </tbody></table></div>
   <h3>Riwayat semua latihan</h3>${histTable(SAVE.att.slice(-60),true)}
   <p class="rule">Predikat: A ≥ 90 Sangat baik · B 75–89 Baik · C 60–74 Cukup · D &lt; 60 Perlu bimbingan. Nilai tersimpan di perangkat ini saja.</p>
   <div class="act">${SAVE.confirmReset?`<span class="na">Hapus semua nilai ${esc(nm)}?</span><button class="btn danger" data-reset="yes">Ya, hapus</button><button class="btn alt" data-reset="no">Batal</button>`:`<button class="btn alt" data-reset="ask">Hapus semua nilai</button>`}</div></section>`}


/* ===== Soal memilah: drag & drop + ketuk ===== */
const ITM={
 'kulit pisang':`<path d="M0 -14 C-4 -6 -14 0 -16 10 C-10 6 -5 4 -2 6 C-4 10 -6 14 -4 17 C0 12 2 10 4 6 C8 6 12 10 16 12 C14 2 6 -6 0 -14Z" fill="#F5C518" stroke="#B88400" stroke-width="1.5"/><path d="M-1 -14 l2 -5" stroke="#6B4220" stroke-width="3" stroke-linecap="round"/><circle cx="-12" cy="8" r="1.4" fill="#6B4220"/><circle cx="12" cy="9" r="1.4" fill="#6B4220"/>`,
 'botol plastik':`<rect x="-4" y="-19" width="8" height="5" rx="1.5" fill="#3D7BE0"/><path d="M-4 -14 h8 q8 4 8 12 v16 q0 4 -4 4 h-16 q-4 0 -4 -4 v-16 q0 -8 8 -12z" fill="#CFEFFF" stroke="#4E9AC6" stroke-width="1.6"/><rect x="-11" y="0" width="22" height="8" fill="#7FC8F2"/><path d="M-6 -6 v20" stroke="#fff" stroke-width="2" opacity=".8"/>`,
 'daun kering':`<path d="M-15 13 Q-15 -11 13 -15 Q12 11 -15 13Z" fill="#C98A4B" stroke="#7A4A22" stroke-width="1.5"/><path d="M-15 13 L9 -11 M-6 4 l-1 -7 M0 -2 l6 1 M-10 9 l7 1" stroke="#7A4A22" stroke-width="1.4" fill="none"/>`,
 'kaleng minuman':`<path d="M-10 -14 h20 v28 h-20z" fill="#E5484D"/><ellipse cy="-14" rx="10" ry="3.4" fill="#C9CED6" stroke="#8C949E"/><ellipse cy="14" rx="10" ry="3.4" fill="#A8282D"/><path d="M-10 -4 h20 v8 h-20z" fill="#fff" opacity=".85"/><path d="M-6 -6 v18" stroke="#fff" stroke-width="2" opacity=".4"/>`,
 'sisa nasi':`<ellipse cy="10" rx="17" ry="5" fill="#E8ECF0" stroke="#9AA3AC" stroke-width="1.4"/><path d="M-10 9 Q-8 -2 0 -3 Q8 -2 10 9Z" fill="#FFFDF5" stroke="#CFC6B0" stroke-width="1.2"/>${[[-5,4,20],[1,1,-30],[5,5,10],[-1,6,40],[3,-1,0]].map(([x,y,r])=>`<ellipse cx="${x}" cy="${y}" rx="2.2" ry="1.1" fill="#fff" stroke="#CFC6B0" stroke-width=".5" transform="rotate(${r} ${x} ${y})"/>`).join('')}`,
 'sedotan plastik':`<g transform="rotate(35)"><rect x="-3" y="-18" width="6" height="36" rx="3" fill="#fff" stroke="#E5484D" stroke-width="1.2"/>${[-14,-8,-2,4,10].map(y=>`<path d="M-3 ${y} l6 3" stroke="#E5484D" stroke-width="2.2"/>`).join('')}<path d="M-3 -10 q3 -4 6 0" stroke="#E5484D" stroke-width="1.2" fill="none"/></g>`,
 'kulit jeruk':`<path d="M-14 6 Q-16 -10 0 -12 Q6 -12 8 -8 Q-2 -8 -6 0 Q-8 6 -14 6Z" fill="#F58A1F" stroke="#C8650A" stroke-width="1.3"/><path d="M2 14 Q14 14 15 0 Q15 -4 12 -6 Q12 4 6 8 Q2 10 2 14Z" fill="#F58A1F" stroke="#C8650A" stroke-width="1.3"/><path d="M-10 2 Q-10 -6 -2 -8 M6 10 Q12 8 12 0" stroke="#FFD9A8" stroke-width="2" fill="none"/>`,
 'bungkus permen':`<path d="M-8 -6 L-17 -12 L-15 0 L-17 11 L-8 6Z M8 -6 L17 -12 L15 0 L17 11 L8 6Z" fill="#8E5BD8" stroke="#5B3FA0" stroke-width="1.2"/><path d="M-8 -7 Q0 -11 8 -7 L9 6 Q0 10 -9 6Z" fill="#B48CF0" stroke="#5B3FA0" stroke-width="1.2"/><path d="M-4 -6 l3 10 M2 -7 l3 10" stroke="#fff" stroke-width="1.6" opacity=".8"/>`,
};
const icon=(w,s=34)=>ITM[w]?`<svg viewBox="-20 -20 40 40" width="${s}" height="${s}" aria-hidden="true">${ITM[w]}</svg>`:'';
const CAN={org:['#3FA34D','#2E7D32','#7BC67E'],an:['#F5C518','#B88400','#FFE27A']};
function canSVG(id){const [c,d,l]=CAN[id];return `<svg viewBox="0 0 100 92" class="can" aria-hidden="true"><g class="lid"><rect x="12" y="6" width="76" height="12" rx="5" fill="${d}"/><rect x="40" y="0" width="20" height="9" rx="4" fill="${d}"/></g><path d="M18 20 h64 l-7 70 h-50z" fill="${c}"/><path d="M30 30 v50 M50 30 v50 M70 30 v50" stroke="${l}" stroke-width="4" stroke-linecap="round" opacity=".7"/>${id==='org'?`<path d="M50 44 q-14 -2 -14 12 q14 2 14 -12z M50 44 q14 -2 14 12 q-14 2 -14 -12z" fill="#fff" opacity=".85"/>`:`<path d="M44 42 l12 0 l-6 -9z M38 62 l6 -10 l6 10z M56 62 l6 -10 l6 10z" fill="#fff" opacity=".85"/>`}</svg>`}
function sortHTML(q){Q.P=Q.P||{};const tok=w=>`<button class="tok ${Q.sel===w?'sel':''} ${Q.m&&w in Q.m?(Q.m[w]?'okk':'badd'):''} ${ITM[w]?'ic':''}" data-tok="${w}">${icon(w)}<span>${w}</span></button>`;
  return `<div class="bins" style="grid-template-columns:repeat(${q.sort.bins.length},minmax(0,1fr))">${q.sort.bins.map(([id,l,sub])=>`<div class="bin ${CAN[id]?'hascan':''} ${Q.sel?'ready':''}" data-bin="${id}" role="button" tabindex="0" aria-label="Kotak ${l}">${CAN[id]?canSVG(id):''}<b>${l}</b><small>${sub}</small><span class="in">${q.sort.items.filter(([w])=>Q.P[w]===id).map(([w])=>tok(w)).join('')}</span></div>`).join('')}</div>
  <p class="dhint">Seret ke kotak, atau ketuk lalu ketuk kotaknya</p>
  <div class="tray" data-bin="tray">${q.sort.items.filter(([w])=>!Q.P[w]).map(([w])=>tok(w)).join('')||'<span class="hint">Semua sudah dikelompokkan</span>'}</div>
  ${Q.done?'':`<div class="act"><button class="btn alt" id="sreset">Ulang</button><button class="btn ${Object.keys(Q.P).length===q.sort.items.length?'ready':''}" id="scheck" ${Object.keys(Q.P).length===q.sort.items.length?'':'disabled'}>Periksa ✓</button></div>`}`}
function placeTok(w,bin){if(!Q||Q.done)return;if(bin==='tray')delete Q.P[w];else Q.P[w]=bin;Q.sel=null;Q.m=null;tone(660,.08,.1);redrawSort();
  if(bin!=='tray'){const b=document.querySelector(`.bin[data-bin="${bin}"]`);if(b){b.classList.remove('gulp');b.getBoundingClientRect();b.classList.add('gulp')}}}
function redrawSort(){const q=Q.list[Q.i];const c=document.querySelector('.qcard');c.querySelectorAll('.bins,.tray,.act,.dhint').forEach(e=>e.remove());c.querySelector('#msg').insertAdjacentHTML('beforebegin',sortHTML(q));
  const ch=document.getElementById('scheck');if(ch)ch.onclick=()=>{const m={};let ok=true;q.sort.items.forEach(([w,b])=>{m[w]=Q.P[w]===b;if(!m[w])ok=false});Q.m=m;
    if(ok){Q.done=true;if(Q.tries===0)Q.ok++;sfx.ok();redrawSort();burst(document.querySelector('.bins'));fb(true)}else{Q.tries++;sfx.bad();if(Q.tries>=2){Q.done=true;q.sort.items.forEach(([w,b])=>Q.P[w]=b);Q.m=Object.fromEntries(q.sort.items.map(([w])=>[w,true]));redrawSort();fb(false)}else{redrawSort();document.getElementById('msg').textContent='Yang merah belum tepat. Coba lagi!';setTimeout(()=>{if(Q.done)return;Object.keys(m).forEach(w=>{if(!m[w])delete Q.P[w]});Q.m=null;redrawSort()},1200)}}};
  const rs=document.getElementById('sreset');if(rs)rs.onclick=()=>{Q.P={};Q.m=null;Q.sel=null;redrawSort()}}
/* seret */
let DR=null,SUPPRESS=false;
document.addEventListener('pointerdown',e=>{const t=e.target.closest('.tok');if(!t||!Q||Q.done)return;e.preventDefault();DR={w:t.dataset.tok,x:e.clientX,y:e.clientY,el:t,moved:false,th:e.pointerType==='mouse'?6:14};try{t.setPointerCapture(e.pointerId)}catch(_){}});
window.addEventListener('pointermove',e=>{if(!DR)return;if(!DR.moved&&Math.hypot(e.clientX-DR.x,e.clientY-DR.y)>DR.th){DR.moved=true;const r=DR.el.getBoundingClientRect();DR.g=DR.el.cloneNode(true);DR.g.classList.add('ghost');DR.g.style.width=r.width+'px';DR.ox=DR.x-r.left;DR.oy=DR.y-r.top;document.body.appendChild(DR.g);DR.el.classList.add('lift')}
  if(DR.moved){DR.g.style.transform=`translate(${e.clientX-DR.ox}px,${e.clientY-DR.oy}px) rotate(-4deg) scale(1.08)`;DR.g.style.display='none';const el=document.elementFromPoint(e.clientX,e.clientY);DR.g.style.display='';document.querySelectorAll('.bin.hov').forEach(b=>b.classList.remove('hov'));const b=el&&el.closest('.bin');if(b)b.classList.add('hov')}});
window.addEventListener('pointerup',e=>{if(!DR)return;const d=DR;DR=null;if(!d.moved)return;SUPPRESS=true;setTimeout(()=>SUPPRESS=false,50);d.g.style.display='none';const el=document.elementFromPoint(e.clientX,e.clientY);d.g.remove();const b=el&&el.closest('[data-bin]'),cur=Q.P[d.w]||'tray',dist=Math.hypot(e.clientX-d.x,e.clientY-d.y);if((!b||b.dataset.bin===cur)&&dist<45){Q.sel=Q.sel===d.w?null:d.w;redrawSort()}else if(b)placeTok(d.w,b.dataset.bin);else redrawSort()});
window.addEventListener('pointercancel',()=>{if(DR){DR.g&&DR.g.remove();DR=null;redrawSort()}});
/* animasi bintang */
function burst(el){if(!el||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
  for(let i=0;i<14;i++){const s=document.createElement('span');s.className='spark';const a=i/14*Math.PI*2,d=60+Math.random()*50;s.style.left=cx+'px';s.style.top=cy+'px';s.style.setProperty('--dx',Math.cos(a)*d+'px');s.style.setProperty('--dy',Math.sin(a)*d+'px');s.style.background=['#FFC93C','#3FA34D','#E5484D','#3D7BE0','#8E5BD8'][i%5];document.body.appendChild(s);setTimeout(()=>s.remove(),900)}}
function confetti(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const c=document.createElement('canvas');c.className='confetti';c.width=innerWidth;c.height=innerHeight;document.body.appendChild(c);const x=c.getContext('2d');
  const P=[...Array(120)].map(()=>({x:innerWidth/2+(Math.random()-.5)*160,y:innerHeight*.3,vx:(Math.random()-.5)*12,vy:-Math.random()*11-4,r:Math.random()*6+4,c:['#FFC93C','#3FA34D','#E5484D','#3D7BE0','#8E5BD8'][Math.random()*5|0],a:Math.random()*6}));let f=0;
  (function tick(){x.clearRect(0,0,c.width,c.height);P.forEach(p=>{p.vy+=.33;p.x+=p.vx;p.y+=p.vy;p.a+=.2;x.save();x.translate(p.x,p.y);x.rotate(p.a);x.fillStyle=p.c;x.fillRect(-p.r/2,-p.r/4,p.r,p.r/2);x.restore()});if(++f<140)requestAnimationFrame(tick);else c.remove()})()}

/* Conversation: speaking */
const SP={heard:'',live:'',active:false,partial(t){this.live=t;updHeard()},final(t){this.heard+=t;this.live='';updHeard()},
  state(e){this.active=e.state!=='idle';const b=document.getElementById('mic');if(b){b.classList.toggle('on',this.active);b.querySelector('span').textContent=this.active?'Mendengarkan… ketuk untuk berhenti':'Ketuk lalu bicara'}if(e.state==='idle'&&this.heard.trim())judge();if(e.state==='idle'&&(e.reason==='not_granted'||e.reason==='unavailable')){Q.noMic=true;renderQ()}}};
const norm=s=>s.toLowerCase().replace(/[’']/g,'').replace(/[^a-z\s]/g,' ').split(/\s+/).filter(Boolean);
function lev(a,b){const d=[...Array(b.length+1)].map((_,i)=>[i]);for(let j=1;j<=a.length;j++)d[0][j]=j;for(let i=1;i<=b.length;i++)for(let j=1;j<=a.length;j++)d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(b[i-1]===a[j-1]?0:1));return d[b.length][a.length]}
function score(t,h){const T=norm(t),H=norm(h),used=new Set();return T.map(w=>{const k=H.findIndex((x,i)=>!used.has(i)&&(x===w||(w.length>=4&&lev(w,x)<=1)||(w==='wuzzy'&&/^(wuzz|wuss|woozy|wusy|was|whoozy)/.test(x))||(w==='fuzzy'&&/^(fuzz|fuss|fussy|fozzy)/.test(x))));if(k>=0){used.add(k);return true}return false})}
function speakHTML(q){const words=q.speak.split(/\s+/);return `<div class="target">${words.map(w=>`<span class="tw">${w}</span>`).join(' ')}</div>
  <div class="lis"><button class="spk" data-say="${esc(q.speak)}" data-lang="en">🔊 Dengar</button><button class="spk" data-say="${esc(q.speak)}" data-lang="en" data-slow="1">🐢 Pelan</button></div>
  ${DICT&&!Q.noMic?`<button class="micbtn" id="mic">🎤<span>Ketuk lalu bicara</span></button><p class="heard" id="heard"></p>`:`<div class="self"><p>Ucapkan kalimat di atas 3 kali dengan jelas. Mikrofon bisa dipakai di Chrome/Edge laptop.</p><button class="btn" id="said">Sudah lancar ✓</button></div>`}`}
function updHeard(){const h=document.getElementById('heard');if(!h)return;const txt=(SP.heard+' '+SP.live).trim();h.textContent=txt?'Terdengar: “'+txt+'”':'';const sc=score(Q.list[Q.i].speak,txt);document.querySelectorAll('.tw').forEach((e,i)=>e.classList.toggle('hit',!!sc[i]))}
function judge(){const q=Q.list[Q.i],sc=score(q.speak,SP.heard),r=sc.filter(Boolean).length/sc.length;document.querySelectorAll('.tw').forEach((e,i)=>{e.classList.toggle('hit',sc[i]);e.classList.toggle('miss',!sc[i])});
  if(r>=.8){if(Q.tries===0)Q.ok++;Q.done=true;sfx.ok();fb(true,`Terdengar ${Math.round(r*100)}% kata dengan jelas.`)}else{Q.tries++;sfx.bad();document.getElementById('msg').innerHTML=`Terdengar ${Math.round(r*100)}%. Kata merah belum jelas. Dengar lagi, lalu coba lagi.`;if(Q.tries>=3){Q.done=true;fb(false,'Latih lagi pelan-pelan bersama Mama/Papa.')}}}

/* Komputer: latihan mengetik */
function typeHTML(q){return `<div class="kb">${['ASDF','JKL;'].map((g,gi)=>`<div class="hand">${g.split('').map((ch,i)=>`<span class="key ${(gi===0&&i===3)||(gi===1&&i===0)?'bump':''}">${ch}<small>${['kelingking','manis','tengah','telunjuk'][gi===0?i:3-i]}</small></span>`).join('')}</div>`).join('')}</div>
  <p class="tline">Ketik: <b id="tt"></b></p><input id="tin" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Ketik di sini" placeholder="ketik di sini"><p class="hint" id="tstat"></p>`}
function initType(q){let i=0,err=0;const tt=document.getElementById('tt'),inp=document.getElementById('tin'),st=document.getElementById('tstat');
  const show=()=>{tt.textContent=q.type[i];st.textContent=`Baris ${i+1} dari ${q.type.length}`;inp.value=''};show();
  inp.oninput=()=>{const tgt=q.type[i],v=inp.value;inp.classList.toggle('wrong',!tgt.startsWith(v));if(!tgt.startsWith(v)&&v.length)err++;
    if(v===tgt){sfx.ok();i++;if(i<q.type.length)show();else{Q.done=true;if(err<=3)Q.ok++;inp.disabled=true;fb(err<=3,`Selesai! Salah ketik: ${err} kali. Ingat: mata melihat layar, bukan keyboard.`)}}}}

/* ===== events ===== */
document.addEventListener('click',e=>{const t=e.target;
  const rp=t.closest('[data-rapor]');if(rp){if(Q)clearTimeout(Q.autoT);try{DICT&&SP.active&&DICT.stop()}catch(_){}SAVE.confirmReset=false;renderRapor();scrollTo({top:0});return}
  const rs=t.closest('[data-reset]');if(rs){const v=rs.dataset.reset;if(v==='ask')SAVE.confirmReset=true;else{SAVE.confirmReset=false;if(v==='yes'){SAVE.att=[];SAVE.best={}}persist()}renderRapor();return}
  const dy=t.closest('[data-day]');if(dy){V.day=dy.dataset.day;SAVE.day=V.day;persist();render();return}
  const qz=t.closest('[data-quiz]');if(qz){if(Q)clearTimeout(Q.autoT);openQuiz(qz.dataset.quiz);return}
  const st=t.closest('[data-start]');if(st){const [k,n]=st.dataset.start.split(':');startQuiz(k,+n);return}
  const hm=t.closest('[data-home]');if(hm){if(Q)clearTimeout(Q.autoT);try{DICT&&SP.active&&DICT.stop()}catch(_){}Q=null;render();scrollTo({top:0});return}
  const sp=t.closest('[data-say]');if(sp){speak(sp.dataset.say,sp.dataset.lang||'en',sp.dataset.slow?.6:.9);return}
  const pk=t.closest('[data-pick]');if(pk){pick(pk);return}
  if(SUPPRESS)return;const tk=t.closest('[data-tok]');if(tk&&Q&&!Q.done){const w=tk.dataset.tok,inBin=tk.closest('.bin');if(Q.sel&&Q.sel!==w&&inBin){placeTok(Q.sel,inBin.dataset.bin);return}Q.sel=Q.sel===w?null:w;redrawSort();return}
  const bn=t.closest('[data-bin]');if(bn&&Q&&!Q.done){if(Q.sel)placeTok(Q.sel,bn.dataset.bin);return}
  if(t.closest('#mic')){if(SP.active){DICT.stop().catch(()=>{});return}SP.heard='';SP.live='';updHeard();DICT.start({language:'en'}).catch(err=>{const c=err&&err.code;if(c==='not_granted'||c==='unavailable'){Q.noMic=true;renderQ()}else if(c==='dismissed')document.getElementById('msg').textContent='Ketuk mikrofon lagi dan pilih Izinkan.'});return}
  if(t.closest('#said')){Q.done=true;if(Q.tries===0)Q.ok++;fb(true,'Bagus! Terus latihan sampai lancar tanpa melihat teks.');return}});
document.addEventListener('input',e=>{if(e.target.id==='nama'){SAVE.name=e.target.value.trim();persist();document.querySelectorAll('.nm').forEach(x=>x.textContent=SAVE.name||'Murid')}});
document.addEventListener('change',e=>{const k=e.target.dataset&&e.target.dataset.task;if(k){SAVE.done[k]=e.target.checked;persist();render()}});
/* ===== Penambah soal sampai 50 per mata pelajaran (dibuat dari daftar kata yang sudah dicek) ===== */
(function(){
let seed=11;const rnd=()=>{seed=(seed*9301+49297)%233280;return seed/233280};
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const pickN=(arr,n,not)=>shuf(arr.filter(x=>!not.includes(x))).slice(0,n);
const opts=(ans,pool,n=3)=>shuf([ans,...pickN(pool,n-1,[ans])]);
const seen=k=>new Set(QS[k].map(q=>q.q+'|'+(q.a||'')+'|'+(q.say||'')+'|'+(q.zh||'')+'|'+(q.speak||'')));
const push=(k,q)=>{const s=seen(k),key=q.q+'|'+(q.a||'')+'|'+(q.say||'')+'|'+(q.zh||'')+'|'+(q.speak||'');if(QS[k].length<50&&!s.has(key))QS[k].push(q)};

/* --- Matematika: pola & posisi pada barisan --- */
const SHK=['c','t','s','st','m'],COLK=['R','Y','B','G'];
const rules=[[0,1],[0,0,1],[0,1,1],[0,1,2],[0,0,1,1]];
for(let r=0;r<200&&QS.math.length<50;r++){const rule=rules[r%rules.length],isCol=r%2===1,pool=isCol?COLK:SHK,base=shuf(pool).slice(0,3);
  const len=rule.length*2+(r%3===0?1:0),seq=[...Array(len)].map((_,i)=>base[rule[i%rule.length]]),ans=base[rule[len%rule.length]];
  const o=shuf([ans,...base.filter(x=>x!==ans).slice(0,2)]);
  push('math',{pat:[...seq,'?'],q:isCol?'Pola Warna: warna apa selanjutnya?':'Pola Benda: bentuk apa selanjutnya?',o,a:ans,n:`Lihat bagian yang berulang: ${rule.map(i=>isCol?CNAME[base[i]]:SHN[base[i]]).join(', ')}. Jadi berikutnya <b>${isCol?CNAME[ans]:SHN[ans]}</b>.`});
  if(r%2===0&&QS.math.length<50){const row=shuf(SHK).slice(0,4),t=r%4;
    if(t===0){const i=1+Math.floor(rnd()*4);push('math',{row,q:`Bentuk apa yang ada di urutan ke-${i} dari kiri?`,o:opts(SHN[row[i-1]],row.map(k=>SHN[k])),a:SHN[row[i-1]],n:`Hitung dari kiri: ${row.map((k,j)=>`${SHN[k]} (${j+1})`).join(', ')}.`})}
    else{const i=1+Math.floor(rnd()*2);push('math',{row,q:`Bentuk apa yang ada di antara ${SHN[row[i-1]]} dan ${SHN[row[i+1]]}?`,o:opts(SHN[row[i]],row.map(k=>SHN[k])),a:SHN[row[i]],n:`Di antara ${SHN[row[i-1]]} dan ${SHN[row[i+1]]} ada <b>${SHN[row[i]]}</b>.`})}}
}
/* --- B. Inggris & Listening --- */
const VOC={kelas:[['book','buku'],['pencil','pensil'],['eraser','penghapus'],['ruler','penggaris'],['bag','tas'],['chair','kursi'],['table','meja'],['door','pintu'],['window','jendela'],['board','papan tulis'],['crayon','krayon'],['scissors','gunting']],
 keluarga:[['father','ayah'],['mother','ibu'],['brother','saudara laki-laki'],['sister','saudara perempuan'],['grandfather','kakek'],['grandmother','nenek'],['baby','bayi']],
 warna:[['red','merah'],['blue','biru'],['yellow','kuning'],['green','hijau'],['black','hitam'],['white','putih'],['orange','oranye'],['purple','ungu'],['pink','merah muda'],['brown','cokelat']],
 perasaan:[['happy','senang'],['sad','sedih'],['angry','marah'],['tired','lelah'],['hungry','lapar'],['sleepy','mengantuk'],['scared','takut']],
 hewan:[['cat','kucing'],['dog','anjing'],['bird','burung'],['fish','ikan'],['rabbit','kelinci'],['duck','bebek'],['cow','sapi'],['chicken','ayam']]};
const NUM=[['eleven',11],['twelve',12],['thirteen',13],['fourteen',14],['fifteen',15],['sixteen',16],['seventeen',17],['eighteen',18],['nineteen',19],['twenty',20]];
const cats=Object.values(VOC);let ci=0;
for(let r=0;r<120&&QS.eng.length<50;r++){const cat=cats[ci++%cats.length],[en,id]=cat[Math.floor(rnd()*cat.length)];
  if(r%2===0)push('eng',{q:`"${en[0].toUpperCase()+en.slice(1)}" artinya …`,o:opts(id,cat.map(x=>x[1])),a:id,n:`<b>${en}</b> = ${id}.`});
  else push('eng',{q:`Bahasa Inggris dari "${id}" adalah …`,o:opts(en,cat.map(x=>x[0])),a:en,n:`${id} = <b>${en}</b>.`})}
for(let r=0;r<200&&QS.listen.length<50;r++){if(r%3===0){const [w,n]=NUM[Math.floor(rnd()*NUM.length)],ty=n>=13?`${n%10}0`:null;
    const o=shuf([String(n),...(ty&&n<20?[ty,String(n%10)]:[String(n+1),String(n%10||2)])].filter((x,i,a)=>a.indexOf(x)===i)).slice(0,3);if(!o.includes(String(n)))o[0]=String(n);
    push('listen',{say:w,q:'Dengarkan. Angka berapa?',o:shuf(o),a:String(n),n:`<b>${w}</b> = ${n}.`})}
  else{const cat=cats[ci++%cats.length],[en,id]=cat[Math.floor(rnd()*cat.length)];push('listen',{say:en,q:'Dengarkan. Kata apa yang kamu dengar?',o:opts(en,cat.map(x=>x[0])),a:en,n:`Kata yang dibacakan: <b>${en}</b> (${id}).`})}}
/* --- Conversation: percakapan sehari-hari --- */
const CONV=[['Good morning, teacher.','Selamat pagi, Bu/Pak Guru.'],['How are you?','Apa kabar?'],['I am fine, thank you.','Aku baik, terima kasih.'],['What is your name?','Siapa namamu?'],['My name is Hector.','Namaku Hector.'],['How old are you?','Berapa umurmu?'],['I am seven years old.','Umurku tujuh tahun.'],['Nice to meet you.','Senang bertemu denganmu.'],['Thank you very much.','Terima kasih banyak.'],['You are welcome.','Sama-sama.'],['May I go to the toilet?','Bolehkah saya ke toilet?'],['See you tomorrow.','Sampai jumpa besok.'],['I am sorry.','Maaf.'],['Excuse me.','Permisi.'],['Let\'s play together.','Ayo bermain bersama.']];
CONV.forEach(([en,id])=>push('conv',{speak:en,q:`Ucapkan: ${id}`,n:''}));
const REPLY=[['How are you?','I am fine, thank you.',['My name is Hector.','I am seven years old.']],['What is your name?','My name is Hector.',['I am fine, thank you.','See you tomorrow.']],['How old are you?','I am seven years old.',['My name is Hector.','You are welcome.']],['Thank you very much.','You are welcome.',['I am sorry.','How are you?']],['Good morning, teacher.','Good morning. How are you?',['Good night.','I am sorry.']],['Nice to meet you.','Nice to meet you, too.',['I am hungry.','Excuse me.']],['See you tomorrow.','See you!',['How old are you?','I am seven.']],['I am sorry.','That\'s okay.',['Thank you.','Good morning.']]];
REPLY.forEach(([ask,ans,wr])=>push('conv',{say:ask,q:`Temanmu bertanya: "${ask}" Jawaban yang tepat adalah …`,o:shuf([ans,...wr]),a:ans,n:`"${ask}" dijawab: <b>${ans}</b>`}));
CONV.forEach(([en,id])=>push('conv',{q:`"${en}" artinya …`,o:opts(id,CONV.map(x=>x[1])),a:id,n:`<b>${en}</b> = ${id}`}));
/* --- Mandarin --- */
const ZN=[['一','yī',1],['二','èr',2],['三','sān',3],['四','sì',4],['五','wǔ',5],['六','liù',6],['七','qī',7],['八','bā',8],['九','jiǔ',9],['十','shí',10]];
const ZW=[['你好','nǐ hǎo','halo'],['谢谢','xièxie','terima kasih'],['再见','zàijiàn','sampai jumpa'],['对不起','duìbuqǐ','maaf'],['没关系','méi guānxi','tidak apa-apa'],['老师','lǎoshī','guru'],['学生','xuésheng','murid'],['朋友','péngyou','teman'],['爸爸','bàba','ayah'],['妈妈','māma','ibu'],['哥哥','gēge','kakak laki-laki'],['姐姐','jiějie','kakak perempuan'],['弟弟','dìdi','adik laki-laki'],['妹妹','mèimei','adik perempuan'],['猫','māo','kucing'],['狗','gǒu','anjing'],['鱼','yú','ikan'],['鸟','niǎo','burung'],['大','dà','besar'],['小','xiǎo','kecil'],['吃','chī','makan'],['喝','hē','minum'],['水','shuǐ','air'],['米饭','mǐfàn','nasi'],['苹果','píngguǒ','apel'],['我','wǒ','saya'],['你','nǐ','kamu'],['他','tā','dia (laki-laki)'],['好','hǎo','baik'],['不','bù','tidak']];
for(let r=0;r<200&&QS.mand.length<50;r++){const t=r%3;
  if(t===0){const [z,p,m]=ZW[Math.floor(rnd()*ZW.length)];push('mand',{zh:z,say:z,q:`Apa arti ${z} (${p})?`,o:opts(m,ZW.map(x=>x[2])),a:m,n:`${z} <b>${p}</b> = ${m}.`})}
  else if(t===1){const [z,p,m]=ZW[Math.floor(rnd()*ZW.length)];push('mand',{zh:z,q:`Pinyin yang benar untuk ${z} (${m}) adalah …`,o:opts(p,ZW.map(x=>x[1])),a:p,n:`${z} dibaca <b>${p}</b>.`})}
  else{const [z,p,n]=ZN[Math.floor(rnd()*ZN.length)];if(r%2)push('mand',{zh:z,say:z,q:`Angka berapa ${z} (${p})?`,o:opts(String(n),ZN.map(x=>String(x[2]))),a:String(n),n:`${z} <b>${p}</b> = ${n}.`});else push('mand',{q:`Huruf Mandarin untuk angka ${n} adalah …`,o:opts(z,ZN.map(x=>x[0])),a:z,n:`Angka ${n} = <b>${z}</b> (${p}).`})}}
/* --- PKn --- */
const SILA5=[['bintang','Ketuhanan Yang Maha Esa','s1'],['rantai','Kemanusiaan yang adil dan beradab','s2'],['pohon beringin','Persatuan Indonesia','s3'],['kepala banteng','Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan','s4'],['padi dan kapas','Keadilan sosial bagi seluruh rakyat Indonesia','s5']];
SILA5.forEach(([sim,bunyi,img],i)=>{push('pkn',{img,q:'Simbol ini melambangkan sila …',o:opts(bunyi,SILA5.map(x=>x[1])),a:bunyi,n:`${sim[0].toUpperCase()+sim.slice(1)} = sila ke-${i+1}: <b>${bunyi}</b>.`});
  push('pkn',{q:`"${bunyi}" adalah bunyi sila ke …`,o:opts(String(i+1),['1','2','3','4','5']),a:String(i+1),n:`<b>Sila ke-${i+1}</b>: ${bunyi}.`});
  push('pkn',{q:`Simbol sila "${bunyi}" adalah …`,o:opts(sim,SILA5.map(x=>x[0])),a:sim,n:`Sila ke-${i+1} dilambangkan dengan <b>${sim}</b>.`})});
const PK=[['Sebelum makan, kita berdoa. Ini contoh sila ke …','1',['1','3','5'],'Berdoa = sila ke-1.'],['Mau beribadah, teman kita izin sebentar. Kita …','menghormatinya',['menghormatinya','mengejeknya','melarangnya'],'Menghormati teman beribadah = sila ke-1.'],['Memberi makanan kepada teman yang tidak membawa bekal adalah contoh sila ke …','2',['2','4','1'],'Peduli sesama = sila ke-2.'],['Ikut upacara bendera dengan tertib adalah contoh sila ke …','3',['3','5','2'],'Cinta tanah air = sila ke-3.'],['Menerima hasil keputusan bersama walau berbeda dengan pendapat kita adalah contoh sila ke …','4',['4','1','2'],'Menerima hasil musyawarah = sila ke-4.'],['Bergiliran memakai ayunan di taman adalah contoh sila ke …','5',['5','3','1'],'Bergiliran = adil, sila ke-5.'],['Contoh kewajiban anak di sekolah adalah …','mengerjakan tugas',['mengerjakan tugas','bermain sepanjang hari','pulang sebelum waktunya'],'Kewajiban murid: belajar dan mengerjakan tugas.'],['Contoh hak anak adalah …','mendapat pendidikan',['mendapat pendidikan','mencuci mobil','bekerja di pabrik'],'Setiap anak berhak mendapat pendidikan.'],['Lampu lalu lintas merah artinya …','berhenti',['berhenti','jalan terus','ngebut'],'Merah = berhenti. Itu aturan di jalan.'],['Saat guru menjelaskan, kita …','mendengarkan dengan tertib',['mendengarkan dengan tertib','mengobrol','tidur'],'Aturan di kelas: mendengarkan guru.'],['Akibat melanggar aturan adalah …','mendapat sanksi atau teguran',['mendapat sanksi atau teguran','mendapat hadiah','dipuji'],'Melanggar aturan mendapat sanksi atau teguran.'],['Warna bendera Indonesia adalah …','merah putih',['merah putih','merah biru','putih hijau'],'Bendera Merah Putih.'],['Lagu kebangsaan Indonesia adalah …','Indonesia Raya',['Indonesia Raya','Balonku','Pelangi-pelangi'],'Lagu kebangsaan: Indonesia Raya.'],['Kita tinggal di negara …','Indonesia',['Indonesia','Malaysia','Singapura'],'Negara kita Indonesia.'],['Teman berbeda suku dan agama. Kita tetap …','rukun dan bersahabat',['rukun dan bersahabat','bertengkar','menjauhinya'],'Bhinneka Tunggal Ika: berbeda tetapi tetap satu.'],['Membuang sampah pada tempatnya di sekolah adalah contoh …','mematuhi aturan',['mematuhi aturan','melanggar aturan','bermain'],'Itu contoh mematuhi aturan sekolah.']];
PK.forEach(([q,a,o,n])=>push('pkn',{q,o:shuf(o),a,n}));
/* --- B. Sunda (kosakata yang umum) --- */
const SD=[['hiji','satu'],['dua','dua'],['tilu','tiga'],['opat','empat'],['lima','lima'],['genep','enam'],['tujuh','tujuh'],['dalapan','delapan'],['salapan','sembilan'],['sapuluh','sepuluh'],['lumpat','lari'],['luncat','lompat'],['ngudag','mengejar'],['nyumput','bersembunyi'],['babarengan','bersama-sama'],['capé','lelah'],['bungah','senang'],['tangkal','pohon'],['budak','anak'],['imah','rumah'],['sakola','sekolah'],['cai','air'],['isuk','pagi'],['peuting','malam'],['beureum','merah'],['bodas','putih'],['hideung','hitam'],['koneng','kuning'],['héjo','hijau'],['bulao','biru']];
SD.forEach(([s,i],k)=>{if(k%2===0||QS.sunda.length<40)push('sunda',{q:`"${s}" dalam bahasa Indonesia artinya …`,o:opts(i,SD.map(x=>x[1])),a:i,n:`<b>${s}</b> = ${i}.`})});
SD.forEach(([s,i])=>push('sunda',{q:`Bahasa Sunda dari "${i}" adalah …`,o:opts(s,SD.map(x=>x[0])),a:s,n:`${i} = <b>${s}</b>.`}));
/* --- PLH --- */
const PL=[['Tisu bekas pakai dibuang ke …','tempat sampah',['tempat sampah','kolong meja','selokan']],['Kotak susu bekas sebaiknya …','dibuang ke tempat sampah anorganik',['dibuang ke tempat sampah anorganik','ditinggal di meja','dibuang ke sungai']],['Sampah plastik yang dibakar menghasilkan …','asap yang berbahaya',['asap yang berbahaya','udara segar','pupuk']],['Daun kering di halaman bisa dijadikan …','kompos',['kompos','plastik','kaca']],['Kaleng bekas bisa dipakai lagi menjadi …','tempat pensil',['tempat pensil','makanan','sampah sungai']],['Got yang penuh sampah membuat air …','tergenang dan bau',['tergenang dan bau','lebih jernih','harum']],['Nyamuk suka berkembang biak di …','genangan air',['genangan air','lemari baju','buku']],['Setelah buang air, kita …','menyiram toilet dan cuci tangan',['menyiram toilet dan cuci tangan','langsung pergi','bermain air']],['Membersihkan tempat tidur setiap pagi membuat kamar …','rapi',['rapi','berantakan','kotor']],['Sapu dipakai untuk …','menyapu lantai',['menyapu lantai','mencuci piring','menulis']],['Kain pel dipakai untuk …','mengepel lantai',['mengepel lantai','mengelap muka','menggambar']],['Menanam pohon membuat udara …','segar',['segar','panas sekali','berasap']],['Mandi sebaiknya … sehari.','2 kali',['2 kali','1 kali seminggu','tidak perlu']],['Rambut yang bersih dicuci memakai …','sampo',['sampo','sabun cuci piring','air sungai']],['Baju yang kotor sebaiknya …','dicuci',['dicuci','dipakai lagi','disimpan di lemari']],['Makanan yang jatuh ke lantai sebaiknya …','tidak dimakan',['tidak dimakan','langsung dimakan','dibagi ke teman']],['Tempat sampah sebaiknya …','ditutup',['ditutup','dibiarkan terbuka','diletakkan di kelas tanpa tutup']],['Air bekas cuci sayur bisa dipakai untuk …','menyiram tanaman',['menyiram tanaman','diminum','mandi']],['Lampu kelas yang tidak dipakai sebaiknya …','dimatikan',['dimatikan','dinyalakan terus','dipecahkan']],['Kegiatan Jumat bersih di sekolah adalah …','membersihkan sekolah bersama',['membersihkan sekolah bersama','libur','lomba makan']],['Sampah sisa makanan termasuk sampah …','organik',['organik','anorganik','kaca']],['Kantong kresek termasuk sampah …','anorganik',['anorganik','organik','daun']],['Ke pasar membawa tas belanja sendiri akan mengurangi …','sampah plastik',['sampah plastik','uang jajan','teman']],['Lingkungan yang kotor bisa menyebabkan penyakit …','diare',['diare','pintar','kuat']],['Menjaga kebersihan adalah tugas …','semua orang',['semua orang','petugas kebersihan saja','guru saja']],['Sebelum tidur, kita sebaiknya …','menggosok gigi',['menggosok gigi','makan permen','minum soda']],['Sepatu kotor sebaiknya dilepas …','sebelum masuk rumah',['sebelum masuk rumah','di atas kasur','di meja makan']],['Memisahkan sampah organik dan anorganik disebut …','memilah sampah',['memilah sampah','membakar sampah','menimbun sampah']],['Bank sampah adalah tempat …','menabung sampah yang bisa didaur ulang',['menabung sampah yang bisa didaur ulang','membuang sampah ke sungai','membeli makanan']]];
PL.forEach(([q,a,o])=>push('plh',{q,o:shuf(o),a,n:`Jawaban: <b>${a}</b>.`}));
/* --- B. Indonesia --- */
const SIN=[['cantik','indah'],['kecil','mungil'],['cepat','lekas'],['melihat','memandang'],['berbicara','berkata'],['ibu','bunda'],['ayah','bapak'],['sedih','duka'],['marah','murka'],['berlari','berlari kencang']].slice(0,9);
const ANT=[['siang','malam'],['atas','bawah'],['maju','mundur'],['buka','tutup'],['naik','turun'],['masuk','keluar'],['kanan','kiri'],['baru','lama'],['bersih','kotor'],['gelap','terang'],['berat','ringan'],['jauh','dekat'],['kuat','lemah'],['lapar','kenyang']];
ANT.forEach(([a,b])=>push('indo',{q:`Lawan kata "${a}" adalah …`,o:opts(b,ANT.map(x=>x[1])),a:b,n:`${a} >< <b>${b}</b>.`}));
SIN.forEach(([a,b])=>push('indo',{q:`Persamaan kata "${a}" adalah …`,o:opts(b,SIN.map(x=>x[1])),a:b,n:`${a} = <b>${b}</b>.`}));
const READ2='Hari Minggu, Hector dan Ayah pergi ke kebun binatang. Mereka melihat gajah dan jerapah. Jerapah itu sangat tinggi. Hector senang sekali.';
[['Kapan Hector pergi ke kebun binatang?','hari Minggu',['hari Minggu','hari Senin','hari Sabtu']],['Hector pergi bersama …','Ayah',['Ayah','Ibu','Kakak']],['Hewan apa yang sangat tinggi?','jerapah',['jerapah','gajah','kucing']],['Bagaimana perasaan Hector?','senang',['senang','sedih','takut']]].forEach(([q,a,o])=>push('indo',{read:READ2,q,o:shuf(o),a,n:`Lihat bacaan: <b>${a}</b>.`}));
const TB=[['Ayo, kita berangkat …','!'],['Di mana tasmu …','?'],['Kakak membaca buku …','.'],['Apakah kamu sudah makan …','?'],['Wah, indah sekali …','!'],['Hector suka bermain bola …','.']];
TB.forEach(([s,t])=>push('indo',{q:`Tanda baca yang tepat: "${s}"`,o:shuf(['.','?','!']),a:t,n:t==='?'?'Kalimat tanya memakai <b>?</b>':t==='!'?'Kalimat ajakan atau seruan memakai <b>!</b>':'Kalimat berita memakai <b>.</b>'}));
/* --- PJOK --- */
const GER=[['berjalan','lokomotor'],['berlari','lokomotor'],['melompat','lokomotor'],['meloncat','lokomotor'],['merangkak','lokomotor'],['berjalan jinjit','lokomotor'],['lompat katak','lokomotor'],['menekuk lutut','non-lokomotor'],['meliuk','non-lokomotor'],['mengayun lengan','non-lokomotor'],['memutar pinggang','non-lokomotor'],['membungkuk','non-lokomotor'],['menengok ke kanan','non-lokomotor'],['meregangkan tangan','non-lokomotor'],['melempar bola','manipulatif'],['menangkap bola','manipulatif'],['menendang bola','manipulatif'],['memantulkan bola','manipulatif'],['menggiring bola','manipulatif'],['memukul bola kasti','manipulatif']];
GER.forEach(([g,t])=>push('pjok',{q:`${g[0].toUpperCase()+g.slice(1)} termasuk gerak …`,o:shuf(['lokomotor','non-lokomotor','manipulatif']),a:t,n:t==='lokomotor'?'Berpindah tempat = <b>lokomotor</b>.':t==='non-lokomotor'?'Di tempat, tidak berpindah = <b>non-lokomotor</b>.':'Memainkan benda/bola = <b>manipulatif</b>.'}));
const PJ=[['Olahraga membuat tubuh …','sehat dan kuat',['sehat dan kuat','mudah sakit','lemas']],['Berguling ke depan dilakukan di atas …','matras',['matras','lantai batu','meja']],['Saat melempar bola ke teman, kita melihat ke …','teman yang dituju',['teman yang dituju','langit','sepatu']],['Saat menangkap bola, tangan dibuka dan mata melihat …','bola',['bola','tanah','penonton']],['Sebelum olahraga, sebaiknya kita tidak …','makan terlalu kenyang',['makan terlalu kenyang','berdoa','pemanasan']],['Bertumpu dengan kedua tangan di lantai melatih kekuatan …','lengan',['lengan','mata','telinga']],['Jika teman jatuh saat olahraga, kita …','menolongnya',['menolongnya','menertawakannya','meninggalkannya']],['Gerakan akhir setelah olahraga disebut …','pendinginan',['pendinginan','pemanasan','pertandingan']],['Sepatu yang tepat untuk olahraga adalah …','sepatu olahraga',['sepatu olahraga','sandal jepit','sepatu pesta']],['Merentangkan tangan sambil berdiri satu kaki adalah gerak …','keseimbangan',['keseimbangan','lari cepat','melempar']]];
PJ.push(['Saat berlari, kedua lengan diayun ke …','depan dan belakang',['depan dan belakang','atas terus','samping saja']],['Bermain bola bersama teman harus …','sportif',['sportif','curang','marah-marah']],['Olahraga sebaiknya dilakukan …','secara teratur',['secara teratur','sekali setahun','tidak pernah']],['Saat menendang bola, mata melihat ke …','bola',['bola','langit','belakang']],['Jika pusing saat olahraga, kita …','berhenti dan memberi tahu guru',['berhenti dan memberi tahu guru','terus berlari','diam saja']],['Lompat tali melatih kekuatan …','kaki',['kaki','telinga','rambut']],['Berjalan, berlari, dan melompat adalah contoh gerak …','lokomotor',['lokomotor','manipulatif','non-lokomotor']],['Berjalan di atas garis lurus melatih …','keseimbangan',['keseimbangan','suara','penglihatan saja']],['Minum air putih saat olahraga mencegah tubuh …','kekurangan cairan',['kekurangan cairan','menjadi kuat','tertidur']]);
PJ.forEach(([q,a,o])=>push('pjok',{q,o:shuf(o),a,n:`Jawaban: <b>${a}</b>.`}));
/* --- Komputer --- */
const KEYS=[['A','kelingking kiri'],['S','jari manis kiri'],['D','jari tengah kiri'],['F','telunjuk kiri'],['J','telunjuk kanan'],['K','jari tengah kanan'],['L','jari manis kanan'],[';','kelingking kanan']];
KEYS.forEach(([k,f])=>{push('komp',{q:`Tombol ${k} ditekan dengan …`,o:opts(f,KEYS.map(x=>x[1])),a:f,n:`${k} = <b>${f}</b>.`});push('komp',{q:`Jari ${f} diletakkan di tombol …`,o:opts(k,KEYS.map(x=>x[0])),a:k,n:`${f} di tombol <b>${k}</b>.`})});
const DR=[['ff jj ff jj','dd kk dd kk'],['ss ll ss ll','aa ;; aa ;;'],['fj fj dk dk','sl sl a; a;'],['ada','dada','lada'],['salak','jalak','kakak'],['adas','alas'],['saja','salad'],['asdf','jkl;','asdf jkl;'],['ada salak','kakak saja'],['lada jalak','dada adas'],['flask','fall','all'],['ask','add','lass'],['sad dad','add salsa'],['ada ada saja','kakak ada lada'],['asdf jkl; asdf jkl;','ada lada salak']];
[['Keyboard dipakai untuk …','mengetik huruf dan angka',['mengetik huruf dan angka','mendengar musik','mencetak kertas']],['Mouse dipakai untuk …','menggerakkan penunjuk di layar',['menggerakkan penunjuk di layar','mengetik kalimat','menyalakan lampu']],['Baris tombol ASDF JKL; disebut baris …','tengah (home row)',['tengah (home row)','atas','bawah']],['Setelah selesai memakai komputer, kita …','mematikannya dengan benar',['mematikannya dengan benar','mencabut kabel sembarangan','memukul layarnya']]].forEach(([q,a,o])=>push('komp',{q,o:shuf(o),a,n:`Jawaban: <b>${a}</b>.`}));
DR.forEach((t,i)=>push('komp',{type:t,q:`Latihan mengetik ${i+1}`,n:''}));
})();

render();
window.__H={QS,openQuiz,Q:()=>Q};

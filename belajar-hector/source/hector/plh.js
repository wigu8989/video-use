/* ===== PLH Bab 2: Pola Hidup Sederhana & Aturan di Rumah (dari catatan sekolah) ===== */
(function(){
let sd=71;const rnd=()=>{sd=(sd*9301+49297)%233280;return sd/233280};
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
QS.plh.forEach(q=>{if(!q.bab)q.bab='sampah'});
const P=[];const add=(b,q)=>{q.bab=b;P.push(q)};
const mc=(b,list)=>list.forEach(([q,a,w,n,read])=>add(b,{q,o:shuf([a,...w]),a,n:n||`Jawaban: <b>${a}</b>.`,...(read?{read}:{})}));
/* ---------- Pola hidup sederhana ---------- */
mc('sederhana',[
 ['Hidup sederhana adalah hidup yang …','tidak berlebihan atau tidak boros',['mewah dan berlebihan','boros'],'Catatan no. 1: hidup sederhana adalah hidup yang <b>tidak berlebihan atau tidak boros</b>.'],
 ['Hidup sederhana tidak berarti hidup …','miskin',['hemat','tidak boros'],'Catatan no. 2: hidup sederhana <b>tidak berarti hidup miskin</b>.'],
 ['Membawa bekal makanan dari rumah dapat …','menghemat uang jajan dan dapat ditabung',['membuat uang jajan cepat habis','membuat kita boros'],'Catatan no. 3: bekal dari rumah <b>menghemat uang jajan dan dapat ditabung</b>.'],
 ['Pola hidup sederhana di antaranya sederhana dalam …','penampilan dan pola makan',['bermain dan tidur','membeli mainan dan baju baru'],'Catatan no. 4: (a) sederhana dalam <b>penampilan</b>, (b) sederhana dalam <b>pola makan</b>.'],
 ['Contoh sederhana dalam penampilan adalah …','ke sekolah tidak menggunakan perhiasan berlebihan',['memakai gelang emas ke sekolah','memakai baju pesta ke sekolah'],'Catatan no. 5b.'],
 ['Pergi ke tempat yang sangat dekat sebaiknya …','berjalan kaki',['naik mobil','naik taksi'],'Catatan no. 5a: bepergian ke tempat yang sangat dekat dengan <b>berjalan kaki</b>.'],
 ['Hidup sederhana merupakan perbuatan yang …','terpuji',['tercela','memalukan'],'Hidup sederhana merupakan perbuatan yang <b>terpuji</b>.'],
 ['Contoh pola makan sederhana adalah …','tidak makan di restoran setiap hari',['makan makanan mahal setiap hari','jajan di mana-mana'],'Catatan no. 6: tidak makan makanan mahal setiap hari, tidak makan di restoran setiap hari.'],
 ['Hidup tidak berlebihan disebut juga hidup …','sederhana',['boros','mewah'],'Catatan no. 7.'],
 ['Ke sekolah harus memakai pakaian …','seragam',['pesta','tidur'],'Catatan no. 8: ke sekolah harus memakai <b>pakaian seragam</b>.'],
 ['Makan di rumah makan setiap hari menunjukkan hidup …','boros',['sederhana','hemat'],'Catatan no. 9.'],
 ['Baju seragam yang masih bersih sebaiknya …','dipakai kembali',['langsung dibuang','diganti yang baru'],'Catatan no. 10: seragam yang masih bersih <b>dipakai kembali</b>.'],
 ['Contoh hidup sederhana di rumah adalah …','memakai pakaian yang sederhana',['memakai perhiasan mahal di rumah','membeli baju baru setiap hari'],'Catatan no. 11.'],
 ['Contoh berpenampilan sederhana adalah …','jangan memakai pakaian yang terlalu mahal',['memakai pakaian paling mahal','memamerkan baju baru'],'Catatan no. 12.'],
 ['Melaksanakan hidup sederhana sama dengan hidup …','tidak boros',['mewah','miskin'],'Catatan no. 13.'],
 ['Sikap Rani termasuk gaya hidup …','mewah',['sederhana','hemat'],'Catatan no. 14: anting dan gelang mahal ke sekolah = gaya hidup <b>mewah</b>.','Rani ke sekolah memakai anting dan gelang mahal.'],
 ['Sebaiknya Arif …','memakai seragamnya lagi',['membuang seragamnya','minta dibelikan seragam baru'],'Catatan no. 15: baju itu masih bersih, jadi Arif <b>memakai seragamnya lagi</b>.','Baju seragam Arif baru dipakai satu hari. Baju itu masih bersih.'],
 ['Keluargaku selalu makan di rumah bersama-sama. Keluargaku menunjukkan sikap hidup …','sederhana',['boros','mewah'],'Catatan no. 16.'],
 ['Vira berangkat ke sekolah sebaiknya …','menggunakan motor atau mobil',['berjalan kaki sendirian','tidak berangkat'],'Catatan no. 17: rumahnya <b>jauh</b>, jadi sebaiknya memakai motor atau mobil. (Kalau dekat, cukup berjalan kaki.)','Vira murid kelas 2. Rumahnya jauh dari sekolah.'],
 ['Sebelum ke sekolah, kita sebaiknya …','menyiapkan baju seragam',['menyiapkan perhiasan','membeli baju baru'],'Catatan no. 18: siapkanlah baju seragam sebelum ke sekolah.'],
 ['Jika diberi uang jajan, sebaiknya …','ditabung',['dihabiskan semua','dipakai jajan di mana-mana'],'Catatan no. 19: uang jajan sebaiknya <b>ditabung</b>.'],
 ['Membawa bekal ke sekolah termasuk hidup …','sederhana',['boros','mewah'],'Catatan no. 20.'],
 ['Sikapmu sebaiknya …','tidak membeli mainan di toko',['membeli mainan baru itu','menangis minta dibelikan'],'Latihan soal no. 3: mainanmu masih bagus, jadi <b>tidak perlu membeli</b> yang baru.','Mainanmu masih bagus. Di toko ada mainan yang lebih bagus.'],
 ['Sikapmu sebaiknya …','menegur temanmu dengan sopan',['ikut makan sambil jalan-jalan','membiarkannya saja'],'Latihan soal no. 4 (koreksi guru): sikapmu sebaiknya <b>menegur</b>.','Temanmu makan sambil jalan-jalan di kelas. Di tangannya penuh berbagai macam jajanan.'],
 ['Uang jajan Hector masih bersisa. Sikap hidup sederhana adalah …','menabung sisanya',['membeli mainan yang tidak perlu','menghabiskan semuanya'],'Sisa uang lebih baik <b>ditabung</b>.'],
 ['Mana yang termasuk <b>kebutuhan</b>?','buku tulis untuk sekolah',['mainan yang sama dengan punya teman','perhiasan mahal'],'Hidup sederhana: membeli sesuatu <b>sesuai kebutuhan</b>.'],
 ['"Hidup sederhana berarti hidup miskin." Pernyataan ini …','salah',['benar'],'<b>Salah.</b> Catatan no. 2: hidup sederhana tidak berarti hidup miskin.'],
 ['"Membawa bekal ke sekolah termasuk hidup sederhana." Pernyataan ini …','benar',['salah'],'<b>Benar.</b> Catatan no. 20.']]);
/* tabel: contoh hidup sederhana / bukan */
const TB=[['Rani selalu memakai anting dan gelang mahal ke sekolah supaya teman-teman kagum','br'],['Aku minta ayah membelikan boneka setiap hari','br'],['Dini membawa bekal dari rumah, uang jajannya ditabung','sd'],['Lemari bajuku sudah penuh, tapi aku minta dibelikan baju lagi','br'],['Aku suka jajan di mana-mana karena makan di rumah membosankan','br'],['Keluargaku makan di rumah bersama-sama','sd']];
TB.forEach(([t,k])=>add('sederhana',{q:'Termasuk contoh hidup sederhana atau <u>bukan</u>?',read:t,o:['Contoh hidup sederhana','Bukan contoh hidup sederhana'],a:k==='sd'?'Contoh hidup sederhana':'Bukan contoh hidup sederhana',n:k==='sd'?'Ini <b>contoh hidup sederhana</b>.':'Ini <b>bukan</b> hidup sederhana karena berlebihan.'}));
add('sederhana',{sort:{bins:[['sd','Hidup sederhana','tidak berlebihan'],['br','Bukan sederhana','boros / mewah']],items:[['membawa bekal dari rumah','sd'],['makan di rumah makan setiap hari','br'],['memakai seragam bersih lagi','sd'],['anting dan gelang mahal ke sekolah','br'],['menabung uang jajan','sd'],['minta boneka setiap hari','br']]},q:'Seret setiap sikap ke kotak yang benar.',n:'Sederhana: bekal, seragam dipakai kembali, menabung.'});
add('sederhana',{sort:{bins:[['sd','Hidup sederhana','tidak berlebihan'],['br','Bukan sederhana','boros / mewah']],items:[['berjalan kaki ke tempat dekat','sd'],['jajan di mana-mana','br'],['makan bersama di rumah','sd'],['baju penuh tapi beli lagi','br'],['memakai pakaian sederhana','sd'],['memakai pakaian terlalu mahal','br']]},q:'Seret setiap sikap ke kotak yang benar.',n:'Sederhana: jalan kaki ke tempat dekat, makan di rumah, pakaian sederhana.'});
/* bacaan: Keluarga Tati */
const TATI='Keluarga Tati adalah keluarga berkecukupan di Desa Mekar. Keluarga Tati terkenal ramah. Selain ramah mereka suka berbagi. Di rumah Tati ada pembantu. Tati menyiapkan baju sendiri. Ia tidak menyuruh pembantu. Tati memakai baju seragam ke sekolah. Ia tidak memakai baju mewah. Ia tidak menggunakan perhiasan emas. Tati ke sekolah berjalan kaki, karena jarak rumah ke sekolah dekat. Tati lupa menyampaikan pesan Bu Guru. Tati menelepon ibunya menggunakan telepon umum di depan sekolah. Walaupun berkecukupan, Tati tidak diberi telepon genggam.';
mc('sederhana',[
 ['Keluarga Tati · Apakah Tati melaksanakan pola hidup sederhana?','Ya',['Tidak'],'<b>Ya.</b> Tati hidup sederhana walaupun keluarganya berkecukupan.',TATI],
 ['Keluarga Tati · Apa alasannya Tati disebut hidup sederhana?','Ia memakai seragam, tidak memakai perhiasan emas, dan berjalan kaki ke sekolah',['Ia selalu menyuruh pembantu','Ia punya telepon genggam mahal'],'Tati tidak berlebihan dan memakai sesuatu <b>sesuai kebutuhan</b>.',TATI],
 ['Keluarga Tati · Terpujikah perbuatan Tati?','Ya, terpuji',['Tidak terpuji'],'Hidup sederhana adalah perbuatan <b>terpuji</b>.',TATI],
 ['Keluarga Tati · Mengapa Tati ke sekolah berjalan kaki?','Karena jarak rumah ke sekolah dekat',['Karena tidak punya sepatu','Karena disuruh pembantu'],'Rumah Tati <b>dekat</b> dengan sekolah.',TATI],
 ['Keluarga Tati · Siapa yang menyiapkan baju Tati?','Tati sendiri',['Pembantu','Bu Guru'],'Tati menyiapkan baju <b>sendiri</b>, tidak menyuruh pembantu.',TATI],
 ['Keluarga Tati · Tati menelepon ibunya memakai …','telepon umum di depan sekolah',['telepon genggam miliknya','telepon Bu Guru'],'Walaupun berkecukupan, Tati <b>tidak diberi telepon genggam</b>.',TATI],
 ['Keluarga Tati · Selain ramah, keluarga Tati suka …','berbagi',['pamer','berpesta'],'Keluarga Tati ramah dan <b>suka berbagi</b>.',TATI],
 ['Andai kamu anak orang kaya, dapatkah kamu hidup sederhana seperti Tati?','Dapat',['Tidak dapat'],'<b>Dapat.</b> Hidup sederhana bukan soal kaya atau miskin.'],
 ['Hidup sederhana adalah cara menjalani hidup dengan wajar, tidak berlebihan, serta membeli sesuatu hanya sesuai dengan …','kebutuhan',['keinginan','gaya teman'],'Membeli sesuatu hanya <b>sesuai kebutuhan</b>.']]);
/* ---------- Peduli lingkungan (lembar mewarnai) ---------- */
const PED=[['menanam pohon','ya'],['menyapu halaman','ya'],['buang sampah pada tempatnya','ya'],['menyiram bunga','ya'],['buang sampah ke sungai','tdk'],['membiarkan keran menyala','tdk'],['merusak tanaman','tdk'],['mencoret-coret tembok','tdk']];
add('peduli',{sort:{bins:[['ya','Peduli lingkungan','diwarnai ✓'],['tdk','Tidak peduli','tidak diwarnai']],items:PED.slice(0,2).concat(PED.slice(4,6)).concat([PED[2],PED[6]])},q:'Seret setiap sikap ke kotak yang benar.',n:'Peduli: menanam pohon, menyapu halaman, buang sampah pada tempatnya.'});
add('peduli',{sort:{bins:[['ya','Peduli lingkungan','diwarnai ✓'],['tdk','Tidak peduli','tidak diwarnai']],items:[PED[3],PED[7],PED[0],PED[4],PED[1],PED[5]]},q:'Seret setiap sikap ke kotak yang benar.',n:'Peduli: menyiram bunga, menanam pohon, menyapu halaman.'});
PED.forEach(([t,k])=>add('peduli',{q:`"${t[0].toUpperCase()+t.slice(1)}" termasuk sikap …`,o:['peduli lingkungan','tidak peduli lingkungan'],a:k==='ya'?'peduli lingkungan':'tidak peduli lingkungan',n:k==='ya'?'Gambar ini <b>diwarnai</b> karena menunjukkan sikap peduli lingkungan.':'Sikap ini <b>merusak</b> lingkungan.'}));
mc('peduli',[
 ['Air keran dibiarkan menyala. Yang sebaiknya kamu lakukan adalah …','menutup keran',['membiarkannya','bermain air'],'Tutup keran supaya <b>air tidak terbuang</b>.'],
 ['Temanmu membuang sampah ke sungai. Sikapmu sebaiknya …','menegur dan mengajak membuang sampah ke tempat sampah',['ikut membuang sampah','tertawa saja'],'Sampah di sungai membuat <b>banjir dan air kotor</b>.'],
 ['Tembok sekolah dicoret-coret. Sikap ini …','tidak terpuji',['terpuji','biasa saja'],'Mencoret tembok <b>merusak</b> fasilitas.'],
 ['Manfaat menanam pohon adalah …','udara menjadi sejuk dan segar',['udara menjadi panas','tanah menjadi kotor'],'Pohon membuat udara <b>sejuk</b>.']]);
/* ---------- Aturan di rumah ---------- */
mc('aturan',[
 ['Aturan di rumah dibuat agar kita …','teratur dan disiplin',['bisa bermain terus','tidak perlu belajar'],'Aturan membuat kegiatan <b>teratur</b> dan kita menjadi <b>disiplin</b>.'],
 ['Anak yang mematuhi aturan di rumah adalah anak yang …','disiplin',['malas','boros'],'Mematuhi aturan = <b>disiplin</b>.'],
 ['Kegiatan pertama di pagi hari adalah …','bangun pagi',['tidur siang','makan bersama'],'Aturan pagi: 05.30 <b>bangun pagi</b>.'],
 ['Setelah bangun tidur, kita …','merapikan tempat tidur',['tidur lagi','langsung bermain'],'Aturan pagi: 06.00 <b>merapikan tempat tidur</b>.'],
 ['Sebelum berangkat ke sekolah, kita …','mandi dan sarapan',['tidur siang','membereskan buku untuk tidur'],'Aturan pagi: 06.15 mandi pagi, 06.30 sarapan.'],
 ['Pulang sekolah, sebaiknya kita …','ganti baju',['tidur dengan seragam','main sampai malam'],'Aturan siang: pulang sekolah → <b>ganti baju</b>.'],
 ['Setelah pulang sekolah, tas sekolah …','dirapikan',['dilempar ke lantai','ditinggal di mobil'],'Aturan siang: <b>merapikan tas sekolah</b>.'],
 ['Di siang hari, setelah makan dan ganti baju, kita …','tidur siang',['sarapan','tidur malam'],'Aturan siang: 02.30 <b>tidur siang</b>.'],
 ['Kegiatan baik di sore hari adalah …','membantu ibu',['sarapan','tidur malam'],'Aturan sore: <b>membantu ibu</b>, bermain, mandi, makan bersama.'],
 ['Makan bersama keluarga ada di aturan …','sore hari',['pagi hari','siang hari'],'Di lembar aturan, makan bersama ada di kolom <b>sore</b>.'],
 ['Kegiatan di malam hari adalah …','belajar',['bangun pagi','pulang sekolah'],'Aturan malam: 08.00 <b>belajar</b>.'],
 ['Setelah belajar, buku-buku …','dibereskan',['dibiarkan berserakan','disobek'],'Aturan malam: <b>membereskan buku</b>.'],
 ['Sebelum tidur malam, kita …','sikat gigi',['makan permen','main HP'],'Aturan malam: <b>sikat gigi</b>, lalu tidur.'],
 ['Kegiatan terakhir di malam hari adalah …','tidur malam',['belajar','makan bersama'],'Aturan malam: <b>tidur malam</b>.'],
 ['Contoh <u>melanggar</u> aturan di rumah adalah …','main HP sampai larut malam',['tidur tepat waktu','sikat gigi sebelum tidur'],'Main sampai larut malam membuat kita <b>bangun kesiangan</b>.'],
 ['Rafi tidur terlalu malam. Akibatnya besok pagi …','Rafi bangun kesiangan',['Rafi bangun lebih pagi','Rafi lebih segar'],'Tidur tepat waktu supaya bisa <b>bangun pagi</b>.'],
 ['Hector bangun pukul 05.30 dan sarapan pukul 06.30. Berapa lama dari bangun sampai sarapan?','1 jam',['30 menit','2 jam'],'05.30 → 06.30 = <b>1 jam</b>.'],
 ['Siapa yang membuat aturan di rumah?','orang tua bersama keluarga',['tetangga','teman sekelas'],'Aturan di rumah dibuat oleh <b>orang tua</b> dan dipatuhi seluruh keluarga.'],
 ['Kalau mematuhi aturan di rumah, rumah menjadi …','rapi dan nyaman',['berantakan','berisik'],'Aturan membuat rumah <b>rapi dan nyaman</b>.']]);
add('aturan',{sort:{bins:[['pg','Pagi hari','☀️ mulai hari'],['ml','Malam hari','🌙 sebelum tidur']],items:[['bangun pagi','pg'],['merapikan tempat tidur','pg'],['sarapan','pg'],['belajar','ml'],['sikat gigi lalu tidur','ml'],['membereskan buku','ml']]},q:'Seret setiap kegiatan ke waktunya.',n:'Pagi: bangun, rapikan tempat tidur, mandi, sarapan. Malam: belajar, bereskan buku, sikat gigi, tidur.'});
add('aturan',{sort:{bins:[['si','Siang hari','🏫 pulang sekolah'],['so','Sore hari','🌇 sebelum malam']],items:[['ganti baju','si'],['merapikan tas sekolah','si'],['tidur siang','si'],['membantu ibu','so'],['bermain','so'],['makan bersama','so']]},q:'Seret setiap kegiatan ke waktunya.',n:'Siang: pulang sekolah, ganti baju, rapikan tas, tidur siang. Sore: bantu ibu, bermain, mandi, makan bersama.'});
[['pagi',['bangun pagi','merapikan tempat tidur','mandi pagi','sarapan']],['siang',['pulang sekolah','ganti baju','merapikan tas sekolah','tidur siang']],['sore',['membantu ibu','bermain','mandi sore','makan bersama']],['malam',['belajar','membereskan buku','sikat gigi','tidur malam']]]
 .forEach(([t,w])=>add('aturan',{build:w,bid:1,q:`Urutkan aturan di ${t} hari`,sub:'Ketuk kegiatan dari yang pertama sampai terakhir.',n:`Aturan ${t} hari: <b>${w.join(' → ')}</b>`}));
/* PLH: hidup sederhana (lembar Keluarga Tati berjudul PLH), peduli lingkungan, sampah */
QS.plh=[...P.filter(q=>q.bab==='peduli'),...QS.plh];
SUBJ.plh.sub='Peduli lingkungan · Sampah & kebersihan';
SUBJ.plh.babs=['peduli','sampah'];
SUBJ.plh.blbl={peduli:'Peduli lingkungan',sampah:'Sampah & kebersihan'};
SUBJ.plh.allLbl='Semua';
/* PPKn: aturan di rumah + hidup sederhana (catatan buku PPKn) + materi umum sebelumnya */
QS.pkn.forEach(q=>{if(!q.bab)q.bab='umum'});
const cp=q=>JSON.parse(JSON.stringify(q));
QS.pkn=[...P.filter(q=>q.bab==='aturan').map(cp),...P.filter(q=>q.bab==='sederhana').map(cp),...QS.pkn];
SUBJ.pkn.name='PPKn';delete SUBJ.pkn.check;
SUBJ.pkn.sub='Aturan di rumah · Hidup sederhana · Keluarga Tati';
SUBJ.pkn.babs=['aturan','sederhana','umum'];
SUBJ.pkn.blbl={aturan:'Aturan di rumah',sederhana:'Hidup sederhana',umum:'Materi umum'};
SUBJ.pkn.allLbl='Semua';
})();

/* ===== PJOK: materi tes ASAS 24 Nov 2026 (dari catatan Hector) ===== */
(function(){
let sd=53;const rnd=()=>{sd=(sd*9301+49297)%233280;return sd/233280};
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
QS.pjok.forEach(q=>{q.bab='umum'});
const P=[];const add=(b,q)=>{q.bab=b;P.push(q)};
const mc=(b,list)=>list.forEach(([q,a,w,n])=>add(b,{q,o:shuf([a,...w]),a,n:n||`Jawaban: <b>${a}</b>.`}));
const JENIS=['lokomotor','non-lokomotor','manipulatif'];
const jenis=(b,list)=>list.forEach(([g,a,n])=>add(b,{q:`"${g}" termasuk gerak …`,o:shuf(JENIS),a,n:n||`${g[0].toUpperCase()+g.slice(1)} = gerak <b>${a}</b>.`}));

/* ---------- Lokomotor ---------- */
mc('lokomotor',[
 ['Gerak dasar lokomotor adalah gerakan yang …','berpindah tempat',['tidak berpindah tempat','memakai bola'],'Lokomotor = gerakan yang <b>berpindah tempat</b>.'],
 ['Contoh gerak lokomotor yang diuji adalah …','berjalan, berlari, melompat',['meliuk, mengayun, menekuk','melempar, menangkap, memukul'],'Materi tes: lokomotor = <b>berjalan, berlari, melompat</b>.'],
 ['Variasi berjalan: berjalan lambat dan …','cepat',['berguling','melempar'],'Catatan: berjalan <b>lambat dan cepat</b>.'],
 ['Variasi berjalan: berjalan dengan tumit dan …','jinjit',['merangkak','meloncat'],'Catatan: berjalan dengan <b>tumit dan jinjit</b>.'],
 ['Berjalan menirukan hewan …','bebek',['kelinci','cicak'],'Catatan: berjalan menirukan <b>bebek</b>.'],
 ['Berlari berbelok-belok ke kiri dan kanan disebut berlari …','zig-zag',['lurus','mundur'],'Catatan: berlari <b>zig-zag</b>.'],
 ['Contoh variasi berlari adalah …','berlari melewati rintangan',['berlari sambil duduk','berlari menirukan cicak'],'Variasi berlari: melewati rintangan, zig-zag, cepat dan lambat, lurus.'],
 ['Bergeser bisa ke arah …','kanan, kiri, depan, dan belakang',['atas saja','bawah saja'],'Catatan: bergeser ke samping kanan, kiri, depan, dan belakang.'],
 ['Bergeser dengan cara …','berguling',['melempar bola','memukul bola'],'Catatan: bergeser dengan cara <b>berguling</b>.'],
 ['Bergeser menirukan gerakan hewan …','cicak',['bebek','katak'],'Catatan: bergeser menirukan gerakan <b>cicak</b>.'],
 ['Melompat bisa ke arah …','maju dan mundur',['ke atas tanpa mendarat','ke samping sambil duduk'],'Catatan: melompat <b>maju dan mundur</b>.'],
 ['Melompat menirukan gerakan hewan …','kelinci dan katak',['bebek dan cicak','kucing dan ikan'],'Catatan: melompat menirukan <b>kelinci dan katak</b>.'],
 ['Melompati sebuah kardus kecil termasuk variasi …','melompat melewati rintangan',['berjalan jinjit','memutar pinggang'],'Catatan: melompat <b>melewati rintangan</b>.'],
 ['Saat berjalan jinjit, kaki bertumpu pada …','ujung jari kaki',['tumit','lutut'],'Jinjit = bertumpu pada <b>ujung jari kaki</b>.']]);
jenis('lokomotor',[['berjalan','lokomotor'],['berlari zig-zag','lokomotor'],['melompat seperti katak','lokomotor'],['bergeser ke samping','lokomotor']]);

/* ---------- Non-lokomotor ---------- */
mc('nonlokomotor',[
 ['Gerak non-lokomotor adalah gerakan yang …','tidak berpindah tempat',['berpindah tempat','harus memakai bola'],'Non-lokomotor = gerakan yang <b>tidak berpindah tempat</b>.'],
 ['Contoh gerak non-lokomotor yang diuji adalah …','meliuk, mengayun, menekuk',['berjalan, berlari, melompat','melempar, menangkap, memukul'],'Materi tes: non-lokomotor = <b>meliuk, mengayun, menekuk</b>.'],
 ['Menekuk tangan dan kaki sambil …','berdiri',['berlari','melompat'],'Catatan: menekuk tangan dan kaki <b>sambil berdiri</b>.'],
 ['Menekuk tangan seperti mengangkat barbel menirukan gerakan …','atlet angkat besi',['pak tani mencangkul','pemain sepak bola'],'Catatan: menirukan gerakan <b>atlet angkat besi</b>.'],
 ['Meliuk ke kanan dan ke kiri dilakukan sambil …','duduk',['berlari','melompat'],'Catatan: meliuk ke kanan dan ke kiri <b>sambil duduk</b>.'],
 ['Meliuk menirukan gerakan …','pak tani mencangkul',['kincir angin','orang utan bergantung'],'Catatan: meliuk menirukan gerakan <b>pak tani mencangkul</b>.'],
 ['Gerakan memutar pinggang termasuk variasi gerak …','memutar',['menendang','berlari'],'Catatan: variasi memutar: memutar kedua tangan, memutar <b>pinggang</b>.'],
 ['Memutar kedua tangan menirukan …','kincir angin',['katak','bebek'],'Catatan: memutar menirukan gerakan <b>kincir angin</b>.'],
 ['Mengayun tangan ke atas dan ke bawah sambil membawa …','tongkat kecil',['bola basket','raket'],'Catatan: mengayun tangan membawa <b>tongkat kecil</b>.'],
 ['Mengayun menirukan gerakan …','orang utan bergantung',['atlet angkat besi','kelinci'],'Catatan: menirukan orang utan <b>menggantung dan mengayun</b>.'],
 ['Mengayun bisa dilakukan dengan posisi …','terlentang',['berlari','melompat'],'Catatan: mengayun dengan posisi <b>terlentang</b>.']]);
jenis('nonlokomotor',[['meliuk','non-lokomotor'],['mengayun tangan','non-lokomotor'],['menekuk kaki','non-lokomotor'],['memutar pinggang','non-lokomotor']]);

/* ---------- Manipulatif ---------- */
mc('manipulatif',[
 ['Gerak manipulatif adalah gerakan yang …','menggunakan benda, misalnya bola',['tidak berpindah tempat','berpindah tempat tanpa alat'],'Manipulatif = gerakan <b>memainkan benda</b> seperti bola, raket, tongkat.'],
 ['Contoh gerak manipulatif yang diuji adalah …','melempar, menangkap, memukul',['meliuk, mengayun, menekuk','berjalan, berlari, melompat'],'Materi tes: manipulatif = <b>melempar, menangkap, memukul</b>.'],
 ['Menangkap bola bisa dari bola yang …','dilempar, ditendang, atau dipukul',['digulingkan di air','disimpan di lemari'],'Catatan: menangkap bola yang dilempar, ditendang, dipukul.'],
 ['Melempar bola berpasangan artinya melempar bola …','bersama teman, saling melempar',['ke tembok sendirian','ke tempat sampah'],'Catatan: melempar bola <b>berpasangan</b>.'],
 ['Melempar bola ke keranjang menirukan atlet …','bola basket',['sepak bola','angkat besi'],'Catatan: menirukan atlet <b>bola basket</b>.'],
 ['Memukul bisa menggunakan …','raket atau alat pemukul (bet)',['tangan kosong saja','kaki'],'Catatan: memukul menggunakan <b>raket</b> dan <b>alat pukul (bet)</b>.'],
 ['Menendang bola memakai …','kaki kanan dan kaki kiri',['tangan','kepala saja'],'Catatan: menendang menggunakan <b>kaki kanan dan kaki kiri</b>.'],
 ['Menendang bola ke arah kanan dan kiri secara …','bergantian',['bersamaan','sambil duduk'],'Catatan: menendang ke arah kanan dan kiri <b>bergantian</b>.'],
 ['Menendang menirukan tendangan pemain …','sepak bola',['bola basket','bulu tangkis'],'Catatan: menirukan tendangan <b>pemain sepak bola</b>.'],
 ['Saat menangkap bola, mata harus melihat ke …','bola',['langit','sepatu'],'Mata selalu <b>melihat bola</b> supaya tangkapan tepat.']]);
jenis('manipulatif',[['melempar bola','manipulatif'],['menangkap bola','manipulatif'],['memukul bola dengan raket','manipulatif'],['menendang bola','manipulatif']]);

/* ---------- Senam & kebugaran ---------- */
mc('senam',[
 ['Aktivitas senam yang diuji adalah …','bertumpu, keseimbangan, berguling ke depan',['berlari zig-zag, melompat','melempar dan menangkap'],'Materi tes: senam = <b>bertumpu, keseimbangan, berguling ke depan</b>.'],
 ['Berdiri dengan satu kaki tanpa jatuh melatih …','keseimbangan',['kecepatan lari','lemparan'],'Berdiri satu kaki = latihan <b>keseimbangan</b>.'],
 ['Saat berguling ke depan, dagu sebaiknya …','menempel ke dada',['menghadap ke atas','menyentuh lantai'],'Dagu <b>menempel ke dada</b> supaya leher aman.'],
 ['Saat bertumpu, berat badan ditahan oleh …','tangan dan kaki',['kepala','punggung saja'],'Bertumpu = badan ditahan <b>tangan dan kaki</b>.'],
 ['Berguling ke depan sebaiknya dilakukan di atas …','matras',['lantai keramik keras','aspal'],'Senam lantai dilakukan di atas <b>matras</b> agar aman.'],
 ['Push-up melatih kekuatan …','tangan dan lengan',['telinga','mata'],'Push-up menguatkan <b>tangan dan lengan</b>.'],
 ['Sit-up melatih kekuatan …','otot perut',['otot jari kaki','leher'],'Sit-up menguatkan <b>otot perut</b>.'],
 ['Supaya push-up dan sit-up semakin kuat, latihan sebaiknya dilakukan …','rutin setiap hari',['sekali setahun','hanya saat ujian'],'Di catatan, latihan dicentang hari demi hari: berlatih <b>rutin</b>.']]);

/* ---------- Bermain aman: bagian tubuh ---------- */
mc('aman',[
 ['Saat bermain lempar bola, bagian tubuh yang TIDAK boleh dikenai bola adalah …','kepala',['tangan','kaki'],'Gambar catatan: kepala <b>tidak boleh</b>.'],
 ['Bagian tubuh yang paling berbahaya jika terkena adalah …','leher',['tangan','kaki'],'Gambar catatan: leher <b>berbahaya sekali</b>.'],
 ['Mata dan telinga boleh dikenai bola?','Tidak boleh',['Boleh'],'Mata dan telinga <b>tidak boleh</b> dikenai.'],
 ['Bagian tubuh yang boleh dikenai/menyentuh saat bermain adalah …','tangan',['mata','leher'],'Gambar catatan: tangan <b>boleh</b>.'],
 ['Badan (perut dan dada) boleh dikenai bola keras?','Tidak boleh',['Boleh'],'Gambar catatan: badan <b>tidak boleh</b>.'],
 ['Kaki boleh dikenai, tetapi …','jangan sampai berbahaya',['harus sekeras-kerasnya','tidak apa-apa melukai'],'Gambar catatan: kaki <b>boleh tapi jangan jadi berbahaya</b>.'],
 ['Sebelum olahraga, kita sebaiknya …','melakukan pemanasan',['makan banyak sekali','langsung berlari kencang'],'<b>Pemanasan</b> mencegah cedera.']]);
add('aman',{sort:{bins:[['boleh','Boleh','hati-hati'],['tidak','Tidak boleh','berbahaya']],items:[['tangan','boleh'],['kaki','boleh'],['kepala','tidak'],['mata','tidak'],['leher','tidak'],['badan','tidak']]},q:'Bagian tubuh mana yang boleh dan tidak boleh dikenai saat bermain? Seret ke kotaknya.',n:'Boleh: tangan, kaki (jangan berbahaya). Tidak boleh: kepala, mata, leher, badan.'});

/* ---------- Campuran: kelompokkan gerak ---------- */
add('campur',{sort:{bins:[['lok','Lokomotor','berpindah tempat'],['non','Non-lokomotor','tidak berpindah'],['man','Manipulatif','memakai benda']],items:[['berjalan','lok'],['berlari','lok'],['melompat','lok'],['meliuk','non'],['mengayun','non'],['menekuk','non'],['melempar','man'],['menangkap','man'],['memukul','man']]},q:'Seret setiap gerakan ke kelompoknya (materi tes).',n:'Lokomotor: berjalan, berlari, melompat. Non-lokomotor: meliuk, mengayun, menekuk. Manipulatif: melempar, menangkap, memukul.'});
add('campur',{sort:{bins:[['lok','Lokomotor','berpindah tempat'],['non','Non-lokomotor','tidak berpindah'],['man','Manipulatif','memakai benda']],items:[['bergeser ke samping','lok'],['berlari zig-zag','lok'],['memutar pinggang','non'],['menekuk tangan','non'],['menendang bola','man'],['memukul dengan raket','man']]},q:'Seret setiap gerakan ke kelompoknya.',n:'Ingat: berpindah = lokomotor, diam di tempat = non-lokomotor, pakai benda = manipulatif.'});
add('campur',{sort:{bins:[['lok','Lokomotor','berpindah tempat'],['non','Non-lokomotor','tidak berpindah'],['man','Manipulatif','memakai benda']],items:[['menirukan bebek berjalan','lok'],['melompat seperti kelinci','lok'],['menirukan kincir angin','non'],['menirukan pak tani mencangkul','non'],['menirukan atlet basket','man'],['menirukan pemain sepak bola','man']]},q:'Gerakan menirukan: seret ke kelompoknya.',n:'Menirukan hewan berpindah = lokomotor; kincir angin dan pak tani = non-lokomotor; atlet bola = manipulatif.'});
jenis('campur',[['berguling ke samping (bergeser)','lokomotor'],['meliuk sambil duduk','non-lokomotor'],['melempar bola ke keranjang','manipulatif'],['berjalan jinjit','lokomotor'],['mengayun seperti orang utan','non-lokomotor'],['menangkap bola yang ditendang','manipulatif']]);
mc('campur',[
 ['Tes PJOK akhir semester satu dilaksanakan pada tanggal …','24 November 2026',['21 Juli 2026','27 Oktober 2026'],'Catatan: tes PJOK <b>24 November 2026</b>.'],
 ['Bedanya lokomotor dan non-lokomotor adalah …','lokomotor berpindah tempat, non-lokomotor tidak',['lokomotor memakai bola','non-lokomotor selalu berlari'],'Lokomotor <b>berpindah</b>, non-lokomotor <b>tidak berpindah</b>.']]);

QS.pjok=[...P,...QS.pjok];
SUBJ.pjok.sub='Tes ASAS 24 Nov · dari catatan sekolah';
SUBJ.pjok.babs=['lokomotor','nonlokomotor','manipulatif','senam','aman','campur','umum'];
SUBJ.pjok.blbl={lokomotor:'Lokomotor',nonlokomotor:'Non-lokomotor',manipulatif:'Manipulatif',senam:'Senam & kebugaran',aman:'Bermain aman',campur:'Campuran',umum:'Latihan umum'};
SUBJ.pjok.allLbl='Semua';
})();

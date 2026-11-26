/* ---------- kosakata ---------- */
const W={};const add=(en,id,pic)=>W[en]={en,id,pic};
const P_=k=>()=>IC[k];
[['happy','senang'],['sad','sedih'],['angry','marah'],['tired','lelah'],['hungry','lapar'],['scared','takut'],
 ['father','ayah'],['mother','ibu'],['brother','saudara laki-laki'],['sister','saudara perempuan'],['grandpa','kakek'],['grandma','nenek'],['baby','bayi'],
 ['head','kepala'],['eyes','mata'],['ears','telinga'],['nose','hidung'],['mouth','mulut'],['hands','tangan'],['feet','kaki'],
 ['cat','kucing'],['dog','anjing'],['rabbit','kelinci'],['cow','sapi'],
 ['bread','roti'],['cake','kue'],['egg','telur'],['table','meja'],['book','buku'],['pencil','pensil'],['bag','tas'],['ruler','penggaris'],['eraser','penghapus'],['chair','kursi'],
 ['shirt','kemeja / kaos'],['hat','topi'],['shoes','sepatu'],['socks','kaus kaki'],['dress','gaun'],['pants','celana panjang'],
 ['run','berlari'],['jump','melompat'],['swim','berenang'],['sleep','tidur'],['eat','makan'],['read','membaca'],
 ['sun','matahari'],['car','mobil'],['kite','layang-layang'],['tree','pohon'],['boat','perahu']].forEach(([e,i])=>add(e,i,P_(e)));
add('bird','burung',()=>IC0.burung);add('fish','ikan',()=>IC0.ikan);add('duck','bebek',()=>IC0.bebek);add('monkey','monyet',()=>IC0.monyet);
add('apple','apel',()=>apple());add('banana','pisang',()=>IC0.pisang);add('orange','jeruk',()=>IC.orangef);add('rice','nasi',()=>IC.bowl);add('milk','susu',()=>IC.g_milk);add('water','air',()=>IC.bottle);
add('ball','bola',()=>IC.ballr);
[['circle','lingkaran'],['square','persegi'],['triangle','segitiga'],['star','bintang'],['heart','hati']].forEach(([e,i])=>add(e,i,()=>shape(e,{circle:'#3D7BE0',square:'#3FA34D',triangle:'#F58A1F',star:'#F5C518',heart:'#E5484D'}[e])));
[['red','merah'],['blue','biru'],['yellow','kuning'],['green','hijau']].forEach(([e,i])=>add(e,i,()=>balloon(SHC[e])));
const NUMW=['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'];
const NUMI=['satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas','dua belas','tiga belas','empat belas','lima belas','enam belas','tujuh belas','delapan belas','sembilan belas','dua puluh'];
NUMW.forEach((w,i)=>add(w,NUMI[i],()=>numCard(i+1)));
const pic=(k,s=56,c='')=>G(W[k].pic(),s,c);
const row=(ic,n,s=64)=>()=>`<div class="bigpic row">${[...Array(n)].map(()=>G(ic,s)).join('')}</div>`;
const one=(ic,s=120)=>()=>`<div class="bigpic">${G(ic,s)}</div>`;

/* ---------- gambar besar untuk soal "figure" ---------- */
function kidFig(dressed){const sk=SK,sh=dressed?'#3D7BE0':'#F7F1E0',pa=dressed?'#3D5A9E':'#F7F1E0';
  return `<svg viewBox="0 0 200 240" class="figsvg" aria-hidden="true"><ellipse cx="100" cy="232" rx="56" ry="7" fill="#000" opacity=".1"/>
   <path d="M72 90 l-26 50 M128 90 l26 50" stroke="${sk}" stroke-width="13" stroke-linecap="round"/><circle cx="44" cy="146" r="10" fill="${sk}"/><circle cx="156" cy="146" r="10" fill="${sk}"/>
   <path d="M86 150 v66 M114 150 v66" stroke="${sk}" stroke-width="15" stroke-linecap="round"/><ellipse cx="82" cy="222" rx="14" ry="7" fill="${sk}"/><ellipse cx="118" cy="222" rx="14" ry="7" fill="${sk}"/>
   <path d="M70 84 h60 l4 72 h-68z" fill="${sh}" stroke="${dressed?'#22386B':'#D8CBB0'}" stroke-width="2.5"/><path d="M68 150 h64 v22 h-64z" fill="${pa}" stroke="${dressed?'#22386B':'#D8CBB0'}" stroke-width="2.5"/>
   <rect x="92" y="70" width="16" height="16" fill="${sk}"/><circle cx="100" cy="46" r="30" fill="${sk}" stroke="${SKS}" stroke-width="2"/><path d="M70 42 q0 -32 30 -32 q30 0 30 32 q-12 -18 -30 -16 q-18 -2 -30 16z" fill="${HAIR}"/>
   <ellipse cx="69" cy="48" rx="5" ry="8" fill="${sk}" stroke="${SKS}" stroke-width="2"/><ellipse cx="131" cy="48" rx="5" ry="8" fill="${sk}" stroke="${SKS}" stroke-width="2"/>
   <circle cx="89" cy="46" r="3.6" fill="#3A2416"/><circle cx="111" cy="46" r="3.6" fill="#3A2416"/><path d="M99 50 q-3 6 2 7" stroke="${SKS}" stroke-width="2" fill="none"/><path d="M90 62 q10 8 20 0" stroke="#A8442D" stroke-width="3" fill="none" stroke-linecap="round"/>
   <ellipse cx="80" cy="56" rx="5" ry="3" fill="#FF8FA3" opacity=".6"/><ellipse cx="120" cy="56" rx="5" ry="3" fill="#FF8FA3" opacity=".6"/>
   ${dressed?`<path d="M44 46 L76 42 M156 58 L114 62 M30 124 L42 140 M172 214 L132 222" stroke="#8A6234" stroke-width="2" stroke-dasharray="4 3"/><circle cx="76" cy="42" r="3" fill="#8A6234"/><circle cx="112" cy="62" r="3" fill="#8A6234"/><circle cx="43" cy="141" r="3" fill="#8A6234"/><circle cx="131" cy="222" r="3" fill="#8A6234"/>`:''}</svg>`}
const roomFig=()=>`<svg viewBox="0 0 200 150" class="figsvg" aria-hidden="true"><rect x="0" y="128" width="200" height="22" fill="#E8D2A8"/><rect x="0" y="0" width="200" height="128" fill="#FFF7E6"/>
   <rect x="8" y="58" width="104" height="10" rx="3" fill="#B5803F" stroke="#7A4A22" stroke-width="2"/><path d="M16 68 v62 M104 68 v62" stroke="#8B5A2B" stroke-width="7" stroke-linecap="round"/>
   <g transform="translate(160 96) scale(1.6)">${IC.bag}</g></svg>`;
const treeFig=()=>`<svg viewBox="0 0 200 170" class="figsvg" aria-hidden="true"><rect y="148" width="200" height="22" fill="#9AD06A"/><rect x="88" y="70" width="24" height="84" fill="#8B5A2B"/><circle cx="100" cy="56" r="52" fill="#3E9B5A"/><circle cx="60" cy="74" r="28" fill="#358A4E"/><circle cx="142" cy="74" r="28" fill="#358A4E"/></svg>`;

/* ---------- 10 pulau x 10 soal ---------- */
const L2=(a,b)=>[a,b];
const UNITS=[
 {key:'hello',en:'Hello Harbor',idn:'Pelabuhan Halo',topic:'Greetings & feelings',c:'#13A6A0',cb:'#D6F4F1',icon:()=>IC.happy,words:['happy','sad','angry','tired','hungry','scared'],
  rule:L2('Say "Hello!" and "How are you?". Answer: "I am happy."','Ucapkan "Hello!" dan "How are you?" (Apa kabar?). Jawab: "I am happy." (Aku senang.)'),
  Q:[{t:'listenPic',say:'happy',opts:['sad','happy','angry','tired']},
     {t:'listen',say:'tired',opts:['hungry','tired','scared','happy']},
     {t:'match',pairs:['sad','angry','hungry']},
     {t:'read',show:'scared',opts:['happy','scared','sad']},
     {t:'read',showHTML:()=>`<div class="bigpic">${G(IC.sun,90)}${G(`<circle r="16" fill="#fff" stroke="#5E6676" stroke-width="2"/><path d="M0 0 V-11 M0 0 L-8 0" stroke="#173A50" stroke-width="2.4" stroke-linecap="round"/><text y="13" text-anchor="middle" font-size="6" font-family="Fredoka,system-ui,sans-serif" fill="#5E6676">7 AM</text>`,90)}</div>`,ask:L2('It is 7 in the morning. What do you say?','Jam 7 pagi. Apa yang kamu ucapkan?'),opts:['Good night!','Good morning!','Goodbye!'],ans:'Good morning!',ansMean:'Selamat pagi!',note:'Pagi hari kita bilang <b>Good morning!</b> Malam sebelum tidur: <b>Good night!</b> Berpisah: <b>Goodbye!</b>'},
     {t:'spell',word:'sad',extra:['o','e']},
     {t:'collect',zone:'box',items:[['h1','happy'],['s1','sad'],['h2','happy'],['a1','angry'],['t1','tired'],['h3','happy']],want:{happy:3},say:'Find all the happy faces. Put them in the box.',sayHTML:'Find all the <u>happy</u> faces.',sub:'Artinya: "Cari semua wajah yang senang. Masukkan ke kotak."',ins:L2('Listen and do it. Drag the faces into the box.','Dengarkan perintahnya, lalu seret wajah ke kotak.'),ansEN:'three happy faces',answerSay:'happy, happy, happy',note:'<b>happy</b> = senang. Ada 3 wajah senang. Wajah sad, angry, dan tired tidak dimasukkan.'},
     {t:'listen',sentence:true,say:'I am hungry.',mean:'Aku lapar.',opts:['I am happy.','I am hungry.','I am angry.'],ans:'I am hungry.'},
     {t:'blank',text:'Hello! How ___ you?',opts:['is','are','am'],ans:'are',mean:'Halo! Apa kabar?',showHTML:row(IC.happy,2,70),note:'Kalimat yang benar: <b>How are you?</b> (Apa kabar?). Jawabannya: <b>I am fine.</b>'},
     {t:'build',words:['Good','morning,','teacher!'],mean:'Selamat pagi, Bu/Pak Guru!',showHTML:one(IC.sun,100)}]},
 {key:'family',en:'Family Farm',idn:'Peternakan Keluarga',topic:'My family',c:'#E0466E',cb:'#FFE1EA',icon:()=>IC.mother,words:['father','mother','brother','sister','grandpa','grandma','baby'],
  rule:L2('This is my family. This is my father. This is my mother.','Ini keluargaku. Ini ayahku. Ini ibuku. Pakai "This is my ..." untuk mengenalkan keluarga.'),
  Q:[{t:'listenPic',say:'mother',opts:['father','mother','sister','grandma']},
     {t:'listen',say:'grandpa',opts:['brother','baby','grandpa','father']},
     {t:'match',pairs:['father','sister','baby']},
     {t:'read',show:'grandma',opts:['mother','grandma','sister']},
     {t:'read',show:'brother',opts:['brother','father','baby']},
     {t:'spell',word:'baby',extra:['d','e']},
     {t:'match',pairs:['grandpa','grandma','father','mother'],ins:L2('This is my family tree. Drag the words to the pictures.','Ini pohon keluargaku. Seret kata ke gambar yang cocok.')},
     {t:'listen',sentence:true,say:'This is my sister.',mean:'Ini saudara perempuanku.',opts:['This is my mother.','This is my sister.','This is my brother.'],ans:'This is my sister.'},
     {t:'blank',text:'He is my ___.',opts:['mother','father','sister'],ans:'father',mean:'Dia ayahku.',showHTML:one(IC.father),note:'Gambar menunjukkan ayah. <b>He</b> dipakai untuk laki-laki: He is my <b>father</b>.'},
     {t:'build',words:['I','love','my','mother.'],mean:'Aku sayang ibuku.',showHTML:one(IC.mother)}]},
 {key:'body',en:'Body Beach',idn:'Pantai Tubuh',topic:'My body',c:'#C0533A',cb:'#FFE4DB',icon:()=>IC.head,words:['head','eyes','ears','nose','mouth','hands','feet'],
  rule:L2('I have one head, two eyes, two ears, one nose, and one mouth.','Aku punya satu kepala, dua mata, dua telinga, satu hidung, dan satu mulut. Lebih dari satu, tambahkan -s: eyes, ears, hands.'),
  Q:[{t:'listenPic',say:'nose',opts:['mouth','ears','nose','eyes']},
     {t:'listen',say:'hands',opts:['head','hands','feet','ears']},
     {t:'match',pairs:['eyes','mouth','feet']},
     {t:'read',show:'ears',opts:['eyes','nose','ears']},
     {t:'read',show:'head',opts:['hands','head','mouth']},
     {t:'spell',word:'nose',extra:['a','i']},
     {t:'figure',fig:()=>kidFig(true),ar:'200/240',spots:[['g_head',16,19],['g_mouth',84,26],['g_hands',14,52],['g_feet',86,90]],items:[['t_head','head'],['t_mouth','mouth'],['t_hands','hands'],['t_feet','feet'],['t_ears','ears']],ans:{t_head:'g_head',t_mouth:'g_mouth',t_hands:'g_hands',t_feet:'g_feet'},chips:true,
      ins:L2('Label the body. Drag the words to the boxes.','Beri nama bagian tubuh. Seret kata ke kotak.'),ansEN:'head · mouth · hands · feet',answerSay:'head, mouth, hands, feet',note:'Ikuti garis putus-putus: kepala = <b>head</b>, mulut = <b>mouth</b>, tangan = <b>hands</b>, kaki = <b>feet</b>. Kata <b>ears</b> tidak dipakai.'},
     {t:'listen',sentence:true,say:'Touch your nose.',mean:'Sentuh hidungmu.',opts:['Touch your ears.','Touch your head.','Touch your nose.'],ans:'Touch your nose.'},
     {t:'blank',text:'I see with my ___.',opts:['ears','eyes','mouth'],ans:'eyes',mean:'Aku melihat dengan mataku.',showHTML:one(IC.eyes),note:'Kita melihat (<b>see</b>) dengan mata: <b>eyes</b>. Mendengar dengan <b>ears</b>, makan dengan <b>mouth</b>.'},
     {t:'build',words:['I','have','two','hands.'],mean:'Aku punya dua tangan.',showHTML:one(IC.hands)}]},
 {key:'animals',en:'Animal Jungle',idn:'Hutan Hewan',topic:'Animals',c:'#2E9E5B',cb:'#DDF3E5',icon:()=>IC.cat,words:['cat','dog','rabbit','cow','bird','fish','duck','monkey'],
  rule:L2('The cat says meow. The dog says woof. The cow says moo.','Kucing berbunyi meow, anjing woof, sapi moo. Kita pakai "a": a cat, a dog.'),
  Q:[{t:'listenPic',say:'cat',opts:['dog','rabbit','cat','cow']},
     {t:'listen',say:'rabbit',opts:['monkey','rabbit','duck','bird']},
     {t:'match',pairs:['dog','cow','fish']},
     {t:'read',show:'duck',opts:['bird','fish','duck']},
     {t:'read',show:'monkey',opts:['cow','monkey','cat']},
     {t:'spell',word:'dog',extra:['a','t']},
     {t:'sort',bins:[{id:'4',label:'four legs',sub:'kaki empat'},{id:'2',label:'two legs',sub:'kaki dua'}],items:[['i1','cat','4'],['i2','bird','2'],['i3','cow','4'],['i4','duck','2'],['i5','rabbit','4']],
      ins:L2('How many legs? Sort the animals.','Berapa kakinya? Pilah hewan-hewan ini.'),ansEN:'four legs: cat, cow, rabbit · two legs: bird, duck',answerSay:'Four legs: cat, cow, rabbit. Two legs: bird, duck.',note:'Kucing, sapi, kelinci berkaki empat (<b>four legs</b>). Burung dan bebek berkaki dua (<b>two legs</b>).'},
     {t:'listen',sentence:true,say:'The cow says moo.',mean:'Sapi berbunyi moo.',opts:['The cat says meow.','The cow says moo.','The dog says woof.'],ans:'The cow says moo.'},
     {t:'blank',text:'The cat says ___.',opts:['woof','moo','meow'],ans:'meow',mean:'Kucing berbunyi meow.',showHTML:one(IC.cat),note:'Kucing berbunyi <b>meow</b>. Anjing <b>woof</b>, sapi <b>moo</b>.'},
     {t:'build',words:['I','have','a','cat.'],mean:'Aku punya seekor kucing.',showHTML:one(IC.cat)}]},
 {key:'shapes',en:'Shape Lagoon',idn:'Laguna Bentuk',topic:'Colors & shapes',c:'#8E5BD8',cb:'#EEE5FF',icon:()=>IC.starY,words:['circle','square','triangle','star','heart','red','blue','yellow','green'],
  rule:L2('Say the color first: a red circle, a blue square.','Sebut warna dulu, baru bentuk: a red circle (lingkaran merah), a blue square (persegi biru).'),
  Q:[{t:'listenPic',say:'triangle',opts:['circle','square','triangle','star']},
     {t:'listen',say:'green',opts:['blue','green','red','yellow']},
     {t:'match',pairs:['circle','star','heart']},
     {t:'read',show:'square',opts:['triangle','circle','square']},
     {t:'read',showHTML:one(shape('star',SHC.yellow)),ask:L2('What color is it?','Apa warnanya?'),opts:['red','yellow','blue'],ans:'yellow',ansMean:'kuning',note:'Bintangnya berwarna kuning: <b>yellow</b>.'},
     {t:'spell',word:'star',extra:['o','e']},
     {t:'paint',objs:[['circle','red'],['square','blue'],['triangle','yellow']],paints:['red','blue','yellow','green'],
      lines:[['The circle is red.','Lingkarannya merah.'],['The square is blue.','Perseginya biru.'],['The triangle is yellow.','Segitiganya kuning.']],
      ins:L2('Read and listen. Drag the paint to color the shapes.','Baca dan dengarkan. Seret cat untuk mewarnai bentuk.'),ansEN:'red circle · blue square · yellow triangle',note:'circle = lingkaran → <b>red</b>, square = persegi → <b>blue</b>, triangle = segitiga → <b>yellow</b>. Cat green tidak dipakai.'},
     {t:'listen',sentence:true,say:'It is a blue circle.',mean:'Itu lingkaran biru.',opts:['It is a red circle.','It is a blue square.','It is a blue circle.'],ans:'It is a blue circle.'},
     {t:'blank',text:'It is a red ___.',opts:['star','heart','circle'],ans:'heart',mean:'Itu hati berwarna merah.',showHTML:one(shape('heart',SHC.red)),note:'Bentuknya hati: <b>heart</b>. Jadi: It is a red heart.'},
     {t:'build',words:['The','star','is','yellow.'],mean:'Bintangnya kuning.',showHTML:one(shape('star',SHC.yellow))}]},
 {key:'numbers',en:'Number Cave',idn:'Gua Angka',topic:'Numbers 11–20',c:'#3D7BE0',cb:'#E0EBFF',icon:()=>numCard(15),words:NUMW.slice(10),
  rule:L2('eleven, twelve, thirteen, ... twenty. Thirteen ends with -teen.','11 sampai 19 diakhiri -teen (thirteen, fourteen). Hati-hati: fourteen (14) berbeda dengan forty (40).'),
  Q:[{t:'listenPic',say:'twelve',opts:['twenty','twelve','eleven','fifteen']},
     {t:'listen',say:'seventeen',opts:['eleven','nineteen','seventeen','thirteen']},
     {t:'match',pairs:['fourteen','sixteen','eighteen']},
     {t:'read',show:'twenty',opts:['twelve','two','twenty']},
     {t:'read',showHTML:()=>`<div class="bigpic row stars">${[...Array(13)].map(()=>G(IC.starY,40)).join('')}</div>`,ask:L2('How many stars?','Ada berapa bintang?'),opts:['three','thirteen','thirty'],ans:'thirteen',ansMean:'tiga belas',note:'Hitung: 10 bintang + 3 bintang = 13 = <b>thirteen</b>.'},
     {t:'spell',word:'twelve',extra:['a']},
     {t:'count',item:'starY',n:15,total:18,zone:'jar',say:'Put fifteen stars in the jar.',sayHTML:'Put <u>fifteen</u> stars in the jar.',sub:'Artinya: "Masukkan lima belas bintang ke toples."',ins:L2('Listen and do it. Drag the stars into the jar.','Dengarkan perintahnya, lalu seret bintang ke toples.'),counter:'Stars in the jar',ansEN:'fifteen stars',answerSay:'fifteen stars',note:'<b>fifteen</b> = lima belas. Hitung pelan-pelan bersama Polly sampai fifteen.'},
     {t:'listen',sentence:true,say:'I have fourteen pencils.',mean:'Aku punya empat belas pensil.',opts:['I have four pencils.','I have fourteen pencils.','I have forty pencils.'],ans:'I have fourteen pencils.'},
     {t:'blank',text:'ten, eleven, ___, thirteen',opts:['two','twenty','twelve'],ans:'twelve',mean:'sepuluh, sebelas, dua belas, tiga belas',showHTML:()=>`<div class="nline">${['10','11','?','13'].map(x=>`<span>${x}</span>`).join('')}</div>`,note:'Setelah eleven (11) adalah <b>twelve</b> (12).'},
     {t:'build',words:['I','see','twenty','birds.'],mean:'Aku melihat dua puluh burung.',showHTML:()=>`<div class="bigpic">${G(numCard(20),80)}${G(IC0.burung,90)}</div>`}]},
 {key:'food',en:'Food Market',idn:'Pasar Makanan',topic:'Food & drinks',c:'#E9801C',cb:'#FFEBD6',icon:()=>IC.bread,words:['apple','banana','orange','rice','bread','egg','milk','water','cake'],
  rule:L2('I eat rice. I drink milk. I like apples.','eat = makan, drink = minum, like = suka. Kita makan (eat) nasi dan minum (drink) susu.'),
  Q:[{t:'listenPic',say:'bread',opts:['cake','egg','bread','rice']},
     {t:'listen',say:'milk',opts:['water','milk','rice','orange']},
     {t:'match',pairs:['apple','egg','cake']},
     {t:'read',show:'rice',opts:['bread','milk','rice']},
     {t:'read',show:'water',opts:['water','milk','orange']},
     {t:'spell',word:'cake',extra:['o','i']},
     {t:'collect',zone:'lunch',items:[['f1','apple'],['f2','cake'],['f3','egg'],['f4','banana'],['f5','bread'],['f6','milk']],want:{apple:1,egg:1,bread:1},say:'Put an apple, an egg, and some bread in the lunch box.',sayHTML:'Put <u>an apple</u>, <u>an egg</u>, and <u>some bread</u> in the lunch box.',sub:'Artinya: "Masukkan apel, telur, dan roti ke kotak bekal."',ins:L2('Listen and do it. Pack the lunch box.','Dengarkan, lalu siapkan kotak bekal.'),ansEN:'an apple, an egg, and some bread',answerSay:'an apple, an egg, and some bread',note:'Yang disebut: <b>apple</b> (apel), <b>egg</b> (telur), <b>bread</b> (roti). Cake, banana, dan milk tidak disebut.',tray:'food'},
     {t:'listen',sentence:true,say:'I like bananas.',mean:'Aku suka pisang.',opts:['I like bread.','I like milk.','I like bananas.'],ans:'I like bananas.'},
     {t:'blank',text:'I drink ___.',opts:['bread','milk','egg'],ans:'milk',mean:'Aku minum susu.',showHTML:one(IC.g_milk),note:'Kita minum (<b>drink</b>) susu: <b>milk</b>. Roti dan telur dimakan, bukan diminum.'},
     {t:'build',words:['I','eat','rice','for','lunch.'],mean:'Aku makan nasi untuk makan siang.',showHTML:one(IC.bowl)}]},
 {key:'school',en:'School Castle',idn:'Kastel Sekolah',topic:'School things',c:'#5B5BD6',cb:'#E6E6FF',icon:()=>IC.book,words:['book','pencil','bag','ruler','eraser','chair','table'],
  rule:L2('in = di dalam, on = di atas, under = di bawah. The book is on the table.','in (di dalam), on (di atas), under (di bawah). Contoh: The book is on the table. (Bukunya di atas meja.)'),
  Q:[{t:'listenPic',say:'ruler',opts:['pencil','ruler','eraser','book']},
     {t:'listen',say:'chair',opts:['table','bag','chair','book']},
     {t:'match',pairs:['book','bag','eraser']},
     {t:'read',show:'pencil',opts:['ruler','chair','pencil']},
     {t:'read',show:'table',opts:['table','chair','bag']},
     {t:'spell',word:'book',extra:['a','e']},
     {t:'figure',fig:roomFig,ar:'200/150',spots:[['z_on',30,28,'on the table'],['z_under',30,76,'under the table'],['z_in',80,60,'in the bag']],items:[['t_book','book'],['t_pencil','pencil'],['t_eraser','eraser']],ans:{t_book:'z_on',t_pencil:'z_in',t_eraser:'z_under'},
      lines:[['Put the book on the table.','Taruh buku di atas meja.'],['Put the pencil in the bag.','Taruh pensil di dalam tas.'],['Put the eraser under the table.','Taruh penghapus di bawah meja.']],
      ins:L2('Read and listen. Drag each thing to the right place.','Baca dan dengarkan. Seret benda ke tempat yang benar.'),ansEN:'book on the table · pencil in the bag · eraser under the table',answerSay:'The book is on the table. The pencil is in the bag. The eraser is under the table.',note:'<b>on</b> = di atas, <b>in</b> = di dalam, <b>under</b> = di bawah.'},
     {t:'listen',sentence:true,say:'Open your book.',mean:'Buka bukumu.',opts:['Close your book.','Open your book.','Open your bag.'],ans:'Open your book.'},
     {t:'blank',text:'I write with a ___.',opts:['chair','bag','pencil'],ans:'pencil',mean:'Aku menulis dengan pensil.',showHTML:one(IC.pencil),note:'Kita menulis (<b>write</b>) dengan pensil: <b>pencil</b>.'},
     {t:'build',words:['This','is','my','ruler.'],mean:'Ini penggarisku.',showHTML:one(IC.ruler)}]},
 {key:'clothes',en:'Clothes Cove',idn:'Teluk Pakaian',topic:'Clothes',c:'#D9448A',cb:'#FFE0EF',icon:()=>IC.hat,words:['shirt','hat','shoes','socks','dress','pants'],
  rule:L2('Put on your hat. Take off your shoes.','put on = memakai, take off = melepas. Contoh: Put on your hat. (Pakai topimu.)'),
  Q:[{t:'listenPic',say:'hat',opts:['shirt','socks','hat','dress']},
     {t:'listen',say:'shoes',opts:['socks','pants','shoes','shirt']},
     {t:'match',pairs:['shirt','dress','socks']},
     {t:'read',show:'pants',opts:['hat','pants','shoes']},
     {t:'read',show:'shoes',opts:['socks','shirt','shoes']},
     {t:'spell',word:'hat',extra:['e','o']},
     {t:'figure',fig:()=>kidFig(false),ar:'200/240',spots:[['d_hat',50,6],['d_shirt',50,47],['d_pants',50,72],['d_shoes',50,95]],items:[['c_hat','hat'],['c_shirt','shirt'],['c_dress','dress'],['c_pants','pants'],['c_shoes','shoes']],ans:{c_hat:'d_hat',c_shirt:'d_shirt',c_pants:'d_pants',c_shoes:'d_shoes'},
      say:'Dress Budi. Put on his hat, shirt, pants, and shoes.',sub:'Artinya: "Pakaikan baju Budi: topi, kaos, celana, dan sepatu."',ins:L2('Listen and dress Budi.','Dengarkan, lalu pakaikan baju untuk Budi.'),ansEN:'hat · shirt · pants · shoes',answerSay:'hat, shirt, pants, shoes',note:'Topi (<b>hat</b>) di kepala, kaos (<b>shirt</b>) di badan, celana (<b>pants</b>) di kaki, sepatu (<b>shoes</b>) di telapak kaki. Gaun (<b>dress</b>) tidak disebut.'},
     {t:'listen',sentence:true,say:'Put on your hat.',mean:'Pakai topimu.',opts:['Take off your hat.','Put on your shoes.','Put on your hat.'],ans:'Put on your hat.'},
     {t:'blank',text:'My ___ is red.',opts:['shirt','hat','shoes'],ans:'shirt',mean:'Kaosku berwarna merah.',showHTML:one(IC.shirt),note:'Gambar menunjukkan kaos merah: <b>shirt</b>.'},
     {t:'build',words:['I','wear','a','yellow','hat.'],mean:'Aku memakai topi kuning.',showHTML:one(IC.hat)}]},
 {key:'actions',en:'Action Mountain',idn:'Gunung Aksi',topic:'Actions',c:'#6A9F2A',cb:'#E7F5D6',icon:()=>IC.jump,words:['run','jump','swim','sleep','eat','read'],
  rule:L2('I can run. I can jump. A fish can swim.','can = bisa. I can swim. (Aku bisa berenang.) I cannot fly. (Aku tidak bisa terbang.)'),
  Q:[{t:'listenPic',say:'swim',opts:['run','jump','swim','sleep']},
     {t:'listen',say:'jump',opts:['eat','jump','read','run']},
     {t:'match',pairs:['run','sleep','read']},
     {t:'read',show:'eat',opts:['swim','eat','sleep']},
     {t:'read',show:'fish',ask:L2('What can a fish do?','Apa yang bisa dilakukan ikan?'),opts:['read','swim','run'],ans:'swim',ansMean:'berenang',note:'Ikan bisa berenang: A fish can <b>swim</b>. Ikan tidak bisa membaca atau berlari.'},
     {t:'spell',word:'run',extra:['a','m']},
     {t:'sort',bins:[{id:'y',label:'can',sub:'bisa'},{id:'n',label:'cannot',sub:'tidak bisa'}],items:[['a1','swim','y'],['a2','run','n'],['a3','eat','y'],['a4','read','n'],['a5','jump','n']],
      ins:L2('A fish can... or cannot...? Sort the actions.','Ikan bisa atau tidak bisa? Pilah kegiatannya.'),ansEN:'A fish can swim and eat · A fish cannot run, read, or jump',answerSay:'A fish can swim. A fish can eat. A fish cannot run. A fish cannot read. A fish cannot jump.',note:'Ikan bisa berenang (<b>swim</b>) dan makan (<b>eat</b>). Ikan tidak bisa berlari, membaca, atau melompat.'},
     {t:'listen',sentence:true,say:'I can jump.',mean:'Aku bisa melompat.',opts:['I can run.','I can jump.','I can swim.'],ans:'I can jump.'},
     {t:'blank',text:'I ___ at night.',opts:['swim','run','sleep'],ans:'sleep',mean:'Aku tidur di malam hari.',showHTML:one(IC.sleep),note:'Malam hari kita tidur: <b>sleep</b>.'},
     {t:'build',words:['I','can','swim.'],mean:'Aku bisa berenang.',showHTML:one(IC.swim)}]},
];

/* ---------- contoh tutorial (kata berbeda dari soal) ---------- */
const DEMO={
 listenPic:{t:'listenPic',say:'ball',opts:['car','ball','sun','tree']},
 listen:{t:'listen',say:'sun',opts:['car','kite','sun','boat']},
 read:{t:'read',show:'tree',opts:['boat','tree','kite']},
 match:{t:'match',pairs:['ball','car','sun']},
 spell:{t:'spell',word:'sun',extra:['a','b']},
 blank:{t:'blank',text:'I play with a ___.',opts:['tree','ball','sun'],ans:'ball',mean:'Aku bermain dengan bola.',showHTML:one(IC.ballr)},
 build:{t:'build',words:['I','see','the','sun.'],mean:'Aku melihat matahari.',showHTML:one(IC.sun)},
 sort:{t:'sort',bins:[{id:'s',label:'in the sky',sub:'di langit'},{id:'g',label:'on the ground',sub:'di tanah'}],items:[['d1','sun','s'],['d2','car','g'],['d3','kite','s'],['d4','tree','g']],ins:L2('Sort them: in the sky or on the ground?','Pilah: di langit atau di tanah?')},
 count:{t:'count',item:'ballr',n:3,total:5,zone:'box',say:'Put three balls in the box.',sayHTML:'Put <u>three</u> balls in the box.',ins:L2('Listen and do it.','Dengarkan perintahnya.'),counter:'Balls in the box'},
 collect:{t:'collect',zone:'box',items:[['d1','ball'],['d2','sun'],['d3','car'],['d4','ball'],['d5','kite']],want:{ball:2,car:1},say:'Put two balls and a car in the box.',sayHTML:'Put <u>two balls</u> and <u>a car</u> in the box.',ins:L2('Listen and do it.','Dengarkan perintahnya.')},
 paint:{t:'paint',objs:[['star','yellow'],['heart','red']],paints:['red','yellow','blue'],lines:[['The star is yellow.','Bintangnya kuning.'],['The heart is red.','Hatinya merah.']],ins:L2('Read and color.','Baca dan warnai.')},
 figure:{t:'figure',fig:treeFig,ar:'200/170',spots:[['z_up',50,26,'in the tree'],['z_dn',28,86,'under the tree']],items:[['t_kite','kite'],['t_ball','ball']],ans:{t_kite:'z_up',t_ball:'z_dn'},lines:[['The kite is in the tree.','Layang-layang ada di pohon.'],['The ball is under the tree.','Bola ada di bawah pohon.']],ins:L2('Read and put them in the right place.','Baca dan taruh di tempat yang benar.')},
};

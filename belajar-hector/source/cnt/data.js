const drop=(c,s)=>`<ellipse cy="17" rx="13" ry="3" fill="${c}" opacity=".45"/><path d="M0 -18 C9 -5 13 1 13 6 a13 13 0 0 1 -26 0 C-13 1 -9 -5 0 -18Z" fill="${c}" stroke="${s}" stroke-width="1.6"/><ellipse cx="-5" cy="3" rx="3" ry="5.5" fill="#fff" opacity=".65"/>`;
const grains=(pts)=>pts.map(([x,y,r])=>`<ellipse cx="${x}" cy="${y}" rx="2.6" ry="1.3" fill="#fff" stroke="#CFC6B0" stroke-width=".6" transform="rotate(${r} ${x} ${y})"/>`).join('');
const glass=c=>`<path d="M-11 -16 h22 l-3 32 h-16z" fill="#EAF6FB" stroke="#8FB3C4" stroke-width="1.6"/><path d="M-10 -5 h20 l-2.2 21 h-15.6z" fill="${c}"/><path d="M-7 -13 l1.5 25" stroke="#fff" stroke-width="2.4" opacity=".8" stroke-linecap="round"/>`;
const IC={...IC0,
 egg:`<ellipse cy="2" rx="11.5" ry="15" fill="#FFF4E0" stroke="#CDB48C" stroke-width="1.6"/><ellipse cx="-4" cy="-4" rx="3" ry="5" fill="#fff"/>`,
 cookie:`<circle r="15" fill="#D9A05B" stroke="#A86B2D" stroke-width="1.6"/><circle r="15" fill="url(#xHi)" opacity=".5"/>${[[-6,-6],[5,-7],[-1,1],[7,4],[-7,6],[1,9]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="2.3" fill="#5A3416"/>`).join('')}`,
 candy:`<path d="M-9 0 l-10 -8 v16z M9 0 l10 -8 v16z" fill="#F2557A" stroke="#B8284F" stroke-width="1.2"/><circle r="10" fill="#F2557A" stroke="#B8284F" stroke-width="1.2"/><path d="M-5 -8 q6 8 0 16 M2 -10 q6 10 0 20" stroke="#fff" stroke-width="2.4" fill="none"/>`,
 orangef:`<circle cy="2" r="15" fill="#F58A1F"/><circle cy="2" r="15" fill="url(#xHi)"/>${[[-6,-2],[4,-5],[6,6],[-4,8],[0,1]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r=".9" fill="#C8650A"/>`).join('')}<path d="M0 -13 v-3" stroke="#6B4220" stroke-width="2"/><path d="M1 -14 q7 -8 13 -3 q-6 6 -13 3z" fill="#3FA34D"/>`,
 water:drop('#5BB8F0','#2A7FC0'),milk:drop('#FFFFFF','#9FB0BC'),juice:drop('#FFA43A','#D07812'),honey:drop('#F2B21B','#A9700A'),
 rice:`<path d="M-18 15 Q-12 -9 0 -12 Q12 -9 18 15Z" fill="#FBF7EC" stroke="#CFC6B0" stroke-width="1.6"/>${grains([[-8,8,20],[-2,2,-30],[5,9,10],[9,3,-20],[0,-6,40],[-10,13,-10],[12,12,30],[3,14,-40],[-5,-2,0]])}`,
 sugar:`${[[-12,10],[-4,10],[4,10],[12,10],[-8,2],[0,2],[8,2],[-4,-6],[4,-6],[0,-14]].map(([x,y])=>`<rect x="${x-4}" y="${y-4}" width="8" height="8" rx="1.5" fill="#FFFFFF" stroke="#A9B8C6" stroke-width="1.2"/>`).join('')}`,
 g_milk:glass('#FFFFFF'),g_water:glass('#7DCBF5'),g_juice:glass('#FFA43A'),
 bottle:`<rect x="-4.5" y="-20" width="9" height="5" rx="1.5" fill="#3D7BE0"/><path d="M-4 -15 h8 q9 4 9 12 v17 q0 4 -4 4 h-18 q-4 0 -4 -4 v-17 q0 -8 9 -12z" fill="#CFEFFF" stroke="#4E9AC6" stroke-width="1.6"/><path d="M-12 2 h24 v8 h-24z" fill="#3D7BE0"/><path d="M-6 -4 v18" stroke="#fff" stroke-width="2" opacity=".7"/>`,
 bowl:`<path d="M-16 -1 q16 -16 32 0z" fill="#FBF7EC" stroke="#CFC6B0" stroke-width="1.4"/>${grains([[-6,-5,20],[2,-8,-30],[8,-4,10],[-1,-3,40]])}<path d="M-18 -1 h36 q-2 17 -18 17 q-16 0 -18 -17z" fill="#E5484D" stroke="#A8282D" stroke-width="1.4"/><path d="M-15 6 h30" stroke="#FFD5D5" stroke-width="1.6"/>`,
 sugarbag:`<path d="M-13 -13 h26 l2 30 h-30z" fill="#F4EBDD" stroke="#A9935F" stroke-width="1.6"/><path d="M-13 -13 l3 -5 h20 l3 5" fill="#E6D8BF" stroke="#A9935F" stroke-width="1.4"/><rect x="-11" y="-1" width="22" height="9" rx="2" fill="#3D7BE0"/><text y="5.8" text-anchor="middle" font-size="6.6" font-family="Fredoka,system-ui,sans-serif" font-weight="700" fill="#fff">SUGAR</text>`,
 jar:`<rect x="-12" y="-17" width="24" height="7" rx="2" fill="#B5783F" stroke="#7A4A22"/><path d="M-13 -10 h26 v22 q0 5 -5 5 h-16 q-5 0 -5 -5z" fill="#F2B21B" stroke="#A9700A" stroke-width="1.6"/><path d="M-12 -10 q4 6 7 0 q3 7 7 0 q3 5 6 0" fill="#B5783F" opacity=".5"/><rect x="-8" y="0" width="16" height="8" rx="2" fill="#FFF3C4"/>`,
 jbox:`<path d="M-11 -11 h22 v28 h-22z" fill="#FFA43A" stroke="#C9700F" stroke-width="1.6"/><path d="M-11 -11 l4 -5 h22 l-4 5z" fill="#FFC26E" stroke="#C9700F" stroke-width="1.2"/><path d="M6 -16 l3 -6" stroke="#E5484D" stroke-width="2.5" stroke-linecap="round"/><circle cy="4" r="6" fill="#F58A1F" stroke="#fff" stroke-width="1.6"/>`,
};
const sm=(ic,x,y,s=.5)=>`<g transform="translate(${x} ${y}) scale(${s})">${ic}</g>`;
const W={};
const add=(en,id,pic)=>W[en]={en,id,pic};
[['apple','apel',()=>apple()],['egg','telur',()=>IC.egg],['cookie','kue kering',()=>IC.cookie],['banana','pisang',()=>IC.pisang],['candy','permen',()=>IC.candy],['orange','jeruk',()=>IC.orangef],
 ['water','air',()=>IC.water],['milk','susu',()=>IC.milk],['juice','jus',()=>IC.juice],['rice','nasi',()=>IC.rice],['sugar','gula',()=>IC.sugar],['honey','madu',()=>IC.honey],
 ['countable','bisa dihitung',()=>sm(apple(),-10,-6,.45)+sm(apple(),9,-6,.45)+sm(apple(),0,9,.45)],['uncountable','tidak bisa dihitung',()=>sm(IC.water,-8,-2,.6)+sm(IC.rice,9,6,.55)],
 ['an apple','sebuah apel',()=>apple()],['an egg','sebutir telur',()=>IC.egg],['an orange','sebuah jeruk',()=>IC.orangef],['a banana','sebuah pisang',()=>IC.pisang],['a cookie','sebuah kue kering',()=>IC.cookie],['some milk','sedikit susu',()=>IC.g_milk],
 ['a glass of milk','segelas susu',()=>IC.g_milk],['a bottle of water','sebotol air',()=>IC.bottle],['a bowl of rice','semangkuk nasi',()=>IC.bowl],['a bag of sugar','sekantong gula',()=>IC.sugarbag],['a jar of honey','sestoples madu',()=>IC.jar],['a box of juice','sekotak jus',()=>IC.jbox],
].forEach(([e,i,f])=>add(e,i,f));
const pic=(k,s=56,c='')=>G(W[k].pic(),s,c);
const row=(ic,n,s=64)=>()=>`<div class="bigpic row">${[...Array(n)].map(()=>G(ic,s)).join('')}</div>`;
const NUMW=['one','two','three','four','five','six','seven','eight','nine','ten'];
const CU=[{id:'c',label:'Countable',sub:'bisa dihitung'},{id:'u',label:'Uncountable',sub:'tidak bisa dihitung'}];

/* ---------- data pulau ---------- */
const ISL=[
 {key:'market',art:'fruits',en:'Fruit Market',idn:'Pasar Buah',topic:'Countable',c:'#E9801C',cb:'#FFEBD6',icon:()=>apple(),words:['apple','egg','cookie','banana','candy','orange'],
  rule:['We can count apples: one apple, two apples, three apples.','Benda yang bisa dihitung disebut countable. Kalau lebih dari satu, tambahkan -s: apple → apples.'],
  Q:[{t:'listen',say:'egg',opts:['apple','egg','cookie','candy']},
     {t:'match',pairs:['apple','cookie','candy']},
     {t:'read',showHTML:row(apple(),3),ask:['How many apples? Choose the right words.','Ada berapa apel? Pilih jawaban yang benar.'],opts:['three apple','three apples','one apples'],ans:'three apples',ansMean:'tiga apel',note:'Lebih dari satu apel, tambahkan <b>-s</b>: one apple, two apple<b>s</b>, three apple<b>s</b>.'},
     {t:'spell',word:'egg',extra:['a','k']},
     {t:'count',item:'egg',n:4,total:7,zone:'basket',say:'Put four eggs in the basket.',sayHTML:'Put <u>four</u> eggs in the basket.',sub:'Artinya: "Masukkan empat telur ke keranjang."',ins:['Listen and do it. Drag the eggs into the basket.','Dengarkan perintahnya, lalu seret telur ke keranjang.'],counter:'Eggs in the basket',note:'<b>four eggs</b> = empat telur. Telur bisa dihitung: one egg, two eggs, three eggs, four eggs!',ansEN:'four eggs',answerSay:'one egg, two eggs, three eggs, four eggs',tray:'eggs'},
     {t:'build',words:['I','have','two','cookies.'],mean:'Aku punya dua kue kering.',showHTML:row(IC.cookie,2,90)}]},
 {key:'milk',art:'colors',en:'Milk Falls',idn:'Air Terjun Susu',topic:'Uncountable',c:'#2F8FD0',cb:'#DDF0FF',icon:()=>IC.milk,words:['water','milk','juice','rice','sugar','honey'],
  rule:['We cannot count water, milk, or rice. We say some water.','Benda yang tidak bisa dihitung disebut uncountable. Tidak pakai -s dan tidak pakai a atau an.'],
  Q:[{t:'listen',say:'milk',opts:['water','milk','juice','honey']},
     {t:'match',pairs:['water','rice','honey']},
     {t:'read',show:'sugar',opts:['rice','sugar','milk']},
     {t:'spell',word:'rice',extra:['s','a']},
     {t:'read',showHTML:()=>`<div class="bigpic">${G(IC.g_water,130)}</div>`,ask:['Which one is correct?','Mana yang benar?'],opts:['two waters','some water','a water'],ans:'some water',ansMean:'sedikit air',note:'Air tidak bisa dihitung satu per satu. Kita bilang <b>some water</b>, bukan "two waters" atau "a water".'},
     {t:'build',words:['I','drink','some','milk.'],mean:'Aku minum susu.',showHTML:()=>`<div class="bigpic">${G(IC.g_milk,110)}</div>`}]},
 {key:'ship',art:'ship',en:'Sorting Ship',idn:'Kapal Pemilah',topic:'Count it or not?',c:'#1E8E7E',cb:'#D8F3EE',icon:()=>sm(apple(),-7,-4,.55)+sm(IC.water,8,4,.55),words:['countable','uncountable'],
  rule:['Countable: we can count it. Uncountable: we cannot count it.','Countable = bisa dihitung (apple, egg). Uncountable = tidak bisa dihitung (water, rice).'],
  Q:[{t:'sort',bins:CU,items:[['i1','apple','c'],['i2','water','u'],['i3','egg','c'],['i4','rice','u'],['i5','cookie','c'],['i6','milk','u']],ansEN:'Countable: apple, egg, cookie · Uncountable: water, rice, milk',answerSay:'Countable: apple, egg, cookie. Uncountable: water, rice, milk.',note:'Apel, telur, dan kue kering bisa dihitung satu per satu. Air, nasi, dan susu tidak bisa.'},
     {t:'read',show:'milk',ask:['Can we count milk?','Apakah susu bisa dihitung?'],opts:['Yes, we can.','No, we cannot.'],ans:'No, we cannot.',ansMean:'Tidak bisa.',note:'Susu adalah cairan. Kita tidak bisa bilang "satu susu, dua susu". Milk is <b>uncountable</b>.'},
     {t:'read',showHTML:()=>`<div class="bigpic row">${['apple','juice','cookie'].map(k=>pic(k,80)).join('')}</div>`,ask:['Which one is uncountable?','Mana yang tidak bisa dihitung?'],opts:['apple','juice','cookie'],ans:'juice',ansMean:'jus',note:'Jus adalah minuman cair, jadi <b>uncountable</b>. Apple dan cookie bisa dihitung.'},
     {t:'sort',bins:CU,items:[['j1','sugar','u'],['j2','banana','c'],['j3','honey','u'],['j4','candy','c'],['j5','juice','u'],['j6','orange','c']],ansEN:'Countable: banana, candy, orange · Uncountable: sugar, honey, juice',answerSay:'Countable: banana, candy, orange. Uncountable: sugar, honey, juice.',note:'Pisang, permen, dan jeruk bisa dihitung. Gula, madu, dan jus tidak bisa.'},
     {t:'read',showHTML:()=>`<div class="bigpic row">${['sugar','egg','water'].map(k=>pic(k,80)).join('')}</div>`,ask:['Which one is countable?','Mana yang bisa dihitung?'],opts:['sugar','egg','water'],ans:'egg',ansMean:'telur',note:'Telur bisa dihitung: one egg, two eggs. Gula dan air tidak bisa.'},
     {t:'build',words:['We','can','count','eggs.'],mean:'Kita bisa menghitung telur.',showHTML:row(IC.egg,3,70)}]},
 {key:'bakery',art:'bakery',en:'Bakery Bay',idn:'Teluk Roti',topic:'a · an · some',c:'#C0533A',cb:'#FFE4DB',icon:()=>IC.cookie,words:['an apple','an egg','an orange','a banana','a cookie','some milk'],
  rule:['Use an before a, e, i, o, u: an apple, an egg. Use a for other letters: a cookie. Use some for uncountable: some milk.','Pakai an sebelum huruf vokal (a, i, u, e, o). Pakai a untuk huruf lain. Pakai some untuk benda yang tidak bisa dihitung.'],
  Q:[{t:'read',show:'egg',ask:['Choose the right words.','Pilih jawaban yang benar.'],opts:['a egg','an egg','two egg'],ans:'an egg',ansMean:'sebutir telur',note:'<b>egg</b> dimulai huruf vokal <b>e</b>, jadi pakai <b>an</b>: an egg.'},
     {t:'read',show:'cookie',ask:['Choose the right words.','Pilih jawaban yang benar.'],opts:['an cookie','a cookie','two cookie'],ans:'a cookie',ansMean:'sebuah kue kering',note:'<b>cookie</b> dimulai huruf <b>c</b>, bukan huruf vokal, jadi pakai <b>a</b>: a cookie.'},
     {t:'sort',bins:[{id:'a',label:'a',sub:'a banana'},{id:'an',label:'an',sub:'an apple'},{id:'s',label:'some',sub:'some milk'}],items:[['k1','banana','a'],['k2','apple','an'],['k3','milk','s'],['k4','cookie','a'],['k5','orange','an'],['k6','water','s']],
      ins:['Sort them: a, an, or some?','Pilah: pakai a, an, atau some?'],ansEN:'a banana, a cookie · an apple, an orange · some milk, some water',answerSay:'a banana, a cookie. an apple, an orange. some milk, some water.',note:'<b>an</b> untuk apple dan orange (huruf vokal). <b>a</b> untuk banana dan cookie. <b>some</b> untuk milk dan water karena tidak bisa dihitung.'},
     {t:'read',showHTML:()=>`<div class="bigpic">${G(IC.g_juice,130)}</div>`,ask:['Choose the right words.','Pilih jawaban yang benar.'],opts:['a juice','an juice','some juice'],ans:'some juice',ansMean:'sedikit jus',note:'Jus tidak bisa dihitung, jadi pakai <b>some</b>: some juice.'},
     {t:'listen',say:'I have an orange.',mean:'Aku punya sebuah jeruk.',sentence:true,opts:['a orange','an orange','some orange'],ans:'an orange',ansEN:'an orange',ins:['Listen. What do you hear?','Dengarkan. Kata apa yang kamu dengar?'],note:'"I have <b>an orange</b>." artinya "Aku punya sebuah jeruk." <b>orange</b> dimulai huruf vokal <b>o</b>, jadi pakai <b>an</b>.'},
     {t:'build',words:['I','want','an','apple.'],mean:'Aku mau sebuah apel.',showHTML:()=>`<div class="bigpic">${G(apple(),110)}</div>`}]},
 {key:'picnic',art:'picnic',en:'Picnic Hill',idn:'Bukit Piknik',topic:'a glass of…',c:'#6A9F2A',cb:'#E7F5D6',icon:()=>IC.g_milk,words:['a glass of milk','a bottle of water','a bowl of rice','a bag of sugar','a jar of honey','a box of juice'],
  rule:['We cannot count milk, but we can count the glass: a glass of milk, two glasses of milk.','Susu tidak bisa dihitung, tapi wadahnya bisa: a glass of milk (segelas susu).'],
  Q:[{t:'match',pairs:['a glass of milk','a bowl of rice','a bottle of water'],ins:['Drag the words to the right picture.','Seret kata ke gambar yang cocok.']},
     {t:'read',show:'a jar of honey',ask:['What is this? Choose the right words.','Ini apa? Pilih jawaban yang benar.'],opts:['a glass of honey','a jar of honey','a bowl of honey'],ans:'a jar of honey',ansMean:'sestoples madu',note:'Madu ada di dalam toples (jar). Kita bisa menghitung toplesnya: <b>a jar of honey</b>.'},
     {t:'listen',say:'a bag of sugar',opts:['a bowl of sugar','a bag of sugar','a bottle of sugar'],note:'<b>a bag of sugar</b> artinya sekantong gula.'},
     {t:'build',words:['I','want','a','glass','of','juice.'],mean:'Aku mau segelas jus.',showHTML:()=>`<div class="bigpic">${G(IC.g_juice,100)}</div>`},
     {t:'collect',zone:'mat',items:[['p1','apple'],['p2','a bottle of water'],['p3','apple'],['p4','a glass of milk'],['p5','egg'],['p6','apple']],want:{apple:2,'a glass of milk':1},
      say:'Put two apples and a glass of milk on the mat.',sayHTML:'Put <u>two apples</u> and <u>a glass of milk</u> on the mat.',sub:'Artinya: "Taruh dua apel dan segelas susu di atas tikar."',
      ins:['Listen and do it. Drag the food to the picnic mat.','Dengarkan perintahnya, lalu seret makanan ke tikar piknik.'],ansEN:'two apples and a glass of milk',answerSay:'two apples and a glass of milk',note:'<b>two apples</b> = dua apel (pakai -s). <b>a glass of milk</b> = segelas susu.',tray:'food'},
     {t:'read',showHTML:row(IC.bottle,2,100),ask:['Which one is correct?','Mana yang benar?'],opts:['two waters','two bottles of water','two water'],ans:'two bottles of water',ansMean:'dua botol air',note:'Air tidak bisa dihitung, tapi botolnya bisa! two bottle<b>s</b> of water.'}]},
];

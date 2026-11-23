/* ---------- 20 soal laut ---------- */
function octo(cx,cy,c='#F2708A',s=1){return `<g transform="translate(${cx} ${cy}) scale(${s})">${[-15,-6,4,13].map((x,i)=>`<path d="M${x} 6 q${i%2?5:-5} 12 ${i%2?-2:2} 22" stroke="${c}" stroke-width="6" fill="none" stroke-linecap="round"/>`).join('')}<ellipse cx="0" cy="-6" rx="20" ry="18" fill="${c}"/><circle cx="-7" cy="-8" r="5" fill="#fff"/><circle cx="7" cy="-8" r="5" fill="#fff"/><circle cx="-6" cy="-7" r="2.5" fill="#1B1B1B"/><circle cx="8" cy="-7" r="2.5" fill="#1B1B1B"/><path d="M-5 2 q5 4 10 0" stroke="#7A2338" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="-13" cy="-1" r="3" fill="#FFB3C1" opacity=".8"/><circle cx="13" cy="-1" r="3" fill="#FFB3C1" opacity=".8"/></g>`}
function fish(cx,cy,c,s=1){return `<g transform="translate(${cx} ${cy}) scale(${s})"><path d="M-16 0 L-28 -10 L-26 0 L-28 10 Z" fill="${c}" stroke="rgba(0,0,0,.3)" stroke-width="1.5"/><path d="M-6 -9 Q0 -21 7 -8 Z" fill="${c}" stroke="rgba(0,0,0,.3)" stroke-width="1.5"/><path d="M-18 0 Q-4 -14 14 0 Q-4 14 -18 0 Z" fill="${c}" stroke="rgba(0,0,0,.3)" stroke-width="1.5"/><path d="M-6 -8 Q-2 0 -6 8" stroke="#fff" stroke-width="2.5" fill="none" opacity=".7"/><circle cx="7" cy="-2" r="2.8" fill="#fff"/><circle cx="7.8" cy="-2" r="1.4" fill="#111"/></g>`}
function shellN(cx,cy,c,n){return `<path d="M${cx} ${cy+16} L${cx-17} ${cy-4} Q${cx-13} ${cy-17} ${cx} ${cy-17} Q${cx+13} ${cy-17} ${cx+17} ${cy-4} Z" fill="${c}" stroke="rgba(0,0,0,.3)" stroke-width="1.5"/><path d="M${cx} ${cy+16} L${cx-9} ${cy-15} M${cx} ${cy+16} L${cx+9} ${cy-15}" stroke="rgba(0,0,0,.18)" stroke-width="1.5"/>`+(n!==undefined?`<circle cx="${cx}" cy="${cy-3}" r="9.5" fill="#fff" opacity=".92"/>`+T(cx,cy-3,n,'t','style="fill:#172041;font-size:12px"'):'')}
function diver(cx,cy,c,s=1){return `<g transform="translate(${cx} ${cy}) scale(${s})"><rect x="-14" y="7" width="28" height="24" rx="10" fill="${c}"/><circle cx="0" cy="-6" r="14" fill="#E8B88A"/><path d="M-14 -9 a14 14 0 0 1 28 0 q-14 -6 -28 0z" fill="#2A1A10"/><rect x="-11" y="-11" width="22" height="9" rx="4" fill="#9EDCF5" stroke="#1B4B66" stroke-width="2"/><path d="M12 -8 v-14 h5" stroke="#F2A600" stroke-width="3" fill="none"/><path d="M-4 2 q4 3 8 0" stroke="#2A1A10" stroke-width="1.6" fill="none"/></g>`}
function island(cx,cy){return `<ellipse cx="${cx}" cy="${cy+12}" rx="24" ry="9" fill="#F4D58D" stroke="#C9A24D" stroke-width="1.5"/><path d="M${cx} ${cy+10} q-3 -12 2 -24" stroke="#8B5A2B" stroke-width="3.5" fill="none"/><path d="M${cx+2} ${cy-14} q-14 -6 -20 4 M${cx+2} ${cy-14} q14 -6 20 4 M${cx+2} ${cy-14} q-4 -12 -14 -12 M${cx+2} ${cy-14} q6 -12 16 -10" stroke="#3FA34D" stroke-width="4" fill="none" stroke-linecap="round"/>`}
function bottle(cx,cy){return `<g transform="translate(${cx} ${cy}) rotate(-25)"><rect x="-8" y="-14" width="16" height="26" rx="6" fill="#BDEFE8" stroke="#2E8B82" stroke-width="2" opacity=".95"/><rect x="-4" y="-21" width="8" height="8" rx="2" fill="#A0703F"/><rect x="-5" y="-6" width="10" height="12" rx="1" fill="#FFF7DC"/></g>`}
function sub(cx,cy,s=1){return `<g transform="translate(${cx} ${cy}) scale(${s})"><rect x="-4" y="-22" width="4" height="10" fill="#E0A100"/><rect x="-4" y="-24" width="10" height="4" rx="2" fill="#E0A100"/><ellipse cx="0" cy="0" rx="22" ry="13" fill="#F5C518" stroke="#B88400" stroke-width="2"/><rect x="-6" y="-17" width="14" height="7" rx="3" fill="#F5C518" stroke="#B88400" stroke-width="2"/><circle cx="-7" cy="0" r="5" fill="#9EDCF5" stroke="#B88400" stroke-width="2"/><circle cx="7" cy="0" r="5" fill="#9EDCF5" stroke="#B88400" stroke-width="2"/><path d="M-22 0 l-7 -6 v12 z" fill="#E0A100"/></g>`}
function chest(cx,cy,s=1){return `<g transform="translate(${cx} ${cy}) scale(${s})"><rect x="-17" y="-6" width="34" height="20" rx="3" fill="#A0703F" stroke="#5E3A1E" stroke-width="2"/><path d="M-17 -6 Q0 -22 17 -6 Z" fill="#B5763F" stroke="#5E3A1E" stroke-width="2"/><rect x="-3" y="-6" width="6" height="8" rx="1" fill="#F5C518"/><circle cx="-8" cy="-14" r="2" fill="#FFF3A0"/><circle cx="7" cy="-15" r="2.4" fill="#FFF3A0"/></g>`}
function crab(cx,cy,s=1){return `<g transform="translate(${cx} ${cy}) scale(${s})"><path d="M-14 6 l-8 8 M-10 9 l-5 9 M14 6 l8 8 M10 9 l5 9" stroke="#C0392B" stroke-width="3" stroke-linecap="round"/><path d="M-16 -2 q-12 -6 -10 -16 q6 2 6 8 M16 -2 q12 -6 10 -16 q-6 2 -6 8" stroke="#E74C3C" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="2" rx="17" ry="11" fill="#E74C3C"/><line x1="-5" y1="-8" x2="-6" y2="-15" stroke="#C0392B" stroke-width="2"/><line x1="5" y1="-8" x2="6" y2="-15" stroke="#C0392B" stroke-width="2"/><circle cx="-6" cy="-16" r="3.5" fill="#fff"/><circle cx="6" cy="-16" r="3.5" fill="#fff"/><circle cx="-6" cy="-16" r="1.6" fill="#111"/><circle cx="6" cy="-16" r="1.6" fill="#111"/></g>`}
function pearl(cx,cy,n,hot){return `${hot?`<circle cx="${cx}" cy="${cy}" r="21" fill="#FFD84D" opacity=".45" class="glow"/>`:''}<circle cx="${cx}" cy="${cy}" r="15" fill="#F6F2EA" stroke="#B9B2A3" stroke-width="2"/><circle cx="${cx-5}" cy="${cy-5}" r="4" fill="#fff"/>`+T(cx,cy+1,n,'t','style="fill:#5B5446;font-size:12px"')}
function arrowDefs(id){return `<defs><marker id="${id}" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--muted)"/></marker></defs>`}
const SC=['#FF6F59','#3D8BE0','#F5A623','#8E6BD8','#13B5A6','#FF9F43','#F2708A','#3FA34D'];
const sym3=t=>symIcon(t,26);

const Q=[
/* 1 */{judul:'Sortir Kerang Warna-warni',konsep:'Klasifikasi',tingkat:'Mudah',
 cerita:'Profesor Lina menemukan 8 kerang bernomor. Oki si gurita harus memasukkan setiap kerang ke keranjang yang tepat dengan mengikuti <b>aturan pemilah</b>.',
 aturan:['Tanya dulu: apakah nomornya <b>genap</b>? Jika ya, masuk <b>keranjang A</b>.','Jika ganjil, tanya lagi: apakah nomornya <b>lebih dari 5</b>? Jika ya, masuk <b>keranjang B</b>.','Kerang ganjil yang tidak lebih dari 5 masuk <b>keranjang C</b>.'],
 N:[3,8,7,1,10,9,6,2],
 sc(nums,place){const bx={A:90,B:250,C:410},cnt={A:0,B:0,C:0};let s='';
  ['A','B','C'].forEach(b=>{const x=bx[b];s+=`<path d="M${x-72} 168 L${x+72} 168 L${x+60} 252 L${x-60} 252 Z" fill="#C98A4B" stroke="#7A4A2A" stroke-width="2"/><path d="M${x-68} 196 H${x+68} M${x-64} 224 H${x+64}" stroke="#A86B35" stroke-width="3"/>`+T(x,242,'Keranjang '+b,'t','style="fill:#fff;font-size:13px"')});
  nums.forEach((n,i)=>{const p=place[i];let x,y;if(p){const k=cnt[p]++;x=bx[p]-48+k*32;y=180}else{x=40+i*60;y=55}s+=`<g data-k="s${i}" data-in="${['drop','spin','zoom','up'][i%4]}">${shellN(x,y,SC[i%8],n)}</g>`});
  return svgw(500,260,s,520)},
 visual(){return this.sc(this.N,{})},
 demo(){const N=[4,7];return [[this.sc(N,{}),'Contoh: ada dua kerang, nomor 4 dan 7. Masuk ke keranjang mana?'],[this.sc(N,{0:'A'}),'4 adalah angka <b>genap</b>, jadi langsung masuk keranjang A.'],[this.sc(N,{0:'A',1:'B'}),'7 ganjil. Apakah 7 lebih dari 5? <b>Ya!</b> Jadi 7 masuk keranjang B.']]},
 tanya:'Keranjang mana yang berisi kerang <mark>paling banyak</mark>?',
 opsi:['Keranjang A','Keranjang B','Keranjang C','Semua sama banyak'],jawab:0,
 bahas(){const N=this.N,P1={1:'A',4:'A',6:'A',7:'A'},P2={...P1,2:'B',5:'B'},P3={...P2,0:'C',3:'C'};return [[this.sc(N,{}),'Kita periksa setiap kerang dengan aturan pemilah.'],[this.sc(N,P1),'Kerang genap: 8, 10, 6, dan 2 masuk keranjang A. Ada <b>4</b> kerang.'],[this.sc(N,P2),'Ganjil dan lebih dari 5: 7 dan 9 masuk keranjang B. Ada 2 kerang.'],[this.sc(N,P3),'Sisanya, 3 dan 1, masuk keranjang C. Jadi keranjang <b>A</b> paling banyak!']]},
 info:'Memilah benda dengan beberapa pertanyaan berurutan disebut <b>klasifikasi</b>. Kantor pos memilah surat, dan komputer memilah e-mail ke folder "penting" atau "spam" dengan aturan seperti ini.',kunci:'klasifikasi, aturan bersyarat'},

/* 2 */{judul:'Siulan Lumba-lumba',konsep:'Kode',tingkat:'Mudah',
 cerita:'Lumba-lumba berbicara dengan siulan <b>pendek</b> (●) dan siulan <b>panjang</b> (▬). Oki mencatat kamus siulan mereka.',
 aturan:['Ikan = ● ●. Kerang = ● ▬. Udang = ▬.','Baca siulan dari kiri ke kanan.','Setiap kata dari kamus dipakai utuh, tidak boleh dipotong.'],
 dict(){return `<div class="chips"><span class="chip">Ikan = ● ●</span><span class="chip">Kerang = ● ▬</span><span class="chip">Udang = ▬</span></div>`},
 code(msg,groups=[]){const GC=['#FF6F59','#13B5A6','#8E6BD8'],grp=i=>groups.findIndex(([a,l])=>i>=a&&i<a+l);
  return this.dict()+`<div class="tiles">${[...msg].map((c,i)=>{const g=grp(i);return `<div class="tile" data-k="m${i}" data-s="${g}" style="${g>=0?`background:${GC[g]};color:#fff;border-color:${GC[g]}`:''}">${c}</div>`}).join('')}</div><div class="arw">↓</div><div class="chips" style="min-height:44px">${groups.map(([a,l,w],gi)=>`<span class="chip" data-k="w${gi}" data-in="zoom" style="background:${GC[gi]};color:#fff;border-color:${GC[gi]}">${w}</span>`).join('')}</div>`},
 visual(){return this.code('●▬▬●●')},
 demo(){const m='▬●●';return [[this.code(m),'Contoh: lumba-lumba bersiul ▬ ● ●. Artinya apa?'],[this.code(m,[[0,1,'Udang']]),'Siulan pertama ▬ (panjang) hanya cocok dengan <b>Udang</b>.'],[this.code(m,[[0,1,'Udang'],[1,2,'Ikan']]),'Sisanya ● ● adalah <b>Ikan</b>. Pesannya: Udang, Ikan!']]},
 tanya:'Lumba-lumba bersiul <mark>● ▬ ▬ ● ●</mark>. Apa artinya?',
 opsi:['Ikan, Udang, Kerang','Kerang, Udang, Ikan','Kerang, Ikan, Udang','Udang, Udang, Ikan'],jawab:1,
 bahas(){const m='●▬▬●●';return [[this.code(m),'Pesan: ● ▬ ▬ ● ●. Mulai dari kiri.'],[this.code(m,[[0,2,'Kerang']]),'Dimulai ●. Bisa Ikan (● ●) atau Kerang (● ▬)? Siulan berikutnya ▬, jadi ini <b>Kerang</b>.'],[this.code(m,[[0,2,'Kerang'],[2,1,'Udang']]),'Lalu ▬ sendirian adalah <b>Udang</b>.'],[this.code(m,[[0,2,'Kerang'],[2,1,'Udang'],[3,2,'Ikan']]),'Terakhir ● ● adalah <b>Ikan</b>. Pesannya: Kerang, Udang, Ikan!']]},
 info:'Komputer menyimpan huruf dan gambar sebagai deretan kode 0 dan 1, mirip siulan pendek dan panjang ini. Kodenya dibuat supaya setiap pesan hanya bisa dibaca dengan <b>satu cara</b>, jadi tidak tertukar.',kunci:'kode, pengodean'},

/* 3 */{judul:'Grafik Ikan Badut',konsep:'Membaca Data',tingkat:'Mudah',
 cerita:'Oki menghitung ikan badut yang lewat di depan rumahnya setiap hari, lalu membuat <b>grafik batang</b>.',
 aturan:['Tinggi batang menunjukkan banyaknya ikan pada hari itu.','"Bertambah" artinya selisih dengan <b>hari sebelumnya</b>, bukan banyaknya ikan pada hari itu.'],
 ch(vals,labels,diffs=[],hl=-1){const W=470,B=225,K=13,bw=50,step=(W-60)/vals.length;let s='';
  for(let v=0;v<=12;v+=2)s+=`<line x1="40" y1="${B-v*K}" x2="${W-10}" y2="${B-v*K}" style="stroke:var(--line)" stroke-width="1"/>`+T(26,B-v*K,v,'tm');
  s+=`<line x1="40" y1="${B}" x2="${W-10}" y2="${B}" style="stroke:var(--muted)" stroke-width="2"/>`;
  const cx=i=>50+i*step+step/2;
  vals.forEach((v,i)=>{s+=`<g data-k="b${i}" data-in="growup"><rect x="${cx(i)-bw/2}" y="${B-v*K}" width="${bw}" height="${v*K}" rx="6" fill="${i===hl?'#FF6F59':'#13B5A6'}"/>${T(cx(i),B-v*K-11,v,'t')}</g>`+T(cx(i),B+16,labels[i],'t','style="font-size:13px"')});
  diffs.forEach(([i,d])=>{const x=(cx(i)+cx(i-1))/2,y=B-Math.max(vals[i],vals[i-1])*K-38;s+=`<g data-k="d${i}" data-in="pop"><rect x="${x-24}" y="${y-12}" width="48" height="24" rx="12" fill="${d>0?'#1C9A5B':'#DD4343'}"/>${T(x,y,(d>0?'+':'')+d,'t','style="fill:#fff"')}</g>`});
  return svgw(W,B+30,s,500)},
 V:[4,7,6,11,12],L:['Sen','Sel','Rab','Kam','Jum'],
 visual(){return this.ch(this.V,this.L)},
 demo(){return [[this.ch([3,5],['Sen','Sel']),'Contoh: Senin ada 3 ikan, Selasa ada 5 ikan. Bertambah berapa?'],[this.ch([3,5],['Sen','Sel'],[[1,2]]),'Dari 3 menjadi 5, ikannya <b>bertambah 2</b>. Hitung selisihnya, bukan tinggi batangnya!']]},
 tanya:'Pada hari apa jumlah ikan <mark>bertambah paling banyak</mark> dibanding hari sebelumnya?',
 opsi:['Selasa','Rabu','Jumat','Kamis'],jawab:3,
 bahas(){const V=this.V,L=this.L;return [[this.ch(V,L,[[1,3]]),'Senin ke Selasa: 4 menjadi 7, bertambah 3.'],[this.ch(V,L,[[1,3],[2,-1]]),'Selasa ke Rabu: 7 menjadi 6, malah <b>berkurang</b> 1.'],[this.ch(V,L,[[1,3],[2,-1],[3,5]],3),'Rabu ke Kamis: 6 menjadi 11, bertambah <b>5</b>!'],[this.ch(V,L,[[1,3],[2,-1],[3,5],[4,1]],3),'Kamis ke Jumat: 11 menjadi 12, hanya bertambah 1. Jumat memang paling banyak ikannya, tetapi kenaikan terbesar terjadi hari <b>Kamis</b>.']]},
 info:'Membaca grafik adalah kemampuan penting. Ilmuwan memakai komputer untuk mencatat data, lalu mencari perubahan terbesar, misalnya kapan suhu laut naik paling cepat.',kunci:'data, grafik, selisih'},

/* 4 */{judul:'Pintu Gua Harta',konsep:'Logika Saklar',tingkat:'Sedang',
 cerita:'Pintu gua harta di dasar laut punya tiga lampu: A, B, dan C. Pintu terbuka jika <b>ketiga lampu menyala</b> bersamaan. Garis putus-putus menunjukkan lampu mana yang terhubung ke setiap tombol.',
 aturan:['Tombol 1 mengubah lampu A dan B. Tombol 2 mengubah lampu B dan C. Tombol 3 mengubah lampu C.','<b>Mengubah</b> artinya: lampu mati jadi menyala, lampu menyala jadi mati.','Mula-mula semua lampu mati. Setiap tombol boleh ditekan paling banyak satu kali.'],
 gate(st,pr=[]){const L=[110,230,350],Bt=[[150,[0,1]],[280,[1,2]],[380,[2]]],all=st.every(Boolean);let s='';
  Bt.forEach(([x,t])=>t.forEach(li=>s+=`<line x1="${x}" y1="196" x2="${L[li]}" y2="82" style="stroke:var(--line)" stroke-width="3" stroke-dasharray="6 5"/>`));
  L.forEach((x,i)=>s+=`<g data-k="L${i}" data-s="${st[i]}">${st[i]?`<circle cx="${x}" cy="60" r="31" fill="#FFD84D" opacity=".4" class="glow"/>`:''}<circle cx="${x}" cy="60" r="21" fill="${st[i]?'#FFD84D':'#C9D3DD'}" stroke="#5B6684" stroke-width="3"/>${T(x,60,'ABC'[i],'t','style="fill:#172041;font-size:17px"')}</g>`);
  Bt.forEach(([x],bi)=>{const on=pr.includes(bi+1);s+=`<g data-k="T${bi}" data-s="${pr.join()}"><rect x="${x-26}" y="196" width="52" height="36" rx="10" fill="${on?'#FF6F59':'#8E97B5'}" stroke="rgba(0,0,0,.3)" stroke-width="2"/>${T(x,214,bi+1,'t','style="fill:#fff;font-size:18px"')}</g>`});
  s+=`<g data-k="door" data-s="${all}"><rect x="424" y="16" width="56" height="216" rx="28" fill="${all?'#13B5A6':'#4A5568'}" opacity="${all?.4:1}"/>${T(452,124,all?'TERBUKA':'TERTUTUP','t','style="fill:#fff;font-size:12px" transform="rotate(-90 452 124)"')}</g>`;
  return svgw(490,245,s,520)+`<div class="chips">${pr.length?pr.map(p=>`<span class="chip on">tombol ${p}</span>`).join(''):'<span class="chip">belum ada tombol ditekan</span>'}</div>`},
 visual(){return this.gate([0,0,0])},
 demo(){return [[this.gate([0,0,0]),'Contoh: semua lampu masih mati.'],[this.gate([0,1,1],[2]),'Tekan tombol 2: lampu B dan C <b>berubah</b> menjadi menyala.'],[this.gate([0,0,0],[2,2]),'Kalau tombol 2 ditekan sekali lagi, B dan C berubah lagi menjadi <b>mati</b>!']]},
 tanya:'Tombol mana yang harus ditekan agar <mark>pintu terbuka</mark>?',
 opsi:['Tombol 1 dan 2','Tombol 1 dan 3','Tombol 2 dan 3','Tombol 1, 2, dan 3'],jawab:1,
 bahas(){return [[this.gate([1,0,1],[1,2]),'Pilihan A: tombol 1 menyalakan A dan B, lalu tombol 2 mematikan B lagi dan menyalakan C. B mati.'],[this.gate([1,1,1],[1,3]),'Pilihan B: tombol 1 menyalakan A dan B, lalu tombol 3 menyalakan C. Ketiganya menyala, pintu <b>terbuka</b>!'],[this.gate([0,1,0],[2,3]),'Pilihan C: tombol 2 menyalakan B dan C, lalu tombol 3 mematikan C lagi.'],[this.gate([1,0,0],[1,2,3]),'Pilihan D: B dan C masing-masing berubah dua kali, jadi kembali mati. Hanya A yang menyala.']]},
 info:'Lampu yang bisa berubah seperti ini mirip <b>bit</b> di komputer, yang nilainya 0 atau 1. Mengubah bit yang sama dua kali mengembalikannya ke keadaan semula. Sifat ini dipakai untuk menyandikan pesan rahasia.',kunci:'bit, saklar, logika'},

/* 5 */{judul:'Stiker Ikan Jungkir Balik',konsep:'Transformasi',tingkat:'Sedang',
 cerita:'Oki menempel stiker ikan di jendela kapal selam. Ikan itu menghadap ke kanan dengan sirip di atas. Oki lalu melakukan <b>dua gerakan</b> secara berurutan.',
 aturan:['<b>Putar ¼ putaran searah jarum jam</b> ↻: seperti jarum jam bergerak dari angka 12 ke angka 3.','<b>Balik kiri-kanan</b> ⇆: stiker dibalik seperti bayangan di cermin. Yang tadinya di kiri pindah ke kanan.'],
 fsc(tr,r,lbl){return svgw(220,180,`<g data-k="f" data-r="${r}" data-s="${tr}"><g transform="translate(110 90) ${tr}">${fish(0,0,'#FF9F43',2.6)}</g></g>`,220)+(lbl?`<div class="chips"><span class="chip on" data-k="op" data-s="${lbl}">${lbl}</span></div>`:'')},
 visual(){return `<div class="chips"><span class="chip">1. putar ¼ putaran ↻</span><span class="chip">2. balik kiri-kanan ⇆</span></div>`+this.fsc('',0)},
 demo(){return [[this.fsc('',0,'awal'),'Contoh: ikan menghadap ke kanan, siripnya di atas.'],[this.fsc('rotate(90)',90,'putar ¼ ↻'),'<b>Putar ¼ putaran searah jarum jam</b>: kepala ikan sekarang menghadap ke bawah.'],[this.fsc('',0,'awal'),'Kembali ke awal untuk mencoba gerakan yang lain.'],[this.fsc('scale(-1,1)',0,'balik ⇆'),'<b>Balik kiri-kanan</b>: seperti bayangan di cermin. Ikan sekarang menghadap ke kiri, siripnya tetap di atas!']]},
 tanya:'Seperti apa stiker ikan setelah <mark>kedua gerakan</mark>?',
 opsi:['rotate(90)','scale(-1,1)','scale(-1,1) rotate(90)','rotate(-90)'].map(t=>`<svg viewBox="0 0 100 100" width="76" aria-hidden="true"><g transform="translate(50 50) ${t}">${fish(0,0,'#FF9F43',1.25)}</g></svg>`),jawab:2,
 bahas(){return [[this.fsc('',0,'awal'),'Mulai: ikan menghadap kanan, sirip di atas.'],[this.fsc('rotate(90)',90,'1. putar ¼ ↻'),'Gerakan 1, putar seperempat: ikan menghadap <b>ke bawah</b>, siripnya sekarang di sebelah <b>kanan</b>.'],[this.fsc('scale(-1,1) rotate(90)',90,'2. balik ⇆'),'Gerakan 2, balik kiri-kanan: ikan tetap menghadap ke bawah, tetapi siripnya pindah ke <b>kiri</b>. Itu gambar C!']]},
 info:'Program menggambar dan permainan komputer memutar dan membalik gambar dengan aturan seperti ini. <b>Urutan</b> gerakannya penting: jika gerakannya ditukar, hasilnya berbeda.',kunci:'transformasi, rotasi, pencerminan'},

/* 6 */{judul:'Tabung Udara Penyelam',konsep:'Pemasangan',tingkat:'Sedang',
 cerita:'Empat penyelam akan menyelam bersama. Setiap penyelam butuh satu tabung udara, dan setiap tabung hanya untuk satu penyelam. Garis putus-putus menunjukkan tabung yang <b>cocok</b> dengan ukuran setiap penyelam.',
 aturan:['Setiap penyelam mendapat tepat satu tabung yang cocok (terhubung garis).','Satu tabung tidak boleh dipakai dua penyelam.','Tips: mulai dari penyelam yang pilihannya paling sedikit.'],
 D:['Ana','Bayu','Cici','Dodi'],TK:[['Merah','#EF5B5B'],['Biru','#3D8BE0'],['Hijau','#3FA34D'],['Kuning','#F5C518']],OK:{Ana:[0,1],Bayu:[0],Cici:[1,2,3],Dodi:[2]},
 mt(D,TK,OK,asg={},fresh){const y=i=>40+i*64,DC=['#FF9F43','#13B5A6','#8E6BD8','#F2708A'];let s='';
  D.forEach((d,i)=>OK[d].forEach(t=>s+=`<line x1="100" y1="${y(i)}" x2="330" y2="${y(t)}" style="stroke:var(--line)" stroke-width="3" stroke-dasharray="6 6"/>`));
  Object.entries(asg).forEach(([d,t])=>{const i=D.indexOf(d);s+=`<line x1="100" y1="${y(i)}" x2="330" y2="${y(t)}" stroke="${TK[t][1]}" stroke-width="7" stroke-linecap="round" pathLength="1" ${d===fresh?'class="drawl"':''}/>`});
  D.forEach((d,i)=>s+=`<g data-k="dv${i}" data-s="${d in asg}">${diver(58,y(i),DC[i],1)}${T(58,y(i)+40,d,'t','style="font-size:13px"')}</g>`);
  TK.forEach(([n,c],t)=>{const used=Object.values(asg).includes(t);s+=`<g data-k="tk${t}" data-s="${used}"><rect x="334" y="${y(t)-20}" width="30" height="42" rx="12" fill="${c}" stroke="rgba(0,0,0,.3)" stroke-width="2"/><rect x="342" y="${y(t)-27}" width="14" height="8" rx="2" fill="#8E97B5"/>${T(398,y(t),n,'t','style="font-size:13px"')}</g>`});
  return svgw(440,D.length*64+30,s,460)},
 visual(){return this.mt(this.D,this.TK,this.OK)},
 demo(){const D=['Eka','Fani'],TK=[['Ungu','#8E6BD8'],['Oranye','#FF9F43']],OK={Eka:[0,1],Fani:[1]};return [[this.mt(D,TK,OK),'Contoh: Eka cocok dengan tabung ungu atau oranye. Fani hanya cocok dengan oranye.'],[this.mt(D,TK,OK,{Fani:1},'Fani'),'Mulai dari yang pilihannya <b>cuma satu</b>: Fani dapat tabung oranye.'],[this.mt(D,TK,OK,{Fani:1,Eka:0},'Eka'),'Oranye sudah dipakai, jadi Eka dapat <b>ungu</b>. Beres!']]},
 tanya:'Tabung warna apa yang dipakai <mark>Cici</mark>?',
 opsi:['Kuning','Biru','Hijau','Merah'],jawab:0,
 bahas(){const f=(a,n)=>this.mt(this.D,this.TK,this.OK,a,n);return [[f({Bayu:0},'Bayu'),'Bayu hanya cocok dengan tabung <b>merah</b>. Berikan merah kepada Bayu.'],[f({Bayu:0,Dodi:2},'Dodi'),'Dodi juga hanya cocok dengan satu tabung, yaitu <b>hijau</b>.'],[f({Bayu:0,Dodi:2,Ana:1},'Ana'),'Ana cocok dengan merah atau biru. Merah sudah dipakai Bayu, jadi Ana dapat <b>biru</b>.'],[f({Bayu:0,Dodi:2,Ana:1,Cici:3},'Cici'),'Tinggal tabung kuning, dan Cici cocok dengan kuning. Jadi Cici memakai tabung <b>kuning</b>!']]},
 info:'Mencocokkan pasangan seperti ini disebut <b>pemasangan</b> (matching). Komputer memakainya untuk membagi kursi pesawat, menyusun jadwal dokter, atau menentukan ojek mana yang menjemput penumpang mana.',kunci:'pemasangan, deduksi'},

/* 7 */{judul:'Mesin Gelembung Oki',konsep:'Pengulangan',tingkat:'Sedang',
 cerita:'Oki punya mesin penghitung gelembung. Mesin itu menjalankan program berbentuk balok-balok seperti di bawah.',
 aturan:['Program dijalankan dari atas ke bawah.','Balok oranye <b>mengulang</b> balok biru di dalamnya selama syaratnya masih benar.','Sebelum mengulang, syarat diperiksa dulu. Jika syarat sudah tidak benar, pengulangan berhenti.'],
 prog(a,lim){return `<div class="prog"><div class="blk set">angka = ${a}</div><div class="blk rep">ulangi selama angka <b>belum lebih dari ${lim}</b></div><div class="blk in">angka = angka × 2</div><div class="blk end"></div><div class="blk set">tulis angka</div></div>`},
 seq(a,lim,v){return this.prog(a,lim)+`<div class="mach">${v.map((x,i)=>(i?'<span class="arw">×2</span>':'')+`<div class="num" data-k="v${i}" ${i?`data-from="v${i-1}"`:''}>${x}</div>`).join('')}</div>`},
 visual(){return this.prog(3,50)},
 demo(){return [[this.seq(1,10,[1]),'Contoh: mulai dengan angka 1. Ulangi selama angka belum lebih dari 10.'],[this.seq(1,10,[1,2]),'1 belum lebih dari 10, jadi dikali 2: <b>2</b>.'],[this.seq(1,10,[1,2,4,8]),'2 dan 4 juga belum lebih dari 10, jadi terus dikali 2: 4, lalu 8.'],[this.seq(1,10,[1,2,4,8,16]),'8 belum lebih dari 10, jadi dikali lagi: 16. Sekarang 16 sudah lebih dari 10, pengulangan <b>berhenti</b>. Angka yang ditulis: 16!']]},
 tanya:'Angka berapa yang <mark>ditulis</mark> di akhir program?',
 opsi:['192','48','50','96'],jawab:3,
 bahas(){return [[this.seq(3,50,[3]),'Mulai: angka = 3.'],[this.seq(3,50,[3,6,12]),'3 belum lebih dari 50, jadi 6. 6 juga belum, jadi 12.'],[this.seq(3,50,[3,6,12,24,48]),'12 menjadi 24, lalu 48. Hati-hati, 48 <b>belum</b> lebih dari 50!'],[this.seq(3,50,[3,6,12,24,48,96]),'Jadi 48 dikali 2 sekali lagi: 96. Sekarang 96 lebih dari 50, pengulangan berhenti. Jawabannya <b>96</b>!']]},
 info:'Pengulangan dengan syarat disebut <b>loop</b>. Program memakai loop agar tidak perlu menulis perintah yang sama berkali-kali, dan berhenti sendiri ketika tujuannya tercapai.',kunci:'loop, pengulangan bersyarat'},

/* 8 */{judul:'Botol Pesan dan Arus Laut',konsep:'Penelusuran',tingkat:'Sedang',
 cerita:'Profesor Lina akan melepas botol pesan di laut. Setiap kotak di peta punya <b>arus laut</b> yang ditunjukkan panah. Botol selalu terbawa satu kotak ke arah panah.',
 aturan:['Botol bergerak satu kotak mengikuti panah di kotak tempatnya berada.','Botol berhenti jika sampai di <b>pulau</b>.','Ada titik yang membuat botol berputar-putar terus dan tidak pernah sampai.'],
 AR:['→↓←↓','↑→↓↑','↓←→↓','→↑←*'],ST:{A:[0,0],B:[3,0],C:[0,2],D:[2,3]},
 am(A,ST,bt,trail=[]){const c=62,o=8,W=A[0].length,H=A.length;let s='';
  for(let y=0;y<H;y++)for(let x=0;x<W;x++){const ch=A[y][x],cx=o+x*c+c/2,cy=o+y*c+c/2;s+=`<rect x="${o+x*c}" y="${o+y*c}" width="${c}" height="${c}" rx="6" fill="#BFE6F2" stroke="#7FB8CC" stroke-width="2"/>`;s+=ch==='*'?island(cx,cy):T(cx,cy,ch,'t','style="fill:#1B6E8F;font-size:28px;opacity:.75"')}
  Object.entries(ST).forEach(([l,[x,y]])=>s+=`<circle cx="${o+x*c+12}" cy="${o+y*c+12}" r="11" fill="#FF6F59"/>`+T(o+x*c+12,o+y*c+12,l,'t','style="fill:#fff;font-size:13px"'));
  if(trail.length>1)s+=`<polyline points="${trail.map(([x,y])=>`${o+x*c+c/2},${o+y*c+c/2}`).join(' ')}" fill="none" stroke="#FF6F59" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity=".6"/>`;
  if(bt)s+=`<g data-k="bt" data-in="drop">${bottle(o+bt[0]*c+c/2+8,o+bt[1]*c+c/2+6)}</g>`;
  return svgw(W*c+o*2,H*c+o*2,s,Math.min(W*c*1.3,330))},
 visual(){return this.am(this.AR,this.ST)},
 demo(){const A=['→↓','↑*'],S={};return [[this.am(A,S,[0,0]),'Contoh: botol dilepas di kiri atas. Panahnya menunjuk ke kanan.'],[this.am(A,S,[1,0],[[0,0],[1,0]]),'Botol terbawa arus ke kanan. Di kotak ini panahnya menunjuk ke bawah.'],[this.am(A,S,[1,1],[[0,0],[1,0],[1,1]]),'Botol terbawa ke bawah dan sampai di <b>pulau</b>!']]},
 tanya:'Dari titik mana botol harus dilepas agar <mark>sampai di pulau</mark>?',
 opsi:['Titik A','Titik B','Titik C','Titik D'],jawab:0,
 bahas(){const A=this.AR,S=this.ST,P=[[0,0],[1,0],[1,1],[2,1],[2,2],[3,2],[3,3]];return [[this.am(A,S,P[0],P.slice(0,1)),'Coba titik A dulu.'],[this.am(A,S,P[2],P.slice(0,3)),'Dari A: ke kanan, lalu ke bawah, lalu ke kanan.'],[this.am(A,S,P[4],P.slice(0,5)),'Lalu ke bawah, lalu ke kanan.'],[this.am(A,S,P[6],P),'Lalu ke bawah dan sampai di <b>pulau</b>! Titik A berhasil.'],[this.am(A,S,[3,0],[[3,0],[3,1],[3,0]]),'Titik B: ke bawah, lalu panahnya kembali ke atas. Botol bolak-balik terus.'],[this.am(A,S,[0,2],[[0,2],[0,3],[1,3],[1,2],[0,2]]),'Titik C: botol berputar di kotak kiri bawah dan kembali ke tempat awal. Tidak pernah sampai.'],[this.am(A,S,[2,3],[[2,3],[1,3],[1,2],[0,2],[0,3],[1,3]]),'Titik D: botol masuk ke putaran yang sama dengan titik C. Jadi hanya titik <b>A</b> yang berhasil.']]},
 info:'Mengikuti panah dari kotak ke kotak mirip menjalankan program langkah demi langkah. Programmer harus berhati-hati dengan <b>putaran tanpa akhir</b> (infinite loop), yaitu program yang berputar terus dan tidak pernah selesai.',kunci:'penelusuran, infinite loop'},

/* 9 */{judul:'Pesan dalam Botol',konsep:'Sandi',tingkat:'Sedang',
 cerita:'Oki menemukan botol berisi pesan rahasia: <b>PLAARUIT</b>. Profesor Lina tahu cara pengirimnya menyandikan pesan.',
 aturan:['Pengirim menulis pesannya di kotak 2 baris × 4 kolom, <b>baris demi baris</b>, dari kiri ke kanan.','Lalu ia menyalinnya <b>kolom demi kolom</b>, dari atas ke bawah.','Untuk membaca pesan, lakukan kebalikannya.'],
 tp(msg,grid,gfrom,out,ofrom,lab){const row=(a,p,cls,fr)=>`<div class="tiles">${a.map((c,i)=>c?`<div class="tile ${cls}" data-k="${p}${i}" data-s="${c}" ${fr&&fr[i]?`data-from="${fr[i]}"`:''}>${c}</div>`:`<div class="tile"></div>`).join('')}</div>`;
  return `<div class="lbl">${lab[0]}</div>`+row(msg,'m','enc')+`<div class="lbl">Kotak 2 × 4</div><div class="tg">${grid.map((c,i)=>c?`<div class="tile dec" data-k="g${i}" data-s="${c}" ${gfrom[i]?`data-from="${gfrom[i]}"`:''}>${c}</div>`:'<div class="tile"></div>').join('')}</div><div class="lbl">${lab[1]}</div>`+row(out,'o','',ofrom)},
 visual(){return this.tp([...'PLAARUIT'],Array(8).fill(''),[],Array(8).fill(''),[],['Pesan rahasia','Pesan asli'])},
 demo(){const M=[...'IKANBIRU'],L=['Contoh: pesan asli','Pesan rahasia'],E=Array(8).fill(''),g1=M.map((c,i)=>i<4?c:''),gf=M.map((_,i)=>'m'+i),o=[...'IBKIARNU'],of=[0,4,1,5,2,6,3,7].map(i=>'g'+i);
  return [[this.tp(M,E,[],E,[],L),'Contoh: pesan asli IKAN BIRU (8 huruf).'],[this.tp(M,g1,gf,E,[],L),'Tulis 4 huruf pertama di baris atas.'],[this.tp(M,M,gf,E,[],L),'Lanjutkan 4 huruf berikutnya di baris bawah.'],[this.tp(M,M,gf,o,of,L),'Salin per <b>kolom</b>, dari atas ke bawah: IB, KI, AR, NU. Pesan rahasianya: <b>IBKIARNU</b>.']]},
 tanya:'Apa isi pesan <mark>PLAARUIT</mark> yang sebenarnya?',
 opsi:['LAUT PARI','PLAA RUIT','PARI LAUT','PAUL RITA'],jawab:2,
 bahas(){const M=[...'PLAARUIT'],L=['Pesan rahasia','Pesan asli'],E=Array(8).fill('');const G=Array(8).fill(''),GF=Array(8).fill('');const put=n=>{for(let k=0;k<n;k++){const r=k%2,c=Math.floor(k/2);G[r*4+c]=M[k];GF[r*4+c]='m'+k}return [...G]};
  const g4=put(4),g8=put(8),o=[...'PARILAUT'],of=o.map((_,i)=>'g'+i);
  return [[this.tp(M,E,[],E,[],L),'Pesan rahasia: PLAARUIT. Kita kembalikan hurufnya ke kotak.'],[this.tp(M,g4,GF,E,[],L),'Huruf ditulis per <b>kolom</b>: P dan L di kolom 1, A dan A di kolom 2.'],[this.tp(M,g8,GF,E,[],L),'R dan U di kolom 3, I dan T di kolom 4.'],[this.tp(M,g8,GF,o,of,L),'Sekarang baca per <b>baris</b>: PARI, lalu LAUT. Pesannya <b>PARI LAUT</b>!']]},
 info:'Sandi ini mengacak <b>urutan</b> huruf tanpa mengganti hurufnya. Komputer menggabungkan banyak cara mengacak dan mengganti supaya pesan di internet aman.',kunci:'sandi transposisi, enkripsi'},

/* 10 */{judul:'Menara Cincin Karang',konsep:'Rekursi',tingkat:'Sedang',
 cerita:'Oki ingin memindahkan menara cincin karang dari tiang kiri ke tiang <b>kanan</b>.',
 aturan:['Setiap langkah, hanya boleh memindahkan <b>satu cincin</b>, yaitu cincin paling atas.','Cincin besar <b>tidak boleh</b> ditaruh di atas cincin yang lebih kecil.','Tiang tengah boleh dipakai sebagai tempat singgah.'],
 hn(P,mv){const X=[90,240,390],RC={1:'#FF6F59',2:'#F5C518',3:'#13B5A6'};let s=`<rect x="20" y="200" width="440" height="14" rx="5" fill="#C98A4B"/>`;
  X.forEach((x,i)=>s+=`<rect x="${x-5}" y="70" width="10" height="132" rx="4" fill="#8B5A2B"/>`+T(x,232,['Kiri','Tengah','Kanan'][i],'t'));
  P.forEach((st,pi)=>st.forEach((sz,h)=>{const w=34+sz*28;s+=`<g data-k="r${sz}"><rect x="${X[pi]-w/2}" y="${176-h*26}" width="${w}" height="23" rx="11.5" fill="${RC[sz]}" stroke="rgba(0,0,0,.3)" stroke-width="2"/><path d="M${X[pi]-w/2+10} ${182-h*26} h${w-20}" stroke="#fff" stroke-width="2" opacity=".45" stroke-linecap="round"/></g>`}));
  return svgw(480,245,s,500)+(mv!==undefined?`<div class="chips"><span class="chip on" data-k="mv" data-s="${mv}">Langkah: ${mv}</span></div>`:'')},
 visual(){return this.hn([[3,2,1],[],[]])},
 demo(){return [[this.hn([[2,1],[],[]],0),'Contoh: menara 2 cincin. Pindahkan semuanya ke tiang kanan.'],[this.hn([[2],[1],[]],1),'Pindahkan cincin kecil ke tiang tengah dulu.'],[this.hn([[],[1],[2]],2),'Cincin besar pindah ke tiang kanan.'],[this.hn([[],[],[2,1]],3),'Cincin kecil naik ke atas cincin besar. Selesai dalam <b>3 langkah</b>!']]},
 tanya:'Paling sedikit, berapa <mark>langkah</mark> untuk memindahkan menara 3 cincin?',
 opsi:['5 langkah','6 langkah','7 langkah','8 langkah'],jawab:2,
 bahas(){const S=[[[[3,2,1],[],[]],'Mulai: 3 cincin di tiang kiri.'],[[[3,2],[],[1]],'1. Cincin kecil ke kanan.'],[[[3],[2],[1]],'2. Cincin sedang ke tengah.'],[[[3],[2,1],[]],'3. Cincin kecil ke atas cincin sedang. Dua cincin atas sudah pindah ke tengah!'],[[[],[2,1],[3]],'4. Cincin besar ke kanan.'],[[[1],[2],[3]],'5. Cincin kecil ke kiri.'],[[[1],[],[3,2]],'6. Cincin sedang ke kanan.'],[[[],[],[3,2,1]],'7. Cincin kecil ke kanan. Selesai dalam <b>7 langkah</b>!']];return S.map(([p,c],i)=>[this.hn(p,i),c])},
 info:'Teka-teki ini terkenal di dunia informatika. Caranya: pindahkan 2 cincin atas ke tengah, pindahkan cincin terbesar, lalu pindahkan lagi 2 cincin itu. Memecah masalah menjadi masalah yang lebih kecil dengan cara yang sama disebut <b>rekursi</b>.',kunci:'rekursi, algoritma'},

/* 11 */{judul:'Bahasa Cahaya Ubur-ubur',konsep:'Aturan Ganti',tingkat:'Sedang',
 cerita:'Ubur-ubur berkomunikasi dengan cahaya berbentuk simbol. Setiap detik, mereka mengubah pesannya memakai <b>aturan ganti</b>.',
 aturan:['Pada setiap langkah, <b>semua</b> simbol diganti bersamaan menurut aturan.','▲ diganti ● ●. ● diganti ▲ ■. ■ tetap ■.','Pesan dimulai dengan satu ▲ (langkah 0).'],
 rules(R){return `<div class="chips">${R.map(([a,b])=>`<span class="chip">${sym3(a)} → ${b.map(sym3).join('')}</span>`).join('')}</div>`},
 rows(R,list){return this.rules(R)+`<div class="lsw">${list.map((r,k)=>`<div class="lsr" data-k="row${k}" data-in="${['drop','left','zoom','up'][k%4]}"><span class="lbl">Langkah ${k}</span><span class="lss">${r.map(t=>symIcon(t,28)).join('')}</span></div>`).join('')}</div>`},
 R:[['segitiga',['bulat','bulat']],['bulat',['segitiga','kotak']],['kotak',['kotak']]],
 S:[['segitiga'],['bulat','bulat'],['segitiga','kotak','segitiga','kotak'],['bulat','bulat','kotak','bulat','bulat','kotak']],
 visual(){return this.rows(this.R,[this.S[0]])},
 demo(){const R=[['bulat',['bulat','segitiga']],['segitiga',['segitiga']]],S=[['bulat'],['bulat','segitiga'],['bulat','segitiga','segitiga']];return [[this.rows(R,S.slice(0,1)),'Contoh aturan lain: ● diganti ● ▲, dan ▲ tetap ▲. Mulai dengan ●.'],[this.rows(R,S.slice(0,2)),'Langkah 1: ● diganti ● ▲.'],[this.rows(R,S),'Langkah 2: ● diganti ● ▲, dan ▲ tetap ▲. Semua simbol diganti <b>bersamaan</b>!']]},
 tanya:'Seperti apa deretan simbol pada <mark>langkah ke-3</mark>?',
 opsi:[['segitiga','kotak','segitiga','kotak','segitiga','kotak'],['bulat','kotak','bulat','kotak','bulat','kotak'],['bulat','bulat','bulat','bulat','kotak','kotak'],['bulat','bulat','kotak','bulat','bulat','kotak']].map(r=>`<span style="display:inline-flex;gap:1px">${r.map(t=>symIcon(t,24)).join('')}</span>`),jawab:3,
 bahas(){const S=this.S,R=this.R;return [[this.rows(R,S.slice(0,1)),'Mulai: ▲.'],[this.rows(R,S.slice(0,2)),'Langkah 1: ▲ diganti ● ●.'],[this.rows(R,S.slice(0,3)),'Langkah 2: setiap ● diganti ▲ ■. Hasilnya ▲ ■ ▲ ■.'],[this.rows(R,S),'Langkah 3: setiap ▲ diganti ● ●, setiap ■ tetap ■. Hasilnya <b>● ● ■ ● ● ■</b>!']]},
 info:'Aturan ganti seperti ini dipakai komputer untuk menggambar tanaman dan karang yang tampak alami: satu bentuk kecil terus diganti sampai menjadi gambar rumit. Bahasa pemrograman juga dijelaskan dengan aturan ganti.',kunci:'aturan ganti, pola'},

/* 12 */{judul:'Suasana Hati Kepiting Kuku',konsep:'Mesin Keadaan',tingkat:'Sedang',
 cerita:'Kepiting Kuku punya tiga suasana hati: <b>Tidur</b>, <b>Lapar</b>, dan <b>Senang</b>. Panah menunjukkan bagaimana suasana hatinya berubah ketika terjadi sesuatu.',
 aturan:['Kuku mula-mula sedang <b>Tidur</b>.','Setiap kejadian membuat Kuku mengikuti panah yang bertuliskan kejadian itu, dari suasana hatinya saat ini.','Jika tidak ada panah untuk kejadian itu, suasana hatinya tidak berubah.'],
 EV:['pagi','makan','main','makan','malam','pagi'],
 sm(cur,ev,done){const N={Tidur:[90,205,'#8E6BD8'],Lapar:[250,62,'#FF9F43'],Senang:[410,205,'#3FA34D']};const A=[['Tidur','Lapar','pagi',-16],['Lapar','Tidur','malam',-16],['Lapar','Senang','makan',-16],['Senang','Lapar','main',-16],['Senang','Tidur','malam',0]];
  let s=arrowDefs('q12m');A.forEach(([a,b,l,off])=>{const[x1,y1]=N[a],[x2,y2]=N[b],dx=x2-x1,dy=y2-y1,d=Math.hypot(dx,dy),ux=dx/d,uy=dy/d,px=-uy,py=ux,sx=px*off,sy=py*off;s+=`<line x1="${x1+ux*44+sx}" y1="${y1+uy*44+sy}" x2="${x2-ux*46+sx}" y2="${y2-uy*46+sy}" style="stroke:var(--muted)" stroke-width="3.5" marker-end="url(#q12m)"/>`;const lx=(x1+x2)/2+px*(off?off*2.4:16),ly=(y1+y2)/2+py*(off?off*2.4:16);s+=`<rect x="${lx-27}" y="${ly-12}" width="54" height="24" rx="12" style="fill:var(--paper);stroke:var(--line)" stroke-width="2"/>`+T(lx,ly,l,'tm','style="font-size:13px"')});
  Object.entries(N).forEach(([k,[x,y,c]])=>s+=`<g data-k="st${k}" data-s="${k===cur}"><circle cx="${x}" cy="${y}" r="40" fill="${c}" stroke="${k===cur?'#172041':'rgba(0,0,0,.2)'}" stroke-width="${k===cur?5:2}"/>${T(x,y,k,'t','style="fill:#fff;font-size:15px"')}</g>`);
  const[cx,cy]=N[cur];s+=`<g data-k="crab">${crab(cx+40,cy+30,.9)}</g>`;
  return svgw(500,262,s,520)+cmdChips(ev,done)},
 visual(){return this.sm('Tidur',this.EV,0)},
 demo(){const E=['pagi','makan'];return [[this.sm('Tidur',E,0),'Contoh: Kuku sedang Tidur. Ada dua kejadian: pagi, lalu makan.'],[this.sm('Lapar',E,1),'<b>Pagi</b>: dari Tidur ada panah "pagi" ke Lapar. Kuku jadi Lapar.'],[this.sm('Senang',E,2),'<b>Makan</b>: dari Lapar ada panah "makan" ke Senang. Kuku jadi Senang!']]},
 tanya:'Kejadiannya berurutan: pagi, makan, main, makan, malam, pagi. Bagaimana suasana hati Kuku <mark>di akhir</mark>?',
 opsi:['Tidur','Lapar','Senang','Tidak bisa diketahui'],jawab:1,
 bahas(){const E=this.EV,S=[['Tidur','Mulai: Tidur.'],['Lapar','Pagi: Tidur menjadi Lapar.'],['Senang','Makan: Lapar menjadi Senang.'],['Lapar','Main: Senang menjadi Lapar lagi.'],['Senang','Makan: Lapar menjadi Senang.'],['Tidur','Malam: Senang menjadi Tidur.'],['Lapar','Pagi: Tidur menjadi <b>Lapar</b>. Itulah suasana hati Kuku di akhir!']];return S.map(([s,c],i)=>[this.sm(s,E,i),c])},
 info:'Diagram ini disebut <b>mesin keadaan</b>. Lampu lalu lintas, mesin minuman, dan tokoh dalam permainan komputer bekerja dengan mesin keadaan: keadaannya berubah setiap kali terjadi sesuatu.',kunci:'mesin keadaan, kejadian'},

/* 13 */{judul:'Harta Kapal Karam',konsep:'Optimasi',tingkat:'Sulit',
 cerita:'Penyelam Dimas menemukan kapal karam berisi harta. Tasnya hanya kuat membawa <b>10 kg</b>. Dimas ingin membawa harta dengan <b>nilai koin sebanyak mungkin</b>.',
 aturan:['Berat total barang di tas tidak boleh lebih dari 10 kg.','Setiap barang hanya ada satu.','Yang dicari adalah jumlah koin terbesar, bukan barang yang paling mahal.'],
 K:{Mahkota:[6,9,'#F5C518'],Peti:[4,6,'#A0703F'],Kalung:[3,5,'#8E6BD8'],Vas:[5,7,'#3D8BE0'],Cincin:[2,4,'#FF6F59']},
 kn(K,sel,lim){const names=Object.keys(K);let s=`<text x="12" y="16" class="tm">Di kapal karam</text><path d="M20 168 Q20 152 40 152 H460 Q480 152 480 168 V280 Q480 296 460 296 H40 Q20 296 20 280 Z" fill="#7A5230" opacity=".85"/><path d="M200 152 Q250 112 300 152" stroke="#7A5230" stroke-width="8" fill="none"/>`+T(250,172,'Tas Dimas (paling banyak '+lim+' kg)','t','style="fill:#fff;font-size:13px"');
  let w=0,v=0,j=0;names.forEach((n,i)=>{const [kg,ko,c]=K[n],inb=sel.includes(n);if(inb){w+=kg;v+=ko}const x=inb?36+(j++)*148:8+i*97,y=inb?188:26;s+=`<g data-k="k${n}"><rect x="${x}" y="${y}" width="${inb?140:90}" height="62" rx="12" fill="${c}" stroke="rgba(0,0,0,.25)" stroke-width="2"/>${T(x+(inb?70:45),y+20,n,'t','style="fill:#fff;font-size:14px"')}${T(x+(inb?70:45),y+43,kg+' kg · '+ko+' koin','t','style="fill:#fff;font-size:11.5px"')}</g>`});
  const over=w>lim;return svgw(490,305,s,520)+`<div class="chips"><span class="chip" data-k="w" data-s="${w}" style="${over?'background:var(--bad-soft);color:var(--bad)':''}">Berat: ${w} kg dari ${lim} kg</span><span class="chip on" data-k="v" data-s="${v}">Nilai: ${v} koin</span></div>`},
 visual(){return this.kn(this.K,[],10)},
 demo(){const K={Teko:[4,5,'#13B5A6'],Lampu:[3,4,'#FF9F43'],Sisir:[2,3,'#F2708A']};return [[this.kn(K,[],5),'Contoh: tas hanya kuat 5 kg. Ada 3 barang.'],[this.kn(K,['Teko'],5),'Ambil Teko (5 koin). Beratnya 4 kg, sisa 1 kg. Tidak ada barang lain yang muat.'],[this.kn(K,['Lampu','Sisir'],5),'Coba Lampu + Sisir: 3 + 2 = 5 kg, pas! Nilainya 4 + 3 = <b>7 koin</b>, lebih banyak daripada Teko saja.']]},
 tanya:'Barang mana yang harus dibawa Dimas agar nilainya <mark>paling besar</mark>?',
 opsi:['Mahkota + Peti','Peti + Kalung + Cincin','Mahkota + Kalung','Vas + Kalung + Cincin'],jawab:3,
 bahas(){const K=this.K;return [[this.kn(K,['Mahkota','Peti'],10),'Mahkota + Peti: 6 + 4 = 10 kg. Nilainya 9 + 6 = 15 koin.'],[this.kn(K,['Peti','Kalung','Cincin'],10),'Peti + Kalung + Cincin: 4 + 3 + 2 = 9 kg. Nilainya 6 + 5 + 4 = 15 koin.'],[this.kn(K,['Mahkota','Kalung'],10),'Mahkota + Kalung: 9 kg, nilainya 14 koin. Sisa 1 kg tidak cukup untuk barang lain.'],[this.kn(K,['Kalung','Vas','Cincin'],10),'Vas + Kalung + Cincin: 5 + 3 + 2 = 10 kg. Nilainya 7 + 5 + 4 = <b>16 koin</b>, yang terbesar! Mengambil mahkota yang paling mahal lebih dulu ternyata bukan cara terbaik.']]},
 info:'Masalah ini disebut <b>masalah ransel</b> (knapsack). Perusahaan pengiriman memakainya untuk mengisi truk, dan komputer memakainya untuk membagi ruang penyimpanan.',kunci:'optimasi, masalah ransel'},

/* 14 */{judul:'Lampu Kapal Selam Kacau',konsep:'Deteksi Kesalahan',tingkat:'Sulit',
 cerita:'Kapal selam mengirim gambar lampu 5 × 5 ke kapal di permukaan. Baris dan kolom terakhir (bergaris putus-putus) adalah <b>lampu pemeriksa</b>. Lampu pemeriksa diatur supaya setiap baris dan setiap kolom punya lampu menyala dalam jumlah <b>genap</b>.',
 aturan:['Genap artinya 0, 2, atau 4. Ganjil artinya 1, 3, atau 5.','Saat dikirim, <b>tepat satu</b> lampu berubah: menyala jadi padam, atau padam jadi menyala.','Cari baris dan kolom yang jumlahnya menjadi ganjil.'],
 M:[[1,0,1,1,1],[0,1,0,0,0],[1,1,0,1,1],[0,0,1,0,1],[0,0,1,0,1]],
 pg(M,o={}){const n=M.length,c=44,ox=34,oy=30;let s='';
  for(let i=0;i<n;i++){s+=T(ox+i*c+c/2,14,i+1,'tm','style="font-size:13px"')+T(14,oy+i*c+c/2,i+1,'tm','style="font-size:13px"')}
  if(o.r!==undefined)s+=`<rect data-k="hr" data-in="grow" x="${ox}" y="${oy+o.r*c}" width="${n*c}" height="${c}" fill="#FF6F59" opacity=".22"/>`;
  if(o.c!==undefined)s+=`<rect data-k="hc" data-in="growdown" x="${ox+o.c*c}" y="${oy}" width="${c}" height="${n*c}" fill="#FF6F59" opacity=".22"/>`;
  M.forEach((row,r)=>row.forEach((v,k)=>{const x=ox+k*c+c/2,y=oy+r*c+c/2,chk=r===n-1||k===n-1;s+=`<rect x="${ox+k*c+2}" y="${oy+r*c+2}" width="${c-4}" height="${c-4}" rx="7" fill="none" style="stroke:var(--line)" stroke-width="2" ${chk?'stroke-dasharray="4 3"':''}/><g data-k="c${r}_${k}" data-s="${v}">${v?`<circle cx="${x}" cy="${y}" r="15" fill="#FFD84D" opacity=".35"/><circle cx="${x}" cy="${y}" r="11" fill="#FFD84D" stroke="#C99A00" stroke-width="2"/>`:`<circle cx="${x}" cy="${y}" r="11" fill="#5B6684" opacity=".35"/>`}</g>`}));
  const sum=a=>a.reduce((p,q)=>p+q,0),badge=(x,y,v,k)=>`<g data-k="${k}" data-in="pop"><rect x="${x-16}" y="${y-12}" width="32" height="24" rx="12" fill="${v%2?'#DD4343':'#1C9A5B'}"/>${T(x,y,v,'t','style="fill:#fff"')}</g>`;
  if(o.rows)M.forEach((row,r)=>s+=badge(ox+n*c+22,oy+r*c+c/2,sum(row),'sr'+r));
  if(o.cols)M[0].forEach((_,k)=>s+=badge(ox+k*c+c/2,oy+n*c+20,sum(M.map(r=>r[k])),'sc'+k));
  if(o.x){const[r,k]=o.x,x=ox+k*c+c/2,y=oy+r*c+c/2;s+=`<g data-k="x" data-in="stamp"><circle cx="${x}" cy="${y}" r="19" fill="none" stroke="#DD4343" stroke-width="4"/></g>`}
  return svgw(ox+n*c+46,oy+n*c+40,s,Math.min(80+n*c*1.4,420))},
 visual(){return this.pg(this.M)},
 demo(){const A=[[1,1,0],[0,1,1],[1,0,1]],B=[[1,0,0],[0,1,1],[1,0,1]];return [[this.pg(A,{rows:1,cols:1}),'Contoh: setiap baris dan kolom punya lampu menyala dalam jumlah genap (hijau).'],[this.pg(B,{rows:1,cols:1}),'Satu lampu berubah saat dikirim! Sekarang baris 1 dan kolom 2 menjadi ganjil (merah).'],[this.pg(B,{rows:1,cols:1,r:0,c:1,x:[0,1]}),'Lampu yang berubah ada di <b>pertemuan</b> baris 1 dan kolom 2.']]},
 tanya:'Lampu di baris dan kolom berapa yang <mark>berubah</mark>?',
 opsi:['Baris 2, kolom 3','Baris 3, kolom 2','Baris 1, kolom 3','Baris 2, kolom 2'],jawab:0,
 bahas(){const M=this.M;return [[this.pg(M,{rows:1}),'Hitung lampu menyala di setiap baris. Baris 2 hanya punya 1 lampu menyala, ganjil!'],[this.pg(M,{rows:1,cols:1}),'Hitung juga setiap kolom. Kolom 3 punya 3 lampu menyala, ganjil!'],[this.pg(M,{rows:1,cols:1,r:1,c:2,x:[1,2]}),'Lampu yang berubah ada di <b>baris 2, kolom 3</b>. Lampu itu seharusnya menyala, tetapi padam saat dikirim.']]},
 info:'Cara ini disebut <b>bit paritas</b>. Komputer dan internet memakai ide seperti ini untuk menemukan, bahkan memperbaiki, kesalahan kecil saat data dikirim. Ide serupa membuat kode QR yang sedikit rusak tetap bisa dibaca.',kunci:'paritas, deteksi kesalahan'},

/* 15 */{judul:'Labirin Karang',konsep:'Jalur Terpendek',tingkat:'Sulit',
 cerita:'Kapal selam kuning ingin mencapai peti harta secepat mungkin. Ada batu karang yang tidak bisa dilewati.',
 aturan:['Setiap langkah, kapal selam pindah satu kotak ke atas, bawah, kiri, atau kanan. Tidak boleh miring.','Kapal selam tidak bisa menembus batu karang.'],
 RK:['1,1','1,2','1,3','2,1','3,0','3,1','3,3','3,4'],
 bfs(W,H,R,sx,sy){const D={},q=[[sx,sy]];D[sx+','+sy]=0;while(q.length){const[x,y]=q.shift();[[1,0],[-1,0],[0,1],[0,-1]].forEach(([a,b])=>{const nx=x+a,ny=y+b,k=nx+','+ny;if(nx<0||ny<0||nx>=W||ny>=H||R.includes(k)||k in D)return;D[k]=D[x+','+y]+1;q.push([nx,ny])})}return D},
 mz(W,H,R,goal,maxd,path){const c=58,o=6,D=this.bfs(W,H,R,0,0);let s='';
  for(let y=0;y<H;y++)for(let x=0;x<W;x++){const k=x+','+y;s+=`<rect x="${o+x*c}" y="${o+y*c}" width="${c}" height="${c}" rx="6" fill="${R.includes(k)?'#5B6684':'#BFE6F2'}" stroke="#7FB8CC" stroke-width="2"/>`;if(R.includes(k))s+=gicon('batu',o+x*c+c/2,o+y*c+c/2)}
  if(path)s+=`<polyline points="${path.map(([x,y])=>`${o+x*c+c/2},${o+y*c+c/2}`).join(' ')}" fill="none" stroke="#FF6F59" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" opacity=".7" pathLength="1" class="drawl"/>`;
  if(maxd!==undefined)Object.entries(D).forEach(([k,d])=>{if(d>maxd||d===0)return;const[x,y]=k.split(',').map(Number);s+=`<g data-k="n${x}_${y}" data-in="zoom"><circle cx="${o+x*c+c/2}" cy="${o+y*c+c/2}" r="15" fill="#13B5A6"/>${T(o+x*c+c/2,o+y*c+c/2,d,'t','style="fill:#fff;font-size:15px"')}</g>`});
  s+=chest(o+goal[0]*c+c/2,o+goal[1]*c+c/2+4,1.1)+sub(o+c/2,o+c/2+4,.95);
  return svgw(W*c+o*2,H*c+o*2,s,Math.min(W*c*1.3,360))},
 visual(){return this.mz(5,5,this.RK,[4,4])},
 demo(){const R=['1,0','1,1'],g=[2,0];return [[this.mz(3,3,R,g,0),'Contoh: harta di kanan atas, tapi batu menghalangi. Tulis angka langkah mulai dari kapal selam.'],[this.mz(3,3,R,g,2),'Kotak yang bisa dicapai dalam 1 langkah diberi angka 1, lalu tetangganya diberi angka 2.'],[this.mz(3,3,R,g,4),'Angka terus menyebar seperti gelombang: 3, lalu 4.'],[this.mz(3,3,R,g,6),'Harta mendapat angka <b>6</b>. Jadi butuh 6 langkah!']]},
 tanya:'Paling sedikit, berapa <mark>langkah</mark> sampai ke peti harta?',
 opsi:['8 langkah','10 langkah','12 langkah','14 langkah'],jawab:2,
 bahas(){const R=this.RK,g=[4,4],P=[[0,0],[0,1],[0,2],[0,3],[0,4],[1,4],[2,4],[2,3],[2,2],[3,2],[4,2],[4,3],[4,4]];return [[this.mz(5,5,R,g,2),'Angka 1 dan 2 menyebar dari kapal selam. Jalan ke kanan atas ternyata buntu.'],[this.mz(5,5,R,g,6),'Gelombang angka turun ke bawah, lalu belok ke kanan: 4, 5, 6.'],[this.mz(5,5,R,g,9),'Lalu naik lewat celah di tengah: 7, 8, 9.'],[this.mz(5,5,R,g,12),'Peti harta mendapat angka <b>12</b>. Jalan terpendek butuh 12 langkah.'],[this.mz(5,5,R,g,12,P),'Ini jalannya. Tanpa batu, cukup 8 langkah, tetapi batu-batu memaksa kapal selam memutar.']]},
 info:'Menyebarkan angka selapis demi selapis disebut <b>penelusuran melebar</b> (breadth-first search). Robot di gudang dan tokoh dalam permainan komputer memakai cara ini untuk menemukan jalan tercepat di labirin.',kunci:'labirin, breadth-first search'},

/* 16 */{judul:'Kabel Internet Antarpulau',konsep:'Graf',tingkat:'Sulit',
 cerita:'Profesor Lina ingin memasang kabel internet bawah laut agar kelima pulau bisa saling berkirim pesan. Angka pada garis adalah biaya memasang kabel itu, dalam keping emas.',
 aturan:['Dua pulau dianggap tersambung jika ada jalur kabel di antaranya, boleh melewati pulau lain.','Tidak perlu memasang semua kabel. Cari biaya total yang <b>paling murah</b>.'],
 N:{A:[70,80],B:[250,52],C:[170,185],D:[420,125],E:[320,255]},E:[['A','B',4],['A','C',1],['B','C',2],['B','D',5],['C','D',8],['C','E',3],['D','E',6]],
 ms(N,E,ch=[],rej=[],fresh,W=490,H=300){let s=`<rect width="${W}" height="${H}" rx="16" fill="#1F7FA6" opacity=".9"/>`;
  E.forEach(([a,b,w])=>{const k=a+b,on=ch.includes(k);s+=`<line x1="${N[a][0]}" y1="${N[a][1]}" x2="${N[b][0]}" y2="${N[b][1]}" stroke="${on?'#FFD84D':'#BFE6F2'}" stroke-width="${on?8:3}" ${on?'':'stroke-dasharray="7 7"'} stroke-linecap="round" pathLength="1" ${on&&k===fresh?'class="drawl"':''} opacity="${on?1:.7}"/>`});
  E.forEach(([a,b,w])=>{const k=a+b,x=(N[a][0]+N[b][0])/2,y=(N[a][1]+N[b][1])/2;s+=`<circle cx="${x}" cy="${y}" r="15" fill="#fff" stroke="${ch.includes(k)?'#E0A100':'#7FB8CC'}" stroke-width="2.5"/>`+T(x,y,w,'t','style="fill:#172041;font-size:15px"');if(rej.includes(k))s+=`<g data-k="rj${k}" data-in="stamp"><path d="M${x-13} ${y-13} l26 26 M${x+13} ${y-13} l-26 26" stroke="#DD4343" stroke-width="5" stroke-linecap="round"/></g>`});
  Object.entries(N).forEach(([k,[x,y]])=>{s+=`<g data-k="is${k}">${island(x,y-6)}</g>`+`<circle cx="${x+24}" cy="${y-22}" r="12" fill="#FF6F59"/>`+T(x+24,y-22,k,'t','style="fill:#fff;font-size:13px"')});
  return svgw(W,H,s,520)},
 visual(){return this.ms(this.N,this.E)},
 demo(){const N={X:[80,70],Y:[300,70],Z:[190,180]},E=[['X','Y',2],['Y','Z',3],['X','Z',4]],f=(c,r,n)=>this.ms(N,E,c,r,n,380,230);return [[f([],[]),'Contoh: 3 pulau dengan 3 pilihan kabel.'],[f(['XY'],[],'XY'),'Pasang kabel termurah dulu: <b>2</b>.'],[f(['XY','YZ'],[],'YZ'),'Lalu kabel 3. Ketiga pulau sudah tersambung!'],[f(['XY','YZ'],['XZ']),'Kabel 4 tidak perlu, karena X dan Z sudah tersambung lewat Y. Totalnya 2 + 3 = <b>5</b>.']]},
 tanya:'Berapa <mark>biaya paling murah</mark> agar semua pulau tersambung?',
 opsi:['10 keping emas','11 keping emas','13 keping emas','15 keping emas'],jawab:1,
 bahas(){const f=(c,r,n)=>this.ms(this.N,this.E,c,r,n);return [[f(['AC'],[],'AC'),'Mulai dari kabel termurah: A–C (1).'],[f(['AC','BC'],[],'BC'),'Lalu B–C (2).'],[f(['AC','BC','CE'],[],'CE'),'Lalu C–E (3).'],[f(['AC','BC','CE'],['AB']),'A–B (4) dilewati: A dan B sudah tersambung lewat C, jadi kabel ini tidak perlu.'],[f(['AC','BC','CE','BD'],['AB'],'BD'),'D belum tersambung. Kabel termurah ke D adalah B–D (5). Semua pulau tersambung! Totalnya 1 + 2 + 3 + 5 = <b>11</b>.']]},
 info:'Masalah ini disebut <b>pohon rentang minimum</b>. Perusahaan listrik, telepon, dan internet memakainya untuk menghemat kabel. Caranya sederhana: selalu pilih kabel termurah yang tidak membentuk putaran.',kunci:'graf, pohon rentang minimum'},

/* 17 */{judul:'Gerbang Tukar Ikan',konsep:'Perbandingan',tingkat:'Sulit',
 cerita:'Ikan-ikan bernomor berenang dari kiri ke kanan di 4 jalur. Di tengah jalan ada <b>gerbang tukar</b> (garis tegak) yang menghubungkan dua jalur.',
 aturan:['Di setiap gerbang, dua ikan di kedua ujung gerbang dibandingkan.','Ikan dengan angka <b>lebih kecil</b> selalu keluar di jalur yang <b>lebih atas</b>.','Ikan yang tidak bertemu gerbang tetap di jalurnya.'],
 G:[[0,1,120],[2,3,120],[0,2,225],[1,3,330]],
 sn(nL,G,vals,x,hl=[]){const Y=i=>40+i*60;let s='';for(let i=0;i<nL;i++)s+=`<line x1="20" y1="${Y(i)}" x2="460" y2="${Y(i)}" stroke="#7FB8CC" stroke-width="4" stroke-linecap="round"/>`+T(470,Y(i),i+1,'tm');
  G.forEach(([a,b,gx],gi)=>{const on=hl.includes(gi);s+=`<line x1="${gx}" y1="${Y(a)}" x2="${gx}" y2="${Y(b)}" stroke="${on?'#FF6F59':'#5B6684'}" stroke-width="${on?6:4}"/><circle cx="${gx}" cy="${Y(a)}" r="7" fill="${on?'#FF6F59':'#5B6684'}"/><circle cx="${gx}" cy="${Y(b)}" r="7" fill="${on?'#FF6F59':'#5B6684'}"/>`});
  const FC={2:'#FF6F59',3:'#FF6F59',4:'#3D8BE0',5:'#8E6BD8',6:'#3FA34D',8:'#F5A623'};vals.forEach((v,i)=>s+=`<g data-k="f${v}">${fish(x,Y(i),FC[v]||'#13B5A6',1.2)}<circle cx="${x+2}" cy="${Y(i)}" r="9" fill="#fff"/>${T(x+2,Y(i),v,'t','style="font-size:12px"')}</g>`);
  return svgw(485,40+nL*60-10,s,500)},
 visual(){return this.sn(4,this.G,[8,2,6,4],50)},
 demo(){const G=[[0,1,240]];return [[this.sn(2,G,[5,3],70),'Contoh: ikan 5 di jalur atas, ikan 3 di jalur bawah.'],[this.sn(2,G,[5,3],200,[0]),'Mereka bertemu di gerbang dan dibandingkan.'],[this.sn(2,G,[3,5],400,[0]),'3 lebih kecil, jadi 3 pindah ke jalur <b>atas</b>, dan 5 ke jalur bawah.']]},
 tanya:'Ikan bernomor berapa yang keluar di <mark>jalur ke-3</mark> (dihitung dari atas)?',
 opsi:['2','4','6','8'],jawab:1,
 bahas(){const G=this.G;return [[this.sn(4,G,[8,2,6,4],50),'Ikan 8, 2, 6, 4 masuk dari kiri.'],[this.sn(4,G,[2,8,4,6],175,[0,1]),'Gerbang pertama: 8 dan 2 bertukar (2 lebih kecil, naik). 6 dan 4 juga bertukar.'],[this.sn(4,G,[2,8,4,6],280,[2]),'Gerbang jalur 1 dan 3: 2 dan 4. Yang kecil sudah di atas, jadi tidak bertukar.'],[this.sn(4,G,[2,6,4,8],410,[3]),'Gerbang jalur 2 dan 4: 8 dan 6 bertukar. Dari atas: 2, 6, <b>4</b>, 8. Jalur ke-3 adalah 4. Gerbangnya kurang satu, jadi ikannya belum urut!']]},
 info:'Susunan gerbang ini disebut <b>jaringan pengurutan</b>. Komputer dengan banyak prosesor bisa membandingkan banyak pasangan sekaligus sehingga pengurutan sangat cepat, asalkan gerbangnya disusun dengan benar.',kunci:'jaringan pengurutan, perbandingan'},

/* 18 */{judul:'Mutiara Palsu',konsep:'Strategi Pencarian',tingkat:'Sulit',
 cerita:'Oki punya 9 mutiara yang tampak sama. Satu di antaranya palsu dan <b>sedikit lebih berat</b>. Oki punya timbangan dua lengan tanpa anak timbangan.',
 aturan:['Setiap kali menimbang, Oki boleh menaruh beberapa mutiara di kiri dan beberapa di kanan.','Timbangan hanya menunjukkan: kiri turun, kanan turun, atau seimbang.','Cari cara dengan jumlah menimbang <b>paling sedikit</b> yang <b>pasti</b> menemukan mutiara palsu.'],
 pr(n,pos,tilt=0,hot,cnt){const a=tilt*10,PL=110,PR=370,yl=176-tilt*-1*0+(tilt<0?16:tilt>0?-16:0),yr=176+(tilt<0?-16:tilt>0?16:0);let s=`<path d="M220 270 L260 270 L240 238 Z" fill="#8E97B5"/><line x1="240" y1="238" x2="240" y2="${(yl+yr)/2-58}" stroke="#8E97B5" stroke-width="6"/><line x1="${PL}" y1="${yl-58}" x2="${PR}" y2="${yr-58}" stroke="#5B6684" stroke-width="6" stroke-linecap="round"/>`;
  [[PL,yl],[PR,yr]].forEach(([x,y])=>s+=`<path d="M${x} ${y-58} L${x-46} ${y} M${x} ${y-58} L${x+46} ${y}" stroke="#AEB6C8" stroke-width="1.5"/><path d="M${x-56} ${y} Q${x} ${y+22} ${x+56} ${y} Z" fill="#C9973E"/>`);
  const side={L:[],R:[]};const P=[];for(let i=0;i<n;i++){const p=pos[i]||'row';let x,y,op=1;if(p==='L'||p==='R'){const j=side[p].push(i)-1,bx=p==='L'?PL:PR,by=p==='L'?yl:yr;x=bx-32+j*32;y=by-14}else if(p[0]==='g'||p[0]==='x'){const g=+p[1];x=n===9?50+g*150+(i%3)*36:60+i*60;y=40;if(p[0]==='x')op=.3}else{x=n===9?40+i*50:60+i*60;y=40}P.push(`<g data-k="p${i}" opacity="${op}">${pearl(x,y,i+1,hot===i)}</g>`)}
  s+=P.join('');if(n===9&&Object.values(pos).some(p=>p[0]==='g'))[0,1,2].forEach(g=>s+=`<rect x="${26+g*150}" y="16" width="120" height="48" rx="14" fill="none" stroke="#13B5A6" stroke-width="2.5" stroke-dasharray="6 5"/>`);
  return svgw(480,280,s,500)+(cnt!==undefined?`<div class="chips"><span class="chip on" data-k="cnt" data-s="${cnt}">Menimbang: ${cnt} kali</span></div>`:'')},
 visual(){return this.pr(9,{})},
 demo(){return [[this.pr(3,{},0,undefined,0),'Contoh: 3 mutiara, satu lebih berat.'],[this.pr(3,{0:'L',1:'R'},0,undefined,1),'Timbang 1 lawan 2. Jika <b>seimbang</b>, yang berat pasti nomor 3.'],[this.pr(3,{0:'L',1:'R'},-1,0,1),'Jika sisi kiri turun, yang berat nomor 1. Apa pun hasilnya, <b>1 kali</b> menimbang sudah cukup!']]},
 tanya:'Paling sedikit, berapa <mark>kali menimbang</mark> yang pasti cukup untuk 9 mutiara?',
 opsi:['1 kali','2 kali','3 kali','4 kali'],jawab:1,
 bahas(){const g={},w={};for(let i=0;i<9;i++){g[i]='g'+Math.floor(i/3);w[i]=i<3?'L':i<6?'R':'g2'}const t={};for(let i=0;i<6;i++)t[i]='x'+Math.floor(i/3);t[6]='L';t[7]='R';t[8]='g2';
  return [[this.pr(9,g,0,undefined,0),'Bagi 9 mutiara menjadi 3 kelompok, masing-masing berisi 3.'],[this.pr(9,w,0,undefined,1),'Timbangan 1: kelompok 1 lawan kelompok 2. Misalnya seimbang, berarti mutiara palsu ada di kelompok 3. Jika miring, kelompok yang turun yang berisi mutiara palsu.'],[this.pr(9,t,0,undefined,2),'Timbangan 2: ambil 2 mutiara dari kelompok itu, misalnya 7 lawan 8. Jika seimbang, yang palsu adalah 9. Jika miring, yang turun itu yang palsu.'],[this.pr(9,t,0,8,2),'Apa pun hasilnya, <b>2 kali</b> menimbang selalu cukup. 1 kali tidak cukup, karena satu timbangan hanya punya 3 hasil, padahal ada 9 kemungkinan.']]},
 info:'Membagi menjadi tiga kelompok setiap kali adalah cara pintar untuk mencari dengan cepat. Ilmuwan komputer selalu bertanya: berapa langkah paling sedikit yang <b>pasti</b> cukup, bahkan untuk keadaan yang paling sial?',kunci:'pencarian, pembagian kelompok'},

/* 19 */{judul:'Siapa Mencuri Mutiara Ratu?',konsep:'Logika Pernyataan',tingkat:'Sulit',
 cerita:'Mutiara Ratu Laut hilang! Tiga ikan diperiksa: Kiko, Lolo, dan Mimi. Pencurinya hanya satu ikan.',
 aturan:['Dari tiga ikan itu, <b>hanya satu</b> yang berkata jujur. Dua lainnya berbohong.','Coba anggap setiap ikan sebagai pencuri, lalu hitung berapa yang jujur.'],
 says(L){const C={Kiko:'#FF9F43',Lolo:'#3D8BE0',Mimi:'#8E6BD8',Pipi:'#F2708A'};return `<div class="says">${L.map(([n,q])=>`<div class="say"><svg viewBox="-32 -22 64 44" width="56" aria-hidden="true">${fish(0,0,C[n],1.3)}</svg><div><b>${n}</b><br><q>${q}</q></div></div>`).join('')}</div>`},
 S:[['Kiko','Bukan aku yang mencuri.'],['Lolo','Mimi pencurinya.'],['Mimi','Aku tidak mencuri.']],
 tb(rows){const H=['Kiko','Lolo','Mimi'];return this.says(this.S)+`<div style="overflow-x:auto;max-width:100%"><table class="lt"><tr><th>Jika pencurinya</th>${H.map(h=>`<th>${h}</th>`).join('')}<th>Yang jujur</th></tr>${H.map((h,r)=>{const R=rows[r];return `<tr><th>${h}</th>${[0,1,2].map(c=>`<td>${R?`<span data-k="t${r}${c}" data-in="stamp" style="display:inline-block;color:${R[0][c]?'var(--ok)':'var(--bad)'}">${R[0][c]?'jujur':'bohong'}</span>`:''}</td>`).join('')}<td>${R?`<span data-k="t${r}n" data-in="pop" style="display:inline-block;font-weight:900;color:${R[1]===1?'var(--ok)':'var(--bad)'}">${R[1]} ${R[1]===1?'✓':'✗'}</span>`:''}</td></tr>`}).join('')}</table></div>`},
 visual(){return this.says(this.S)},
 demo(){const P=[['Pipi','Aku tidak mencuri.']];return [[this.says(P),'Contoh: Pipi berkata, "Aku tidak mencuri." Kita tahu Pipi <b>selalu berbohong</b>.'],[this.says(P)+`<div class="chips"><span class="chip nw" style="background:var(--bad-soft);color:var(--bad)">Pernyataan Pipi bohong</span></div>`,'Karena Pipi bohong, yang benar adalah <b>kebalikan</b> kata-katanya.'],[this.says(P)+`<div class="chips"><span class="chip nw on">Pipi mencuri!</span></div>`,'Kebalikan dari "aku tidak mencuri" adalah "aku mencuri". Jadi Pipi pencurinya!']]},
 tanya:'Siapa <mark>pencuri</mark> mutiara?',
 opsi:['Kiko','Lolo','Mimi','Tidak bisa diketahui'],jawab:0,
 bahas(){const A=[[[0,0,1],1],[[1,0,1],2],[[1,1,0],2]];return [[this.tb([]),'Kita coba satu per satu: <b>anggap</b> salah satu ikan pencurinya, lalu periksa siapa yang jujur.'],[this.tb([A[0]]),'Jika Kiko pencurinya: Kiko bohong, Lolo bohong (karena bukan Mimi), Mimi jujur. Hanya <b>1</b> yang jujur. Cocok!'],[this.tb([A[0],A[1]]),'Jika Lolo pencurinya: Kiko jujur, Lolo bohong, Mimi jujur. Ada 2 yang jujur. Tidak cocok.'],[this.tb(A),'Jika Mimi pencurinya: Kiko jujur, Lolo jujur, Mimi bohong. Ada 2 yang jujur. Tidak cocok. Pencurinya <b>Kiko</b>!']]},
 info:'Cara "anggap saja, lalu periksa" disebut <b>mencoba semua kemungkinan</b>. Komputer sangat cepat melakukannya, misalnya saat mencari jawaban teka-teki atau memeriksa jadwal yang bertabrakan.',kunci:'logika, mencoba semua kemungkinan'},

/* 20 */{judul:'Pipa Akuarium Raksasa',konsep:'Aliran',tingkat:'Sulit',
 cerita:'Akuarium raksasa Profesor Lina diisi air laut lewat jaringan pipa. Angka pada pipa menunjukkan berapa liter air yang bisa lewat setiap menit.',
 aturan:['Pipa yang <b>berderet</b> (sambung-menyambung): air tertahan oleh pipa yang paling kecil.','Pipa yang <b>berdampingan</b> (bercabang): airnya dijumlahkan.'],
 pp(hl={},res){const pipe=(x1,y1,x2,y2,cap,id)=>{const on=hl[id],w=4+cap*3;return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${on?'#13B5A6':'#8E97B5'}" stroke-width="${w}" stroke-linecap="round"/>`+(on?`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#BDEFE8" stroke-width="${Math.max(3,w-10)}" stroke-linecap="round" class="flow"/>`:'')+`<g data-k="p${id}" data-s="${!!on}"><circle cx="${(x1+x2)/2}" cy="${(y1+y2)/2}" r="16" fill="#fff" stroke="${on?'#13B5A6':'#8E97B5'}" stroke-width="3"/>${T((x1+x2)/2,(y1+y2)/2,cap,'t','style="fill:#172041;font-size:16px"')}</g>`};
  let s=`<rect x="10" y="90" width="58" height="80" rx="10" fill="#3D8BE0"/><rect x="14" y="110" width="50" height="56" rx="6" fill="#7FC4F0"/>`+T(39,80,'tangki','tm');
  s+=`<path d="M68 130 H86 V70 M86 130 V190" stroke="#8E97B5" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M344 70 V190" stroke="#8E97B5" stroke-width="10" stroke-linecap="round"/>`;
  s+=pipe(86,70,205,70,5,'a')+pipe(215,70,344,70,3,'b')+pipe(86,190,205,190,4,'c')+pipe(215,190,344,190,6,'d')+pipe(344,130,440,130,6,'e');
  s+=`<path d="M440 100 Q440 180 470 180 Q500 180 500 100" fill="#7FC4F0" stroke="#3D8BE0" stroke-width="3" transform="translate(-30 20)"/>`+T(455,196,'kolam','tm');
  return svgw(490,225,s,520)+(res?`<div class="chips"><span class="chip on" data-k="res" data-s="${res}">${res}</span></div>`:'')},
 visual(){return this.pp()},
 demo(){const two=(series)=>{let s=`<line x1="30" y1="60" x2="${series?160:330}" y2="60" stroke="#13B5A6" stroke-width="${series?19:10}" stroke-linecap="round"/>`;if(series)s+=`<line x1="170" y1="60" x2="330" y2="60" stroke="#13B5A6" stroke-width="10" stroke-linecap="round"/>`+`<circle cx="95" cy="60" r="15" fill="#fff" stroke="#13B5A6" stroke-width="3"/>`+T(95,60,5,'t')+`<circle cx="250" cy="60" r="15" fill="#fff" stroke="#13B5A6" stroke-width="3"/>`+T(250,60,2,'t');else s=`<path d="M20 90 H40 V45 M40 90 V135 M320 45 V135 M320 90 H345" stroke="#8E97B5" stroke-width="8" fill="none"/><line x1="40" y1="45" x2="320" y2="45" stroke="#13B5A6" stroke-width="10"/><line x1="40" y1="135" x2="320" y2="135" stroke="#13B5A6" stroke-width="13"/><circle cx="180" cy="45" r="15" fill="#fff" stroke="#13B5A6" stroke-width="3"/>`+T(180,45,2,'t')+`<circle cx="180" cy="135" r="15" fill="#fff" stroke="#13B5A6" stroke-width="3"/>`+T(180,135,3,'t');return svgw(360,series?120:180,s,380)};
  return [[two(1)+`<div class="chips"><span class="chip on nw">hasil: 2 liter per menit</span></div>`,'Contoh 1: pipa 5 lalu pipa 2 (berderet). Air tertahan di pipa kecil, jadi hanya <b>2</b> liter per menit.'],[two(0)+`<div class="chips"><span class="chip on nw">hasil: 2 + 3 = 5 liter per menit</span></div>`,'Contoh 2: pipa 2 dan pipa 3 berdampingan. Airnya dijumlahkan: 2 + 3 = <b>5</b> liter per menit.']]},
 tanya:'Paling banyak, berapa liter air per menit yang bisa <mark>sampai ke kolam</mark>?',
 opsi:['9','24','7','6'],jawab:3,
 bahas(){return [[this.pp(),'Air mengalir dari tangki ke kolam lewat dua cabang pipa, lalu bergabung di pipa terakhir.'],[this.pp({a:1,b:1},'cabang atas: 3'),'Cabang atas: pipa 5 lalu pipa 3. Air hanya bisa lewat sebanyak pipa <b>terkecil</b>: 3 liter per menit.'],[this.pp({c:1,d:1},'cabang bawah: 4'),'Cabang bawah: pipa 4 lalu pipa 6. Paling banyak 4 liter per menit.'],[this.pp({a:1,b:1,c:1,d:1},'gabungan: 3 + 4 = 7'),'Kedua cabang bergabung: 3 + 4 = 7 liter per menit menuju pipa terakhir.'],[this.pp({a:1,b:1,c:1,d:1,e:1},'sampai ke kolam: 6'),'Tetapi pipa terakhir hanya bisa dilewati 6 liter per menit. Jadi yang sampai ke kolam paling banyak <b>6</b>!']]},
 info:'Menghitung aliran seperti ini disebut masalah <b>aliran maksimum</b>. Ide yang sama dipakai untuk mengatur lalu lintas jalan, aliran air kota, dan kecepatan data di jaringan internet.',kunci:'aliran, hambatan'}
];

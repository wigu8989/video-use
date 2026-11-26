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
if(window.claude&&claude.use){claude.use('tts').then(t=>{TTS=t||null}).catch(()=>{});false&&claude.use('dictation').then(d=>{DICT=d||null;if(d){d.onPartial(e=>SP.partial(e.text));d.onFinal(e=>SP.final(e.text));d.onState(e=>SP.state(e))}}).catch(()=>{})}
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
   <div class="heroR">${heroArt()}<div class="prog">${ring(Math.round(doneN/allT.length*100),'var(--ok)',58,doneN+' dari '+allT.length+' tugas selesai')}<div><b>${doneN}/${allT.length}</b><span>tugas malam selesai</span></div></div></div></header>
  ${recentHTML()}
  <nav class="days" aria-label="Pilih hari">${PLAN.map(p=>{const n=p.tasks.filter(t=>SAVE.done[p.key+':'+t[0]+':'+t[1]]).length;const test=p.school.some(s=>/ulangan|tes|remedial|asas/i.test(s[1]));return `<button class="day ${p.key===V.day?'on':''}" data-day="${p.key}"><small>${p.day}</small><b>${p.for.split(',')[0]}</b><span>${n}/${p.tasks.length} ✓${test?' · <em>ada tes</em>':''}</span></button>`}).join('')}</nav>
  <section class="daycard"><div class="school"><h2>Besok di sekolah <small>${d.for}</small></h2><ul>${d.school.map(([s,m])=>`<li><span class="sj">${s}</span><span class="${/ulangan|tes|remedial|asas/i.test(m)?'test':''}">${m}</span></li>`).join('')}</ul><p class="tip">${d.tip}</p></div>
   <div class="tasks"><h2>Malam ini belajar</h2>${d.tasks.map(t=>{const k=d.key+':'+t[0]+':'+t[1],on=!!SAVE.done[k],s=SUBJ[t[0]];return `<div class="task ${on?'done':''}"><input type="checkbox" id="t_${esc(k)}" data-task="${esc(k)}" ${on?'checked':''}><label for="t_${esc(k)}">${s?`<span class="tic" style="color:${s.c}">${sico(t[0],18)}</span>`:''}<b style="color:${s?s.c:'var(--ink)'}">${s?s.name:'Agama'}</b> ${t[1]} <small>${t[2]}</small></label>${s?`<button class="go" data-quiz="${t[0]}">Latihan ›</button>`:''}</div>`}).join('')}</div></section>
  <section><h2 class="h2">Latihan soal <small>berdasarkan jadwal kelas 2C</small></h2>
   <div class="subs">${Object.entries(SUBJ).map(([k,s])=>`<button class="subc" data-quiz="${k}" style="--c:${s.c}"><span class="subtop"><span class="sic">${sico(k,22)}</span>${(()=>{const d=qdN(k),n=QS[k].length;if(!d)return '';const pc=Math.floor(d/n*100);return `<span class="sring" title="${d} dari ${n} soal sudah dijawab benar">${ring(Math.max(pc,1),s.c,38,d+' dari '+n+' soal sudah benar')}<small>${pc}%</small></span>`})()}</span><b>${s.name}</b><span>${s.sub}</span>${curOf(k)?`<span class="rbadge">▶ Lanjutkan soal ${Math.min((curOf(k).res||[]).filter(v=>v!=null).length+1,curOf(k).n)}/${curOf(k).n}</span>`:''}<span class="meta">${qdN(k)?`<b>${qdN(k)}/${QS[k].length}</b> soal sudah benar`:`${QS[k].length} soal`}${SAVE.best[k]!=null?` · nilai terbaik ${SAVE.best[k]}%${bestN(k)?` (${bestN(k)} soal)`:''}`:''}${s.check?' · <em>cocokkan dgn buku</em>':''}</span></button>`).join('')}</div></section>
  <p class="foot">Soal bertanda <em>cocokkan dgn buku</em> dibuat dari materi umum kelas 2 karena isi bab/unit tidak tercantum di jadwal. Agama tidak dibuatkan soal karena perlu disesuaikan dengan agama Hector.</p>`}

/* ===== kuis ===== */
let Q=null;
const WRITE_ON=false;
const babOf=k=>{try{const b=(SAVE.bab||{})[k]||'';return (!WRITE_ON&&/^w\d/.test(b))?'':b}catch(_){return ''}};
const BON=k=>SUBJ[k].bonus||[];const MAIN=k=>(SUBJ[k].babs||[]).filter(b=>!BON(k).includes(b));
const pool=k=>{const b=babOf(k);if(b)return QS[k].filter(q=>String(q.bab)===b);return SUBJ[k].babs?QS[k].filter(q=>MAIN(k).includes(q.bab)):QS[k]};
const mix=a=>a.map(q=>[Math.random(),q]).sort((x,y)=>x[0]-y[0]).map(x=>x[1]);
const babLbl=(b,k)=>{const L=k&&SUBJ[k].blbl;return L&&L[b]?L[b]:b==='cerita'?'Hafalan 孔融让梨':'Bab '+b};
function openQuiz(k){Q=null;const s=SUBJ[k],n=pool(k).length,cb=babOf(k);
  const babs=s.babs?`<div class="babs" role="group" aria-label="Pilih bab"><button class="bab ${cb?'':'on'}" data-bab="${k}:">${s.allLbl||'Bab 1–6'} <small>urut</small></button>${MAIN(k).map(b=>`<button class="bab ${cb===String(b)?'on':''}" data-bab="${k}:${b}">${babLbl(b,k)}<small>${QS[k].filter(q=>String(q.bab)===String(b)).length}</small></button>`).join('')}</div>${s.babs.includes('cerita')?`<div class="bonus"><span class="eyebrow">Bonus · di luar ASAS</span><button class="bab ${cb==='cerita'?'on':''}" data-bab="${k}:cerita">📖 Hafalan 孔融让梨<small>${QS[k].filter(q=>q.bab==='cerita').length}</small></button></div>`:''}${BON(k).some(b=>/^w\d/.test(b))?`<div class="bonus"><span class="eyebrow">✍️ Latihan menulis 写字 · Panduan Menulis</span><div class="babs">${BON(k).filter(b=>/^w\d/.test(b)).map(b=>`<button class="bab ${cb===b?'on':''}" data-bab="${k}:${b}">✍️ Bab ${b.slice(1)}<small>${QS[k].filter(q=>q.bab===b).length} huruf</small></button>`).join('')}</div></div>`:''}${/^w\d/.test(cb)?`<div class="wmode" role="group" aria-label="Mode menulis"><button class="bab ${(SAVE.wmode||'latihan')==='latihan'?'on':''}" data-wmode="latihan">✍️ Latihan 描红</button><button class="bab ${SAVE.wmode==='dikte'?'on':''}" data-wmode="dikte">🎧 Dikte 听写 · dinilai</button><button class="spk" data-sheet="${cb.slice(1)}">🖨️ Lembar dikte Bab ${cb.slice(1)}</button></div>`:''}${/^w\d/.test(cb)&&SAVE.wmode==='dikte'?`<div class="note"><b>🎧 Dikte 听写 Bab ${cb.slice(1)} (dinilai)</b><p>Huruf <b>disembunyikan</b>. Hector hanya mendengar huruf/kata dan melihat pinyin + arti, lalu menulis dari ingatan. Nilai per goresan: benar langsung = 1, benar setelah 1 kali salah = ½, perlu petunjuk = 0. Lulus jika nilai ≥ 80 tanpa petunjuk. Huruf <b>dikuasai</b> jika lulus di 2 hari berbeda — lihat Rapor.</p></div>`:''}${/^w\d/.test(cb)&&SAVE.wmode!=='dikte'?`<div class="note"><b>✍️ Latihan menulis Bab ${cb.slice(1)}</b><p>Seperti buku Panduan Menulis: (1) lihat urutan goresan, (2) <b>tebalkan</b> huruf di atas contoh tipis 描红, (3) <b>tulis sendiri</b> tanpa contoh 默写. Setiap goresan diperiksa urutan dan arahnya. Tulis dengan jari di dalam kotak 田字格. Latihan ini <b>tidak</b> masuk penilaian penguasaan.</p></div>`:''}${cb==='cerita'?`<div class="note"><b>孔融让梨 · Kǒng Róng ràng lí</b><p>Lembar budaya (传统文化) untuk <b>dihafal</b>: 8 baris tentang Kong Rong (4 tahun) yang memberi pir besar untuk kakak dan adiknya, dan menyimpan yang kecil untuk dirinya sendiri. Pesannya: 友爱孝悌，谦虚礼让 (saling menyayangi, rendah hati, mau berbagi).</p><p><b>Urutan latihan:</b> dengar &amp; <b>ucapkan 8 baris dengan benar</b> → tiap baris: susun, lengkapi huruf, ucapkan lagi → sambung baris berikutnya → pahami isi. Soal tidak diacak supaya hafalannya bertahap.</p></div>`:''}`:'';
  app.innerHTML=`<div class="qbar"><button class="back" data-home="1" aria-label="Kembali ke Home"><svg class="hico" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h5v-6h4v6h5V10"/></svg>Home</button><b style="color:${s.c}">${s.name}</b></div><section class="qcard start" style="--c:${s.c}"><span class="eyebrow">${s.sub}</span>${curBanner(k)}${babs}<h2>Mau latihan berapa soal?</h2><p>${n} soal tersedia${cb?' · '+babLbl(cb,k):''}${SAVE.best[k]!=null?` · nilai terbaik ${SAVE.best[k]}`:''}</p>
   <div class="startopts">${n>10&&cb!=='cerita'?`<button class="sbtn" data-start="${k}:10"><b>10</b><span>soal acak</span><small>± 5 menit</small></button>`:''}${n>20&&cb!=='cerita'?`<button class="sbtn" data-start="${k}:20"><b>20</b><span>soal acak</span><small>± 10 menit</small></button>`:''}<button class="sbtn" data-start="${k}:${n}"><b>${n}</b><span>semua soal</span><small>± ${Math.max(3,Math.round(n/2.5))>60?'60+':Math.max(3,Math.round(n/2.5))} menit</small></button></div>
   <div class="histbox"><h3>Riwayat latihan</h3>${trend(histOf(k),s.c)}${histTable(histOf(k).slice(-10),false)}</div></section>`;scrollTo({top:0})}
function startQuiz(k,cnt){const all=pool(k);let list=all;
  if(SUBJ[k].babs&&!babOf(k)){const G=MAIN(k).map(b=>mix(all.filter(q=>q.bab===b))),NG=G.length;
    if(cnt>=all.length)list=G.flat();else{const per=G.map(()=>Math.floor(cnt/NG));let r=cnt-per.reduce((s,x)=>s+x,0);mix(G.map((_,i)=>i)).slice(0,r).forEach(i=>per[i]++);list=G.flatMap((g,i)=>g.slice(0,per[i]))}}
  else if(babOf(k)==='cerita'){list=all}
  else if(/^w\d/.test(babOf(k))){list=(SAVE.wmode==='dikte'||cnt<all.length)?mix(all).slice(0,cnt):all}
  else if(cnt<all.length||SUBJ[k].babs){list=all.map(q=>[Math.random(),q]).sort((x,y)=>x[0]-y[0]).slice(0,cnt).map(x=>x[1])}clearCur(k);Q={k,i:0,ok:0,tries:0,list,P:{},t0:Date.now(),wmode:isW(babOf(k))?(SAVE.wmode||'latihan'):null};renderQ();scrollTo({top:0})}
function renderQ(){const s=SUBJ[Q.k],q=Q.list[Q.i];Q.tries=0;Q.done=false;
  let body='';
  if(q.fig==='room')body+=figRoom();if(q.fig==='row')body+=figRow();if(q.row)body+=figRow(q.row);
  if(q.pat)body+=`<div class="pat">${q.pat.map(patItem).join('')}</div>`;
  if(q.img==='stars12')body+=`<div class="stars">${[...Array(12)].map(()=>SV(SH.st,undefined,30)).join('')}</div>`;else if(q.img)body+=`<div class="bigimg">${SV(IMG[q.img],undefined,110)}</div>`;
  if(q.read){const rz=/[\u4e00-\u9fff]/.test(q.read)?q.read.replace(/<[^>]+>/g,'，').replace(/——/g,''):'';body+=`<blockquote class="read" ${rz?'lang="zh"':''}>${q.read}</blockquote>${rz&&!q.say?`<div class="lis sm"><button class="spk" data-say="${esc(rz)}" data-lang="zh">🔊 Dengar teks</button><button class="spk" data-say="${esc(rz)}" data-lang="zh" data-slow="1">🐢 Pelan</button></div>`:''}`}
  if(q.zh)body+=`<div class="zh"><span lang="zh">${q.zh}</span><div class="zhbtn">${q.say?`<button class="spk" data-say="${esc(q.say)}" data-lang="zh">🔊 Dengar</button>`:''}${q.zpy?`<button class="spk pyt" data-pyt="1" aria-pressed="false">拼 Pinyin</button>`:''}</div>${q.zpy?`<p class="zpy" hidden>${q.zpy}</p>`:''}</div>`;
  const LG=q.lang||'en';if(q.sub)body+=`<p class="qsub">${q.sub}</p>`;
  if(q.say&&!q.zh&&!q.build)body+=`<div class="lis"><button class="spk big" data-say="${esc(q.say)}" data-lang="${LG}">🔊 ${LG==='zh'?'听一听 · ':''}Dengarkan</button><button class="spk" data-say="${esc(q.say)}" data-lang="${LG}" data-slow="1">🐢 Pelan</button></div>`;
  let ans='';
  if(q.o)ans=`<div class="opts ${q.pat?'patopts':''}">${q.o.map(o=>`<button class="opt" data-pick="${esc(o)}">${optLabel(q,o)}</button>`).join('')}</div>`;
  if(q.sort)ans=sortHTML(q);
  if(q.speak)ans=speakHTML(q);
  if(q.poem)ans=poemHTML(q);
  if(q.write)ans=Q.wmode==='dikte'?writeDHTML(q):writeHTML(q);
  if(q.type)ans=typeHTML(q);
  if(q.build){Q.bpool=q.build.map((_,i)=>i).sort(()=>Math.random()-.5);if(Q.bpool.every((v,i)=>v===i)&&Q.bpool.length>1)Q.bpool.reverse();Q.bans=[];ans='<div id="bwrap"></div>'}
  app.innerHTML=`<div class="qbar"><button class="back" data-home="1" aria-label="Kembali ke Home"><svg class="hico" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h5v-6h4v6h5V10"/></svg>Home</button><b style="color:${s.c}">${s.name}${q.bab?` · ${babLbl(q.bab,Q.k).replace('Hafalan ','')}`:''}</b><button class="navbtn" data-nav="1" aria-expanded="${Q.navOpen?'true':'false'}" aria-controls="navp">${navLabel()}</button><button class="savebtn" data-save="1" aria-label="Simpan kemajuan">💾 Simpan</button><div class="bar"><i style="width:${Math.round(((Q.res||[]).filter(v=>v!=null).length)/Q.list.length*100)}%;background:${s.c}"></i></div></div>${navHTML()}
   <section class="qcard" style="--c:${s.c}"><h2>${q.write&&Q.wmode==='dikte'?`Bab ${String(q.bab).slice(1)} · 听写 · Tulis huruf yang kamu dengar`:q.q}</h2>${(()=>{const st=qst((Q.res||[])[Q.i]);return st==='b'?'':`<p class="again ${st}">${st==='r'?'✗ Sebelumnya jawabanmu <b>salah</b> di soal ini. Coba lagi untuk latihan (nilai pertama tetap tercatat).':st==='y'?'½ Sebelumnya benar setelah salah. Coba lagi supaya benar langsung.':'✓ Soal ini sudah dikerjakan dengan benar.'}</p>`})()}${body}${ans}<div class="msg" id="msg" aria-live="polite"></div><div id="fb"></div></section>`;
  if(q.say&&!q.zh&&!q.build)setTimeout(()=>speak(q.say,LG),400);if(q.type)initType(q);if(q.build)drawBuild();if(q.write){if(Q.wmode==='dikte')initDikte(q);else initWrite(q)}if(q.sort)redrawSort()}
function drawBuild(){const q=Q.list[Q.i],w=document.getElementById('bwrap');if(!w)return;const used=new Set(Q.bans),full=Q.bans.length===q.build.length;
  w.innerHTML=`<div class="bline ${Q.done?'done':''}" aria-label="Kalimatmu">${Q.bans.length?Q.bans.map(i=>`<button class="btok in ${q.bid?'id':''}" data-bi="${i}" ${Q.done?'disabled':''} ${q.bid?'':'lang="zh"'}>${q.build[i]}</button>`).join(''):'<span class="bph">Ketuk kata di bawah sesuai urutan…</span>'}</div>
  <div class="bpool">${Q.bpool.map(i=>`<button class="btok ${q.bid?'id':''}" data-bi="${i}" ${used.has(i)||Q.done?'disabled':''} ${q.bid?'':'lang="zh"'}>${q.build[i]}</button>`).join('')}</div>
  ${Q.done?'':`<div class="brow"><button class="btn ghost" id="breset" ${Q.bans.length?'':'disabled'}>↺ Ulang</button><button class="btn" id="bcheck" ${full?'':'disabled'}>Periksa ✓</button></div>`}`}
function buildTap(i){const q=Q.list[Q.i];if(Q.done)return;i=+i;const k=Q.bans.indexOf(i);if(k>=0)Q.bans.splice(k,1);else Q.bans.push(i);drawBuild()}
function buildCheck(){const q=Q.list[Q.i];if(Q.done)return;const s=Q.bans.map(i=>q.build[i]).join(q.bid?' → ':''),ok=s===q.build.join(q.bid?' → ':'')||(q.alt||[]).includes(s);
  if(ok){Q.done=true;if(Q.tries===0)Q.ok++;sfx.ok();drawBuild();burst(document.querySelector('.bline'));fb(true)}
  else{sfx.bad();Q.tries++;const l=document.querySelector('.bline');l.classList.remove('shake');void l.offsetWidth;l.classList.add('shake');
    if(Q.tries>=2){Q.done=true;Q.bans=q.build.map((_,i)=>i);drawBuild();fb(false)}else document.getElementById('msg').textContent='Urutannya belum tepat. Coba lagi!'}}
function poemHTML(q){const h=Q.hide||0,ok=Q.pok||{},msg=Q.pmsg||{},n=q.poem.length,done=q.poem.filter((_,i)=>ok[i]).length,mic=DICT&&!Q.noMic;return `<div class="hidebar" role="group" aria-label="Mode hafalan">${['Lihat semua','Tutup arti','Tutup huruf','Hanya huruf pertama'].map((t,i)=>`<button class="bab ${h===i?'on':''}" data-hide="${i}">${t}</button>`).join('')}</div>
 <div class="poemwrap"><p class="pnote">🗣️ <b>Ucapkan setiap baris dengan benar.</b> Ketuk teks untuk mendengar contoh, lalu ucapkan dengan lantang. Baris yang sudah benar berubah hijau.</p>
 <ol class="poem h${h}">${q.poem.map(([z,p,m],i)=>`<li class="${ok[i]?'pok':''}" id="pl${i}"><button class="pl" data-say="${esc(z)}" data-lang="zh" aria-label="Dengar baris ${i+1}"><span class="pz" lang="zh">${h===3&&!ok[i]?`<b>${[...z][0]}</b>${[...z].slice(1).map(c=>/[，。]/.test(c)?c:'＿').join('')}`:z}</span><span class="pp">${p}</span><span class="pm">${m}</span></button>
  <div class="plrow">${ok[i]?'<span class="pbadge">✓ Benar</span>':mic?`<button class="plmic" data-pmic="${i}">🎤 Ucapkan</button>`:`<button class="plmic self" data-pself="${i}">✓ Mama/Papa: sudah benar</button>`}<span class="plh" id="ph${i}">${msg[i]||''}</span></div></li>`).join('')}</ol>
 <div class="pprog"><span class="bar"><i style="width:${Math.round(done/n*100)}%"></i></span><b>${done}/${n}</b> baris benar</div></div>
 <div class="lis"><button class="spk big" data-say="${esc(q.poem.map(x=>x[0]).join('，'))}" data-lang="zh">🔊 Dengar semua</button><button class="spk" data-say="${esc(q.poem.map(x=>x[0]).join('，'))}" data-lang="zh" data-slow="1">🐢 Pelan</button></div>
 ${mic?'':'<p class="hint">Mama/Papa mendengarkan setiap baris, lalu tekan tombol ✓ di baris itu.</p>'}
 <button class="btn" id="poemok" ${done===n?'':'disabled'}>${done===n?'Semua baris benar — lanjut ›':`Ucapkan ${n-done} baris lagi`}</button>`}
function refreshPoem(){const w=document.querySelector('.qcard');if(!w||!Q)return;const box=document.createElement('div');box.innerHTML=poemHTML(Q.list[Q.i]);['.hidebar','.poemwrap','#poemok'].forEach(s=>{const o=w.querySelector(s),nn=box.querySelector(s);if(o&&nn)o.replaceWith(nn)});const oh=w.querySelector('.hint'),nh=box.querySelector('.hint');if(nh&&!oh)w.querySelector('#poemok').before(nh)}
function judgeLine(){const q=Q.list[Q.i],i=Q.pline,line=q.poem[i][0],sc=scoreZh(line,SP.heard),r=sc.filter(Boolean).length/sc.length;Q.pok=Q.pok||{};Q.pmsg=Q.pmsg||{};
 if(r>=.85){Q.pok[i]=true;Q.pmsg[i]='';sfx.ok();refreshPoem();burst(document.getElementById('pl'+i))}
 else{Q.ptries=(Q.ptries||0)+1;sfx.bad();const miss=[...line.replace(ZP,'')].filter((c,k)=>!sc[k]).join(' ');Q.pmsg[i]=`Terdengar ${Math.round(r*100)}%. Belum jelas: ${miss}. Dengarkan contohnya, lalu coba lagi.`;refreshPoem()}}
function sayReqHTML(z){const mic=DICT&&!Q.noMic,py=(window.PYM||{})[z];return `<div class="sayreq" id="sayreq"><p class="srh">🗣️ <b>Wajib:</b> ucapkan dengan benar</p><div class="sayz" lang="zh">${esc(z)}</div>${py?`<p class="zpy" hidden>${py}</p>`:''}
 <div class="lis sm"><button class="spk" data-say="${esc(z)}" data-lang="zh">🔊 Dengar</button><button class="spk" data-say="${esc(z)}" data-lang="zh" data-slow="1">🐢 Pelan</button>${py?'<button class="spk pyt" data-pyt="1" aria-pressed="false">拼 Pinyin</button>':''}${mic?`<button class="plmic" id="fmic">🎤 Ucapkan</button>`:''}</div>
 ${mic?'':`<button class="btn fself" id="fself">✓ Mama/Papa: sudah benar</button>`}
 <p class="plh" id="fheard">${mic?'':'🗣️ Hector mengucapkan dengan lantang. Mama/Papa mendengarkan, lalu tekan tombol hijau di atas.'}</p></div>`}
function sayPassed(msg){Q.fneed=false;Q.fmode=false;sfx.ok();const sr=document.getElementById('sayreq');if(sr){sr.classList.add('pass');const b=sr.querySelector('#fmic,#fself');if(b)b.outerHTML='<span class="pbadge">✓ Ucapan benar</span>';document.getElementById('fheard').textContent=msg||''}
 const nx=document.getElementById('nx');if(nx){nx.disabled=false;nx.classList.remove('locked');nx.removeAttribute('aria-disabled');nx.textContent=Q.i<Q.list.length-1?'Soal berikutnya ›':'Lihat hasil ›';nx.focus({preventScroll:true})}
 if(Q.fok){const my=Q.i,kk=Q.k;clearTimeout(Q.autoT);Q.autoT=setTimeout(()=>{if(Q&&Q.k===kk&&Q.i===my&&!Q.fneed)next()},1600)}}
function judgeF(){const z=Q.fz,sc=scoreZh(z,SP.heard),r=sc.filter(Boolean).length/sc.length,need=[...z.replace(ZP,'')].length>12?.8:.85;
 if(r>=need)sayPassed(`Terdengar ${Math.round(r*100)}% dengan jelas.`);
 else{sfx.bad();Q.ftries=(Q.ftries||0)+1;const miss=[...z.replace(ZP,'')].filter((c,k)=>!sc[k]).join(' ');const el=document.getElementById('fheard');if(el)el.textContent=`Terdengar ${Math.round(r*100)}%. Belum jelas: ${miss}. ${Q.ftries>=2?'Tekan 🐢 Pelan, dengarkan, lalu ucapkan pelan-pelan.':'Coba lagi.'}`}}
/* ===== latihan menulis (田字格 + urutan goresan) ===== */
const CNUM=['','一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五','十六','十七','十八'];
function writeHTML(q){return `<div class="wcard"><div class="whead"><span class="wbig" lang="zh">${q.write}</span><div class="winfo"><b class="wpy">${q.wpy}</b><span>${q.wm}</span><small>${q.wn} goresan · ${CNUM[q.wn]}画 · contoh: <span lang="zh">${q.ww}</span></small></div></div>
 <ol class="wsteps"><li id="ws0" class="on">Lihat urutan</li><li id="ws1">Tebalkan 描红</li><li id="ws2">Tulis sendiri 默写</li></ol>
 <div class="tzg" id="tzg"><svg class="tzgbg" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 0V100M0 50H100M0 0L100 100M100 0L0 100"/></svg><div id="hw"></div></div>
 <div class="wctrl"><button class="spk" id="wanim">▶ Urutan goresan</button><button class="spk" data-say="${esc(q.write)}" data-lang="zh">🔊 Dengar</button><button class="spk" id="wreset">↺ Ulang goresan ini</button><button class="spk" id="wskip">⏭ Lewati huruf</button></div>
 <p class="wmsg" id="wmsg" aria-live="polite">Perhatikan urutan goresannya, lalu tekan <b>Mulai menulis</b>.</p>
 <button class="btn" id="wgo">✍️ Mulai menulis</button></div>`}
function wcol(){const d=isDark();return {strokeColor:d?'#DADDE4':'#2F3542',outlineColor:d?'#3E4452':'#DCD3C2',drawingColor:d?'#E8988F':'#A8443C',highlightColor:d?'#86C99B':'#2F7A4F',radicalColor:null}}
function initWrite(q){const el=document.getElementById('hw');if(!el||!window.MiniWriter)return;const box=document.getElementById('tzg');const sz=Math.round(Math.min(300,box.clientWidth||300));
 Q.wph=0;Q.wmiss=0;Q.writer=MiniWriter.create(el,q.write,Object.assign({width:sz,height:sz,padding:Math.round(sz*.06),showCharacter:false,showOutline:true,strokeAnimationSpeed:1,delayBetweenStrokes:280,drawingWidth:Math.max(14,Math.round(sz/16)),charDataLoader:(c,ok)=>ok(WDATA[c])},wcol()));
 guardWrite();setTimeout(()=>{try{Q.writer&&Q.writer.animateCharacter()}catch(_){}},350)}
function wStep(n){[0,1,2].forEach(i=>{const e=document.getElementById('ws'+i);if(e){e.classList.toggle('on',i===n);e.classList.toggle('done',i<n)}})}
function wQuiz(ph){const q=Q.list[Q.i],w=Q.writer;if(!w)return;Q.wph=ph;wStep(ph);const m=document.getElementById('wmsg');const g=document.getElementById('wgo');if(g)g.remove();
 try{w.cancelQuiz()}catch(_){}w.hideCharacter();if(ph===1)w.showOutline();else w.hideOutline();let miss=0;
 m.innerHTML=ph===1?`Tebalkan goresan <b>1</b> dari ${q.wn} di atas contoh tipis.`:`Sekarang tulis sendiri tanpa contoh. Goresan <b>1</b> dari ${q.wn}.`;
 Q.wcur=0;startQ(w,{leniency:1.25,showHintAfterMisses:ph===1?2:3,highlightOnComplete:true,
  onCorrectStroke:d=>{Q.wcur=d.strokeNum+1;m.innerHTML=d.strokesRemaining?`✓ Bagus! Goresan <b>${d.strokeNum+2}</b> dari ${q.wn}.`:'✓ Selesai!'},
  onMistake:d=>{miss++;setTimeout(()=>sfx.bad(),0);m.innerHTML=`Goresan ${d.strokeNum+1} belum tepat. Perhatikan <b>urutan</b> dan <b>arah</b> goresan.${d.mistakesOnStroke>=(ph===1?2:3)?' Lihat petunjuk yang berkedip.':''}`},
  onComplete:d=>{sfx.ok();if(ph===1){m.innerHTML='Hebat! Sekarang <b>tulis sendiri</b> tanpa contoh…';setTimeout(()=>{if(Q&&Q.writer===w)wQuiz(2)},1100)}
   else{Q.wmiss=d.totalMistakes;wStep(3);Q.done=true;const lim=Math.ceil(q.wn/3);if(d.totalMistakes>lim){Q.tries=1}if(Q.tries===0)Q.ok++;burst(document.getElementById('tzg'));
    fb(true,`Huruf <b lang="zh">${q.write}</b> (${q.wpy}) selesai ditulis. Kesalahan goresan saat menulis sendiri: <b>${d.totalMistakes}</b>${d.totalMistakes>lim?' — latih lagi supaya lebih lancar.':' — rapi sekali!'}`)}}})}
/* ===== Dikte menulis (听写) + penguasaan + lembar cetak ===== */
const isW=b=>/^w\d/.test(b||'');
const today=()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
function wmGet(c){SAVE.wm=SAVE.wm||{};return SAVE.wm[c]=SAVE.wm[c]||{days:[],tries:0,last:null,best:0,err:{urutan:0,arah:0,bentuk:0},sm:{}}}
function wState(c){const r=(SAVE.wm||{})[c];if(!r||!r.tries)return 'new';if(r.days.length>=2)return 'ok';if(r.days.length===1)return 'half';return 'bad'}
const WLBL={ok:'✅ Dikuasai',half:'🟡 Lulus 1 hari',bad:'🔁 Perlu latihan',new:'⬜ Belum dicoba'};
function blankWord(w,c){return [...w].map(x=>x===c?'＿':x).join('')}
function writeDHTML(q){return `<div class="wcard"><div class="whead"><span class="wbig wq" id="wq" lang="zh">？</span><div class="winfo"><b class="wpy">${q.wpy}</b><span>${q.wm}</span><small>contoh kata: <span lang="zh">${blankWord(q.ww,q.write)}</span></small></div></div>
 <p class="dnote">🎧 <b>Dikte 听写</b> — dengarkan, lalu tulis hurufnya dari ingatan. Tidak ada contoh. Setiap goresan dinilai.</p>
 <div class="tzg" id="tzg"><svg class="tzgbg" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 0V100M0 50H100M0 0L100 100M100 0L0 100"/></svg><div id="hw"></div></div>
 <div class="wctrl"><button class="spk" data-say="${esc(q.write)}" data-lang="zh">🔊 Dengar huruf</button><button class="spk" data-say="${esc(q.ww)}" data-lang="zh">🔊 Dengar kata</button><button class="spk" id="wreset">↺ Ulang goresan ini</button><button class="spk" id="wskip">⏭ Lewati huruf</button></div>
 <div class="wsm" id="wsm" aria-label="Nilai per goresan">${Array.from({length:q.wn},(_,i)=>`<i id="sm${i}">${i+1}</i>`).join('')}</div>
 <p class="wmsg" id="wmsg" aria-live="polite">Tulis goresan pertama.</p></div>`}
function resample(pts,n){if(pts.length<2)return Array(n).fill(pts[0]||{x:0,y:0});const L=[0];for(let i=1;i<pts.length;i++)L.push(L[i-1]+Math.hypot(pts[i].x-pts[i-1].x,pts[i].y-pts[i-1].y));const T=L[L.length-1]||1,out=[];
 for(let k=0;k<n;k++){const t=T*k/(n-1);let i=1;while(i<L.length-1&&L[i]<t)i++;const f=(t-L[i-1])/((L[i]-L[i-1])||1);out.push({x:pts[i-1].x+(pts[i].x-pts[i-1].x)*f,y:pts[i-1].y+(pts[i].y-pts[i-1].y)*f})}return out}
function pdist(a,b){let s=0;for(let i=0;i<a.length;i++)s+=Math.hypot(a[i].x-b[i].x,a[i].y-b[i].y);return s/a.length}
function errType(c,sn,path){try{const M=WDATA[c].medians.map(m=>resample(m.map(([x,y])=>({x,y})),12)),P=resample(path,12);const cur=pdist(P,M[sn]),rev=pdist(P,M[sn].slice().reverse());
 let bo=1e9;for(let j=sn+1;j<M.length;j++)bo=Math.min(bo,pdist(P,M[j]));if(bo<140&&bo<cur)return 'urutan';if(rev<140&&rev<cur*.7)return 'arah';return 'bentuk'}catch(_){return 'bentuk'}}
function initDikte(q){const el=document.getElementById('hw');if(!el||!window.MiniWriter)return;const box=document.getElementById('tzg');const sz=Math.round(Math.min(300,box.clientWidth||300));
 const w=Q.writer=MiniWriter.create(el,q.write,Object.assign({width:sz,height:sz,padding:Math.round(sz*.06),showCharacter:false,showOutline:false,drawingWidth:Math.max(14,Math.round(sz/16)),charDataLoader:(c,ok)=>ok(WDATA[c])},wcol()));
 guardWrite();const ms=Array(q.wn).fill(0),et=[];const m=document.getElementById('wmsg');setTimeout(()=>speak(q.ww,'zh'),300);
 Q.wcur=0;startQ(w,{leniency:1.2,showHintAfterMisses:2,highlightOnComplete:true,
  onMistake:d=>{ms[d.strokeNum]++;const ty=d.isBackwards?'arah':errType(q.write,d.strokeNum,(d.drawnPath&&d.drawnPath.points)||[]);et.push([d.strokeNum,ty]);setTimeout(()=>sfx.bad(),0);
   m.innerHTML=d.mistakesOnStroke>=2?`Goresan ${d.strokeNum+1}: lihat petunjuk yang berkedip (nilai goresan ini 0).`:`Goresan ${d.strokeNum+1} belum tepat (${ty==='urutan'?'urutan salah':ty==='arah'?'arah terbalik':'bentuk/letak belum tepat'}). Coba lagi.`},
  onCorrectStroke:d=>{Q.wcur=d.strokeNum+1;const k=ms[d.strokeNum],e=document.getElementById('sm'+d.strokeNum);if(e)e.className=k===0?'s1':k===1?'s5':'s0';m.textContent=d.strokesRemaining?`Goresan ${d.strokeNum+2} dari ${q.wn}…`:''},
  onComplete:()=>{const pts=ms.reduce((s,k)=>s+(k===0?1:k===1?.5:0),0),score=Math.round(pts/q.wn*100),hints=ms.filter(k=>k>=2).length,pass=score>=80&&hints===0;
   const r=wmGet(q.write);r.tries++;r.last=score;r.best=Math.max(r.best,score);et.forEach(([sn,ty])=>{r.err[ty]++;r.sm[sn+1]=(r.sm[sn+1]||0)+1});if(pass&&!r.days.includes(today()))r.days.push(today());persist();
   const st=wState(q.write);document.getElementById('wq').textContent=q.write;Q.done=true;Q.res=Q.res||[];Q.res[Q.i]=score/100;if(pass)Q.ok++;
   const cnt={urutan:0,arah:0,bentuk:0};et.forEach(([,ty])=>cnt[ty]++);const es=Object.entries(cnt).filter(([,v])=>v).map(([k,v])=>`${k==='urutan'?'urutan salah':k==='arah'?'arah terbalik':'bentuk/letak'} ${v}×`).join(', ');
   (pass?sfx.ok:sfx.bad)();if(pass)burst(document.getElementById('tzg'));
   fb(pass,`Nilai huruf <b lang="zh">${q.write}</b> (${q.wpy}): <b>${score}</b>${pass?' — lulus ✓':` — belum lulus (perlu ≥ 80 tanpa petunjuk)`}.<br>${es?'Kesalahan: '+es+'. ':'Tanpa kesalahan! '}${hints?`Petunjuk dipakai di ${hints} goresan. `:''}<br>Status: <b>${WLBL[st]}</b>${st==='half'?' — lulus sekali lagi di hari lain untuk dikuasai.':''}`)}})}
/* rapor penguasaan */
function wMastery(){const L=window.WLIST||[];if(!L.length)return '';const byB={};L.forEach(x=>(byB[x[0]]=byB[x[0]]||[]).push(x));
 const weak=L.map(x=>[x,(SAVE.wm||{})[x[1]]]).filter(([,r])=>r&&r.tries&&(r.last<80||!r.days.length)).sort((a,b)=>(a[1].last??0)-(b[1].last??0)).slice(0,6);const again=L.filter(x=>wState(x[1])==='half').length;
 const tot=L.filter(x=>wState(x[1])==='ok').length;
 return `<section class="wmast"><div class="wmh"><h3>Penguasaan menulis 写字</h3><span>${tot} dari ${L.length} huruf dikuasai · dikuasai = lulus dikte tanpa petunjuk di 2 hari berbeda</span></div>
 <div class="wleg">${Object.entries(WLBL).map(([k,v])=>`<span class="wc ${k}">${v}</span>`).join('')}</div>
 ${Object.entries(byB).map(([b,xs])=>{const ok=xs.filter(x=>wState(x[1])==='ok').length;return `<div class="wrow"><b>Bab ${b}</b><span class="bar"><i style="width:${Math.round(ok/xs.length*100)}%"></i></span><small>${ok}/${xs.length}</small><div class="wchips">${xs.map(x=>{const r=(SAVE.wm||{})[x[1]],st=wState(x[1]);const tip=r&&r.tries?`${x[1]} (${x[2]}): nilai terakhir ${r.last}, terbaik ${r.best}, lulus ${r.days.length} hari${Object.keys(r.sm).length?', goresan sering salah: '+Object.entries(r.sm).sort((a,c)=>c[1]-a[1]).slice(0,3).map(e=>'ke-'+e[0]).join(', '):''}`:`${x[1]} (${x[2]}): belum dicoba`;return `<span class="wc ${st}" lang="zh" tabindex="0" data-tip="${esc(tip)}">${x[1]}</span>`}).join('')}</div></div>`}).join('')}
 ${weak.length?`<div class="wweak"><b>Paling perlu dilatih:</b> ${weak.map(([x,r])=>{const top=Object.entries(r.sm).sort((a,c)=>c[1]-a[1])[0];const et=Object.entries(r.err).sort((a,c)=>c[1]-a[1])[0];return `<span><b lang="zh">${x[1]}</b> ${r.last}${top?` · goresan ke-${top[0]}`:''}${et&&et[1]?` (${et[0]==='urutan'?'urutan':et[0]==='arah'?'arah':'bentuk'})`:''}</span>`}).join('')}</div>`:''}
 ${again?`<p class="wagain">🟡 ${again} huruf sudah lulus 1 hari — ulangi dikte di hari lain supaya dikuasai.</p>`:''}<div class="wprint"><button class="btn" data-sheet="weak">🖨️ Lembar dikte: huruf yang belum dikuasai</button>${Object.keys(byB).map(b=>`<button class="spk" data-sheet="${b}">🖨️ Bab ${b}</button>`).join('')}</div></section>`}
/* lembar dikte siap cetak */
function sheetItems(key){const L=window.WLIST||[];if(key==='weak'){const w=L.filter(x=>['bad','half'].includes(wState(x[1])));return w.length?w:L.filter(x=>wState(x[1])==='new').slice(0,10)}return L.filter(x=>String(x[0])===String(key))}
function boxSVG(ch,light){return `<svg viewBox="0 0 100 100" class="b"><rect x="1" y="1" width="98" height="98" fill="none" stroke="#C0504D" stroke-width="2"/><path d="M50 1V99M1 50H99M1 1L99 99M99 1L1 99" stroke="#E3A9A6" stroke-width="1" stroke-dasharray="3 3" fill="none"/>${ch?`<text x="50" y="80" text-anchor="middle" font-size="76" fill="${light?'#DDD':'#222'}" font-family="'KaiTi','STKaiti','Noto Serif SC','Noto Sans SC',serif">${ch}</text>`:''}</svg>`}
function sheetHTML(key){const it=sheetItems(key),nm=esc(SAVE.name||'Murid'),title=key==='weak'?'Huruf yang belum dikuasai':'Bab '+key;
 const rows=it.map((x,i)=>`<tr><td class="no">${i+1}</td><td class="pr"><b>${x[2]}</b><br>${x[3]}<br><span class="cw">${blankWord(x[4],x[1])}</span></td><td class="bx">${boxSVG('')}</td><td class="bx">${boxSVG('')}</td><td class="bx">${boxSVG('')}</td><td class="bx">${boxSVG('')}</td></tr>`).join('');
 const key2=it.map((x,i)=>`<tr><td class="no">${i+1}</td><td class="ans">${boxSVG(x[1])}</td><td>${x[2]} · ${x[3]}<br>${x[5]} goresan (${CNUM[x[5]]}画) · ${x[4]}</td><td class="ck"></td><td class="ck"></td><td class="ck"></td><td class="ck"></td></tr>`).join('');
 return `<!doctype html><html lang="id"><head><meta charset="utf-8"><title>Lembar dikte 听写 · ${title}</title><style>
@page{size:A4;margin:14mm}body{font-family:'Nunito','Segoe UI',sans-serif;color:#222;margin:0}h1{font-size:20px;margin:0 0 4px}.meta{display:flex;justify-content:space-between;font-size:13px;margin-bottom:8px;border-bottom:2px solid #C0504D;padding-bottom:6px}
table{width:100%;border-collapse:collapse}td{border-bottom:1px solid #eee;padding:4px;vertical-align:middle;font-size:12px}.no{width:22px;font-weight:700;color:#C0504D}.pr{width:140px}.pr b{font-size:15px}.cw{font-size:15px;letter-spacing:2px}.bx{width:84px}.b{width:78px;height:78px;display:block}
.note{font-size:12px;color:#555;margin:6px 0 10px}.pb{page-break-before:always}.ans{width:84px}.ck{width:58px;border:1px solid #ccc;text-align:center}th{font-size:11px;text-align:left;padding:4px;color:#555}
.rub{margin-top:10px;font-size:12px;border:1px solid #ddd;padding:8px;border-radius:6px}@media screen{body{padding:16px;max-width:820px;margin:auto}}</style></head><body>
<h1>Lembar dikte 听写 · ${title}</h1><div class="meta"><span>Nama: <b>${nm}</b> · Kelas 2C</span><span>Tanggal: ____________</span><span>Nilai: ______</span></div>
<p class="note">Orang tua membacakan pinyin/kata (atau putar suara di aplikasi). Anak menulis hurufnya di <b>kotak pertama</b> tanpa melihat, lalu menulis ulang 3 kali dengan rapi. Isian ＿ pada contoh kata adalah huruf yang ditulis.</p>
<table>${rows}</table>
<div class="pb"><h1>Kunci jawaban &amp; penilaian · ${title}</h1><p class="note">Beri ✓ untuk setiap kriteria. Nilai huruf = jumlah ✓ ÷ 4 × 100. Perhatikan anak saat menulis untuk menilai urutan goresan.</p>
<table><tr><th></th><th>Huruf</th><th>Keterangan</th><th>Huruf benar</th><th>Urutan goresan</th><th>Proporsi di kotak</th><th>Kerapian</th></tr>${key2}</table>
<div class="rub"><b>Pedoman:</b> <b>Huruf benar</b> = tidak ada goresan kurang/lebih. <b>Urutan goresan</b> = sesuai buku Panduan Menulis. <b>Proporsi</b> = huruf mengisi kotak 田字格 dengan seimbang. <b>Kerapian</b> = goresan jelas, lurus, tidak dihapus berkali-kali.</div></div></body></html>`}
async function openSheet(key){const html=sheetHTML(key),title=key==='weak'?'huruf-belum-dikuasai':'bab-'+key;
 app.innerHTML=`<div class="qbar"><button class="back" data-rapor="1">‹ Rapor</button><b>Lembar dikte 听写</b></div><section class="qcard" style="--c:${SUBJ.mand.c}"><h2>Lembar dikte · ${key==='weak'?'Huruf yang belum dikuasai':'Bab '+key}</h2><p>${sheetItems(key).length} huruf · halaman 1 untuk anak, halaman 2 kunci jawaban &amp; penilaian untuk orang tua.</p>
 <div class="act"><button class="btn" id="sdl">⬇️ Unduh lembar (siap cetak)</button></div><p class="hint" id="smsg">Buka file yang diunduh di browser, lalu pilih Cetak / Print.</p><iframe class="sheetprev" title="Pratinjau lembar dikte" srcdoc="${esc(html)}"></iframe></section>`;
 scrollTo({top:0});document.getElementById('sdl').onclick=async()=>{const msg=document.getElementById('smsg');let dl=null;try{dl=await claude.use('downloads')}catch(_){}
  if(!dl){msg.textContent='Unduhan tidak tersedia di tampilan ini. Buka halaman ini di browser Chrome/Edge atau aplikasi Claude terbaru.';return}
  try{await dl.save({filename:`lembar-dikte-${title}.html`,data:html});msg.textContent='Tersimpan. Buka file itu lalu pilih Cetak.'}catch(e){msg.textContent=e&&e.code==='declined'?'Unduhan dibatalkan.':'Unduhan gagal ('+(e&&e.code||'error')+').'}}}
/* ===== simpan & lanjutkan latihan ===== */
function saveCur(){try{if(!Q||!Q.list||Q.finished)return;const all=QS[Q.k];const idx=Q.list.map(q=>all.indexOf(q));if(idx.some(x=>x<0))return;SAVE.cur=SAVE.cur||{};
 SAVE.cur[Q.k]={idx,i:Q.i,res:Q.res||[],ok:Q.ok,el:Date.now()-Q.t0,bab:babOf(Q.k),wmode:Q.wmode||null,ts:Date.now(),n:Q.list.length};persist()}catch(_){}}
function clearCur(k){if(SAVE.cur&&SAVE.cur[k]){delete SAVE.cur[k];persist()}}
function curOf(k){const c=SAVE.cur&&SAVE.cur[k];if(!c||!c.idx||!c.idx.length)return null;if(c.idx.some(x=>!QS[k][x]))return null;return c}
function resumeQuiz(k){const c=curOf(k);if(!c)return openQuiz(k);const list=c.idx.map(x=>QS[k][x]);const res=c.res||[];let i=c.i;if(res[i]!=null){const L=c.idx.length;let f=-1;for(let s=1;s<=L;s++){const j=(c.i+s)%L;if(res[j]==null){f=j;break}}i=f<0?L:f}
 if(i>=list.length){Q={k,i:list.length-1,ok:c.ok,tries:0,list,P:{},t0:Date.now()-c.el,res,wmode:c.wmode};return result()}
 Q={k,i,ok:c.ok,tries:0,list,P:{},t0:Date.now()-c.el,res,wmode:c.wmode};renderQ();scrollTo({top:0})}
function curBanner(k){const c=curOf(k);if(!c)return '';const done=(c.res||[]).filter(v=>v!=null).length;return `<div class="resume"><div><b>▶ Latihan belum selesai</b><span>Soal ${Math.min(done+1,c.n)} dari ${c.n}${c.bab?' · '+babLbl(c.bab,k):''} · disimpan ${fmtT(c.ts)}</span></div><button class="btn" data-resume="${k}">Lanjutkan ›</button><button class="spk" data-drop="${k}">Mulai baru</button></div>`}
document.addEventListener('visibilitychange',()=>{if(document.hidden)saveCur()});addEventListener('pagehide',saveCur);
/* ===== pilih nomor soal bebas ===== */
function nextOpen(){const R=Q.res||[],n=Q.list.length;for(let j=Q.i+1;j<n;j++)if(R[j]==null)return j;for(let j=0;j<Q.i;j++)if(R[j]==null)return j;return null}
const qst=v=>v==null?'b':v>=1?'g':v>0?'y':'r';
const QMARK={g:'✓',y:'½',r:'✗',b:''};
function navCounts(){const R=Q.res||[],c={g:0,y:0,r:0,b:0};Q.list.forEach((_,j)=>c[qst(R[j])]++);return c}
function navHTML(){if(!Q.navOpen)return '';const R=Q.res||[],n=Q.list.length,c=navCounts(),F=Q.navF||'all',done=n-c.b;
 const chips=[['all','Semua',n],['b','○ Belum dikerjakan',c.b],['r','✗ Salah',c.r],['y','½ Benar setelah salah',c.y],['g','✓ Benar',c.g]];
 const cells=Q.list.map((_,j)=>{const st=qst(R[j]);if(F!=='all'&&st!==F)return '';return `<button class="ng ${st} ${j===Q.i?'cur':''}" data-go="${j}" aria-label="Soal ${j+1}: ${st==='b'?'belum dikerjakan':st==='r'?'jawaban salah':st==='y'?'benar setelah salah':'benar'}"><span>${j+1}</span><i>${QMARK[st]}</i></button>`}).join('');
 return `<div class="navp" id="navp"><div class="navh"><b>Pilih nomor soal</b><span>${done}/${n} sudah dikerjakan</span></div>
 <div class="navf" role="group" aria-label="Saring soal">${chips.map(([k,l,v])=>`<button class="bab ${F===k?'on':''}" data-navf="${k}" ${k!=='all'&&!v?'disabled':''}>${l} <small>${v}</small></button>`).join('')}</div>
 <div class="navg">${cells||'<p class="na">Tidak ada soal di kelompok ini.</p>'}</div>
 ${c.r+c.b?`<button class="btn" data-go="${(()=>{for(let s=1;s<=n;s++){const k=(Q.i+s)%n;if(['r','b'].includes(qst(R[k])))return k}return Q.i})()}">➜ Ke soal ${c.b?'belum dikerjakan':'yang salah'} berikutnya</button>`:''}
 <button class="spk" data-finish="1">🏁 Selesai &amp; lihat nilai${c.b?` (${c.b} belum dikerjakan = 0)`:''}</button></div>`}
function navLabel(){const c=navCounts();return `🔢 Soal ${Q.i+1}/${Q.list.length} <span class="nc"><b class="g">✓${c.g+c.y}</b><b class="r">✗${c.r}</b><b class="b">○${c.b}</b></span> <small>▾</small>`}
function refreshNav(){const nb=document.querySelector('[data-nav]');if(nb)nb.innerHTML=navLabel();const old=document.getElementById('navp');if(old)old.remove();if(Q.navOpen)document.querySelector('.qbar').insertAdjacentHTML('afterend',navHTML())}
function goQ(j){if(!Q)return;clearTimeout(Q.autoT);try{Q.writer&&Q.writer.cancelQuiz()}catch(_){}Q.writer=null;try{DICT&&SP.active&&DICT.stop()}catch(_){}
 Q.fneed=false;Q.fmode=false;Q.i=j;Q.P={};Q.m=null;Q.sel=null;Q.pok={};Q.pmsg={};Q.ptries=0;Q.ftries=0;Q.navOpen=false;saveCur();renderQ();scrollTo({top:0})}
let REDO=null;
/* kotak tulis: cegah gulir halaman & tutup goresan bila sentuhan dibatalkan */
function guardWrite(){const box=document.getElementById('tzg');if(!box||box.__g)return;box.__g=1;const stop=e=>{if(e.cancelable)e.preventDefault()};
 box.addEventListener('touchstart',stop,{passive:false});box.addEventListener('touchmove',stop,{passive:false});box.addEventListener('gesturestart',stop,{passive:false});box.addEventListener('contextmenu',stop)}
function endStroke(){try{Q&&Q.writer&&Q.writer._quiz&&Q.writer._quiz.endUserStroke()}catch(_){}}
document.addEventListener('touchcancel',endStroke);document.addEventListener('pointercancel',e=>{if(e.target&&e.target.closest&&e.target.closest('#tzg'))endStroke()});
/* ===== penjaga anti-macet latihan menulis ===== */
function startQ(w,opts){Q.wopts=opts;try{w.quiz(opts)}catch(e){console.warn(e)}}
function restartStroke(msg){if(!Q||!Q.writer||!Q.wopts||Q.done)return;const w=Q.writer;try{w.cancelQuiz()}catch(_){}
 const n=Q.list[Q.i].wn,st=Math.min(Q.wcur||0,n-1);try{w.quiz(Object.assign({},Q.wopts,{quizStartStrokeNum:st}))}catch(e){console.warn(e)}
 const m=document.getElementById('wmsg');if(m&&msg)m.innerHTML=msg.replace('{n}',st+1)}
function stuckStroke(){try{return !!(Q&&Q.writer&&Q.writer._quiz&&Q.writer._quiz._userStroke)}catch(_){return false}}
let WDOWN=0,WLAST=0;
addEventListener('pointerdown',e=>{if(e.target&&e.target.closest&&e.target.closest('#tzg')){WDOWN++;WLAST=Date.now()}},true);
addEventListener('pointermove',e=>{if(WDOWN)WLAST=Date.now()},true);
const wUp=()=>{if(!WDOWN)return;WDOWN=Math.max(0,WDOWN-1);setTimeout(()=>{if(WDOWN||!stuckStroke())return;try{Q.writer._quiz.endUserStroke()}catch(e){console.warn(e)}
 setTimeout(()=>{if(!WDOWN&&stuckStroke())restartStroke('Goresan tadi tidak terbaca. Ulangi goresan <b>{n}</b>.')},150)},180)};
addEventListener('pointerup',wUp,true);addEventListener('pointercancel',wUp,true);addEventListener('touchend',wUp,true);addEventListener('touchcancel',wUp,true);
setInterval(()=>{if(stuckStroke()&&Date.now()-WLAST>2500){WDOWN=0;try{Q.writer._quiz.endUserStroke()}catch(_){}if(stuckStroke())restartStroke('Goresan tadi tidak terbaca. Ulangi goresan <b>{n}</b>.')}},1000);
addEventListener('error',()=>{if(stuckStroke())setTimeout(()=>restartStroke('Ulangi goresan <b>{n}</b>.'),100)});
function skipWrite(){const q=Q.list[Q.i];if(!q||!q.write||Q.done)return;try{Q.writer&&Q.writer.cancelQuiz()}catch(_){}Q.done=true;Q.res=Q.res||[];if(Q.res[Q.i]==null)Q.res[Q.i]=0;
 try{Q.writer.showCharacter()}catch(_){}const wq=document.getElementById('wq');if(wq)wq.textContent=q.write;
 if(Q.wmode==='dikte'){const r=wmGet(q.write);r.tries++;r.last=0;persist()}fb(false,`Huruf <b lang="zh">${q.write}</b> (${q.wpy}) dilewati. Tekan ▶ Urutan goresan lain kali untuk melihat cara menulisnya.`)}
/* ===== Home: lanjutkan & terakhir dikerjakan ===== */
function toast(msg){let t=document.getElementById('toast');if(!t){t=document.createElement('div');t.id='toast';t.setAttribute('role','status');document.body.appendChild(t)}t.textContent=msg;t.classList.remove('show');void t.offsetWidth;t.classList.add('show');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('show'),1800)}
function recentHTML(){const cur=Object.keys(SAVE.cur||{}).filter(k=>SUBJ[k]&&curOf(k)).map(k=>[k,SAVE.cur[k]]).sort((x,y)=>y[1].ts-x[1].ts);
 const seen=new Set(cur.map(x=>x[0])),done=[];for(const x of (SAVE.att||[]).slice().reverse()){if(!SUBJ[x.k]||seen.has(x.k))continue;seen.add(x.k);done.push(x);if(done.length>=3)break}
 if(!cur.length&&!done.length)return '';
 const card=([k,c])=>{const s=SUBJ[k],R=c.res||[],ans=R.filter(v=>v!=null).length,ok=R.filter(v=>v>0).length,pct=Math.round(ans/c.n*100);
  return `<div class="rc" style="--c:${s.c}"><span class="sic">${sico(k,22)}</span><div class="rcb"><b>${s.name}${c.bab?` · ${babLbl(c.bab,k).replace('Hafalan ','')}`:''}</b><span>Terakhir di soal ${Math.min((c.i||0)+1,c.n)} · ${ans}/${c.n} dijawab · ${ok} benar · ${fmtT(c.ts)}</span><span class="bar"><i style="width:${pct}%;background:${s.c}"></i></span></div><button class="btn" data-resume="${k}">▶ Lanjutkan</button></div>`};
 const last=x=>{const s=SUBJ[x.k],p=PRED(x.score);return `<button class="rd" data-quiz="${x.k}" style="--c:${s.c}"><span class="sic">${sico(x.k,18)}</span><span><b>${s.name}</b><small>${x.score}% · ${p[0]} · ${fmtT(x.t)}</small></span></button>`};
 return `<section class="recent" aria-label="Terakhir dikerjakan">${cur.length?`<h2 class="h2">▶ Lanjutkan latihan <small>tersimpan otomatis</small></h2><div class="rcs">${cur.slice(0,4).map(card).join('')}</div>`:''}
 ${done.length?`<h3 class="rh">🕘 Terakhir selesai</h3><div class="rds">${done.map(last).join('')}</div>`:''}</section>`}
/* ===== kemajuan per soal (semua sesi) ===== */
function qdN(k){const o=(SAVE.qd||{})[k];return o?Object.keys(o).length:0}
function bestN(k){let b=null;for(const x of SAVE.att||[])if(x.k===k&&(!b||x.score>b.score||(x.score===b.score&&x.n>b.n)))b=x;return b?b.n:0}
function markQd(){try{const q=Q.list[Q.i],ix=QS[Q.k].indexOf(q);if(ix<0)return;SAVE.qd=SAVE.qd||{};(SAVE.qd[Q.k]=SAVE.qd[Q.k]||{})[ix]=1}catch(_){}}
function pick(b){const q=Q.list[Q.i];if(Q.done||b.disabled)return;
  if(b.dataset.pick===q.a){b.classList.add('ok');Q.done=true;lock();if(Q.tries===0)Q.ok++;sfx.ok();burst(b);fb(true)}
  else{b.classList.add('bad');b.disabled=true;sfx.bad();Q.tries++;if(Q.tries>=2){Q.done=true;[...document.querySelectorAll('.opt')].find(x=>x.dataset.pick===q.a)?.classList.add('ok');lock();fb(false)}else document.getElementById('msg').textContent='Belum tepat, coba lagi!'}}
const lock=()=>document.querySelectorAll('.opt').forEach(x=>x.disabled=true);
const CJK=/[\u4e00-\u9fff]/;
function fzOf(q){if(Q.k!=='mand'||q.speak||q.poem)return '';if(q.build)return q.bid?'':q.build.join('');let z=q.fz||(CJK.test(q.a||'')?q.a:(q.zh||''));return z.replace(/[A-Za-z()]/g,'').replace(/＿/g,'').trim()}
function fb(ok,html){const q=Q.list[Q.i],FZ=fzOf(q);Q.res=Q.res||[];if(Q.res[Q.i]==null)Q.res[Q.i]=ok?(Q.tries===0?1:.5):0;if(ok)markQd();saveCur();try{refreshNav()}catch(_){}document.getElementById('msg').textContent='';
  document.getElementById('fb').innerHTML=`<div class="fbk ${ok?'good':'show'}"><b>${ok?(Q.tries===0?'Hebat, benar!':'Benar!'):'Ini jawabannya'}</b>${html||q.n?`<p>${html||q.n}</p>`:''}${FZ?sayReqHTML(FZ):''}${ok&&!FZ?`<div class="auto"><i></i><span>Lanjut otomatis…</span></div>`:''}<button class="btn ${FZ?'locked':''}" id="nx" ${FZ?'aria-disabled="true"':''}>${FZ?(DICT&&!Q.noMic?'🔒 Ucapkan dulu, lalu lanjut':'🔒 Tekan “Mama/Papa: sudah benar” dulu'):Q.i<Q.list.length-1?'Soal berikutnya ›':'Lihat hasil ›'}</button></div>`;Q.fneed=!!FZ;Q.fz=FZ;Q.fok=ok;Q.fmode=!!FZ;
  document.getElementById('nx').onclick=next;clearTimeout(Q.autoT);if(ok&&!FZ){const my=Q.i,kk=Q.k;Q.autoT=setTimeout(()=>{if(Q&&Q.k===kk&&Q.i===my&&document.getElementById('nx'))next()},2400)}if(FZ)setTimeout(()=>speak(FZ,'zh'),250);(document.getElementById(FZ?(DICT&&!Q.noMic?'fmic':'fself'):'nx')||document.getElementById('nx')).focus({preventScroll:true});document.getElementById('fb').scrollIntoView({block:'nearest',behavior:'smooth'})}
function nudgeSay(){const sr=document.getElementById('sayreq');if(!sr)return;sr.scrollIntoView({block:'center',behavior:'smooth'});sr.classList.remove('nudge');void sr.offsetWidth;sr.classList.add('nudge');sfx.bad()}
function next(){if(Q.fneed){nudgeSay();return}saveCur();clearTimeout(Q.autoT);try{Q.writer&&Q.writer.cancelQuiz()}catch(_){}Q.writer=null;Q.fmode=false;try{DICT&&SP.active&&DICT.stop()}catch(_){}const nxt=nextOpen();if(nxt!=null){Q.i=nxt;Q.P={};Q.m=null;Q.sel=null;Q.pok={};Q.pmsg={};Q.ptries=0;Q.ftries=0;renderQ();document.querySelector('.qcard').scrollIntoView({block:'start',behavior:'smooth'})}else result()}
const PRED=v=>v>=90?['A','Sangat baik','var(--ok)']:v>=75?['B','Baik','var(--accent)']:v>=60?['C','Cukup','var(--accent2)']:['D','Perlu bimbingan','var(--bad)'];
const fmtT=t=>{const d=new Date(t);return d.toLocaleDateString('id-ID',{weekday:'short',day:'numeric',month:'short'})+' '+d.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'})};
const fmtDur=ms=>{if(ms==null)return '–';const s=Math.max(1,Math.round(ms/1000)),m=Math.floor(s/60);return m?`${m} mnt ${s%60} dtk`:`${s} dtk`};
const histOf=k=>SAVE.att.filter(x=>x.k===k);
function histTable(list,showSubj){if(!list.length)return '<p class="na">Belum ada riwayat latihan.</p>';return `<div class="tblwrap"><table class="hist2"><thead><tr><th>Tanggal & jam</th>${showSubj?'<th>Mapel</th>':''}<th>Soal</th><th>Nilai</th><th>Predikat</th><th>Waktu</th><th>Per soal</th></tr></thead><tbody>${list.slice().reverse().map(x=>{const p=PRED(x.score);return `<tr><td>${fmtT(x.t)}</td>${showSubj?`<td><b style="color:${SUBJ[x.k].c}">${SUBJ[x.k].name}</b></td>`:''}<td class="num">${x.n}</td><td class="num"><b>${x.score}%</b></td><td><span class="chip" style="--p:${p[2]}">${p[0]}</span></td><td class="num">${fmtDur(x.dur)}</td><td class="num">${x.dur!=null?fmtDur(x.dur/x.n):'–'}</td></tr>`}).join('')}</tbody></table></div>`}
function trend(list,c){const L=list.slice(-10);if(!L.length)return '';return `<div class="trend" role="img" aria-label="Grafik nilai ${L.length} latihan terakhir">${L.map((x,i)=>`<div class="tb"><span class="tv">${x.score}</span><i style="height:${Math.max(4,x.score)}%;background:${c}"></i><small>${i+1}</small></div>`).join('')}</div>`}
const qText=q=>String(q.q||'').replace(/<[^>]+>/g,'');
function result(){Q.finished=true;clearCur(Q.k);REDO={k:Q.k,list:(()=>{const R=Q.res||[];return Q.list.filter((_,i)=>!R[i])})(),wmode:Q.wmode};const s=SUBJ[Q.k],n=Q.list.length,res=Q.res||[],pts=res.reduce((x,v)=>x+(v||0),0),score=Math.round(pts/n*100),first=res.filter(v=>v===1).length,second=res.filter(v=>v===.5).length,wrong=[...Array(n).keys()].filter(i=>!res[i]);
  const prevA=histOf(Q.k).slice(-1)[0],dur=Date.now()-(Q.t0||Date.now());SAVE.best[Q.k]=Math.max(SAVE.best[Q.k]||0,score);SAVE.att.push({k:Q.k,name:SAVE.name,score,n,first,second,wrong,t:Date.now(),dur});if(SAVE.att.length>200)SAVE.att=SAVE.att.slice(-200);persist();
  const p=PRED(score),nm=esc(SAVE.name||'kamu');
  app.innerHTML=`<div class="qbar"><button class="back" data-home="1" aria-label="Kembali ke Home"><svg class="hico" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h5v-6h4v6h5V10"/></svg>Home</button><b style="color:${s.c}">${s.name}</b></div><section class="qcard res" style="--c:${s.c}">
   <span class="eyebrow">Nilai latihan · ${nm}</span><div class="scorewrap"><span class="big">${score}<small>%</small></span><span class="pred" style="--p:${p[2]}"><b>${p[0]}</b>${p[1]}</span></div>
   <h2>${score>=90?`Luar biasa, ${nm}! Siap ASAS!`:score>=75?`Bagus, ${nm}!`:score>=60?`Cukup, ${nm}. Ulangi sekali lagi, ya.`:`Ayo belajar lagi, ${nm}. Kamu pasti bisa!`}</h2>
   <div class="tally"><span class="t1"><b>${first}</b>benar langsung</span><span class="t2"><b>${second}</b>benar setelah mencoba</span><span class="t3"><b>${wrong.filter(i=>res[i]===0).length}</b>salah</span>${wrong.some(i=>res[i]==null)?`<span><b>${wrong.filter(i=>res[i]==null).length}</b>belum dikerjakan</span>`:''}</div>${wrong.length?`<div class="redo"><button class="btn" data-redo="1">🔁 Ulangi ${wrong.length} soal yang salah${wrong.some(i=>res[i]==null)?' / belum dikerjakan':''}</button><details><summary>Lihat daftar soal yang salah</summary><ol>${wrong.slice(0,40).map(i=>`<li value="${i+1}">${res[i]==null?'<em>(belum)</em> ':''}${Q.list[i].q.replace(/<[^>]+>/g,'').slice(0,90)}${Q.list[i].a?` → <b>${esc(String(Q.list[i].a))}</b>`:''}</li>`).join('')}</ol></details></div>`:''}
   <div class="tally"><span><b>${fmtDur(dur)}</b>waktu mengerjakan</span><span><b>${fmtDur(dur/n)}</b>rata-rata per soal</span>${prevA?`<span class="${score>prevA.score?'t1':score<prevA.score?'t3':''}"><b>${score>prevA.score?'▲ +'+(score-prevA.score):score<prevA.score?'▼ '+(score-prevA.score):'='}</b>dibanding latihan lalu (${prevA.score}%)</span>`:''}</div>
   <p class="rule">Cara menilai: benar langsung = 1 poin, benar di percobaan kedua = ½ poin. Nilai = poin ÷ ${n} × 100.</p>
   ${wrong.length?`<div class="wrongs"><h3>Soal yang perlu diulang</h3><ol>${wrong.map(i=>{const q=Q.list[i];return `<li>${esc(qText(q))}${q.a?` <span>Jawaban: <b>${esc(q.a.length<3&&q.pat?(CNAME[q.a]||SHN[q.a]||q.a):q.a)}</b></span>`:''}</li>`}).join('')}</ol></div>`:''}
   <div class="histbox"><h3>Riwayat latihan ${s.name}</h3>${trend(histOf(Q.k),s.c)}${histTable(histOf(Q.k).slice(-10),false)}</div>
   <div class="act"><button class="btn" data-quiz="${Q.k}">Ulangi</button><button class="btn alt" data-rapor="1">Lihat semua nilai</button><button class="btn alt" data-home="1">Rencana</button></div></section>`;if(score>=60){confetti();sfx.ok()}}

/* ===== rapor ===== */
function renderRapor(){Q=null;const nm=SAVE.name||'Murid',rows=Object.entries(SUBJ).map(([k,s])=>{const at=SAVE.att.filter(x=>x.k===k);return {k,s,at,last:at[at.length-1],best:at.length?Math.max(...at.map(x=>x.score)):null}});
  const done=rows.filter(r=>r.last),avg=done.length?Math.round(done.reduce((x,r)=>x+r.last.score,0)/done.length):null,pa=avg!=null?PRED(avg):null;
  const weak=done.filter(r=>r.last.score<75).map(r=>r.s.name);
  app.innerHTML=`<div class="qbar"><button class="back" data-home="1" aria-label="Kembali ke Home"><svg class="hico" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h5v-6h4v6h5V10"/></svg>Home</button><b>Rapor latihan</b></div>
  <section class="rapor"><div class="rhead"><div><span class="eyebrow">Kelas 2C · Persiapan ASAS · 23–27 Nov 2026</span><h1>${esc(nm)}</h1><p>${done.length} dari ${rows.length} mata pelajaran sudah dilatih · ${SAVE.att.length} kali latihan</p></div>
   ${avg!=null?`<div class="avg" style="--p:${pa[2]}"><span>Rata-rata</span><b>${avg}</b><em>${pa[0]} · ${pa[1]}</em></div>`:`<div class="avg"><span>Rata-rata</span><b>–</b><em>Belum ada latihan</em></div>`}</div>
   ${weak.length?`<p class="advice">Perlu diulang: <b>${weak.join(', ')}</b> (nilai di bawah 75).</p>`:done.length?`<p class="advice good">Semua nilai terakhir 75 ke atas. Pertahankan!</p>`:''}
   ${scoreChart(rows)}
   ${WRITE_ON?wMastery():''}
   <h3 class="tblh">Tabel nilai</h3><div class="tblwrap"><table><thead><tr><th>Mata pelajaran</th><th>Nilai terakhir</th><th>Terbaik</th><th>Predikat</th><th>Latihan</th><th>Terakhir</th></tr></thead><tbody>
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
  const tray=`<div class="tray" data-bin="tray">${q.sort.items.filter(([w])=>!Q.P[w]).map(([w])=>tok(w)).join('')||'<span class="hint">Semua sudah dikelompokkan ✓</span>'}</div>`;
  return `${tray}<p class="dhint">${Q.sel?'👉 Sekarang ketuk kotak tujuannya':'Seret ke kotak, atau ketuk kata lalu ketuk kotaknya'}</p><div class="bins n${q.sort.bins.length}" style="grid-template-columns:repeat(${q.sort.bins.length},minmax(0,1fr))">${q.sort.bins.map(([id,l,sub])=>`<div class="bin ${CAN[id]?'hascan':''} ${Q.sel?'ready':''}" data-bin="${id}" role="button" tabindex="0" aria-label="Kotak ${l}">${CAN[id]?canSVG(id):''}<b>${l}</b><small>${sub}</small><span class="in">${q.sort.items.filter(([w])=>Q.P[w]===id).map(([w])=>tok(w)).join('')}</span></div>`).join('')}</div>
  ${Q.done?'':`<div class="act"><button class="btn alt" id="sreset">Ulang</button><button class="btn ${Object.keys(Q.P).length===q.sort.items.length?'ready':''}" id="scheck" ${Object.keys(Q.P).length===q.sort.items.length?'':'disabled'}>Periksa ✓</button></div>`}`}
function placeTok(w,bin){if(!Q||Q.done)return;if(bin==='tray')delete Q.P[w];else Q.P[w]=bin;Q.sel=null;Q.m=null;tone(660,.08,.1);redrawSort();
  if(bin!=='tray'){const b=document.querySelector(`.bin[data-bin="${bin}"]`);if(b){b.classList.remove('gulp');b.getBoundingClientRect();b.classList.add('gulp')}}}
function redrawSort(){const q=Q.list[Q.i];const c=document.querySelector('.qcard');c.querySelectorAll('.bins,.tray,.act,.dhint').forEach(e=>e.remove());c.querySelector('#msg').insertAdjacentHTML('beforebegin',sortHTML(q));
  const ch=document.getElementById('scheck');if(ch)ch.onclick=()=>{const m={};let ok=true;q.sort.items.forEach(([w,b])=>{m[w]=Q.P[w]===b;if(!m[w])ok=false});Q.m=m;
    if(ok){Q.done=true;if(Q.tries===0)Q.ok++;sfx.ok();redrawSort();burst(document.querySelector('.bins'));fb(true)}else{Q.tries++;sfx.bad();if(Q.tries>=2){Q.done=true;q.sort.items.forEach(([w,b])=>Q.P[w]=b);Q.m=Object.fromEntries(q.sort.items.map(([w])=>[w,true]));redrawSort();fb(false)}else{redrawSort();document.getElementById('msg').textContent='Yang merah belum tepat. Coba lagi!';setTimeout(()=>{if(Q.done)return;Object.keys(m).forEach(w=>{if(!m[w])delete Q.P[w]});Q.m=null;redrawSort()},1200)}}};
  const rs=document.getElementById('sreset');if(rs)rs.onclick=()=>{Q.P={};Q.m=null;Q.sel=null;redrawSort()}}
/* seret */
let DR=null,SUPPRESS=false;
/* seret-lepas: sentuhan (touch events) + mouse (pointer), ketuk sebagai cadangan */
let LASTACT=0,LASTBIN=0;
function dStart(t,x,y,th){DR={w:t.dataset.tok,x,y,el:t,moved:false,th}}
function hovAt(x,y){if(!DR||!DR.g)return;DR.g.style.display='none';const el=document.elementFromPoint(x,y);DR.g.style.display='';document.querySelectorAll('.bin.hov').forEach(b=>b.classList.remove('hov'));const b=el&&el.closest('.bin');if(b)b.classList.add('hov')}
function dMove(x,y){if(!DR)return;if(!DR.moved&&Math.hypot(x-DR.x,y-DR.y)>DR.th){DR.moved=true;const r=DR.el.getBoundingClientRect();DR.g=DR.el.cloneNode(true);DR.g.classList.add('ghost');DR.g.style.width=r.width+'px';DR.ox=DR.x-r.left;DR.oy=DR.y-r.top;document.body.appendChild(DR.g);DR.el.classList.add('lift');clearInterval(window.__AS);window.__AS=setInterval(()=>{if(!DR||!DR.moved){clearInterval(window.__AS);return}const ed=90,yy=DR.ly;let v=0;if(yy<ed)v=-Math.ceil((ed-yy)/6);else if(yy>innerHeight-ed)v=Math.ceil((yy-(innerHeight-ed))/6);if(v){scrollBy(0,v);hovAt(DR.lx,DR.ly)}},16)}
 DR.lx=x;DR.ly=y;if(DR.moved){DR.g.style.transform=`translate(${x-DR.ox}px,${y-DR.oy}px) rotate(-4deg) scale(1.08)`;hovAt(x,y)}}
let LASTTAP=null;function tapTok(d){const w=d.w,inBin=d.el.closest('.bin');LASTTAP={w,t:Date.now()};LASTACT=Date.now();if(Q.sel&&Q.sel!==w&&inBin){placeTok(Q.sel,inBin.dataset.bin);return}Q.sel=Q.sel===w?null:w;redrawSort()}
function dEnd(x,y,mouse){const d=DR;DR=null;clearInterval(window.__AS);LASTACT=Date.now();if(!d)return;if(!d.moved){tapTok(d);return}if(d.g)d.g.style.display='none';const el=document.elementFromPoint(x,y);d.g&&d.g.remove();document.querySelectorAll('.bin.hov').forEach(b=>b.classList.remove('hov'));const b=el&&el.closest('[data-bin]'),cur=Q.P[d.w]||'tray',dist=Math.hypot(x-d.x,y-d.y);if((!b||b.dataset.bin===cur)&&dist<45){Q.sel=Q.sel===d.w?null:d.w;redrawSort()}else if(b){if(mouse)LASTBIN=Date.now();placeTok(d.w,b.dataset.bin)}else redrawSort()}
function dCancel(){if(!DR)return;const d=DR;DR=null;clearInterval(window.__AS);d.g&&d.g.remove();LASTACT=Date.now();if(!d.moved){tapTok(d);return}redrawSort()}
document.addEventListener('touchstart',e=>{const t=e.target.closest&&e.target.closest('.tok');if(!t||!Q||Q.done)return;if(e.cancelable)e.preventDefault();const p=e.changedTouches[0];dStart(t,p.clientX,p.clientY,12)},{passive:false});
document.addEventListener('touchmove',e=>{if(!DR)return;if(e.cancelable)e.preventDefault();const p=e.changedTouches[0];dMove(p.clientX,p.clientY)},{passive:false});
document.addEventListener('touchend',e=>{if(!DR)return;if(e.cancelable)e.preventDefault();const p=e.changedTouches[0];dEnd(p.clientX,p.clientY)},{passive:false});
document.addEventListener('touchcancel',()=>dCancel());
document.addEventListener('pointerdown',e=>{if(e.pointerType==='touch')return;const t=e.target.closest('.tok');if(!t||!Q||Q.done)return;e.preventDefault();dStart(t,e.clientX,e.clientY,6);try{t.setPointerCapture(e.pointerId)}catch(_){}});
window.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;dMove(e.clientX,e.clientY)});
window.addEventListener('pointerup',e=>{if(e.pointerType==='touch')return;if(!DR){const tg=e.target;if(Q&&!Q.done&&Q.sel&&tg&&tg.closest&&!tg.closest('[data-tok]')){const bn=tg.closest('[data-bin]');if(bn&&bn.dataset.bin){LASTBIN=Date.now();placeTok(Q.sel,bn.dataset.bin)}}return}dEnd(e.clientX,e.clientY,true)});
window.addEventListener('pointercancel',e=>{if(e.pointerType==='touch')return;dCancel()});
/* animasi bintang */
function burst(el){if(!el||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
  for(let i=0;i<14;i++){const s=document.createElement('span');s.className='spark';const a=i/14*Math.PI*2,d=60+Math.random()*50;s.style.left=cx+'px';s.style.top=cy+'px';s.style.setProperty('--dx',Math.cos(a)*d+'px');s.style.setProperty('--dy',Math.sin(a)*d+'px');s.style.background=['#FFC93C','#3FA34D','#E5484D','#3D7BE0','#8E5BD8'][i%5];document.body.appendChild(s);setTimeout(()=>s.remove(),900)}}
function confetti(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const c=document.createElement('canvas');c.className='confetti';c.width=innerWidth;c.height=innerHeight;document.body.appendChild(c);const x=c.getContext('2d');
  const P=[...Array(120)].map(()=>({x:innerWidth/2+(Math.random()-.5)*160,y:innerHeight*.3,vx:(Math.random()-.5)*12,vy:-Math.random()*11-4,r:Math.random()*6+4,c:['#FFC93C','#3FA34D','#E5484D','#3D7BE0','#8E5BD8'][Math.random()*5|0],a:Math.random()*6}));let f=0;
  (function tick(){x.clearRect(0,0,c.width,c.height);P.forEach(p=>{p.vy+=.33;p.x+=p.vx;p.y+=p.vy;p.a+=.2;x.save();x.translate(p.x,p.y);x.rotate(p.a);x.fillStyle=p.c;x.fillRect(-p.r/2,-p.r/4,p.r,p.r/2);x.restore()});if(++f<140)requestAnimationFrame(tick);else c.remove()})()}

/* Conversation: speaking */
const SP={heard:'',live:'',active:false,partial(t){this.live=t;updHeard()},final(t){this.heard+=t;this.live='';updHeard()},
  state(e){this.active=e.state!=='idle';if(Q&&Q.fmode){const fb2=document.getElementById('fmic');if(fb2){fb2.classList.toggle('on',this.active);fb2.innerHTML=this.active?'⏺ Mendengarkan… ketuk untuk selesai':'🎤 Ucapkan'}if(e.state==='idle'&&this.heard.trim())judgeF();if(e.state==='idle'&&(e.reason==='not_granted'||e.reason==='unavailable')){Q.noMic=true;const sr=document.getElementById('sayreq');if(sr)sr.outerHTML=sayReqHTML(Q.fz)}return}const pq=Q&&Q.list[Q.i];if(pq&&pq.poem){const pb=document.querySelector(`[data-pmic="${Q.pline}"]`);if(pb){pb.classList.toggle('on',this.active);pb.innerHTML=this.active?'⏺ Mendengarkan… ketuk untuk selesai':'🎤 Ucapkan'}if(e.state==='idle'&&this.heard.trim())judgeLine();if(e.state==='idle'&&(e.reason==='not_granted'||e.reason==='unavailable')){Q.noMic=true;refreshPoem()}return}const b=document.getElementById('mic');if(b){b.classList.toggle('on',this.active);b.querySelector('span').textContent=this.active?'Mendengarkan… ketuk untuk berhenti':'Ketuk lalu bicara'}if(e.state==='idle'&&this.heard.trim())judge();if(e.state==='idle'&&(e.reason==='not_granted'||e.reason==='unavailable')){Q.noMic=true;renderQ()}}};
const norm=s=>s.toLowerCase().replace(/[’']/g,'').replace(/[^a-z\s]/g,' ').split(/\s+/).filter(Boolean);
function lev(a,b){const d=[...Array(b.length+1)].map((_,i)=>[i]);for(let j=1;j<=a.length;j++)d[0][j]=j;for(let i=1;i<=b.length;i++)for(let j=1;j<=a.length;j++)d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(b[i-1]===a[j-1]?0:1));return d[b.length][a.length]}
const ZP=/[，。！？、：；“”‘’,.!?\s]/g;
const TRAD={'個':'个','歲':'岁','讓':'让','媽':'妈','買':'买','來':'来','許':'许','盤':'盘','聰':'聪','哥':'哥','給':'给','裡':'里','裏':'里','說':'说','嗎':'吗','謝':'谢','對':'对','見':'见','關':'关','係':'系','貌':'貌','禮':'礼','語':'语','學':'学','習':'习','書':'书','筆':'笔','講':'讲','會':'会','還':'还','飯':'饭','餓':'饿','貓':'猫','間':'间','東':'东','麵':'面','蛋':'蛋','歡':'欢','兒':'儿','歌':'歌','漢':'汉','門':'门','開':'开','聽':'听','誰':'谁','訴':'诉','時':'时','嗎':'吗','爺':'爷','園':'园','鳥':'鸟','們':'们','這':'这','並':'并','體':'体','實':'实','發':'发'};
const ALIAS={'俐':'利力立丽例厉莉粒','梨':'离里理李黎犁璃丽','融':'荣容蓉溶熔绒','孔':'空恐控','伶':'灵玲铃零龄凌','聪':'葱从匆','盘':'盆判攀','主':'住注祝煮助','意':'义亿以艺议易','岁':'睡碎随','弟':'地第帝的','让':'嚷','叫':'较教觉','留':'流刘六','己':'几挤给机','把':'吧爸巴','只':'之知支直','吃':'持迟池','着':'这者著','突':'图涂','然':'燃','许':'需须','多':'都','来':'莱','分':'份粉','看':'砍','中':'钟终','有':'又右友','了':'啦乐','个':'各','四':'4是','小':'晓笑','名':'明鸣','明':'名鸣','心':'新欣','大':'达打','哥':'歌','给':'几','自':'子字','妈':'吗马','买':'卖迈','说':'所','的':'得地'};
const DIG={'0':'零','1':'一','2':'二','3':'三','4':'四','5':'五','6':'六','7':'七','8':'八','9':'九'};
const zhNorm=s=>[...s.replace(ZP,'')].map(c=>TRAD[c]||DIG[c]||c);
const zhEq=(c,x)=>x===c||(ALIAS[c]||'').includes(x);
function scoreZh(t,h){const T=[...t.replace(ZP,'')],H=zhNorm(h),used=new Set();return T.map(c=>{const k=H.findIndex((x,i)=>!used.has(i)&&zhEq(c,x));if(k>=0){used.add(k);return true}return false})}
const scoreQ=(q,h)=>q.slang==='zh'?scoreZh(q.speak,h):score(q.speak,h);
function score(t,h){const T=norm(t),H=norm(h),used=new Set();return T.map(w=>{const k=H.findIndex((x,i)=>!used.has(i)&&(x===w||(w.length>=4&&lev(w,x)<=1)||(w==='wuzzy'&&/^(wuzz|wuss|woozy|wusy|was|whoozy)/.test(x))||(w==='fuzzy'&&/^(fuzz|fuss|fussy|fozzy)/.test(x))));if(k>=0){used.add(k);return true}return false})}
function speakHTML(q){const zh=q.slang==='zh',L=zh?'zh':'en',words=zh?[...q.speak.replace(ZP,'')]:q.speak.split(/\s+/);return `<div class="target ${zh?'zht':''}" ${zh?'lang="zh"':''}>${words.map(w=>`<span class="tw">${w}</span>`).join(zh?'':' ')}</div>${q.py?`<p class="py">${q.py}</p>`:''}
  <div class="lis"><button class="spk" data-say="${esc(q.speak)}" data-lang="${L}">🔊 Dengar</button><button class="spk" data-say="${esc(q.speak)}" data-lang="${L}" data-slow="1">🐢 Pelan</button></div>
  ${DICT&&!Q.noMic?`<button class="micbtn" id="mic">🎤<span>Ketuk lalu bicara</span></button><p class="heard" id="heard"></p>`:`<div class="self"><p>🗣️ Ucapkan kalimat di atas 3 kali dengan jelas dan lantang. Mama/Papa mendengarkan.</p><button class="btn" id="said">${q.bab==='cerita'||Q.k==='conv'?'Mama/Papa: sudah benar ✓':'Sudah lancar ✓'}</button></div>`}`}
function updHeard(){if(Q&&Q.fmode){const el=document.getElementById('fheard');const txt=(SP.heard+' '+SP.live).trim();if(el&&txt)el.textContent='Terdengar: “'+txt+'”';return}const pq=Q&&Q.list[Q.i];if(pq&&pq.poem){const el=document.getElementById('ph'+Q.pline);const txt=(SP.heard+' '+SP.live).trim();if(el&&txt)el.textContent='Terdengar: “'+txt+'”';return}const h=document.getElementById('heard');if(!h)return;const txt=(SP.heard+' '+SP.live).trim();h.textContent=txt?'Terdengar: “'+txt+'”':'';const sc=scoreQ(Q.list[Q.i],txt);document.querySelectorAll('.tw').forEach((e,i)=>e.classList.toggle('hit',!!sc[i]))}
function judge(){const q=Q.list[Q.i],sc=scoreQ(q,SP.heard),r=sc.filter(Boolean).length/sc.length,need=q.bab==='cerita'?.85:q.slang==='zh'?.7:.8;document.querySelectorAll('.tw').forEach((e,i)=>{e.classList.toggle('hit',sc[i]);e.classList.toggle('miss',!sc[i])});
  if(r>=need){if(Q.tries===0)Q.ok++;Q.done=true;sfx.ok();fb(true,`Terdengar ${Math.round(r*100)}% ${q.slang==='zh'?'huruf':'kata'} dengan jelas.${q.n?' '+q.n:''}`)}else{Q.tries++;sfx.bad();document.getElementById('msg').innerHTML=`Terdengar ${Math.round(r*100)}%. ${q.slang==='zh'?'Huruf':'Kata'} merah belum jelas. Dengar lagi, lalu coba lagi.`;const MUST=q.bab==='cerita'||Q.k==='conv';if(Q.tries>=3&&!MUST){Q.done=true;fb(false,'Latih lagi pelan-pelan bersama Mama/Papa.')}else if(MUST&&Q.tries>=2)document.getElementById('msg').innerHTML+=' Tekan 🐢 Pelan, dengarkan, lalu ucapkan pelan-pelan.'}}

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
  const hm=t.closest('[data-home]');if(hm){if(Q){clearTimeout(Q.autoT);saveCur()}try{DICT&&SP.active&&DICT.stop()}catch(_){}Q=null;render();scrollTo({top:0});return}
  const sp=t.closest('[data-say]');if(sp){speak(sp.dataset.say,sp.dataset.lang||'en',sp.dataset.slow?.6:.9);return}
  const pt=t.closest('[data-pyt]');if(pt){const box=pt.closest('.zh,.sayreq'),el=box&&box.querySelector('.zpy');if(el){const on=el.hidden;el.hidden=!on;pt.setAttribute('aria-pressed',on);pt.classList.toggle('on',on)}return}
  if(t.closest('#wanim')&&Q&&Q.writer){try{Q.writer.cancelQuiz()}catch(_){}Q.writer.hideCharacter();Q.writer.animateCharacter({onComplete:()=>{if(Q&&Q.wph&&!Q.done)wQuiz(Q.wph)}});return}
  if(t.closest('#wgo')&&Q&&Q.writer){wQuiz(1);return}
  if(t.closest('#wreset')&&Q&&Q.writer&&!Q.done){if(!Q.wopts){wQuiz(Q.wph||1)}else restartStroke('Ulangi goresan <b>{n}</b>.');return}
  if(t.closest('#wskip')&&Q&&!Q.done){skipWrite();return}
  const wmb=t.closest('[data-wmode]');if(wmb){SAVE.wmode=wmb.dataset.wmode;persist();openQuiz('mand');return}
  const sh=t.closest('[data-sheet]');if(sh){if(Q)clearTimeout(Q.autoT);try{Q&&Q.writer&&Q.writer.cancelQuiz()}catch(_){}Q=null;openSheet(sh.dataset.sheet);return}
  const rs2=t.closest('[data-resume]');if(rs2){resumeQuiz(rs2.dataset.resume);return}
  const dr=t.closest('[data-drop]');if(dr){clearCur(dr.dataset.drop);openQuiz(dr.dataset.drop);return}
  if(t.closest('[data-nav]')&&Q){Q.navOpen=!Q.navOpen;refreshNav();const nb=document.querySelector('[data-nav]');if(nb)nb.setAttribute('aria-expanded',Q.navOpen);return}
  const nf=t.closest('[data-navf]');if(nf&&Q){Q.navF=nf.dataset.navf;refreshNav();return}
  const gq=t.closest('[data-go]');if(gq&&Q){goQ(+gq.dataset.go);return}
  if(t.closest('[data-finish]')&&Q){clearTimeout(Q.autoT);Q.fneed=false;result();return}
  if(t.closest('[data-redo]')&&REDO&&REDO.list.length){const k=REDO.k;Q={k,i:0,ok:0,tries:0,list:REDO.list.slice(),P:{},t0:Date.now(),wmode:REDO.wmode};renderQ();scrollTo({top:0});return}
  if(t.closest('[data-save]')&&Q){saveCur();toast('💾 Tersimpan — bisa dilanjutkan dari Home');return}
  const pk=t.closest('[data-pick]');if(pk){pick(pk);return}
  const bb=t.closest('[data-bab]');if(bb){const [k,b]=bb.dataset.bab.split(':');SAVE.bab=SAVE.bab||{};SAVE.bab[k]=b;persist();openQuiz(k);return}
  const bi=t.closest('[data-bi]');if(bi&&Q&&!bi.disabled){buildTap(bi.dataset.bi);return}
  if(t.closest('#bcheck')){buildCheck();return}
  const hd=t.closest('[data-hide]');if(hd&&Q){Q.hide=+hd.dataset.hide;refreshPoem();return}
  const pm=t.closest('[data-pmic]');if(pm&&Q){if(SP.active){DICT.stop().catch(()=>{});return}Q.pline=+pm.dataset.pmic;SP.heard='';SP.live='';(Q.pmsg=Q.pmsg||{})[Q.pline]='';const ph=document.getElementById('ph'+Q.pline);if(ph)ph.textContent='';DICT.start({language:'zh-CN'}).catch(err=>{const c=err&&err.code;if(c==='dismissed'){const e2=document.getElementById('ph'+Q.pline);if(e2)e2.textContent='Ketuk lagi dan pilih Izinkan mikrofon.'}else{Q.noMic=true;refreshPoem()}});return}
  if(t.closest('#fmic')&&Q&&Q.fneed){if(SP.active){DICT.stop().catch(()=>{});return}SP.heard='';SP.live='';const el=document.getElementById('fheard');if(el)el.textContent='';DICT.start({language:'zh-CN'}).catch(err=>{const c=err&&err.code;const e2=document.getElementById('fheard');if(c==='dismissed'){if(e2)e2.textContent='Ketuk lagi dan pilih Izinkan mikrofon.'}else{Q.noMic=true;const sr=document.getElementById('sayreq');if(sr)sr.outerHTML=sayReqHTML(Q.fz)}});return}
  if(t.closest('#fself')&&Q&&Q.fneed){sayPassed('Dikonfirmasi oleh Mama/Papa.');return}
  const ps=t.closest('[data-pself]');if(ps&&Q){(Q.pok=Q.pok||{})[+ps.dataset.pself]=true;sfx.ok();refreshPoem();return}
  if(t.closest('#poemok')&&Q&&!Q.done){const q=Q.list[Q.i];if(q.poem.some((_,i)=>!(Q.pok||{})[i]))return;Q.done=true;if(!Q.ptries)Q.ok++;else Q.tries=1;sfx.ok();confetti();document.getElementById('poemok').remove();fb(true,'Hebat! Semua baris sudah diucapkan dengan benar. Sekarang latihan baris demi baris.');return}
  if(t.closest('#breset')&&Q&&!Q.done){Q.bans=[];drawBuild();return}
  const KB=e.detail===0;if(SUPPRESS)return;const FALL=!KB&&Date.now()-LASTACT>700;const tk=(KB||FALL)?t.closest('[data-tok]'):null;if(!KB&&!FALL&&t.closest('[data-tok]'))return;if(!KB&&!t.closest('[data-tok]')&&t.closest('[data-bin]')&&Date.now()-LASTBIN<700)return;if(tk&&LASTTAP&&LASTTAP.w===tk.dataset.tok&&Date.now()-LASTTAP.t<700)return;if(tk&&Q&&!Q.done){const w=tk.dataset.tok,inBin=tk.closest('.bin');if(Q.sel&&Q.sel!==w&&inBin){placeTok(Q.sel,inBin.dataset.bin);return}Q.sel=Q.sel===w?null:w;redrawSort();return}
  const bn=t.closest('[data-bin]');if(bn&&Q&&!Q.done){if(Q.sel)placeTok(Q.sel,bn.dataset.bin);return}
  if(t.closest('#mic')){if(SP.active){DICT.stop().catch(()=>{});return}SP.heard='';SP.live='';updHeard();DICT.start({language:Q.list[Q.i].slang==='zh'?'zh-CN':'en'}).catch(err=>{const c=err&&err.code;if(c!=='dismissed'){Q.noMic=true;renderQ()}else if(c==='dismissed')document.getElementById('msg').textContent='Ketuk mikrofon lagi dan pilih Izinkan.'});return}
  if(t.closest('#said')){Q.done=true;if(Q.tries===0)Q.ok++;fb(true,'Bagus! Terus latihan sampai lancar tanpa melihat teks.');return}});
document.addEventListener('input',e=>{if(e.target.id==='nama'){SAVE.name=e.target.value.trim();persist();document.querySelectorAll('.nm').forEach(x=>x.textContent=SAVE.name||'Murid')}});
document.addEventListener('change',e=>{const k=e.target.dataset&&e.target.dataset.task;if(k){SAVE.done[k]=e.target.checked;persist();render()}});
render();
window.__H={QS,openQuiz,Q:()=>Q};

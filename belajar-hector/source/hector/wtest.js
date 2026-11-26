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
 <div class="wctrl"><button class="spk" data-say="${esc(q.write)}" data-lang="zh">🔊 Dengar huruf</button><button class="spk" data-say="${esc(q.ww)}" data-lang="zh">🔊 Dengar kata</button></div>
 <div class="wsm" id="wsm" aria-label="Nilai per goresan">${Array.from({length:q.wn},(_,i)=>`<i id="sm${i}">${i+1}</i>`).join('')}</div>
 <p class="wmsg" id="wmsg" aria-live="polite">Tulis goresan pertama.</p></div>`}
function resample(pts,n){if(pts.length<2)return Array(n).fill(pts[0]||{x:0,y:0});const L=[0];for(let i=1;i<pts.length;i++)L.push(L[i-1]+Math.hypot(pts[i].x-pts[i-1].x,pts[i].y-pts[i-1].y));const T=L[L.length-1]||1,out=[];
 for(let k=0;k<n;k++){const t=T*k/(n-1);let i=1;while(i<L.length-1&&L[i]<t)i++;const f=(t-L[i-1])/((L[i]-L[i-1])||1);out.push({x:pts[i-1].x+(pts[i].x-pts[i-1].x)*f,y:pts[i-1].y+(pts[i].y-pts[i-1].y)*f})}return out}
function pdist(a,b){let s=0;for(let i=0;i<a.length;i++)s+=Math.hypot(a[i].x-b[i].x,a[i].y-b[i].y);return s/a.length}
function errType(c,sn,path){try{const M=WDATA[c].medians.map(m=>resample(m.map(([x,y])=>({x,y})),12)),P=resample(path,12);const cur=pdist(P,M[sn]),rev=pdist(P,M[sn].slice().reverse());
 let bo=1e9;for(let j=sn+1;j<M.length;j++)bo=Math.min(bo,pdist(P,M[j]));if(bo<140&&bo<cur)return 'urutan';if(rev<140&&rev<cur*.7)return 'arah';return 'bentuk'}catch(_){return 'bentuk'}}
function initDikte(q){const el=document.getElementById('hw');if(!el||!window.HanziWriter)return;const box=document.getElementById('tzg');const sz=Math.round(Math.min(300,box.clientWidth||300));
 const w=Q.writer=HanziWriter.create(el,q.write,Object.assign({width:sz,height:sz,padding:Math.round(sz*.06),showCharacter:false,showOutline:false,drawingWidth:Math.max(14,Math.round(sz/16)),charDataLoader:(c,ok)=>ok(WDATA[c])},wcol()));
 const ms=Array(q.wn).fill(0),et=[];const m=document.getElementById('wmsg');setTimeout(()=>speak(q.ww,'zh'),300);
 w.quiz({leniency:1.2,showHintAfterMisses:2,highlightOnComplete:true,
  onMistake:d=>{ms[d.strokeNum]++;const ty=errType(q.write,d.strokeNum,(d.drawnPath&&d.drawnPath.points)||[]);et.push([d.strokeNum,ty]);sfx.bad();
   m.innerHTML=d.mistakesOnStroke>=2?`Goresan ${d.strokeNum+1}: lihat petunjuk yang berkedip (nilai goresan ini 0).`:`Goresan ${d.strokeNum+1} belum tepat (${ty==='urutan'?'urutan salah':ty==='arah'?'arah terbalik':'bentuk/letak belum tepat'}). Coba lagi.`},
  onCorrectStroke:d=>{const k=ms[d.strokeNum],e=document.getElementById('sm'+d.strokeNum);if(e)e.className=k===0?'s1':k===1?'s5':'s0';m.textContent=d.strokesRemaining?`Goresan ${d.strokeNum+2} dari ${q.wn}…`:''},
  onComplete:()=>{const pts=ms.reduce((s,k)=>s+(k===0?1:k===1?.5:0),0),score=Math.round(pts/q.wn*100),hints=ms.filter(k=>k>=2).length,pass=score>=80&&hints===0;
   const r=wmGet(q.write);r.tries++;r.last=score;r.best=Math.max(r.best,score);et.forEach(([sn,ty])=>{r.err[ty]++;r.sm[sn+1]=(r.sm[sn+1]||0)+1});if(pass&&!r.days.includes(today()))r.days.push(today());persist();
   const st=wState(q.write);document.getElementById('wq').textContent=q.write;Q.done=true;Q.res=Q.res||[];Q.res[Q.i]=score/100;if(pass)Q.ok++;
   const cnt={urutan:0,arah:0,bentuk:0};et.forEach(([,ty])=>cnt[ty]++);const es=Object.entries(cnt).filter(([,v])=>v).map(([k,v])=>`${k==='urutan'?'urutan salah':k==='arah'?'arah terbalik':'bentuk/letak'} ${v}×`).join(', ');
   (pass?sfx.ok:sfx.bad)();if(pass)burst(document.getElementById('tzg'));
   fb(pass,`Nilai huruf <b lang="zh">${q.write}</b> (${q.wpy}): <b>${score}</b>${pass?' — lulus ✓':` — belum lulus (perlu ≥ 80 tanpa petunjuk)`}.<br>${es?'Kesalahan: '+es+'. ':'Tanpa kesalahan! '}${hints?`Petunjuk dipakai di ${hints} goresan. `:''}<br>Status: <b>${WLBL[st]}</b>${st==='half'?' — lulus sekali lagi di hari lain untuk dikuasai.':''}`)}})}
/* rapor penguasaan */
function wMastery(){const L=window.WLIST||[];if(!L.length)return '';const byB={};L.forEach(x=>(byB[x[0]]=byB[x[0]]||[]).push(x));
 const weak=L.map(x=>[x,(SAVE.wm||{})[x[1]]]).filter(([,r])=>r&&r.tries&&r.days.length<2).sort((a,b)=>(a[1].last??0)-(b[1].last??0)).slice(0,6);
 const tot=L.filter(x=>wState(x[1])==='ok').length;
 return `<section class="wmast"><div class="wmh"><h3>Penguasaan menulis 写字</h3><span>${tot} dari ${L.length} huruf dikuasai · dikuasai = lulus dikte tanpa petunjuk di 2 hari berbeda</span></div>
 <div class="wleg">${Object.entries(WLBL).map(([k,v])=>`<span class="wc ${k}">${v}</span>`).join('')}</div>
 ${Object.entries(byB).map(([b,xs])=>{const ok=xs.filter(x=>wState(x[1])==='ok').length;return `<div class="wrow"><b>Bab ${b}</b><span class="bar"><i style="width:${Math.round(ok/xs.length*100)}%"></i></span><small>${ok}/${xs.length}</small><div class="wchips">${xs.map(x=>{const r=(SAVE.wm||{})[x[1]],st=wState(x[1]);const tip=r&&r.tries?`${x[1]} (${x[2]}): nilai terakhir ${r.last}, terbaik ${r.best}, lulus ${r.days.length} hari${Object.keys(r.sm).length?', goresan sering salah: '+Object.entries(r.sm).sort((a,c)=>c[1]-a[1]).slice(0,3).map(e=>'ke-'+e[0]).join(', '):''}`:`${x[1]} (${x[2]}): belum dicoba`;return `<span class="wc ${st}" lang="zh" tabindex="0" data-tip="${esc(tip)}">${x[1]}</span>`}).join('')}</div></div>`}).join('')}
 ${weak.length?`<div class="wweak"><b>Paling perlu dilatih:</b> ${weak.map(([x,r])=>{const top=Object.entries(r.sm).sort((a,c)=>c[1]-a[1])[0];const et=Object.entries(r.err).sort((a,c)=>c[1]-a[1])[0];return `<span><b lang="zh">${x[1]}</b> ${r.last}${top?` · goresan ke-${top[0]}`:''}${et&&et[1]?` (${et[0]==='urutan'?'urutan':et[0]==='arah'?'arah':'bentuk'})`:''}</span>`}).join('')}</div>`:''}
 <div class="wprint"><button class="btn" data-sheet="weak" ${weak.length?'':'disabled'}>🖨️ Lembar dikte: huruf yang perlu dilatih</button>${Object.keys(byB).map(b=>`<button class="spk" data-sheet="${b}">🖨️ Bab ${b}</button>`).join('')}</div></section>`}
/* lembar dikte siap cetak */
function sheetItems(key){const L=window.WLIST||[];if(key==='weak'){const w=L.filter(x=>{const r=(SAVE.wm||{})[x[1]];return r&&r.tries&&r.days.length<2});return w.length?w:L.filter(x=>wState(x[1])==='new').slice(0,10)}return L.filter(x=>String(x[0])===String(key))}
function boxSVG(ch,light){return `<svg viewBox="0 0 100 100" class="b"><rect x="1" y="1" width="98" height="98" fill="none" stroke="#C0504D" stroke-width="2"/><path d="M50 1V99M1 50H99M1 1L99 99M99 1L1 99" stroke="#E3A9A6" stroke-width="1" stroke-dasharray="3 3" fill="none"/>${ch?`<text x="50" y="80" text-anchor="middle" font-size="76" fill="${light?'#DDD':'#222'}" font-family="'KaiTi','STKaiti','Noto Serif SC','Noto Sans SC',serif">${ch}</text>`:''}</svg>`}
function sheetHTML(key){const it=sheetItems(key),nm=esc(SAVE.name||'Murid'),title=key==='weak'?'Huruf yang perlu dilatih':'Bab '+key;
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
async function openSheet(key){const html=sheetHTML(key),title=key==='weak'?'huruf-perlu-latihan':'bab-'+key;
 app.innerHTML=`<div class="qbar"><button class="back" data-rapor="1">‹ Rapor</button><b>Lembar dikte 听写</b></div><section class="qcard" style="--c:${SUBJ.mand.c}"><h2>Lembar dikte · ${key==='weak'?'Huruf yang perlu dilatih':'Bab '+key}</h2><p>${sheetItems(key).length} huruf · halaman 1 untuk anak, halaman 2 kunci jawaban &amp; penilaian untuk orang tua.</p>
 <div class="act"><button class="btn" id="sdl">⬇️ Unduh lembar (siap cetak)</button></div><p class="hint" id="smsg">Buka file yang diunduh di browser, lalu pilih Cetak / Print.</p><iframe class="sheetprev" title="Pratinjau lembar dikte" srcdoc="${esc(html)}"></iframe></section>`;
 scrollTo({top:0});document.getElementById('sdl').onclick=async()=>{const msg=document.getElementById('smsg');let dl=null;try{dl=await claude.use('downloads')}catch(_){}
  if(!dl){msg.textContent='Unduhan tidak tersedia di tampilan ini. Buka halaman ini di browser Chrome/Edge atau aplikasi Claude terbaru.';return}
  try{await dl.save({filename:`lembar-dikte-${title}.html`,data:html});msg.textContent='Tersimpan. Buka file itu lalu pilih Cetak.'}catch(e){msg.textContent=e&&e.code==='declined'?'Unduhan dibatalkan.':'Unduhan gagal ('+(e&&e.code||'error')+').'}}}

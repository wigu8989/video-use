
const $=s=>document.querySelector(s);
const CATS=[['kata','Kata 中文','zh'],['kalimat','Kalimat 中文','zh'],['hafalan','孔融让梨','zh'],['eng','English','en']];
let DATA={},cat='kata',LIST=[],idx=0,it=null,DICT=null,TTS=null,dictReady=false,noMic=false,interacted=false,showPy=false;
const SKEY='hector-voice-v1';let SV={best:{},pos:{},cat:'kata'};
try{SV=Object.assign(SV,JSON.parse(localStorage.getItem(SKEY)||'{}'))}catch(_){}
const save=()=>{try{localStorage.setItem(SKEY,JSON.stringify(SV))}catch(_){}};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const LANG=()=>CATS.find(c=>c[0]===cat)[2];

/* ---------- kemampuan ---------- */
const SP={heard:'',live:''};
if(window.claude&&claude.use){
 claude.use('tts').then(t=>{TTS=t||null}).catch(()=>{});
 claude.use('dictation').then(d=>{DICT=d||null;dictReady=true;if(!d)noMic=true;
  if(d){d.onPartial(e=>{SP.live=e.text;liveUI();quiet();if(it&&!it.passed&&pct(SP.heard+' '+SP.live)>=need())DICT.stop().catch(()=>{})});d.onFinal(e=>{SP.heard+=(SP.heard?' ':'')+e.text;SP.live='';liveUI();quiet();if(it&&!it.passed&&pct(SP.heard)>=need())DICT.stop().catch(()=>{})});
   d.onState(e=>{micUI(e.state);if(e.state==='listening')quiet(7000);if(e.state==='idle'){if(['not_granted','unavailable'].includes(e.reason)){noMic=true;rerenderMic()}else if(e.reason==='upstream_error'||e.reason==='rate_limited')msg('Mikrofon sedang bermasalah. Coba ketuk lagi sebentar lagi.','bad');clearTimeout(QT);if((SP.heard+' '+SP.live).trim()){SP.heard=(SP.heard+' '+SP.live).trim();SP.live='';judge()}else if(e.reason==='stopped'||e.reason==='viewer_stopped')msg('Belum terdengar suara. Ketuk 🎤 lalu bicara lebih keras.','bad')}})}
  rerenderMic()}).catch(()=>{dictReady=true;noMic=true;rerenderMic()});
}else{dictReady=true;noMic=true}
let QT=null;function quiet(ms){clearTimeout(QT);QT=setTimeout(()=>{try{DICT&&DICT.active()&&DICT.stop()}catch(_){}},ms||1800)}
async function speak(t,slow){const L=LANG();try{if(TTS){await TTS.speak(t,{language:L,rate:slow?.7:1});return}}catch(e){if(e&&e.code==='busy')return}
 try{const u=new SpeechSynthesisUtterance(t);u.lang=L==='zh'?'zh-CN':'en-US';u.rate=slow?.6:.9;speechSynthesis.cancel();speechSynthesis.speak(u)}catch(_){}}

/* ---------- penilaian ---------- */
const units=()=>LANG()==='zh'?[...it.t.replace(ZP,'')]:it.t.split(/\s+/);
function easyEn(t,h){const T=norm(t),H=norm(h),used=new Set();return T.map(w=>{const tol=w.length>=6?2:w.length>=3?1:0;const k=H.findIndex((x,i)=>!used.has(i)&&(x===w||lev(w,x)<=tol||(w.length>=4&&x.startsWith(w.slice(0,3)))));if(k>=0){used.add(k);return true}return false})}
function sc(h){return LANG()==='zh'?scoreZh(it.t,h):easyEn(it.t,h)}
function pct(h){const s=sc(h);return s.filter(Boolean).length/s.length}
function need(){const n=units().length;return n<=2?.5:.6}

/* ---------- daftar ---------- */
function chips(){$('#chips').innerHTML=CATS.map(([k,l])=>`<button class="chip ${cat===k?'on':''}" data-cat="${k}">${l} · ${(DATA[k]||[]).length}</button>`).join('')}
function prog(){const n=LIST.length,ok=LIST.filter(x=>(SV.best[x.t]||0)>=80).length;$('#prog').innerHTML=`<span>${idx+1}/${n}</span><span class="pbar" title="${ok} dari ${n} sudah lancar"><i style="width:${Math.round(ok/n*100)}%"></i></span><span>✓${ok}</span>`}

/* ---------- kartu ---------- */
function card(dir){clearTimeout(window.__auto);try{DICT&&DICT.active()&&DICT.stop()}catch(_){}SP.heard='';SP.live='';
 it=Object.assign({},LIST[idx],{passed:false,tries:0});const zh=LANG()==='zh',u=units(),best=SV.best[it.t];
 $('#stage').innerHTML=`<section class="card ${dir>0?'in-up':dir<0?'in-down':''}">
  <span class="tag ${best>=80?'ok':''}">${esc(it.g)}${best!=null?` · terbaik ${best}%`:''}</span>
  <ol class="flow"><li id="f1">🔊 Dengar</li><li id="f2">🎤 Ucapkan</li><li id="f3">⭐ Hasil</li></ol>
  <div class="phrase ${zh?'zh':'en'} ${zh&&u.length>9?'long':''}" ${zh?'lang="zh"':'lang="en"'}>${u.map((w,i)=>`<span class="w" id="w${i}">${esc(w)}</span>`).join('')}</div>
  <div class="py" id="py">${showPy&&it.py?esc(it.py):''}</div>
  <div class="mean">${esc(it.m||'')}</div>
  <div id="micwrap"></div>
  <div class="heard" id="heard"></div>
  <div class="res" id="res" aria-live="polite"></div>
  <p class="hintline"><b>⇡</b> geser ke atas untuk berikutnya</p>
  <div class="rail" role="toolbar" aria-label="Aksi">
   <button class="rb" data-act="say"><span class="ic">🔊</span><small>Dengar</small></button>
   <button class="rb" data-act="slow"><span class="ic">🐢</span><small>Pelan</small></button>
   ${it.py?`<button class="rb ${showPy?'on':''}" data-act="py" aria-pressed="${showPy}"><span class="ic">拼</span><small>Pinyin</small></button>`:''}
   <button class="rb" data-act="next"><span class="ic">⏭</span><small>Lewati</small></button>
  </div></section>`;
 rerenderMic();prog();SV.pos[cat]=idx;save();if(interacted)setTimeout(()=>speak(it.t),300)}
function rerenderMic(){const w=$('#micwrap');if(!w||!it)return;
 if(it.passed){w.innerHTML=`<button class="mic pass" aria-label="Benar">✓</button>`;return}
 if(noMic){w.innerHTML=`<div class="nomic"><button class="btn" data-act="self">✓ Mama/Papa: sudah benar</button><p>Mikrofon hanya bisa dipakai di Chrome (komputer atau HP) yang sudah login claude.ai, tidak di aplikasi Claude. Hector mengucapkan dengan lantang, Mama/Papa mendengarkan.</p></div>`;return}
 w.innerHTML=`<button class="mic" id="mic" data-act="mic" aria-label="Ketuk lalu ucapkan">🎤</button><div class="miclbl" id="miclbl">${dictReady?'Ketuk 🎤 lalu ucapkan':'Menyiapkan mikrofon…'}</div>${it.tries>=3?`<button class="link" data-act="self">Sudah benar? Mama/Papa tekan di sini</button>`:''}`}
function flow(n){[1,2,3].forEach(i=>{const e=$('#f'+i);if(e)e.classList.toggle('on',i===n)})}
function micUI(state){const b=$('#mic'),l=$('#miclbl');if(!b)return;const on=state==='listening'||state==='starting';b.classList.toggle('on',on);if(l)l.textContent=state==='starting'?'Sebentar…':state==='listening'?'🗣️ Bicara sekarang!':state==='finishing'?'Memeriksa…':'Ketuk 🎤 lalu ucapkan';l.classList.toggle('live',state==='listening');if(state!=='idle')flow(2)}
function liveUI(){const h=$('#heard');if(!h)return;const t=(SP.heard+' '+SP.live).trim();h.textContent=t?'Kamu bilang: “'+t+'”':'';const s=sc(t);s.forEach((v,i)=>{const e=$('#w'+i);if(e){e.classList.toggle('hit',v);e.classList.remove('miss')}})}
function msg(t,c){const r=$('#res');if(r){r.textContent=t;r.className='res'+(c?' '+c:'')}}
function judge(){if(!it||it.passed)return;const t=SP.heard.trim();const s=sc(t),p=s.filter(Boolean).length/s.length;s.forEach((v,i)=>{const e=$('#w'+i);if(e){e.classList.toggle('hit',v);e.classList.toggle('miss',!v)}});
 it.tries++;const P=Math.round(p*100);
 if(p>=need())pass(P);
 else{flow(3);const miss=units().filter((_,i)=>!s[i]).join(LANG()==='zh'?' ':', ');msg(it.tries>=2?'Coba lagi 💪 Dengarkan 🐢 Pelan dulu, lalu ucapkan pelan-pelan.':`${p>=.3?'Hampir! 😊':'Coba lagi 💪'} Yang merah belum jelas: ${miss}`,'bad');SP.heard='';if(it.tries>=3)rerenderMic()}}
function pass(P){it.passed=true;SV.best[it.t]=Math.max(SV.best[it.t]||0,P);save();prog();rerenderMic();flow(3);msg(P>=90?'⭐⭐⭐ Hebat! Benar!':P>=70?'⭐⭐ Bagus! Benar!':'⭐ Benar! Terus latihan ya.','ok');
 if(idx<LIST.length-1)window.__auto=setTimeout(()=>go(1),1700)}

/* ---------- navigasi ---------- */
function go(dir){const ni=idx+dir;if(ni<0||ni>=LIST.length){const c=$('.card');if(c){c.style.transition='transform .15s';c.style.transform=`translateY(${dir>0?-18:18}px)`;setTimeout(()=>{c.style.transform=''},150)}return}idx=ni;card(dir)}
function setCat(k){cat=k;SV.cat=k;LIST=DATA[k]||[];idx=Math.min(SV.pos[k]||0,Math.max(0,LIST.length-1));chips();card(0)}
let sw=null,suppress=0,wheelT=0;
$('#stage').addEventListener('pointerdown',e=>{interacted=true;sw={x:e.clientX,y:e.clientY,t:Date.now(),id:e.pointerId}});
addEventListener('pointerup',e=>{if(!sw||e.pointerId!==sw.id)return;const dx=e.clientX-sw.x,dy=e.clientY-sw.y,dt=Date.now()-sw.t;sw=null;if(Math.abs(dy)>50&&Math.abs(dy)>Math.abs(dx)*1.2&&dt<900){suppress=Date.now();go(dy<0?1:-1)}});
addEventListener('pointercancel',()=>{sw=null});
addEventListener('wheel',e=>{if(Math.abs(e.deltaY)<30||Date.now()-wheelT<600)return;wheelT=Date.now();go(e.deltaY>0?1:-1)},{passive:true});
addEventListener('keydown',e=>{if(e.key==='ArrowDown'||e.key==='PageDown'){e.preventDefault();go(1)}else if(e.key==='ArrowUp'||e.key==='PageUp'){e.preventDefault();go(-1)}});
document.addEventListener('click',e=>{if(Date.now()-suppress<350)return;interacted=true;const t=e.target;
 const cb=t.closest('[data-cat]');if(cb){setCat(cb.dataset.cat);return}
 const a=t.closest('[data-act]');if(!a||!it)return;const act=a.dataset.act;
 if(act==='mic'){if(!DICT){msg(dictReady?'Mikrofon tidak tersedia.':'Mikrofon belum siap, tunggu sebentar.','bad');return}
  if(DICT.active()){DICT.stop().catch(()=>{});return}
  SP.heard='';SP.live='';msg('');document.querySelectorAll('.w').forEach(w=>w.classList.remove('hit','miss'));$('#heard').textContent='';
  DICT.start({language:LANG()}).catch(err=>{const c=err&&err.code;
   if(c==='not_granted'){noMic=true;rerenderMic()}else if(c==='unavailable'){noMic=true;rerenderMic()}
   else if(c==='dismissed')msg('Ketuk 🎤 lagi dan pilih Izinkan.','bad');else if(c!=='stopped')msg('Mikrofon gagal dibuka ('+c+'). Coba lagi.','bad')});return}
 if(act==='self'){pass(100);return}
 if(act==='say'){flow(1);speak(it.t)}else if(act==='slow'){flow(1);speak(it.t,true)}
 else if(act==='py'){showPy=!showPy;$('#py').textContent=showPy?it.py:'';a.classList.toggle('on',showPy);a.setAttribute('aria-pressed',showPy)}
 else if(act==='next'){clearTimeout(window.__auto);go(1)}});

/* ---------- mulai ---------- */
fetch('vdata.json').then(r=>{if(!r.ok)throw 0;return r.json()}).then(j=>{DATA=j;setCat(DATA[SV.cat]?SV.cat:'kata')})
 .catch(()=>{$('#stage').innerHTML='<div class="empty">Data latihan gagal dimuat. Muat ulang halaman ini.</div>'});

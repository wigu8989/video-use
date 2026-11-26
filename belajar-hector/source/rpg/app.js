/* ================= ENGINE ================= */
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
const SKEY='zeroRPG.v1';let SAVE={};try{SAVE=JSON.parse(localStorage.getItem(SKEY)||'{}')||{}}catch(e){}
const persist=()=>{try{localStorage.setItem(SKEY,JSON.stringify(SAVE))}catch(e){}};
const shuffle=(a,seed=7)=>{a=a.slice();let s=seed;for(let i=a.length-1;i>0;i--){s=(s*9301+49297)%233280;const j=Math.floor(s/233280*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
/* ---- voice ---- */
let TTS=null;const HAS_SS='speechSynthesis' in window&&'SpeechSynthesisUtterance' in window;let VEN=null,VID=null;
function pickV(){try{const v=speechSynthesis.getVoices();VEN=v.find(x=>/en[-_]US/i.test(x.lang))||v.find(x=>/^en/i.test(x.lang))||null;VID=v.find(x=>/^id/i.test(x.lang))||null}catch(e){}}
if(HAS_SS){pickV();try{speechSynthesis.onvoiceschanged=pickV}catch(e){}}
if(window.claude&&claude.use)claude.use('tts').then(t=>{TTS=t||null}).catch(()=>{});
const isID=t=>/\b(yang|adalah|artinya|apa|dan|sila|harus|kita|anak|di|ke|dengan|teman)\b/i.test(t);
async function speak(text,rate=.9){const id=isID(text);try{TTS&&TTS.stop().catch(()=>{})}catch(e){}try{HAS_SS&&speechSynthesis.cancel()}catch(e){}
  if(TTS){try{await TTS.speak(text,{rate,language:id?'id':'en',voice:'glassy'});return}catch(e){if(e&&(e.code==='not_granted'||e.code==='unavailable'))TTS=null;else return}}
  if(!HAS_SS)return;await new Promise(res=>{const u=new SpeechSynthesisUtterance(text);u.lang=id?'id-ID':'en-US';const v=id?VID:VEN;if(v)u.voice=v;u.rate=rate;u.onend=res;u.onerror=res;setTimeout(res,1500+text.length*110);speechSynthesis.speak(u)})}
/* ---- sfx ---- */
let AC=null;const ac=()=>AC=AC||new (window.AudioContext||window.webkitAudioContext)();
function tone(f,d=.12,type='sine',v=.15,when=0,f2){try{const c=ac(),t=c.currentTime+when,o=c.createOscillator(),gn=c.createGain();o.type=type;o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+d);gn.gain.setValueAtTime(v,t);gn.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(gn).connect(c.destination);o.start(t);o.stop(t+d+.02)}catch(e){}}
function noise(d=.15,v=.2,when=0){try{const c=ac(),b=c.createBuffer(1,c.sampleRate*d,c.sampleRate),a=b.getChannelData(0);for(let i=0;i<a.length;i++)a[i]=(Math.random()*2-1)*(1-i/a.length);const s=c.createBufferSource(),g=c.createGain(),f=c.createBiquadFilter();f.type='highpass';f.frequency.value=1200;s.buffer=b;g.gain.value=v;s.connect(f).connect(g).connect(c.destination);s.start(c.currentTime+when)}catch(e){}}
const sfx={slash:()=>{noise(.18,.25);tone(900,.15,'sawtooth',.06,0,200)},hit:()=>tone(160,.2,'square',.12,.05,60),crit:()=>[880,1320].forEach((f,i)=>tone(f,.12,'triangle',.12,.1+i*.07)),
 roar:()=>{tone(120,.4,'sawtooth',.12,0,70);noise(.3,.12)},hurt:()=>tone(300,.25,'square',.08,0,120),heal:()=>[523,659,784].forEach((f,i)=>tone(f,.2,'sine',.14,i*.1)),
 coin:()=>{tone(988,.08,'square',.08);tone(1319,.25,'square',.08,.08)},win:()=>[523,659,784,1046,784,1046].forEach((f,i)=>tone(f,.22,'triangle',.13,i*.13)),pop:()=>tone(660,.08,'triangle',.12),bad:()=>tone(200,.2,'square',.06),magic:()=>[1200,1500,1800,2200].forEach((f,i)=>tone(f,.1,'sine',.08,i*.05))};
/* ---- helpers ---- */
const app=document.getElementById('app');
const SUBJ={math:['⚔','Damage Math','Hitung damage'],eng:['ABC','English','Bahasa Inggris'],listen:['♪','Listening','Mendengarkan'],pkn:['★','PKn','Pendidikan Pancasila']};
const SW=`<svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path d="M15 2 L18 2 L18 5 L8 15 L5 12Z" fill="#E8ECF0" stroke="#555" stroke-width=".8"/><path d="M3 11 L9 17" stroke="#C9A23A" stroke-width="2.4" stroke-linecap="round"/><path d="M5 15 L2 18" stroke="#8B5A2B" stroke-width="2.4" stroke-linecap="round"/></svg>`;
const HT=`<svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true"><path d="M10 17 C1 11 2 3 7 3.5 C8.6 3.7 9.5 5 10 6 C10.5 5 11.4 3.7 13 3.5 C18 3 19 11 10 17Z" fill="#FF4D6A"/></svg>`;
const STAR=on=>`<svg viewBox="-12 -12 24 24" class="star ${on?'on':''}" aria-hidden="true"><path d="M0 -10 L2.9 -3.6 L9.8 -3.1 L4.6 1.5 L6.1 8.3 L0 4.8 L-6.1 8.3 L-4.6 1.5 L-9.8 -3.1 L-2.9 -3.6Z"/></svg>`;
const SPKI=`<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`;
const arena=(d,inner='')=>`<svg viewBox="0 0 640 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${DEFS}${BG(d.bg)}${inner}</svg>`;
const monSVG=(d,s=1)=>d.mon[0]==='bat'?g(0,-60*s,s,MON(d.mon[0],d.mon[1])):g(0,0,s,MON(d.mon[0],d.mon[1]));
const dStars=k=>SAVE[k]?.stars||0,totalStars=()=>DUNGEONS.reduce((a,d)=>a+dStars(d.key),0),gold=()=>DUNGEONS.reduce((a,d)=>a+(SAVE[d.key]?.gold||0),0);
let V={view:'home'};

/* ================= HOME ================= */
function renderHome(){V={view:'home'};
  const d=DUNGEONS[9];
  app.innerHTML=`<header class="hero"><div class="heroart">${arena(d,g(170,286,.82,zero('sword'),'breathe')+`<g transform="translate(470 280)"><g class="idle">${MON('dragon','#E5484D')}</g></g>`)}</div>
   <div class="hero-t"><small>RPG Quest · Kelas 2 SD · 100 soal</small><h1>Zero's <span>RPG Quest</span></h1>
   <p>Kalahkan monster dengan jawaban yang benar! Gabungan <b>hitung damage</b>, <b>bahasa Inggris</b>, dan <b>PKn</b>.</p>
   <div class="hud"><span>★ ${totalStars()}/30</span><span class="gd">${I('coin',22)} ${gold()}</span></div></div></header>
   <div class="legend">${Object.entries(SUBJ).map(([k,v])=>`<span class="sb ${k}"><b>${v[0]}</b>${v[1]} · ${v[2]}</span>`).join('')}</div>
   <section class="dgrid">${DUNGEONS.map((d,i)=>`<button class="dcard" data-go="${i}"><span class="dthumb">${arena(d,`<g transform="translate(320 ${d.mon[0]==='bat'?230:290})"><g class="idle">${MON(d.mon[0],d.mon[1])}</g></g>`)}</span>
    <span class="dinfo"><small>Dungeon ${i+1}</small><b>${d.name}</b><span>${d.idn} · ${d.monName}</span><span class="stars">${[0,1,2].map(j=>STAR(j<dStars(d.key))).join('')}${SAVE[d.key]?.win?'<em class="won">CLEAR</em>':''}</span></span></button>`).join('')}</section>
   <section class="howto"><h2>Cara bermain</h2><ul><li><b>Jawab benar</b> → Zero menyerang. Langsung benar = <b>CRITICAL HIT!</b></li><li><b>Jawab salah</b> → monster balas menyerang. Coba lagi!</li><li>Bingung? Tekan tombol <b>Help</b> untuk petunjuk ajaib (tapi tidak dapat critical).</li><li>Kalahkan monster (HP 0) untuk <b>CLEAR</b> dungeon.</li></ul></section>`}

/* ================= BATTLE ================= */
function startDungeon(i){const d=DUNGEONS[i];V={view:'battle',di:i,qi:0,res:[],mhp:100,hhp:100,gold:0,Q:d.Q.map((q,j)=>prep(q,j*7+i*3+1))};renderBattle();scrollTo({top:0})}
function prep(q,seed){const R={...q,seed};if(q.t==='pick')R.opts=shuffle(q.opts,seed);
  if(q.t==='match'){R.T=shuffle(q.pairs.map(([k,l])=>({id:'t_'+k,label:l,ok:'s_'+k})),seed+2);R.slots=q.pairs.map(([k])=>'s_'+k)}
  if(q.t==='sort'){R.T=shuffle(q.items.map(([l,b],n)=>({id:'t'+n,label:l,ok:'b_'+b})),seed+3);R.slots=q.bins.map(b=>'b_'+b.id)}
  return R}
function renderBattle(){const d=DUNGEONS[V.di];
  app.innerHTML=`<div class="bar"><button class="back" data-home="1">‹ Map</button><div class="bt"><small>Dungeon ${V.di+1}</small><b>${d.name}</b></div><div class="dots" id="dots"></div></div>
   <div class="hprow"><div class="hpbox hero"><b>ZERO</b><div class="hp"><i id="hhp"></i></div><span id="hhpn">100</span></div><span class="vs">VS</span><div class="hpbox mon"><b>${d.monName.toUpperCase()}</b><div class="hp"><i id="mhp"></i></div><span id="mhpn">100</span></div></div>
   <div class="arena" id="arena">${arena(d,`<g transform="translate(160 278)"><g id="hero" class="breathe">${zero('stand')}</g></g><g transform="translate(468 ${d.mon[0]==='bat'?220:282})"><g id="mon"><g class="idle">${MON(d.mon[0],d.mon[1])}</g></g></g><path id="slash" d="M400 90 Q470 150 540 250" stroke="#fff" stroke-width="10" fill="none" stroke-linecap="round" opacity="0"/>`)}
    <div class="fx" id="fx"></div></div>
   <div class="qcard" id="qcard"></div>`;
  updHP(true);renderQ()}
function updHP(instant){const set=(id,v)=>{const el=document.getElementById(id);if(!el)return;if(instant)el.style.transition='none';el.style.width=Math.max(0,v)+'%';el.classList.toggle('low',v<=30);if(instant){el.offsetWidth;el.style.transition=''}};
  set('hhp',V.hhp);set('mhp',V.mhp);const a=document.getElementById('hhpn'),b=document.getElementById('mhpn');if(a)a.textContent=Math.max(0,V.hhp);if(b)b.textContent=Math.max(0,V.mhp)}
function dots(){const el=document.getElementById('dots');if(el)el.innerHTML=V.Q.map((q,j)=>`<i class="${j<V.qi?(V.res[j]?'ok':'no'):j===V.qi?'cur':''}"></i>`).join('')}
function renderQ(){const q=V.Q[V.qi];clearTimeout(V.autoT);clearTimeout(V.idleT);Object.assign(V,{tries:0,hinted:false,done:false,P:{},sel:null,num:''});dots();
  const sj=SUBJ[q.s],boss=V.qi===9;
  let vis='';
  if(q.s==='math'){const h=q.hint;vis=`<div class="eq">${h.k==='add'?`<span class="tag atk">${SW}${h.a}</span><b>+</b><span class="tag atk">${SW}${h.b}</span>`:h.k==='sub'?`<span class="tag hpt">${HT}${h.a} HP</span><b>−</b><span class="tag atk">${SW}${h.b}</span>`:`<span class="tag atk">${SW}${h.x}</span><b>×</b><span class="tag hit">${h.n} hits</span>`}<b>=</b><span class="tag q" id="eqans">?</span></div>`}
  if(q.pic)vis+=`<div class="bigpic">${I(q.pic,110)}</div>`;
  if(q.picN)vis+=`<div class="bigpic row">${[...Array(q.picN[1])].map(()=>I(q.picN[0],56)).join('')}</div>`;
  if(q.monPic)vis+=`<div class="bigpic"><svg viewBox="-160 -230 320 240" width="200" aria-hidden="true">${DEFS}${MON(q.monPic,'#E5484D')}</svg></div>`;
  document.getElementById('qcard').innerHTML=`<div class="qh"><span class="sb ${q.s}"><b>${sj[0]}</b>${sj[1]}</span><span class="qn">${boss?'BOSS · ':''}${V.qi+1}/10</span>
    <button class="help" id="help"><span class="hq">?</span><span class="ht"><b>Help</b><small>Petunjuk ajaib</small></span><span class="htip">Need help?<small>Butuh petunjuk?</small></span></button></div>
   <div class="qt"><h2 class="en">${q.q[0]}</h2>${q.listen?'':`<button class="mini" data-speak="${esc(q.q[0])}">${SPKI}</button>`}</div><p class="tr">${q.q[1]}</p>
   ${q.listen?`<div class="lis"><button class="spk attn" data-speak="${esc(q.say)}" id="lsn">${SPKI} Listen<span class="attn-tip">Tap to listen!<small>Ketuk untuk mendengar</small></span></button><button class="spk slow" data-speak="${esc(q.say)}" data-slow="1">🐢 Slow</button></div>`:''}${vis}<div id="ans"></div><div class="msg" id="msg" aria-live="polite"></div><div id="fb"></div>`;
  document.getElementById('help').onclick=()=>help();
  drawAns();if(q.listen)setTimeout(()=>{if(V.Q&&V.Q[V.qi]===q)speak(q.say,.85)},500);V.idleT=setTimeout(()=>document.getElementById('help')?.classList.add('nudge'),15000)}
function drawAns(){const q=V.Q[V.qi],el=document.getElementById('ans');if(!el)return;
  if(q.t==='pick'&&q.listen){el.innerHTML=`<div class="opts lisopts ${V.done?'reveal':''}">${q.opts.map(o=>`<button class="opt lp" data-pick="${esc(o)}" aria-label="${o}">${I(o,78)}<span class="lbl">${o}</span></button>`).join('')}</div>`;return}
  if(q.t==='pick'){el.innerHTML=`<div class="opts ${q.opts.length===2?'two':''}">${q.opts.map(o=>`<button class="opt ${q.pics?'wp':''}" data-pick="${esc(o)}">${q.pics?I(q.pics[o],64):''}<span>${o}</span></button>`).join('')}</div>`}
  if(q.t==='num'){el.innerHTML=`<div class="numbox"><div class="disp" id="disp">${V.num||'<i>?</i>'}</div><div class="pad">${[1,2,3,4,5,6,7,8,9].map(n=>`<button data-k="${n}">${n}</button>`).join('')}<button data-k="del" class="del" aria-label="hapus">⌫</button><button data-k="0">0</button><button data-k="ok" class="okk" ${V.num?'':'disabled'}>ATTACK!</button></div></div>`}
  if(q.t==='match'||q.t==='sort'){const tok=t=>`<div class="tok ${V.sel===t.id?'sel':''} ${V.m&&t.id in V.m?(V.m[t.id]?'ok':'bad'):''}" data-id="${t.id}" tabindex="0" role="button">${ITEM[t.label]?I(t.label,34):''}<span>${t.label}</span></div>`;
    const inS=s=>q.T.filter(t=>V.P[t.id]===s).map(tok).join('');
    const board=q.t==='match'?`<div class="mboard">${q.pairs.map(([k])=>`<div class="mcol"><div class="mpic">${I(k,64)}</div><div class="slot" data-slot="s_${k}" tabindex="0" role="button">${inS('s_'+k)}</div></div>`).join('')}</div>`
      :`<div class="bins">${q.bins.map(b=>`<div class="bin"><div class="binh"><b>${b.label}</b><small>${b.sub}</small></div><div class="slot binz" data-slot="b_${b.id}" tabindex="0" role="button">${inS('b_'+b.id)}</div></div>`).join('')}</div>`;
    const rest=q.T.filter(t=>!V.P[t.id]),ready=q.T.every(t=>V.P[t.id]);
    el.innerHTML=`${board}${V.done?'':`<p class="trayhint">Drag, or tap twice · Seret, atau ketuk 2x</p><div class="tray" data-slot="tray">${rest.map(tok).join('')||'<span class="hint">All placed! · Semua terpasang</span>'}</div><div class="act"><button class="btn alt" id="rs">Reset</button><button class="btn" id="ck" ${ready?'':'disabled'}>ATTACK! ⚔</button></div>`}`;
    if(!V.done){document.getElementById('ck').onclick=checkDnd;document.getElementById('rs').onclick=()=>{V.P={};V.m={};V.sel=null;drawAns()}}}}
/* ---- answer handling ---- */
function pickAns(b){const q=V.Q[V.qi];if(V.done||b.disabled)return;if(b.dataset.pick===q.ans){b.classList.add('ok');lockOpts();win()}else{b.classList.add('bad');b.disabled=true;lose(()=>{const r=[...document.querySelectorAll('.opt')].find(x=>x.dataset.pick===q.ans);r&&r.classList.add('ok');lockOpts()})}}
const lockOpts=()=>{document.querySelectorAll('.opt').forEach(x=>x.disabled=true);document.querySelector('.lisopts')?.classList.add('reveal')};
function keyNum(k){const q=V.Q[V.qi];if(V.done)return;if(k==='del')V.num=V.num.slice(0,-1);else if(k==='ok'){if(!V.num)return;if(+V.num===q.a){document.getElementById('eqans').textContent=q.a;document.getElementById('eqans').classList.add('right');win()}else{const d=document.getElementById('disp');d.classList.add('bad');V.num='';lose(()=>{const e=document.getElementById('eqans');e.textContent=q.a;e.classList.add('right')});setTimeout(()=>{d&&d.classList.remove('bad')},500)}drawPadState();return}else if(V.num.length<3)V.num=(V.num==='0'?'':V.num)+k;sfx.pop();drawPadState()}
function drawPadState(){const d=document.getElementById('disp'),ok=document.querySelector('.okk');if(d)d.innerHTML=V.num||'<i>?</i>';if(ok)ok.disabled=!V.num||V.done}
function checkDnd(){const q=V.Q[V.qi],m={};let ok=true;q.T.forEach(t=>{m[t.id]=V.P[t.id]===t.ok;if(!m[t.id])ok=false});V.m=m;
  if(ok){V.done=true;drawAns();win();return}drawAns();lose(()=>{q.T.forEach(t=>V.P[t.id]=t.ok);V.m=Object.fromEntries(q.T.map(t=>[t.id,true]));V.done=true;drawAns()},()=>{Object.keys(m).forEach(id=>{if(!m[id])delete V.P[id]});V.m={};drawAns()})}
function placeTok(id,s){const q=V.Q[V.qi];if(V.done)return;V.m={};if(s==='tray')delete V.P[id];else{if(q.t==='match'){const occ=Object.keys(V.P).find(k=>V.P[k]===s);if(occ&&occ!==id){if(V.P[id])V.P[occ]=V.P[id];else delete V.P[occ]}}V.P[id]=s}V.sel=null;sfx.pop();drawAns()}
function tapTok(id){const q=V.Q[V.qi];if(V.sel===id){if(V.P[id]){placeTok(id,'tray');return}if(q.t==='match'){const free=q.slots.find(s=>!Object.values(V.P).includes(s));placeTok(id,free||q.slots[0]);return}setMsg('Now tap a box. · Sekarang ketuk kotaknya.','info');return}
  if(V.sel&&V.P[id]&&q.t==='match'){placeTok(V.sel,V.P[id]);return}V.sel=V.sel===id?null:id;drawAns()}
const setMsg=(t,c='')=>{const m=document.getElementById('msg');if(m){m.className='msg '+c;m.innerHTML=t||''}};
/* ---- battle animation ---- */
function pop(text,cls,side){const fx=document.getElementById('fx');if(!fx)return;const e=document.createElement('div');e.className='pop '+cls+' '+side;e.textContent=text;fx.appendChild(e);setTimeout(()=>e.remove(),1500)}
function flashCls(id,c,ms){const e=document.getElementById(id);if(!e)return;e.classList.remove(c);e.getBoundingClientRect();e.classList.add(c);setTimeout(()=>e.classList.remove(c),ms)}
async function win(){const q=V.Q[V.qi];V.done=true;clearTimeout(V.idleT);const crit=V.tries===0&&!V.hinted,dmg=crit?12:V.tries===0?10:8;V.res[V.qi]=crit;if(crit)V.gold+=10;else V.gold+=5;
  const ar=document.getElementById('arena');
  flashCls('hero','dash',700);await wait(260);sfx.slash();const sl=document.getElementById('slash');if(sl){sl.classList.remove('slashing');sl.getBoundingClientRect();sl.classList.add('slashing')}
  await wait(120);sfx.hit();flashCls('mon','hurt',600);ar&&flashCls('arena',crit?'shake2':'shake1',400);V.mhp-=dmg;updHP();pop('-'+dmg,'dmg','right');if(crit){sfx.crit();pop('CRITICAL!','crit','right')}
  const sj=q.s==='math'?`${q.a}`:q.t==='pick'?q.ans:'';const heard=q.listen?`<p>You heard: <b>"${q.say}"</b></p>`:'';
  document.getElementById('fb').innerHTML=`<div class="fbk good"><b>${crit?'CRITICAL HIT!':'HIT!'} <small>${crit?'Langsung benar! +10 gold':'Benar! +5 gold'}</small></b>${sj?`<p class="ansl">Answer: <span>${sj}</span></p>`:''}${heard}${q.note?`<p>${q.note}</p>`:''}<div class="auto"><i></i><span>${V.qi<9?'Next turn…':'Final strike…'} · otomatis lanjut</span></div><button class="btn sm" id="nx">${V.qi<9?'Next ›':'Finish ›'}</button></div>`;
  document.getElementById('nx').onclick=next;const ms=q.note?3200:2400;document.querySelector('.auto i').style.animationDuration=ms+'ms';const my=V.qi;V.autoT=setTimeout(()=>{if(V.view==='battle'&&V.qi===my)next()},ms);
  if(q.s!=='pkn'&&sj)setTimeout(()=>speak(String(sj)),500)}
async function lose(reveal,retry){const q=V.Q[V.qi];V.tries++;sfx.bad();
  flashCls('mon','lunge',700);await wait(300);sfx.roar();flashCls('hero','hurt',600);flashCls('arena','redflash',500);V.hhp-=10;updHP();pop('-10','hurtn','left');
  if(V.hhp<=0){await wait(600);V.hhp=60;sfx.heal();updHP();pop('+60 HP','heal','left');setMsg('Bobo memberi potion! HP Zero pulih. 🧪','info')}
  if(V.tries<2){setMsg('<b>Try again!</b> Coba lagi. Tekan <b>Help</b> kalau bingung.','warn');document.getElementById('help')?.classList.add('nudge');if(retry)setTimeout(retry,900);return}
  V.done=true;V.res[V.qi]=false;reveal&&reveal();setMsg('');
  document.getElementById('fb').innerHTML=`<div class="fbk show"><b>The monster blocked it! <small>Lihat jawabannya</small></b><p class="ansl">Answer: <span>${q.s==='math'?q.a:q.t==='pick'?q.ans:'(lihat di atas)'}</span></p>${q.note?`<p>${q.note}</p>`:''}${q.s==='math'?`<p>${mathExplain(q.hint)}</p>`:''}<button class="btn sm" id="nx">${V.qi<9?'Next ›':'Finish ›'}</button></div>`;
  document.getElementById('nx').onclick=next;V.mhp-=4;updHP();pop('-4','dmg','right')}
const mathExplain=h=>h.k==='add'?`${h.a} + ${h.b} = <b>${h.a+h.b}</b>. Hitung ${h.a}, lalu maju ${h.b} langkah.`:h.k==='sub'?`${h.a} − ${h.b} = <b>${h.a-h.b}</b>. HP ${h.a} dikurangi damage ${h.b}.`:`${h.n} × ${h.x} = <b>${h.n*h.x}</b>. Hitung loncat ${h.x}: ${[...Array(h.n)].map((_,i)=>(i+1)*h.x).join(', ')}.`;
function next(){clearTimeout(V.autoT);if(V.qi<9){V.qi++;renderQ();document.getElementById('qcard').scrollIntoView({block:'nearest',behavior:'smooth'})}else victory()}
/* ---- HELP: petunjuk ajaib ---- */
function help(){const q=V.Q[V.qi];if(V.done)return;V.hinted=true;document.getElementById('help')?.classList.remove('nudge');sfx.magic();
  if(q.s==='math'){mathHint(q);return}
  if(q.t==='pick'){const wrong=[...document.querySelectorAll('.opt')].filter(o=>o.dataset.pick!==q.ans&&!o.disabled);if(wrong.length>1||(wrong.length===1&&q.opts.length>2)){const w=wrong[0];w.classList.add('poof');setTimeout(()=>{w.disabled=true;w.classList.add('gone')},600);setMsg('✨ Magic! Satu jawaban salah menghilang.','info')}else setMsg('✨ Tinggal satu pilihan lagi. Kamu pasti bisa!','info');if(q.listen)speak(q.say,.6);else if(q.s==='eng')speak(q.q[0]);return}
  const t=q.T.find(t=>V.P[t.id]!==t.ok);if(!t)return;V.P[t.id]=t.ok;V.sel=null;drawAns();const el=document.querySelector(`.tok[data-id="${t.id}"]`);el&&el.classList.add('magic');setMsg('✨ Magic! Satu jawaban dipasang untukmu.','info')}
function mathHint(q){const h=q.hint,ov=document.createElement('div');ov.className='dm';
  ov.innerHTML=`<div class="dm-box"><div class="dm-head"><b>✨ Magic Hint</b><button class="dm-x" aria-label="Tutup">×</button></div><p class="hintq">${h.k==='add'?`⚔ ${h.a} + ⚔ ${h.b}`:h.k==='sub'?`♥ ${h.a} − ⚔ ${h.b}`:`⚔ ${h.x} × ${h.n} hits`}</p><div class="blocks" id="blk"></div><div class="count" id="cnt"></div><p class="hcap" id="hcap"></p><button class="btn" id="hok">Got it! · Mengerti</button></div>`;
  document.body.appendChild(ov);const close=()=>{ov.remove();RUNH++};ov.querySelector('.dm-x').onclick=close;ov.querySelector('#hok').onclick=close;
  const my=++RUNH,alive=()=>my===RUNH,blk=ov.querySelector('#blk'),cnt=ov.querySelector('#cnt'),cap=ov.querySelector('#hcap');
  const rod=c=>`<div class="rod ${c}">${'<i></i>'.repeat(10)}</div>`,cube=c=>`<i class="cube ${c}"></i>`;
  const addBlocks=(n,c)=>{let s='';for(let i=0;i<Math.floor(n/10);i++)s+=rod(c);for(let i=0;i<n%10;i++)s+=cube(c);return s};
  (async()=>{
   if(h.k==='add'){blk.innerHTML=`<div class="grp" id="ga">${addBlocks(h.a,'a')}</div><div class="grp" id="gb"></div>`;cnt.textContent=h.a;cap.innerHTML=`Mulai dari <b>${h.a}</b>. Lalu tambahkan ${h.b}.`;await wait(1100);
     let v=h.a;const gb=ov.querySelector('#gb');for(let i=0;i<Math.floor(h.b/10);i++){if(!alive())return;gb.insertAdjacentHTML('beforeend',rod('b'));v+=10;cnt.textContent=v;sfx.pop();await wait(650)}
     for(let i=0;i<h.b%10;i++){if(!alive())return;gb.insertAdjacentHTML('beforeend',cube('b'));v++;cnt.textContent=v;sfx.pop();await wait(380)}
     cap.innerHTML=`Puluhan dulu, lalu satuan. Hitung semua blok: berapa jumlahnya?`}
   else if(h.k==='sub'){blk.innerHTML=`<div class="grp" id="ga">${addBlocks(h.a,'a')}</div>`;cnt.textContent=h.a;cap.innerHTML=`Monster punya <b>${h.a}</b> HP. Pedang Zero menghapus ${h.b}.`;await wait(1100);
     let v=h.a,rem=h.b;const ga=ov.querySelector('#ga');
     while(rem>=10&&ga.querySelector('.rod:not(.cut)')){if(!alive())return;const r=[...ga.querySelectorAll('.rod:not(.cut)')].pop();r.classList.add('cut');v-=10;rem-=10;cnt.textContent=v;sfx.slash();await wait(650)}
     while(rem>0){if(!alive())return;let c=[...ga.querySelectorAll('.cube:not(.cut)')].pop();if(!c){const r=[...ga.querySelectorAll('.rod:not(.cut)')].pop();r.outerHTML=addBlocks(10,'a');c=[...ga.querySelectorAll('.cube:not(.cut)')].pop();await wait(300)}c.classList.add('cut');v--;rem--;cnt.textContent=v;sfx.pop();await wait(380)}
     cap.innerHTML=`Hitung blok yang masih utuh: itulah sisa HP!`}
   else{blk.innerHTML='';cnt.textContent='0';cap.innerHTML=`${h.n} kali serangan, setiap serangan ${h.x} damage. Hitung loncat ${h.x}!`;await wait(900);let v=0;
     for(let i=0;i<h.n;i++){if(!alive())return;blk.insertAdjacentHTML('beforeend',`<div class="grp hitg"><small>hit ${i+1}</small>${addBlocks(h.x,i%2?'b':'a')}</div>`);v+=h.x;cnt.textContent=v;sfx.slash();await wait(800)}
     cap.innerHTML=`Loncat ${h.x}: ${[...Array(h.n)].map((_,i)=>(i+1)*h.x).join(', ')}.`}
  })()}
let RUNH=0;
/* ---- victory ---- */
function victory(){const d=DUNGEONS[V.di],n=V.res.filter(Boolean).length,wonB=V.mhp<=0,stars=wonB?(n>=9?3:n>=6?2:1):(n>=6?1:0);
  const prev=SAVE[d.key]||{};SAVE[d.key]={stars:Math.max(prev.stars||0,stars),gold:Math.max(prev.gold||0,V.gold),win:prev.win||wonB};persist();
  const mon=document.getElementById('mon');if(wonB&&mon)mon.classList.add('defeat');sfx[wonB?'win':'bad']();
  setTimeout(()=>{V.view='end';app.innerHTML=`<div class="endc">${arena(d,g(320,288,.86,zero(wonB?'wave':'stand'),'breathe')+(wonB?[...Array(14)].map((_,i)=>`<g transform="translate(${80+i*38} ${60+(i%3)*30})"><g class="coinfall" style="animation-delay:${i*.12}s">${ITEM.coin}</g></g>`).join(''):g(520,282,.7,MON(d.mon[0],d.mon[1]),'runaway')))}
   <div class="endt"><h2>${wonB?'VICTORY!':'The monster ran away!'}</h2><p>${wonB?`${d.monName} kalah! Dungeon ${V.di+1} CLEAR.`:'Monster kabur dengan sisa HP. Coba lagi untuk menang!'}</p>
   <div class="bigstars">${[0,1,2].map(j=>STAR(j<stars)).join('')}</div><p>Critical hit: <b>${n}/10</b> · Gold: <b>${V.gold}</b> ${I('coin',20)}</p>
   <div class="act">${V.di<9&&wonB?`<button class="btn" data-go="${V.di+1}">Next dungeon ›</button>`:''}<button class="btn alt" data-go="${V.di}">Battle again</button><button class="btn alt" data-home="1">Map</button></div></div></div>`;scrollTo({top:0,behavior:'smooth'})},wonB?1400:600)}
/* ---- events ---- */
let D=null;
document.addEventListener('click',e=>{const t=e.target;
  const sp=t.closest('[data-speak]');if(sp){document.querySelectorAll('.spk.attn').forEach(x=>x.classList.remove('attn'));sp.classList.add('playing');speak(sp.dataset.speak,sp.dataset.slow?.6:.9).then(()=>sp.classList.remove('playing'));return}
  const hm=t.closest('[data-home]');if(hm){clearTimeout(V.autoT);clearTimeout(V.idleT);renderHome();scrollTo({top:0});return}
  const go=t.closest('[data-go]');if(go){startDungeon(+go.dataset.go);return}
  const pk=t.closest('[data-pick]');if(pk){pickAns(pk);return}
  const k=t.closest('[data-k]');if(k&&!k.disabled){keyNum(k.dataset.k);return}
  const sl=t.closest('[data-slot]');if(sl&&V.sel&&!t.closest('.tok'))placeTok(V.sel,sl.dataset.slot)});
document.addEventListener('keydown',e=>{if(V.view!=='battle')return;const q=V.Q[V.qi];if(q&&q.t==='num'&&!V.done){if(/^[0-9]$/.test(e.key))keyNum(e.key);else if(e.key==='Backspace')keyNum('del');else if(e.key==='Enter')keyNum('ok')}});
document.addEventListener('pointerdown',e=>{const t=e.target.closest('.tok');if(!t||V.done||V.view!=='battle')return;e.preventDefault();D={id:t.dataset.id,x:e.clientX,y:e.clientY,el:t,moved:false,th:e.pointerType==='mouse'?6:14};try{t.setPointerCapture(e.pointerId)}catch(_){}});
window.addEventListener('pointermove',e=>{if(!D)return;if(!D.moved&&Math.hypot(e.clientX-D.x,e.clientY-D.y)>D.th){D.moved=true;const r=D.el.getBoundingClientRect();D.g=D.el.cloneNode(true);D.g.className='tok ghost';D.g.style.width=r.width+'px';D.ox=D.x-r.left;D.oy=D.y-r.top;document.body.appendChild(D.g);D.el.style.opacity=.3}
  if(D.moved){D.g.style.transform=`translate(${e.clientX-D.ox}px,${e.clientY-D.oy}px) rotate(-3deg) scale(1.06)`}});
window.addEventListener('pointerup',e=>{if(!D)return;const d=D;D=null;if(d.moved){d.g.style.display='none';const el=document.elementFromPoint(e.clientX,e.clientY);d.g.remove();const sl=el&&el.closest('[data-slot]'),cur=V.P[d.id]||'tray',dist=Math.hypot(e.clientX-d.x,e.clientY-d.y);if((!sl||sl.dataset.slot===cur)&&dist<45)tapTok(d.id);else if(sl)placeTok(d.id,sl.dataset.slot);else drawAns()}else tapTok(d.id)});
window.addEventListener('pointercancel',()=>{if(D){const d=D;D=null;d.g&&d.g.remove();d.el.style.opacity='';if(!d.moved)tapTok(d.id);else drawAns()}});
renderHome();
window.__R={DUNGEONS,V:()=>V};

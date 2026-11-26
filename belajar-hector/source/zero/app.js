/* ================= APP ================= */
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const SKEY='zeroPlanet.v1';let SAVE={};try{SAVE=JSON.parse(localStorage.getItem(SKEY)||'{}')||{}}catch(e){}
const persist=()=>{try{localStorage.setItem(SKEY,JSON.stringify(SAVE))}catch(e){}};
const WHO={n:['Narrator','Narator','#B9A8FF'],z:['Zero','Zero','#FF5C74'],b:['Bobo','Bobo','#6BE38A'],r:['Grumble','Grumble','#C9D2DE']};
const VOICE={n:'buttery',z:'glassy',b:'airy',r:'rounded'};
let showID=SAVE.showID!==false,autoRead=SAVE.autoRead!==false;

/* ---- audio: Claude voice (tts) with browser fallback ---- */
let TTS=null,DICT=null,lineCb=null,ttsState='idle';
const HAS_SS='speechSynthesis' in window&&'SpeechSynthesisUtterance' in window;let SSV=null;
function pickV(){try{const v=speechSynthesis.getVoices();SSV=v.find(x=>/en[-_]US/i.test(x.lang)&&/Google|Samantha|Aria|Jenny|Natural/i.test(x.name))||v.find(x=>/^en/i.test(x.lang))||null}catch(e){}}
if(HAS_SS){pickV();try{speechSynthesis.onvoiceschanged=pickV}catch(e){}}
function ssay(text,who='n',rate=.85){return new Promise(res=>{if(!HAS_SS){res();return}try{const u=new SpeechSynthesisUtterance(text);u.lang='en-US';if(SSV)u.voice=SSV;u.rate=rate;u.pitch={n:1,z:.9,b:1.45,r:.6}[who]||1;let d=false;const f=()=>{if(!d){d=true;res()}};u.onend=f;u.onerror=f;setTimeout(f,1500+text.length*120/rate);speechSynthesis.speak(u)}catch(e){res()}})}
const cl=window.claude;
if(cl&&cl.use){
  cl.use('tts').then(t=>{if(!t)return;TTS=t;try{t.onLine(({id})=>{lineCb&&lineCb(+id)})}catch(e){}try{t.onState(({state})=>{ttsState=state;document.body.classList.toggle('speaking',state==='speaking'||state==='starting')})}catch(e){}}).catch(()=>{});
  cl.use('dictation').then(d=>{DICT=d||null;if(d){d.onPartial(e=>SP.partial(e.text));d.onFinal(e=>SP.final(e.text));d.onState(e=>SP.state(e))}SP.refresh()}).catch(()=>{});
}
function stopAudio(){lineCb=null;try{TTS&&TTS.stop().catch(()=>{})}catch(e){}try{HAS_SS&&speechSynthesis.cancel()}catch(e){}}
async function speakLines(lines,onLine,rate=.9){stopAudio();lineCb=onLine||null;
  if(TTS){try{await TTS.speak(lines.map((l,i)=>({text:l.text,voice:VOICE[l.who]||'buttery',id:String(i)})),{rate,language:'en'});lineCb=null;return 'ok'}
    catch(e){if(e&&(e.code==='not_granted'||e.code==='unavailable')){TTS=null}else{lineCb=null;return e&&e.code}}}
  for(let i=0;i<lines.length;i++){onLine&&onLine(i);await ssay(lines[i].text,lines[i].who,rate*.92)}lineCb=null;return 'ok'}
const sayOne=(text,who='n',rate=.85)=>speakLines([{text,who}],null,rate);

/* ---- sfx ---- */
let AC=null;function tone(f,d=.12,type='sine',v=.15,when=0){try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();const t=AC.currentTime+when,o=AC.createOscillator(),gn=AC.createGain();o.type=type;o.frequency.setValueAtTime(f,t);gn.gain.setValueAtTime(v,t);gn.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(gn).connect(AC.destination);o.start(t);o.stop(t+d+.02)}catch(e){}}
const sfx={ok:()=>[523,659,784,1046].forEach((f,i)=>tone(f,.18,'triangle',.14,i*.08)),bad:()=>{tone(220,.18,'square',.06);tone(170,.22,'square',.05,.12)},whoosh:()=>{for(let i=0;i<8;i++)tone(300+i*80,.05,'sawtooth',.03,i*.02)},fan:()=>[523,659,784,659,784,1046].forEach((f,i)=>tone(f,.22,'triangle',.13,i*.12))};

/* ---- helpers ---- */
const app=document.getElementById('app');
const SVG=(inner,cls='')=>`<svg viewBox="0 0 640 400" class="${cls}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${DEFS}${inner}${vign}</svg>`;
const STAR=on=>`<svg viewBox="-12 -12 24 24" class="star ${on?'on':''}" aria-hidden="true"><path d="M0 -10 L2.9 -3.6 L9.8 -3.1 L4.6 1.5 L6.1 8.3 L0 4.8 L-6.1 8.3 L-4.6 1.5 L-9.8 -3.1 L-2.9 -3.6Z"/></svg>`;
const SPKI=`<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`;
const MICI=`<svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4M8 21h8" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`;
const words=s=>s.replace(/\*([^*]+)\*/g,'$1');
function richText(s){return s.split(/(\*[^*]+\*)/).map(p=>p.startsWith('*')?`<button class="vw" data-word="${p.slice(1,-1)}">${p.slice(1,-1)}</button>`:p).join('')}
function chStars(i){return SAVE['c'+i]?.stars||0}
let V={view:'home'};

/* ---- HOME ---- */
function heroArt(){return sky('dusk')+stars(80,9,230)+moons([470,96,46],[560,60,16])+hills('#3A1A66','#2A1450','#1F0E3E')+plant(560,392,1.1)+plant(60,392,1.2)+crashFX(505,352,.74,.4)+g(120,392,1.05,bobo('wow'),'bounce')+g(290,392,1.2,zero('stand'),'breathe')+mist()+flashRect(.4)}
function renderHome(){stopAudio();V={view:'home'};
  const done=CH.filter((_,i)=>SAVE['c'+i]).length;
  app.innerHTML=`<header class="hero" id="heroBox" title="Tap to replay">${SVG(heroArt(),'cam-impact')}<div class="hero-t"><small>An English story adventure · Cerita petualangan bahasa Inggris</small><h1>Zero and the<br><span>Monster Planet</span></h1><p>Kelas 2 SD · 5 chapters · 20 pictures · speaking practice</p>
    <button class="btn big" data-open="${Math.min(done,4)}">${done?'Continue':'Start the story'} ›</button></div></header>
   <section class="intro"><p class="en">Zero is a space hero. His spaceship crashes on Planet Mora. The planet is full of monsters!</p><p class="tr">Zero adalah pahlawan luar angkasa. Pesawatnya jatuh di Planet Mora. Planet itu penuh monster!</p></section>
   <section class="chapters">${CH.map((c,i)=>`<button class="chc" data-open="${i}"><span class="thumb">${SVG(c.panels[0].art())}</span><span class="chi"><small>Chapter ${i+1}</small><b>${c.title}</b><span>${c.idn}</span><span class="stars">${[0,1,2].map(j=>STAR(j<chStars(i))).join('')}</span></span></button>`).join('')}</section>
   <section class="howbox"><h2>How it works · Cara bermain</h2>
    <ol><li><b>Read & listen.</b> Ketuk ▶ untuk mendengar cerita. Ketuk kata berwarna untuk artinya.</li><li><b>Answer.</b> 3 pertanyaan tentang cerita.</li><li><b>Speak!</b> Ucapkan kalimat ke mikrofon. Kata yang benar menyala hijau.</li></ol>
    <p class="micnote" id="micnote"></p></section>`;
  SP.refresh();const hb=document.getElementById('heroBox');const replay=()=>{hb.querySelector('svg').outerHTML=SVG(heroArt(),'cam-impact');hb.querySelector('svg').addEventListener('click',replay)};if(hb)hb.querySelector('svg').addEventListener('click',replay)}

/* ---- READER ---- */
function openChapter(i){stopAudio();V={view:'read',ci:i,pi:0};renderPanel(true)}
function renderPanel(first){const c=CH[V.ci],p=c.panels[V.pi];stopAudio();
  app.innerHTML=`<div class="bar"><button class="back" data-go="home">‹ Home</button><div class="bt"><small>Chapter ${V.ci+1} · ${c.idn}</small><b>${c.title}</b></div>
   <label class="tg"><input type="checkbox" id="tgID" ${showID?'checked':''}> Terjemahan</label></div>
   <div class="frame">${SVG(p.art(),'cam-'+p.cam)}<div class="pno">${V.pi+1} / ${c.panels.length}</div></div>
   <div class="caption ${showID?'':'noid'}" id="cap">${p.text.map((t,k)=>`<div class="ln" data-k="${k}"><span class="who" style="--w:${WHO[t[2]][2]}">${WHO[t[2]][0]}</span><p class="en">${t[2]==='n'?'':'“'}${richText(t[0])}${t[2]==='n'?'':'”'}</p><p class="tr">${t[1]}</p></div>`).join('')}
    <div class="gloss" id="gloss" hidden></div></div>
   <div class="ctrl"><button class="btn alt" id="prev" ${V.pi===0?'disabled':''}>‹ Back</button><button class="btn play" id="play">${SPKI} Read</button><button class="btn" id="next">${V.pi<c.panels.length-1?'Next ›':'Quiz ›'}</button></div>
   <div class="dots">${c.panels.map((_,k)=>`<i class="${k===V.pi?'on':k<V.pi?'done':''}"></i>`).join('')}<span class="ar"><label><input type="checkbox" id="tgAR" ${autoRead?'checked':''}> Auto read</label></span></div>`;
  document.getElementById('play').onclick=readPanel;
  document.getElementById('prev').onclick=()=>{V.pi--;renderPanel()};
  document.getElementById('next').onclick=()=>{if(V.pi<c.panels.length-1){V.pi++;sfx.whoosh();renderPanel()}else startQuiz()};
  document.getElementById('tgID').onchange=e=>{showID=e.target.checked;SAVE.showID=showID;persist();document.getElementById('cap').classList.toggle('noid',!showID)};
  document.getElementById('tgAR').onchange=e=>{autoRead=e.target.checked;SAVE.autoRead=autoRead;persist()};
  if(autoRead&&!first)setTimeout(()=>{if(V.view==='read')readPanel()},700)}
async function readPanel(){const p=CH[V.ci].panels[V.pi],my=V.pi;const lines=p.text.map(t=>({text:words(t[0]),who:t[2]}));
  const mark=k=>{if(V.view!=='read'||V.pi!==my)return;app.querySelectorAll('.ln').forEach(l=>l.classList.toggle('now',+l.dataset.k===k))};
  mark(0);await speakLines(lines,mark);mark(-1)}

/* ---- QUIZ ---- */
function startQuiz(){stopAudio();V={view:'quiz',ci:V.ci,qi:0,res:[],tries:0};renderQuiz()}
function stepsBar(active){const c=CH[V.ci];return `<div class="bar"><button class="back" data-go="home">‹ Home</button><div class="bt"><small>Chapter ${V.ci+1}</small><b>${c.title}</b></div></div>
  <div class="steps"><span>1 Story ✓</span><span class="${active===1?'on':''}">2 Questions</span><span class="${active===2?'on':''}">3 Speaking</span></div>`}
function renderQuiz(){const q=CH[V.ci].quiz[V.qi];V.tries=0;
  app.innerHTML=`${stepsBar(1)}<div class="card"><div class="qh"><span class="qno">Question ${V.qi+1} / 3</span><button class="mini" data-speak="${q.q[0].replace(/"/g,'&quot;')}">${SPKI} Listen</button></div>
   <h2 class="q en">${q.q[0]}</h2><p class="tr">${q.q[1]}</p>${q.pic?`<div class="qpic"><svg viewBox="0 0 200 140" aria-hidden="true">${DEFS}<rect width="200" height="140" rx="16" fill="#241446"/>${q.pic()}</svg></div>`:''}
   <div class="opts">${q.opts.map(o=>`<button class="opt" data-pick="${o}">${o}</button>`).join('')}</div><div class="msg" id="msg"></div><div id="fb"></div></div>`;
  setTimeout(()=>sayOne(q.q[0]),300)}
function pick(b){const q=CH[V.ci].quiz[V.qi];if(b.dataset.pick===q.ans){b.classList.add('ok');sfx.ok();app.querySelectorAll('.opt').forEach(x=>x.disabled=true);qDone(V.tries===0)}
  else{b.classList.add('bad');b.disabled=true;sfx.bad();V.tries++;if(V.tries>=2){app.querySelector(`.opt[data-pick="${q.ans}"]`).classList.add('ok');app.querySelectorAll('.opt').forEach(x=>x.disabled=true);qDone(false)}else document.getElementById('msg').innerHTML='<b>Try again!</b> · Coba lagi, ingat ceritanya.'}}
function qDone(first){const q=CH[V.ci].quiz[V.qi];V.res[V.qi]=first;document.getElementById('msg').innerHTML='';
  document.getElementById('fb').innerHTML=`<div class="fbk ${first?'good':'show'}"><b>${first?['Great job!','Awesome!','Super!'][V.qi]:'Look at the answer.'}</b><p>${q.note}</p><button class="btn" id="nx">${V.qi<2?'Next ›':'Speaking ›'}</button></div>`;
  document.getElementById('nx').onclick=()=>{if(V.qi<2){V.qi++;renderQuiz()}else startSpeak()};sayOne(q.ans)}

/* ---- SPEAKING ---- */
const EQ={two:['to','too','2'],four:['for','4'],five:['5'],three:['3'],one:['1','won'],i:['eye','aye'],bobo:['bob','bubu','bo','boba','bobbo','bobo'],zero:['0','xero','sero'],hello:['hallo','halo','hullo'],you:['u','ya'],grumble:['grumbo'],am:['m'],goodbye:['good-bye','bye']};
const norm=s=>s.toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9\s-]/g,' ').replace(/-/g,' ').split(/\s+/).filter(Boolean);
function lev(a,b){const d=[...Array(b.length+1)].map((_,i)=>[i]);for(let j=1;j<=a.length;j++)d[0][j]=j;for(let i=1;i<=b.length;i++)for(let j=1;j<=a.length;j++)d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(b[i-1]===a[j-1]?0:1));return d[b.length][a.length]}
function wordOk(t,h){if(t===h)return true;if((EQ[t]||[]).includes(h))return true;return t.length>=4&&lev(t,h)<=1}
function scoreSpeech(target,heard){const T=norm(target),H=norm(heard),used=new Set();return T.map(t=>{const k=H.findIndex((h,i)=>!used.has(i)&&wordOk(t,h));if(k>=0){used.add(k);return true}return false})}
const SP={heard:'',live:'',active:false,
  refresh(){const n=document.getElementById('micnote');if(n)n.innerHTML=DICT?'<b>Mikrofon siap.</b> Saat pertama kali menekan tombol mikrofon, browser akan meminta izin.':'Speaking dengan mikrofon bisa dipakai di <b>Chrome atau Edge di laptop/PC</b> dan aplikasi Claude desktop. Di perangkat lain, anak tetap bisa berlatih dengan mengucapkan kalimat lalu menilai sendiri.';
    if(V.view==='speak')renderSpeakBody()},
  partial(t){this.live=t;if(V.view==='speak')updHeard()},
  final(t){this.heard=(this.heard+t);this.live='';if(V.view==='speak'){updHeard();const sc=scoreSpeech(curSpeak().say,this.heard);if(sc.every(Boolean)&&DICT)DICT.stop().catch(()=>{})}},
  state(e){this.active=e.state!=='idle';if(V.view!=='speak')return;const b=document.getElementById('mic');if(b){b.classList.toggle('on',this.active);b.querySelector('span').textContent=this.active?(e.state==='listening'?'Listening… tap to stop':'Starting…'):'Tap and speak'}
    if(e.state==='idle'){if(e.reason==='not_granted'){V.micDenied=true;setSmsg('Mikrofon tidak diizinkan. Kamu tetap bisa latihan: ucapkan kalimatnya, lalu ketuk "I said it!".')}else if(e.reason==='unavailable'){V.micDenied=true;setSmsg('Pengenal suara bahasa Inggris belum tersedia di sini.')}else if(e.reason==='rate_limited'){setSmsg('Tunggu sebentar, lalu coba lagi.')}
      if(this.heard.trim())judge()}}};
const curSpeak=()=>CH[V.ci].speak[V.si];
function setSmsg(t){const m=document.getElementById('smsg');if(m)m.innerHTML=t}
function startSpeak(){stopAudio();V={view:'speak',ci:V.ci,res:V.res,si:0,sp:[]};renderSpeak()}
function renderSpeak(){SP.heard='';SP.live='';const s=curSpeak();
  app.innerHTML=`${stepsBar(2)}<div class="card speak"><div class="qh"><span class="qno">Speaking ${V.si+1} / 2</span></div>
   <p class="lead"><b class="en">Say it!</b> <span class="tr">Dengarkan dulu, lalu ucapkan kalimat ini.</span></p>
   <div class="target" id="target">${norm(s.say).map((w,i)=>`<span class="tw" data-i="${i}">${s.say.split(/\s+/)[i]||w}</span>`).join(' ')}</div><p class="tr center">${s.id}</p>
   <div class="row"><button class="btn alt" data-speak="${s.say}">${SPKI} Listen</button><button class="btn alt" data-speak="${s.say}" data-slow="1">🐢 Slow</button></div>
   <div id="spbody"></div><div class="smsg" id="smsg"></div><div id="sres"></div></div>`;
  renderSpeakBody();setTimeout(()=>sayOne(s.say,'z',.85),300)}
function renderSpeakBody(){const b=document.getElementById('spbody');if(!b)return;
  if(DICT&&!V.micDenied){b.innerHTML=`<button class="micbtn" id="mic">${MICI}<span>Tap and speak</span></button><p class="heard" id="heard" aria-live="polite"></p>`;
    document.getElementById('mic').onclick=()=>{if(SP.active){DICT.stop().catch(()=>{});return}stopAudio();SP.heard='';SP.live='';updHeard();document.getElementById('sres').innerHTML='';
      const pr=DICT.start({language:'en'});pr.catch(e=>{const c=e&&e.code;if(c==='not_granted'||c==='unavailable'){V.micDenied=true;renderSpeakBody();setSmsg(c==='not_granted'?'Mikrofon tidak diizinkan. Latihan tetap bisa: ucapkan kalimatnya, lalu ketuk "I said it!".':'Pengenal suara bahasa Inggris belum tersedia di perangkat ini. Latihan tetap bisa dengan menilai sendiri.')}else if(c==='dismissed'){setSmsg('Ketuk tombol mikrofon lagi dan pilih <b>Allow</b>.')}else if(c&&c!=='stopped'){setSmsg('Mikrofon sedang bermasalah. Coba lagi sebentar lagi.')}})}}
  else{b.innerHTML=`<div class="self"><p>Ucapkan kalimat di atas dengan suara keras, 3 kali. Lalu ketuk:</p><button class="btn" id="said">I said it! ✓</button></div>`;document.getElementById('said').onclick=()=>{V.sp[V.si]=1;showSpeakResult(null)}}}
function updHeard(){const h=document.getElementById('heard');if(!h)return;const txt=(SP.heard+' '+SP.live).trim();h.textContent=txt?'You said: “'+txt+'”':'';
  const sc=scoreSpeech(curSpeak().say,txt);app.querySelectorAll('#target .tw').forEach((el,i)=>el.classList.toggle('hit',!!sc[i]))}
function judge(){const s=curSpeak(),sc=scoreSpeech(s.say,SP.heard),r=sc.filter(Boolean).length/sc.length;V.sp[V.si]=Math.max(V.sp[V.si]||0,r);
  app.querySelectorAll('#target .tw').forEach((el,i)=>{el.classList.toggle('hit',sc[i]);el.classList.toggle('miss',!sc[i])});showSpeakResult(r,sc)}
function showSpeakResult(r,sc){const s=curSpeak(),res=document.getElementById('sres');if(!res)return;
  const great=r===null||r>=.99,ok=r!==null&&r>=.6;if(great||ok)sfx.ok();else sfx.bad();
  const missed=sc?norm(s.say).filter((w,i)=>!sc[i]):[];
  res.innerHTML=`<div class="fbk ${great?'good':ok?'good':'show'}"><b>${r===null?'Well done!':great?'Perfect speaking!':ok?'Good job!':'Let\'s try again!'}</b>
   <p>${r===null?'Bagus! Terus berlatih mengucapkan bahasa Inggris.':great?'Semua kata terdengar jelas. Hebat!':`Kata yang belum terdengar: <b>${missed.join(', ')}</b>. Dengarkan lagi, lalu ucapkan pelan-pelan.`}</p>
   <div class="row">${great||r===null?'':`<button class="btn alt" id="again">↺ Try again</button>`}<button class="btn" id="snext">${V.si<1?'Next ›':'Finish ›'}</button></div></div>`;
  const a=document.getElementById('again');if(a)a.onclick=()=>{res.innerHTML='';app.querySelectorAll('#target .tw').forEach(el=>el.classList.remove('hit','miss'));const h=document.getElementById('heard');if(h)h.textContent=''};
  document.getElementById('snext').onclick=()=>{if(V.si<1){V.si++;renderSpeak()}else finishChapter()}}
function finishChapter(){const i=V.ci,q=V.res.filter(Boolean).length,s=V.sp.filter(x=>x>=.6).length,pts=q+s,stars=pts>=5?3:pts>=3?2:1;
  const prev=SAVE['c'+i]||{};SAVE['c'+i]={stars:Math.max(prev.stars||0,stars)};persist();V={view:'end',ci:i};
  const last=i===CH.length-1;
  app.innerHTML=`<div class="endc">${SVG(CH[i].panels[CH[i].panels.length-1].art(),'cam-push')}<div class="endt"><div class="bigstars">${[0,1,2].map(j=>STAR(j<stars)).join('')}</div>
   <h2>${last?'The End!':`Chapter ${i+1} complete!`}</h2><p>${last?'Tamat! Zero pulang bersama kenangan teman-teman barunya.':'Bab '+(i+1)+' selesai!'} Pertanyaan benar: <b>${q}/3</b> · Speaking: <b>${s}/2</b></p>
   <div class="row">${last?'':`<button class="btn" data-open="${i+1}">Chapter ${i+2} ›</button>`}<button class="btn alt" data-open="${i}">Read again</button><button class="btn alt" data-go="home">Home</button></div></div></div>`;
  sfx.fan();scrollTo({top:0,behavior:'smooth'})}

/* ---- events ---- */
document.addEventListener('click',e=>{const t=e.target;
  const sp=t.closest('[data-speak]');if(sp){sayOne(sp.dataset.speak,'n',sp.dataset.slow?.7:.9);return}
  const vw=t.closest('.vw');if(vw){const w=vw.dataset.word,gl=document.getElementById('gloss');sayOne(w,'n',.8);if(gl){gl.hidden=false;gl.innerHTML=`<b>${w}</b> = ${VOC[w.toLowerCase()]||''}`}return}
  const op=t.closest('[data-open]');if(op){openChapter(+op.dataset.open);scrollTo({top:0});return}
  const go=t.closest('[data-go]');if(go){if(DICT&&SP.active)DICT.stop().catch(()=>{});renderHome();scrollTo({top:0});return}
  const pk=t.closest('[data-pick]');if(pk&&!pk.disabled){pick(pk);return}});
document.addEventListener('keydown',e=>{if(V.view!=='read')return;if(e.key==='ArrowRight')document.getElementById('next')?.click();if(e.key==='ArrowLeft')document.getElementById('prev')?.click()});
renderHome();
window.__Z={CH,V:()=>V,scoreSpeech,SP,judge};

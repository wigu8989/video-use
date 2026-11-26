const SPK=`<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`;
const TURTLE=`<svg viewBox="-20 -20 40 40" width="20" height="20" aria-hidden="true"><ellipse cy="2" rx="12" ry="9" fill="#3FA34D"/><path d="M-8 2 h16 M0 -6 v16" stroke="#2E7D32" stroke-width="1.6"/><circle cx="15" cy="0" r="4.5" fill="#7BC67E"/><circle cx="-9" cy="11" r="3" fill="#7BC67E"/><circle cx="9" cy="11" r="3" fill="#7BC67E"/></svg>`;
const STAR=on=>`<svg viewBox="-12 -12 24 24" class="${on?'on':''}" aria-hidden="true"><path d="M0 -10 L2.9 -3.6 L9.8 -3.1 L4.6 1.5 L6.1 8.3 L0 4.8 L-6.1 8.3 L-4.6 1.5 L-9.8 -3.1 L-2.9 -3.6Z" fill="${on?'#FFC93C':'#E6DAC0'}" stroke="${on?'#D99A00':'#CDBE9C'}" stroke-width="1.4" stroke-linejoin="round"/></svg>`;
function polly(m='n'){const eye=m==='happy'?`<path d="M45 22 q4 -5 8 0" stroke="#173A50" stroke-width="2.6" fill="none" stroke-linecap="round"/>`:`<circle cx="49" cy="22" r="6" fill="#fff"/><circle cx="${m==='think'?51:50}" cy="${m==='think'?20:22}" r="3.2" fill="#173A50"/><circle cx="51" cy="20.5" r="1.1" fill="#fff"/>`;
  const brow=m==='oops'?`<path d="M43 13 l9 3" stroke="#173A50" stroke-width="2" stroke-linecap="round"/>`:'';
  return `<svg class="polly" viewBox="0 -10 80 106" aria-hidden="true"><path d="M30 66 l-10 26 l8 -2 l4 -20z" fill="#2F6FD6"/><path d="M36 68 l-4 26 l7 -3 l1 -20z" fill="#E5484D"/><path d="M40 68 l4 24 l5 -4 l-3 -19z" fill="#F5C518"/>
  <ellipse cx="40" cy="52" rx="20" ry="24" fill="#2FB86A"/><ellipse cx="43" cy="56" rx="11" ry="16" fill="#8FE0A9"/><path d="M22 44 q-6 18 6 32 q10 -6 10 -22 q-4 -12 -16 -10z" fill="#1E8F50"/><path d="M24 58 q4 8 10 10" stroke="#F5C518" stroke-width="3" fill="none" stroke-linecap="round"/>
  <circle cx="44" cy="24" r="17" fill="#2FB86A"/><ellipse cx="43" cy="10" rx="22" ry="5" fill="#A8743C"/><path d="M30 10 q0 -15 13 -15 q13 0 13 15z" fill="#C9954F"/><path d="M30.5 7 h25" stroke="#7A3E1A" stroke-width="3.5"/><path d="M36 -1 q4 -3 7 -3" stroke="#E6BC7E" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="52" cy="30" r="6" fill="#F5C518" opacity=".9"/>${eye}${brow}
  <path d="M57 22 q12 0 12 11 q0 6 -5 8 q1 -7 -7 -8z" fill="#FFB020"/><path d="M57 30 q6 1 7 7 q-4 1 -7 -3z" fill="#E08A00"/><path d="M64 41 q2 -1 0 -4" stroke="#6B4220" stroke-width="2" fill="none"/>
  <path d="M34 75 v6 M44 75 v6" stroke="#E08A00" stroke-width="3" stroke-linecap="round"/></svg>`}

/* ---------- penyimpanan ---------- */
const SKEY='englishQuest100.v1';
let SAVE={};try{SAVE=JSON.parse(localStorage.getItem(SKEY)||'{}')||{}}catch(e){SAVE={}}
const persist=()=>{try{localStorage.setItem(SKEY,JSON.stringify(SAVE))}catch(e){}};

/* ---------- suara ---------- */
const HAS_TTS='speechSynthesis' in window&&'SpeechSynthesisUtterance' in window;
let VO=null;
function pickVoice(){try{const vs=speechSynthesis.getVoices();VO=vs.find(v=>/en[-_]US/i.test(v.lang)&&/Google|Samantha|Aria|Jenny|Natural/i.test(v.name))||vs.find(v=>/en[-_]US/i.test(v.lang))||vs.find(v=>/^en/i.test(v.lang))||null}catch(e){}}
if(HAS_TTS){pickVoice();try{speechSynthesis.onvoiceschanged=pickVoice}catch(e){}}
function say(t,rate=.8){return new Promise(res=>{if(!HAS_TTS){res();return}try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang='en-US';if(VO)u.voice=VO;u.rate=rate;u.pitch=1.08;let done=false;const fin=()=>{if(!done){done=true;res()}};u.onend=fin;u.onerror=fin;setTimeout(fin,1200+t.length*160/rate);speechSynthesis.speak(u)}catch(e){res()}})}
let AC=null;
function tone(f,d=.12,type='sine',v=.18,when=0){try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();const t=AC.currentTime+when,o=AC.createOscillator(),g=AC.createGain();o.type=type;o.frequency.setValueAtTime(f,t);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g).connect(AC.destination);o.start(t);o.stop(t+d+.02)}catch(e){}}
const sfx={pop:()=>tone(660,.08,'triangle',.15),ok:()=>{[523,659,784,1046].forEach((f,i)=>tone(f,.18,'triangle',.16,i*.09))},bad:()=>{tone(220,.18,'square',.07);tone(180,.22,'square',.06,.12)},fan:()=>{[523,659,784,659,784,1046].forEach((f,i)=>tone(f,.22,'triangle',.15,i*.13))}};
function toast(t){const d=document.createElement('div');d.className='toast';d.textContent=t;document.body.appendChild(d);setTimeout(()=>d.remove(),2600)}
const spkBtn=(text,label='Dengarkan',cls='')=>`<button class="spk ${cls}" data-say="${text.replace(/"/g,'&quot;')}">${SPK}${label}</button>`;

/* ---------- confetti ---------- */
function confetti(){const c=document.getElementById('fx'),x=c.getContext('2d');if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;c.width=innerWidth;c.height=innerHeight;const cols=['#FFC93C','#FF6F59','#2FB86A','#3D7BE0','#E0466E','#8E5BD8'];const P=[...Array(140)].map(()=>({x:innerWidth/2+(Math.random()-.5)*120,y:innerHeight*.35,vx:(Math.random()-.5)*12,vy:-Math.random()*12-4,r:Math.random()*6+4,c:cols[Math.random()*6|0],a:Math.random()*6,s:Math.random()*.3-.15}));let f=0;(function tick(){x.clearRect(0,0,c.width,c.height);P.forEach(p=>{p.vy+=.35;p.x+=p.vx;p.y+=p.vy;p.a+=p.s;x.save();x.translate(p.x,p.y);x.rotate(p.a);x.fillStyle=p.c;x.fillRect(-p.r/2,-p.r/4,p.r,p.r/2);x.restore()});if(++f<150)requestAnimationFrame(tick);else x.clearRect(0,0,c.width,c.height)})()}


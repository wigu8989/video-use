/* ---------- penyusun soal ---------- */
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const esc=s=>String(s).replace(/"/g,'&quot;');
const shuffle=(a,seed)=>{a=a.slice();let s=seed||7;for(let i=a.length-1;i>0;i--){s=(s*9301+49297)%233280;const j=Math.floor(s/233280*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const cap1=w=>w.charAt(0).toUpperCase()+w.slice(1);
const INS={listenPic:L2('Listen and tap the right picture.','Dengarkan, lalu ketuk gambar yang benar.'),listen:L2('Listen and tap the right word.','Dengarkan, lalu ketuk kata yang benar.'),
 listenS:L2('Listen. Which sentence do you hear?','Dengarkan. Kalimat mana yang kamu dengar?'),read:L2('What is this? Choose the right word.','Gambar apa ini? Pilih kata yang benar.'),
 match:L2('Drag each word to the right picture.','Seret setiap kata ke gambar yang cocok.'),spell:L2('Spell the word. Drag the letters in order.','Eja katanya. Seret huruf sesuai urutan.'),
 build:L2('Make a sentence. Drag the words in order.','Susun kata menjadi kalimat yang benar.'),blank:L2('Read the sentence. Drag the right word into the gap.','Baca kalimatnya. Seret kata yang tepat ke tempat kosong.')};
const linesHTML=ls=>`<div class="lines">${ls.map(l=>`<div>${spkBtn(l[0],'','mini')}<span class="en">${l[0]}</span><small>${l[1]}</small></div>`).join('')}</div>`;
function build(q,seed=3){const t=q.t,base={...q,seed};
  if(t==='listenPic'||t==='listen'){const ans=q.ans||q.say;return {...base,ans,tap:true,ins:q.ins||(q.sentence?INS.listenS:INS[t]),ansEN:q.sentence?q.say:ans,answerSay:q.say,
    exp:q.note||(q.sentence?`"${q.say}" artinya "${q.mean}"`:`<b>${q.say}</b> = ${W[ans].id}`)}}
  if(t==='read'){const ans=q.ans||q.show;return {...base,ans,tap:true,ins:q.ins||q.ask||INS.read,ansEN:ans,answerSay:ans,exp:q.note||`<b>${ans}</b> = ${q.ansMean||W[ans].id}`}}
  const R={...base,dnd:true,ins:q.ins||INS[t],stepSay:(tk)=>String(tk.type).replace(/[.,!]/g,'')};
  if(t==='match'){R.T=shuffle(q.pairs,seed).map(w=>({id:'w_'+w,type:w,cls:'chip',html:w}));R.ans={};q.pairs.forEach(w=>R.ans['w_'+w]='s_'+w);R.slots=q.pairs.map(w=>'s_'+w);
    R.L=S=>q.pairs.map(w=>`<div class="mcol"><div class="pc">${pic(w,80)}</div>${S('s_'+w,'w')}</div>`).join('');
    R.cap=tk=>L2(`Drag "${tk.type}" to its picture.`,`Seret "${tk.type}" ke gambar ${W[tk.type].id}.`);
    R.exp=q.note||q.pairs.map(w=>`<b>${w}</b> = ${W[w].id}`).join(' · ');R.ansEN=q.pairs.join(' · ');R.answerSay=q.pairs.join(', ');return R}
  if(t==='spell'){const Ls=q.word.split('');R.T=shuffle([...Ls,...q.extra],seed+1).map((ch,i)=>({id:'L'+i,type:ch,cls:'tile',html:ch}));R.sol={};Ls.forEach((ch,i)=>R.sol['p'+i]=ch);R.slots=Ls.map((_,i)=>'p'+i);
    R.L=S=>`<div class="bigpic">${pic(q.word,110)}</div><div class="spellrow">${Ls.map((_,i)=>S('p'+i,'l')).join('')}</div>`;
    R.cap=(tk,s,i)=>L2(`Letter ${i+1}: "${tk.type}"`,`Huruf ke-${i+1}: "${tk.type}"`);R.top=`<div class="listen">${spkBtn(q.word,'Listen')}</div>`;R.say=q.word;
    R.exp=`${Ls.join(' - ')} → <b>${q.word}</b> (${W[q.word].id})`;R.ansEN=q.word;R.answerSay=q.word;R.tray='letters';return R}
  if(t==='build'){const s=q.words.join(' ');R.T=shuffle(q.words,seed+2).map((w,i)=>({id:'W'+i,type:w,cls:'chip',html:w}));R.sol={};q.words.forEach((w,i)=>R.sol['b'+i]=w);R.slots=q.words.map((_,i)=>'b'+i);
    R.sub=`Artinya: "${q.mean}"`;R.L=S=>`${q.showHTML?q.showHTML():''}<div class="sent">${q.words.map((_,i)=>S('b'+i,'w')).join('')}</div>`;
    R.cap=(tk,s,i)=>L2(`Word ${i+1}: "${tk.type}"`,`Kata ke-${i+1}: "${tk.type}"`);
    R.exp=q.note||`"${s}" artinya "${q.mean}". Kalimat dimulai huruf besar dan diakhiri tanda titik.`;R.ansEN=s;R.answerSay=s;R.tray='words';return R}
  if(t==='blank'){const [a,b]=q.text.split('___'),full=a+q.ans+b;R.T=shuffle(q.opts,seed+3).map(w=>({id:'o_'+w,type:w,cls:'chip',html:w}));R.ans={['o_'+q.ans]:'gap'};R.slots=['gap'];R.sub=`Artinya: "${q.mean}"`;
    R.L=S=>`${q.showHTML?q.showHTML():''}<div class="sentence"><span class="en">${a}</span>${S('gap','w gap')}<span class="en">${b}</span></div>`;
    R.cap=tk=>L2(`"${full}" — "${tk.type}" fits the gap.`,`"${tk.type}" cocok untuk tempat kosong.`);
    R.exp=q.note||`"${full}" artinya "${q.mean}"`;R.ansEN=full;R.answerSay=full;R.tray='words';return R}
  if(t==='sort'){R.T=q.items.map(([id,k])=>({id,type:k,cls:'pic lab',html:pic(k,46)+`<span>${k}</span>`}));R.ans=Object.fromEntries(q.items.map(([id,k,b])=>[id,'bin_'+b]));
    R.slots=q.bins.map(b=>'bin_'+b.id);R.cap=Object.fromEntries(R.slots.map(s=>[s,99]));const bl=Object.fromEntries(q.bins.map(b=>['bin_'+b.id,b]));R.capN=R.cap;
    R.ready=P=>Object.keys(P).length===R.T.length;
    R.L=S=>q.bins.map(b=>`<div class="bin"><div class="binh"><b>${b.label}</b><small>${b.sub}</small></div>${S('bin_'+b.id,'binz')}</div>`).join('');
    R.cap=(tk,s)=>L2(`${tk.type} → ${bl[s].label}`,`${W[tk.type].id} → ${bl[s].sub}`);R.exp=q.note;R.tray='things';return R}
  if(t==='count'){const z=q.zone,inZ=P=>Object.keys(P).filter(k=>P[k]===z);R.T=[...Array(q.total)].map((_,i)=>({id:'f'+i,type:q.item,cls:'pic',html:G(IC[q.item],50)}));R.slots=[z];R.capN={[z]:99};
    R.onPlace=P=>{const n=inZ(P).length;if(n>0&&n<=20)say(NUMW[n-1],.95)};R.top=`<div class="listen">${spkBtn(q.say,'Listen')}<span class="en big">${q.sayHTML}</span></div>`;
    R.L=(S,P)=>`<div class="counter">${q.counter}: ${inZ(P).length}</div>${S(z,z)}`;R.ready=P=>inZ(P).length>0;
    R.chk=P=>{const ids=inZ(P),n=ids.length,m={};ids.forEach((id,i)=>m[id]=i<q.n);return {ok:n===q.n,m,hint:n<q.n?`More! · Baru ${n}. Tambah lagi.`:`Too many! · Ada ${n}. Terlalu banyak.`}};
    R.solve=()=>{const P={};for(let i=0;i<q.n;i++)P['f'+i]=z;return P};R.stepSay=(tk,i)=>NUMW[i];R.cap=(tk,s,i)=>L2(`${cap1(NUMW[i])}!`,`${cap1(NUMI[i])}!`);R.tray=q.tray||'things';return R}
  if(t==='collect'){const z=q.zone;R.T=q.items.map(([id,k])=>({id,type:k,cls:'pic',html:pic(k,50)}));R.slots=[z];R.capN={[z]:99};
    R.top=`<div class="listen">${spkBtn(q.say,'Listen')}<span class="en big">${q.sayHTML}</span></div>`;R.L=S=>S(z,z);R.ready=P=>Object.values(P).some(s=>s===z);
    R.chk=P=>{const m={},cnt={};let ok=true;R.T.forEach(tk=>{if(P[tk.id]!==z)return;cnt[tk.type]=(cnt[tk.type]||0)+1;m[tk.id]=cnt[tk.type]<=(q.want[tk.type]||0)});
      Object.entries(q.want).forEach(([k,n])=>{if((cnt[k]||0)!==n)ok=false});const extra=Object.values(m).includes(false);if(extra)ok=false;
      return {ok,m,hint:extra?'Too many! · Ada yang tidak disebut atau kebanyakan.':'More! · Masih ada yang kurang.'}};
    R.solve=()=>{const P={},c={};R.T.forEach(tk=>{c[tk.type]=c[tk.type]||0;if(c[tk.type]<(q.want[tk.type]||0)){P[tk.id]=z;c[tk.type]++}});return P};
    R.cap=tk=>L2(`"${tk.type}" is in the sentence.`,`${W[tk.type].id} disebut di kalimat.`);R.exp=q.note;R.tray=q.tray||'things';return R}
  if(t==='paint'){R.T=shuffle(q.paints,seed).map(c=>({id:'c_'+c,type:c,cls:'paint',html:G(paint(SHC[c]),38)+c}));R.ans={};q.objs.forEach(([o,c])=>R.ans['c_'+c]='o_'+o);R.slots=q.objs.map(([o])=>'o_'+o);
    R.top=linesHTML(q.lines);R.say=q.lines.map(l=>l[0]).join(' ');
    R.L=(S,P)=>q.objs.map(([o])=>{const tid=Object.keys(P).find(k=>P[k]==='o_'+o),c=tid?SHC[tid.slice(2)]:SHC.grey;return `<div class="zone">${G(shape(o,c),96,'obj')}${S('o_'+o,'w')}</div>`}).join('');
    R.cap=(tk,s)=>L2(`The ${s.slice(2)} is ${tk.type}.`,`Warnai ${W[s.slice(2)].id} dengan ${W[tk.type].id}.`);R.exp=q.note;R.answerSay=R.say;R.tray='paint';return R}
  if(t==='figure'){R.T=shuffle(q.items,seed).map(([id,k])=>({id,type:k,cls:q.chips?'chip':'pic',html:q.chips?k:pic(k,46)}));R.ans=q.ans;R.slots=q.spots.map(s=>s[0]);const lab=Object.fromEntries(q.spots.map(s=>[s[0],s[3]]));
    R.top=(q.lines?linesHTML(q.lines):'')+(q.say?`<div class="listen">${spkBtn(q.say,'Listen')}</div>`:'');R.say=q.say||(q.lines?q.lines.map(l=>l[0]).join(' '):'');
    R.L=(S,P)=>`<div class="fig" style="aspect-ratio:${q.ar}">${q.fig()}${q.spots.map(([sid,x,y,l])=>`<div class="spot" style="left:${x}%;top:${y}%">${S(sid,'fs',l&&!Object.values(P).includes(sid)?`<span class="ph">${l}</span>`:'')}</div>`).join('')}</div>`;
    R.cap=(tk,s)=>L2(`"${tk.type}" goes ${lab[s]||'here'}.`,`${cap1(W[tk.type].id)} ditaruh di sini.`);R.exp=q.note;R.tray=q.chips?'words':'things';return R}
}
function chk(q,P){if(q.chk)return q.chk(P);const m={};let ok=true;
  if(q.ans&&typeof q.ans==='object'){q.T.forEach(t=>{const w=q.ans[t.id],s=P[t.id];if(s)m[t.id]=s===w;if((w||s)&&s!==w)ok=false})}
  else{q.slots.forEach(sl=>{const id=Object.keys(P).find(k=>P[k]===sl);if(!id){ok=false;return}const g=q.T.find(t=>t.id===id).type===q.sol[sl];m[id]=g;if(!g)ok=false})}
  return {ok,m}}
function solve(q){if(q.solve)return q.solve();if(q.ans&&typeof q.ans==='object')return {...q.ans};const P={},used=new Set();q.slots.forEach(sl=>{const t=q.T.find(t=>t.type===q.sol[sl]&&!used.has(t.id));used.add(t.id);P[t.id]=sl});return P}
function steps(q){const P=solve(q),o=q.slots;return Object.entries(P).sort((a,b)=>o.indexOf(a[1])-o.indexOf(b[1])||0)}

/* ---------- tampilan papan ---------- */
function tapHTML(q){
  if(q.t==='listenPic'||q.t==='listen'){const pics=q.t==='listenPic';return `<div class="listen">${spkBtn(q.say,'Listen')}${spkBtn(q.say,'Slow','slow').replace(SPK,TURTLE)}</div>${HAS_TTS?'':`<div class="word-shown">${q.say}</div>`}
    <div class="opts ${q.opts.length===4?'four':q.opts.length===3?'three':''}${q.sentence?' sent1':''}">${q.opts.map(k=>pics?`<button class="opt" data-pick="${esc(k)}" aria-label="${k}">${pic(k,84)}</button>`:`<button class="opt w" data-pick="${esc(k)}">${k}</button>`).join('')}</div>`}
  return `${q.showHTML?q.showHTML():`<div class="bigpic">${pic(q.show,130)}</div>`}<div class="opts ${q.opts.length===3?'three':''}">${q.opts.map(k=>`<button class="opt w" data-pick="${esc(k)}">${k}</button>`).join('')}</div>`}
function boardHTML(q,P,o={}){const m=o.m||{};
  const tokH=t=>`<div class="tok ${t.cls} ${t.id in m?(m[t.id]?'ok':'bad'):''} ${o.sel===t.id?'sel':''}" data-id="${t.id}" tabindex="0" role="button" aria-label="${esc(t.type)}">${t.html}</div>`;
  const S=(id,cls='',inner='')=>`<div class="slot ${cls}" data-slot="${id}" tabindex="0" role="button" aria-label="Tempat jawaban">${inner}${q.T.filter(t=>P[t.id]===id).map(tokH).join('')}</div>`;
  const rest=q.T.filter(t=>!P[t.id]);
  return `${q.top?q.top:''}<div class="board ${o.sel?'selmode':''} ${o.lock?'lock':''}">${q.L(S,P)}</div>
   ${o.noTray?'':`${o.lock||q.t==='sort'?'':'<p class="trayhint">Tap twice to place · Ketuk 2x untuk memasang</p>'}<div class="tray" data-slot="tray">${rest.length?rest.map(tokH).join(''):`<span class="hint">All done! · Semua sudah dipasang</span>`}</div>`}`}

/* ---------- tangan animasi ---------- */
const HANDSVG=`<svg viewBox="0 0 24 28" width="40" aria-hidden="true"><path d="M8 2 a2 2 0 0 1 4 0 v10 l1 -4 a2 2 0 0 1 4 1 v3 a2 2 0 0 1 4 1 v6 q0 6 -5 9 h-7 q-3 -2 -6 -7 l-2.5 -4.5 a2 2 0 0 1 3.4 -2 l2.1 2.5z" fill="#fff" stroke="#173A50" stroke-width="1.5" stroke-linejoin="round"/></svg>`;
const hand=document.createElement('div');hand.className='hand';hand.innerHTML=HANDSVG;hand.hidden=true;document.body.appendChild(hand);
let RUN=0;const alive=id=>{if(id!==RUN)throw 'stop'};
function scrollBox(el){return el.closest('.dm-scroll')||null}
async function bringIn(els,id){const rs=els.map(e=>e.getBoundingClientRect()),top=Math.min(...rs.map(r=>r.top)),bot=Math.max(...rs.map(r=>r.bottom));
  if(top<70||bot>innerHeight-30){const box=scrollBox(els[0]),d=(top+bot)/2-innerHeight/2;if(box)box.scrollBy({top:d,behavior:'smooth'});else scrollBy({top:d,behavior:'smooth'});await wait(420);alive(id)}}
function handAt(x,y,ms){hand.style.transition=ms?`transform ${ms}ms cubic-bezier(.45,.05,.25,1)`:'none';hand.style.transform=`translate(${x-9}px,${y-3}px)`}
async function handTo(el,id,ms=650){await bringIn([el],id);const r=el.getBoundingClientRect();if(hand.hidden){hand.hidden=false;handAt(innerWidth/2,innerHeight+40,0);await wait(30)}handAt(r.left+r.width/2,r.top+r.height/2,ms);await wait(ms+60);alive(id)}
async function dragAnim(root,q,id,slot,P,redraw,rid){let tk=root.querySelector(`.tok[data-id="${id}"]`),sl=root.querySelector(`[data-slot="${slot}"]`);if(!tk||!sl)return;
  await bringIn([tk,sl],rid);await handTo(tk,rid);hand.classList.add('press');await wait(180);
  const r=tk.getBoundingClientRect(),g=tk.cloneNode(true);g.classList.add('ghost');g.classList.remove('sel','ok','bad');g.style.width=r.width+'px';g.style.height=r.height+'px';g.style.transform=`translate(${r.left}px,${r.top}px) scale(1.08)`;document.body.appendChild(g);tk.style.visibility='hidden';
  sl=root.querySelector(`[data-slot="${slot}"]`);const s=sl.getBoundingClientRect(),tx=s.left+s.width/2-r.width/2,ty=s.top+s.height/2-r.height/2;
  g.style.transition='transform 760ms cubic-bezier(.45,.05,.25,1)';await wait(20);g.style.transform=`translate(${tx}px,${ty}px) scale(1.08) rotate(-3deg)`;handAt(tx+r.width/2,ty+r.height/2,760);await wait(800);
  P[id]=slot;redraw();g.remove();hand.classList.remove('press');sfx.pop();alive(rid)}
async function playSteps(root,q,P,redraw,capFn,rid){const st=steps(q);let i=0;
  for(const [id,slot] of st){const tk=q.T.find(t=>t.id===id);capFn(q.cap(tk,slot,i));const w=q.stepSay?q.stepSay(tk,i):'';
    await dragAnim(root,q,id,slot,P,redraw,rid);if(w)say(w,.9);await wait(q.t==='count'?380:650);alive(rid);i++}}
async function tapAnim(root,q,capFn,rid,full){
  if(q.t!=='read'){const b=root.querySelector('.spk');capFn(L2('Tap Listen and hear carefully.','Ketuk Listen dan dengarkan baik-baik.'));await handTo(b,rid);hand.classList.add('press');b.classList.add('playing');await say(q.say);b.classList.remove('playing');hand.classList.remove('press');await wait(300);alive(rid)}
  else{capFn(L2('Look at the picture.','Lihat gambarnya.'));const p=root.querySelector('.bigpic');if(p)await handTo(p,rid);await wait(700);alive(rid)}
  const opts=[...root.querySelectorAll('[data-pick]')],right=opts.find(o=>o.dataset.pick===q.ans),wrong=opts.find(o=>o!==right);
  if(full&&wrong){capFn(L2(`Is it "${wrong.dataset.pick}"? No.`,`Apakah "${wrong.dataset.pick}"? Bukan.`));await handTo(wrong,rid);wrong.classList.add('dim');await wait(900);alive(rid)}
  capFn(L2(`"${q.ans}" — yes!`,`"${q.ans}" — benar!`));await handTo(right,rid);hand.classList.add('press');right.classList.add('ok');sfx.ok();await wait(400);hand.classList.remove('press');alive(rid)}
function stopAnim(){clearTimeout(V&&V.idleT);clearTimeout(V&&V.autoT);RUN++;hand.hidden=true;hand.classList.remove('press');document.querySelectorAll('.ghost').forEach(g=>g.remove())}

/* ---------- tutorial ---------- */
const DTYPE=q=>q.t;
function openDemo(type){stopAnim();const q=build(DEMO[type],5);const ov=document.createElement('div');ov.className='dm';
  ov.innerHTML=`<div class="dm-box dm-scroll" role="dialog" aria-label="Tutorial"><div class="dm-head"><span class="dm-tag">Tutorial · ${TYPE[type]}</span><b>How to play · Cara bermain</b><button class="dm-x" aria-label="Tutup">×</button></div>
   <div class="say">${polly('happy')}<div class="bub" id="dcap"><span class="en">${q.ins[0]}</span><span class="sm">${q.ins[1]}</span></div></div>
   <div class="stage demo" id="dstage"></div><div class="act"><button class="btn alt" id="drep">↺ Replay</button><button class="btn" id="dok">Got it! · Mengerti</button></div></div>`;
  document.body.appendChild(ov);document.body.classList.add('noscroll');
  const st=ov.querySelector('#dstage'),capEl=ov.querySelector('#dcap'),capFn=c=>{capEl.innerHTML=`<span class="en">${c[0]}</span><span class="sm">${c[1]}</span>`};
  const close=()=>{stopAnim();ov.remove();document.body.classList.remove('noscroll');window.speechSynthesis&&speechSynthesis.cancel()};
  ov.querySelector('.dm-x').onclick=close;ov.querySelector('#dok').onclick=close;ov.addEventListener('click',e=>{if(e.target===ov)close()});
  const run=async()=>{stopAnim();const rid=RUN;try{
    capFn(q.ins);
    if(q.tap){st.innerHTML=tapHTML(q);await wait(900);alive(rid);await tapAnim(st,q,capFn,rid,true)}
    else{const P={},redraw=()=>{st.innerHTML=boardHTML(q,P,{lock:true})+`<div class="act"><span class="btn fake">Check ✓</span></div>`};redraw();await wait(1100);alive(rid);
      await playSteps(st,q,P,redraw,capFn,rid);capFn(L2('Then tap Check ✓','Lalu ketuk Check ✓'));const fk=st.querySelector('.fake');await handTo(fk,rid);hand.classList.add('press');fk.classList.add('on');sfx.ok();await wait(500);hand.classList.remove('press')}
    await wait(500);alive(rid);capFn(L2('Now it is your turn!','Sekarang giliranmu!'));hand.hidden=true}catch(e){if(e!=='stop')console.error(e)}};
  ov.querySelector('#drep').onclick=run;run()}

/* ---------- aplikasi ---------- */
const TYPE={listenPic:'Listen & pick',listen:'Listen',read:'Read',match:'Match',spell:'Spell',build:'Sentence',blank:'Fill the gap',sort:'Sort',count:'Count',collect:'Choose',paint:'Color',figure:'Place'};
const app=document.getElementById('app');
let V={view:'map'};
SAVE.seen=SAVE.seen||{};
const uStars=k=>SAVE[k]?.stars||0,totalStars=()=>UNITS.reduce((a,u)=>a+uStars(u.key),0),coins=()=>UNITS.reduce((a,u)=>a+(SAVE[u.key]?.best||0),0),learned=k=>UNITS.some(u=>u.words.includes(k)&&SAVE[u.key]?.done);
const islBase=`<ellipse cy="28" rx="62" ry="14" fill="#5FA9BC" opacity=".35"/><path d="M-54 18 q8 -16 54 -18 q46 2 54 18 q-54 17 -108 0z" fill="#EBCB8B" stroke="#A67A3E" stroke-width="2"/>`;
function chestSVG(open){return open?`<g><circle r="40" fill="#FFE27A" opacity=".5" class="glow"/><path d="M-24 -4 h48 v24 h-48z" fill="#8B5A2B" stroke="#4E2E12" stroke-width="2.5"/><path d="M-24 -4 l4 -26 h40 l4 26" fill="#A0703F" stroke="#4E2E12" stroke-width="2.5"/>${[-14,-4,6,14,-9,1,10].map((x,i)=>`<circle cx="${x}" cy="${-6-(i>3?6:0)}" r="5" fill="#FFC93C" stroke="#C98A00"/>`).join('')}<rect x="-26" y="2" width="52" height="5" fill="#C9A23A"/></g>`
  :`<g><path d="M-24 -6 h48 v26 h-48z" fill="#8B5A2B" stroke="#4E2E12" stroke-width="2.5"/><path d="M-24 -6 q24 -22 48 0z" fill="#A0703F" stroke="#4E2E12" stroke-width="2.5"/><rect x="-26" y="0" width="52" height="5" fill="#C9A23A"/><rect x="-5" y="-2" width="10" height="12" rx="2" fill="#FFD86B" stroke="#8A6A10"/></g>`}
const POS=[[100,140],[255,112],[410,140],[555,190],[460,300],[300,290],[140,310],[110,450],[280,480],[450,460]],TRE=[582,540];
function mapSVG(){const next=UNITS.findIndex(u=>!SAVE[u.key]?.done),all=next<0,bp=POS[all?9:next];
  const route=`<path d="M${POS.map(p=>p.join(' ')).join(' L')} L${TRE[0]} ${TRE[1]-20}" stroke="#B3362B" stroke-width="3.5" stroke-dasharray="9 8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
  const marks=[...Array(30)].map((_,i)=>{const x=30+(i*137)%580,y=90+(i*83)%480;return `<path d="M${x} ${y} q5 -5 10 0 t10 0" stroke="#3E8CA3" stroke-width="2" fill="none" opacity=".45"/>`}).join('');
  const isl=UNITS.map((u,i)=>{const [x,y]=POS[i],st=uStars(u.key),done=SAVE[u.key]?.done;return `<g class="isl" data-open="${i}" tabindex="0" role="button" aria-label="${u.en}, ${u.idn}"><g class="ib"><g transform="translate(${x} ${y})">
    ${i===next?`<ellipse cy="20" rx="70" ry="22" fill="none" stroke="#FFF6D8" stroke-width="3" class="pulse"/>`:''}${islBase}
    <path d="M-46 14 q4 -20 46 -22 q42 2 46 22z" fill="${u.c}" opacity=".85"/><path d="M34 12 q-2 -24 6 -40" stroke="#7A4A22" stroke-width="4" fill="none" stroke-linecap="round"/>${[[-20,-4],[-8,-16],[8,-14],[16,-2]].map(([a,b])=>`<path d="M40 -28 q${a*.5} ${b*.5-5} ${a} ${b}" stroke="#2E8B3E" stroke-width="5" fill="none" stroke-linecap="round"/>`).join('')}
    <g transform="translate(-4 -12) scale(1.35)">${u.icon()}</g>${done?`<path d="M-44 8 v-30" stroke="#4E2E12" stroke-width="2.5"/><path d="M-44 -20 l14 5 l-14 5z" fill="${u.c}"/>`:''}
    <path d="M-62 34 h124 l-8 12 l8 12 h-124 l8 -12z" fill="#F7E7C0" stroke="#8A6234" stroke-width="2"/><text class="mlab" y="53" text-anchor="middle">${i+1}. ${u.short}</text>
    ${st?`<g transform="translate(-26 -60)">${[0,1,2].map(j=>`<g transform="translate(${j*26} 0)">${STAR(j<st).replace('<svg','<svg width="24" height="24" x="-12" y="-12"')}</g>`).join('')}</g>`:''}</g></g></g>`}).join('');
  const ship=`<g transform="translate(${bp[0]-92} ${bp[1]+4})"><g class="boat"><path d="M-4 0 h48 l-8 13 h-32z" fill="#7A3E1A" stroke="#4E2E12" stroke-width="2"/><path d="M20 0 v-38" stroke="#4E2E12" stroke-width="3"/><path d="M22 -36 q14 12 0 28z" fill="#F7F1E0" stroke="#8A6234"/><path d="M18 -34 q-16 12 0 26z" fill="#F7F1E0" stroke="#8A6234"/><path d="M20 -38 l12 -4 l-12 -4z" fill="#E5484D"/></g></g>`;
  const compass=`<g transform="translate(590 58)"><circle r="30" fill="#F3E2B6" stroke="#8A6234" stroke-width="2"/><path d="M0 -28 L5 0 L0 28 L-5 0Z" fill="#B3362B"/><path d="M-28 0 L0 -5 L28 0 L0 5Z" fill="#5E3A1E"/><circle r="3.5" fill="#F3E2B6" stroke="#5E3A1E"/></g>`;
  return `<svg viewBox="0 0 640 600" role="img" aria-label="Peta 10 pulau"><defs><radialGradient id="parch" cx=".5" cy=".5" r=".72"><stop offset=".55" stop-color="#F2DFAF"/><stop offset=".88" stop-color="#E2C389"/><stop offset="1" stop-color="#B98A4E"/></radialGradient></defs>
   <rect width="640" height="600" fill="url(#parch)"/><path d="M14 80 C140 64 260 90 380 76 S560 70 628 96 L630 590 L10 592Z" fill="#8FCFDC" opacity=".5"/>${marks}
   <g transform="translate(20 16)"><path d="M0 0 h300 l-12 22 l12 22 h-300 l12 -22z" fill="#B3362B" stroke="#7A1F18" stroke-width="2"/><text x="150" y="31" text-anchor="middle" font-family="Fredoka,system-ui,sans-serif" font-weight="700" font-size="24" fill="#FFF6D8">English Quest 100</text></g>
   ${compass}${route}<g transform="translate(${TRE[0]} ${TRE[1]})"><path d="M-14 22 l28 18 M14 22 l-28 18" stroke="#B3362B" stroke-width="5" stroke-linecap="round"/>${chestSVG(all)}</g>${isl}${ship}</svg>`}
function shade(h,a){const n=parseInt(h.slice(1),16);let r=n>>16,g=n>>8&255,b=n&255;const f=v=>Math.max(0,Math.min(255,Math.round(a<0?v*(1+a):v+(255-v)*a)));return `rgb(${f(r)},${f(g)},${f(b)})`}
function scene(u,i){const w=u.words,ic=k=>W[k].pic();
  const s=`<defs><linearGradient id="sg${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${shade(u.c,-.45)}"/><stop offset="1" stop-color="${shade(u.c,.55)}"/></linearGradient></defs><rect width="640" height="180" fill="url(#sg${i})"/>
   ${[0,1,2,3].map(r=>`<path d="M${360+r*60} 0 L${280+r*80} 180" stroke="#FFF6C8" stroke-width="30" opacity=".07"/>`).join('')}<circle cx="560" cy="38" r="22" fill="#FFE27A" opacity=".9"/>
   <path d="M0 125 Q120 80 260 115 T520 100 T640 112 V180 H0Z" fill="${shade(u.c,.25)}" opacity=".9"/><path d="M0 155 Q160 120 330 150 T640 140 V180 H0Z" fill="${shade(u.c,-.25)}"/>
   ${[[330,96,1.9,0],[420,62,2.2,.6],[515,108,2,1.2],[600,82,1.6,.3]].map(([x,y,sc,d],j)=>`<g transform="translate(${x} ${y})"><g class="floaty" style="animation-delay:${d}s"><circle r="${22*sc*.85}" fill="#fff" opacity=".22"/><g transform="scale(${sc})">${ic(w[j%w.length])}</g></g></g>`).join('')}
   ${[...Array(10)].map((_,j)=>`<circle cx="${(j*71+30)%640}" cy="${(j*37)%120+10}" r="2" fill="#fff" class="fly" style="animation-delay:${j*.3}s"/>`).join('')}`;
  return `<div class="scene"><svg viewBox="0 0 640 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${s}</svg><div class="scene-t"><small>Island ${i+1} · ${u.topic}</small><b>${u.en}</b><span>${u.idn}</span></div></div>`}

function renderMap(){V={view:'map'};const got=UNITS.filter(u=>SAVE[u.key]?.done).length,allW=UNITS.flatMap(u=>u.words);
  app.innerHTML=`${DEFS}<header class="top">${polly('happy')}<div><h1>English <span>Quest</span> 100</h1><p>100 English quests · <i>100 soal latihan bahasa Inggris</i> · Kelas 2 SD</p></div>
    <div class="hud"><b>★ ${totalStars()} / 30</b><small>stars · bintang</small><b class="pc">● ${coins()} / 100</b><small>correct · benar</small></div></header>
   <div class="mapbox">${mapSVG()}</div>
   ${got===10?`<div class="tip win">${G(chestSVG(true),56)}<span><b class="en">You found the treasure!</b><br>Kamu menemukan harta karun! Semua 10 pulau selesai. Coba kumpulkan 30 bintang.</span></div>`:
   `<div class="tip">${SPK}<span><b class="en">Finish 10 islands to open the treasure chest!</b><br>Selesaikan 10 pulau untuk membuka peti harta. Setiap jenis soal punya <b>tutorial animasi</b>. Ketuk <b>Watch how</b> kapan saja.</span></div>`}
   <section class="list" aria-label="Daftar pulau">${UNITS.map((u,i)=>`<button class="icard" data-open="${i}" style="--c:${u.c};--cb:${u.cb}"><span class="pic">${G(u.icon(),50)}</span><span><small class="stg">Island ${i+1} · ${u.topic}</small><h3>${u.en}</h3><span class="sub">${u.idn} · 10 quests${SAVE[u.key]?.done?` · ${SAVE[u.key].best}/10 ✓`:''}</span><span class="stars">${[0,1,2].map(j=>STAR(j<uStars(u.key))).join('')}</span></span></button>`).join('')}</section>
   <section class="book"><h2>How to play <small>Tutorial setiap jenis soal · ketuk untuk menonton</small></h2><div class="tut">${Object.keys(DEMO).map(k=>`<button class="tb" data-demo="${k}">${TYPE[k]}</button>`).join('')}</div></section>
   <section class="book"><h2>Treasure Book <small>Buku Stiker · ${allW.filter(learned).length} / ${allW.length} stickers</small></h2>
    <div class="stk">${allW.map(k=>`<button class="st ${learned(k)?'':'lock'}" data-say="${k}" aria-label="${k}">${pic(k,44)}<span>${learned(k)?k:'?'}</span></button>`).join('')}</div></section>`}
function setAccent(u){document.documentElement.style.setProperty('--ac',u.c);document.documentElement.style.setProperty('--ac2',u.cb)}
function barHTML(u,ph){return `<div class="bar"><button class="back" data-go="map">‹ Map</button><div class="phase"><span class="${ph===0?'on':''}">1 Learn</span><span class="${ph===1?'on':''}">2 Quest</span><span class="${ph===2?'on':''}">3 Treasure</span></div></div>${scene(u,V.i)}`}
function openUnit(i){stopAnim();const u=UNITS[i];setAccent(u);V={view:'learn',i};renderLearn();scrollTo({top:0})}
function renderLearn(){const u=UNITS[V.i];
  app.innerHTML=`${DEFS}${barHTML(u,0)}<div class="card"><div class="say">${polly('happy')}<div class="bub"><span class="en">Hello! I am Polly. Tap a picture and listen.</span><span class="sm">Ketuk gambar dan dengarkan. Ucapkan katanya bersama Polly, ya.</span></div></div>
   <div class="rule"><b class="en">${u.rule[0]}</b><span class="sm">${u.rule[1]}</span>${spkBtn(u.rule[0],'Listen','mini')}</div>
   <div class="learn">${u.words.map(k=>`<button class="lc" data-say="${k}" data-lc="${k}">${pic(k,84,'p')}<b>${k}</b><small>${W[k].id}</small></button>`).join('')}</div>
   <div class="act"><button class="btn alt" id="all">${SPK} Listen to all</button><button class="btn" id="go">Start 10 quests ›</button></div></div>`;
  document.getElementById('all').onclick=async e=>{const b=e.currentTarget;b.disabled=true;for(const k of u.words){if(V.view!=='learn')break;const el=app.querySelector(`[data-lc="${k}"]`);el?.classList.add('on');await say(k);el?.classList.remove('on');await wait(250)}b.disabled=false};
  document.getElementById('go').onclick=()=>{V={view:'quiz',i:V.i,qi:0,res:[],Q:u.Q.map((q,j)=>build(q,j*13+V.i*7+3))};renderQ()};
  if(!HAS_TTS)toast('Perangkat ini belum bisa membaca suara. Kata tetap bisa dibaca di layar.')}
const setMsg=(c,cls='')=>{const m=document.getElementById('msg');if(m){m.className='msg '+cls;m.innerHTML=c?`<span class="en">${c[0]}</span> <span class="sm">${c[1]}</span>`:''}};
function renderQ(){stopAnim();const u=UNITS[V.i],q=V.Q[V.qi];Object.assign(V,{tries:0,P:{},sel:null,done:false,anim:false,m:{},heard:false});
  const dots=u.Q.map((_,j)=>`<i class="${j<V.qi?(V.res[j]?'ok':'no'):j===V.qi?'cur':''}"></i>`).join('');
  app.innerHTML=`${DEFS}${barHTML(u,1)}<div class="card" id="qc"><div class="qhead"><span class="qno">Quest ${V.qi+1} / 10</span><span class="dots">${dots}</span><button class="help" data-demo="${q.t}" aria-label="Help, lihat cara bermain"><span class="hq">?</span><span class="ht"><b>Help</b><small>Butuh bantuan?</small></span><span class="htip">Watch how!<small>Lihat caranya</small></span></button></div>
   <div class="say">${polly(q.t.startsWith('listen')?'n':'think')}<div class="bub"><span class="tag">${TYPE[q.t]}</span><span class="en">${q.ins[0]}</span><span class="sm">${q.ins[1]}</span>${q.sub?`<span class="sm tr">${q.sub}</span>`:''}</div></div>
   <div class="stage" id="stage"></div><div class="msg" id="msg" aria-live="polite"></div><div id="fbx"></div></div>`;
  const st=document.getElementById('stage');
  if(q.tap){st.innerHTML=tapHTML(q);markAttn();if(q.t!=='read')setTimeout(()=>{if(V.Q&&V.Q[V.qi]===q&&!document.querySelector('.dm'))say(q.say)},400)}else drawBoard();
  clearTimeout(V.idleT);V.idleT=setTimeout(()=>nudgeHelp(),15000)}
function nudgeHelp(){const h=document.querySelector('#qc .help');if(h&&!V.done)h.classList.add('nudge')}
function markAttn(){if(V.heard)return;const b=document.querySelector('#stage .spk:not(.slow)');if(b&&!b.classList.contains('attn')){b.classList.add('attn');b.insertAdjacentHTML('beforeend','<span class="attn-tip">Tap to listen!<small>Ketuk untuk mendengar</small></span>')}}
function drawBoard(){const q=V.Q[V.qi],st=document.getElementById('stage');const ready=q.ready?q.ready(V.P):q.slots.every(s=>Object.values(V.P).includes(s));
  st.innerHTML=boardHTML(q,V.P,{m:V.m,sel:V.sel,lock:V.done,noTray:V.done&&!V.anim})+(V.done?'':`<div class="act"><button class="btn alt" id="rs">Reset</button><button class="btn" id="ck" ${ready?'':'disabled'}>Check ✓</button></div>`);
  markAttn();if(!V.done){document.getElementById('ck').onclick=check;document.getElementById('rs').onclick=()=>{V.P={};V.m={};V.sel=null;drawBoard()}}}
function place(id,s){const q=V.Q[V.qi],P=V.P,cur=P[id]||'tray';V.m={};setMsg(null);
  if(s!==cur){if(s!=='tray'){const cap=(q.capN&&q.capN[s])||1,occ=Object.keys(P).filter(k=>P[k]===s);if(occ.length>=cap){const v=occ[0];if(cur==='tray')delete P[v];else P[v]=cur}}
    if(s==='tray')delete P[id];else P[id]=s;sfx.pop();q.onPlace&&q.onPlace(P)}
  V.sel=null;drawBoard()}
let D=null;
app.addEventListener('pointerdown',e=>{const t=e.target.closest('.tok');if(!t||V.view!=='quiz'||V.done||!t.closest('#stage'))return;e.preventDefault();D={id:t.dataset.id,x:e.clientX,y:e.clientY,el:t,moved:false,th:e.pointerType==='mouse'?6:14};try{t.setPointerCapture(e.pointerId)}catch(_){}});
window.addEventListener('pointermove',e=>{if(!D)return;const dx=e.clientX-D.x,dy=e.clientY-D.y;
  if(!D.moved&&Math.hypot(dx,dy)>D.th){D.moved=true;const r=D.el.getBoundingClientRect();D.g=D.el.cloneNode(true);D.g.classList.add('ghost');D.g.classList.remove('sel','ok','bad');D.g.style.width=r.width+'px';D.g.style.height=r.height+'px';D.ox=D.x-r.left;D.oy=D.y-r.top;document.body.appendChild(D.g);D.el.classList.add('lift')}
  if(D.moved){D.g.style.transform=`translate(${e.clientX-D.ox}px,${e.clientY-D.oy}px) scale(1.08) rotate(-3deg)`;D.g.style.display='none';const el=document.elementFromPoint(e.clientX,e.clientY);D.g.style.display='';
    app.querySelectorAll('.hov').forEach(x=>x.classList.remove('hov'));const sl=el&&el.closest('#stage [data-slot]');if(sl)sl.classList.add('hov')}});
let LASTPTR=0;
window.addEventListener('pointerup',e=>{if(!D)return;const d=D;D=null;LASTPTR=Date.now();
  if(d.moved){d.g.style.display='none';const el=document.elementFromPoint(e.clientX,e.clientY);d.g.remove();const sl=el&&el.closest('#stage [data-slot]'),cur=V.P[d.id]||'tray',dist=Math.hypot(e.clientX-d.x,e.clientY-d.y);
    if((!sl||sl.dataset.slot===cur)&&dist<45){app.querySelectorAll('.hov').forEach(x=>x.classList.remove('hov'));tapTok(d.id)}else if(sl)place(d.id,sl.dataset.slot);else drawBoard()}else tapTok(d.id)});
window.addEventListener('pointercancel',()=>{if(D){const d=D;D=null;LASTPTR=Date.now();d.g&&d.g.remove();if(!d.moved)tapTok(d.id);else drawBoard()}});
app.addEventListener('click',e=>{const tk=e.target.closest('#stage .tok');if(tk&&V.view==='quiz'&&!V.done&&Date.now()-LASTPTR>700){e.stopPropagation();tapTok(tk.dataset.id)}},true);
function autoPlace(id){const q=V.Q[V.qi];if(V.P[id]){place(id,'tray');return}
  if(q.t==='sort'){V.sel=id;drawBoard();setMsg(L2('Now tap a box.','Sekarang ketuk kotak tujuannya.'),'show');return}
  const free=q.slots.find(s=>Object.values(V.P).filter(x=>x===s).length<((q.capN&&q.capN[s])||1));place(id,free||q.slots[0])}
function tapTok(id){if(V.sel===id){autoPlace(id);return}if(V.sel&&V.sel!==id){place(V.sel,V.P[id]||'tray');return}V.sel=V.sel===id?null:id;drawBoard();
  if(V.sel){const q=V.Q[V.qi],t=q.T.find(t=>t.id===id);if(q.stepSay&&t.cls!=='pic')say(q.stepSay(t,0),.85);app.querySelector(`.tok[data-id="${id}"]`)?.focus({preventScroll:true})}}
document.addEventListener('click',e=>{
  const dm=e.target.closest('[data-demo]');if(dm){openDemo(dm.dataset.demo);return}
  const sp=e.target.closest('[data-say]');if(sp){if(sp.closest('#stage')){V.heard=true;document.querySelectorAll('#stage .attn').forEach(x=>x.classList.remove('attn'));document.querySelectorAll('#stage .attn-tip').forEach(x=>x.remove())}sp.classList.add('playing');say(sp.dataset.say,sp.classList.contains('slow')?.5:.8).then(()=>sp.classList.remove('playing'));if(!sp.classList.contains('lc')&&!sp.classList.contains('st'))return}
  if(e.target.closest('.dm'))return;
  const op=e.target.closest('[data-open]');if(op){openUnit(+op.dataset.open);return}
  const go=e.target.closest('[data-go]');if(go){stopAnim();window.speechSynthesis&&speechSynthesis.cancel();renderMap();scrollTo({top:0});return}
  const pk=e.target.closest('[data-pick]');if(pk&&!pk.disabled&&!V.done){pick(pk);return}
  const sl=e.target.closest('#stage [data-slot]');if(sl&&V.sel&&!e.target.closest('.tok')&&!V.done)place(V.sel,sl.dataset.slot)});
app.addEventListener('keydown',e=>{if(e.key!=='Enter'&&e.key!==' ')return;const t=e.target;
  if(t.classList.contains('tok')&&!V.done){e.preventDefault();tapTok(t.dataset.id)}else if(t.matches('#stage [data-slot]')&&V.sel){e.preventDefault();place(V.sel,t.dataset.slot)}else if(t.matches('g.isl')){e.preventDefault();openUnit(+t.dataset.open)}});
async function pick(b){const q=V.Q[V.qi],k=b.dataset.pick;
  if(k===q.ans){b.classList.add('ok');V.done=true;app.querySelectorAll('[data-pick]').forEach(x=>x.disabled=true);finish(true);return}
  b.classList.add('bad');b.disabled=true;sfx.bad();V.tries++;
  if(V.tries<2){nudgeHelp();setMsg(L2('Try again!',q.t==='read'?'Belum tepat, lihat lagi gambarnya.':'Belum tepat. Dengarkan sekali lagi, lalu coba lagi.'),'warn');return}
  V.done=true;app.querySelectorAll('[data-pick]').forEach(x=>x.disabled=true);RUN++;const rid=RUN;
  try{await tapAnim(document.getElementById('stage'),q,c=>setMsg(c,'show'),rid,false)}catch(e){}hand.hidden=true;finish(false)}
async function check(){const q=V.Q[V.qi],r=chk(q,V.P);V.m=r.m;
  if(r.ok){V.done=true;drawBoard();finish(true);return}
  sfx.bad();V.tries++;
  if(V.tries<2){nudgeHelp();drawBoard();setMsg(L2('Try again!',r.hint?r.hint.split('· ')[1]||r.hint:'Yang merah belum tepat. Coba lagi.'),'warn');
    setTimeout(()=>{if(V.done)return;Object.keys(r.m).forEach(id=>{if(!r.m[id])delete V.P[id]});if(q.t==='count'||q.t==='collect'){}V.m={};drawBoard()},1100);return}
  V.done=true;V.anim=true;V.P={};V.m={};V.sel=null;drawBoard();setMsg(L2('Watch the answer.','Lihat cara menjawabnya.'),'show');RUN++;const rid=RUN;
  try{await wait(700);alive(rid);await playSteps(document.getElementById('stage'),q,V.P,drawBoard,c=>setMsg(c,'show'),rid)}catch(e){}
  hand.hidden=true;V.anim=false;Object.keys(V.P).forEach(id=>V.m[id]=true);if(document.getElementById('stage'))drawBoard();finish(false)}
function finish(ok){if(!document.getElementById('fbx'))return;const q=V.Q[V.qi],first=ok&&V.tries===0;V.res[V.qi]=first;V.done=true;if(ok)sfx.ok();setMsg(null);
  const pr=[['Great job!','Hebat!'],['Awesome!','Keren!'],['Super!','Pintar!'],['Well done!','Bagus sekali!'],['Excellent!','Luar biasa!'],['Amazing!','Mantap!']][V.qi%6];
  document.getElementById('fbx').innerHTML=`<div class="fb ${ok?'good':'show'}">${polly(ok?'happy':'oops')}<div style="min-width:0"><h3>${ok?(first?pr[0]:'You did it!'):'Look at the answer'}</h3><span class="sm">${ok?(first?pr[1]:'Akhirnya benar!'):'Itu jawaban yang benar. Coba ingat, ya.'}</span>
    <p class="ansl">Answer: <span class="en">${q.ansEN||q.answerSay}</span></p><p class="note">${q.exp}</p><div class="act" style="justify-content:flex-start">${spkBtn(q.answerSay,'Listen','slow')}<button class="btn" id="nx">${V.qi<9?'Next ›':'Treasure ›'}</button></div>${ok?`<div class="auto"><i id="autobar"></i><span>${V.qi<9?'Next question…':'Opening the treasure…'} · otomatis lanjut</span></div>`:''}</div></div>`;
  const goNext=()=>{clearTimeout(V.autoT);if(V.qi<9){V.qi++;renderQ();document.getElementById('qc').scrollIntoView({block:'start',behavior:'smooth'})}else summary()};
  document.getElementById('nx').onclick=goNext;
  if(ok){const ms=Math.max(2200,900+String(q.answerSay).length*70),my=V.qi;const bar=document.getElementById('autobar');if(bar){bar.style.animationDuration=ms+'ms'}V.autoT=setTimeout(()=>{if(V.view==='quiz'&&V.qi===my&&document.getElementById('nx'))goNext()},ms)}
  setTimeout(()=>say(q.answerSay),ok?650:250);document.getElementById('fbx').scrollIntoView({block:'nearest',behavior:'smooth'})}
function summary(){const u=UNITS[V.i],n=V.res.filter(Boolean).length,stars=n>=9?3:n>=6?2:1;
  const prev=SAVE[u.key]||{};SAVE[u.key]={done:true,stars:Math.max(prev.stars||0,stars),best:Math.max(prev.best||0,n)};persist();
  const all=UNITS.every(x=>SAVE[x.key]?.done),nxt=(V.i+1)%UNITS.length;V.view='sum';
  app.innerHTML=`${DEFS}${barHTML(u,2)}<div class="card sum"><div class="bigstars">${[0,1,2].map(j=>STAR(j<stars)).join('')}</div>
   <h2 style="font-size:32px;color:var(--ac)">${stars===3?'Perfect!':stars===2?'Great job!':'Keep practicing!'}</h2>
   <p style="margin:0;font-weight:700">${stars===3?'Sempurna!':stars===2?'Bagus sekali!':'Terus berlatih, ya!'} Kamu benar <b>${n} dari 10</b> pada percobaan pertama.<br><small>3 bintang: 9–10 benar · 2 bintang: 6–8 benar</small></p>
   ${all?`<div class="reward">${G(chestSVG(true),100)}<div><b class="en">You found the treasure!</b><span class="sm">Kamu menemukan harta karun! Semua pulau selesai.</span></div></div>`:''}
   <div class="say" style="text-align:left;width:100%">${polly('happy')}<div class="bub"><span class="en">New stickers for your Treasure Book!</span><span class="sm">Stiker kata baru. Ketuk untuk mendengar lagi.</span></div></div>
   <div class="stk" style="width:100%">${u.words.map(k=>`<button class="st" data-say="${k}">${pic(k,44)}<span>${k}</span></button>`).join('')}</div>
   <div class="act"><button class="btn alt" data-open="${V.i}">Play again</button><button class="btn" data-open="${nxt}">Next island ›</button><button class="btn alt" data-go="map">Map</button></div></div>`;
  sfx.fan();confetti();if(all)setTimeout(confetti,900);scrollTo({top:0,behavior:'smooth'})}
renderMap();
window.__Q={UNITS,V:()=>V,build,chk,solve,DEMO,openDemo};

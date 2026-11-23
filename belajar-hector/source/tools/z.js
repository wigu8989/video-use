
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const $=(e,s)=>e.querySelector(s);
const T=(x,y,s,cls='t',ex='')=>`<text x="${x}" y="${y}" class="${cls}" text-anchor="middle" dominant-baseline="central" ${ex}>${s}</text>`;
const NW=b=>b?'class="nw"':'';
function starPts(cx,cy,R,r,n=5){let p=[];for(let i=0;i<n*2;i++){const a=-Math.PI/2+i*Math.PI/n,rr=i%2?r:R;p.push((cx+rr*Math.cos(a)).toFixed(1)+','+(cy+rr*Math.sin(a)).toFixed(1))}return p.join(' ')}
const DEFS=`<defs><filter id="xSh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="2.5" stdDeviation="2" flood-color="#00283A" flood-opacity=".3"/></filter><filter id="xGl" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter><radialGradient id="xHi" cx=".35" cy=".28" r=".75"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset=".5" stop-color="#fff" stop-opacity=".1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient><linearGradient id="xShade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".25"/><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".3"/></linearGradient><linearGradient id="xWater" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8FDCF7"/><stop offset=".5" stop-color="#2E9BD6"/><stop offset="1" stop-color="#17639A"/></linearGradient><linearGradient id="xSea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2AA7C9"/><stop offset="1" stop-color="#0B4F6E"/></linearGradient><linearGradient id="xSand" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F7E2A8"/><stop offset="1" stop-color="#D8B46A"/></linearGradient><linearGradient id="xWood" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5E3A1E"/><stop offset=".35" stop-color="#B07A43"/><stop offset=".7" stop-color="#8B5A2B"/><stop offset="1" stop-color="#4A2C14"/></linearGradient><linearGradient id="xWoodH" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C08A52"/><stop offset=".5" stop-color="#8B5A2B"/><stop offset="1" stop-color="#5E3A1E"/></linearGradient><linearGradient id="xMetal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#EEF2F5"/><stop offset=".5" stop-color="#9AA6B2"/><stop offset="1" stop-color="#56626E"/></linearGradient><linearGradient id="xMetalV" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#56626E"/><stop offset=".45" stop-color="#EEF2F5"/><stop offset="1" stop-color="#6E7A86"/></linearGradient><linearGradient id="xBrass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE39A"/><stop offset=".5" stop-color="#D4A23A"/><stop offset="1" stop-color="#8E6414"/></linearGradient><radialGradient id="xPearl" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".45" stop-color="#F6EEF4"/><stop offset=".8" stop-color="#D9D2E6"/><stop offset="1" stop-color="#B7AFC2"/></radialGradient><radialGradient id="xRock" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#A4ADBB"/><stop offset=".7" stop-color="#6E7787"/><stop offset="1" stop-color="#4C5463"/></radialGradient><radialGradient id="xBulb" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFFBE0"/><stop offset=".45" stop-color="#FFD84D" stop-opacity=".8"/><stop offset="1" stop-color="#FFB300" stop-opacity="0"/></radialGradient><pattern id="xWick" width="12" height="12" patternUnits="userSpaceOnUse"><rect width="12" height="12" fill="#B07A43"/><path d="M0 3 Q3 0 6 3 T12 3 M0 9 Q3 6 6 9 T12 9" stroke="#7A4A2A" stroke-width="2" fill="none"/></pattern></defs>`;
const svgw=(w,h,inner,max)=>`<svg class="fig" viewBox="0 0 ${w} ${h}" style="max-width:${max||w}px" aria-hidden="true">${DEFS}${inner}</svg>`;
function weed(x,y,h,c='#2E8B3E',d=4){return `<path d="M${x} ${y} q-7 ${-h*.3} 1 ${-h*.55} q8 ${-h*.25} 0 ${-h*.45}" stroke="${c}" stroke-width="5" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="-5 ${x} ${y};5 ${x} ${y};-5 ${x} ${y}" dur="${d}s" repeatCount="indefinite"/></path>`}
function rock(cx,cy){return `<g filter="url(#xSh)"><path d="M${cx-22} ${cy+16} Q${cx-26} ${cy-6} ${cx-8} ${cy-17} Q${cx+12} ${cy-22} ${cx+22} ${cy-4} Q${cx+27} ${cy+14} ${cx+6} ${cy+18} Z" fill="url(#xRock)"/><path d="M${cx-10} ${cy-8} q6 -6 14 -3" stroke="#fff" stroke-width="2" opacity=".35" fill="none"/><circle cx="${cx+8}" cy="${cy+6}" r="3" fill="#4C5463" opacity=".6"/><path d="M${cx-14} ${cy+16} q-2 -10 3 -16" stroke="#3FA34D" stroke-width="2.5" fill="none"/></g>`}

/* ---------- tokoh dan benda ---------- */
function bip(cx,cy,dir=null,s=1){let g=`<g transform="translate(${cx} ${cy}) scale(${s})">`;
  if(dir!==null)g+=`<g transform="rotate(${dir*90})"><path d="M-8 -31 L0 -42 L8 -31 Z" fill="#F2602B"/></g>`;
  g+=`<line x1="0" y1="-20" x2="0" y2="-27" stroke="#2B3A55" stroke-width="2.5"/><circle cx="0" cy="-28" r="3.5" fill="#F2602B"/><rect x="-17" y="-20" width="34" height="26" rx="8" fill="#2EC4B6" stroke="#1B7F77" stroke-width="2"/><rect x="-12" y="-15" width="24" height="12" rx="5" fill="#0E1430"/><circle cx="-5" cy="-9" r="2.6" fill="#7CF5E8"/><circle cx="5" cy="-9" r="2.6" fill="#7CF5E8"/><rect x="-13" y="7" width="26" height="12" rx="4" fill="#24A69A"/><rect x="-11" y="19" width="7" height="5" rx="2" fill="#2B3A55"/><rect x="4" y="19" width="7" height="5" rx="2" fill="#2B3A55"/>`;return g+'</g>'}
const captain=`<svg viewBox="0 0 60 60" width="54" height="54" aria-hidden="true"><circle cx="30" cy="30" r="28" fill="#E6ECF8" stroke="#8E97B5" stroke-width="3"/><circle cx="30" cy="32" r="18" fill="#C98A5B"/><path d="M12 30 Q14 10 30 10 Q46 10 48 30 Q40 18 30 20 Q20 18 12 30Z" fill="#2A1A10"/><circle cx="24" cy="32" r="2.5" fill="#1B1B1B"/><circle cx="36" cy="32" r="2.5" fill="#1B1B1B"/><path d="M24 40 q6 5 12 0" stroke="#1B1B1B" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M6 22 Q30 -4 54 22" stroke="#9EDCF5" stroke-width="3" fill="none" opacity=".8"/></svg>`;
function alien(cx,cy,s,o){let g=`<g transform="translate(${cx} ${cy}) scale(${s})">`;
  if(o.wings)g+=`<path d="M-20 -4 Q-48 -26 -44 6 Q-36 16 -20 8 Z" fill="#CFE0FF" stroke="#5B7DB8" stroke-width="2"/><path d="M20 -4 Q48 -26 44 6 Q36 16 20 8 Z" fill="#CFE0FF" stroke="#5B7DB8" stroke-width="2"/>`;
  if(o.ant)g+=`<line x1="-8" y1="-22" x2="-15" y2="-40" stroke="#333" stroke-width="3"/><circle cx="-15" cy="-41" r="4.5" fill="#FFC93C"/><line x1="8" y1="-22" x2="15" y2="-40" stroke="#333" stroke-width="3"/><circle cx="15" cy="-41" r="4.5" fill="#FFC93C"/>`;
  g+=`<ellipse cx="-10" cy="27" rx="7" ry="4" fill="rgba(0,0,0,.35)"/><ellipse cx="10" cy="27" rx="7" ry="4" fill="rgba(0,0,0,.35)"/><ellipse cx="0" cy="0" rx="24" ry="27" fill="${o.c}" stroke="rgba(0,0,0,.3)" stroke-width="2"/>`;
  const E={1:[0],2:[-9,9],3:[-12,0,12]}[o.eyes||2];E.forEach(x=>g+=`<circle cx="${x}" cy="-7" r="6" fill="#fff"/><circle cx="${x}" cy="-6" r="3" fill="#1B1B1B"/>`);
  g+=`<path d="M-8 11 q8 7 16 0" stroke="#1B1B1B" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;return g+'</g>'}
const alienIcon=(o,w=64)=>`<svg viewBox="-50 -50 100 84" width="${w}" aria-hidden="true">${alien(0,0,1,o)}</svg>`;
const AC={hijau:'#4CC37E',ungu:'#9B6BDF',biru:'#4C8DF0',merah:'#EF5B5B',oranye:'#F59E3B'};
function rocket(cx,cy,c,s=1){return `<g transform="translate(${cx} ${cy}) scale(${s})"><path d="M-5 16 Q0 30 5 16 Z" fill="#FFC93C"/><path d="M0 -24 Q13 -10 10 16 L-10 16 Q-13 -10 0 -24 Z" fill="#F4F6FB" stroke="#5B6684" stroke-width="1.5"/><circle cx="0" cy="-6" r="5" fill="${c}" stroke="#1B2452" stroke-width="1.5"/><path d="M-10 6 L-18 18 L-9 16 Z M10 6 L18 18 L9 16 Z" fill="${c}"/></g>`}
function sym(t,cx,cy,r=12){
  if(t==='bintang')return `<polygon points="${starPts(cx,cy,r+2,r*.45)}" fill="#FFC93C" stroke="#B88400" stroke-width="1.5"/>`;
  if(t==='bulat')return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#4C8DF0" stroke="#2856A8" stroke-width="1.5"/>`;
  if(t==='segitiga')return `<polygon points="${cx},${cy-r-1} ${cx+r+1},${cy+r-1} ${cx-r-1},${cy+r-1}" fill="#22A06B" stroke="#156B47" stroke-width="1.5" stroke-linejoin="round"/>`;
  return `<rect x="${cx-r+1}" y="${cy-r+1}" width="${2*r-2}" height="${2*r-2}" rx="3" fill="#EF5B5B" stroke="#A82E2E" stroke-width="1.5"/>`}
const symIcon=(t,w=34)=>`<svg viewBox="0 0 34 34" width="${w}" aria-hidden="true">${sym(t,17,17,12)}</svg>`;
function gicon(t,cx,cy){
  if(t==='kristal')return `<polygon points="${cx},${cy-17} ${cx+12},${cy-3} ${cx},${cy+17} ${cx-12},${cy-3}" fill="#5CE1E6" stroke="#1A8C99" stroke-width="2"/><line x1="${cx-12}" y1="${cy-3}" x2="${cx+12}" y2="${cy-3}" stroke="#1A8C99" stroke-width="1.5"/>`;
  if(t==='batu')return `<path d="M${cx-17} ${cy+12} Q${cx-19} ${cy-8} ${cx-4} ${cy-14} Q${cx+14} ${cy-16} ${cx+17} ${cy+2} Q${cx+18} ${cy+14} ${cx} ${cy+14} Z" fill="#8D96A6" stroke="#5E6676" stroke-width="2"/><circle cx="${cx-4}" cy="${cy-2}" r="3" fill="#6E7787"/>`;
  if(t==='bendera')return `<line x1="${cx-8}" y1="${cy-18}" x2="${cx-8}" y2="${cy+17}" stroke="#5E6676" stroke-width="3"/><path d="M${cx-7} ${cy-17} L${cx+16} ${cy-10} L${cx-7} ${cy-2} Z" fill="#EF5B5B"/>`;
  if(t==='alien')return alien(cx,cy+2,.5,{c:AC.hijau,ant:1,eyes:1});
  return ''}

/* ---------- panggung pertunjukan ---------- */
const EASE='cubic-bezier(.34,1.56,.64,1)';
const ENT={
  drop:[{transform:'translateY(-70px)',opacity:0},{transform:'none',opacity:1}],
  zoom:[{transform:'scale(0) rotate(-120deg)',opacity:0},{transform:'none',opacity:1}],
  left:[{transform:'translateX(-90px)',opacity:0},{transform:'none',opacity:1}],
  up:[{transform:'translateY(70px)',opacity:0},{transform:'none',opacity:1}],
  pop:[{transform:'scale(.2)',opacity:0},{transform:'scale(1.25)',opacity:1,offset:.65},{transform:'none',opacity:1}],
  spin:[{transform:'rotate(-270deg) scale(.1)',opacity:0},{transform:'none',opacity:1}],
  grow:[{transform:'scaleX(0)'},{transform:'none'}],
  growup:[{transform:'scaleY(0)'},{transform:'none'}],
  growdown:[{transform:'scaleY(0)'},{transform:'none'}],
  stamp:[{transform:'scale(2.6) rotate(-25deg)',opacity:0},{transform:'scale(.9)',opacity:1,offset:.7},{transform:'none',opacity:1}]
};
const MIX=['drop','zoom','left','pop','up','spin'];
const ORIG={grow:'left center',growup:'center bottom',growdown:'center top'};
function prep(e){if(e.ownerSVGElement){e.style.transformBox=e.dataset.o?'view-box':'fill-box';if(!e.dataset.o)e.style.transformOrigin=ORIG[e.dataset.in]||'center'}else e.style.transformOrigin=ORIG[e.dataset.in]||'center'}
function ctr(e){const r=e.getBoundingClientRect();return [r.left+r.width/2,r.top+r.height/2]}
function scl(e){const s=e.ownerSVGElement;if(!s)return 1;const m=s.getScreenCTM();return m&&m.a?m.a:1}
function enter(e,i,old,stage){prep(e);const from=e.dataset.from;
  if(from){const n=stage.querySelector(`[data-k="${CSS.escape(from)}"]`);const p=n?ctr(n):old[from]?[old[from].x,old[from].y]:null;
    if(p){const c=ctr(e),s=scl(e);e.animate([{transform:`translate(${(p[0]-c[0])/s}px,${(p[1]-c[1])/s}px) scale(.6)`,opacity:.5},{transform:'translate(0,-10px) scale(1.15)',opacity:1,offset:.75},{transform:'none',opacity:1}],{duration:900,easing:'cubic-bezier(.45,0,.2,1)',delay:Math.min(i,8)*70,fill:'backwards'});return}}
  e.animate(ENT[e.dataset.in]||ENT[MIX[i%MIX.length]],{duration:700,easing:EASE,delay:Math.min(i,14)*55,fill:'backwards'})}
function morph(stage,html){const old={};
  stage.querySelectorAll('[data-k]').forEach(e=>{const [x,y]=ctr(e);old[e.dataset.k]={x,y,r:+(e.dataset.r||0),s:e.dataset.s??e.innerHTML,out:e.dataset.out,html:e.outerHTML,svg:!!e.ownerSVGElement}});
  stage.innerHTML=html;if(RM)return;{const sw=document.createElement('div');sw.className='sweep';sw.setAttribute('aria-hidden','true');stage.appendChild(sw)}let n=0;const seen=new Set();
  stage.querySelectorAll('[data-k]').forEach(e=>{const k=e.dataset.k,o=old[k];seen.add(k);prep(e);
    if(!o){if(e.dataset.o)e.animate([{opacity:0},{opacity:1}],{duration:600});else enter(e,n++,old,stage);return}
    const sig=e.dataset.s??e.innerHTML;
    if(e.dataset.o){const r=+e.dataset.r;if(r!==o.r)e.animate([{transform:`rotate(${o.r}deg)`},{transform:`rotate(${r}deg)`}],{duration:1100,easing:'cubic-bezier(.45,0,.2,1)'});return}
    if(e.dataset.from&&sig!==o.s){enter(e,n++,old,stage);return}
    const [x,y]=ctr(e),s=scl(e),dx=(o.x-x)/s,dy=(o.y-y)/s,dr=o.r-(+(e.dataset.r||0));
    if(Math.abs(dx)>1||Math.abs(dy)>1||dr){const hop=Math.min(40,Math.hypot(dx,dy)/4);e.animate([{transform:`translate(${dx}px,${dy}px) rotate(${dr}deg)`},{transform:`translate(${dx/2}px,${dy/2-hop}px) rotate(${dr/2}deg)`,offset:.5},{transform:'none'}],{duration:850,easing:'cubic-bezier(.4,0,.2,1)'})}
    else if(sig!==o.s)e.animate([{transform:'none'},{transform:'scale(1.22) rotate(-4deg)'},{transform:'none'}],{duration:520,easing:'ease-out'});
  });
  stage.querySelectorAll('.nw:not([data-k])').forEach(e=>{prep(e);enter(e,n++,old,stage)});
  Object.entries(old).forEach(([k,o])=>{if(seen.has(k)||!o.out||!o.svg)return;const svg=stage.querySelector('svg.fig');if(!svg)return;const t=document.createElementNS('http://www.w3.org/2000/svg','g');t.innerHTML=o.html;const g=t.firstElementChild;svg.appendChild(g);g.style.transformBox='fill-box';g.style.transformOrigin='center';
    g.animate([{transform:'none',opacity:1},{transform:'translateY(6px) rotate(-3deg)',offset:.2},{transform:'translateY(-30px) rotate(3deg)',offset:.4},{transform:'translateY(-340px)',opacity:0}],{duration:1300,easing:'ease-in'}).onfinish=()=>g.remove()});
}
function traveler(pts,body,_,seg=.8){const b=body==='rocket'?`<g transform="rotate(90)">${rocket(0,0,'#F2602B',.8)}</g>`:body;
  if(pts.length<2)return `<g transform="translate(${pts[0][0]} ${pts[0][1]})">${b}</g>`;
  return `<g>${b}<animateMotion dur="${((pts.length-1)*seg).toFixed(2)}s" fill="freeze" ${body==='rocket'?'rotate="auto"':''} path="M${pts.map(p=>p.join(' ')).join(' L ')}"/></g>`}
function words(cap,html){cap.innerHTML=html;if(RM)return;const tw=document.createTreeWalker(cap,NodeFilter.SHOW_TEXT),L=[];while(tw.nextNode())L.push(tw.currentNode);let n=0;
  L.forEach(t=>{const f=document.createDocumentFragment();t.textContent.split(/(\s+)/).forEach(p=>{if(!p.trim()){f.append(p);return}const s=document.createElement('span');s.className='w';s.style.animationDelay=(n++*45)+'ms';s.textContent=p;f.append(s)});t.replaceWith(f)})}

/* suara buatan (mati sampai dinyalakan) */
let SND=false,ACX=null;try{SND=localStorage.getItem('bip-snd')==='1'}catch(e){}
function sfx(t){if(!SND)return;try{ACX=ACX||new (window.AudioContext||window.webkitAudioContext)();const now=ACX.currentTime;
  const tone=(f,f2,d,type,v,at=0)=>{const o=ACX.createOscillator(),g=ACX.createGain();o.type=type;o.frequency.setValueAtTime(f,now+at);if(f2)o.frequency.exponentialRampToValueAtTime(f2,now+at+d);g.gain.setValueAtTime(v,now+at);g.gain.exponentialRampToValueAtTime(.001,now+at+d);o.connect(g).connect(ACX.destination);o.start(now+at);o.stop(now+at+d+.02)};
  if(t==='step')tone(480,900,.14,'triangle',.07);
  if(t==='ok')[523,659,784,1046,1318].forEach((f,i)=>tone(f,0,.3,'triangle',.11,i*.08));
  if(t==='bad'){tone(330,220,.25,'square',.04);tone(247,160,.35,'square',.04,.2)}
  if(t==='curtain'){tone(180,520,.6,'sine',.06);tone(360,1040,.6,'sine',.03,.05)}
  if(t==='pick')tone(700,0,.06,'sine',.06);
}catch(e){}}
function setSnd(v){SND=v;try{localStorage.setItem('bip-snd',v?'1':'0')}catch(e){}const b=document.getElementById('snd');if(b){b.setAttribute('aria-pressed',v);b.querySelector('span').textContent=v?'Suara nyala':'Suara mati'}}

/* hujan bintang saat benar */
function confetti(from){if(RM||!from)return;const c=document.createElement('canvas');c.className='confetti';document.body.appendChild(c);const dpr=window.devicePixelRatio||1,W=innerWidth,H=innerHeight;c.width=W*dpr;c.height=H*dpr;const x=c.getContext('2d');x.scale(dpr,dpr);
  const r=from.getBoundingClientRect(),ox=r.left+Math.min(60,r.width/2),oy=r.top+r.height/2,cols=['#FFC93C','#F2602B','#2EC4B6','#4C8DF0','#9B6BDF','#22A06B'];
  const P=Array.from({length:110},()=>{const a=-Math.PI/2+(Math.random()-.5)*Math.PI*1.4,v=6+Math.random()*10;return{x:ox,y:oy,vx:Math.cos(a)*v,vy:Math.sin(a)*v,s:5+Math.random()*7,c:cols[Math.random()*6|0],star:Math.random()<.5,r:Math.random()*6,vr:(Math.random()-.5)*.35}});
  const t0=performance.now();(function f(t){const k=(t-t0)/2000;x.clearRect(0,0,W,H);P.forEach(p=>{p.vy+=.3;p.vx*=.99;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;x.save();x.translate(p.x,p.y);x.rotate(p.r);x.globalAlpha=Math.max(0,1-k*k);x.fillStyle=p.c;
    if(p.star){x.beginPath();for(let i=0;i<10;i++){const rr=i%2?p.s*.45:p.s,a=-Math.PI/2+i*Math.PI/5;x.lineTo(Math.cos(a)*rr,Math.sin(a)*rr)}x.closePath();x.fill()}else x.fillRect(-p.s/2,-p.s/3,p.s,p.s*.66);x.restore()});
    if(k<1)requestAnimationFrame(f);else c.remove()})(t0)}

const TV=['wave','drop','zoom','swing'];
function splitTitle(s){let n=0;return s.split(' ').map(w=>`<span class="wd">${[...w].map(ch=>`<span style="--i:${n++}">${ch}</span>`).join('')}</span>`).join(' ')}

/* ---------- penayang langkah ---------- */
let players=[];
const NBIP=`<svg viewBox="-36 -50 72 84" width="60" aria-hidden="true"><g class="nbody"><g transform="translate(0 6) scale(1.6)"><circle cx="-13" cy="-4" r="6" fill="#8B5A2B"/><circle cx="13" cy="-4" r="6" fill="#8B5A2B"/><circle cx="-13" cy="-4" r="3" fill="#E8B88A"/><circle cx="13" cy="-4" r="3" fill="#E8B88A"/><circle r="13" fill="#A0703F"/><ellipse cy="4" rx="9" ry="7.5" fill="#E8B88A"/><ellipse cx="-4.5" cy="-3" rx="3.4" ry="4" fill="#E8B88A"/><ellipse cx="4.5" cy="-3" rx="3.4" ry="4" fill="#E8B88A"/><circle cx="-4" cy="-2" r="1.7" fill="#1B1B1B"/><circle cx="4" cy="-2" r="1.7" fill="#1B1B1B"/><path d="M-4 6 q4 3 8 0" stroke="#5A3416" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M10 10 q14 6 10 20" stroke="#8B5A2B" stroke-width="3" fill="none" stroke-linecap="round"/></g></g><g class="q"><circle cx="25" cy="-40" r="12" fill="#fff" stroke="#5B6684" stroke-width="2"/><text x="25" y="-40" text-anchor="middle" dominant-baseline="central" style="font:900 16px var(--fb);fill:#E8742A">?</text></g><g class="spark"><polygon points="${starPts(-26,-38,8,3.4)}" fill="#F5C33B"/><polygon points="${starPts(28,-28,6,2.5)}" fill="#F5C33B"/></g></svg>`;
function stepperHTML(id,title,sol){return `<div class="stp ${sol?'sol':''}" id="${id}"><div class="stp-top"><span class="stp-t"><svg viewBox="0 0 24 24" width="24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="currentColor"/><path d="M9.5 7.5 L17 12 L9.5 16.5 Z" fill="#fff"/></svg>${title}</span><span class="stp-n"></span></div><div class="theater"><div class="stage"></div><div class="valance"></div><div class="curt l"></div><div class="curt r"></div></div><div class="narr"><div class="nb">${NBIP}</div><p class="cap" aria-live="polite"></p></div><div class="ctl"><button class="pv">← Mundur</button><button class="play">▶ Putar</button><button class="nx">Lanjut →</button><div class="sdots"></div></div></div>`}
function stepper(box,frames,auto){let k=-1,tm=null,to=null;const st=$(box,'.stage'),cap=$(box,'.cap'),nb=$(box,'.nb'),th=$(box,'.theater'),dots=$(box,'.sdots'),pl=$(box,'.play'),pv=$(box,'.pv'),nx=$(box,'.nx'),n=$(box,'.stp-n');
  const show=i=>{const first=k<0;k=i;morph(st,frames[i][0]);words(cap,frames[i][1]);const txt=frames[i][1].replace(/<[^>]+>/g,'');nb.className='nb';void nb.offsetWidth;nb.classList.add(/!/.test(txt)?'happy':/\?/.test(txt)?'think':'talk');
    n.textContent=`Adegan ${i+1} dari ${frames.length}`;dots.innerHTML=frames.map((_,j)=>`<i class="${j===k?'on':j<k?'done':''}"></i>`).join('');pv.disabled=k===0;nx.disabled=k===frames.length-1;if(!first)sfx('step')};
  const curtain=()=>{th.classList.remove('show');void th.offsetWidth;th.classList.add('show');sfx('curtain');if(!RM)st.animate([{transform:'scale(1.08)',filter:'blur(4px) brightness(1.15)'},{transform:'none',filter:'none'}],{duration:1600,easing:'cubic-bezier(.2,.7,.2,1)'})};
  const stop=()=>{clearInterval(tm);clearTimeout(to);tm=null;pl.textContent=k>=frames.length-1?'↺ Ulangi':'▶ Putar'};
  const run=()=>{pl.textContent='❚❚ Jeda';tm=setInterval(()=>{if(k<frames.length-1)show(k+1);if(k>=frames.length-1)stop()},3500)};
  const start=()=>{curtain();if(k>=frames.length-1||k>0){pl.textContent='❚❚ Jeda';to=setTimeout(()=>{show(0);run()},RM?0:480)}else run()};
  pl.onclick=()=>tm||to&&pl.textContent.includes('Jeda')?stop():start();pv.onclick=()=>{stop();show(k-1);stop()};nx.onclick=()=>{stop();show(k+1);stop()};
  show(0);if(auto&&!RM){curtain();run()}else stop();const p={stop};players.push(p);return p}

/* ---------- gambar per jenis soal ---------- */
function lightsRow(items,groups=[]){const w=40,n=items.length;let s='';
  groups.forEach(([a,b],gi)=>s+=`<rect data-k="g${gi}" data-in="grow" x="${5+a*w+2}" y="5" width="${(b-a+1)*w-4}" height="56" rx="12" fill="none" style="stroke:var(--teal)" stroke-width="3" stroke-dasharray="6 4"/>`);
  items.forEach((it,i)=>{const cx=5+i*w+w/2,cy=33;s+=`<circle cx="${cx}" cy="${cy}" r="17" style="fill:var(--soft);stroke:var(--line)" stroke-width="2"/>`;if(it&&it.t)s+=`<g data-k="l${i}" data-in="${['drop','spin','zoom','up'][i%4]}">${sym(it.t,cx,cy,12)}</g>`;else if(it&&it.q)s+=`<g data-k="q${i}" data-in="zoom">${T(cx,cy,'?','t','style="fill:var(--rocket);font-size:20px"')}</g>`;s+=`<g data-k="n${i}" data-s="${it&&it.hl?1:0}">${T(cx,78,i+1,'tm',it&&it.hl?'style="fill:var(--rocket);font-size:15px"':'')}</g>`});
  return svgw(n*w+10,92,s,Math.min(n*w*1.3,640))}
function gridScene(W,H,items,bot,trail=[],c=56){let s='';for(let y=0;y<H;y++)for(let x=0;x<W;x++)s+=`<rect x="${6+x*c}" y="${6+y*c}" width="${c}" height="${c}" rx="6" style="fill:var(--soft);stroke:var(--line)" stroke-width="2"/>`;
  if(trail.length>1)s+=`<polyline points="${trail.map(([x,y])=>`${6+x*c+c/2},${6+y*c+c/2}`).join(' ')}" fill="none" style="stroke:var(--rocket)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/>`;
  items.forEach((it,ii)=>{const cx=6+it.x*c+c/2,cy=6+it.y*c+c/2;s+=`<g data-k="it${ii}" data-in="${['pop','drop','spin'][ii%3]}">${it.t==='roket'?rocket(cx,cy,it.col||'#F2602B',.95)+(it.lab?T(cx+18,cy-18,it.lab,'t','style="fill:var(--rocket);font-size:15px"'):''):gicon(it.t,cx,cy)}</g>`});
  if(bot)s+=`<g data-k="bot" data-r="${(bot.d||0)*90}" data-in="drop">${bip(6+bot.x*c+c/2,6+bot.y*c+c/2+4,bot.d===undefined?null:bot.d,.78)}</g>`;
  return svgw(W*c+12,H*c+12,s,Math.min(W*c*1.25,460))}
const cmdChips=(cmds,done)=>`<div class="chips">${cmds.map((c,i)=>`<span class="chip ${i===done-1?'on':i<done-1?'done':''}">${c}</span>`).join('')}</div>`;
function scaleSvg(L,R,tilt,k=L[0]+R[0]){const a=tilt*12;const st=(x,y,l,c)=>`<circle cx="${x}" cy="${y-17}" r="17" fill="${c}" stroke="rgba(0,0,0,.3)" stroke-width="2"/>${T(x,y-17,l,'t','style="fill:#fff;font-size:17px"')}`;
  return `<svg viewBox="0 0 200 140" width="190" aria-hidden="true"><path d="M78 134 L122 134 L100 106 Z" fill="#8E97B5"/><line x1="100" y1="106" x2="100" y2="50" stroke="#8E97B5" stroke-width="5"/><g data-k="${k}" data-r="${a}"><g transform="rotate(${a} 100 50)"><line x1="26" y1="50" x2="174" y2="50" stroke="#5B6684" stroke-width="6" stroke-linecap="round"/><g transform="rotate(${-a} 34 50)">${st(34,50,L[0],L[1])}</g><g transform="rotate(${-a} 166 50)">${st(166,50,R[0],R[1])}</g></g></g><circle cx="100" cy="50" r="6" fill="#F2602B"/></svg>`}
function pix(rows,w=110,mirror){const H=rows.length,W=rows[0].length;let s='';rows.forEach((r,y)=>r.forEach((v,x)=>{s+=`<rect data-k="c${x}_${y}" data-s="${v}" ${v===2?`data-from="c${W-1-x}_${y}"`:''} x="${x}" y="${y}" width="1" height="1" fill="${v===2?'#F2602B':v?'#2B2F6B':'#FFFFFF'}" stroke="#AEB6C8" stroke-width=".05"/>`}));
  if(mirror)s+=`<line x1="${W/2}" y1="-.2" x2="${W/2}" y2="${H+.2}" stroke="#F2602B" stroke-width=".12" stroke-dasharray=".3 .2"/>`;
  return `<svg class="fig" viewBox="-.25 -.25 ${W+.5} ${H+.5}" style="width:${w}px;max-width:100%" aria-hidden="true">${s}</svg>`}

/* ---------- ikon hutan ---------- */
const HI='<circle r="13" fill="url(#xHi)"/>';
const IC={
 monyet:`<circle cx="-13" cy="-4" r="6" fill="#8B5A2B"/><circle cx="13" cy="-4" r="6" fill="#8B5A2B"/><circle cx="-13" cy="-4" r="3" fill="#E8B88A"/><circle cx="13" cy="-4" r="3" fill="#E8B88A"/><circle r="13" fill="#A0703F"/><ellipse cy="4" rx="9" ry="7.5" fill="#E8B88A"/><ellipse cx="-4.5" cy="-3" rx="3.4" ry="4" fill="#E8B88A"/><ellipse cx="4.5" cy="-3" rx="3.4" ry="4" fill="#E8B88A"/><circle cx="-4" cy="-2" r="1.7" fill="#1B1B1B"/><circle cx="4" cy="-2" r="1.7" fill="#1B1B1B"/><path d="M-4 6 q4 3 8 0" stroke="#5A3416" stroke-width="1.6" fill="none" stroke-linecap="round"/>${HI}`,
 gajah:`<ellipse cx="-12" cy="-1" rx="8" ry="10" fill="#B6C0CA"/><ellipse cx="12" cy="-1" rx="8" ry="10" fill="#B6C0CA"/><ellipse cy="0" rx="12" ry="12" fill="#9AA6B2"/><path d="M0 8 q0 8 -6 10" stroke="#9AA6B2" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="-5" cy="-2" r="1.9" fill="#111"/><circle cx="5" cy="-2" r="1.9" fill="#111"/>${HI}`,
 burung:`<path d="M-14 4 l-6 -4 v8z" fill="#2A6FBF"/><ellipse cx="-2" cy="4" rx="12" ry="9" fill="#3D8BE0"/><circle cx="8" cy="-5" r="7" fill="#3D8BE0"/><path d="M14 -5 l6 2 l-6 2z" fill="#F5A623"/><circle cx="9" cy="-6" r="1.6" fill="#111"/><path d="M-6 1 q-6 -10 6 -8" fill="#2A6FBF"/>`,
 katak:`<ellipse cy="5" rx="14" ry="9" fill="#3FA34D"/><circle cx="-7" cy="-5" r="6" fill="#3FA34D"/><circle cx="7" cy="-5" r="6" fill="#3FA34D"/><circle cx="-7" cy="-6" r="3" fill="#fff"/><circle cx="7" cy="-6" r="3" fill="#fff"/><circle cx="-7" cy="-6" r="1.5" fill="#111"/><circle cx="7" cy="-6" r="1.5" fill="#111"/><path d="M-6 6 q6 4 12 0" stroke="#1F6B33" stroke-width="1.6" fill="none"/>`,
 ular:`<path d="M-16 8 q6 -12 12 0 t12 0 q4 -8 6 -14" stroke="#5BAA3A" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="14" cy="-7" r="4.5" fill="#5BAA3A"/><circle cx="15" cy="-8" r="1.2" fill="#111"/><path d="M18 -6 l3 1" stroke="#E5484D" stroke-width="1.2"/>`,
 elang:`<path d="M0 0 C-8 -6 -14 -10 -20 -4 C-14 -2 -10 2 -4 4 Z M0 0 C8 -6 14 -10 20 -4 C14 -2 10 2 4 4 Z" fill="#7A4A2A"/><ellipse cy="4" rx="5" ry="9" fill="#8B5A2B"/><circle cy="-6" r="5" fill="#F4F1EA"/><path d="M3 -6 l4 2 l-4 1z" fill="#F5A623"/><circle cx="1" cy="-7" r="1" fill="#111"/>`,
 belalang:`<path d="M-6 2 l-6 -10 l-4 14 M2 2 l4 10" stroke="#3FA34D" stroke-width="2" fill="none"/><ellipse cy="2" rx="13" ry="5" fill="#7BC67E"/><circle cx="12" cy="0" r="4" fill="#7BC67E"/><circle cx="13" cy="-1" r="1" fill="#111"/><path d="M14 -3 q4 -8 8 -10" stroke="#3FA34D" stroke-width="1.4" fill="none"/>`,
 rumput:`<path d="M-12 14 q2 -14 -4 -24 M-4 14 q0 -16 4 -26 M4 14 q2 -12 10 -22 M12 14 q-2 -10 6 -16" stroke="#3FA34D" stroke-width="4" fill="none" stroke-linecap="round"/>`,
 kelelawar:`<path d="M0 -2 C-6 -10 -12 -8 -20 -4 C-16 0 -16 4 -18 8 C-12 4 -6 6 0 8 C6 6 12 4 18 8 C16 4 16 0 20 -4 C12 -8 6 -10 0 -2Z" fill="#3A2F4A"/><circle r="5" fill="#4A3C5E"/><path d="M-3 -4 l-1 -4 l3 2 M3 -4 l1 -4 l-3 2" fill="#4A3C5E"/><circle cx="-2" cy="0" r="1" fill="#FFE680"/><circle cx="2" cy="0" r="1" fill="#FFE680"/>`,
 ikan:`<path d="M-13 0 L-20 -7 L-19 0 L-20 7Z" fill="#FF9F43"/><path d="M-14 0 Q-2 -11 13 0 Q-2 11 -14 0Z" fill="#FF9F43"/><path d="M-14 0 Q-2 -11 13 0 Q-2 11 -14 0Z" fill="url(#xShade)"/><circle cx="7" cy="-2" r="2" fill="#111"/>`,
 kupu:`<path d="M0 0 C-6 -16 -20 -14 -16 -2 C-20 8 -6 12 0 2 C6 12 20 8 16 -2 C20 -14 6 -16 0 0Z" fill="#F2708A"/><path d="M0 -8 v18" stroke="#3A2416" stroke-width="3" stroke-linecap="round"/><circle cx="-10" cy="-6" r="3" fill="#FFE680"/><circle cx="10" cy="-6" r="3" fill="#FFE680"/>`,
 kura:`<ellipse cy="2" rx="13" ry="10" fill="#3FA34D"/><path d="M-9 2 h18 M0 -7 v18" stroke="#2E7D32"/><circle cx="15" cy="0" r="5" fill="#7BC67E"/><circle cx="16" cy="-1" r="1.2" fill="#111"/><ellipse cy="2" rx="13" ry="10" fill="url(#xHi)"/>`,
 bebek:`<ellipse cy="5" rx="13" ry="8" fill="#F5C518"/><circle cx="8" cy="-6" r="7" fill="#F5C518"/><path d="M14 -6 l7 1 l-7 3z" fill="#F57C00"/><circle cx="9" cy="-7" r="1.4" fill="#111"/><path d="M-6 3 q4 -6 10 -2" stroke="#D9A800" stroke-width="2" fill="none"/>`,
 siput:`<path d="M-16 8 h24 q4 0 6 -6" stroke="#E9B97A" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="2" cy="-2" r="10" fill="#C98A4B"/><path d="M2 -2 m-5 0 a5 5 0 1 1 5 5" stroke="#7A4A2A" stroke-width="2" fill="none"/>`,
 daun:`<path d="M-14 12 Q-14 -12 14 -14 Q12 12 -14 12Z" fill="#5BC46A"/><path d="M-14 12 L10 -10" stroke="#2E8B3E" stroke-width="2"/>`,
 ulat:`${[-12,-5,2,9].map((x,i)=>`<circle cx="${x}" cy="${i%2?2:-1}" r="5.5" fill="#9BD15A"/>`).join('')}<circle cx="14" cy="-2" r="5" fill="#7BB33A"/><circle cx="15" cy="-3" r="1.1" fill="#111"/>`,
 pisang:`<path d="M-14 -8 Q-12 14 14 8 Q-2 7 -9 -10 Z" fill="#F5C518" stroke="#B88400" stroke-width="1.5"/><path d="M-14 -8 l-2 -3" stroke="#6B4220" stroke-width="2.5"/>`,
 mangga:`<g transform="rotate(20)"><ellipse cy="2" rx="11" ry="14" fill="#F5A623"/><ellipse cy="2" rx="11" ry="14" fill="url(#xHi)"/></g><path d="M2 -12 q6 -6 12 -4 q-6 4 -12 4z" fill="#30A46C"/>`,
 kelapa:`<circle r="13" fill="#7A4A2A"/>${HI}<circle cx="-4" cy="-3" r="2" fill="#3A2416"/><circle cx="4" cy="-3" r="2" fill="#3A2416"/><circle cy="4" r="2" fill="#3A2416"/>`,
 semangka:`<path d="M-16 -4 A16 16 0 0 0 16 -4 Z" fill="#3FA34D"/><path d="M-13 -4 A13 13 0 0 0 13 -4 Z" fill="#EF5B5B"/>${[[-6,0],[0,4],[6,0]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="1.3" ry="2" fill="#2A1A10"/>`).join('')}`,
 nanas:`<path d="M0 -6 l-6 -12 M0 -6 l0 -13 M0 -6 l6 -12" stroke="#3FA34D" stroke-width="3.5" stroke-linecap="round"/><ellipse cy="5" rx="9" ry="12" fill="#F5B83D"/><path d="M-7 0 l14 10 M7 0 l-14 10 M-8 8 l14 -8" stroke="#C98E00" stroke-width="1.2"/>`,
 tenda:`<path d="M-16 12 L0 -14 L16 12 Z" fill="#E8742A"/><path d="M0 -14 L-5 12 H5 Z" fill="#8A3A10"/><path d="M-16 12 L0 -14 L16 12 Z" fill="url(#xShade)"/>`,
 api:`<path d="M-12 12 l24 -4 M-12 8 l24 4" stroke="#7A4A2A" stroke-width="4" stroke-linecap="round"/><path d="M0 -14 C8 -4 10 2 6 9 C2 11 -6 11 -8 6 C-10 -2 -2 -4 0 -14Z" fill="#F57C00"/><path d="M0 -4 C4 2 4 6 2 9 C-2 9 -4 6 -2 2Z" fill="#FFD84D"/>`,
 sumur:`<rect x="-12" y="0" width="24" height="12" rx="2" fill="#9AA6B2"/><path d="M-12 5 h24" stroke="#7E8C99"/><path d="M-10 0 V-12 M10 0 V-12 M-13 -12 H13" stroke="#7A4A2A" stroke-width="3"/><rect x="-3" y="-8" width="6" height="6" fill="#B07A43"/>`,
 bendera:`<path d="M-8 -14 V14" stroke="#5E6676" stroke-width="3"/><path d="M-7 -13 L13 -7 L-7 -1 Z" fill="#E5484D"/>`,
 lampu:`<circle cy="-3" r="16" fill="url(#xBulb)"/><circle cy="-3" r="10" fill="#FFE680" stroke="#E0A100" stroke-width="1.5"/><circle cx="-3" cy="-6" r="3" fill="#fff" opacity=".8"/><rect x="-5" y="7" width="10" height="7" rx="2" fill="#9AA6B2"/>`,
 kayu:`<rect x="-15" y="-9" width="30" height="8" rx="4" fill="#A0703F"/><rect x="-15" y="1" width="30" height="8" rx="4" fill="#8B5A2B"/><circle cx="12" cy="-5" r="3" fill="#D9A877"/><circle cx="12" cy="5" r="3" fill="#D9A877"/>`,
 tiang:`<path d="M-10 14 V-12 M10 14 V-12" stroke="#8B5A2B" stroke-width="5" stroke-linecap="round"/><path d="M-14 14 H14" stroke="#5E3A1E" stroke-width="3"/>`,
 lantai:`${[-12,-4,4,12].map(x=>`<rect x="${x-3.5}" y="-6" width="7" height="16" rx="1.5" fill="#C08A52" stroke="#8B5A2B"/>`).join('')}`,
 atap:`<path d="M-17 6 L0 -12 L17 6 Z" fill="#B5763F"/><path d="M-12 1 h24 M-7 -5 h14" stroke="#8B5A2B" stroke-width="1.5"/><path d="M-12 6 v8 M12 6 v8" stroke="#8B5A2B" stroke-width="3"/>`,
 hias:`${[0,72,144,216,288].map(a=>`<circle cx="${(7*Math.cos(a*Math.PI/180)).toFixed(1)}" cy="${(7*Math.sin(a*Math.PI/180)).toFixed(1)}" r="6" fill="#F2708A"/>`).join('')}<circle r="4.5" fill="#F5C518"/>`,
 karung:`<path d="M-12 14 Q-16 -4 -6 -10 L6 -10 Q16 -4 12 14 Z" fill="#C9A26A" stroke="#8B6A3A" stroke-width="1.5"/><path d="M-7 -10 l7 -5 l7 5" stroke="#8B6A3A" stroke-width="2" fill="none"/>`,
 menara:`<path d="M-8 14 L-5 -8 H5 L8 14 Z" fill="#A0703F"/><path d="M-11 -8 H11 L0 -16 Z" fill="#7A4A2A"/><path d="M-6 2 H6 M-7 8 H7" stroke="#6B4220" stroke-width="1.5"/>`,
 sungai:`<path d="M-16 -6 q8 -6 16 0 t16 0 M-16 2 q8 -6 16 0 t16 0 M-16 10 q8 -6 16 0 t16 0" stroke="#3D8BE0" stroke-width="3" fill="none" stroke-linecap="round"/>`,
 gua:`<path d="M-16 14 Q-16 -14 0 -14 Q16 -14 16 14 Z" fill="#7E8C99"/><path d="M-7 14 Q-7 0 0 0 Q7 0 7 14 Z" fill="#2B3440"/>`,
 jembatan:`<path d="M-16 4 Q0 -10 16 4" stroke="#8B5A2B" stroke-width="4" fill="none"/><path d="M-16 4 V12 M16 4 V12 M-8 -1 V8 M0 -3 V8 M8 -1 V8" stroke="#8B5A2B" stroke-width="2"/><path d="M-18 12 H18" stroke="#3D8BE0" stroke-width="3"/>`
};
const I=(n,s=40)=>`<svg viewBox="-20 -20 40 40" width="${s}" height="${s}" aria-hidden="true">${IC[n]||''}</svg>`;
const tk=(n,l,s)=>`${I(n,s)}<span>${l}</span>`;
const FC={merah:'#E5484D',biru:'#3D8BE0',kuning:'#F5C518',ungu:'#8E6BD8',putih:'#F7F4EE',hijau:'#3FA34D',oranye:'#F57C00',abu:'#9AA6B2'};
function bunga(c,s=36){return `<svg viewBox="-20 -20 40 40" width="${s}" height="${s}" aria-hidden="true">${[0,72,144,216,288].map(a=>`<circle cx="${(8*Math.cos(a*Math.PI/180)).toFixed(1)}" cy="${(8*Math.sin(a*Math.PI/180)).toFixed(1)}" r="7" fill="${FC[c]}" stroke="rgba(0,0,0,.2)"/>`).join('')}<circle r="5" fill="#F5A623"/><circle r="12" fill="url(#xHi)"/></svg>`}
function stone(c,sh,s=40){const f=FC[c],p=sh==='bulat'?'M0 -12 C10 -12 15 -4 14 4 C13 12 6 14 0 14 C-6 14 -13 12 -14 4 C-15 -4 -10 -12 0 -12Z':'M0 -14 L15 11 Q15 13 12 13 L-12 13 Q-15 13 -15 11 Z';return `<svg viewBox="-20 -20 40 40" width="${s}" height="${s}" aria-hidden="true"><path d="${p}" fill="${f}"/><path d="${p}" fill="url(#xHi)"/><path d="${p}" fill="url(#xShade)" stroke="rgba(0,0,0,.3)"/></svg>`}
function spot(c,s=34){return `<svg viewBox="-20 -20 40 40" width="${s}" height="${s}" aria-hidden="true"><circle r="14" fill="${FC[c]}" stroke="rgba(0,0,0,.25)"/><circle r="14" fill="url(#xHi)"/></svg>`}
function drop(c,s=38){const p='M0 -15 C8 -3 13 3 13 7 a13 13 0 0 1 -26 0 C-13 3 -8 -3 0 -15Z';return `<svg viewBox="-20 -20 40 40" width="${s}" height="${s}" aria-hidden="true"><path d="${p}" fill="${FC[c]}" stroke="rgba(0,0,0,.25)"/><path d="${p}" fill="url(#xHi)"/></svg>`}
function anak(c,h='#2A1A10',s=40){return `<svg viewBox="-20 -20 40 40" width="${s}" height="${s}" aria-hidden="true"><rect x="-11" y="4" width="22" height="16" rx="8" fill="${c}"/><circle cy="-5" r="10" fill="#E8B88A"/><path d="M-10 -7 a10 10 0 0 1 20 0 q-10 -5 -20 0z" fill="${h}"/><circle cx="-3.5" cy="-4" r="1.4" fill="#111"/><circle cx="3.5" cy="-4" r="1.4" fill="#111"/><path d="M-3 1 q3 2.5 6 0" stroke="#111" stroke-width="1.2" fill="none"/></svg>`}
function crate(l,c='#C08A52',s=40){return `<svg viewBox="-20 -20 40 40" width="${s}" height="${s}" aria-hidden="true"><rect x="-15" y="-15" width="30" height="30" rx="3" fill="${c}" stroke="#6B4220" stroke-width="2"/><path d="M-15 -15 L15 15 M15 -15 L-15 15" stroke="#6B4220" stroke-width="1.5" opacity=".35"/><circle r="9" fill="#FFF7DE"/><text y="1" text-anchor="middle" dominant-baseline="central" style="font:900 13px var(--fb);fill:#5A3416">${l}</text></svg>`}
function sack(l,s=42){return `<svg viewBox="-20 -20 40 40" width="${s}" height="${s}" aria-hidden="true">${IC.karung}<text y="4" text-anchor="middle" dominant-baseline="central" style="font:900 12px var(--fb);fill:#5A3416">${l}</text></svg>`}
const TR={kucing:`<ellipse cy="6" rx="8" ry="7" fill="#5A3416"/>${[[-9,-5],[-3,-10],[3,-10],[9,-5]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="3.2" fill="#5A3416"/>`).join('')}`,burung:`<path d="M0 14 V-2 M0 -2 L-10 -14 M0 -2 L0 -16 M0 -2 L10 -14" stroke="#5A3416" stroke-width="3" stroke-linecap="round"/>`,rusa:`<path d="M-2 -14 q-10 6 -8 22 q5 2 8 -2z M2 -14 q10 6 8 22 q-5 2 -8 -2z" fill="#5A3416"/>`,katak:`${[[-10,-10],[10,-10],[-12,8],[12,8]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="3.5" fill="#5A3416"/>`).join('')}<ellipse rx="5" ry="7" fill="#5A3416"/>`,ular:`<path d="M-4 16 q10 -8 0 -16 t0 -16" stroke="#5A3416" stroke-width="4" fill="none" stroke-linecap="round"/>`,bebek:`<path d="M0 14 L-13 -10 Q0 -3 13 -10 Z" fill="#5A3416"/><path d="M0 12 L-6 -6 M0 12 L6 -6" stroke="#F4E3C1" stroke-width="1.4"/>`};
const trk=(n,s=40)=>`<svg viewBox="-20 -20 40 40" width="${s}" height="${s}" aria-hidden="true">${TR[n]}</svg>`;
const HAND=`<svg class="hand" viewBox="0 0 24 28" width="30" aria-hidden="true"><path d="M8 2 a2 2 0 0 1 4 0 v10 l1 -4 a2 2 0 0 1 4 1 v3 a2 2 0 0 1 4 1 v6 q0 6 -6 8 h-6 q-4 -1 -6 -6 l-3 -6 a2 2 0 0 1 3 -2 l3 3 z" fill="#FFF3E0" stroke="#5A3416" stroke-width="1.5"/></svg>`;
const guide=`<svg viewBox="0 0 60 60" width="54" height="54" aria-hidden="true"><circle cx="30" cy="30" r="28" fill="#E3F2DA" stroke="#5E8A3A" stroke-width="3"/><circle cx="30" cy="33" r="16" fill="#C98A5B"/><path d="M14 32 Q14 16 30 16 Q46 16 46 32 Q40 22 30 24 Q20 22 14 32Z" fill="#2A1A10"/><path d="M8 24 Q30 2 52 24 L46 26 Q30 12 14 26Z" fill="#8A6A2A"/><rect x="12" y="23" width="36" height="5" rx="2" fill="#6B5020"/><circle cx="24" cy="34" r="2.3" fill="#1B1B1B"/><circle cx="36" cy="34" r="2.3" fill="#1B1B1B"/><path d="M24 41 q6 5 12 0" stroke="#1B1B1B" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg>`;

/* ---------- mesin seret-dan-lepas ---------- */
function boardHTML(L,T,P,o={}){const tokH=t=>`<div class="tok ${o.m&&t.id in o.m?(o.m[t.id]?'ok':'bad'):''} ${o.sel===t.id?'sel':''} ${o.hand===t.id?'nw':''}" data-k="t${t.id}" data-tok="${t.id}" ${o.static?'':'tabindex="0" role="button"'} aria-label="${t.label||t.type||t.id}">${t.html}${o.hand===t.id?HAND:''}</div>`;
  const S=(id,cls='',inner='',cap=1,attr='')=>`<div class="slot ${cls}" data-slot="${id}" data-cap="${cap}" ${o.static?'':'tabindex="0"'} ${attr}>${inner}${T.filter(t=>P[t.id]===id).map(tokH).join('')}</div>`;
  const rest=T.filter(t=>!P[t.id]);
  return `<div class="board">${L(S,P)}</div>`+(o.noTray?'':`<div class="tray" data-slot="tray" data-cap="99"><span class="tray-l">${o.tray||'Seret dari sini'}</span>${rest.map(tokH).join('')||'<span class="tray-e">semua sudah dipakai</span>'}</div>`)}
function chk(q,P){if(q.chk)return q.chk(P);const m={};let ok=true;
  if(q.ans){q.T.forEach(t=>{const w=q.ans[t.id],s=P[t.id],good=w!==undefined&&(Array.isArray(w)?w.includes(s):w===s);if(s)m[t.id]=good;if(w!==undefined&&!good)ok=false;if(w===undefined&&s)ok=false})}
  else{const fit=(s,t)=>{const w=q.sol[s];return w!==undefined&&(Array.isArray(w)?w.includes(t.type):w===t.type)};q.T.forEach(t=>{const s=P[t.id];if(s)m[t.id]=fit(s,t)});Object.keys(q.sol).forEach(s=>{if(!q.T.some(t=>P[t.id]===s&&fit(s,t)))ok=false});if(Object.values(m).some(v=>!v))ok=false}
  return {ok,m}}
function FR(o,P,cap,x={}){return [`<div class="dnd static">${o.live?`<div class="live">${o.live(P)}</div>`:''}${boardHTML(o.L.bind(o),o.T,P,{static:true,tray:x.tray||'Belum dipakai',...x})}</div>`,cap]}

/* ---------- 20 soal hutan ---------- */
const Q=[
/* 1 */{judul:'Batu Sungai Pipo',konsep:'Klasifikasi',tingkat:'Mudah',
 cerita:'Pipo si monyet mengumpulkan batu sungai yang berwarna-warni. Kak Dara meminta Pipo memasukkan setiap batu ke kotak yang tepat.',
 aturan:['Setiap kotak punya dua ciri: <b>warna</b> (baris) dan <b>bentuk</b> (kolom).','Seret setiap batu ke kotak yang warna <b>dan</b> bentuknya cocok.'],
 tanya:'Seret keenam batu ke kotak yang tepat.',
 T:[['a','merah','bulat'],['b','biru','segitiga'],['c','merah','segitiga'],['d','biru','bulat'],['e','merah','bulat'],['f','biru','segitiga']].map(([id,c,s])=>({id,type:c+s,label:`batu ${c} ${s}`,html:stone(c,s)})),
 ans:{a:'MB',b:'BS',c:'MS',d:'BB',e:'MB',f:'BS'},
 L(S){const h=x=>`<div class="hd">${x}</div>`;return `<div class="grid2">${h('')}${h(stone('abu','bulat',28)+'Bulat')}${h(stone('abu','segitiga',28)+'Segitiga')}${h('<b style="color:#D9403F">Merah</b>')}${S('MB','big','',6)}${S('MS','big','',6)}${h('<b style="color:#2E6FC0">Biru</b>')}${S('BB','big','',6)}${S('BS','big','',6)}</div>`},
 demo(){const o={L:this.L,T:[{id:'x',type:'merahsegitiga',html:stone('merah','segitiga')},{id:'y',type:'birubulat',html:stone('biru','bulat')}]};return [FR(o,{},'Contoh: ada dua batu. Kita taruh di kotak yang cocok.'),FR(o,{},'Ambil batu merah segitiga. Seret dengan jari atau mouse.',{hand:'x'}),FR(o,{x:'MS'},'Warnanya merah, jadi baris <b>Merah</b>. Bentuknya segitiga, jadi kolom <b>Segitiga</b>.',{hand:'x'}),FR(o,{x:'MS'},'Sekarang batu biru bulat.',{hand:'y'}),FR(o,{x:'MS',y:'BB'},'Baris <b>Biru</b>, kolom <b>Bulat</b>. Selesai!',{hand:'y'}),FR(o,{x:'MS',y:'BB'},'Tips: kalau sulit menyeret, <b>ketuk</b> batunya dulu, lalu ketuk kotaknya.')]},
 bahas(){const P={},F=[FR(this,{},'Kita masukkan batu satu per satu.')];[['a','MB','merah bulat'],['b','BS','biru segitiga'],['c','MS','merah segitiga'],['d','BB','biru bulat'],['e','MB','merah bulat'],['f','BS','biru segitiga']].forEach(([id,s,n])=>{P[id]=s;F.push(FR(this,{...P},`Batu ${n} masuk ke kotak <b>${n.replace(' ',' – ')}</b>.`,{hand:id}))});F.push(FR(this,{...P},'Semua batu di kotak yang benar: 2 merah bulat, 1 merah segitiga, 1 biru bulat, 2 biru segitiga.',{m:chk(this,P).m}));return F},
 info:'Mengelompokkan benda dengan dua ciri sekaligus seperti ini adalah cara kerja <b>tabel</b>. Komputer menyusun data dengan baris dan kolom supaya mudah dicari.',kunci:'klasifikasi, tabel'},

/* 2 */{judul:'Barisan Monyet',konsep:'Pengurutan',tingkat:'Mudah',
 cerita:'Lima monyet akan berfoto bersama. Kak Dara ingin mereka berbaris dari yang <b>paling pendek</b> sampai yang <b>paling tinggi</b>.',
 aturan:['Tinggi setiap monyet tertulis di kartunya.','Kotak 1 untuk yang paling pendek, kotak 5 untuk yang paling tinggi.'],
 tanya:'Seret kelima monyet ke barisan yang benar.',
 mk(id,n,h){return {id,type:id,label:`${n} ${h} cm`,html:`${I('monyet',24+h/4)}<span>${n}</span><small>${h} cm</small>`}},
 get T(){return [this.mk('pipo','Pipo',72),this.mk('lulu','Lulu',55),this.mk('bimo','Bimo',90),this.mk('cici','Cici',63),this.mk('dodo','Dodo',81)]},
 ans:{lulu:'p1',cici:'p2',pipo:'p3',dodo:'p4',bimo:'p5'},n:5,
 L(S){return `<div class="lay-row">${Array.from({length:this.n},(_,k)=>S('p'+(k+1),'tall',`<span class="sl">${k+1}</span>`)).join('')}</div><div class="hint">← paling pendek · paling tinggi →</div>`},
 demo(){const o={L:this.L,n:3,T:[this.mk('tito','Tito',80),this.mk('mimi','Mimi',50),this.mk('rio','Rio',65)]};return [FR(o,{},'Contoh: tiga monyet, Tito 80 cm, Mimi 50 cm, Rio 65 cm.'),FR(o,{},'Cari yang <b>paling pendek</b>: Mimi, 50 cm.',{hand:'mimi'}),FR(o,{mimi:'p1'},'Mimi ke kotak 1.',{hand:'mimi'}),FR(o,{mimi:'p1'},'Dari sisanya, yang paling pendek adalah Rio.',{hand:'rio'}),FR(o,{mimi:'p1',rio:'p2'},'Rio ke kotak 2.',{hand:'rio'}),FR(o,{mimi:'p1',rio:'p2',tito:'p3'},'Tito yang tersisa ke kotak 3. Urut!',{hand:'tito'})]},
 bahas(){const P={},F=[FR(this,{},'Setiap kali, cari monyet <b>terpendek</b> dari yang belum berbaris.')];[['lulu','p1','Lulu (55 cm) paling pendek'],['cici','p2','Dari sisanya, Cici (63 cm)'],['pipo','p3','Lalu Pipo (72 cm)'],['dodo','p4','Lalu Dodo (81 cm)'],['bimo','p5','Bimo (90 cm) paling tinggi']].forEach(([id,s,t])=>{P[id]=s;F.push(FR(this,{...P},`${t}, ke kotak ${s[1]}.`,{hand:id}))});F.push(FR(this,{...P},'Urutannya: Lulu, Cici, Pipo, Dodo, Bimo.',{m:chk(this,P).m}));return F},
 info:'Cara "cari yang terkecil, taruh di depan, ulangi" disebut <b>selection sort</b>. Komputer memakai cara seperti ini untuk mengurutkan nama, angka, dan nilai.',kunci:'pengurutan, selection sort'},

/* 3 */{judul:'Kalung Bunga Hutan',konsep:'Pola',tingkat:'Mudah',
 cerita:'Kak Dara merangkai kalung bunga dengan pola yang <b>selalu berulang</b>. Empat bunga terakhir belum dipasang.',
 aturan:['Cari bagian pola yang berulang.','Seret bunga yang tepat ke tempat 9, 10, 11, dan 12. Ada bunga yang tidak terpakai.'],
 tanya:'Lengkapi kalung dengan bunga yang benar.',
 PT:['merah','kuning','kuning','ungu'],
 T:[['f1','merah'],['f2','kuning'],['f3','kuning'],['f4','ungu'],['f5','putih'],['f6','merah']].map(([id,c])=>({id,type:c,label:'bunga '+c,html:bunga(c)})),
 sol:{n9:'merah',n10:'kuning',n11:'kuning',n12:'ungu'},
 L(S){const n=this.nn||12,k=this.kk||8,p=this.PT;return `<div class="neck">${Array.from({length:n},(_,i)=>i<k?`<div class="fixed bead">${bunga(p[i%p.length],34)}<span class="sl">${i+1}</span></div>`:S('n'+(i+1),'bead',`<span class="sl">${i+1}</span>`)).join('')}</div>`},
 demo(){const o={L:this.L,PT:['merah','kuning'],nn:6,kk:4,T:[{id:'a',type:'merah',html:bunga('merah')},{id:'b',type:'kuning',html:bunga('kuning')}]};return [FR(o,{},'Contoh: polanya merah, kuning, merah, kuning, lalu dua tempat kosong.'),FR(o,{},'Yang berulang adalah <b>merah, kuning</b>. Tempat 5 harus merah.',{hand:'a'}),FR(o,{a:'n5'},'Bunga merah ke tempat 5.',{hand:'a'}),FR(o,{a:'n5'},'Tempat 6 harus kuning.',{hand:'b'}),FR(o,{a:'n5',b:'n6'},'Bunga kuning ke tempat 6. Polanya lengkap!',{hand:'b'})]},
 bahas(){const F=[FR(this,{},'Pola yang berulang: <b>merah, kuning, kuning, ungu</b> (4 bunga).')],P={};[['f1','n9','Tempat 9 memulai kelompok ketiga: <b>merah</b>.'],['f2','n10','Tempat 10: <b>kuning</b>.'],['f3','n11','Tempat 11: <b>kuning</b> lagi.'],['f4','n12','Tempat 12: <b>ungu</b>.']].forEach(([id,s,t])=>{P[id]=s;F.push(FR(this,{...P},t,{hand:id}))});F.push(FR(this,{...P},'Kalung lengkap! Bunga putih dan satu bunga merah tidak terpakai.',{m:chk(this,P).m}));return F},
 info:'Menemukan bagian yang berulang disebut <b>mengenali pola</b>. Dengan pola, kita bisa menebak lanjutan tanpa harus melihat semuanya.',kunci:'pola, pengulangan'},

/* 4 */{judul:'Peta Perkemahan',konsep:'Koordinat',tingkat:'Mudah',
 cerita:'Kak Dara menggambar peta perkemahan. Setiap kotak punya nama: <b>huruf kolom</b> lalu <b>angka baris</b>, misalnya C3.',
 aturan:['Tenda dipasang di kotak <b>B4</b>.','Api unggun ada di kolom yang <b>sama</b> dengan tenda, <b>dua kotak di atasnya</b>.','Sumur ada di baris yang <b>sama</b> dengan api unggun, di kolom <b>E</b>.'],
 tanya:'Seret tenda, api unggun, dan sumur ke kotak yang benar.',
 T:[{id:'tenda',type:'tenda',html:tk('tenda','Tenda',34)},{id:'api',type:'api',html:tk('api','Api',34)},{id:'sumur',type:'sumur',html:tk('sumur','Sumur',34)}],
 ans:{tenda:'B4',api:'B2',sumur:'E2'},
 L(S){const C='ABCDE';let g=`<div class="hd"></div>`+[...C].map(c=>`<div class="hd">${c}</div>`).join('');for(let r=1;r<=5;r++){g+=`<div class="hd">${r}</div>`+[...C].map(c=>S(c+r,'cell')).join('')}return `<div class="map5">${g}</div>`},
 demo(){const o={L:this.L,T:[{id:'flag',type:'flag',html:tk('bendera','Bendera',34)}]};return [FR(o,{},'Contoh: di mana kotak <b>C3</b>?'),FR(o,{},'Huruf <b>C</b> adalah kolom. Angka <b>3</b> adalah baris.',{hand:'flag'}),FR(o,{flag:'C3'},'Kolom C dan baris 3 bertemu di sini. Bendera dipasang di C3!',{hand:'flag'}),FR(o,{flag:'C1'},'"Dua kotak di atas C3" artinya tetap di kolom C, naik 2 baris: <b>C1</b>.',{hand:'flag'}),FR(o,{flag:'E1'},'"Baris yang sama, kolom E" artinya tetap di baris 1, geser ke kolom E: <b>E1</b>.',{hand:'flag'})]},
 bahas(){const F=[FR(this,{},'Kerjakan petunjuk satu per satu.')];F.push(FR(this,{tenda:'B4'},'Tenda di <b>B4</b>: kolom B, baris 4.',{hand:'tenda'}),FR(this,{tenda:'B4',api:'B2'},'Api unggun: kolom yang sama (B), dua kotak di atas baris 4, yaitu baris 2. Jadi <b>B2</b>.',{hand:'api'}),FR(this,{tenda:'B4',api:'B2',sumur:'E2'},'Sumur: baris yang sama dengan api unggun (2), kolom E. Jadi <b>E2</b>.',{hand:'sumur'}),FR(this,{tenda:'B4',api:'B2',sumur:'E2'},'Semua benda sudah di tempatnya!',{m:chk(this,{tenda:'B4',api:'B2',sumur:'E2'}).m}));return F},
 info:'Layar komputer tersusun dari titik-titik kecil (piksel). Setiap titik dikenali dengan <b>koordinat</b> kolom dan baris, seperti peta ini.',kunci:'koordinat, peta'},

/* 5 */{judul:'Sayap Kupu-kupu',konsep:'Simetri',tingkat:'Sedang',
 cerita:'Pipo mewarnai kupu-kupu. Sayap kiri sudah diberi bintik. Sayap kanan harus menjadi <b>bayangan cermin</b> sayap kiri.',
 aturan:['Badan kupu-kupu adalah cerminnya.','Bintik yang dekat badan di kiri juga dekat badan di kanan. Bintik yang jauh tetap jauh.','Kotak yang kosong di kiri juga harus kosong di kanan.'],
 tanya:'Seret bintik ke sayap kanan agar kedua sayap simetris.',
 W:[['biru',null,null],[null,'kuning',null],[null,null,'merah'],['biru',null,null]],
 T:[['s1','biru'],['s2','biru'],['s3','kuning'],['s4','merah'],['s5','hijau'],['s6','merah']].map(([id,c])=>({id,type:c,label:'bintik '+c,html:spot(c)})),
 sol:{r02:'biru',r11:'kuning',r20:'merah',r32:'biru'},
 L(S){const W=this.W,n=W.length;let l='',r='';for(let i=0;i<n;i++){for(let c=0;c<3;c++)l+=`<div class="fixed wc">${W[i][c]?spot(W[i][c],30):''}</div>`;for(let c=0;c<3;c++)r+=S(`r${i}${c}`,'wc')}
  return `<div class="bfly"><div class="wing wl" style="grid-template-rows:repeat(${n},auto)">${l}</div><div class="body"><svg viewBox="0 0 20 120" width="18" aria-hidden="true"><ellipse cx="10" cy="60" rx="7" ry="52" fill="#3A2416"/><path d="M8 10 q-6 -10 -2 -14 M12 10 q6 -10 2 -14" stroke="#3A2416" stroke-width="2" fill="none"/></svg></div><div class="wing wr" style="grid-template-rows:repeat(${n},auto)">${r}</div></div>`},
 demo(){const o={L:this.L,W:[['biru',null,'merah']],T:[{id:'a',type:'biru',html:spot('biru')},{id:'b',type:'merah',html:spot('merah')}]};return [FR(o,{},'Contoh: satu baris. Di kiri, biru paling jauh dari badan, merah paling dekat.'),FR(o,{},'Merah dekat badan, jadi di kanan juga dekat badan.',{hand:'b'}),FR(o,{b:'r00'},'Merah ke kotak kanan yang paling dekat badan.',{hand:'b'}),FR(o,{b:'r00'},'Biru jauh dari badan, jadi di kanan juga paling jauh.',{hand:'a'}),FR(o,{b:'r00',a:'r02'},'Simetris! Kotak tengah tetap kosong, sama seperti di kiri.',{hand:'a'})]},
 bahas(){const F=[FR(this,{},'Cerminkan baris demi baris, dari atas ke bawah.')],P={};[['s1','r02','Baris 1: biru paling jauh dari badan, jadi di kanan juga paling jauh (paling kanan).'],['s3','r11','Baris 2: kuning di tengah, jadi di kanan juga di tengah.'],['s4','r20','Baris 3: merah paling dekat badan, jadi di kanan juga paling dekat badan.'],['s2','r32','Baris 4: biru paling jauh lagi, jadi di paling kanan.']].forEach(([id,s,t])=>{P[id]=s;F.push(FR(this,{...P},t,{hand:id}))});F.push(FR(this,{...P},'Kedua sayap simetris. Bintik hijau dan satu bintik merah tidak dipakai.',{m:chk(this,P).m}));return F},
 info:'Program menggambar punya tombol "cerminkan". Komputer menghitung posisi baru dengan aturan seperti ini: jarak ke garis cermin tetap sama.',kunci:'simetri, pencerminan'},

/* 6 */{judul:'Program Pipo',konsep:'Algoritma',tingkat:'Sedang',
 cerita:'Pipo ingin mengambil pisang. Bantu Pipo dengan menyusun <b>program</b> dari kartu panah.',
 aturan:['Setiap kartu panah membuat Pipo pindah <b>satu kotak</b>.','Pipo tidak boleh menabrak batu atau keluar dari peta.','Program harus berisi <b>6</b> kartu dan berakhir tepat di pisang. Ada lebih dari satu jawaban yang benar!'],
 tanya:'Susun 6 kartu panah supaya Pipo sampai di pisang.',
 G:{w:4,h:4,s:[0,3],g:[3,0],rk:['1,3','1,2']},nC:6,
 T:[['u1','↑'],['u2','↑'],['u3','↑'],['r1','→'],['r2','→'],['r3','→'],['d1','↓'],['l1','←']].map(([id,a])=>({id,type:a,label:'panah '+a,html:`<b class="arrowc">${a}</b>`})),
 run(P){const G=this.G,D={'↑':[0,-1],'↓':[0,1],'→':[1,0],'←':[-1,0]};let[x,y]=G.s;const path=[[x,y]],seq=[];let fail=-1;for(let k=1;k<=this.nC;k++){const t=this.T.find(t=>P[t.id]==='c'+k);if(!t){seq.push(null);continue}seq.push(t);if(fail>=0)continue;const[dx,dy]=D[t.type],nx=x+dx,ny=y+dy;if(nx<0||ny<0||nx>=G.w||ny>=G.h||G.rk.includes(nx+','+ny)){fail=k;continue}x=nx;y=ny;path.push([x,y])}return {x,y,path,seq,fail}},
 chk(P){const r=this.run(P),m={};const full=r.seq.every(Boolean),win=full&&r.fail<0&&r.x===this.G.g[0]&&r.y===this.G.g[1];r.seq.forEach((t,k)=>{if(t)m[t.id]=win||(r.fail<0?false:k+1<r.fail)});return {ok:win,m}},
 L(S,P){const G=this.G,c=52,r=this.run(P);let s='';for(let y=0;y<G.h;y++)for(let x=0;x<G.w;x++)s+=`<rect x="${x*c+2}" y="${y*c+2}" width="${c-4}" height="${c-4}" rx="8" fill="#D9EFC8" stroke="#A8CF8A" stroke-width="1.5"/>`;
  G.rk.forEach(k=>{const[x,y]=k.split(',').map(Number);s+=rock(x*c+c/2,y*c+c/2)});
  s+=`<g transform="translate(${G.g[0]*c+c/2} ${G.g[1]*c+c/2})">${IC.pisang}</g>`;
  if(r.path.length>1)s+=`<polyline points="${r.path.map(([x,y])=>`${x*c+c/2},${y*c+c/2}`).join(' ')}" fill="none" stroke="#E8742A" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 8"/>`;
  if(r.fail>0){const t=r.seq[r.fail-1],D={'↑':[0,-1],'↓':[0,1],'→':[1,0],'←':[-1,0]}[t.type];s+=`<g transform="translate(${(r.x+D[0]*.5)*c+c/2} ${(r.y+D[1]*.5)*c+c/2})"><circle r="11" fill="#D94141"/><path d="M-5 -5 l10 10 M5 -5 l-10 10" stroke="#fff" stroke-width="3"/></g>`}
  s+=`<g data-k="pipo"><g transform="translate(${r.x*c+c/2} ${r.y*c+c/2}) scale(1.05)">${IC.monyet}</g></g>`;
  return svgw(G.w*c+4,G.h*c+4,s,G.w*c*1.3)+`<div class="lbl">Program</div><div class="lay-row">${Array.from({length:this.nC},(_,k)=>S('c'+(k+1),'cmd',`<span class="sl">${k+1}</span>`)).join('')}</div>`},
 demo(){const o={L:this.L,run:this.run,nC:4,G:{w:3,h:3,s:[0,2],g:[2,0],rk:[]},T:[['a','→'],['b','→'],['c','↑'],['d','↑']].map(([id,a])=>({id,type:a,html:`<b class="arrowc">${a}</b>`}))};return [FR(o,{},'Contoh: Pipo di kiri bawah, pisang di kanan atas. Ada 4 tempat kartu.'),FR(o,{a:'c1'},'Kartu 1: <b>→</b>. Pipo pindah satu kotak ke kanan.',{hand:'a'}),FR(o,{a:'c1',b:'c2'},'Kartu 2: <b>→</b> lagi.',{hand:'b'}),FR(o,{a:'c1',b:'c2',c:'c3'},'Kartu 3: <b>↑</b>. Pipo naik.',{hand:'c'}),FR(o,{a:'c1',b:'c2',c:'c3',d:'c4'},'Kartu 4: <b>↑</b>. Pipo sampai di pisang!',{hand:'d'}),FR(o,{c:'c1',d:'c2',a:'c3',b:'c4'},'Urutan lain juga bisa: ↑ ↑ → →. Jalannya berbeda, tujuannya sama.')]},
 solve:{u1:'c1',u2:'c2',r1:'c3',r2:'c4',r3:'c5',u3:'c6'},
 bahas(){const F=[FR(this,{},'Kalau langsung ke kanan, Pipo menabrak batu. Jadi Pipo harus naik dulu.')],P={},S=[['u1','c1','↑ naik.'],['u2','c2','↑ naik lagi. Sekarang di atas kedua batu.'],['r1','c3','→ ke kanan.'],['r2','c4','→ ke kanan.'],['r3','c5','→ ke kanan. Pipo di bawah pisang.'],['u3','c6','↑ naik dan sampai di pisang!']];S.forEach(([id,s,t])=>{P[id]=s;F.push(FR(this,{...P},t,{hand:id}))});F.push(FR(this,{...P},'Program ↑ ↑ → → → ↑ berhasil. ↑ ↑ ↑ → → → dan ↑ ↑ → → ↑ → juga benar.',{m:this.chk(P).m}));return F},
 info:'Kartu-kartu yang disusun berurutan ini adalah <b>program</b>. Programmer juga sering menemukan lebih dari satu cara yang benar untuk menyelesaikan masalah.',kunci:'algoritma, pemrograman'},

/* 7 */{judul:'Tumpukan Peti Kemah',konsep:'Stack',tingkat:'Sedang',
 cerita:'Peti perbekalan disusun bertumpuk di tenda. Peti hanya bisa ditaruh di <b>atas</b> tumpukan dan diambil dari <b>atas</b> tumpukan.',
 aturan:['Lakukan perintah dari kiri ke kanan.','<b>Ambil</b> artinya peti paling atas dikeluarkan.','Peti yang sudah dikeluarkan tetap di luar.'],
 tanya:'Seret peti ke tumpukan agar sama dengan hasil akhir semua perintah.',
 OPS:['Masuk A','Masuk B','Ambil','Masuk C','Masuk D','Ambil','Masuk E'],nL:5,
 T:'ABCDE'.split('').map((l,i)=>({id:l,type:l,label:'peti '+l,html:crate(l,['#C08A52','#B5763F','#A9713E','#C99A5B','#B88A4A'][i])})),
 sol:{L1:'A',L2:'C',L3:'E'},
 L(S){return `<div class="chips">${this.OPS.map(o=>`<span class="chip">${o}</span>`).join('')}</div><div class="stackw"><div class="stack">${Array.from({length:this.nL},(_,k)=>S('L'+(k+1),'lvl',`<span class="sl">${k+1}</span>`)).join('')}</div><div class="hint">↑ atas<br><br><br>↓ dasar</div></div>`},
 demo(){const o={L:this.L,OPS:['Masuk X','Masuk Y','Ambil'],nL:3,T:[{id:'X',type:'X',html:crate('X')},{id:'Y',type:'Y',html:crate('Y','#A9713E')}]};return [FR(o,{},'Contoh: tiga perintah. Masuk X, Masuk Y, lalu Ambil.'),FR(o,{X:'L1'},'<b>Masuk X</b>: X di dasar tumpukan.',{hand:'X'}),FR(o,{X:'L1',Y:'L2'},'<b>Masuk Y</b>: Y di atas X.',{hand:'Y'}),FR(o,{X:'L1'},'<b>Ambil</b>: yang keluar adalah Y, karena Y paling atas.',{hand:'Y'}),FR(o,{X:'L1'},'Hasil akhir: hanya X di tumpukan. Y tetap di luar.')]},
 bahas(){const S=[[{A:'L1'},'Masuk A: A di dasar.','A'],[{A:'L1',B:'L2'},'Masuk B: B di atas A.','B'],[{A:'L1'},'Ambil: B keluar.','B'],[{A:'L1',C:'L2'},'Masuk C: C di atas A.','C'],[{A:'L1',C:'L2',D:'L3'},'Masuk D: D di atas C.','D'],[{A:'L1',C:'L2'},'Ambil: D keluar.','D'],[{A:'L1',C:'L2',E:'L3'},'Masuk E: E di atas C.','E']];const F=[FR(this,{},'Ikuti perintah satu per satu.')];S.forEach(([P,t,h])=>F.push(FR(this,P,t,{hand:h})));const P={A:'L1',C:'L2',E:'L3'};F.push(FR(this,P,'Hasil akhir dari bawah: <b>A, C, E</b>. B dan D sudah dikeluarkan.',{m:chk(this,P).m}));return F},
 info:'Tumpukan seperti ini disebut <b>stack</b>: yang terakhir masuk, pertama keluar. Tombol "undo" di komputer bekerja dengan stack.',kunci:'stack, tumpukan'},

/* 8 */{judul:'Jejak Sandi Hutan',konsep:'Sandi',tingkat:'Sedang',
 cerita:'Kak Dara menemukan jejak-jejak hewan di lumpur. Ternyata setiap jejak adalah <b>huruf rahasia</b>!',
 aturan:['Lihat tabel sandi: setiap jejak berarti satu huruf.','Seret huruf yang benar ke bawah setiap jejak. Ada huruf yang tidak terpakai.'],
 tanya:'Pecahkan pesan jejak dengan menyeret huruf yang benar.',
 KEY:[['kucing','A'],['bebek','G'],['burung','I'],['katak','N'],['rusa','P'],['ular','S']],MSG:['rusa','burung','ular','kucing','katak','bebek'],
 T:'PISANGKU'.split('').map((l,i)=>({id:'h'+i,type:l,label:'huruf '+l,html:`<b class="letter">${l}</b>`})),
 sol:{m1:'P',m2:'I',m3:'S',m4:'A',m5:'N',m6:'G'},
 L(S){return `<div class="keyt">${this.KEY.map(([t,l])=>`<div class="kc">${trk(t,30)}<b>${l}</b></div>`).join('')}</div><div class="lbl">Pesan jejak</div><div class="lay-row">${this.MSG.map((t,k)=>`<div class="col">${trk(t,36)}${S('m'+(k+1),'cell')}</div>`).join('')}</div>`},
 demo(){const o={L:this.L,KEY:this.KEY,MSG:['kucing','rusa','burung'],T:'AP'.split('').concat(['I']).map((l,i)=>({id:'d'+i,type:l,html:`<b class="letter">${l}</b>`}))};return [FR(o,{},'Contoh: pesan tiga jejak.'),FR(o,{d0:'m1'},'Jejak pertama adalah jejak kucing. Di tabel, kucing = <b>A</b>.',{hand:'d0'}),FR(o,{d0:'m1',d1:'m2'},'Jejak rusa = <b>P</b>.',{hand:'d1'}),FR(o,{d0:'m1',d1:'m2',d2:'m3'},'Jejak burung = <b>I</b>.',{hand:'d2'}),FR(o,{d0:'m1',d1:'m2',d2:'m3'},'Pesannya: <b>API</b>!')]},
 bahas(){const F=[FR(this,{},'Cocokkan setiap jejak dengan tabel sandi.')],P={};[['h0','m1','Rusa = P.'],['h1','m2','Burung = I.'],['h2','m3','Ular = S.'],['h3','m4','Kucing = A.'],['h4','m5','Katak = N.'],['h5','m6','Bebek = G.']].forEach(([id,s,t])=>{P[id]=s;F.push(FR(this,{...P},t,{hand:id}))});F.push(FR(this,{...P},'Pesannya: <b>PISANG</b>! Huruf K dan U tidak terpakai.',{m:chk(this,P).m}));return F},
 info:'Mengganti huruf dengan simbol lain disebut <b>penyandian</b>. Komputer menyandikan pesan agar hanya orang yang punya "tabel kunci" yang bisa membacanya.',kunci:'sandi, enkripsi'},

/* 9 */{judul:'Pohon Tebak Hewan',konsep:'Pohon Keputusan',tingkat:'Sedang',
 cerita:'Kak Dara membuat diagram pertanyaan untuk mengenali hewan hutan. Bantu Pipo menaruh setiap hewan di ujung yang tepat.',
 aturan:['Mulai dari pertanyaan paling atas.','Ikuti <b>Ya</b> ke kiri dan <b>Tidak</b> ke kanan sampai ke kotak paling bawah.'],
 tanya:'Seret setiap hewan ke kotak ujung yang benar.',
 T:[['kelelawar','Kelelawar'],['burung','Burung'],['ikan','Ikan'],['gajah','Gajah']].map(([id,n])=>({id,type:id,label:n,html:tk(id,n,34)})),
 ans:{kelelawar:'L1',burung:'L2',ikan:'L3',gajah:'L4'},
 Qs:['Bisa terbang?','Aktif di malam hari?','Hidup di air?'],
 L(S){const q=(t,sp)=>`<div class="qbox" style="grid-column:span ${sp}">${t}<small><span>↙ Ya</span><span>Tidak ↘</span></small></div>`,[a,b,c]=this.Qs;return this.small?`<div class="tree t2">${q(a,2)}${S('L1','leaf','<span class="sl">Ya</span>')}${S('L2','leaf','<span class="sl">Tidak</span>')}</div>`:`<div class="tree">${q(a,4)}${q(b,2)}${q(c,2)}${S('L1','leaf')}${S('L2','leaf')}${S('L3','leaf')}${S('L4','leaf')}</div>`},
 demo(){const o={L:this.L,Qs:this.Qs,small:1,T:[{id:'kupu',type:'kupu',html:tk('kupu','Kupu-kupu',34)},{id:'kura',type:'kura',html:tk('kura','Kura-kura',34)}]};return [FR(o,{},'Contoh: diagram dengan satu pertanyaan.'),FR(o,{},'Kupu-kupu: bisa terbang? <b>Ya</b>.',{hand:'kupu'}),FR(o,{kupu:'L1'},'Jadi kupu-kupu ke kotak <b>Ya</b>.',{hand:'kupu'}),FR(o,{kupu:'L1'},'Kura-kura: bisa terbang? <b>Tidak</b>.',{hand:'kura'}),FR(o,{kupu:'L1',kura:'L2'},'Jadi kura-kura ke kotak <b>Tidak</b>.',{hand:'kura'})]},
 bahas(){const F=[FR(this,{},'Tanyakan pertanyaan dari atas untuk setiap hewan.')],P={};[['kelelawar','L1','Kelelawar: terbang? Ya. Aktif malam? Ya. Kotak 1.'],['burung','L2','Burung: terbang? Ya. Aktif malam? Tidak. Kotak 2.'],['ikan','L3','Ikan: terbang? Tidak. Hidup di air? Ya. Kotak 3.'],['gajah','L4','Gajah: terbang? Tidak. Hidup di air? Tidak. Kotak 4.']].forEach(([id,s,t])=>{P[id]=s;F.push(FR(this,{...P},t,{hand:id}))});F.push(FR(this,{...P},'Setiap hewan punya tempat tepat satu di ujung pohon.',{m:chk(this,P).m}));return F},
 info:'Diagram ini disebut <b>pohon keputusan</b>. Dengan beberapa pertanyaan Ya/Tidak, komputer bisa mengenali banyak hal, misalnya jenis tanaman dari fotonya.',kunci:'pohon keputusan, klasifikasi'},

/* 10 */{judul:'Lingkaran Hewan',konsep:'Diagram Venn',tingkat:'Sedang',
 cerita:'Kak Dara menggambar dua lingkaran. Lingkaran kiri untuk hewan yang <b>bisa terbang</b>. Lingkaran kanan untuk hewan yang <b>bisa berenang</b>.',
 aturan:['Hewan yang bisa terbang <b>dan</b> berenang masuk ke bagian tengah.','Hewan yang tidak bisa keduanya masuk ke kotak di luar lingkaran.'],
 tanya:'Seret setiap hewan ke bagian yang benar.',
 T:[['elang','Elang'],['kupu','Kupu-kupu'],['bebek','Bebek'],['ikan','Ikan'],['kura','Kura-kura'],['siput','Siput']].map(([id,n])=>({id,type:id,label:n,html:tk(id,n,32)})),
 ans:{elang:'T',kupu:'T',bebek:'TB',ikan:'B',kura:'B',siput:'X'},
 L(S){return `<div class="venn"><div class="vc vl"><span>Bisa terbang</span></div><div class="vc vr"><span>Bisa berenang</span></div>${S('T','vs vs1','',4)}${S('TB','vs vs2','',4)}${S('B','vs vs3','',4)}</div>${S('X','big outbox','<span class="sl">Bukan keduanya</span>',4)}`},
 demo(){const o={L:this.L,T:[{id:'bebek',type:'bebek',html:tk('bebek','Bebek',32)},{id:'siput',type:'siput',html:tk('siput','Siput',32)}]};return [FR(o,{},'Contoh: bebek dan siput.'),FR(o,{},'Bebek bisa terbang? <b>Ya</b>. Bisa berenang? <b>Ya</b>.',{hand:'bebek'}),FR(o,{bebek:'TB'},'Dua-duanya ya, jadi bebek masuk ke <b>bagian tengah</b>.',{hand:'bebek'}),FR(o,{bebek:'TB'},'Siput bisa terbang? Tidak. Bisa berenang? Tidak.',{hand:'siput'}),FR(o,{bebek:'TB',siput:'X'},'Siput masuk ke kotak <b>Bukan keduanya</b>.',{hand:'siput'})]},
 bahas(){const F=[FR(this,{},'Tanyakan dua pertanyaan untuk setiap hewan.')],P={};[['elang','T','Elang terbang, tidak berenang: lingkaran kiri saja.'],['kupu','T','Kupu-kupu juga terbang saja.'],['bebek','TB','Bebek terbang dan berenang: bagian tengah.'],['ikan','B','Ikan berenang saja: lingkaran kanan.'],['kura','B','Kura-kura berenang, tidak terbang: lingkaran kanan.'],['siput','X','Siput tidak terbang dan tidak berenang: di luar.']].forEach(([id,s,t])=>{P[id]=s;F.push(FR(this,{...P},t,{hand:id}))});F.push(FR(this,{...P},'Semua hewan sudah di tempatnya!',{m:chk(this,P).m}));return F},
 info:'Gambar dua lingkaran ini disebut <b>diagram Venn</b>. Saat kamu mencari barang dengan dua syarat di toko online, komputer mencari bagian tengahnya.',kunci:'diagram Venn, himpunan'},

/* 11 */{judul:'Kebun Bunga Warna-warni',konsep:'Pewarnaan Graf',tingkat:'Sedang',
 cerita:'Kak Dara punya lima petak kebun. Garis menghubungkan petak yang <b>bersebelahan</b>. Setiap petak ditanami bunga dengan satu warna.',
 aturan:['Dua petak yang terhubung garis harus berbeda warna.','Ada cat merah, biru, dan kuning (masing-masing 2). Kamu tidak harus memakai semuanya.'],
 tanya:'Seret cat ke kelima petak. Petak yang bersebelahan harus berbeda warna.',
 NP:{A:[18,18],B:[82,18],C:[82,82],D:[18,82],E:[50,50]},NE:[['A','B'],['B','C'],['C','D'],['D','A'],['E','A'],['E','B'],['E','C'],['E','D']],
 T:[['p1','merah'],['p2','merah'],['p3','biru'],['p4','biru'],['p5','kuning'],['p6','kuning']].map(([id,c])=>({id,type:c,label:'cat '+c,html:drop(c)})),
 chk(P){const col={};this.T.forEach(t=>{if(P[t.id]&&P[t.id]!=='tray')col[P[t.id]]=t.type});const m={};let ok=Object.keys(this.NP).every(k=>col[k]);this.T.forEach(t=>{const s=P[t.id];if(!s)return;const bad=this.NE.some(([a,b])=>(a===s&&col[b]===t.type)||(b===s&&col[a]===t.type));m[t.id]=!bad;if(bad)ok=false});return {ok,m}},
 solve:{p1:'A',p2:'C',p3:'B',p4:'D',p5:'E'},
 L(S){const N=this.NP;return `<div class="gwrap" style="height:${this.h||300}px"><svg class="glines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${this.NE.map(([a,b])=>`<line x1="${N[a][0]}" y1="${N[a][1]}" x2="${N[b][0]}" y2="${N[b][1]}" stroke="#8B6A3A" stroke-width="1.2" vector-effect="non-scaling-stroke" stroke-dasharray="5 4"/>`).join('')}</svg>${Object.entries(N).map(([k,[x,y]])=>S(k,'bed',`<span class="sl">${k}</span>`,1,`style="left:${x}%;top:${y}%"`)).join('')}</div>`},
 demo(){const o={L:this.L,h:180,NP:{X:[15,50],Y:[50,50],Z:[85,50]},NE:[['X','Y'],['Y','Z']],T:[['a','merah'],['b','biru'],['c','merah']].map(([id,c])=>({id,type:c,html:drop(c)}))};return [FR(o,{},'Contoh: tiga petak berderet. X bersebelahan dengan Y, Y dengan Z.'),FR(o,{a:'X'},'X diberi cat merah.',{hand:'a'}),FR(o,{a:'X',b:'Y'},'Y bersebelahan dengan X, jadi harus berbeda: biru.',{hand:'b'}),FR(o,{a:'X',b:'Y',c:'Z'},'Z hanya bersebelahan dengan Y, tidak dengan X. Jadi Z boleh merah lagi!',{hand:'c'}),FR(o,{a:'X',b:'Y',c:'Z'},'Cukup dua warna untuk tiga petak ini.')]},
 bahas(){const F=[FR(this,{},'Petak E di tengah bersebelahan dengan <b>semua</b> petak lain.')],P={};[['p5','E','Jadi E diberi warna yang tidak dipakai petak lain: kuning.'],['p1','A','A diberi merah.'],['p3','B','B bersebelahan dengan A, jadi biru.'],['p2','C','C bersebelahan dengan B dan D, tetapi tidak dengan A. C boleh merah.'],['p4','D','D bersebelahan dengan A dan C (merah), jadi biru.']].forEach(([id,s,t])=>{P[id]=s;F.push(FR(this,{...P},t,{hand:id}))});F.push(FR(this,{...P},'Semua petak yang bersebelahan berbeda warna. Ada cara lain yang juga benar, misalnya menukar merah dan biru.',{m:this.chk(P).m}));return F},
 info:'Masalah ini disebut <b>pewarnaan graf</b>. Sekolah memakainya untuk menyusun jadwal ujian supaya dua ujian yang diikuti siswa yang sama tidak bertabrakan.',kunci:'pewarnaan graf'},

/* 12 */{judul:'Podium Karung Buah',konsep:'Logika Urutan',tingkat:'Sedang',
 cerita:'Ada empat karung buah: P, Q, R, dan S. Pipo menimbangnya berpasangan. Sisi timbangan yang <b>turun</b> lebih berat.',
 aturan:['Lihat ketiga timbangan.','Seret karung ke podium: 1 untuk yang <b>paling berat</b>, 4 untuk yang paling ringan.'],
 tanya:'Susun karung dari yang paling berat ke yang paling ringan.',
 BAL:[[['P','#C9A26A'],['Q','#C9A26A'],-1],[['P','#C9A26A'],['R','#C9A26A'],1],[['S','#C9A26A'],['Q','#C9A26A'],1]],nP:4,
 T:'PQRS'.split('').map(l=>({id:l,type:l,label:'karung '+l,html:sack(l)})),
 ans:{R:'k1',P:'k2',Q:'k3',S:'k4'},
 L(S){return `<div class="lay-row">${this.BAL.map(([a,b,t])=>scaleSvg(a,b,t).replace('width="190"','width="150"')).join('')}</div><div class="podium">${Array.from({length:this.nP},(_,k)=>S('k'+(k+1),'pod',`<span class="sl">${k+1}</span>`,1,`style="--h:${(this.nP-k)*14+30}px"`)).join('')}</div><div class="hint">← paling berat · paling ringan →</div>`},
 demo(){const o={L:this.L,nP:3,BAL:[[['X','#C9A26A'],['Y','#C9A26A'],-1],[['X','#C9A26A'],['Z','#C9A26A'],1]],T:'XYZ'.split('').map(l=>({id:l,type:l,html:sack(l)}))};return [FR(o,{},'Contoh: timbangan 1, X turun, jadi X lebih berat dari Y.'),FR(o,{},'Timbangan 2: Z turun, jadi Z lebih berat dari X.'),FR(o,{Z:'k1'},'Z lebih berat dari X, dan X lebih berat dari Y. Z paling berat.',{hand:'Z'}),FR(o,{Z:'k1',X:'k2'},'X di tengah.',{hand:'X'}),FR(o,{Z:'k1',X:'k2',Y:'k3'},'Y paling ringan.',{hand:'Y'})]},
 bahas(){const F=[FR(this,{},'Timbangan 1: P lebih berat dari Q. Timbangan 2: R lebih berat dari P. Timbangan 3: Q lebih berat dari S.')],P={};[['R','k1','Sambungkan: R > P > Q > S. R paling berat.'],['P','k2','Lalu P.'],['Q','k3','Lalu Q.'],['S','k4','S paling ringan.']].forEach(([id,s,t])=>{P[id]=s;F.push(FR(this,{...P},t,{hand:id}))});F.push(FR(this,{...P},'Urutannya R, P, Q, S, walaupun R tidak pernah ditimbang bersama S.',{m:chk(this,P).m}));return F},
 info:'Menyambung perbandingan seperti "R > P dan P > Q, jadi R > Q" adalah cara komputer <b>mengurutkan</b> data tanpa membandingkan semua pasangan.',kunci:'perbandingan, penalaran'},

/* 13 */{judul:'Lampu Angka Pondok',konsep:'Bilangan Biner',tingkat:'Sedang',
 cerita:'Pondok Kak Dara punya papan lima lampu. Setiap lampu punya nilai. Angka yang ditunjukkan papan adalah <b>jumlah nilai lampu yang menyala</b>.',
 aturan:['Nilai lampu dari kiri: 16, 8, 4, 2, 1.','Seret lampu menyala ke tempat yang tepat sampai jumlahnya <b>13</b>.','Satu tempat hanya muat satu lampu.'],
 tanya:'Nyalakan lampu sampai papan menunjukkan angka 13.',
 V:[16,8,4,2,1],target:13,
 T:[1,2,3,4,5].map(k=>({id:'b'+k,type:'lampu',label:'lampu',html:I('lampu',38)})),
 sol:{s8:'lampu',s4:'lampu',s1:'lampu'},
 sum(P){return this.V.filter(v=>this.T.some(t=>P[t.id]==='s'+v)).reduce((a,b)=>a+b,0)},
 live(P){const s=this.sum(P),ok=s===this.target;return `<span class="meter ${ok?'good':s>this.target?'over':''}">Jumlah: <b>${s}</b> / target ${this.target}</span>`},
 L(S){return `<div class="lay-row lamps">${this.V.map(v=>`<div class="col"><b class="val">${v}</b>${S('s'+v,'sock')}</div>`).join('')}</div>`},
 demo(){const o={L:this.L,V:[4,2,1],target:5,sum:this.sum,live:this.live,T:[1,2,3].map(k=>({id:'x'+k,type:'lampu',html:I('lampu',38)}))};return [FR(o,{},'Contoh: tiga tempat lampu bernilai 4, 2, 1. Target: 5.'),FR(o,{x1:'s4'},'Nyalakan lampu 4. Jumlahnya 4. Masih kurang 1.',{hand:'x1'}),FR(o,{x1:'s4',x2:'s2'},'Kalau lampu 2 dinyalakan, jumlahnya 6. Kelebihan!',{hand:'x2'}),FR(o,{x1:'s4',x2:'s1'},'Pindahkan ke lampu 1. Jumlahnya 4 + 1 = <b>5</b>. Tepat!',{hand:'x2'})]},
 bahas(){return [FR(this,{},'Mulai dari lampu bernilai terbesar.'),FR(this,{},'16 lebih besar dari 13, jadi lampu 16 tetap mati.'),FR(this,{b1:'s8'},'Nyalakan 8. Sisa yang dibutuhkan: 13 − 8 = 5.',{hand:'b1'}),FR(this,{b1:'s8',b2:'s4'},'Nyalakan 4. Sisa: 5 − 4 = 1.',{hand:'b2'}),FR(this,{b1:'s8',b2:'s4'},'2 lebih besar dari sisa 1, jadi lampu 2 tetap mati.'),FR(this,{b1:'s8',b2:'s4',b3:'s1'},'Nyalakan 1. Sisa 0. 8 + 4 + 1 = <b>13</b>!',{hand:'b3'}),FR(this,{b1:'s8',b2:'s4',b3:'s1'},'Pola lampunya: mati, nyala, nyala, mati, nyala. Dalam biner, 13 ditulis <b>01101</b>.',{m:chk(this,{b1:'s8',b2:'s4',b3:'s1'}).m})]},
 info:'Komputer menyimpan semua angka dengan <b>bilangan biner</b>: setiap lampu bernilai 0 (mati) atau 1 (menyala).',kunci:'bilangan biner, bit'},

/* 14 */{judul:'Keranjang Buah Terbaik',konsep:'Optimasi',tingkat:'Sulit',
 cerita:'Pipo boleh membawa buah ke pondok dengan keranjang yang kuat menahan <b>8 kg</b>. Setiap buah punya berat dan nilai koin.',
 aturan:['Berat total di keranjang tidak boleh lebih dari 8 kg.','Cari gabungan buah dengan nilai koin <b>paling banyak</b>.','Lihat meteran berat dan koin di atas papan.'],
 tanya:'Seret buah ke keranjang agar nilainya paling banyak, tanpa melebihi 8 kg.',
 K:{semangka:[5,7],nanas:[3,5],mangga:[2,4],kelapa:[4,5],pisang:[1,2]},lim:8,
 get T(){return Object.entries(this.K).map(([n,[kg,ko]])=>({id:n,type:n,label:`${n} ${kg} kg ${ko} koin`,html:`${I(n,34)}<span>${n[0].toUpperCase()+n.slice(1)}</span><small>${kg} kg · ${ko} koin</small>`}))},
 ans:{semangka:'bag',mangga:'bag',pisang:'bag'},
 tot(P){let w=0,v=0;Object.entries(this.K).forEach(([n,[kg,ko]])=>{if(P[n]==='bag'){w+=kg;v+=ko}});return [w,v]},
 live(P){const[w,v]=this.tot(P);return `<span class="meter ${w>this.lim?'over':''}">Berat: <b>${w}</b> / ${this.lim} kg</span><span class="meter good">Nilai: <b>${v}</b> koin</span>`},
 L(S){return S('bag','basket','<span class="sl">Keranjang (maks '+this.lim+' kg)</span>',6)},
 demo(){const o={L:this.L,lim:4,K:{teko:[3,4],lampu:[2,3],sisir:[2,3]},tot:this.tot,live:this.live,T:[['teko','Ember',3,4,'kelapa'],['lampu','Jeruk',2,3,'mangga'],['sisir','Apel',2,3,'pisang']].map(([id,n,kg,ko,ic])=>({id,type:id,html:`${I(ic,30)}<span>${n}</span><small>${kg} kg · ${ko} koin</small>`}))};return [FR(o,{},'Contoh: keranjang hanya kuat 4 kg.'),FR(o,{teko:'bag'},'Masukkan Ember (3 kg, 4 koin). Sisa 1 kg, tidak ada yang muat lagi.',{hand:'teko'}),FR(o,{teko:'bag',lampu:'bag'},'Tambah Jeruk? 3 + 2 = 5 kg. <b>Terlalu berat!</b>',{hand:'lampu'}),FR(o,{lampu:'bag',sisir:'bag'},'Coba Jeruk + Apel: 4 kg, pas. Nilainya 3 + 3 = <b>6 koin</b>, lebih banyak!',{hand:'sisir'})]},
 bahas(){const f=(P,t,h)=>FR(this,P,t,{hand:h});return [f({},'Coba beberapa gabungan dan bandingkan nilainya.'),f({semangka:'bag',nanas:'bag'},'Semangka + Nanas: 8 kg, nilainya 7 + 5 = 12 koin.','nanas'),f({nanas:'bag',kelapa:'bag',pisang:'bag'},'Nanas + Kelapa + Pisang: 8 kg, nilainya 12 koin.','kelapa'),f({semangka:'bag',mangga:'bag'},'Semangka + Mangga: 7 kg, 11 koin. Masih ada sisa 1 kg…','mangga'),f({semangka:'bag',mangga:'bag',pisang:'bag'},'…cukup untuk Pisang! 8 kg, nilainya 7 + 4 + 2 = <b>13 koin</b>.','pisang'),FR(this,{semangka:'bag',mangga:'bag',pisang:'bag'},'13 koin adalah yang paling banyak. Mengisi sisa ruang dengan buah kecil ternyata penting!',{m:chk(this,{semangka:'bag',mangga:'bag',pisang:'bag'}).m})]},
 info:'Masalah ini disebut <b>masalah ransel</b> (knapsack). Perusahaan pengiriman memakainya untuk mengisi truk sepenuh dan semenguntungkan mungkin.',kunci:'optimasi, masalah ransel'},

/* 15 */{judul:'Jadwal Penjaga Hutan',konsep:'Pemasangan',tingkat:'Sedang',
 cerita:'Empat penjaga hutan akan berjaga di empat pos. Setiap penjaga hanya mau berjaga di pos tertentu.',
 aturan:['Ana: Menara atau Sungai. Budi: hanya Menara. Cici: Gua atau Jembatan. Dedi: Sungai atau Gua.','Setiap pos dijaga tepat satu penjaga.','Tips: mulai dari penjaga yang pilihannya paling sedikit.'],
 tanya:'Seret setiap penjaga ke pos yang tepat.',
 T:[['ana','Ana','#F2708A','#2A1A10'],['budi','Budi','#3D8BE0','#5A3A1E'],['cici','Cici','#8E6BD8','#1B1B1B'],['dedi','Dedi','#3FA34D','#3A2416']].map(([id,n,c,h])=>({id,type:id,label:n,html:`${anak(c,h,34)}<span>${n}</span>`})),
 ans:{budi:'menara',ana:'sungai',dedi:'gua',cici:'jembatan'},
 PO:[['menara','Menara'],['sungai','Sungai'],['gua','Gua'],['jembatan','Jembatan']],
 L(S){return `<div class="lay-row">${this.PO.map(([id,n])=>`<div class="col">${I(id,40)}<b class="pn">${n}</b>${S(id,'tall')}</div>`).join('')}</div>`},
 demo(){const o={L:this.L,PO:[['menara','Menara'],['sungai','Sungai']],T:[{id:'eka',type:'eka',html:`${anak('#F57C00','#2A1A10',34)}<span>Eka</span>`},{id:'fani',type:'fani',html:`${anak('#13B5A6','#1B1B1B',34)}<span>Fani</span>`}]};return [FR(o,{},'Contoh: Eka mau di Menara atau Sungai. Fani hanya mau di Sungai.'),FR(o,{fani:'sungai'},'Mulai dari yang pilihannya cuma satu: Fani ke <b>Sungai</b>.',{hand:'fani'}),FR(o,{fani:'sungai',eka:'menara'},'Sungai sudah dijaga, jadi Eka ke <b>Menara</b>.',{hand:'eka'})]},
 bahas(){const F=[FR(this,{},'Budi hanya punya satu pilihan, jadi mulai dari Budi.')],P={};[['budi','menara','Budi ke <b>Menara</b>.'],['ana','sungai','Ana: Menara sudah dijaga, jadi <b>Sungai</b>.'],['dedi','gua','Dedi: Sungai sudah dijaga, jadi <b>Gua</b>.'],['cici','jembatan','Cici: Gua sudah dijaga, jadi <b>Jembatan</b>.']].forEach(([id,s,t])=>{P[id]=s;F.push(FR(this,{...P},t,{hand:id}))});F.push(FR(this,{...P},'Setiap pos dijaga, dan setiap penjaga senang.',{m:chk(this,P).m}));return F},
 info:'Mencocokkan pasangan seperti ini disebut <b>pemasangan</b> (matching). Komputer memakainya untuk membagi jadwal dokter, kursi pesawat, atau ojek ke penumpang.',kunci:'pemasangan, deduksi'},

/* 16 */{judul:'Membangun Pondok',konsep:'Urutan Tugas',tingkat:'Sedang',
 cerita:'Kak Dara dan Pipo membangun pondok di hutan. Ada lima pekerjaan, dan beberapa harus menunggu pekerjaan lain selesai.',
 aturan:['Tiang dipasang setelah kayu terkumpul.','Lantai dan atap dipasang setelah tiang berdiri.','Pondok dihias setelah lantai <b>dan</b> atap selesai.'],
 tanya:'Susun kelima pekerjaan dalam urutan yang boleh dilakukan.',
 DEP:{kayu:[],tiang:['kayu'],lantai:['tiang'],atap:['tiang'],hias:['lantai','atap']},nS:5,
 T:[['kayu','Kumpulkan kayu'],['tiang','Pasang tiang'],['lantai','Pasang lantai'],['atap','Pasang atap'],['hias','Hias pondok']].map(([id,n])=>({id,type:id,label:n,html:`${I(id,30)}<span>${n}</span>`})),
 chk(P){const pos={},m={};this.T.forEach(t=>{const s=P[t.id];if(s&&s[0]==='t')pos[t.id]=+s.slice(1)});let ok=this.T.every(t=>pos[t.id]);this.T.forEach(t=>{if(!pos[t.id])return;const good=this.DEP[t.id].every(d=>pos[d]&&pos[d]<pos[t.id]);m[t.id]=good;if(!good)ok=false});return {ok,m}},
 solve:{kayu:'t1',tiang:'t2',lantai:'t3',atap:'t4',hias:'t5'},
 L(S){return `<div class="lay-row tl">${Array.from({length:this.nS},(_,k)=>S('t'+(k+1),'task',`<span class="sl">${k+1}</span>`)).join('<span class="arw">→</span>')}</div>`},
 demo(){const o={L:this.L,nS:3,DEP:{petik:[],cuci:['petik'],makan:['cuci']},T:[['makan','Makan buah','pisang'],['petik','Petik buah','daun'],['cuci','Cuci buah','sungai']].map(([id,n,ic])=>({id,type:id,html:`${I(ic,30)}<span>${n}</span>`}))};o.chk=this.chk;return [FR(o,{},'Contoh: memetik, mencuci, lalu memakan buah.'),FR(o,{petik:'t1'},'Buah harus dipetik dulu.',{hand:'petik'}),FR(o,{petik:'t1',cuci:'t2'},'Setelah dipetik, buah dicuci.',{hand:'cuci'}),FR(o,{petik:'t1',cuci:'t2',makan:'t3'},'Baru buah dimakan.',{hand:'makan'}),FR(o,{petik:'t1',makan:'t2',cuci:'t3'},'Kalau dimakan sebelum dicuci? Tidak boleh!',{m:{petik:true,makan:false,cuci:true}})]},
 bahas(){const F=[FR(this,{},'Cari pekerjaan yang tidak menunggu apa pun.')],P={};[['kayu','t1','Kumpulkan kayu: tidak menunggu apa pun. Pertama!'],['tiang','t2','Tiang menunggu kayu. Kayu sudah, jadi tiang kedua.'],['lantai','t3','Lantai menunggu tiang. Sudah, jadi lantai.'],['atap','t4','Atap juga menunggu tiang. Atap boleh sebelum atau sesudah lantai.'],['hias','t5','Hias menunggu lantai dan atap. Keduanya sudah, jadi hias terakhir.']].forEach(([id,s,t])=>{P[id]=s;F.push(FR(this,{...P},t,{hand:id}))});F.push(FR(this,{...P},'Ada dua urutan yang benar: lantai lalu atap, atau atap lalu lantai.',{m:this.chk(P).m}));return F},
 info:'Menyusun urutan pekerjaan yang saling menunggu disebut <b>pengurutan topologis</b>. Komputer memakainya untuk menentukan program mana yang harus dipasang lebih dulu.',kunci:'urutan tugas, ketergantungan'},

/* 17 */{judul:'Mesin Angka Ajaib',konsep:'Fungsi',tingkat:'Sedang',
 cerita:'Pipo menemukan mesin ajaib di hutan. Setiap angka yang masuk akan <b>dikali 2, lalu ditambah 1</b>.',
 aturan:['Hitung keluaran untuk setiap angka masuk.','Seret kartu angka yang benar ke kotak keluaran. Ada kartu jebakan!'],
 tanya:'Seret keluaran yang benar untuk setiap angka.',
 IN:[1,3,5,0],
 T:[3,7,11,1,6,10].map(v=>({id:'v'+v,type:String(v),label:'angka '+v,html:`<b class="letter">${v}</b>`})),
 ans:{v3:'o1',v7:'o3',v11:'o5',v1:'o0'},
 L(S){return `<div class="mrows">${this.IN.map(v=>`<div class="mrow"><b class="inb">${v}</b><span class="arw">→</span><span class="mbx">×2 lalu +1</span><span class="arw">→</span>${S('o'+v,'cell')}</div>`).join('')}</div>`},
 demo(){const o={L:this.L,IN:[2],T:[{id:'a',type:'5',html:'<b class="letter">5</b>'},{id:'b',type:'4',html:'<b class="letter">4</b>'}]};return [FR(o,{},'Contoh: angka 2 masuk ke mesin.'),FR(o,{},'2 dikali 2 = 4. Tapi jangan berhenti dulu!',{hand:'b'}),FR(o,{},'Lalu ditambah 1: 4 + 1 = <b>5</b>.',{hand:'a'}),FR(o,{a:'o2'},'Seret 5 ke kotak keluaran. Kartu 4 adalah jebakan.',{hand:'a'})]},
 bahas(){const F=[FR(this,{},'Hitung satu per satu: kali 2, lalu tambah 1.')],P={};[['v3','o1','1 × 2 = 2, lalu 2 + 1 = <b>3</b>.'],['v7','o3','3 × 2 = 6, lalu 6 + 1 = <b>7</b>.'],['v11','o5','5 × 2 = 10, lalu 10 + 1 = <b>11</b>.'],['v1','o0','0 × 2 = 0, lalu 0 + 1 = <b>1</b>.']].forEach(([id,s,t])=>{P[id]=s;F.push(FR(this,{...P},t,{hand:id}))});F.push(FR(this,{...P},'Kartu 6 dan 10 adalah jebakan: hasilnya lupa ditambah 1.',{m:chk(this,P).m}));return F},
 info:'Mesin yang selalu mengubah masukan dengan aturan yang sama disebut <b>fungsi</b>. Program komputer penuh dengan fungsi seperti ini.',kunci:'fungsi, masukan dan keluaran'},

/* 18 */{judul:'Tenda Warna-warni',konsep:'Deduksi',tingkat:'Sulit',
 cerita:'Ani, Budi, dan Cici berkemah. Ada tiga tenda berjajar: <b>merah</b> (kiri), <b>biru</b> (tengah), dan <b>hijau</b> (kanan). Setiap anak tidur di satu tenda.',
 aturan:['Petunjuk 1: Budi <b>tidak</b> tidur di tenda merah.','Petunjuk 2: Cici tidur <b>tepat di sebelah kiri</b> Budi.','Petunjuk 3: Ani <b>tidak</b> tidur di tenda hijau.'],
 tanya:'Seret setiap anak ke tendanya.',
 T:[['ani','Ani','#F2708A','#2A1A10'],['budi','Budi','#3D8BE0','#5A3A1E'],['cici','Cici','#8E6BD8','#1B1B1B']].map(([id,n,c,h])=>({id,type:id,label:n,html:`${anak(c,h,34)}<span>${n}</span>`})),
 ans:{ani:'merah',cici:'biru',budi:'hijau'},
 TE:[['merah','#E5484D'],['biru','#3D8BE0'],['hijau','#3FA34D']],
 L(S){return `<div class="lay-row">${this.TE.map(([id,c])=>`<div class="col"><svg viewBox="-20 -20 40 40" width="56" aria-hidden="true"><path d="M-18 14 L0 -16 L18 14 Z" fill="${c}"/><path d="M0 -16 L-5 14 H5 Z" fill="rgba(0,0,0,.35)"/><path d="M-18 14 L0 -16 L18 14 Z" fill="url(#xShade)"/></svg><b class="pn">${id[0].toUpperCase()+id.slice(1)}</b>${S(id,'tall')}</div>`).join('')}</div>`},
 demo(){const o={L:this.L,TE:[['oranye','#F57C00'],['kuning','#F5C518']],T:[{id:'rara',type:'rara',html:`${anak('#13B5A6','#2A1A10',34)}<span>Rara</span>`},{id:'sofi',type:'sofi',html:`${anak('#E8742A','#1B1B1B',34)}<span>Sofi</span>`}]};return [FR(o,{},'Contoh: dua tenda. Petunjuk: Rara tidak tidur di tenda kuning.'),FR(o,{rara:'oranye'},'Rara tidak di kuning, jadi Rara di <b>oranye</b>.',{hand:'rara'}),FR(o,{rara:'oranye',sofi:'kuning'},'Sofi mendapat tenda yang tersisa: kuning.',{hand:'sofi'})]},
 bahas(){return [FR(this,{},'Petunjuk 1: Budi tidak di merah, jadi Budi di biru atau hijau.'),FR(this,{budi:'biru',cici:'merah'},'Coba Budi di biru. Petunjuk 2: Cici di kirinya, yaitu merah.',{hand:'budi'}),FR(this,{budi:'biru',cici:'merah',ani:'hijau'},'Ani tinggal di hijau. Tetapi petunjuk 3 bilang Ani <b>tidak</b> di hijau. Tidak cocok!',{m:{budi:false,cici:false,ani:false}}),FR(this,{budi:'hijau'},'Jadi Budi di <b>hijau</b>.',{hand:'budi'}),FR(this,{budi:'hijau',cici:'biru'},'Cici tepat di kiri Budi: <b>biru</b>.',{hand:'cici'}),FR(this,{budi:'hijau',cici:'biru',ani:'merah'},'Ani di <b>merah</b>. Cocok dengan petunjuk 3!',{hand:'ani'}),FR(this,{budi:'hijau',cici:'biru',ani:'merah'},'Semua petunjuk terpenuhi.',{m:chk(this,{budi:'hijau',cici:'biru',ani:'merah'}).m})]},
 info:'Mencoba sebuah kemungkinan, lalu mundur jika tidak cocok, disebut <b>backtracking</b>. Komputer memakainya untuk menyelesaikan teka-teki dan menyusun jadwal.',kunci:'deduksi, backtracking'},

/* 19 */{judul:'Rantai Makanan Hutan',konsep:'Urutan',tingkat:'Mudah',
 cerita:'Kak Dara mengajari Pipo tentang rantai makanan di hutan. Panah berarti "<b>dimakan oleh</b>".',
 aturan:['Belalang makan rumput. Katak makan belalang.','Ular makan katak. Elang makan ular.','Kotak paling kiri untuk yang dimakan paling awal.'],
 tanya:'Susun rantai makanan dari kiri ke kanan.',
 T:[['elang','Elang'],['rumput','Rumput'],['ular','Ular'],['belalang','Belalang'],['katak','Katak']].map(([id,n])=>({id,type:id,label:n,html:tk(id,n,32)})),
 ans:{rumput:'c1',belalang:'c2',katak:'c3',ular:'c4',elang:'c5'},n:5,
 L(S){return `<div class="lay-row tl">${Array.from({length:this.n},(_,k)=>S('c'+(k+1),'task',`<span class="sl">${k+1}</span>`)).join('<span class="arw">→</span>')}</div>`},
 demo(){const o={L:this.L,n:3,T:[['burung','Burung'],['daun','Daun'],['ulat','Ulat']].map(([id,n])=>({id,type:id,html:tk(id,n,32)}))};return [FR(o,{},'Contoh: ulat makan daun, burung makan ulat.'),FR(o,{daun:'c1'},'Daun tidak memakan apa pun. Daun di awal.',{hand:'daun'}),FR(o,{daun:'c1',ulat:'c2'},'Ulat makan daun, jadi ulat sesudah daun.',{hand:'ulat'}),FR(o,{daun:'c1',ulat:'c2',burung:'c3'},'Burung makan ulat. Rantai: daun → ulat → burung.',{hand:'burung'})]},
 bahas(){const F=[FR(this,{},'Mulai dari yang tidak memakan apa pun: rumput.')],P={};[['rumput','c1','Rumput di awal.'],['belalang','c2','Belalang makan rumput.'],['katak','c3','Katak makan belalang.'],['ular','c4','Ular makan katak.'],['elang','c5','Elang makan ular.']].forEach(([id,s,t])=>{P[id]=s;F.push(FR(this,{...P},t,{hand:id}))});F.push(FR(this,{...P},'Rantai makanan: rumput → belalang → katak → ular → elang.',{m:chk(this,P).m}));return F},
 info:'Menyusun hal yang saling terhubung menjadi satu urutan mirip <b>daftar berantai</b> (linked list): setiap benda menunjuk ke benda berikutnya.',kunci:'urutan, rantai'},

/* 20 */{judul:'Sudoku Hewan',konsep:'Logika Kisi',tingkat:'Sulit',
 cerita:'Kak Dara membuat teka-teki kotak 4 × 4 dengan empat hewan: monyet, gajah, burung, dan katak.',
 aturan:['Setiap <b>baris</b> berisi keempat hewan, masing-masing satu kali.','Setiap <b>kolom</b> juga berisi keempat hewan.','Setiap kotak besar 2 × 2 (bergaris tebal) juga berisi keempat hewan.'],
 tanya:'Isi kelima kotak kosong dengan hewan yang benar.',
 G:[['monyet','gajah','burung','katak'],['burung','katak','monyet','gajah'],['gajah','monyet','katak','burung'],['katak','burung','gajah','monyet']],E:['0,1','1,2','2,1','2,3','3,0'],
 T:[['g1','gajah'],['m1','monyet'],['m2','monyet'],['b1','burung'],['k1','katak'],['g2','gajah']].map(([id,a])=>({id,type:a,label:a,html:I(a,40)})),
 get sol(){const s={};this.E.forEach(k=>{const[r,c]=k.split(',').map(Number);s['c'+r+c]=this.G[r][c]});return s},
 L(S){let g='';this.G.forEach((row,r)=>row.forEach((a,c)=>{const cls=`${c===1?'br':''} ${r===1?'bb':''}`;g+=this.E.includes(r+','+c)?S('c'+r+c,'cell sud '+cls):`<div class="fixed cell sud ${cls}">${I(a,36)}</div>`}));return `<div class="sudoku">${g}</div>`},
 demo(){const o={L:this.L,G:this.G,E:['1,2'],T:[{id:'x',type:'monyet',html:I('monyet',40)},{id:'y',type:'gajah',html:I('gajah',40)}]};o.sol={c12:'monyet'};return [FR(o,{},'Contoh: hanya satu kotak kosong, di baris 2.'),FR(o,{},'Baris 2 sudah punya burung, katak, dan gajah.',{hand:'x'}),FR(o,{x:'c12'},'Yang belum ada hanya <b>monyet</b>. Monyet ke kotak kosong!',{hand:'x'}),FR(o,{x:'c12'},'Periksa kolomnya: monyet belum ada di kolom 3. Cocok!')]},
 bahas(){const F=[FR(this,{},'Cari baris, kolom, atau kotak besar yang hanya kurang satu hewan.')],P={};[['g1','c01','Baris 1 punya monyet, burung, katak. Kurang <b>gajah</b>.'],['m1','c12','Baris 2 punya burung, katak, gajah. Kurang <b>monyet</b>.'],['k1','c30','Baris 4 punya burung, gajah, monyet. Kurang <b>katak</b>.'],['m2','c21','Baris 3 kurang dua hewan. Kolom 2 sudah punya gajah, katak, burung. Kurang <b>monyet</b>.'],['b1','c23','Sisa di baris 3: <b>burung</b>.']].forEach(([id,s,t])=>{P[id]=s;F.push(FR(this,{...P},t,{hand:id}))});F.push(FR(this,{...P},'Semua baris, kolom, dan kotak besar berisi keempat hewan. Satu gajah tidak terpakai.',{m:chk(this,P).m}));return F},
 info:'Teka-teki seperti sudoku diselesaikan komputer dengan <b>aturan pembatas</b>: mencoret pilihan yang melanggar aturan sampai hanya tersisa satu.',kunci:'logika, aturan pembatas'}
];
Q.forEach(q=>{if(!q.solve){const P={};if(q.ans)Object.entries(q.ans).forEach(([t,s])=>P[t]=Array.isArray(s)?s[0]:s);else if(q.sol){const used=new Set();Object.entries(q.sol).forEach(([s,w])=>{const t=q.T.find(t=>!used.has(t.id)&&(Array.isArray(w)?w.includes(t.type):t.type===w));if(t){used.add(t.id);P[t.id]=s}})}q.solve=P}});

/* ---------- aplikasi ---------- */
const PC=['#E8742A','#3FA34D','#3D8BE0','#C9A23A','#8E6BD8','#E5484D','#2E8B6E','#F57C00','#5E8A3A','#B5763F'];
const KEY='petualangan-hutan-rimba-v1';
let st={cur:0,ans:{},drag:{}};
try{const s=JSON.parse(localStorage.getItem(KEY));if(s&&s.ans){st=s;st.drag=st.drag||{}}}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){}};
const app=document.getElementById('app'),map=document.getElementById('map');
document.body.insertAdjacentHTML('afterbegin',`<svg width="0" height="0" style="position:absolute" aria-hidden="true">${DEFS}</svg>`);
const stOf=i=>st.ans[i]===undefined?'':(st.ans[i]?'ok':'bad');
const score=()=>Q.filter((_,i)=>stOf(i)==='ok').length;
function renderTop(){
  document.getElementById('score').innerHTML=`<small>Daun emas</small><b>${score()}</b><small>dari ${Q.length}</small>`;
  const dp=document.getElementById('depth');if(dp)dp.innerHTML=`${I('bendera',22)}<span><small>Pos</small><b>${Math.min(st.cur+1,20)} / 20</b></span>`;
  map.innerHTML=Q.map((q,i)=>{const s=stOf(i);return `<button class="pl ${s} ${i===st.cur?'cur':''}" style="--c:${PC[i%10]};animation-delay:-${(i*.37)%3}s" data-i="${i}" title="Soal ${i+1}: ${q.judul}" aria-label="Soal ${i+1}${s==='ok'?', benar':s==='bad'?', belum tepat':''}">${i+1}${s?`<span class="mk" style="background:${s==='ok'?'#1C9A5B':'#DD4343'};color:#fff">${s==='ok'?'✓':'✕'}</span>`:''}</button>`}).join('');
  map.querySelectorAll('.pl').forEach(b=>b.onclick=()=>go(+b.dataset.i));
}
function go(i){st.cur=i;save();render();window.scrollTo({top:document.querySelector('main').offsetTop-8,behavior:RM?'auto':'smooth'})}

function render(){
  players.forEach(p=>p.stop());players=[];
  renderTop();
  if(st.cur>=Q.length)return renderSummary();
  const i=st.cur,q=Q[i];
  app.innerHTML=`<article class="card"><div class="flyby" aria-hidden="true">${I('kupu',52)}</div>
    <div class="top"><span class="mno">Soal ${i+1} dari ${Q.length}</span><span class="tag">${q.konsep}</span><span class="tag ${q.tingkat}">${q.tingkat}</span></div>
    <h2 class="ti ${TV[i%4]}" aria-label="${q.judul}">${splitTitle(q.judul)}</h2>
    <div class="talk">${guide}<div class="bubble"><div class="who">Kak Dara</div><p>${q.cerita}</p></div></div>
    <div class="rules"><h3>Aturan main</h3><ul>${q.aturan.map(a=>`<li><span>${a}</span></li>`).join('')}</ul></div>
    ${stepperHTML('demo','Lihat contoh dulu')}
    <div class="ask"><div class="lb">Giliranmu</div><p>${q.tanya}</p><small class="how">Seret dengan jari atau mouse. Bisa juga: ketuk benda, lalu ketuk tempatnya.</small></div>
    <div class="dnd" id="dnd"><div class="live"></div><div class="bwrap"></div></div>
    <div class="actions" id="acts"><button id="cek" class="btn go">Periksa jawaban</button><button id="clr" class="btn">Kosongkan</button></div>
    <section id="fb" class="fb" hidden></section>
  </article>
  <div class="nav"><button id="prev" class="btn" ${i===0?'disabled':''}>← Soal sebelumnya</button><button id="next" class="btn">${i===Q.length-1?'Lihat hasil':'Soal berikutnya →'}</button></div>`;
  stepper($(app,'#demo'),q.demo(),false);
  const root=$(app,'#dnd'),bw=$(root,'.bwrap'),lv=$(root,'.live');
  let P=Object.assign({},st.drag[i]||{}),sel=null,locked=st.ans[i]!==undefined,M=locked?chk(q,P).m:null;
  const draw=()=>{morph(bw,boardHTML(q.L.bind(q),q.T,P,{m:M,sel,tray:'Seret dari sini'}));lv.innerHTML=q.live?q.live(P):'';lv.hidden=!q.live;root.classList.toggle('locked',locked)};
  const capOf=sid=>{const el=root.querySelector(`[data-slot="${CSS.escape(sid)}"]`);return el?+el.dataset.cap:1};
  const moveTo=(tid,sid)=>{if(locked)return;if(sid==='tray'){delete P[tid]}else{const cap=capOf(sid),occ=q.T.filter(t=>P[t.id]===sid&&t.id!==tid);if(occ.length>=cap){if(cap===1){const o=occ[0];if(P[tid])P[o.id]=P[tid];else delete P[o.id]}else{draw();return}}P[tid]=sid}st.drag[i]=P;save();sfx('pick');draw()};
  root.addEventListener('pointerdown',e=>{const t=e.target.closest('.tok');if(!t||locked||!root.contains(t))return;e.preventDefault();const id=t.dataset.tok,sx=e.clientX,sy=e.clientY;let drag=false,ghost=null,over=null,ox=0,oy=0;try{t.setPointerCapture(e.pointerId)}catch(_){}
    const mv=ev=>{if(!drag&&Math.hypot(ev.clientX-sx,ev.clientY-sy)>6){drag=true;const r=t.getBoundingClientRect();ox=sx-r.left;oy=sy-r.top;ghost=t.cloneNode(true);ghost.classList.add('ghost');ghost.style.width=r.width+'px';ghost.style.height=r.height+'px';document.body.appendChild(ghost);t.classList.add('lifting')}
      if(drag){ghost.style.left=(ev.clientX-ox)+'px';ghost.style.top=(ev.clientY-oy)+'px';const el=document.elementFromPoint(ev.clientX,ev.clientY),s=el&&el.closest('[data-slot]');const ns=s&&root.contains(s)?s:null;if(ns!==over){over&&over.classList.remove('hot');over=ns;over&&over.classList.add('hot')}}};
    const up=()=>{t.removeEventListener('pointermove',mv);t.removeEventListener('pointerup',up);t.removeEventListener('pointercancel',up);if(drag){ghost.remove();t.classList.remove('lifting');over&&over.classList.remove('hot');if(over)moveTo(id,over.dataset.slot);else draw()}else{sel=sel===id?null:id;draw()}};
    t.addEventListener('pointermove',mv);t.addEventListener('pointerup',up);t.addEventListener('pointercancel',up)});
  root.addEventListener('click',e=>{if(locked||!sel||e.target.closest('.tok'))return;const s=e.target.closest('[data-slot]');if(s&&root.contains(s)){const id=sel;sel=null;moveTo(id,s.dataset.slot)}});
  root.addEventListener('keydown',e=>{if(locked||(e.key!=='Enter'&&e.key!==' '))return;const t=e.target.closest('.tok');if(t){e.preventDefault();sel=sel===t.dataset.tok?null:t.dataset.tok;draw();return}const s=e.target.closest('[data-slot]');if(s&&sel){e.preventDefault();const id=sel;sel=null;moveTo(id,s.dataset.slot)}});
  draw();
  $(app,'#clr').onclick=()=>{if(locked)return;P={};sel=null;st.drag[i]=P;save();draw()};
  $(app,'#cek').onclick=()=>{const r=chk(q,P);const first=st.ans[i]===undefined;if(first){st.ans[i]=r.ok;save();renderTop()}locked=true;M=r.m;draw();show(true,r.ok,first)};
  $(app,'#prev').onclick=()=>go(i-1);$(app,'#next').onclick=()=>go(i+1);
  if(locked)show(false,st.ans[i],false);
  function show(fresh,ok,first){
    $(app,'#acts').hidden=true;const fb=$(app,'#fb');fb.hidden=false;
    const sol=boardHTML(q.L.bind(q),q.T,q.solve,{static:true,m:chk(q,q.solve).m,tray:'Tidak dipakai'});
    fb.innerHTML=`<div class="verdict ${ok?'ok':'bad'}">${ok?`<svg viewBox="-20 -20 40 40" width="46" class="dance">${IC.daun}</svg>`:`<svg viewBox="-20 -20 40 40" width="46" class="shake">${IC.monyet}</svg>`}<div><strong>${ok?'Hebat! Kamu dapat 1 daun emas.':'Hampir! Lihat tanda merah, lalu tonton pembahasannya.'}</strong><span>${ok?'Semua benda ada di tempat yang benar.':'Benda bertanda ✓ sudah benar. Benda bertanda ✕ perlu dipindah.'}${!first&&!fresh?'':''}</span></div></div>
      ${stepperHTML('sol','Tonton pembahasan',1)}
      <details class="peek"><summary>Lihat jawaban akhir</summary><div class="dnd static">${q.live?`<div class="live">${q.live(q.solve)}</div>`:''}${sol}</div></details>
      <div class="actions"><button class="btn" id="again1">Coba lagi soal ini</button></div>
      <div class="why"><h3>Kenapa ini penting?</h3><p>${q.info}</p><p class="kk"><b>Kata kunci:</b> ${q.kunci}</p></div>`;
    stepper($(fb,'#sol'),q.bahas(),fresh);
    $(fb,'#again1').onclick=()=>{locked=false;M=null;P={};sel=null;st.drag[i]=P;save();fb.hidden=true;$(app,'#acts').hidden=false;draw();root.scrollIntoView({behavior:RM?'auto':'smooth',block:'center'})};
    if(fresh){sfx(ok?'ok':'bad');if(ok)confetti($(fb,'.verdict'));fb.scrollIntoView({behavior:RM?'auto':'smooth',block:'start'})}
  }
}

function renderSummary(){
  const n=Object.keys(st.ans).length,s=score();
  const msg=n<Q.length?`Kamu sudah mengerjakan ${n} dari ${Q.length} soal. Ketuk nomor yang belum dikerjakan.`:s>=17?'Luar biasa! Kamu penjelajah hutan sejati!':s>=11?'Bagus! Coba lagi soal yang belum tepat dan tonton pembahasannya.':'Perjalanan baru dimulai. Tonton contoh setiap soal, lalu coba lagi.';
  app.innerHTML=`<section class="sum"><div class="kick" style="color:var(--rocket)">Laporan petualangan</div><div class="big">${s}<span style="font-size:.4em;color:var(--muted)"> / ${Q.length} daun emas</span></div><p style="margin:0;font-weight:800;max-width:60ch">${msg}</p>
    <div class="slist">${Q.map((q,i)=>{const t=stOf(i);return `<button class="si" data-i="${i}"><i style="background:${t==='ok'?'var(--ok)':t==='bad'?'var(--bad)':'var(--muted)'}">${t==='ok'?'✓':t==='bad'?'✕':'–'}</i>${i+1}. ${q.judul}</button>`}).join('')}</div>
    <div><button class="btn go" id="again">Mulai lagi dari awal</button></div></section>`;
  app.querySelectorAll('.si').forEach(b=>b.onclick=()=>go(+b.dataset.i));
  $(app,'#again').onclick=()=>{st={cur:0,ans:{},drag:{}};save();go(0)};
}
if(RM){const sc=document.querySelector('.scene');sc&&sc.pauseAnimations&&sc.pauseAnimations()}
const sb=document.getElementById('snd');sb.onclick=()=>{setSnd(!SND);if(SND)sfx('ok')};setSnd(SND);
render();


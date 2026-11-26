/* ================= ART: defs, characters, scenes ================= */
const DEFS=`<defs>
 <linearGradient id="suit" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".55" stop-color="#D9DDE3"/><stop offset="1" stop-color="#9DA4AE"/></linearGradient>
 <linearGradient id="suitD" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#B9BFC8"/><stop offset="1" stop-color="#EEF1F4"/></linearGradient>
 <linearGradient id="blade" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F4F6F8"/><stop offset=".5" stop-color="#A9B0B9"/><stop offset="1" stop-color="#5E6670"/></linearGradient>
 <linearGradient id="visor" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3A3F48"/><stop offset="1" stop-color="#07090C"/></linearGradient>
 <pattern id="mesh" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="4" fill="#CDD2D8"/><circle cx="2" cy="2" r=".9" fill="#A7AEB7"/></pattern>
 <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
 <filter id="softglow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6"/></filter>
 <radialGradient id="bulb" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#E9FFF8"/><stop offset=".45" stop-color="#5CF2D0"/><stop offset="1" stop-color="#139C8A"/></radialGradient>
 <radialGradient id="moonA" cx=".35" cy=".35" r=".7"><stop offset="0" stop-color="#FFF4E0"/><stop offset="1" stop-color="#F2B98B"/></radialGradient>
 <radialGradient id="moonB" cx=".35" cy=".35" r=".7"><stop offset="0" stop-color="#E9F0FF"/><stop offset="1" stop-color="#8FA3E8"/></radialGradient>
 <linearGradient id="bobo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7BE38E"/><stop offset="1" stop-color="#2FA65A"/></linearGradient>
 <linearGradient id="rock" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#B7BFCA"/><stop offset="1" stop-color="#5D6673"/></linearGradient>
 <linearGradient id="ship" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#AEB5BF"/></linearGradient>
 <linearGradient id="trailG" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FFE27A" stop-opacity=".95"/><stop offset=".35" stop-color="#FF7A3A" stop-opacity=".7"/><stop offset="1" stop-color="#FF3A3A" stop-opacity="0"/></linearGradient>
 <radialGradient id="vign" cx=".5" cy=".5" r=".75"><stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".55"/></radialGradient>
</defs>`;
const RED='#FF2E4D';
const g=(x,y,s,inner,cls='',extra='')=>`<g transform="translate(${x} ${y}) scale(${s})"><g class="${cls}" ${extra}>${inner}</g></g>`;

/* ---- ZERO (origin = between feet, height ~210) ---- */
function bladeSVG(){return `<path d="M2 6 L-14 -40" stroke="#2D3238" stroke-width="9" stroke-linecap="round"/><path d="M-2 -4 L-12 -32" stroke="${RED}" stroke-width="2" filter="url(#glow)"/><path d="M0 0 C-58 -40 -78 -150 -20 -232 C-46 -150 -38 -66 8 -14 Z" fill="url(#blade)" stroke="#4A515B" stroke-width="1.5"/>
 <path d="M-20 -232 C-46 -150 -38 -66 8 -14" stroke="${RED}" stroke-width="3" fill="none" filter="url(#glow)"/>
 <path d="M-30 -60 q-6 -20 2 -40 l10 6 q-6 16 -2 30z" fill="#5E6670"/><path d="M-26 -72 q-2 -10 2 -20" stroke="${RED}" stroke-width="2" filter="url(#glow)"/>
 <path d="M0 0 C30 20 60 40 92 70 C62 52 30 34 -4 14Z" fill="url(#blade)" stroke="#4A515B" stroke-width="1.5"/><path d="M0 0 C30 20 60 40 92 70" stroke="${RED}" stroke-width="2.5" fill="none" filter="url(#glow)"/>`}
function arm(ax,ay,hx,hy,side){const ex=(ax+hx)/2+side*10,ey=(ay+hy)/2;return `<path d="M${ax} ${ay} Q${ex} ${ey} ${hx} ${hy}" stroke="url(#suitD)" stroke-width="17" stroke-linecap="round" fill="none"/><path d="M${ax} ${ay} Q${ex} ${ey} ${hx} ${hy}" stroke="${RED}" stroke-width="1.6" fill="none" filter="url(#glow)" opacity=".9" transform="translate(${side*3} 0)"/><circle cx="${hx}" cy="${hy}" r="8" fill="#5A616B" stroke="#2D3238" stroke-width="1.5"/>`}
function zero(pose='stand'){
  const P={stand:{rl:[[-12,-96],[-16,-50],[-14,-6]],ll:[[12,-96],[18,-50],[16,-6]],ra:[30,-92],la:[-34,-92]},
    walk:{rl:[[-12,-96],[-26,-48],[-34,-6]],ll:[[12,-96],[16,-48],[24,-6]],ra:[38,-104],la:[-30,-90]},
    sword:{rl:[[-12,-96],[-24,-48],[-30,-6]],ll:[[12,-96],[22,-48],[30,-6]],ra:[34,-96],la:[-44,-200]},
    wave:{rl:[[-12,-96],[-16,-50],[-14,-6]],ll:[[12,-96],[18,-50],[16,-6]],ra:[52,-196],la:[-34,-92]},
    scared:{rl:[[-12,-96],[-22,-50],[-26,-6]],ll:[[12,-96],[14,-50],[12,-6]],ra:[20,-150],la:[-22,-150]}}[pose];
  const leg=(p,side)=>`<path d="M${p[0][0]} ${p[0][1]} Q${p[1][0]+side*4} ${p[1][1]} ${p[2][0]} ${p[2][1]}" stroke="url(#suitD)" stroke-width="19" stroke-linecap="round" fill="none"/><path d="M${p[0][0]+side*5} ${p[0][1]+10} Q${p[1][0]+side*9} ${p[1][1]} ${p[2][0]+side*5} ${p[2][1]-12}" stroke="${RED}" stroke-width="1.6" fill="none" filter="url(#glow)"/><path d="M${p[2][0]-11} ${p[2][1]+6} q2 -12 12 -12 q12 1 14 12z" fill="#F2F4F6" stroke="#8C949E" stroke-width="1.4"/>`;
  const bladeAt=pose==='sword'?g(P.la[0],P.la[1],.72,`<g transform="rotate(18)" class="bladeglow">${bladeSVG()}</g>`):g(P.la[0],P.la[1],.68,bladeSVG());
  return `<g class="zero">${pose!=='sword'?bladeAt:''}${leg(P.rl,-1)}${leg(P.ll,1)}
   <path d="M-20 -98 L-30 -160 Q-30 -172 -14 -176 L14 -176 Q30 -172 30 -160 L20 -98 Q0 -88 -20 -98Z" fill="url(#suit)" stroke="#8C949E" stroke-width="1.5"/>
   <path d="M-11 -100 L-15 -162 L15 -162 L11 -100 Q0 -94 -11 -100Z" fill="url(#mesh)"/>
   <path d="M-14 -170 L0 -140 L14 -170" stroke="${RED}" stroke-width="2.4" fill="none" filter="url(#glow)"/><path d="M0 -140 V-128" stroke="${RED}" stroke-width="2" filter="url(#glow)"/>
   <path d="M-28 -158 q-6 24 6 52 M28 -158 q6 24 -6 52" stroke="${RED}" stroke-width="1.8" fill="none" filter="url(#glow)"/>
   ${arm(-27,-168,P.la[0],P.la[1],-1)}${arm(27,-168,P.ra[0],P.ra[1],1)}
   <rect x="-7" y="-184" width="14" height="12" fill="#B9BFC8"/>
   <path d="M-17 -190 Q-20 -222 2 -228 Q22 -224 19 -196 Q16 -182 0 -180 Q-14 -182 -17 -190Z" fill="url(#suit)" stroke="#8C949E" stroke-width="1.5"/>
   <path d="M-13 -200 L12 -206 L15 -194 Q2 -186 -12 -190Z" fill="url(#visor)" stroke="${RED}" stroke-width="1.8" filter="url(#glow)"/>
   <path d="M-6 -224 Q2 -214 0 -206 M8 -224 Q4 -214 6 -207" stroke="${RED}" stroke-width="1.6" fill="none" filter="url(#glow)"/>
   <path d="M-8 -196 l14 -3" stroke="#FF8095" stroke-width="1.4" opacity=".8" class="visorshine"/>
   ${pose==='sword'?bladeAt:''}</g>`}

/* ---- BOBO (green monster, origin = feet) ---- */
function bobo(mood='happy'){
  const eyes=[-22,0,22].map((x,i)=>`<g class="blink" style="animation-delay:${i*.3}s"><circle cx="${x}" cy="${-118+(i===1?-8:0)}" r="${i===1?13:11}" fill="#fff" stroke="#1E6B3A" stroke-width="2"/><circle cx="${x+2}" cy="${-116+(i===1?-8:0)}" r="${i===1?6:5}" fill="#1B1B2A"/><circle cx="${x+4}" cy="${-119+(i===1?-8:0)}" r="2" fill="#fff"/></g>`).join('');
  const mouth=mood==='happy'?`<path d="M-26 -82 Q0 -54 26 -82 Q0 -70 -26 -82Z" fill="#7A1E2E"/><path d="M-10 -78 l4 7 l4 -7z" fill="#fff"/><path d="M-16 -66 Q0 -60 16 -66 Q0 -72 -16 -66Z" fill="#FF7A90"/>`:mood==='wow'?`<ellipse cx="0" cy="-74" rx="11" ry="13" fill="#7A1E2E"/>`:mood==='sad'?`<path d="M-18 -68 Q0 -84 18 -68" stroke="#1E6B3A" stroke-width="4" fill="none" stroke-linecap="round"/>`:`<path d="M-22 -80 Q0 -60 22 -80" stroke="#1E6B3A" stroke-width="4" fill="none"/>`;
  return `<g class="bobo"><ellipse cx="0" cy="2" rx="60" ry="8" fill="#000" opacity=".3"/>
   <path d="M-36 -10 q-18 6 -20 10 h34z M36 -10 q18 6 20 10 h-34z" fill="#F28C3A" stroke="#B4561A" stroke-width="2"/>
   <path d="M-52 -40 Q-60 -130 0 -140 Q60 -130 52 -40 Q50 -6 0 -6 Q-50 -6 -52 -40Z" fill="url(#bobo)" stroke="#1E6B3A" stroke-width="2.5"/>
   <ellipse cx="0" cy="-44" rx="30" ry="28" fill="#B9F5C4" opacity=".7"/>
   <path d="M-30 -136 l-8 -20 l16 12z M30 -136 l8 -20 l-16 12z" fill="#F7D046" stroke="#B8901A" stroke-width="1.5"/>
   <path d="M-50 -60 q-22 -4 -26 -24" stroke="#3FB866" stroke-width="12" fill="none" stroke-linecap="round" class="wavearm"/><path d="M50 -60 q20 6 22 22" stroke="#3FB866" stroke-width="12" fill="none" stroke-linecap="round"/>
   ${[[-38,-96],[40,-70],[-30,-30],[34,-110]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="4" fill="#2FA65A" opacity=".6"/>`).join('')}
   ${eyes}${mouth}${mood==='happy'?`<ellipse cx="-36" cy="-86" rx="7" ry="4" fill="#FF8FA3" opacity=".6"/><ellipse cx="36" cy="-86" rx="7" ry="4" fill="#FF8FA3" opacity=".6"/>`:''}</g>`}

/* ---- GRUMBLE (rock monster, origin = feet, ~230 tall) ---- */
function grumble(mood='angry',hurt=true){
  const brow=mood==='angry'?`<path d="M-46 -176 L-14 -164 M46 -176 L14 -164" stroke="#2D333B" stroke-width="7" stroke-linecap="round"/>`:`<path d="M-44 -162 L-14 -174 M44 -162 L14 -174" stroke="#2D333B" stroke-width="6" stroke-linecap="round"/>`;
  const eyeC=mood==='angry'?'#FFB020':'#9FD8FF';
  const mouth=mood==='angry'?`<path d="M-26 -126 L-14 -134 L-2 -126 L10 -134 L22 -126" stroke="#2D333B" stroke-width="5" fill="none" stroke-linejoin="round"/>`:mood==='happy'?`<path d="M-26 -132 Q0 -110 26 -132" stroke="#2D333B" stroke-width="5" fill="none" stroke-linecap="round"/>`:`<path d="M-22 -120 Q0 -138 22 -120" stroke="#2D333B" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M-30 -146 q-4 10 0 14 q4 -4 0 -14z" fill="#9FD8FF" class="tear"/>`;
  return `<g class="grumble"><ellipse cx="0" cy="2" rx="96" ry="10" fill="#000" opacity=".35"/>
   ${[[-70,-200,-50,-250,-40,-196],[-30,-226,-10,-280,6,-224],[24,-220,48,-266,58,-206]].map(([a,b,c,d,e,f])=>`<path d="M${a} ${b} L${c} ${d} L${e} ${f}Z" fill="#B08CFF" stroke="#6B4BC2" stroke-width="2" filter="url(#glow)" class="crystal"/>`).join('')}
   <path d="M-62 -6 L-70 -40 L-40 -44 L-34 -6Z M62 -6 L70 -40 L40 -44 L34 -6Z" fill="url(#rock)" stroke="#3E4652" stroke-width="2.5"/>
   ${hurt?`<path d="M50 -10 L62 -46 L66 -8Z" fill="#E5484D" stroke="#8A1E28" stroke-width="2"/>`:`<rect x="34" y="-34" width="38" height="12" rx="4" fill="#F7F1E0" stroke="#B8A27A" stroke-width="1.5" transform="rotate(-8 52 -28)"/>`}
   <path d="M-86 -60 L-96 -160 L-50 -214 L20 -222 L80 -184 L92 -90 L70 -40 L-60 -36Z" fill="url(#rock)" stroke="#3E4652" stroke-width="3"/>
   <path d="M-60 -150 L-20 -170 L10 -150 M40 -110 L70 -130 M-70 -90 L-40 -100 L-30 -70" stroke="#4B5360" stroke-width="2.5" fill="none" opacity=".7"/>
   <path d="M-88 -130 L-130 -96 L-120 -50 L-96 -60Z M90 -130 L128 -92 L118 -48 L94 -62Z" fill="url(#rock)" stroke="#3E4652" stroke-width="2.5"/>
   <circle cx="-30" cy="-158" r="13" fill="${eyeC}" filter="url(#glow)"/><circle cx="30" cy="-158" r="13" fill="${eyeC}" filter="url(#glow)"/><circle cx="-30" cy="-156" r="5" fill="#2D333B"/><circle cx="30" cy="-156" r="5" fill="#2D333B"/>
   ${brow}${mouth}</g>`}

/* ---- SPACESHIP ---- */
function ship(state='ok'){return `<g class="ship">
  <path d="M-120 0 Q-60 -46 60 -40 Q120 -36 150 -6 Q110 14 -100 14Z" fill="url(#ship)" stroke="#6E7681" stroke-width="2.5"/>
  <path d="M-30 -40 Q20 -64 70 -38 Q30 -28 -30 -40Z" fill="url(#visor)" stroke="${RED}" stroke-width="2" filter="url(#glow)"/>
  <path d="M-110 4 Q0 -10 140 -6" stroke="${RED}" stroke-width="3" fill="none" filter="url(#glow)"/>
  <path d="M-60 6 L-110 46 L-60 30Z M40 8 L0 50 L60 26Z" fill="#C9CED6" stroke="#6E7681" stroke-width="2"/>
  <path d="M-120 -4 l-22 -8 l2 22z" fill="#5E6670"/>
  ${state==='broken'?`<path d="M10 -36 l10 18 l-8 4 l12 20" stroke="#2D333B" stroke-width="3" fill="none"/><path d="M-80 -16 l14 10 l-10 6" stroke="#2D333B" stroke-width="2.5" fill="none"/>
   ${[0,1,2,3].map(i=>`<circle cx="${-130+i*6}" cy="-6" r="${10+i*5}" fill="#6B6F7A" opacity=".55" class="smoke" style="animation-delay:${i*.7}s"/>`).join('')}
   ${[0,1,2].map(i=>`<circle cx="${18+i*10}" cy="-20" r="2.5" fill="#FFD25A" class="spark" style="animation-delay:${i*.4}s"/>`).join('')}`
  :state==='fly'?`<path d="M-142 -2 l-70 -10 l0 20z" fill="#FF8A3A" opacity=".9" class="flame"/><path d="M-142 -2 l-40 -6 l0 12z" fill="#FFF0A0" class="flame"/>`:''}</g>`}

/* ---- ENVIRONMENT ---- */
const stars=(n,seed=1,h=200)=>[...Array(n)].map((_,i)=>{const x=(i*97+seed*31)%640,y=(i*53+seed*17)%h;return `<circle cx="${x}" cy="${y}" r="${(i%3)*.5+.6}" fill="#fff" class="tw" style="animation-delay:${(i%7)*.4}s"/>`}).join('');
function sky(kind='dusk'){const S={dusk:['#1B0C3A','#5B2A9A','#F29A7A'],night:['#070418','#24125A','#6A3FA8'],storm:['#141822','#2E3446','#59506E'],dawn:['#2A1C5E','#C25FA0','#FFC27A'],forest:['#0E2A3A','#1F5E6E','#7FD3C0']}[kind];
  return `<linearGradient id="sky_${kind}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${S[0]}"/><stop offset=".6" stop-color="${S[1]}"/><stop offset="1" stop-color="${S[2]}"/></linearGradient><rect width="640" height="400" fill="url(#sky_${kind})"/>`}
const moons=(a=[480,80,34],b=[560,140,16])=>`<circle cx="${a[0]}" cy="${a[1]}" r="${a[2]+14}" fill="#FFD6B0" opacity=".25" filter="url(#softglow)"/><circle cx="${a[0]}" cy="${a[1]}" r="${a[2]}" fill="url(#moonA)"/><circle cx="${a[0]-10}" cy="${a[1]+6}" r="${a[2]*.18}" fill="#E8A57A" opacity=".5"/><circle cx="${a[0]+12}" cy="${a[1]-10}" r="${a[2]*.12}" fill="#E8A57A" opacity=".5"/><circle cx="${b[0]}" cy="${b[1]}" r="${b[2]}" fill="url(#moonB)"/>`;
const hills=(c1,c2,c3)=>`<path d="M0 250 L60 200 L120 236 L200 170 L280 230 L360 186 L440 228 L520 176 L600 226 L640 206 V400 H0Z" fill="${c1}"/><path d="M0 290 Q120 250 240 284 T480 270 T640 280 V400 H0Z" fill="${c2}"/><path d="M0 340 Q160 310 320 336 T640 326 V400 H0Z" fill="${c3}"/>`;
function plant(x,y,s=1,c='#5CF2D0'){return g(x,y,s,`<path d="M0 0 Q-6 -40 6 -70 Q14 -88 2 -100" stroke="#1C5E62" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M0 -40 q-24 -6 -30 -24 q18 0 30 16z M2 -62 q22 -4 30 -20 q-18 -2 -30 12z" fill="#1F8A7A"/><circle cx="2" cy="-102" r="12" fill="url(#bulb)" filter="url(#glow)" class="pulse"/>`)}
function alienTree(x,y,s=1,fruit=false){return g(x,y,s,`<path d="M-10 0 Q-20 -60 0 -110 Q16 -150 -6 -180" stroke="#4A2A5E" stroke-width="16" fill="none" stroke-linecap="round"/><path d="M0 -110 q40 -10 60 -40 M-4 -140 q-40 -6 -60 -34" stroke="#4A2A5E" stroke-width="9" fill="none" stroke-linecap="round"/>
  <ellipse cx="-6" cy="-190" rx="60" ry="34" fill="#7A3FB0"/><ellipse cx="54" cy="-156" rx="40" ry="24" fill="#8E4FC8"/><ellipse cx="-62" cy="-178" rx="36" ry="22" fill="#6A3299"/>
  ${fruit?[[-30,-176],[10,-196],[40,-150],[-60,-166],[24,-174]].map(([a,b])=>`<g><circle cx="${a}" cy="${b}" r="9" fill="#E5484D" stroke="#8A1E28" stroke-width="1.5"/><circle cx="${a-3}" cy="${b-3}" r="2.5" fill="#fff" opacity=".6"/><path d="M${a} ${b-9} v-5" stroke="#3E2A1A" stroke-width="2"/></g>`).join(''):[[-30,-176],[24,-200],[50,-150]].map(([a,b])=>`<circle cx="${a}" cy="${b}" r="6" fill="url(#bulb)" filter="url(#glow)" class="pulse"/>`).join('')}`)}
const ground=(c='#2A1442',c2='#3B1E5C')=>`<path d="M0 330 Q320 300 640 330 V400 H0Z" fill="${c}"/><path d="M0 360 Q320 340 640 360 V400 H0Z" fill="${c2}"/>`;
const rocksFG=()=>`<path d="M0 400 L0 360 L40 346 L70 372 L100 400Z M560 400 L590 352 L640 344 V400Z" fill="#12081F"/>`;
const mist=()=>`<ellipse cx="200" cy="320" rx="260" ry="26" fill="#fff" opacity=".07" class="drift"/><ellipse cx="480" cy="340" rx="220" ry="20" fill="#fff" opacity=".06" class="drift2"/>`;
const vign=`<rect width="640" height="400" fill="url(#vign)" pointer-events="none"/>`;
const apple=(x,y,s=1)=>g(x,y,s,`<circle r="9" fill="#E5484D" stroke="#8A1E28" stroke-width="1.5"/><circle cx="-3" cy="-3" r="2.5" fill="#fff" opacity=".6"/><path d="M0 -9 v-5" stroke="#3E2A1A" stroke-width="2"/>`);
const rain=()=>[...Array(40)].map((_,i)=>`<path d="M${(i*53)%660} ${(i*37)%400} l-14 26" stroke="#AFC3E8" stroke-width="1.6" opacity=".45" class="rain" style="animation-delay:${(i%10)*.08}s"/>`).join('');
const wind=()=>[0,1,2].map(i=>`<path d="M-80 ${120+i*60} q80 -20 160 0 t160 0" stroke="#fff" stroke-width="2.5" fill="none" opacity=".25" class="wind" style="animation-delay:${i*.6}s"/>`).join('');
/* ---- dramatic crash sequence: ship falls from the sky, explodes, debris, dust, then smokes ---- */
function crashFX(x,y,s=1,t0=0){const T=v=>`animation-delay:${(t0+v).toFixed(2)}s`;
  const deb=[[-120,-90,200],[-60,-140,-260],[40,-160,300],[110,-100,-220],[150,-40,180],[-150,-30,-160],[80,-200,240],[-20,-180,-300]].map(([dx,dy,r],i)=>`<path d="M0 -6 l7 4 l-3 7 l-6 -2z" fill="${i%2?'#C9CED6':'#6E7681'}" stroke="#2D333B" stroke-width="1" class="deb" style="--dx:${dx}px;--dy:${dy}px;--r:${r}deg;${T(1.55)}"/>`).join('');
  const embers=[...Array(10)].map((_,i)=>`<circle r="${2+i%3}" fill="${i%2?'#FFD25A':'#FF7A3A'}" class="deb" style="--dx:${(i-5)*26}px;--dy:${-60-(i*37)%120}px;--r:0deg;${T(1.6)}"/>`).join('');
  return `<g transform="translate(${x} ${y}) scale(${s})" style="transform-box:view-box;transform-origin:0 0">
   <g class="crashfall" style="${T(0)}"><path d="M150 -8 L420 -150 L430 -128 L158 6Z" fill="url(#trailG)" class="trail" style="${T(0)}"/>${[0,1,2,3,4].map(i=>`<circle cx="${190+i*55}" cy="${-30-i*28}" r="${14+i*6}" fill="#5A5468" opacity=".5" class="trailsmoke" style="${T(.1+i*.08)}"/>`).join('')}
    <path d="M140 -6 q40 -30 80 -14 q-30 10 -80 26z" fill="#FF7A3A" class="flame"/><path d="M140 -4 q24 -14 44 -6 q-18 6 -44 14z" fill="#FFF0A0" class="flame"/>
    <g class="spinfall" style="${T(0)}">${ship('broken')}</g></g>
   <ellipse cx="0" cy="18" rx="20" ry="6" fill="#FFF3C0" class="shock" style="${T(1.55)}"/>
   <circle cx="0" cy="0" r="62" fill="#FFF3C0" class="fireball" style="${T(1.55)}"/><circle cx="-10" cy="-10" r="52" fill="#FF9A3A" class="fireball f2" style="${T(1.6)}"/><circle cx="20" cy="-4" r="44" fill="#FF5A2A" class="fireball f3" style="${T(1.68)}"/>
   ${deb}${embers}
   ${[[-60,10,60],[60,12,70],[0,4,90]].map(([dx,dy,r],i)=>`<ellipse cx="${dx}" cy="${dy}" rx="${r}" ry="${r*.35}" fill="#8A7A9A" opacity=".6" class="dust" style="${T(1.7+i*.1)}"/>`).join('')}
  </g>`}
const flashRect=(t0=0)=>`<rect width="640" height="400" fill="#FFF8E0" class="impactflash" style="animation-delay:${(t0+1.55).toFixed(2)}s" pointer-events="none"/>`;
/* ================= RPG ART ================= */
const I=(k,s=56,cls='')=>`<svg viewBox="-20 -20 40 40" width="${s}" height="${s}" class="ico ${cls}" aria-hidden="true">${ITEM[k]||''}</svg>`;
const ITEM={
 sword:`<g transform="rotate(45)"><path d="M-4.2 -12 L0 -23 L4.2 -12 V9 H-4.2Z" fill="#E8ECF0" stroke="#5E6670" stroke-width="1.3" stroke-linejoin="round"/><path d="M0 -20 V8" stroke="#A9B0B9" stroke-width="1.4"/><path d="M-4.2 -12 L0 -23 L0 9 H-4.2Z" fill="#fff" opacity=".55"/><rect x="-11" y="8.5" width="22" height="4.4" rx="2.2" fill="#E0A100" stroke="#8A6200" stroke-width="1"/><rect x="-2.4" y="12.8" width="4.8" height="7" rx="1.2" fill="#7A4A22"/><path d="M-2.4 15 h4.8 M-2.4 17.5 h4.8" stroke="#4E2E12" stroke-width=".8"/><circle cy="21.6" r="2.6" fill="#E0A100" stroke="#8A6200" stroke-width=".8"/></g>`,
 shield:`<path d="M0 -17 L14 -12 Q14 6 0 17 Q-14 6 -14 -12Z" fill="#3D7BE0" stroke="#C9A23A" stroke-width="2.6"/><path d="M0 -12 L9 -8.6 Q9 4 0 11.6 Q-9 4 -9 -8.6Z" fill="#2A5FB8"/><path d="M0 -8 l2.4 5 l5.4 .6 l-4 3.8 l1 5.4 l-4.8 -2.6 l-4.8 2.6 l1 -5.4 l-4 -3.8 l5.4 -.6z" fill="#FFD25A"/>`,
 potion:`<rect x="-4" y="-18" width="8" height="5" rx="1.5" fill="#8B5A2B"/><path d="M-4 -13 h8 v4 q9 4 9 13 q0 12 -13 12 q-13 0 -13 -12 q0 -9 9 -13z" fill="#FF5C74" stroke="#9E1C33" stroke-width="1.6"/><path d="M-8 2 q8 -4 16 0 q0 9 -8 9 q-8 0 -8 -9z" fill="#FF8FA3" opacity=".7"/><ellipse cx="-4" cy="-2" rx="2" ry="4" fill="#fff" opacity=".7"/><path d="M-1 6 h2 v-2 h2 v2 h2 v2 h-2 v2 h-2 v-2 h-2z" fill="#fff"/>`,
 key:`<circle cx="-8" cy="0" r="7.5" fill="none" stroke="#E0A100" stroke-width="4"/><path d="M-1 0 H17 M10 0 v6 M15 0 v5" stroke="#E0A100" stroke-width="4" stroke-linecap="round"/><circle cx="-8" cy="0" r="7.5" fill="none" stroke="#FFE27A" stroke-width="1.4"/>`,
 torch:`<path d="M-3 18 L-1 -2 H3 L5 18Z" fill="#8B5A2B"/><rect x="-4" y="-4" width="10" height="4" rx="1" fill="#5E3A1E"/><path d="M1 -4 q-10 -8 -2 -16 q0 6 5 4 q4 6 -3 12z" fill="#FF8A3A" class="flick"/><path d="M1 -5 q-4 -4 0 -9 q2 4 2 6z" fill="#FFE27A"/>`,
 helmet:`<path d="M-15 6 Q-15 -16 0 -16 Q15 -16 15 6 V10 H6 V2 H-6 V10 H-15Z" fill="url(#suit)" stroke="#6E7681" stroke-width="1.6"/><path d="M-6 2 h12 v8 h-12z" fill="url(#visor)" stroke="${RED}" stroke-width="1.2"/><path d="M0 -16 V-6" stroke="${RED}" stroke-width="1.6"/>`,
 boots:[-1,1].map(d=>`<g transform="translate(${d*8} ${d>0?2:-2})"><path d="M-6 -14 h10 v18 h6 q4 0 4 5 v3 h-20z" fill="#8B5A2B" stroke="#4E2E12" stroke-width="1.4"/><path d="M-6 -14 h10 v4 h-10z" fill="#C9A23A"/></g>`).join(''),
 map:`<path d="M-17 -12 l11 -4 l12 4 l11 -4 v28 l-11 4 l-12 -4 l-11 4z" fill="#F2DFAF" stroke="#8A6234" stroke-width="1.5"/><path d="M-6 -16 v28 M6 -12 v28" stroke="#C9A86A"/><path d="M-12 8 q6 -10 12 -4 t10 -8" stroke="#B3362B" stroke-width="1.6" stroke-dasharray="3 2" fill="none"/><path d="M8 -9 l4 4 M12 -9 l-4 4" stroke="#B3362B" stroke-width="2"/>`,
 gold:`<ellipse cy="4" rx="15" ry="6" fill="#C98A00"/><ellipse cy="1" rx="15" ry="6" fill="#FFC93C" stroke="#C98A00" stroke-width="1.4"/><text y="4" text-anchor="middle" font-size="8" font-family="Fredoka,system-ui,sans-serif" font-weight="700" fill="#C98A00">G</text>`,
 coin:`<circle r="14" fill="#FFC93C" stroke="#C98A00" stroke-width="2"/><circle r="9" fill="none" stroke="#E0A100" stroke-width="1.5"/><text y="5" text-anchor="middle" font-size="12" font-family="Fredoka,system-ui,sans-serif" font-weight="700" fill="#C98A00">G</text>`,
 fire:`<path d="M0 18 q-15 -2 -14 -14 q1 -9 8 -14 q-1 6 3 8 q-1 -10 7 -16 q-2 8 5 13 q6 5 5 11 q-1 12 -14 12z" fill="#FF7A3A"/><path d="M0 16 q-7 -1 -7 -7 q0 -5 4 -8 q0 5 3 6 q1 -5 4 -7 q0 5 3 8 q2 8 -7 8z" fill="#FFD25A"/>`,
 water:`<path d="M0 -18 C9 -5 13 1 13 6 a13 13 0 0 1 -26 0 C-13 1 -9 -5 0 -18Z" fill="#5BB8F0" stroke="#2A7FC0" stroke-width="1.6"/><ellipse cx="-5" cy="3" rx="3" ry="5.5" fill="#fff" opacity=".65"/>`,
 bow:`<path d="M-8 -17 Q10 0 -8 17" stroke="#8B5A2B" stroke-width="3.4" fill="none" stroke-linecap="round"/><path d="M-8 -17 V17" stroke="#ddd" stroke-width="1"/><path d="M-14 0 H16" stroke="#6B4220" stroke-width="2"/><path d="M16 0 l-6 -4 v8z" fill="#9AA3AC"/><path d="M-14 0 l-4 -3 M-14 0 l-4 3" stroke="#E5484D" stroke-width="2"/>`,
 sun:`${[...Array(8)].map((_,i)=>`<path d="M0 -13 v-5" stroke="#F5A623" stroke-width="3" stroke-linecap="round" transform="rotate(${i*45})"/>`).join('')}<circle r="10" fill="#FFC93C"/>`,
 snow:`${[0,60,120].map(a=>`<path d="M0 -16 V16 M0 -10 l-4 -4 M0 -10 l4 -4 M0 10 l-4 4 M0 10 l4 4" stroke="#7FC8F2" stroke-width="2.4" stroke-linecap="round" transform="rotate(${a})"/>`).join('')}`,
 ice:`<path d="M-12 14 L-8 -10 L0 -16 L8 -8 L12 14Z" fill="#BFE9FF" stroke="#4E9AC6" stroke-width="1.6"/><path d="M-6 8 L-3 -8 M3 10 L6 -4" stroke="#fff" stroke-width="1.6"/>`,
 flag:`<path d="M-14 -18 V18" stroke="#8A6234" stroke-width="2.6" stroke-linecap="round"/><path d="M-13 -16 q8 -3 15 0 t15 0 v10 q-8 -3 -15 0 t-15 0z" fill="#E5242F"/><path d="M-13 -6 q8 -3 15 0 t15 0 v10 q-8 -3 -15 0 t-15 0z" fill="#fff" stroke="#ddd" stroke-width=".6"/>`,
 garuda:`<path d="M-4 -4 Q-18 -16 -19 -2 Q-16 -6 -14 -2 Q-18 2 -16 6 Q-12 2 -10 6 Q-12 10 -8 12 Z" fill="#E0A100" stroke="#8A6200" stroke-width=".8"/><path d="M4 -4 Q18 -16 19 -2 Q16 -6 14 -2 Q18 2 16 6 Q12 2 10 6 Q12 10 8 12 Z" fill="#E0A100" stroke="#8A6200" stroke-width=".8"/><ellipse cy="2" rx="7" ry="9" fill="#F5B820" stroke="#8A6200" stroke-width=".8"/><circle cx="2" cy="-12" r="4.5" fill="#F5B820" stroke="#8A6200" stroke-width=".8"/><path d="M6 -12 l4 1.5 l-4 1.5z" fill="#C97A00"/><circle cx="3.4" cy="-13" r=".9" fill="#222"/><path d="M0 -16 l-2 -3 M2 -16.4 v-3.6" stroke="#E0A100" stroke-width="1.2"/><rect x="-4.6" y="-3" width="9.2" height="9" rx="1" fill="#fff" stroke="#222" stroke-width=".7"/><path d="M-4.6 1.5 h9.2 M0 -3 v9" stroke="#222" stroke-width=".7"/><rect x="-4.6" y="-3" width="4.6" height="4.5" fill="#E5242F"/><rect x="0" y="1.5" width="4.6" height="4.5" fill="#E5242F"/><circle cy="1.5" r="1.4" fill="#222"/><path d="M-12 15 q12 4 24 0 v3 q-12 4 -24 0z" fill="#fff" stroke="#8A6200" stroke-width=".7"/><path d="M-3 11 l-2 4 M3 11 l2 4" stroke="#C97A00" stroke-width="1.4"/>`,
 s1:`<rect x="-17" y="-17" width="34" height="34" rx="6" fill="#1B1B1B"/><path d="M0 -13 L3.6 -4.4 L12.6 -4 L5.6 1.8 L8 10.6 L0 5.6 L-8 10.6 L-5.6 1.8 L-12.6 -4 L-3.6 -4.4Z" fill="#FFC93C"/>`,
 s2:`<rect x="-17" y="-17" width="34" height="34" rx="6" fill="#C8102E"/>${[...Array(12)].map((_,i)=>{const a=i*30*Math.PI/180,x=(10.5*Math.cos(a)).toFixed(1),y=(10.5*Math.sin(a)).toFixed(1);return i%2?`<circle cx="${x}" cy="${y}" r="2.6" fill="none" stroke="#FFC93C" stroke-width="1.6"/>`:`<rect x="${(x-2.4).toFixed(1)}" y="${(y-2.4).toFixed(1)}" width="4.8" height="4.8" rx=".8" fill="none" stroke="#FFC93C" stroke-width="1.6" transform="rotate(45 ${x} ${y})"/>`}).join('')}`,
 s3:`<rect x="-17" y="-17" width="34" height="34" rx="6" fill="#fff" stroke="#ccc"/><path d="M-2 14 V0 h4 V14 M-2 10 l-6 4 M2 10 l6 4 M0 4 l-6 -4 M0 4 l6 -4" stroke="#6B3A1E" stroke-width="2" fill="none" stroke-linecap="round"/><ellipse cy="-6" rx="13" ry="8" fill="#2E8B3E"/><ellipse cx="-6" cy="-9" rx="6" ry="4" fill="#3FA34D"/><ellipse cx="6" cy="-4" rx="5" ry="3.5" fill="#3FA34D"/>`,
 s4:`<rect x="-17" y="-17" width="34" height="34" rx="6" fill="#C8102E"/><path d="M-13 -12 q2 8 7 6 M13 -12 q-2 8 -7 6" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M-9 -6 q9 -4 18 0 q2 10 -3 16 q-6 4 -12 0 q-5 -6 -3 -16z" fill="#1B1B1B"/><circle cx="-4" cy="-1" r="1.4" fill="#fff"/><circle cx="4" cy="-1" r="1.4" fill="#fff"/><ellipse cy="7" rx="4" ry="2.4" fill="#444"/>`,
 s5:`<rect x="-17" y="-17" width="34" height="34" rx="6" fill="#fff" stroke="#ccc"/><path d="M-7 14 Q-9 0 -6 -14" stroke="#3FA34D" stroke-width="1.6" fill="none"/>${[-12,-8,-4,0,4].map((y,i)=>`<ellipse cx="${-6+(i%2?2.4:-2.4)}" cy="${y}" rx="2" ry="3.4" fill="#F5C518" transform="rotate(${i%2?30:-30} ${-6+(i%2?2.4:-2.4)} ${y})"/>`).join('')}<path d="M7 14 Q9 2 6 -8" stroke="#3FA34D" stroke-width="1.6" fill="none"/>${[[6,-10],[10,-2],[4,4]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="3.6" fill="#fff" stroke="#bbb"/><path d="M${x-3} ${y+3} l3 -2 l3 2" stroke="#3FA34D" stroke-width="1.2" fill="none"/>`).join('')}`,
};
/* ---- monsters (origin = feet, ~140 tall) ---- */
const shade=(h,a)=>{const n=parseInt(h.slice(1),16);let r=n>>16,g=n>>8&255,b=n&255;const f=v=>Math.max(0,Math.min(255,Math.round(a<0?v*(1+a):v+(255-v)*a)));return `rgb(${f(r)},${f(g)},${f(b)})`};
const eyes2=(y,sp=16,r=9,mood='mad')=>[-1,1].map(d=>`<circle cx="${d*sp}" cy="${y}" r="${r}" fill="#fff" stroke="#222" stroke-width="2"/><circle cx="${d*sp+2}" cy="${y+1}" r="${r*.45}" fill="#1B1B2A"/><circle cx="${d*sp+3.5}" cy="${y-2}" r="${r*.18}" fill="#fff"/>${mood==='mad'?`<path d="M${d*(sp+r)} ${y-r-2} L${d*(sp-r+4)} ${y-r+4}" stroke="#222" stroke-width="4" stroke-linecap="round"/>`:''}`).join('');
function MON(kind,c){const d=shade(c,-.35),l=shade(c,.4);
 if(kind==='slime')return `<ellipse cy="2" rx="62" ry="9" fill="#000" opacity=".3"/><path d="M-64 0 Q-70 -60 -30 -100 Q0 -130 30 -100 Q70 -60 64 0 Z" fill="${c}" stroke="${d}" stroke-width="3"/><ellipse cx="-24" cy="-80" rx="10" ry="16" fill="#fff" opacity=".45" transform="rotate(-20 -24 -80)"/><path d="M-64 0 q20 -10 32 0 q16 -8 32 0 q16 -8 32 0 q16 -8 32 0" fill="${d}" opacity=".5"/>${eyes2(-58,20,11)}<path d="M-18 -26 Q0 -12 18 -26" stroke="#222" stroke-width="4" fill="none" stroke-linecap="round"/>`;
 if(kind==='bat')return `<g class="hover"><ellipse cy="40" rx="40" ry="6" fill="#000" opacity=".25"/><path d="M-26 -60 Q-70 -110 -120 -80 Q-100 -70 -104 -50 Q-86 -60 -80 -40 Q-62 -54 -52 -30Z M26 -60 Q70 -110 120 -80 Q100 -70 104 -50 Q86 -60 80 -40 Q62 -54 52 -30Z" fill="${d}" stroke="#222" stroke-width="2" class="flap"/><path d="M-22 -96 l-8 -24 l20 14z M22 -96 l8 -24 l-20 14z" fill="${c}" stroke="#222" stroke-width="2"/><ellipse cy="-62" rx="38" ry="40" fill="${c}" stroke="#222" stroke-width="2.5"/><ellipse cy="-46" rx="22" ry="18" fill="${l}" opacity=".6"/>${eyes2(-72,14,9)}<path d="M-12 -46 Q0 -38 12 -46" stroke="#222" stroke-width="3" fill="none"/><path d="M-8 -45 l3 8 l3 -7z M8 -45 l-3 8 l-3 -7z" fill="#fff"/></g>`;
 if(kind==='mushroom')return `<ellipse cy="2" rx="58" ry="9" fill="#000" opacity=".3"/><path d="M-30 0 Q-36 -50 -26 -70 H26 Q36 -50 30 0Z" fill="#F3E3C8" stroke="#8A6234" stroke-width="2.5"/><path d="M-80 -70 Q-70 -150 0 -150 Q70 -150 80 -70 Q0 -50 -80 -70Z" fill="${c}" stroke="${d}" stroke-width="3"/>${[[-44,-100,12],[0,-128,10],[40,-96,13],[-14,-84,7],[62,-78,7]].map(([x,y,r])=>`<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" opacity=".9"/>`).join('')}${eyes2(-40,13,8)}<path d="M-12 -18 Q0 -10 12 -18" stroke="#222" stroke-width="3.4" fill="none" stroke-linecap="round"/><path d="M-40 -40 q-14 6 -16 18 M40 -40 q14 6 16 18" stroke="#F3E3C8" stroke-width="9" stroke-linecap="round" fill="none"/>`;
 if(kind==='golem')return `<ellipse cy="2" rx="80" ry="10" fill="#000" opacity=".3"/><path d="M-52 -4 L-58 -34 L-32 -38 L-26 -4Z M52 -4 L58 -34 L32 -38 L26 -4Z" fill="${d}" stroke="#222" stroke-width="2.5"/><path d="M-72 -50 L-80 -130 L-42 -172 L16 -178 L66 -146 L76 -74 L58 -32 L-50 -30Z" fill="${c}" stroke="#222" stroke-width="3"/><path d="M-72 -50 L-80 -130 L-42 -172 L-20 -170 L-40 -120 L-50 -30Z" fill="#fff" opacity=".18"/><path d="M-50 -120 L-16 -136 L8 -120 M32 -88 L58 -104 M-58 -72 L-32 -80 L-24 -56" stroke="${d}" stroke-width="3" fill="none"/><path d="M-72 -104 L-108 -76 L-100 -38 L-80 -48Z M74 -104 L106 -74 L98 -36 L78 -50Z" fill="${c}" stroke="#222" stroke-width="2.5"/><circle cx="-24" cy="-128" r="11" fill="#FFE27A" filter="url(#glow)"/><circle cx="24" cy="-128" r="11" fill="#FFE27A" filter="url(#glow)"/><circle cx="-24" cy="-126" r="4.5" fill="#222"/><circle cx="24" cy="-126" r="4.5" fill="#222"/><path d="M-38 -146 L-12 -136 M38 -146 L12 -136" stroke="#222" stroke-width="6" stroke-linecap="round"/><path d="M-20 -100 L-10 -106 L0 -100 L10 -106 L20 -100" stroke="#222" stroke-width="4" fill="none"/>`;
 if(kind==='dragon')return `<ellipse cy="2" rx="110" ry="12" fill="#000" opacity=".35"/><path d="M40 -40 Q120 -30 150 -90 Q140 -40 100 -20 Z" fill="${d}" stroke="#222" stroke-width="2"/><path d="M-10 -120 Q-80 -220 -150 -170 Q-120 -160 -126 -130 Q-100 -150 -90 -118 Q-70 -140 -50 -100Z M10 -120 Q60 -230 140 -190 Q110 -176 116 -146 Q90 -164 82 -130 Q62 -150 46 -108Z" fill="${d}" stroke="#222" stroke-width="2.5" class="flap"/>
  <path d="M-60 0 Q-70 -70 -20 -110 Q30 -130 60 -80 Q80 -40 60 0Z" fill="${c}" stroke="#222" stroke-width="3"/><path d="M-30 -10 Q-34 -60 0 -84 Q20 -60 20 -10Z" fill="#FFD9A0" opacity=".8"/>${[0,1,2,3].map(i=>`<path d="M-24 ${-20-i*16} h40" stroke="${shade('#FFD9A0',-.25)}" stroke-width="2"/>`).join('')}
  <path d="M-40 0 l-6 -26 h20z M30 0 l-4 -26 h20z" fill="${d}" stroke="#222" stroke-width="2"/>
  <path d="M-10 -110 Q-20 -160 10 -176 Q60 -186 76 -156 Q86 -136 60 -128 Q30 -122 14 -104Z" fill="${c}" stroke="#222" stroke-width="3"/><path d="M8 -170 l-14 -26 l24 14z M34 -178 l-2 -28 l16 22z" fill="#F3E3C8" stroke="#222" stroke-width="2"/>
  <circle cx="40" cy="-152" r="9" fill="#FFE27A" filter="url(#glow)"/><circle cx="42" cy="-152" r="4" fill="#222"/><path d="M28 -166 L54 -160" stroke="#222" stroke-width="5" stroke-linecap="round"/><circle cx="72" cy="-140" r="2.4" fill="#222"/><path d="M40 -132 Q60 -126 78 -136" stroke="#222" stroke-width="3" fill="none"/><path d="M48 -130 l3 7 l3 -6 M60 -130 l3 7 l3 -6" fill="#fff" stroke="#fff"/>`;
 return ''}
/* ---- backgrounds 640x300 ---- */
function BG(k){const S={meadow:['#7CC8F2','#D9F3FF','#7CCB5E','#5BAA3A'],cave:['#1A1030','#3A2460','#2A1A3E','#1A0F28'],forest:['#1F5E6E','#7FD3C0','#3A6A3A','#244A2A'],ice:['#9FD8F5','#EAF8FF','#E4F2FA','#BFDCEC'],desert:['#F2A65A','#FFE2A8','#E8B86A','#C98E45'],sky:['#5BB8F0','#D6F0FF','#FFFFFF','#E6F3FA'],lava:['#3A0A0A','#C2401A','#4A1A12','#2A0C08'],ocean:['#0E3A6E','#2A8FC0','#1E5A8A','#123E66'],night:['#0B0820','#2E2460','#2A2440','#1A1630'],dragon:['#3A0E1E','#B2402A','#3A2430','#24141E']}[k];
 let s=`<linearGradient id="bg_${k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${S[0]}"/><stop offset="1" stop-color="${S[1]}"/></linearGradient><rect width="640" height="300" fill="url(#bg_${k})"/>`;
 if(k==='meadow')s+=`<circle cx="540" cy="60" r="30" fill="#FFE27A"/><g class="cloud"><ellipse cx="120" cy="60" rx="50" ry="14" fill="#fff"/><ellipse cx="150" cy="50" rx="26" ry="14" fill="#fff"/></g>`;
 if(k==='cave'||k==='night')s+=[...Array(30)].map((_,i)=>`<circle cx="${(i*97)%640}" cy="${(i*41)%140}" r="${(i%3)*.5+.6}" fill="#fff" class="tw" style="animation-delay:${i%7*.4}s"/>`).join('');
 if(k==='cave')s+=`<path d="M0 0 H640 V20 L610 70 L590 24 L560 60 L530 18 L490 80 L460 22 L420 50 L380 16 L340 66 L300 20 L250 56 L210 18 L170 74 L130 22 L90 52 L50 18 L20 60 L0 30Z" fill="#120A22"/>`;
 if(k==='forest')s+=alienTree(70,250,1)+alienTree(590,255,1.1);
 if(k==='ice')s+=`<path d="M0 200 L90 90 L160 170 L250 70 L340 180 L430 100 L520 170 L640 80 V300 H0Z" fill="#CFE8F5"/><path d="M90 90 L110 115 L70 115Z M250 70 L275 102 L225 102Z M430 100 L452 126 L410 126Z" fill="#fff"/>`+[...Array(24)].map((_,i)=>`<circle cx="${(i*67)%640}" cy="${(i*43)%260}" r="2.2" fill="#fff" class="snowf" style="animation-delay:${(i%8)*.5}s"/>`).join('');
 if(k==='desert')s+=`<circle cx="520" cy="70" r="36" fill="#FFF0B0"/><path d="M0 220 Q160 170 320 210 T640 200 V300 H0Z" fill="#F0C27A"/>${[80,140,500].map(x=>`<rect x="${x}" y="130" width="22" height="100" fill="#D9A55A" stroke="#A0703A" stroke-width="2"/><rect x="${x-6}" y="122" width="34" height="10" fill="#C98E45"/>`).join('')}`;
 if(k==='sky')s+=`<g class="cloud"><ellipse cx="100" cy="200" rx="90" ry="26" fill="#fff"/><ellipse cx="540" cy="180" rx="110" ry="28" fill="#fff"/></g><path d="M440 160 V90 h14 v-14 h10 v14 h20 v-14 h10 v14 h14 V160Z" fill="#B7C3D6"/><path d="M450 90 l12 -26 l12 26z M498 90 l10 -22 l10 22z" fill="#8E5BD8"/>`;
 if(k==='lava')s+=`<path d="M200 260 L320 90 L360 90 L480 260Z" fill="#2A0C08"/><path d="M320 90 Q340 60 360 90" fill="#FF7A3A"/><path d="M330 92 L300 200 M350 92 L370 210" stroke="#FF7A3A" stroke-width="5" class="flick"/>${[0,1,2].map(i=>`<circle cx="${330+i*12}" cy="${70-i*14}" r="${10+i*4}" fill="#555" opacity=".5" class="smoke" style="animation-delay:${i*.7}s"/>`).join('')}`;
 if(k==='ocean')s+=[...Array(12)].map((_,i)=>`<circle cx="${(i*83)%640}" cy="${260-(i*37)%200}" r="${3+i%4}" fill="none" stroke="#BFE9FF" stroke-width="1.5" class="bubble" style="animation-delay:${i*.5}s"/>`).join('')+`<path d="M40 260 q10 -50 0 -80 M60 260 q-6 -40 10 -70 M580 260 q-10 -60 6 -90" stroke="#E0466E" stroke-width="7" fill="none" stroke-linecap="round"/>`;
 if(k==='night')s+=`<circle cx="520" cy="70" r="28" fill="#F3F0D8"/><path d="M60 260 V60 l20 -30 l20 30 V260Z" fill="#141028"/><rect x="74" y="90" width="12" height="16" fill="#FFD25A" opacity=".7"/>`;
 if(k==='dragon')s+=`<path d="M0 240 L120 120 L200 200 L320 60 L440 190 L540 110 L640 220 V300 H0Z" fill="#24141E"/><rect width="640" height="300" fill="#fff" class="flash"/>`;
 s+=`<path d="M0 255 Q320 235 640 255 V300 H0Z" fill="${S[2]}"/><path d="M0 275 Q320 262 640 275 V300 H0Z" fill="${S[3]}"/>`;
 return s}
/* ================= 100 SOAL =================
 s: math | eng | pkn ; t: pick | num | match | sort
 q: [English, Indonesia]; hint: penjelasan/animasi */
const M=(q,a,h)=>({s:'math',t:'num',q,a,hint:h});
const P=(s,q,opts,ans,note,extra={})=>({s,t:'pick',q,opts,ans,note,...extra});
const MT=(s,q,pairs,note)=>({s,t:'match',q,pairs,note});
const ST=(s,q,bins,items,note)=>({s,t:'sort',q,bins,items,note});
const ADD=(a,b)=>({k:'add',a,b}),SUB=(a,b)=>({k:'sub',a,b}),MUL=(n,x)=>({k:'mul',n,x});
const DUNGEONS=[
 {key:'slime',name:'Slime Meadow',idn:'Padang Slime',mon:['slime','#6BE38A'],monName:'Green Slime',bg:'meadow',Q:[
  M(['Zero hits the slime for 5 damage. Then 4 damage. Total damage?','Zero menyerang slime 5 damage, lalu 4 damage. Berapa total damage?'],9,ADD(5,4)),
  {s:'listen',t:'pick',listen:true,say:'Zero has a sword.',q:['Listen and tap the right picture.','Dengarkan, lalu ketuk gambar yang benar.'],opts:['sword', 'shield', 'potion'],ans:'sword',note:'"Zero has a sword." = "Zero punya pedang." <b>sword</b> = pedang.'},
  P('pkn',['Sila pertama Pancasila. Simbolnya apa?','Sila ke-1: Ketuhanan Yang Maha Esa.'],['bintang','rantai','padi dan kapas'],'bintang','Sila ke-1 dilambangkan dengan <b>bintang</b> emas.',{pics:{bintang:'s1',rantai:'s2','padi dan kapas':'s5'}}),
  M(['The slime has 20 HP. Zero hits 6. How much HP is left?','Slime punya 20 HP. Zero menyerang 6. Sisa HP berapa?'],14,SUB(20,6)),
  P('eng',['"Attack!" artinya ...','What does "attack" mean?'],['menyerang','bertahan','lari'],'menyerang','<b>attack</b> = menyerang. <b>defend</b> = bertahan.'),
  P('pkn',['A villager drops a gold coin. What should Zero do?','Seorang warga menjatuhkan koin emas. Apa yang harus Zero lakukan?'],['Mengembalikan koin itu','Menyimpan koin itu','Pura-pura tidak lihat'],'Mengembalikan koin itu','Hero yang baik itu <b>jujur</b>. Barang orang lain harus dikembalikan.'),
  MT('eng',['Drag the words to the items.','Seret kata ke gambar benda.'],[['sword','sword'],['shield','shield'],['potion','potion']],'sword = pedang, shield = perisai, potion = ramuan.'),
  M(['Zero attacks 2 times. Each hit is 5 damage. Total?','Zero menyerang 2 kali. Setiap serangan 5 damage. Totalnya?'],10,MUL(2,5)),
  P('pkn',['Lambang negara Indonesia adalah ...','The symbol of Indonesia is ...'],['Garuda Pancasila','Harimau','Komodo'],'Garuda Pancasila','Lambang negara kita adalah <b>Garuda Pancasila</b>.',{pic:'garuda'}),
  M(['BOSS! Zero hits 10, then 8. Total damage?','BOS! Zero menyerang 10, lalu 8. Total damage?'],18,ADD(10,8))]},
 {key:'bat',name:'Bat Cave',idn:'Gua Kelelawar',mon:['bat','#8E5BD8'],monName:'Purple Bat',bg:'cave',Q:[
  M(['Zero hits 7. Then 6. Total damage?','Zero menyerang 7, lalu 6. Total damage?'],13,ADD(7,6)),
  {s:'listen',t:'pick',listen:true,say:'Open the door with the key.',q:['Listen and tap the right picture.','Dengarkan, lalu ketuk gambar yang benar.'],opts:['map', 'key', 'torch'],ans:'key',note:'"Open the door with the key." = "Buka pintunya dengan kunci." <b>key</b> = kunci.'},
  P('pkn',['Sila kedua Pancasila. Simbolnya apa?','Sila ke-2: Kemanusiaan yang adil dan beradab.'],['pohon beringin','rantai','kepala banteng'],'rantai','Sila ke-2 dilambangkan dengan <b>rantai</b>.',{pics:{'pohon beringin':'s3',rantai:'s2','kepala banteng':'s4'}}),
  M(['The bat has 30 HP. Zero hits 10. HP left?','Kelelawar punya 30 HP. Zero menyerang 10. Sisa HP?'],20,SUB(30,10)),
  P('eng',['It is dark! Zero needs a ...','Gelap! Zero butuh ...'],['torch','sword','boots'],'torch','<b>torch</b> = obor, untuk menerangi gua yang gelap.',{pic:'torch'}),
  P('pkn',['Teman Zero terluka. Sikap yang benar adalah ...','Zero\'s friend is hurt. What should Zero do?'],['Menolong teman','Menertawakan','Pergi saja'],'Menolong teman','Sila ke-2 mengajarkan kita <b>menolong</b> dan peduli kepada sesama.'),
  ST('pkn',['Sort the actions: good or not good?','Pilah: sikap baik atau tidak baik?'],[{id:'g',label:'Baik',sub:'good'},{id:'b',label:'Tidak baik',sub:'not good'}],[['Berbagi','g'],['Mengejek','b'],['Menolong','g'],['Berbohong','b']],'Berbagi dan menolong itu baik. Mengejek dan berbohong tidak baik.'),
  M(['3 bats. Each bat has 10 HP. Total HP?','Ada 3 kelelawar. Setiap kelelawar 10 HP. Total HP?'],30,MUL(3,10)),
  P('eng',['"Defend!" artinya ...','What does "defend" mean?'],['menyerang','bertahan','menyembuhkan'],'bertahan','<b>defend</b> = bertahan. Zero memakai <b>shield</b> untuk bertahan.'),
  M(['BOSS! The bat king has 40 HP. Zero hits 15. HP left?','BOS! Raja kelelawar punya 40 HP. Zero menyerang 15. Sisa HP?'],25,SUB(40,15))]},
 {key:'mush',name:'Mushroom Forest',idn:'Hutan Jamur',mon:['mushroom','#E5484D'],monName:'Red Shroom',bg:'forest',Q:[
  M(['Zero hits 12. Then 5. Total damage?','Zero menyerang 12, lalu 5. Total damage?'],17,ADD(12,5)),
  {s:'listen',t:'pick',listen:true,say:'Drink the red potion.',q:['Listen and tap the right picture.','Dengarkan, lalu ketuk gambar yang benar.'],opts:['water', 'fire', 'potion'],ans:'potion',note:'"Drink the red potion." = "Minum ramuan merah." <b>potion</b> = ramuan.'},
  P('pkn',['Sila ketiga Pancasila. Simbolnya apa?','Sila ke-3: Persatuan Indonesia.'],['pohon beringin','bintang','padi dan kapas'],'pohon beringin','Sila ke-3 dilambangkan dengan <b>pohon beringin</b>.',{pics:{'pohon beringin':'s3',bintang:'s1','padi dan kapas':'s5'}}),
  M(['The shroom has 25 HP. Zero hits 9. HP left?','Jamur punya 25 HP. Zero menyerang 9. Sisa HP?'],16,SUB(25,9)),
  P('eng',['Zero drinks a red potion. He can ...','Zero minum ramuan merah. Dia bisa ...'],['heal','fly','sleep'],'heal','<b>heal</b> = menyembuhkan. Potion merah menambah HP.'),
  P('pkn',['Penduduk desa membersihkan jalan bersama-sama. Ini disebut ...','Villagers clean the road together. This is ...'],['gotong royong','bertengkar','bermalas-malasan'],'gotong royong','Bekerja bersama-sama disebut <b>gotong royong</b>.'),
  MT('pkn',['Drag the sila number to its symbol.','Seret nomor sila ke simbolnya.'],[['s1','Sila 1'],['s2','Sila 2'],['s3','Sila 3']],'Sila 1 bintang, sila 2 rantai, sila 3 pohon beringin.'),
  M(['5 friends help. Each friend gives 2 potions. How many potions?','5 teman menolong. Setiap teman memberi 2 potion. Berapa potion?'],10,MUL(5,2)),
  P('eng',['"Forest" artinya ...','What does "forest" mean?'],['gua','hutan','laut'],'hutan','<b>forest</b> = hutan. <b>cave</b> = gua, <b>sea</b> = laut.'),
  M(['BOSS! Zero hits 20, then 15. Total damage?','BOS! Zero menyerang 20, lalu 15. Total damage?'],35,ADD(20,15))]},
 {key:'ice',name:'Ice Mountain',idn:'Gunung Es',mon:['golem','#7FC8F2'],monName:'Ice Golem',bg:'ice',Q:[
  M(['Fire spell: 14 damage. Sword: 6 damage. Total?','Sihir api 14 damage. Pedang 6 damage. Totalnya?'],20,ADD(14,6)),
  {s:'listen',t:'pick',listen:true,say:'Use fire! The golem is made of ice.',q:['Listen and tap the right picture.','Dengarkan, lalu ketuk gambar yang benar.'],opts:['snow', 'fire', 'ice'],ans:'fire',note:'"Use fire! The golem is made of ice." = "Pakai api! Golem itu terbuat dari es." <b>fire</b> = api.'},
  P('pkn',['Sila keempat Pancasila. Simbolnya apa?','Sila ke-4: Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan.'],['kepala banteng','rantai','bintang'],'kepala banteng','Sila ke-4 dilambangkan dengan <b>kepala banteng</b>.',{pics:{'kepala banteng':'s4',rantai:'s2',bintang:'s1'}}),
  M(['The golem has 50 HP. Zero hits 20. HP left?','Golem punya 50 HP. Zero menyerang 20. Sisa HP?'],30,SUB(50,20)),
  P('eng',['It is cold! Zero wears ...','Dingin! Zero memakai ...'],['boots','sword','map'],'boots','<b>boots</b> = sepatu bot, agar kaki tetap hangat.',{pic:'boots'}),
  P('pkn',['Tim Zero berbeda pendapat tentang jalan mana yang dipilih. Sebaiknya ...','The team cannot agree on the road. They should ...'],['Bermusyawarah','Bertengkar','Pergi sendiri-sendiri'],'Bermusyawarah','Sila ke-4: menyelesaikan masalah dengan <b>musyawarah</b> (berdiskusi bersama).'),
  ST('eng',['Sort: hot or cold?','Pilah: panas atau dingin?'],[{id:'h',label:'hot',sub:'panas'},{id:'c',label:'cold',sub:'dingin'}],[['fire','h'],['ice','c'],['sun','h'],['snow','c']],'fire dan sun panas (hot). ice dan snow dingin (cold).'),
  M(['Zero hits 4 times. Each hit is 5 damage. Total?','Zero menyerang 4 kali, setiap serangan 5 damage. Totalnya?'],20,MUL(4,5)),
  P('eng',['"Mountain" artinya ...','What does "mountain" mean?'],['gunung','sungai','istana'],'gunung','<b>mountain</b> = gunung.'),
  M(['BOSS! The golem has 60 HP. Zero hits 25. HP left?','BOS! Golem punya 60 HP. Zero menyerang 25. Sisa HP?'],35,SUB(60,25))]},
 {key:'sand',name:'Desert Ruins',idn:'Reruntuhan Gurun',mon:['golem','#E0B060'],monName:'Sand Golem',bg:'desert',Q:[
  M(['Zero hits 15. Then 15. Total damage?','Zero menyerang 15, lalu 15. Total damage?'],30,ADD(15,15)),
  {s:'listen',t:'pick',listen:true,say:'Look at the map.',q:['Listen and tap the right picture.','Dengarkan, lalu ketuk gambar yang benar.'],opts:['gold', 'key', 'map'],ans:'map',note:'"Look at the map." = "Lihat petanya." <b>map</b> = peta.'},
  P('pkn',['Sila kelima Pancasila. Simbolnya apa?','Sila ke-5: Keadilan sosial bagi seluruh rakyat Indonesia.'],['padi dan kapas','pohon beringin','kepala banteng'],'padi dan kapas','Sila ke-5 dilambangkan dengan <b>padi dan kapas</b>.',{pics:{'padi dan kapas':'s5','pohon beringin':'s3','kepala banteng':'s4'}}),
  M(['Zero has 45 gold. He buys a potion for 15 gold. Gold left?','Zero punya 45 emas. Dia membeli potion seharga 15 emas. Sisa emas?'],30,SUB(45,15)),
  P('eng',['How many?','Ada berapa?'],['four','five','six'],'five','Ada <b>five</b> (lima) koin emas.',{picN:['gold',5]}),
  P('pkn',['Zero membagi 10 koin kepada 2 teman sama banyak. Ini sikap ...','Zero shares coins equally. This is ...'],['adil','curang','sombong'],'adil','Sila ke-5 mengajarkan sikap <b>adil</b>. Setiap teman mendapat 5 koin.'),
  MT('pkn',['Drag the sila number to its symbol.','Seret nomor sila ke simbolnya.'],[['s3','Sila 3'],['s4','Sila 4'],['s5','Sila 5']],'Sila 3 pohon beringin, sila 4 kepala banteng, sila 5 padi dan kapas.'),
  M(['There are 2 chests. Each chest has 10 gold. Total gold?','Ada 2 peti. Setiap peti berisi 10 emas. Total emas?'],20,MUL(2,10)),
  P('eng',['Zero needs water. He is ...','Zero butuh air. Dia ...'],['thirsty','happy','sleepy'],'thirsty','<b>thirsty</b> = haus. Gurun sangat panas!'),
  M(['BOSS! Zero hits 30, then 12. Total damage?','BOS! Zero menyerang 30, lalu 12. Total damage?'],42,ADD(30,12))]},
 {key:'sky',name:'Sky Castle',idn:'Istana Langit',mon:['bat','#F2B21B'],monName:'Thunder Bird',bg:'sky',Q:[
  M(['Zero hits 23. Then 10. Total damage?','Zero menyerang 23, lalu 10. Total damage?'],33,ADD(23,10)),
  {s:'listen',t:'pick',listen:true,say:'Put on your helmet.',q:['Listen and tap the right picture.','Dengarkan, lalu ketuk gambar yang benar.'],opts:['helmet', 'boots', 'shield'],ans:'helmet',note:'"Put on your helmet." = "Pakai helmmu." <b>helmet</b> = helm.'},
  P('pkn',['Warna bendera Indonesia adalah ...','The colors of the Indonesian flag are ...'],['merah putih','merah biru','putih hijau'],'merah putih','Bendera kita <b>Merah Putih</b>: merah di atas, putih di bawah.',{pic:'flag'}),
  M(['The bird has 50 HP. Zero hits 18. HP left?','Burung punya 50 HP. Zero menyerang 18. Sisa HP?'],32,SUB(50,18)),
  P('eng',['The castle is in the ...','Istana itu ada di ...'],['sky','sea','cave'],'sky','<b>sky</b> = langit. Istana langit melayang di awan!'),
  P('pkn',['Semboyan negara Indonesia adalah ...','The motto of Indonesia is ...'],['Bhinneka Tunggal Ika','Tut Wuri Handayani','Gotong Royong'],'Bhinneka Tunggal Ika','<b>Bhinneka Tunggal Ika</b> artinya berbeda-beda tetapi tetap satu.'),
  ST('eng',['Sort: weapon or armor?','Pilah: senjata atau pelindung?'],[{id:'w',label:'weapon',sub:'senjata'},{id:'a',label:'armor',sub:'pelindung'}],[['sword','w'],['shield','a'],['bow','w'],['helmet','a']],'sword dan bow untuk menyerang. shield dan helmet untuk melindungi.'),
  M(['Zero shoots 5 arrows. Each arrow is 3 damage. Total?','Zero menembak 5 panah, setiap panah 3 damage. Totalnya?'],15,MUL(5,3)),
  P('eng',['Zero can ... high to the castle.','Zero bisa ... tinggi ke istana.'],['jump','swim','sleep'],'jump','<b>jump</b> = melompat.'),
  M(['BOSS! The bird has 70 HP. Zero hits 30. HP left?','BOS! Burung punya 70 HP. Zero menyerang 30. Sisa HP?'],40,SUB(70,30))]},
 {key:'lava',name:'Lava Volcano',idn:'Gunung Lava',mon:['slime','#FF7A3A'],monName:'Fire Slime',bg:'lava',Q:[
  M(['Zero hits 26. Then 14. Total damage?','Zero menyerang 26, lalu 14. Total damage?'],40,ADD(26,14)),
  {s:'listen',t:'pick',listen:true,say:'Water stops the fire.',q:['Listen and tap the right picture.','Dengarkan, lalu ketuk gambar yang benar.'],opts:['fire', 'water', 'sun'],ans:'water',note:'"Water stops the fire." = "Air memadamkan api." <b>water</b> = air.'},
  P('pkn',['Hak anak di rumah adalah ...','A child\'s right at home is ...'],['mendapat kasih sayang','mencuci mobil ayah','memasak makan malam'],'mendapat kasih sayang','Anak berhak mendapat <b>kasih sayang</b>, makanan, dan pendidikan.'),
  M(['The slime has 60 HP. Zero hits 24. HP left?','Slime punya 60 HP. Zero menyerang 24. Sisa HP?'],36,SUB(60,24)),
  P('eng',['"Hot" artinya ...','What does "hot" mean?'],['dingin','panas','basah'],'panas','<b>hot</b> = panas. <b>cold</b> = dingin.'),
  P('pkn',['Kewajiban anak di rumah adalah ...','A child\'s duty at home is ...'],['merapikan tempat tidur','bermain terus','tidur seharian'],'merapikan tempat tidur','Kewajiban anak: membantu orang tua, misalnya <b>merapikan tempat tidur</b>.'),
  ST('pkn',['Sort: hak (right) or kewajiban (duty)?','Pilah: hak atau kewajiban?'],[{id:'h',label:'Hak',sub:'right'},{id:'k',label:'Kewajiban',sub:'duty'}],[['Bermain','h'],['Belajar','k'],['Mendapat makanan','h'],['Membantu ibu','k']],'Hak: bermain dan mendapat makanan. Kewajiban: belajar dan membantu ibu.'),
  M(['Zero uses 3 water spells. Each spell is 10 damage. Total?','Zero memakai 3 sihir air, setiap sihir 10 damage. Totalnya?'],30,MUL(3,10)),
  P('eng',['Zero is hurt. He drinks a ...','Zero terluka. Dia minum ...'],['potion','rock','fire'],'potion','<b>potion</b> = ramuan penyembuh.',{pic:'potion'}),
  M(['BOSS! Zero hits 35, then 25. Total damage?','BOS! Zero menyerang 35, lalu 25. Total damage?'],60,ADD(35,25))]},
 {key:'sea',name:'Ocean Temple',idn:'Kuil Samudra',mon:['mushroom','#3D7BE0'],monName:'Sea Jelly',bg:'ocean',Q:[
  M(['Zero hits 33. Then 22. Total damage?','Zero menyerang 33, lalu 22. Total damage?'],55,ADD(33,22)),
  {s:'listen',t:'pick',listen:true,say:'Hold up your shield.',q:['Listen and tap the right picture.','Dengarkan, lalu ketuk gambar yang benar.'],opts:['sword', 'bow', 'shield'],ans:'shield',note:'"Hold up your shield." = "Angkat perisaimu." <b>shield</b> = perisai.'},
  P('pkn',['Di kelas Zero ada teman dari suku Jawa, Batak, dan Papua. Sikap Zero ...','Zero has friends from many tribes. Zero should ...'],['berteman dengan semua','memilih teman satu suku','mengejek yang berbeda'],'berteman dengan semua','Kita berbeda-beda tetapi tetap satu. <b>Berteman dengan semua</b>.'),
  M(['The jelly has 80 HP. Zero hits 30. HP left?','Ubur-ubur punya 80 HP. Zero menyerang 30. Sisa HP?'],50,SUB(80,30)),
  P('eng',['"Sea" artinya ...','What does "sea" mean?'],['laut','langit','gunung'],'laut','<b>sea</b> = laut.'),
  P('pkn',['Lagu kebangsaan Indonesia adalah ...','The national anthem of Indonesia is ...'],['Indonesia Raya','Balonku','Pelangi-pelangi'],'Indonesia Raya','Lagu kebangsaan kita adalah <b>Indonesia Raya</b>, ciptaan W.R. Supratman.'),
  MT('eng',['Drag the words to the pictures.','Seret kata ke gambar.'],[['key','key'],['map','map'],['gold','gold']],'key = kunci, map = peta, gold = emas.'),
  M(['4 treasure chests. Each has 5 pearls. How many pearls?','Ada 4 peti harta, setiap peti 5 mutiara. Berapa mutiara?'],20,MUL(4,5)),
  P('pkn',['Saat menyanyikan Indonesia Raya, sikap kita ...','When we sing Indonesia Raya, we ...'],['berdiri tegak','duduk sambil makan','berlari-lari'],'berdiri tegak','Saat lagu kebangsaan dinyanyikan kita <b>berdiri tegak</b> dengan hormat.'),
  M(['BOSS! The jelly has 90 HP. Zero hits 45. HP left?','BOS! Ubur-ubur punya 90 HP. Zero menyerang 45. Sisa HP?'],45,SUB(90,45))]},
 {key:'shadow',name:'Shadow Tower',idn:'Menara Bayangan',mon:['golem','#5A5A7A'],monName:'Shadow Knight',bg:'night',Q:[
  M(['Zero hits 38. Then 12. Total damage?','Zero menyerang 38, lalu 12. Total damage?'],50,ADD(38,12)),
  {s:'listen',t:'pick',listen:true,say:'Light the torch. It is dark.',q:['Listen and tap the right picture.','Dengarkan, lalu ketuk gambar yang benar.'],opts:['torch', 'sun', 'key'],ans:'torch',note:'"Light the torch. It is dark." = "Nyalakan obor. Gelap sekali." <b>torch</b> = obor.'},
  P('pkn',['Aturan di sekolah: datang ...','School rule: come to school ...'],['tepat waktu','terlambat','kapan saja'],'tepat waktu','Disiplin: datang ke sekolah <b>tepat waktu</b>.'),
  M(['The knight has 75 HP. Zero hits 35. HP left?','Ksatria punya 75 HP. Zero menyerang 35. Sisa HP?'],40,SUB(75,35)),
  P('eng',['The tower is very ...','Menaranya sangat ...'],['tall','small','short'],'tall','<b>tall</b> = tinggi. Menara bayangan sangat tinggi!'),
  P('pkn',['Zero ingin meminjam pedang temannya. Dia harus ...','Zero wants to borrow his friend\'s sword. He must ...'],['meminta izin','langsung mengambil','menyembunyikannya'],'meminta izin','Sopan santun: <b>meminta izin</b> sebelum meminjam.'),
  ST('pkn',['Aturan sekolah: boleh atau tidak boleh?','School rules: allowed or not allowed?'],[{id:'y',label:'Boleh',sub:'allowed'},{id:'n',label:'Tidak boleh',sub:'not allowed'}],[['Membuang sampah di tempatnya','y'],['Mencoret meja','n'],['Antre dengan tertib','y'],['Berlari di kelas','n']],'Patuhi aturan sekolah agar semua nyaman dan aman.'),
  M(['Zero hits 5 times. Each hit is 10 damage. Total?','Zero menyerang 5 kali, setiap serangan 10 damage. Totalnya?'],50,MUL(5,10)),
  P('eng',['"Brave" artinya ...','What does "brave" mean?'],['berani','takut','malas'],'berani','<b>brave</b> = berani. Zero adalah hero yang berani!'),
  M(['BOSS! Zero hits 40, then 35. Total damage?','BOS! Zero menyerang 40, lalu 35. Total damage?'],75,ADD(40,35))]},
 {key:'dragon',name:'Dragon Peak',idn:'Puncak Naga',mon:['dragon','#E5484D'],monName:'Red Dragon',bg:'dragon',Q:[
  M(['Zero hits 45. Then 25. Total damage?','Zero menyerang 45, lalu 25. Total damage?'],70,ADD(45,25)),
  {s:'listen',t:'pick',listen:true,say:'Shoot the dragon with a bow.',q:['Listen and tap the right picture.','Dengarkan, lalu ketuk gambar yang benar.'],opts:['potion', 'bow', 'sword'],ans:'bow',note:'"Shoot the dragon with a bow." = "Tembak naga dengan busur panah." <b>bow</b> = busur.'},
  P('pkn',['Garuda Pancasila mencengkeram pita bertuliskan ...','The ribbon held by Garuda says ...'],['Bhinneka Tunggal Ika','Indonesia Raya','Merah Putih'],'Bhinneka Tunggal Ika','Pita di kaki Garuda bertuliskan <b>Bhinneka Tunggal Ika</b>.',{pic:'garuda'}),
  M(['The dragon has 100 HP. Zero hits 40. HP left?','Naga punya 100 HP. Zero menyerang 40. Sisa HP?'],60,SUB(100,40)),
  P('eng',['The dragon breathes ...','Naga menyemburkan ...'],['fire','water','snow'],'fire','<b>fire</b> = api.',{pic:'fire'}),
  P('pkn',['Bobo, Grumble, dan Zero bekerja sama melawan naga. Ini contoh ...','Friends work together against the dragon. This is ...'],['persatuan','permusuhan','kesombongan'],'persatuan','Sila ke-3: <b>persatuan</b>. Bersatu kita kuat!'),
  MT('pkn',['Drag the sila number to its symbol.','Seret nomor sila ke simbolnya.'],[['s1','Sila 1'],['s2','Sila 2'],['s3','Sila 3'],['s4','Sila 4'],['s5','Sila 5']],'Bintang, rantai, pohon beringin, kepala banteng, padi dan kapas.'),
  M(['3 friends attack. Each friend hits 10. Total damage?','3 teman menyerang, masing-masing 10 damage. Totalnya?'],30,MUL(3,10)),
  P('eng',['The dragon is defeated. Zero says ...','Naga kalah. Zero berkata ...'],['We did it!','I am sleepy.','Good night.'],'We did it!','<b>We did it!</b> = Kita berhasil!'),
  M(['FINAL BOSS! The dragon has 100 HP. Zero hits 55. HP left?','BOS TERAKHIR! Naga punya 100 HP. Zero menyerang 55. Sisa HP?'],45,SUB(100,55))]},
];
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

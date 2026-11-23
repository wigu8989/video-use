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

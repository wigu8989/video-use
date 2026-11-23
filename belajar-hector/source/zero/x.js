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
/* ================= STORY ================= */
/* text: [english, indonesian, speaker]  speaker: n=narrator z=Zero b=Bobo r=Grumble ; *word* = vocabulary */
const VOC={hero:'pahlawan',planet:'planet',broken:'rusak',purple:'ungu',sky:'langit',monster:'monster',green:'hijau',eyes:'mata',feet:'kaki',scared:'takut',happy:'senang',hungry:'lapar',apples:'apel',tree:'pohon',five:'lima',three:'tiga',big:'besar',angry:'marah',sad:'sedih',brave:'berani',help:'menolong',foot:'kaki',friends:'teman-teman',fix:'memperbaiki',home:'rumah',goodbye:'selamat tinggal',spaceship:'pesawat luar angkasa',red:'merah',white:'putih',sword:'pedang',walks:'berjalan',forest:'hutan',rock:'batu',thank:'terima kasih',fly:'terbang',grey:'abu-abu',two:'dua'};
const CH=[
 {title:'Crash!',idn:'Jatuh!',thumb:0,panels:[
  {cam:'push',art:()=>sky('night')+stars(70,1,260)+`<g class="streak">${g(120,90,.5,ship('fly'),'','transform="rotate(28)"')}</g>`+moons([500,90,30],[580,150,14])+hills('#1A0B33','#24104A','#2F145E'),
   text:[['This is *Zero*. Zero is a *hero*.','Ini Zero. Zero adalah seorang pahlawan.','n'],['He flies in a *white* *spaceship*.','Dia terbang dengan pesawat luar angkasa putih.','n']]},
  {cam:'impact',art:()=>sky('dusk')+stars(40,2,180)+moons()+hills('#3A1A66','#2A1450','#1F0E3E')+plant(80,360,.9)+plant(580,370,.8)+crashFX(330,310,1,.3)+flashRect(.3),
   text:[['Boom! Oh no! The spaceship is *broken*.','Bum! Oh tidak! Pesawatnya rusak.','n']]},
  {cam:'pan',art:()=>sky('dusk')+stars(40,3,180)+moons()+hills('#3A1A66','#2A1450','#1F0E3E')+g(470,330,.6,ship('broken'))+g(200,380,1,zero('stand'),'breathe')+plant(60,380,1.1)+plant(600,380,.9)+mist(),
   text:[['Zero has a white suit and a *red* *sword*.','Zero punya baju putih dan pedang merah.','n']]},
  {cam:'push',art:()=>sky('dusk')+stars(50,4,200)+moons([420,100,44],[530,70,18])+hills('#3A1A66','#2A1450','#1F0E3E')+g(250,385,1.1,zero('scared'),'breathe')+plant(80,390,1.2)+plant(560,380,1.1)+mist(),
   text:[['The *sky* is *purple*. There are two moons!','Langitnya ungu. Ada dua bulan!','n'],['Where am I?','Aku di mana?','z']]}],
  quiz:[{q:['What color is the sky?','Apa warna langitnya?'],opts:['blue','purple','green'],ans:'purple',pic:()=>moons([60,60,30],[120,30,10]),note:'The sky is <b>purple</b>. Langitnya ungu.'},
        {q:['Is the spaceship broken?','Apakah pesawatnya rusak?'],opts:['Yes, it is.','No, it is not.'],ans:'Yes, it is.',note:'Boom! The spaceship is broken. Pesawatnya rusak.'},
        {q:['What color is Zero\'s sword?','Apa warna pedang Zero?'],opts:['red','yellow','blue'],ans:'red',note:'Zero has a <b>red</b> sword. Pedangnya merah.'}],
  speak:[{say:'I am Zero.',id:'Aku Zero.'},{say:'The sky is purple.',id:'Langitnya ungu.'}]},
 {title:'The Green Monster',idn:'Monster Hijau',panels:[
  {cam:'pan',art:()=>sky('forest')+stars(20,5,120)+alienTree(90,370,1.1)+alienTree(560,380,1.2)+alienTree(330,330,.7)+hills('#0F3A44','#0C2E36','#082228').replace('M0 250','M0 450')+g(260,385,1,zero('walk'),'walkin')+plant(450,390,.9)+mist(),
   text:[['Zero *walks* in the *forest*.','Zero berjalan di hutan.','n'],['The trees are purple.','Pohon-pohonnya ungu.','n']]},
  {cam:'push',art:()=>sky('forest')+alienTree(100,370,1.1)+alienTree(560,380,1.1)+ground('#0C2E36','#082228')+g(470,380,1.3,bobo('wow'),'popin')+g(170,385,.95,zero('scared'),'shiver')+mist(),
   text:[['Look! A big green *monster*!','Lihat! Monster hijau yang besar!','n'],['Zero is *scared*.','Zero takut.','n']]},
  {cam:'zoom',art:()=>sky('forest')+alienTree(80,380,1)+ground('#0C2E36','#082228')+g(330,390,2,bobo('happy'),'bounce')+mist(),
   text:[['The monster has *three* *eyes* and two big *feet*.','Monster itu punya tiga mata dan dua kaki besar.','n']]},
  {cam:'push',art:()=>sky('forest')+alienTree(90,370,1.1)+alienTree(570,380,1)+ground('#0C2E36','#082228')+g(440,385,1.3,bobo('happy'),'bounce')+g(190,385,.95,zero('wave'),'breathe')+mist(),
   text:[['Hello! I am Bobo. I am *happy* to see you!','Halo! Aku Bobo. Aku senang bertemu kamu!','b'],['Hello, Bobo!','Halo, Bobo!','z']]}],
  quiz:[{q:['How many eyes does Bobo have?','Bobo punya berapa mata?'],opts:['two','three','four'],ans:'three',pic:()=>g(60,110,.7,bobo('happy')),note:'Bobo has <b>three</b> eyes. Bobo punya tiga mata.'},
        {q:['What color is Bobo?','Apa warna Bobo?'],opts:['green','red','grey'],ans:'green',pic:()=>g(60,110,.7,bobo('happy')),note:'Bobo is a <b>green</b> monster.'},
        {q:['Is Bobo angry?','Apakah Bobo marah?'],opts:['Yes, he is.','No, he is happy.'],ans:'No, he is happy.',note:'Bobo is <b>happy</b>, not angry. Bobo senang, tidak marah.'}],
  speak:[{say:'Hello, Bobo!',id:'Halo, Bobo!'},{say:'I am happy.',id:'Aku senang.'}]},
 {title:'Hungry Bobo',idn:'Bobo Lapar',panels:[
  {cam:'push',art:()=>sky('dusk')+moons()+hills('#3A1A66','#2A1450','#1F0E3E')+g(400,385,1.4,bobo('sad'),'breathe')+g(180,385,.95,zero('stand'),'breathe')+`<text x="440" y="190" font-family="Fredoka,system-ui,sans-serif" font-size="30" font-weight="700" fill="#FFD25A" class="rumble">grrr...</text>`,
   text:[['Grrr... Bobo is *hungry*.','Grrr... Bobo lapar.','n'],['I am hungry!','Aku lapar!','b']]},
  {cam:'pan',art:()=>sky('dusk')+moons()+hills('#3A1A66','#2A1450','#1F0E3E')+alienTree(420,390,1.5,true)+g(170,390,.95,zero('wave'),'breathe')+g(300,390,.8,bobo('wow'),'bounce'),
   text:[['Look! Red *apples* in the *tree*!','Lihat! Apel merah di pohon!','z']]},
  {cam:'push',art:()=>sky('dusk')+moons()+hills('#3A1A66','#2A1450','#1F0E3E')+alienTree(470,390,1.3,true)+g(250,390,1,zero('sword'),'jump')+[0,1,2,3,4].map(i=>`<g class="fall" style="animation-delay:${i*.25}s">${apple(360+i*22,180+i*6,1.4)}</g>`).join(''),
   text:[['Zero jumps. He gets five apples.','Zero melompat. Dia mendapat lima apel.','n']]},
  {cam:'zoom',art:()=>sky('dusk')+moons()+hills('#3A1A66','#2A1450','#1F0E3E')+g(330,390,1.8,bobo('happy'),'bounce')+[0,1,2,3,4].map(i=>apple(210+i*60,385,1.6)).join('')+`<text x="440" y="120" font-family="Fredoka,system-ui,sans-serif" font-size="40" font-weight="700" fill="#FFD25A" class="popin">Yum!</text>`,
   text:[['Bobo eats *five* apples. Yum!','Bobo makan lima apel. Enak!','n'],['Thank you, Zero!','Terima kasih, Zero!','b']]}],
  quiz:[{q:['Where are the apples?','Di mana apelnya?'],opts:['in the tree','under the rock','in the ship'],ans:'in the tree',pic:()=>alienTree(80,240,.9,true),note:'The apples are <b>in the tree</b>. Apelnya ada di pohon.'},
        {q:['How many apples does Bobo eat?','Berapa apel yang Bobo makan?'],opts:['three','five','ten'],ans:'five',pic:()=>[0,1,2,3,4].map(i=>apple(22+i*28,60,1.2)).join(''),note:'Bobo eats <b>five</b> apples.'},
        {q:['Bobo is ...','Bobo merasa ...'],opts:['hungry','tired','scared'],ans:'hungry',note:'Grrr... Bobo is <b>hungry</b>. Bobo lapar.'}],
  speak:[{say:'I am hungry.',id:'Aku lapar.'},{say:'Thank you, Zero!',id:'Terima kasih, Zero!'}]},
 {title:'The Rock Monster',idn:'Monster Batu',panels:[
  {cam:'shake',art:()=>sky('storm')+wind()+rain()+hills('#1E2230','#181B26','#11131B')+g(450,390,1.3,grumble('angry'),'stomp')+g(160,390,.9,zero('scared'),'shiver')+g(250,392,.7,bobo('wow'),'shiver')+`<rect width="640" height="400" fill="#fff" class="flash"/>`,
   text:[['Stomp! Stomp! A *big* *rock* monster!','Gedebuk! Gedebuk! Monster batu yang besar!','n'],['He is *grey* and very *angry*.','Dia berwarna abu-abu dan sangat marah.','n']]},
  {cam:'push',art:()=>sky('storm')+rain()+hills('#1E2230','#181B26','#11131B')+g(470,390,1.2,grumble('angry'))+g(200,390,1.05,zero('sword'),'breathe'),
   text:[['Zero is *brave*. He holds his red sword.','Zero berani. Dia memegang pedang merahnya.','n']]},
  {cam:'zoom',art:()=>sky('storm')+rain()+hills('#1E2230','#181B26','#11131B')+g(420,390,1.3,grumble('sad'))+g(150,392,.85,bobo('wow'),'bounce'),
   text:[['Stop, Zero! He is not angry. He is *sad*.','Berhenti, Zero! Dia tidak marah. Dia sedih.','b'],['Look at his foot!','Lihat kakinya!','b']]},
  {cam:'push',art:()=>sky('dusk')+moons()+hills('#3A1A66','#2A1450','#1F0E3E')+g(430,390,1.3,grumble('happy',false),'breathe')+g(200,390,1,zero('wave'),'breathe')+`<g class="sparkle">${[0,1,2,3].map(i=>`<path d="M${500+i*14} ${360-i*20} l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3z" fill="#FFE27A"/>`).join('')}</g>`,
   text:[['Zero helps him. "I can *help* you."','Zero menolongnya. "Aku bisa menolongmu."','n'],['Thank you! My name is Grumble.','Terima kasih! Namaku Grumble.','r']]}],
  quiz:[{q:['What color is the rock monster?','Apa warna monster batu?'],opts:['green','grey','purple'],ans:'grey',pic:()=>g(80,230,.5,grumble('angry')),note:'The rock monster is <b>grey</b>. Abu-abu.'},
        {q:['Why is Grumble sad?','Kenapa Grumble sedih?'],opts:['His foot hurts.','He is hungry.','He is tired.'],ans:'His foot hurts.',note:'Look at his foot! Kakinya sakit karena duri.'},
        {q:['Zero is ...','Zero itu ...'],opts:['brave','angry','sleepy'],ans:'brave',note:'Zero is <b>brave</b>. Zero berani.'}],
  speak:[{say:'I can help you.',id:'Aku bisa menolongmu.'},{say:'He is sad.',id:'Dia sedih.'}]},
 {title:'Going Home',idn:'Pulang',panels:[
  {cam:'pan',art:()=>sky('dawn')+stars(20,6,100)+moons([520,110,40],[590,60,14])+hills('#5A2A6E','#3E1E5A','#2A1442')+g(330,330,.85,ship('broken'))+g(140,392,.95,zero('stand'),'breathe')+g(250,394,.75,bobo('happy'),'bounce')+g(540,394,.9,grumble('happy',false),'breathe'),
   text:[['Now Bobo and Grumble are Zero\'s *friends*.','Sekarang Bobo dan Grumble adalah teman Zero.','n']]},
  {cam:'push',art:()=>sky('dawn')+moons([520,110,40],[590,60,14])+hills('#5A2A6E','#3E1E5A','#2A1442')+g(330,320,.9,ship('ok'),'lift')+g(560,394,.95,grumble('happy',false),'stomp')+g(130,394,.8,bobo('happy'),'bounce')+`<g class="sparkle">${[0,1,2,3,4].map(i=>`<path d="M${260+i*40} ${270-i*8} l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3z" fill="#FFE27A"/>`).join('')}</g>`,
   text:[['They *fix* the spaceship together.','Mereka memperbaiki pesawat bersama-sama.','n']]},
  {cam:'zoom',art:()=>sky('dawn')+moons([520,110,40],[590,60,14])+hills('#5A2A6E','#3E1E5A','#2A1442')+g(320,392,1.3,zero('wave'),'breathe')+g(120,394,.8,bobo('happy'),'bounce')+g(540,394,.9,grumble('happy',false)),
   text:[['Thank you, my friends!','Terima kasih, teman-temanku!','z']]},
  {cam:'up',art:()=>sky('dawn')+stars(30,7,140)+moons([520,110,40],[590,60,14])+`<g class="takeoff">${g(320,260,.8,ship('fly'),'','transform="rotate(-18)"')}</g>`+hills('#5A2A6E','#3E1E5A','#2A1442')+g(170,394,.7,bobo('happy'),'bounce')+g(470,394,.8,grumble('happy',false),'wavebye'),
   text:[['Zero flies *home*. *Goodbye*, Planet Mora!','Zero terbang pulang. Selamat tinggal, Planet Mora!','n'],['Goodbye, Zero!','Selamat tinggal, Zero!','b']]}],
  quiz:[{q:['Who are Zero\'s friends?','Siapa teman-teman Zero?'],opts:['Bobo and Grumble','the moons','the apples'],ans:'Bobo and Grumble',pic:()=>g(50,120,.5,bobo('happy'))+g(140,120,.4,grumble('happy',false)),note:'Bobo and Grumble are Zero\'s <b>friends</b>.'},
        {q:['What do they fix?','Apa yang mereka perbaiki?'],opts:['the tree','the spaceship','the sword'],ans:'the spaceship',note:'They fix <b>the spaceship</b>. Mereka memperbaiki pesawat.'},
        {q:['What does Zero say?','Apa yang Zero ucapkan?'],opts:['Thank you!','I am hungry!','Grrr!'],ans:'Thank you!',note:'Zero says, "<b>Thank you</b>, my friends!"'}],
  speak:[{say:'Thank you, my friends!',id:'Terima kasih, teman-temanku!'},{say:'Goodbye!',id:'Selamat tinggal!'}]},
];
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

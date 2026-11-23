/* ---------- gambar petualangan ---------- */
const islArt={
 animals:`<path d="M-46 12 q-6 -30 18 -34 q10 -20 32 -8 q22 -10 34 10 q16 10 6 32z" fill="#3E9B5A" stroke="#245E37" stroke-width="2"/>
   <path d="M30 12 q-2 -26 8 -46" stroke="#7A4A22" stroke-width="5" fill="none" stroke-linecap="round"/>${[[-26,-6],[-12,-20],[10,-18],[22,-2]].map(([a,b])=>`<path d="M38 -34 q${a*.5} ${b*.5-6} ${a} ${b}" stroke="#2E8B3E" stroke-width="6" fill="none" stroke-linecap="round"/>`).join('')}
   <path d="M-34 12 q0 -20 -4 -36" stroke="#7A4A22" stroke-width="4" fill="none" stroke-linecap="round"/>${[[-20,-4],[-8,-16],[10,-14],[18,-2]].map(([a,b])=>`<path d="M-38 -24 q${a*.5} ${b*.5-6} ${a} ${b}" stroke="#37A04F" stroke-width="5" fill="none" stroke-linecap="round"/>`).join('')}
   <g transform="translate(-2 -6) scale(1.15)">${IC0.monyet}</g>`,
 colors:`<path d="M-42 14 L-30 -22 L8 -30 L30 -8 L44 14z" fill="#A9B4BF" stroke="#5E6676" stroke-width="2"/><path d="M-22 -16 l12 -4 M14 -18 l8 8" stroke="#7E8C99" stroke-width="2"/>
   <rect x="0" y="-26" width="13" height="40" fill="#BFE9FF"/><path d="M3 -24 v36 M9 -20 v34" stroke="#fff" stroke-width="2" stroke-dasharray="6 5" class="fall"/>
   ${['#E5484D','#F58A1F','#F5C518','#3FA34D','#3D7BE0','#8E5BD8'].map((c,i)=>`<path d="M${-44+i*5} -14 A${44-i*5} ${44-i*5} 0 0 1 ${44-i*5} -14" stroke="${c}" stroke-width="5" fill="none" opacity=".9"/>`).join('')}
   <circle cx="6" cy="14" r="9" fill="#fff" opacity=".7"/><circle cx="16" cy="12" r="6" fill="#fff" opacity=".6"/>`,
 numbers:`<path d="M-52 16 L-16 -40 L4 -22 L20 -46 L54 16z" fill="#9C7A55" stroke="#4E3A28" stroke-width="2"/><path d="M20 -46 L28 -32 L22 -30 L14 -36z" fill="#fff" opacity=".85"/><path d="M-16 -40 L-8 -28 L-18 -30z" fill="#fff" opacity=".85"/>
   <path d="M-14 16 q0 -28 16 -28 q16 0 16 28z" fill="#24160C"/><circle cx="2" cy="4" r="9" fill="#FFC93C" opacity=".35"/>
   <text x="2" y="-18" text-anchor="middle" font-family="Fredoka,system-ui,sans-serif" font-weight="700" font-size="15" fill="#FFE07A" stroke="#7A4A22" stroke-width=".8">1 2 3</text>`,
 fruits:`<path d="M-52 14 q22 -38 52 -32 q32 -4 52 32z" fill="#7CC456" stroke="#3E7D2A" stroke-width="2"/>
   ${[[-26,-24,'#E5484D'],[22,-26,'#F5A623']].map(([x,y,c])=>`<path d="M${x} ${y+28} v-20" stroke="#7A4A22" stroke-width="5"/><circle cx="${x}" cy="${y}" r="16" fill="#3E9B5A" stroke="#245E37" stroke-width="2"/>${[[-7,-4],[6,-7],[0,5],[8,4]].map(([a,b])=>`<circle cx="${x+a}" cy="${y+b}" r="3.4" fill="${c}"/>`).join('')}`).join('')}
   <g transform="translate(0 0) scale(.95)">${IC0.nanas}</g>`,
 classroom:`<rect x="-30" y="-20" width="60" height="34" fill="#D9CCF0" stroke="#5B3FA0" stroke-width="2"/><path d="M-30 -20 h8 v-6 h8 v6 h8 v-6 h8 v6 h8 v-6 h8 v6 h6" fill="none" stroke="#5B3FA0" stroke-width="2"/>
   ${[-36,36].map(x=>`<rect x="${x-8}" y="-34" width="16" height="48" fill="#C9B8E8" stroke="#5B3FA0" stroke-width="2"/><path d="M${x-11} -34 L${x} -54 L${x+11} -34z" fill="#8E5BD8" stroke="#5B3FA0" stroke-width="2"/><rect x="${x-3}" y="-24" width="6" height="8" rx="3" fill="#FFD86B"/>`).join('')}
   <path d="M36 -54 v-12" stroke="#5B3FA0" stroke-width="2"/><path d="M36 -66 l12 4 l-12 4z" fill="#E5484D"/>
   <path d="M-8 14 v-12 a8 8 0 0 1 16 0 v12z" fill="#7A4A22"/><g transform="translate(0 -8) scale(.55)">${''}</g>`
};
const islBase=`<ellipse cy="28" rx="66" ry="15" fill="#5FA9BC" opacity=".35"/><path d="M-58 18 q8 -16 58 -18 q50 2 58 18 q-58 18 -116 0z" fill="#EBCB8B" stroke="#A67A3E" stroke-width="2"/>`;
function chestSVG(open){return open?`<g><circle r="40" fill="#FFE27A" opacity=".5" class="glow"/><path d="M-24 -4 h48 v24 h-48z" fill="#8B5A2B" stroke="#4E2E12" stroke-width="2.5"/><path d="M-24 -4 l4 -26 h40 l4 26" fill="#A0703F" stroke="#4E2E12" stroke-width="2.5"/>${[-14,-4,6,14,-9,1,10].map((x,i)=>`<circle cx="${x}" cy="${-6-(i>3?6:0)}" r="5" fill="#FFC93C" stroke="#C98A00"/>`).join('')}<rect x="-26" y="2" width="52" height="5" fill="#C9A23A"/></g>`
  :`<g><path d="M-24 -6 h48 v26 h-48z" fill="#8B5A2B" stroke="#4E2E12" stroke-width="2.5"/><path d="M-24 -6 q24 -22 48 0z" fill="#A0703F" stroke="#4E2E12" stroke-width="2.5"/><rect x="-26" y="0" width="52" height="5" fill="#C9A23A"/><rect x="-5" y="-2" width="10" height="12" rx="2" fill="#FFD86B" stroke="#8A6A10"/></g>`}
function mapSVG(){const pos=[[112,290],[232,168],[358,292],[474,168],[566,300]];const next=ISL.findIndex(i=>!SAVE[i.key]?.done);const all=next<0;const bp=pos[all?4:next];
  const T=[585,80];
  const route=`<path d="M${pos[0][0]} ${pos[0][1]} Q172 220 ${pos[1][0]} ${pos[1][1]} Q300 250 ${pos[2][0]} ${pos[2][1]} Q410 230 ${pos[3][0]} ${pos[3][1]} Q540 220 ${pos[4][0]} ${pos[4][1]} Q640 220 ${T[0]} ${T[1]+30}" stroke="#B3362B" stroke-width="3.5" stroke-dasharray="9 8" stroke-linecap="round" fill="none"/>`;
  const marks=[...Array(26)].map((_,i)=>{const x=40+(i*137)%560,y=110+(i*83)%250;return `<path d="M${x} ${y} q5 -5 10 0 t10 0" stroke="#3E8CA3" stroke-width="2" fill="none" opacity=".5"/>`}).join('');
  const isl=ISL.map((I,i)=>{const [x,y]=pos[i],st=islStars(I.key),done=SAVE[I.key]?.done;return `<g class="isl" data-open="${i}" tabindex="0" role="button" aria-label="${I.en}, ${I.idn}"><g class="ib"><g transform="translate(${x} ${y})">
    ${i===next?`<ellipse cy="20" rx="74" ry="24" fill="none" stroke="#FFF6D8" stroke-width="3" class="pulse"/>`:''}${islBase}${islArt[I.key]}
    ${done?`<path d="M-50 10 v-34" stroke="#4E2E12" stroke-width="2.5"/><path d="M-50 -24 l16 5 l-16 5z" fill="${I.c}"/>`:''}
    <path d="M-62 36 h124 l-8 12 l8 12 h-124 l8 -12z" fill="#F7E7C0" stroke="#8A6234" stroke-width="2"/><text class="mlab" y="54" text-anchor="middle">${I.en}</text>
    ${st?`<g transform="translate(-26 -72)">${[0,1,2].map(j=>`<g transform="translate(${j*26} 0)">${STAR(j<st).replace('<svg','<svg width="24" height="24" x="-12" y="-12"')}</g>`).join('')}</g>`:''}
  </g></g></g>`}).join('');
  const ship=`<g transform="translate(${bp[0]-96} ${bp[1]+6})"><g class="boat"><path d="M-4 0 h48 l-8 13 h-32z" fill="#7A3E1A" stroke="#4E2E12" stroke-width="2"/><path d="M20 0 v-38" stroke="#4E2E12" stroke-width="3"/><path d="M22 -36 q14 12 0 28z" fill="#F7F1E0" stroke="#8A6234"/><path d="M18 -34 q-16 12 0 26z" fill="#F7F1E0" stroke="#8A6234"/><path d="M20 -38 l12 -4 l-12 -4z" fill="#E5484D"/></g></g>`;
  const compass=`<g transform="translate(400 72)"><circle r="34" fill="#F3E2B6" stroke="#8A6234" stroke-width="2"/><circle r="26" fill="none" stroke="#8A6234" stroke-dasharray="2 4"/><path d="M0 -32 L6 0 L0 32 L-6 0Z" fill="#B3362B"/><path d="M-32 0 L0 -6 L32 0 L0 6Z" fill="#5E3A1E"/><circle r="4" fill="#F3E2B6" stroke="#5E3A1E"/><text y="-38" text-anchor="middle" font-family="Fredoka,system-ui,sans-serif" font-weight="700" font-size="14" fill="#5E3A1E">N</text></g>`;
  const serpent=`<g transform="translate(232 372)" opacity=".9">${[0,30,60].map(d=>`<path d="M${d-12} 0 q12 -22 24 0" fill="#3FA34D" stroke="#245E37" stroke-width="2"/>`).join('')}<circle cx="-22" cy="-10" r="9" fill="#3FA34D" stroke="#245E37" stroke-width="2"/><circle cx="-25" cy="-12" r="2.2" fill="#173A50"/><path d="M60 0 q10 -8 16 -2" stroke="#245E37" stroke-width="3" fill="none"/></g>`;
  const treasure=`<g transform="translate(${T[0]} ${T[1]})" aria-label="Harta karun"><path d="M-14 26 l28 18 M14 26 l-28 18" stroke="#B3362B" stroke-width="5" stroke-linecap="round"/>${chestSVG(all)}</g>`;
  return `<svg viewBox="0 0 640 400" role="img" aria-label="Peta harta karun lima pulau">
   <defs><radialGradient id="parch" cx=".5" cy=".5" r=".72"><stop offset=".55" stop-color="#F2DFAF"/><stop offset=".88" stop-color="#E2C389"/><stop offset="1" stop-color="#B98A4E"/></radialGradient></defs>
   <rect width="640" height="400" fill="url(#parch)"/>
   <path d="M20 96 C120 80 200 110 300 96 S520 90 625 120 L630 390 L12 392Z" fill="#8FCFDC" opacity=".55"/>
   ${[...Array(7)].map((_,i)=>`<path d="M${i*100+20} 10 V390" stroke="#C9A86A" stroke-dasharray="3 7" opacity=".5"/>`).join('')}${[...Array(4)].map((_,i)=>`<path d="M10 ${i*100+20} H630" stroke="#C9A86A" stroke-dasharray="3 7" opacity=".5"/>`).join('')}
   ${marks}<circle cx="520" cy="372" r="20" fill="#B98A4E" opacity=".15"/><circle cx="90" cy="150" r="14" fill="#B98A4E" opacity=".12"/>
   <g transform="translate(22 20)"><path d="M0 0 h268 l-12 22 l12 22 h-268 l12 -22z" fill="#B3362B" stroke="#7A1F18" stroke-width="2"/><text x="134" y="31" text-anchor="middle" font-family="Fredoka,system-ui,sans-serif" font-weight="700" font-size="24" fill="#FFF6D8">English Island</text></g>
   <text x="34" y="84" font-family="Fredoka,system-ui,sans-serif" font-weight="600" font-size="15" fill="#7A4A22">Treasure Map · Peta Harta Karun</text>
   ${compass}${serpent}${route}${treasure}${isl}${ship}</svg>`}

function scene(I,i){const k=I.key;let s='';
  if(k==='animals')s=`<defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1F6E54"/><stop offset="1" stop-color="#9BE0B0"/></linearGradient></defs><rect width="640" height="180" fill="url(#sg)"/>
    ${[0,1,2,3].map(r=>`<path d="M${380+r*50} 0 L${300+r*70} 180" stroke="#FFF6C8" stroke-width="28" opacity=".08"/>`).join('')}
    <path d="M0 120 Q80 70 160 110 T340 100 T520 90 T640 110 V180 H0Z" fill="#3E9B6A"/><path d="M0 150 Q100 110 200 140 T420 130 T640 140 V180 H0Z" fill="#256B47"/>
    ${[60,180,300,420,560].map((x,j)=>`<path d="M${x} 0 q${j%2?-14:14} 40 ${j%2?6:-6} ${70+j*8}" stroke="#1C5E3A" stroke-width="4" fill="none"/>${[20,40,60].map(y=>`<ellipse cx="${x+(j%2?-4:4)}" cy="${y}" rx="8" ry="4" fill="#2E8B4E" transform="rotate(${j%2?-30:30} ${x} ${y})"/>`).join('')}`).join('')}
    <g transform="translate(490 104) scale(2.2)" class="swing">${IC0.monyet}</g><path d="M490 0 V82" stroke="#1C5E3A" stroke-width="4"/>
    <path d="M0 180 q30 -70 90 -60 q-40 20 -50 60z M640 180 q-30 -80 -100 -66 q46 20 54 66z" fill="#16492E"/>
    ${[[120,60],[250,40],[600,50],[350,80]].map(([x,y],j)=>`<circle cx="${x}" cy="${y}" r="3" fill="#FFF59A" class="fly" style="animation-delay:${j*.6}s"/>`).join('')}`;
  if(k==='colors')s=`<defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5CC0EE"/><stop offset="1" stop-color="#D8F3FF"/></linearGradient></defs><rect width="640" height="180" fill="url(#sg)"/>
    ${['#E5484D','#F58A1F','#F5C518','#3FA34D','#3D7BE0','#8E5BD8'].map((c,j)=>`<path d="M${260+j*12} 190 A${170-j*12} ${170-j*12} 0 0 1 ${600-j*12} 190" stroke="${c}" stroke-width="12" fill="none" opacity=".85"/>`).join('')}
    <path d="M460 0 L470 180 H640 V0Z" fill="#8C9AA6"/><path d="M470 30 h56 v150 h-60z" fill="#BFE9FF"/><path d="M482 30 v150 M500 30 v150 M516 30 v150" stroke="#fff" stroke-width="4" stroke-dasharray="14 10" class="fall"/>
    <path d="M520 0 L540 180 H640 V0Z" fill="#6F7E8B"/><circle cx="496" cy="176" r="26" fill="#fff" opacity=".7"/><circle cx="530" cy="170" r="18" fill="#fff" opacity=".6"/>
    <path d="M0 150 Q120 120 260 150 T460 150 V180 H0Z" fill="#5FB36A"/>
    ${[['#E5484D',380,70],['#F5C518',420,40],['#3D7BE0',600,60]].map(([c,x,y],j)=>`<g transform="translate(${x} ${y}) scale(1.6)" class="floaty" style="animation-delay:${j*.7}s">${balloon(c)}</g>`).join('')}`;
  if(k==='numbers')s=`<defs><radialGradient id="sg" cx=".7" cy=".7" r=".9"><stop offset="0" stop-color="#6B4A2E"/><stop offset="1" stop-color="#1B1226"/></radialGradient></defs><rect width="640" height="180" fill="url(#sg)"/>
    <path d="M330 180 Q330 40 480 40 Q630 40 630 180Z" fill="#2A1A10"/><path d="M360 180 Q360 70 480 70 Q600 70 600 180Z" fill="#FFB84D" opacity=".18"/>
    ${[[60,40,'7'],[150,120,'3'],[250,50,'9'],[400,110,'1'],[560,120,'5'],[200,150,'2'],[520,90,'8']].map(([x,y,t],j)=>`<text x="${x}" y="${y}" font-family="Fredoka,system-ui,sans-serif" font-weight="700" font-size="${26+j%3*6}" fill="#FFD86B" class="fly" style="animation-delay:${j*.4}s">${t}</text>`).join('')}
    ${[[300,180],[620,180],[30,180]].map(([x,y])=>`<path d="M${x-14} ${y} l8 -44 l6 30 l8 -50 l8 64z" fill="#9F7BE0" opacity=".85"/><path d="M${x-6} ${y-44} l4 20" stroke="#E5DBFF" stroke-width="2"/>`).join('')}
    ${[350,610].map(x=>`<path d="M${x} 150 v-40" stroke="#7A4A22" stroke-width="6"/><path d="M${x} 112 q-12 -14 0 -32 q12 18 0 32z" fill="#FFB020" class="flame"/><path d="M${x} 110 q-5 -8 0 -16 q5 8 0 16z" fill="#FFF0A0"/>`).join('')}`;
  if(k==='fruits')s=`<defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFA54F"/><stop offset="1" stop-color="#FFE9B8"/></linearGradient></defs><rect width="640" height="180" fill="url(#sg)"/>
    <circle cx="500" cy="70" r="40" fill="#FFE27A"/><circle cx="500" cy="70" r="58" fill="#FFE27A" opacity=".3"/>
    <path d="M0 120 Q160 60 320 110 T640 100 V180 H0Z" fill="#9AD06A"/><path d="M0 150 Q200 110 400 150 T640 140 V180 H0Z" fill="#6DB045"/>
    ${[[360,92,'#E5484D'],[430,100,'#F5A623'],[600,96,'#F5C518']].map(([x,y,c])=>`<path d="M${x} ${y+40} v-30" stroke="#7A4A22" stroke-width="7"/><circle cx="${x}" cy="${y}" r="28" fill="#3E9B5A"/><circle cx="${x-14}" cy="${y+6}" r="20" fill="#358A4E"/>${[[-10,-8],[8,-12],[0,6],[14,4],[-18,8]].map(([a,b])=>`<circle cx="${x+a}" cy="${y+b}" r="5" fill="${c}"/>`).join('')}`).join('')}
    <g transform="translate(520 150) scale(1.7)">${IC0.semangka}</g><g transform="translate(300 150) scale(1.5)">${IC0.nanas}</g>`;
  if(k==='classroom')s=`<defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2E2466"/><stop offset="1" stop-color="#9C7BE0"/></linearGradient></defs><rect width="640" height="180" fill="url(#sg)"/>
    ${[...Array(18)].map((_,j)=>`<circle cx="${(j*97)%640}" cy="${(j*41)%90+8}" r="${1+j%3*.6}" fill="#fff" opacity=".8" class="fly" style="animation-delay:${j*.3}s"/>`).join('')}<circle cx="300" cy="40" r="20" fill="#FFF3C4"/><circle cx="310" cy="34" r="18" fill="#2E2466" opacity=".0"/>
    <path d="M380 180 V90 h20 v-14 h14 v14 h20 v-14 h14 v14 h20 V180z" fill="#2A1F4D"/>${[[370,60],[520,52]].map(([x,y])=>`<rect x="${x}" y="${y}" width="34" height="128" fill="#2A1F4D"/><path d="M${x-6} ${y} L${x+17} ${y-40} L${x+40} ${y}z" fill="#3C2C6E"/><path d="M${x+17} ${y-40} v-14" stroke="#2A1F4D" stroke-width="3"/><path d="M${x+17} ${y-54} l14 5 l-14 5z" fill="#E5484D"/><rect x="${x+11}" y="${y+20}" width="12" height="16" rx="6" fill="#FFD86B"/>`).join('')}
    ${[[420,110],[470,110],[445,140]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="16" rx="6" fill="#FFD86B"/>`).join('')}
    ${[[600,60],[260,100],[620,130]].map(([x,y],j)=>`<g transform="translate(${x} ${y}) scale(1.4)" class="floaty" style="animation-delay:${j*.8}s">${IC.book}</g>`).join('')}`;
  return `<div class="scene" style="--c:${I.c}"><svg viewBox="0 0 640 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${s}</svg>
    <div class="scene-t"><small>Stage ${i+1} · ${I.topic}</small><b>${I.en}</b><span>${I.idn}</span></div></div>`}

function renderMap(){
  const tot=ISL.reduce((a,i)=>a+i.words.length,0),got=ISL.filter(i=>SAVE[i.key]?.done).reduce((a,i)=>a+i.words.length,0),pieces=ISL.filter(i=>SAVE[i.key]?.done).length;
  app.innerHTML=`${DEFS}<header class="top">${polly('happy')}<div><h1>English <span>Island</span></h1><p>An English adventure with Polly · <i>Petualangan bahasa Inggris bersama Polly</i> · Kelas 2 SD</p></div>
    <div class="hud"><b>★ ${totalStars()} / 15</b><small>stars · bintang</small><b class="pc">${pieces} / 5</b><small>map pieces · potongan peta</small></div></header>
   <div class="mapbox">${mapSVG()}</div>
   ${pieces===5?`<div class="tip win">${G(chestSVG(true),56)}<span><b class="en">You found the treasure!</b><br>Kamu menemukan harta karun! Semua pulau sudah selesai. Coba kumpulkan 15 bintang.</span></div>`:
   `<div class="tip">${SPK}<span><b class="en">Finish all 5 islands to open the treasure chest!</b><br>Selesaikan 5 pulau untuk membuka peti harta. Nyalakan suara, lalu ketuk <b>Listen</b> untuk mendengar kata bahasa Inggris.</span></div>`}
   <section class="list" aria-label="Daftar pulau">${ISL.map((I,i)=>`<button class="icard" data-open="${i}" style="--c:${I.c};--cb:${I.cb}"><span class="pic">${G(I.icon(),50)}</span><span><small class="stg">Stage ${i+1} · ${I.topic}</small><h3>${I.en}</h3><span class="sub">${I.idn} · ${I.words.length} words · 6 quests</span><span class="stars">${[0,1,2].map(j=>STAR(j<islStars(I.key))).join('')}</span></span></button>`).join('')}</section>
   <section class="book"><h2>Treasure Book <small>Buku Stiker · ${got} / ${tot} stickers · selesaikan pulau untuk mendapat stikernya</small></h2>
    <div class="stk">${ISL.flatMap(I=>I.words).map(k=>`<button class="st ${learned(k)?'':'lock'}" data-say="${k}" aria-label="${k}">${pic(k,44)}<span>${learned(k)?k:'?'}</span></button>`).join('')}</div></section>`;
}

function setAccent(I){document.documentElement.style.setProperty('--ac',I.c);document.documentElement.style.setProperty('--ac2',I.cb)}
function barHTML(I,ph){return `<div class="bar"><button class="back" data-go="map">‹ Map</button>
  <div class="phase"><span class="${ph===0?'on':''}">1 Learn</span><span class="${ph===1?'on':''}">2 Quest</span><span class="${ph===2?'on':''}">3 Treasure</span></div></div>${scene(I,V.i)}`}

function openIsland(i){const I=ISL[i];setAccent(I);V={view:'learn',i};renderLearn();scrollTo({top:0})}
function renderLearn(){const I=ISL[V.i];
  app.innerHTML=`${DEFS}${barHTML(I,0)}<div class="card"><div class="say">${polly('happy')}<div class="bub"><span class="en">Hello! I am Polly. Tap a picture and listen.</span><span class="sm">Halo! Aku Polly. Ketuk gambar dan dengarkan. Ucapkan katanya bersama Polly, ya.</span></div></div>
   <div class="learn">${I.words.map(k=>`<button class="lc" data-say="${k}" data-lc="${k}">${pic(k,84,'p')}<b>${k}</b><small>${W[k].id}</small></button>`).join('')}</div>
   <div class="act"><button class="btn alt" id="all">${SPK} Listen to all</button><button class="btn" id="go">Start the quest ›</button></div></div>`;
  document.getElementById('all').onclick=async e=>{const b=e.currentTarget;b.disabled=true;for(const k of I.words){if(V.view!=='learn')break;const el=app.querySelector(`[data-lc="${k}"]`);el?.classList.add('on');await say(k);el?.classList.remove('on');await new Promise(r=>setTimeout(r,250))}b.disabled=false};
  document.getElementById('go').onclick=()=>startQuiz();
  if(!HAS_TTS)toast('Perangkat ini belum bisa membaca suara. Kata tetap bisa dibaca di layar.');
}

function scene(I,i){const k=I.key;let s='';
  if(k==='market')s=`<defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFA54F"/><stop offset="1" stop-color="#FFE9B8"/></linearGradient></defs><rect width="640" height="180" fill="url(#sg)"/>
    <circle cx="500" cy="70" r="40" fill="#FFE27A"/><circle cx="500" cy="70" r="58" fill="#FFE27A" opacity=".3"/>
    <path d="M0 120 Q160 60 320 110 T640 100 V180 H0Z" fill="#9AD06A"/><path d="M0 150 Q200 110 400 150 T640 140 V180 H0Z" fill="#6DB045"/>
    ${[[360,92,'#E5484D'],[430,100,'#F5A623'],[600,96,'#F5C518']].map(([x,y,c])=>`<path d="M${x} ${y+40} v-30" stroke="#7A4A22" stroke-width="7"/><circle cx="${x}" cy="${y}" r="28" fill="#3E9B5A"/><circle cx="${x-14}" cy="${y+6}" r="20" fill="#358A4E"/>${[[-10,-8],[8,-12],[0,6],[14,4],[-18,8]].map(([a,b])=>`<circle cx="${x+a}" cy="${y+b}" r="5" fill="${c}"/>`).join('')}`).join('')}
    <g transform="translate(520 150) scale(1.7)">${IC0.semangka}</g><g transform="translate(300 150) scale(1.5)">${IC0.nanas}</g>`;
  if(k==='milk')s=`<defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5CC0EE"/><stop offset="1" stop-color="#D8F3FF"/></linearGradient></defs><rect width="640" height="180" fill="url(#sg)"/>
    ${['#E5484D','#F58A1F','#F5C518','#3FA34D','#3D7BE0','#8E5BD8'].map((c,j)=>`<path d="M${260+j*12} 190 A${170-j*12} ${170-j*12} 0 0 1 ${600-j*12} 190" stroke="${c}" stroke-width="12" fill="none" opacity=".85"/>`).join('')}
    <path d="M460 0 L470 180 H640 V0Z" fill="#8C9AA6"/><path d="M470 30 h56 v150 h-60z" fill="#F4FAFF"/><path d="M482 30 v150 M500 30 v150 M516 30 v150" stroke="#fff" stroke-width="4" stroke-dasharray="14 10" class="fall"/>
    <path d="M520 0 L540 180 H640 V0Z" fill="#6F7E8B"/><circle cx="496" cy="176" r="26" fill="#fff" opacity=".7"/><circle cx="530" cy="170" r="18" fill="#fff" opacity=".6"/>
    <path d="M0 150 Q120 120 260 150 T460 150 V180 H0Z" fill="#5FB36A"/>
    ${[[IC.milk,380,70],[IC.g_milk,420,36],[IC.honey,600,60]].map(([c,x,y],j)=>`<g transform="translate(${x} ${y}) scale(1.5)" class="floaty" style="animation-delay:${j*.7}s">${c}</g>`).join('')}`;
  if(k==='ship')s=`<defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF9E6B"/><stop offset=".55" stop-color="#FFD9A0"/><stop offset=".56" stop-color="#2A9DB8"/><stop offset="1" stop-color="#0E5F7E"/></linearGradient></defs><rect width="640" height="180" fill="url(#sg)"/>
    <circle cx="560" cy="96" r="34" fill="#FFE27A" opacity=".9"/>${[0,1,2,3].map(r=>`<path class="wave" style="animation-duration:${5+r}s" d="M0 ${112+r*18} ${[...Array(10)].map(()=>'q20 -6 40 0 t40 0').join(' ')}" stroke="#fff" stroke-opacity=".3" stroke-width="2.5" fill="none"/>`).join('')}
    <g transform="translate(420 30)" class="boat"><path d="M-80 90 h170 l-24 34 h-124z" fill="#7A3E1A" stroke="#3E1E0A" stroke-width="3"/><path d="M-70 100 h150" stroke="#C9A23A" stroke-width="4"/>${[-40,0,40].map(x=>`<circle cx="${x}" cy="110" r="5" fill="#FFE07A" stroke="#3E1E0A" stroke-width="2"/>`).join('')}
      <path d="M0 90 V-10" stroke="#3E1E0A" stroke-width="5"/><path d="M4 -4 q50 40 0 86z" fill="#F7F1E0" stroke="#8A6234" stroke-width="2"/><path d="M-4 0 q-46 36 0 80z" fill="#F7F1E0" stroke="#8A6234" stroke-width="2"/><path d="M0 -10 l26 -8 l-26 -8z" fill="#E5484D"/>
      <g transform="translate(-60 74) scale(1.1)">${apple()}</g><g transform="translate(70 72) scale(1.1)">${IC.water}</g></g>
    ${[[120,40],[170,60],[300,30]].map(([x,y])=>`<path d="M${x-10} ${y} q5 -6 10 0 q5 -6 10 0" stroke="#5E3A1E" stroke-width="2.5" fill="none" class="floaty"/>`).join('')}`;
  if(k==='bakery')s=`<defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7A3A22"/><stop offset="1" stop-color="#E8A86B"/></linearGradient></defs><rect width="640" height="180" fill="url(#sg)"/>
    <path d="M380 180 V60 q0 -50 60 -50 h40 q60 0 60 50 V180z" fill="#5A2A16"/><path d="M405 180 V80 q0 -40 55 -40 q55 0 55 40 V180z" fill="#2A120A"/><path d="M420 180 q40 -70 80 0z" fill="#FF8A2A" class="flame"/><path d="M440 180 q20 -40 40 0z" fill="#FFE07A" class="flame"/>
    ${[56,112].map(y=>`<rect x="560" y="${y}" width="80" height="6" fill="#4E2410"/><rect x="250" y="${y}" width="110" height="6" fill="#4E2410"/>`).join('')}
    ${[[268,46],[300,46],[332,46],[268,102],[312,102]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="15" ry="10" fill="#D9A05B" stroke="#8A5228" stroke-width="2"/><path d="M${x-7} ${y-3} l4 6 M${x} ${y-4} l4 6 M${x+7} ${y-3} l3 5" stroke="#8A5228" stroke-width="1.6"/>`).join('')}
    ${[[580,46],[610,46],[590,102],[620,102]].map(([x,y])=>`<g transform="translate(${x} ${y}) scale(.7)">${IC.cookie}</g>`).join('')}
    <g transform="translate(330 150) scale(1.3)">${IC.g_milk}</g><g transform="translate(290 152) scale(1.2)">${IC.egg}</g>
    ${[[460,20],[480,8],[500,22]].map(([x,y],j)=>`<circle cx="${x}" cy="${y}" r="${8+j*2}" fill="#fff" opacity=".18" class="floaty" style="animation-delay:${j*.5}s"/>`).join('')}`;
  if(k==='picnic')s=`<defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7CCBF2"/><stop offset="1" stop-color="#E6F7FF"/></linearGradient><pattern id="chk" width="16" height="16" patternUnits="userSpaceOnUse"><rect width="16" height="16" fill="#fff"/><rect width="8" height="8" fill="#E5484D"/><rect x="8" y="8" width="8" height="8" fill="#E5484D"/></pattern></defs><rect width="640" height="180" fill="url(#sg)"/>
    <circle cx="300" cy="40" r="24" fill="#FFE27A"/><g class="cloud"><ellipse cx="80" cy="34" rx="34" ry="11" fill="#fff"/><ellipse cx="100" cy="26" rx="18" ry="11" fill="#fff"/></g>
    <path d="M0 110 Q140 60 300 100 T640 90 V180 H0Z" fill="#9AD06A"/><path d="M0 150 Q200 120 420 146 T640 140 V180 H0Z" fill="#6DB045"/>
    <path d="M560 140 v-60" stroke="#7A4A22" stroke-width="10"/><circle cx="560" cy="64" r="40" fill="#3E9B5A"/><circle cx="530" cy="80" r="26" fill="#358A4E"/><circle cx="592" cy="80" r="24" fill="#358A4E"/>
    <path d="M330 150 l150 -14 l40 30 l-160 14z" fill="url(#chk)" stroke="#B8283D" stroke-width="2"/>
    <g transform="translate(380 140) scale(1.2)">${IC.g_milk}</g><g transform="translate(420 146) scale(1)">${apple()}</g><g transform="translate(450 140) scale(1)">${apple()}</g><g transform="translate(486 146) scale(1.1)">${IC.bottle}</g>`;
  return `<div class="scene" style="--c:${I.c}"><svg viewBox="0 0 640 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${s}</svg>
    <div class="scene-t"><small>Stage ${i+1} · ${I.topic}</small><b>${I.en}</b><span>${I.idn}</span></div></div>`}


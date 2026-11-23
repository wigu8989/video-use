const HI='<circle r="13" fill="url(#xHi)"/>';
const IC0={
 monyet:`<circle cx="-13" cy="-4" r="6" fill="#8B5A2B"/><circle cx="13" cy="-4" r="6" fill="#8B5A2B"/><circle cx="-13" cy="-4" r="3" fill="#E8B88A"/><circle cx="13" cy="-4" r="3" fill="#E8B88A"/><circle r="13" fill="#A0703F"/><ellipse cy="4" rx="9" ry="7.5" fill="#E8B88A"/><ellipse cx="-4.5" cy="-3" rx="3.4" ry="4" fill="#E8B88A"/><ellipse cx="4.5" cy="-3" rx="3.4" ry="4" fill="#E8B88A"/><circle cx="-4" cy="-2" r="1.7" fill="#1B1B1B"/><circle cx="4" cy="-2" r="1.7" fill="#1B1B1B"/><path d="M-4 6 q4 3 8 0" stroke="#5A3416" stroke-width="1.6" fill="none" stroke-linecap="round"/>${HI}`,
 gajah:`<ellipse cx="-12" cy="-1" rx="8" ry="10" fill="#B6C0CA"/><ellipse cx="12" cy="-1" rx="8" ry="10" fill="#B6C0CA"/><ellipse cy="0" rx="12" ry="12" fill="#9AA6B2"/><path d="M0 8 q0 8 -6 10" stroke="#9AA6B2" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="-5" cy="-2" r="1.9" fill="#111"/><circle cx="5" cy="-2" r="1.9" fill="#111"/>${HI}`,
 burung:`<path d="M-14 4 l-6 -4 v8z" fill="#2A6FBF"/><ellipse cx="-2" cy="4" rx="12" ry="9" fill="#3D8BE0"/><circle cx="8" cy="-5" r="7" fill="#3D8BE0"/><path d="M14 -5 l6 2 l-6 2z" fill="#F5A623"/><circle cx="9" cy="-6" r="1.6" fill="#111"/><path d="M-6 1 q-6 -10 6 -8" fill="#2A6FBF"/>`,
 katak:`<ellipse cy="5" rx="14" ry="9" fill="#3FA34D"/><circle cx="-7" cy="-5" r="6" fill="#3FA34D"/><circle cx="7" cy="-5" r="6" fill="#3FA34D"/><circle cx="-7" cy="-6" r="3" fill="#fff"/><circle cx="7" cy="-6" r="3" fill="#fff"/><circle cx="-7" cy="-6" r="1.5" fill="#111"/><circle cx="7" cy="-6" r="1.5" fill="#111"/><path d="M-6 6 q6 4 12 0" stroke="#1F6B33" stroke-width="1.6" fill="none"/>`,
 ikan:`<path d="M-13 0 L-20 -7 L-19 0 L-20 7Z" fill="#FF9F43"/><path d="M-14 0 Q-2 -11 13 0 Q-2 11 -14 0Z" fill="#FF9F43"/><path d="M-14 0 Q-2 -11 13 0 Q-2 11 -14 0Z" fill="url(#xShade)"/><circle cx="7" cy="-2" r="2" fill="#111"/>`,
 bebek:`<ellipse cy="5" rx="13" ry="8" fill="#F5C518"/><circle cx="8" cy="-6" r="7" fill="#F5C518"/><path d="M14 -6 l7 1 l-7 3z" fill="#F57C00"/><circle cx="9" cy="-7" r="1.4" fill="#111"/><path d="M-6 3 q4 -6 10 -2" stroke="#D9A800" stroke-width="2" fill="none"/>`,
 pisang:`<path d="M-14 -8 Q-12 14 14 8 Q-2 7 -9 -10 Z" fill="#F5C518" stroke="#B88400" stroke-width="1.5"/><path d="M-14 -8 l-2 -3" stroke="#6B4220" stroke-width="2.5"/>`,
 mangga:`<g transform="rotate(20)"><ellipse cy="2" rx="11" ry="14" fill="#F5A623"/><ellipse cy="2" rx="11" ry="14" fill="url(#xHi)"/></g><path d="M2 -12 q6 -6 12 -4 q-6 4 -12 4z" fill="#30A46C"/>`,
 kelapa:`<circle r="13" fill="#7A4A2A"/>${HI}<circle cx="-4" cy="-3" r="2" fill="#3A2416"/><circle cx="4" cy="-3" r="2" fill="#3A2416"/><circle cy="4" r="2" fill="#3A2416"/>`,
 semangka:`<path d="M-16 -4 A16 16 0 0 0 16 -4 Z" fill="#3FA34D"/><path d="M-13 -4 A13 13 0 0 0 13 -4 Z" fill="#EF5B5B"/>${[[-6,0],[0,4],[6,0]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="1.3" ry="2" fill="#2A1A10"/>`).join('')}`,
 nanas:`<path d="M0 -6 l-6 -12 M0 -6 l0 -13 M0 -6 l6 -12" stroke="#3FA34D" stroke-width="3.5" stroke-linecap="round"/><ellipse cy="5" rx="9" ry="12" fill="#F5B83D"/><path d="M-7 0 l14 10 M7 0 l-14 10 M-8 8 l14 -8" stroke="#C98E00" stroke-width="1.2"/>`,
};

const G=(inner,s=56,cls='')=>`<svg class="${cls}" viewBox="-20 -20 40 40" width="${s}" height="${s}" aria-hidden="true">${inner}</svg>`;
const DEFS=`<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><radialGradient id="xHi" cx=".35" cy=".28" r=".75"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset=".5" stop-color="#fff" stop-opacity=".1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient><linearGradient id="xShade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".25"/><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".3"/></linearGradient><linearGradient id="seaG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#46C3E0"/><stop offset="1" stop-color="#0E6F96"/></linearGradient><linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8EDBF5"/><stop offset="1" stop-color="#D6F5FF"/></linearGradient><radialGradient id="sandG" cx=".5" cy=".35" r=".7"><stop offset="0" stop-color="#FFF1C9"/><stop offset="1" stop-color="#E7C17E"/></radialGradient></defs></svg>`;
const COL={red:'#E5484D',blue:'#3D7BE0',yellow:'#F5C518',green:'#3FA34D',orange:'#F58A1F',purple:'#8E5BD8',grey:'#BCC4CC'};
const apple=(c=COL.red)=>`<path d="M0 -7 C-6 -13 -16 -10 -15 1 C-14 11 -6 16 0 12 C6 16 14 11 15 1 C16 -10 6 -13 0 -7Z" fill="${c}"/><path d="M0 -7 C-6 -13 -16 -10 -15 1 C-14 11 -6 16 0 12 C6 16 14 11 15 1 C16 -10 6 -13 0 -7Z" fill="url(#xHi)"/><path d="M0 -7 q1 -6 4 -9" stroke="#6B4220" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M2 -12 q7 -5 11 0 q-6 4 -11 0Z" fill="${c===COL.grey?'#A9B1B9':'#3FA34D'}"/>`;
const banana=(c=COL.yellow)=>IC0.pisang.split('#F5C518').join(c).split('#B88400').join(c===COL.grey?'#9AA3AC':'#B88400');
const frog=(c=COL.green)=>IC0.katak.split('#3FA34D').join(c).split('#1F6B33').join(c===COL.grey?'#7E8790':'#1F6B33');
const balloon=c=>`<path d="M0 8 q-5 5 0 11" stroke="#6B7A88" stroke-width="1.3" fill="none"/><ellipse cy="-5" rx="11.5" ry="13.5" fill="${c}"/><ellipse cy="-5" rx="11.5" ry="13.5" fill="url(#xShade)" opacity=".7"/><ellipse cx="-4.5" cy="-11" rx="3" ry="5" fill="#fff" opacity=".5" transform="rotate(20 -4.5 -11)"/><path d="M-2.5 8.2 h5 l-2.5 3z" fill="${c}"/>`;
const ball=c=>`<circle r="15" fill="${c}"/><path d="M-15 0 Q0 -8 15 0 M-6 -14 Q-2 0 -6 14 M6 -14 Q2 0 6 14" stroke="#fff" stroke-width="2.4" fill="none" opacity=".9"/><circle r="15" fill="url(#xHi)"/>`;
const paint=c=>`<path d="M-12 -4 h24 l-2 16 q-10 4 -20 0z" fill="#EDEFF2" stroke="#9AA3AC" stroke-width="1.2"/><ellipse cy="-4" rx="12" ry="4" fill="${c}"/><path d="M-6 -4 q-1 8 2 10" stroke="${c}" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M6 -16 l-3 10" stroke="#8B5A2B" stroke-width="3" stroke-linecap="round"/><path d="M3 -7 l-1 4" stroke="${c}" stroke-width="4" stroke-linecap="round"/>`;
const NUMC=['','#E5484D','#F58A1F','#E0A100','#3FA34D','#13A6A0','#3D7BE0','#5B5BD6','#8E5BD8','#D9448A','#7A4A2A'];
const numCard=n=>{const col=NUMC[((n-1)%10)+1];let d='';if(n<=10){const per=n>5?5:n;for(let i=0;i<n;i++){const r=Math.floor(i/5),c=i%5,w=(r===0?per:n-5);d+=`<circle cx="${((c-(w-1)/2)*5.2).toFixed(1)}" cy="${10+r*5}" r="2" fill="${col}"/>`}}
  return `<rect x="-17" y="-18" width="34" height="36" rx="8" fill="#fff" stroke="${col}" stroke-width="2.5"/><text y="${n>10?7:(n>5?-1:1)}" text-anchor="middle" font-family="Fredoka,system-ui,sans-serif" font-weight="700" font-size="${n>=10?(n>10?22:17):21}" fill="${col}">${n}</text>${d}`};
const drop=(c,s)=>`<ellipse cy="17" rx="13" ry="3" fill="${c}" opacity=".45"/><path d="M0 -18 C9 -5 13 1 13 6 a13 13 0 0 1 -26 0 C-13 1 -9 -5 0 -18Z" fill="${c}" stroke="${s}" stroke-width="1.6"/><ellipse cx="-5" cy="3" rx="3" ry="5.5" fill="#fff" opacity=".65"/>`;
const grains=(pts)=>pts.map(([x,y,r])=>`<ellipse cx="${x}" cy="${y}" rx="2.6" ry="1.3" fill="#fff" stroke="#CFC6B0" stroke-width=".6" transform="rotate(${r} ${x} ${y})"/>`).join('');
const glass=c=>`<path d="M-11 -16 h22 l-3 32 h-16z" fill="#EAF6FB" stroke="#8FB3C4" stroke-width="1.6"/><path d="M-10 -5 h20 l-2.2 21 h-15.6z" fill="${c}"/><path d="M-7 -13 l1.5 25" stroke="#fff" stroke-width="2.4" opacity=".8" stroke-linecap="round"/>`;
/* ---------- gambar tambahan ---------- */
const SK='#F2C09A',SKS='#C98F66',HAIR='#4A2C17';
const face=(f,feat)=>`<circle r="17" fill="${f}" stroke="#D99A00" stroke-width="1.6"/><circle r="17" fill="url(#xHi)" opacity=".6"/>${feat}`;
const dotEyes=`<circle cx="-6" cy="-4" r="2.3" fill="#3A2416"/><circle cx="6" cy="-4" r="2.3" fill="#3A2416"/>`;
const pink=`<ellipse cx="-10" cy="4" rx="3.2" ry="2" fill="#FF8FA3" opacity=".7"/><ellipse cx="10" cy="4" rx="3.2" ry="2" fill="#FF8FA3" opacity=".7"/>`;
const person=(shirt,hair,extra='',s=1,dy=0)=>`<g transform="translate(0 ${dy}) scale(${s})"><path d="M-16 21 q0 -14 16 -14 q16 0 16 14z" fill="${shirt}"/><path d="M-5 8 l5 5 l5 -5" fill="#fff" opacity=".8"/>${hair[0]||''}<circle cx="-10.6" cy="-3" r="2.6" fill="${SK}" stroke="${SKS}" stroke-width=".8"/><circle cx="10.6" cy="-3" r="2.6" fill="${SK}" stroke="${SKS}" stroke-width=".8"/><circle cy="-4" r="10.5" fill="${SK}"/>${hair[1]||''}<circle cx="-3.6" cy="-4" r="1.4" fill="#3A2416"/><circle cx="3.6" cy="-4" r="1.4" fill="#3A2416"/><path d="M-3.4 1.2 q3.4 3 6.8 0" stroke="#A8442D" stroke-width="1.4" fill="none" stroke-linecap="round"/><ellipse cx="-7" cy="-0.5" rx="2" ry="1.2" fill="#FF8FA3" opacity=".6"/><ellipse cx="7" cy="-0.5" rx="2" ry="1.2" fill="#FF8FA3" opacity=".6"/>${extra}</g>`;
const glasses=`<circle cx="-3.6" cy="-4" r="3" fill="none" stroke="#5E6676" stroke-width="1.1"/><circle cx="3.6" cy="-4" r="3" fill="none" stroke="#5E6676" stroke-width="1.1"/><path d="M-0.6 -4 h1.2" stroke="#5E6676"/>`;
const shape=(n,c)=>({circle:`<circle r="15" fill="${c}"/>`,square:`<rect x="-14" y="-14" width="28" height="28" rx="2" fill="${c}"/>`,triangle:`<path d="M0 -16 L16 13 H-16Z" fill="${c}" stroke-linejoin="round"/>`,
 star:`<path d="M0 -17 L4.9 -6.1 L16.6 -5.2 L7.7 2.6 L10.3 14 L0 7.9 L-10.3 14 L-7.7 2.6 L-16.6 -5.2 L-4.9 -6.1Z" fill="${c}"/>`,heart:`<path d="M0 14 C-22 0 -14 -18 0 -8 C14 -18 22 0 0 14Z" fill="${c}"/>`}[n])+`<g opacity=".35">${({circle:'<ellipse cx="-5" cy="-6" rx="4" ry="6" fill="#fff"/>',square:'<rect x="-10" y="-10" width="6" height="12" rx="3" fill="#fff"/>',triangle:'<path d="M-3 -6 l-5 10" stroke="#fff" stroke-width="3" stroke-linecap="round"/>',star:'<circle cx="-3" cy="-5" r="2.5" fill="#fff"/>',heart:'<ellipse cx="-7" cy="-5" rx="3" ry="4" fill="#fff"/>'})[n]}</g>`;
const kid=(shirt='#3D7BE0')=>`<circle cx="0" cy="-12" r="6" fill="${SK}"/><path d="M-6 -14 q6 -7 12 0 q-6 -3 -12 0z" fill="${HAIR}"/>`;
const IC={...IC0,
 happy:face('#FFD25A',`<path d="M-9 -4 q3 -4 6 0 M3 -4 q3 -4 6 0" stroke="#3A2416" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M-8 3 q8 10 16 0z" fill="#B8283D"/><path d="M-5 6 q5 3 10 0" fill="#FF8FA3"/>${pink}`),
 sad:face('#FFD25A',`<path d="M-11 -7 l6 -3 M11 -7 l-6 -3" stroke="#3A2416" stroke-width="1.8" stroke-linecap="round"/>${dotEyes}<path d="M-6 9 q6 -6 12 0" stroke="#3A2416" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M-7 0 q-2 4 0 6 q2 -2 0 -6z" fill="#5BB8F0"/>`),
 angry:face('#FF9466',`<path d="M-11 -10 l7 4 M11 -10 l-7 4" stroke="#3A2416" stroke-width="2.4" stroke-linecap="round"/>${dotEyes}<path d="M-6 9 q6 -4 12 0" stroke="#3A2416" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M8 -14 l3 -3 M12 -12 l4 -1" stroke="#D93030" stroke-width="1.8" stroke-linecap="round"/>`),
 tired:face('#FFD25A',`<path d="M-9 -3 h6 M3 -3 h6" stroke="#3A2416" stroke-width="2.2" stroke-linecap="round"/><path d="M-9 0 q3 2 6 0 M3 0 q3 2 6 0" stroke="#B88A5A" stroke-width="1.2" fill="none"/><ellipse cy="9" rx="3" ry="3.6" fill="#7A2E1E"/><text x="9" y="-10" font-size="9" font-family="Fredoka,system-ui,sans-serif" font-weight="700" fill="#3D7BE0">z</text><text x="14" y="-15" font-size="7" font-family="Fredoka,system-ui,sans-serif" font-weight="700" fill="#3D7BE0">z</text>`),
 hungry:face('#FFD25A',`${dotEyes}<ellipse cy="7" rx="7" ry="6" fill="#7A2E1E"/><ellipse cy="10" rx="4.5" ry="3" fill="#FF6F8A"/><path d="M6 10 q1 4 0 6 q-2 -2 0 -6z" fill="#8FD3F2"/>${pink}`),
 scared:face('#FFF0A8',`<circle cx="-6" cy="-4" r="4.5" fill="#fff" stroke="#3A2416" stroke-width="1.2"/><circle cx="6" cy="-4" r="4.5" fill="#fff" stroke="#3A2416" stroke-width="1.2"/><circle cx="-6" cy="-4" r="1.8" fill="#3A2416"/><circle cx="6" cy="-4" r="1.8" fill="#3A2416"/><path d="M-7 9 l3.5 -3 l3.5 3 l3.5 -3 l3.5 3" stroke="#3A2416" stroke-width="1.8" fill="none" stroke-linejoin="round"/><path d="M13 -10 q-2 4 0 6 q2 -2 0 -6z" fill="#8FD3F2"/>`),
 father:person('#3D7BE0',['',`<path d="M-11 -3.5 C-11.8 -12 -6.8 -16.4 0.5 -16.4 C8 -16.4 12 -12 11 -3.5 C10.2 -7.6 8.6 -9.8 5.2 -10.4 C1.5 -10.8 -2.5 -10.6 -5.5 -10 C-8.4 -9.2 -10.2 -7 -11 -3.5Z" fill="${HAIR}"/><path d="M-6 -13.6 q3 -1.6 6.5 -1.2" stroke="#7A4A2A" stroke-width="1.1" fill="none" stroke-linecap="round"/>`],`<path d="M-4 -0.2 q4 -2 8 0 q-4 1.4 -8 0z" fill="${HAIR}"/>`),
 mother:person('#E0466E',[`<path d="M-12.6 -4 C-13.6 -16 -6.4 -18.6 0 -18.6 C6.4 -18.6 13.6 -16 12.6 -4 L13.6 9 Q12 12 8 11.4 L8 2 H-8 L-8 11.4 Q-12 12 -13.6 9Z" fill="#6B3A1E"/>`,`<path d="M-10.9 -4 C-11.6 -13.2 -6 -16.9 0 -16.9 C6 -16.9 11.6 -13.2 10.9 -4 C9.4 -8.6 5.6 -11.8 1.2 -12.4 C-3 -11.6 -7.6 -9 -10.9 -4Z" fill="#6B3A1E"/><path d="M-5 -14.6 q4 -2 8 -1" stroke="#9A5A30" stroke-width="1.1" fill="none" stroke-linecap="round"/>`],`<circle cx="-10.5" cy="1" r="1.4" fill="#FFC93C"/>`),
 brother:person('#3FA34D',['',`<path d="M-11 -2.6 C-12.2 -11 -7.6 -16.6 0 -16.6 C7.8 -16.6 12.4 -11.2 11 -2.6 C10.2 -6.6 8 -8.7 4.6 -9.3 C2.4 -7.3 -1.6 -6.5 -5.6 -7.1 C-7.6 -6.7 -9.8 -5.1 -11 -2.6Z" fill="${HAIR}"/><path d="M-4.5 -13.6 q4 -2.2 8.5 -0.6" stroke="#7A4A2A" stroke-width="1.1" fill="none" stroke-linecap="round"/><path d="M4.6 -9.3 q1.4 -2.6 4 -3.4" stroke="#2A170A" stroke-width=".8" fill="none"/>`],'',.86,3),
 sister:person('#F5C518',[`<circle cx="-13" cy="-3" r="5" fill="${HAIR}"/><circle cx="13" cy="-3" r="5" fill="${HAIR}"/><path d="M-10.4 -6 l-1.6 -1.6 M10.4 -6 l1.6 -1.6" stroke="#E0466E" stroke-width="2.6" stroke-linecap="round"/>`,`<path d="M-10.9 -3 C-11.9 -13 -6 -16.9 0 -16.9 C6 -16.9 11.9 -13 10.9 -3 C10.2 -6 9 -8.4 7 -9 C5.2 -8 3.2 -8 1.6 -9.3 C0 -8 -2 -8 -3.6 -9.3 C-5.2 -8 -7.2 -8 -8.6 -9 C-9.7 -7.6 -10.5 -5.6 -10.9 -3Z" fill="${HAIR}"/><path d="M-4.5 -14.4 q4 -1.8 8 -0.8" stroke="#7A4A2A" stroke-width="1.1" fill="none" stroke-linecap="round"/><path d="M5 -15.5 l5 -3 v6z M5 -15.5 l-1 -5.4 l5.4 2.2z" fill="#E0466E"/><circle cx="5" cy="-15.5" r="1.4" fill="#B8284F"/>`],'',.86,3),
 grandpa:person('#8B5A2B',['',`<path d="M-10.9 -1 q-1.8 -6.4 0.8 -9.6 q1.6 3.4 1.6 6.6z M10.9 -1 q1.8 -6.4 -0.8 -9.6 q-1.6 3.4 -1.6 6.6z" fill="#DADADA"/><path d="M-4 -13.4 q4 -1.6 8 0" stroke="#fff" stroke-width="1.2" fill="none" opacity=".6" stroke-linecap="round"/>`],`${glasses}<path d="M-5 -0.5 q5 -2.5 10 0 q-5 2 -10 0z" fill="#E8E8E8"/>`),
 grandma:person('#8E5BD8',[`<circle cy="-17.5" r="5.2" fill="#DADADA"/><path d="M-3.5 -18 q3.5 -2 7 0" stroke="#BDBDBD" stroke-width="1" fill="none"/>`,`<path d="M-10.9 -3.5 C-11.6 -13 -6 -16.7 0 -16.7 C6 -16.7 11.6 -13 10.9 -3.5 C9.2 -8.8 5 -11.2 0 -11.2 C-5 -11.2 -9.2 -8.8 -10.9 -3.5Z" fill="#E3E3E3"/><path d="M-6 -13 q-2 3 -3.4 6 M6 -13 q2 3 3.4 6 M0 -16.4 v4.6" stroke="#C4C4C4" stroke-width="1" fill="none"/>`],glasses),
 baby:`<g transform="translate(0 4)"><path d="M-14 17 q0 -12 14 -12 q14 0 14 12z" fill="#9FD3F2"/><circle cy="-6" r="12" fill="${SK}"/><path d="M-1 -18 q3 -4 6 -1" stroke="${HAIR}" stroke-width="2" fill="none"/><circle cx="-4" cy="-7" r="1.4" fill="#3A2416"/><circle cx="4" cy="-7" r="1.4" fill="#3A2416"/><circle cy="-1" r="3.4" fill="#F2557A"/><rect x="-2.2" y="-3" width="4.4" height="2.4" rx="1" fill="#FFC93C"/><ellipse cx="-8" cy="-3" rx="2.2" ry="1.4" fill="#FF8FA3" opacity=".7"/><ellipse cx="8" cy="-3" rx="2.2" ry="1.4" fill="#FF8FA3" opacity=".7"/></g>`,
 head:`<circle cy="0" r="14" fill="${SK}" stroke="${SKS}" stroke-width="1.4"/><path d="M-14 -2 q0 -16 14 -16 q14 0 14 16 q-6 -9 -14 -8 q-8 -1 -14 8z" fill="${HAIR}"/><circle cx="-5" cy="0" r="1.6" fill="#3A2416"/><circle cx="5" cy="0" r="1.6" fill="#3A2416"/><path d="M-4 7 q4 3 8 0" stroke="#A8442D" stroke-width="1.6" fill="none" stroke-linecap="round"/><ellipse cx="-14.5" cy="1" rx="2.4" ry="4" fill="${SK}" stroke="${SKS}"/><ellipse cx="14.5" cy="1" rx="2.4" ry="4" fill="${SK}" stroke="${SKS}"/>`,
 eyes:[-9,9].map(x=>`<path d="M${x-8} 0 q8 -9 16 0 q-8 9 -16 0z" fill="#fff" stroke="#3A2416" stroke-width="1.5"/><circle cx="${x}" cy="0" r="4" fill="#6B3A1E"/><circle cx="${x}" cy="0" r="2" fill="#111"/><circle cx="${x+1.3}" cy="-1.3" r="1" fill="#fff"/><path d="M${x-7} -5 l-2 -3 M${x} -7 v-3 M${x+7} -5 l2 -3" stroke="#3A2416" stroke-width="1.3" stroke-linecap="round"/>`).join(''),
 ears:[-1,1].map(d=>`<g transform="translate(${d*9} 0) scale(${d} 1)"><path d="M-6 -12 q14 -4 14 10 q0 9 -8 12 q-5 2 -6 -3 q4 -1 4 -6 q-3 -2 -3 -6 q0 -4 -1 -7z" fill="${SK}" stroke="${SKS}" stroke-width="1.4"/><path d="M-1 -7 q6 -1 6 6" stroke="${SKS}" stroke-width="1.4" fill="none"/></g>`).join(''),
 nose:`<path d="M-1 -16 q-3 14 -9 19 q2 6 10 4 q8 2 10 -4 q-6 -5 -9 -19" fill="${SK}" stroke="${SKS}" stroke-width="1.6" stroke-linejoin="round"/><ellipse cx="-4" cy="5" rx="2.2" ry="1.4" fill="${SKS}"/><ellipse cx="4" cy="5" rx="2.2" ry="1.4" fill="${SKS}"/>`,
 mouth:`<path d="M-16 0 q8 -9 16 -5 q8 -4 16 5 q-16 14 -32 0z" fill="#E5484D" stroke="#A8282D" stroke-width="1.4"/><path d="M-13 0 q13 4 26 0 l-2 3 q-11 3 -22 0z" fill="#fff"/>`,
 hands:[-1,1].map(d=>`<g transform="translate(${d*9} 2) scale(${d*.9} .9)"><rect x="-7" y="-2" width="14" height="14" rx="5" fill="${SK}" stroke="${SKS}" stroke-width="1.4"/>${[-5.5,-2,1.5,5].map((x,i)=>`<rect x="${x-1.6}" y="${-12+Math.abs(i-1.5)*1.6}" width="3.4" height="13" rx="1.7" fill="${SK}" stroke="${SKS}" stroke-width="1.2"/>`).join('')}<rect x="-11" y="1" width="9" height="3.6" rx="1.8" fill="${SK}" stroke="${SKS}" stroke-width="1.2" transform="rotate(-30 -6 3)"/></g>`).join(''),
 feet:[-1,1].map(d=>`<g transform="translate(${d*9} 0) scale(${d} 1)"><path d="M-5 -12 q-3 14 -2 22 q2 6 9 5 q4 -1 3 -6 q-2 -10 -2 -21z" fill="${SK}" stroke="${SKS}" stroke-width="1.4"/>${[[-5,13],[-1,14],[2.5,13.5]].map(([x,y])=>`<circle cx="${x}" cy="${y-1}" r="1.6" fill="${SK}" stroke="${SKS}" stroke-width="1"/>`).join('')}</g>`).join(''),
 cat:`<path d="M-14 -6 L-12 -19 L-3 -11Z M14 -6 L12 -19 L3 -11Z" fill="#F5A623" stroke="#B9700F" stroke-width="1.4"/><path d="M-11 -10 L-11 -15 L-6 -11Z M11 -10 L11 -15 L6 -11Z" fill="#FFB8C6"/><ellipse cy="1" rx="15" ry="13" fill="#F5A623" stroke="#B9700F" stroke-width="1.4"/><path d="M-4 -11 l1 4 M0 -12 v4 M4 -11 l-1 4" stroke="#C9700F" stroke-width="1.6"/><ellipse cx="-5.5" cy="-1" rx="2.2" ry="3" fill="#3A2416"/><ellipse cx="5.5" cy="-1" rx="2.2" ry="3" fill="#3A2416"/><path d="M-2 4 h4 l-2 2z" fill="#F2557A"/><path d="M0 6 q-2 3 -4 2 M0 6 q2 3 4 2" stroke="#3A2416" stroke-width="1" fill="none"/><path d="M-6 5 l-10 -1 M-6 7 l-10 2 M6 5 l10 -1 M6 7 l10 2" stroke="#7A4A22" stroke-width=".8"/>`,
 dog:`<ellipse cy="0" rx="12.5" ry="13" fill="#C98A4B" stroke="#7A4A22" stroke-width="1.4"/><path d="M-11 -10 q-9 2 -7 18 q5 2 8 -6z M11 -10 q9 2 7 18 q-5 2 -8 -6z" fill="#7A4A22"/><ellipse cy="6" rx="7" ry="5.5" fill="#F0D2A8"/><circle cx="-4.5" cy="-3" r="2" fill="#3A2416"/><circle cx="4.5" cy="-3" r="2" fill="#3A2416"/><ellipse cy="3" rx="3" ry="2.2" fill="#2A1A10"/><path d="M-2 8 q2 6 4 0z" fill="#F2557A"/><circle cx="5" cy="-8" r="3.5" fill="#7A4A22" opacity=".6"/>`,
 rabbit:`<ellipse cx="-6" cy="-12" rx="4" ry="10" fill="#FBFBFB" stroke="#B0B6BD" stroke-width="1.3" transform="rotate(-10 -6 -12)"/><ellipse cx="6" cy="-12" rx="4" ry="10" fill="#FBFBFB" stroke="#B0B6BD" stroke-width="1.3" transform="rotate(10 6 -12)"/><ellipse cx="-6" cy="-12" rx="1.8" ry="7" fill="#FFB8C6" transform="rotate(-10 -6 -12)"/><ellipse cx="6" cy="-12" rx="1.8" ry="7" fill="#FFB8C6" transform="rotate(10 6 -12)"/><ellipse cy="6" rx="12" ry="11" fill="#FBFBFB" stroke="#B0B6BD" stroke-width="1.3"/><circle cx="-4.5" cy="4" r="1.8" fill="#3A2416"/><circle cx="4.5" cy="4" r="1.8" fill="#3A2416"/><path d="M-1.5 8 h3 l-1.5 1.6z" fill="#F2557A"/><path d="M-1.5 11 h3 v2.6 h-3z" fill="#fff" stroke="#B0B6BD" stroke-width=".6"/>`,
 cow:`<path d="M-12 -10 q-6 -4 -6 -10 q4 2 7 7z M12 -10 q6 -4 6 -10 q-4 2 -7 7z" fill="#EADBC4" stroke="#9A8A70"/><ellipse cx="-15" cy="-4" rx="5" ry="3" fill="#FBFBFB" stroke="#5E6676" transform="rotate(-20 -15 -4)"/><ellipse cx="15" cy="-4" rx="5" ry="3" fill="#FBFBFB" stroke="#5E6676" transform="rotate(20 15 -4)"/><ellipse cy="-1" rx="12" ry="13" fill="#FBFBFB" stroke="#5E6676" stroke-width="1.4"/><path d="M-11 -6 q4 -6 9 -2 q-2 6 -9 6z M6 -12 q6 0 6 6 q-5 1 -6 -6z" fill="#2B2B2B"/><circle cx="-5" cy="-2" r="1.8" fill="#111"/><circle cx="5" cy="-2" r="1.8" fill="#111"/><ellipse cy="8" rx="10" ry="7" fill="#FFB8C6" stroke="#D97A90" stroke-width="1.2"/><ellipse cx="-4" cy="8" rx="1.6" ry="2.2" fill="#B8526A"/><ellipse cx="4" cy="8" rx="1.6" ry="2.2" fill="#B8526A"/>`,
 bread:`<path d="M-17 10 v-10 q-3 -12 9 -13 q8 -4 16 0 q12 1 9 13 v10 q0 4 -4 4 h-26 q-4 0 -4 -4z" fill="#E0A055" stroke="#9A5A20" stroke-width="1.6"/><path d="M-17 0 q17 -6 34 0" stroke="#9A5A20" stroke-width="1.2" fill="none"/><path d="M-8 -9 l3 5 M0 -11 l3 5 M8 -9 l3 5" stroke="#F7D6A0" stroke-width="2" stroke-linecap="round"/>`,
 cake:`<path d="M-16 4 L10 -10 L16 2 V14 H-16Z" fill="#FFF1D6" stroke="#B88A5A" stroke-width="1.4"/><path d="M-16 4 L10 -10 L16 2 L-16 4" fill="#F7A8C0" stroke="#B88A5A" stroke-width="1.4"/><path d="M-16 9 H16" stroke="#F7A8C0" stroke-width="3"/><circle cx="8" cy="-12" r="3.4" fill="#E5484D"/><path d="M8 -15 q2 -4 5 -4" stroke="#3FA34D" stroke-width="1.3" fill="none"/>`,
 table:`<rect x="-19" y="-8" width="38" height="5" rx="2" fill="#B5803F" stroke="#7A4A22" stroke-width="1.3"/><path d="M-15 -3 V16 M15 -3 V16 M-10 -3 V12 M10 -3 V12" stroke="#8B5A2B" stroke-width="3.2" stroke-linecap="round"/>`,
 shirt:`<path d="M-7 -15 q7 5 14 0 l12 6 l-4 9 l-5 -2 v18 h-20 v-18 l-5 2 l-4 -9z" fill="#E5484D" stroke="#A8282D" stroke-width="1.5" stroke-linejoin="round"/><path d="M-7 -15 q7 7 14 0" stroke="#A8282D" stroke-width="1.5" fill="#FBD0D0"/>`,
 hat:`<ellipse cy="6" rx="19" ry="6" fill="#F5C518" stroke="#B88400" stroke-width="1.5"/><path d="M-11 6 q0 -18 11 -18 q11 0 11 18z" fill="#F5C518" stroke="#B88400" stroke-width="1.5"/><path d="M-11 1 q11 4 22 0 v4 q-11 4 -22 0z" fill="#E5484D"/>`,
 shoes:[-1,1].map(d=>`<g transform="translate(${d*8} ${d>0?4:-4})"><path d="M-12 4 q0 -8 6 -9 q2 4 6 4 q6 0 11 4 q2 4 -1 6 h-20 q-2 0 -2 -5z" fill="#3D7BE0" stroke="#1F4FA0" stroke-width="1.4"/><path d="M-12 7 h23" stroke="#fff" stroke-width="2"/><path d="M-4 -2 l3 2 M-1 -3 l3 2" stroke="#fff" stroke-width="1.2"/></g>`).join(''),
 socks:[-1,1].map(d=>`<g transform="translate(${d*8} ${d>0?2:-2}) rotate(${d*4})"><path d="M-5 -16 h10 v18 q0 6 -6 9 l-8 2 q-5 0 -4 -5 q1 -3 8 -6z" fill="#fff" stroke="#9AA3AC" stroke-width="1.4"/><path d="M-5 -16 h10 v5 h-10z" fill="#3FA34D"/><path d="M-5 -8 h10" stroke="#3FA34D" stroke-width="2"/></g>`).join(''),
 dress:`<path d="M-6 -17 h12 l2 8 l12 26 h-40 l12 -26z" fill="#F2708A" stroke="#B8284F" stroke-width="1.5" stroke-linejoin="round"/><path d="M-8 -9 h16" stroke="#fff" stroke-width="2.4"/><path d="M-6 -17 l-3 -2 M6 -17 l3 -2" stroke="#B8284F" stroke-width="2"/>${[[-8,6],[2,2],[8,11],[-2,12]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="1.6" fill="#fff"/>`).join('')}`,
 pants:`<path d="M-12 -16 h24 l2 34 h-10 l-4 -24 l-4 24 h-10z" fill="#3D5A9E" stroke="#22386B" stroke-width="1.5" stroke-linejoin="round"/><path d="M-12 -11 h24" stroke="#22386B" stroke-width="1.5"/><path d="M0 -11 v6" stroke="#22386B"/>`,
 run:`<g stroke-linecap="round" fill="none"><path d="M2 -3 l-7 7 l-8 -2 M2 -3 l5 8 l-2 9" stroke="#3D5A9E" stroke-width="4"/><path d="M4 -14 l-2 11" stroke="#E5484D" stroke-width="6"/><path d="M4 -12 l8 5 l4 -6 M3 -12 l-8 3 l-4 6" stroke="${SK}" stroke-width="3"/><path d="M-18 -6 h6 M-19 0 h7 M-17 6 h5" stroke="#9AA3AC" stroke-width="1.6"/></g><circle cx="6" cy="-19" r="5" fill="${SK}"/><path d="M1 -21 q5 -6 10 -1 q-5 -2 -10 1z" fill="${HAIR}"/>`,
 jump:`<ellipse cy="18" rx="9" ry="2" fill="#000" opacity=".15"/><g stroke-linecap="round" fill="none"><path d="M0 0 l-6 5 l2 6 M0 0 l6 5 l-2 6" stroke="#3D5A9E" stroke-width="4"/><path d="M0 -10 v10" stroke="#3FA34D" stroke-width="6"/><path d="M0 -9 l-7 -7 l-2 -5 M0 -9 l7 -7 l2 -5" stroke="${SK}" stroke-width="3"/></g><circle cy="-15" r="5" fill="${SK}"/><path d="M-5 -17 q5 -6 10 0 q-5 -2 -10 0z" fill="${HAIR}"/><path d="M-12 12 q-3 -2 -2 -5 M12 12 q3 -2 2 -5" stroke="#9AA3AC" stroke-width="1.4" fill="none"/>`,
 swim:`<path d="M-20 4 q5 -4 10 0 t10 0 t10 0 t10 0 V20 H-20Z" fill="#5BB8F0" opacity=".8"/><g stroke-linecap="round" fill="none"><path d="M-4 1 h-12" stroke="#E0466E" stroke-width="5"/><path d="M-16 1 l-4 -2 M-16 2 l-4 3" stroke="${SK}" stroke-width="3"/><path d="M-2 0 q4 -12 12 -8" stroke="${SK}" stroke-width="3"/></g><circle cx="2" cy="1" r="5" fill="${SK}"/><path d="M-3 -1 q5 -6 10 0z" fill="#3D7BE0"/><path d="M-20 10 q5 -4 10 0 t10 0 t10 0 t10 0" stroke="#fff" stroke-width="1.6" fill="none"/>`,
 sleep:`<rect x="-19" y="2" width="38" height="9" rx="2" fill="#8B5A2B"/><path d="M-19 0 V16 M19 6 V16" stroke="#6B4220" stroke-width="3"/><rect x="-17" y="-4" width="12" height="7" rx="3" fill="#fff" stroke="#C9C9C9"/><circle cx="-11" cy="-4" r="5" fill="${SK}"/><path d="M-14 -4 h3" stroke="#3A2416" stroke-width="1.2"/><path d="M-16 -7 q5 -5 10 0z" fill="${HAIR}"/><path d="M-6 -3 h24 v6 h-24z" fill="#5B8BE0"/><text x="2" y="-9" font-size="8" font-family="Fredoka,system-ui,sans-serif" font-weight="700" fill="#3D7BE0">z</text><text x="8" y="-14" font-size="10" font-family="Fredoka,system-ui,sans-serif" font-weight="700" fill="#3D7BE0">Z</text>`,
 eat:`<circle cy="-6" r="10" fill="${SK}"/><path d="M-10 -9 q10 -12 20 0 q-10 -5 -20 0z" fill="${HAIR}"/><circle cx="-3.5" cy="-7" r="1.3" fill="#3A2416"/><circle cx="3.5" cy="-7" r="1.3" fill="#3A2416"/><ellipse cy="-1" rx="3" ry="2.4" fill="#7A2E1E"/><path d="M-16 8 h32 q-2 10 -16 10 q-14 0 -16 -10z" fill="#3FA34D"/><path d="M-12 8 q12 -6 24 0" fill="#FBF7EC"/><path d="M10 -8 l4 16" stroke="#9AA3AC" stroke-width="2" stroke-linecap="round"/><ellipse cx="9.5" cy="-10" rx="2.5" ry="3.5" fill="#B6C0CA"/>`,
 read:`<circle cy="-10" r="9" fill="${SK}"/><path d="M-9 -12 q9 -11 18 0 q-9 -5 -18 0z" fill="${HAIR}"/><circle cx="-3" cy="-9" r="1.3" fill="#3A2416"/><circle cx="3" cy="-9" r="1.3" fill="#3A2416"/><path d="M-18 -2 q9 -4 18 1 v17 q-9 -5 -18 -1z" fill="#3D7BE0"/><path d="M18 -2 q-9 -4 -18 1 v17 q9 -5 18 -1z" fill="#2A62BF"/><path d="M-15 3 q6 -2 12 1 M-15 8 q6 -2 12 1 M15 3 q-6 -2 -12 1 M15 8 q-6 -2 -12 1" stroke="#CFE0FF" stroke-width="1.3" fill="none"/>`,
 sun:`${[...Array(8)].map((_,i)=>`<path d="M0 -13 v-5" stroke="#F5A623" stroke-width="3" stroke-linecap="round" transform="rotate(${i*45})"/>`).join('')}<circle r="10" fill="#FFC93C"/><circle cx="-3" cy="-1" r="1.3" fill="#7A4A00"/><circle cx="3" cy="-1" r="1.3" fill="#7A4A00"/><path d="M-3 3 q3 3 6 0" stroke="#7A4A00" stroke-width="1.3" fill="none"/>`,
 car:`<path d="M-18 6 v-6 q0 -3 3 -3 h4 l5 -7 h12 l6 7 h3 q3 0 3 3 v6z" fill="#E5484D" stroke="#A8282D" stroke-width="1.4"/><path d="M-5 -2 l3 -5 h4 v5z M4 -2 v-5 h6 l4 5z" fill="#CFEFFF"/><circle cx="-10" cy="7" r="4.5" fill="#2B2B2B"/><circle cx="10" cy="7" r="4.5" fill="#2B2B2B"/><circle cx="-10" cy="7" r="1.8" fill="#B6C0CA"/><circle cx="10" cy="7" r="1.8" fill="#B6C0CA"/>`,
 kite:`<path d="M0 -18 L12 -4 L0 8 L-12 -4Z" fill="#8E5BD8" stroke="#5B3FA0" stroke-width="1.4"/><path d="M0 -18 V8 M-12 -4 H12" stroke="#fff" stroke-width="1.2"/><path d="M0 8 q-4 4 0 7 q4 3 -1 7" stroke="#5E6676" stroke-width="1" fill="none"/><path d="M-2 13 l-3 -2 l1 4z M1 18 l3 -2 l-1 4z" fill="#F5C518"/>`,
 tree:`<path d="M-3 18 V2 h6 V18z" fill="#8B5A2B"/><circle cy="-6" r="13" fill="#3E9B5A"/><circle cx="-9" cy="0" r="8" fill="#358A4E"/><circle cx="9" cy="0" r="8" fill="#358A4E"/><circle cx="-4" cy="-10" r="3" fill="#6CC27F" opacity=".7"/>`,
 boat:`<path d="M-17 4 h34 l-6 9 h-22z" fill="#A0582A" stroke="#6B3A12" stroke-width="1.4"/><path d="M0 4 v-22" stroke="#6B3A12" stroke-width="2"/><path d="M2 -18 l12 18 h-12z" fill="#fff" stroke="#9AA3AC"/><path d="M-2 -15 l-10 15 h10z" fill="#F5C518"/><path d="M-20 15 q5 -3 10 0 t10 0 t10 0 t10 0" stroke="#5BB8F0" stroke-width="2" fill="none"/>`,
 ballr:ball('#E5484D'),
 bowl:`<path d="M-16 -1 q16 -16 32 0z" fill="#FBF7EC" stroke="#CFC6B0" stroke-width="1.4"/>${grains([[-6,-5,20],[2,-8,-30],[8,-4,10],[-1,-3,40]])}<path d="M-18 -1 h36 q-2 17 -18 17 q-16 0 -18 -17z" fill="#E5484D" stroke="#A8282D" stroke-width="1.4"/><path d="M-15 6 h30" stroke="#FFD5D5" stroke-width="1.6"/>`,
 g_milk:glass('#FFFFFF'),
 bottle:`<rect x="-4.5" y="-20" width="9" height="5" rx="1.5" fill="#3D7BE0"/><path d="M-4 -15 h8 q9 4 9 12 v17 q0 4 -4 4 h-18 q-4 0 -4 -4 v-17 q0 -8 9 -12z" fill="#CFEFFF" stroke="#4E9AC6" stroke-width="1.6"/><path d="M-12 2 h24 v8 h-24z" fill="#3D7BE0"/><path d="M-6 -4 v18" stroke="#fff" stroke-width="2" opacity=".7"/>`,
 egg:`<ellipse cy="2" rx="11.5" ry="15" fill="#FFF4E0" stroke="#CDB48C" stroke-width="1.6"/><ellipse cx="-4" cy="-4" rx="3" ry="5" fill="#fff"/>`,
 orangef:`<circle cy="2" r="15" fill="#F58A1F"/><circle cy="2" r="15" fill="url(#xHi)"/><path d="M0 -13 v-3" stroke="#6B4220" stroke-width="2"/><path d="M1 -14 q7 -8 13 -3 q-6 6 -13 3z" fill="#3FA34D"/>`,
 starY:shape('star','#F5C518'),
 book:`<path d="M-15 -11 q8 -3 15 1 v22 q-7 -4 -15 -1z" fill="#3D7BE0"/><path d="M15 -11 q-8 -3 -15 1 v22 q7 -4 15 -1z" fill="#2A62BF"/><path d="M-12 -7 q6 -2 10 1 M-12 -2 q6 -2 10 1 M12 -7 q-6 -2 -10 1 M12 -2 q-6 -2 -10 1" stroke="#CFE0FF" stroke-width="1.6" fill="none"/><path d="M0 -10 v22" stroke="#173A80" stroke-width="1.5"/>`,
 pencil:`<g transform="rotate(-38)"><rect x="-15" y="-4.5" width="22" height="9" fill="#F5C518"/><path d="M-15 -1.5 h22 M-15 1.5 h22" stroke="#E0A100" stroke-width="1"/><rect x="-20" y="-4.5" width="5" height="9" rx="2" fill="#F2708A"/><rect x="-16" y="-4.5" width="2.5" height="9" fill="#B6C0CA"/><path d="M7 -4.5 L17 0 L7 4.5Z" fill="#EBCB9B"/><path d="M13.5 -1.6 L17 0 L13.5 1.6Z" fill="#333"/></g>`,
 bag:`<path d="M-6 -9 v-3 a6 6 0 0 1 12 0 v3" stroke="#A8282D" stroke-width="3" fill="none"/><rect x="-14" y="-9" width="28" height="25" rx="8" fill="#E5484D"/><rect x="-14" y="-9" width="28" height="25" rx="8" fill="url(#xShade)"/><rect x="-9" y="3" width="18" height="10" rx="3.5" fill="#C0353A"/><path d="M-9 7 h18" stroke="#FFD5D5" stroke-width="1.3"/><circle cx="0" cy="-3" r="2" fill="#FFD5D5"/>`,
 ruler:`<g transform="rotate(-22)"><rect x="-19" y="-5.5" width="38" height="11" rx="2" fill="#F5C518" stroke="#B88400" stroke-width="1.2"/>${[...Array(12)].map((_,i)=>`<path d="M${-16+i*3} -5.5 v${i%2?3:5}" stroke="#7A5A00" stroke-width="1"/>`).join('')}</g>`,
 eraser:`<g transform="rotate(-18)"><rect x="-15" y="-7.5" width="30" height="15" rx="3.5" fill="#F7A8C0"/><rect x="1" y="-7.5" width="14" height="15" rx="3.5" fill="#3D7BE0"/><rect x="1" y="-7.5" width="4" height="15" fill="#3D7BE0"/><rect x="-15" y="-7.5" width="30" height="15" rx="3.5" fill="url(#xShade)"/></g>`,
 chair:`<path d="M-9 -17 V15" stroke="#8B5A2B" stroke-width="4.5" stroke-linecap="round"/><path d="M-9 -15 h6 v14 h-6" fill="#A0703F"/><path d="M-10 1 H12" stroke="#B5803F" stroke-width="6" stroke-linecap="round"/><path d="M10 3 V15" stroke="#8B5A2B" stroke-width="4.5" stroke-linecap="round"/>`,
};
const SHC={red:'#E5484D',blue:'#3D7BE0',yellow:'#F5C518',green:'#3FA34D',grey:'#C3CAD1'};
/* ---------- kosakata ---------- */
const W={};const add=(en,id,pic)=>W[en]={en,id,pic};
const P_=k=>()=>IC[k];
[['happy','senang'],['sad','sedih'],['angry','marah'],['tired','lelah'],['hungry','lapar'],['scared','takut'],
 ['father','ayah'],['mother','ibu'],['brother','saudara laki-laki'],['sister','saudara perempuan'],['grandpa','kakek'],['grandma','nenek'],['baby','bayi'],
 ['head','kepala'],['eyes','mata'],['ears','telinga'],['nose','hidung'],['mouth','mulut'],['hands','tangan'],['feet','kaki'],
 ['cat','kucing'],['dog','anjing'],['rabbit','kelinci'],['cow','sapi'],
 ['bread','roti'],['cake','kue'],['egg','telur'],['table','meja'],['book','buku'],['pencil','pensil'],['bag','tas'],['ruler','penggaris'],['eraser','penghapus'],['chair','kursi'],
 ['shirt','kemeja / kaos'],['hat','topi'],['shoes','sepatu'],['socks','kaus kaki'],['dress','gaun'],['pants','celana panjang'],
 ['run','berlari'],['jump','melompat'],['swim','berenang'],['sleep','tidur'],['eat','makan'],['read','membaca'],
 ['sun','matahari'],['car','mobil'],['kite','layang-layang'],['tree','pohon'],['boat','perahu']].forEach(([e,i])=>add(e,i,P_(e)));
add('bird','burung',()=>IC0.burung);add('fish','ikan',()=>IC0.ikan);add('duck','bebek',()=>IC0.bebek);add('monkey','monyet',()=>IC0.monyet);
add('apple','apel',()=>apple());add('banana','pisang',()=>IC0.pisang);add('orange','jeruk',()=>IC.orangef);add('rice','nasi',()=>IC.bowl);add('milk','susu',()=>IC.g_milk);add('water','air',()=>IC.bottle);
add('ball','bola',()=>IC.ballr);
[['circle','lingkaran'],['square','persegi'],['triangle','segitiga'],['star','bintang'],['heart','hati']].forEach(([e,i])=>add(e,i,()=>shape(e,{circle:'#3D7BE0',square:'#3FA34D',triangle:'#F58A1F',star:'#F5C518',heart:'#E5484D'}[e])));
[['red','merah'],['blue','biru'],['yellow','kuning'],['green','hijau']].forEach(([e,i])=>add(e,i,()=>balloon(SHC[e])));
const NUMW=['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'];
const NUMI=['satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas','dua belas','tiga belas','empat belas','lima belas','enam belas','tujuh belas','delapan belas','sembilan belas','dua puluh'];
NUMW.forEach((w,i)=>add(w,NUMI[i],()=>numCard(i+1)));
const pic=(k,s=56,c='')=>G(W[k].pic(),s,c);
const row=(ic,n,s=64)=>()=>`<div class="bigpic row">${[...Array(n)].map(()=>G(ic,s)).join('')}</div>`;
const one=(ic,s=120)=>()=>`<div class="bigpic">${G(ic,s)}</div>`;

/* ---------- gambar besar untuk soal "figure" ---------- */
function kidFig(dressed){const sk=SK,sh=dressed?'#3D7BE0':'#F7F1E0',pa=dressed?'#3D5A9E':'#F7F1E0';
  return `<svg viewBox="0 0 200 240" class="figsvg" aria-hidden="true"><ellipse cx="100" cy="232" rx="56" ry="7" fill="#000" opacity=".1"/>
   <path d="M72 90 l-26 50 M128 90 l26 50" stroke="${sk}" stroke-width="13" stroke-linecap="round"/><circle cx="44" cy="146" r="10" fill="${sk}"/><circle cx="156" cy="146" r="10" fill="${sk}"/>
   <path d="M86 150 v66 M114 150 v66" stroke="${sk}" stroke-width="15" stroke-linecap="round"/><ellipse cx="82" cy="222" rx="14" ry="7" fill="${sk}"/><ellipse cx="118" cy="222" rx="14" ry="7" fill="${sk}"/>
   <path d="M70 84 h60 l4 72 h-68z" fill="${sh}" stroke="${dressed?'#22386B':'#D8CBB0'}" stroke-width="2.5"/><path d="M68 150 h64 v22 h-64z" fill="${pa}" stroke="${dressed?'#22386B':'#D8CBB0'}" stroke-width="2.5"/>
   <rect x="92" y="70" width="16" height="16" fill="${sk}"/><circle cx="100" cy="46" r="30" fill="${sk}" stroke="${SKS}" stroke-width="2"/><path d="M70 42 q0 -32 30 -32 q30 0 30 32 q-12 -18 -30 -16 q-18 -2 -30 16z" fill="${HAIR}"/>
   <ellipse cx="69" cy="48" rx="5" ry="8" fill="${sk}" stroke="${SKS}" stroke-width="2"/><ellipse cx="131" cy="48" rx="5" ry="8" fill="${sk}" stroke="${SKS}" stroke-width="2"/>
   <circle cx="89" cy="46" r="3.6" fill="#3A2416"/><circle cx="111" cy="46" r="3.6" fill="#3A2416"/><path d="M99 50 q-3 6 2 7" stroke="${SKS}" stroke-width="2" fill="none"/><path d="M90 62 q10 8 20 0" stroke="#A8442D" stroke-width="3" fill="none" stroke-linecap="round"/>
   <ellipse cx="80" cy="56" rx="5" ry="3" fill="#FF8FA3" opacity=".6"/><ellipse cx="120" cy="56" rx="5" ry="3" fill="#FF8FA3" opacity=".6"/>
   ${dressed?`<path d="M44 46 L76 42 M156 58 L114 62 M30 124 L42 140 M172 214 L132 222" stroke="#8A6234" stroke-width="2" stroke-dasharray="4 3"/><circle cx="76" cy="42" r="3" fill="#8A6234"/><circle cx="112" cy="62" r="3" fill="#8A6234"/><circle cx="43" cy="141" r="3" fill="#8A6234"/><circle cx="131" cy="222" r="3" fill="#8A6234"/>`:''}</svg>`}
const roomFig=()=>`<svg viewBox="0 0 200 150" class="figsvg" aria-hidden="true"><rect x="0" y="128" width="200" height="22" fill="#E8D2A8"/><rect x="0" y="0" width="200" height="128" fill="#FFF7E6"/>
   <rect x="8" y="58" width="104" height="10" rx="3" fill="#B5803F" stroke="#7A4A22" stroke-width="2"/><path d="M16 68 v62 M104 68 v62" stroke="#8B5A2B" stroke-width="7" stroke-linecap="round"/>
   <g transform="translate(160 96) scale(1.6)">${IC.bag}</g></svg>`;
const treeFig=()=>`<svg viewBox="0 0 200 170" class="figsvg" aria-hidden="true"><rect y="148" width="200" height="22" fill="#9AD06A"/><rect x="88" y="70" width="24" height="84" fill="#8B5A2B"/><circle cx="100" cy="56" r="52" fill="#3E9B5A"/><circle cx="60" cy="74" r="28" fill="#358A4E"/><circle cx="142" cy="74" r="28" fill="#358A4E"/></svg>`;

/* ---------- 10 pulau x 10 soal ---------- */
const L2=(a,b)=>[a,b];
const UNITS=[
 {key:'hello',en:'Hello Harbor',idn:'Pelabuhan Halo',topic:'Greetings & feelings',c:'#13A6A0',cb:'#D6F4F1',icon:()=>IC.happy,words:['happy','sad','angry','tired','hungry','scared'],
  rule:L2('Say "Hello!" and "How are you?". Answer: "I am happy."','Ucapkan "Hello!" dan "How are you?" (Apa kabar?). Jawab: "I am happy." (Aku senang.)'),
  Q:[{t:'listenPic',say:'happy',opts:['sad','happy','angry','tired']},
     {t:'listen',say:'tired',opts:['hungry','tired','scared','happy']},
     {t:'match',pairs:['sad','angry','hungry']},
     {t:'read',show:'scared',opts:['happy','scared','sad']},
     {t:'read',showHTML:()=>`<div class="bigpic">${G(IC.sun,90)}${G(`<circle r="16" fill="#fff" stroke="#5E6676" stroke-width="2"/><path d="M0 0 V-11 M0 0 L-8 0" stroke="#173A50" stroke-width="2.4" stroke-linecap="round"/><text y="13" text-anchor="middle" font-size="6" font-family="Fredoka,system-ui,sans-serif" fill="#5E6676">7 AM</text>`,90)}</div>`,ask:L2('It is 7 in the morning. What do you say?','Jam 7 pagi. Apa yang kamu ucapkan?'),opts:['Good night!','Good morning!','Goodbye!'],ans:'Good morning!',ansMean:'Selamat pagi!',note:'Pagi hari kita bilang <b>Good morning!</b> Malam sebelum tidur: <b>Good night!</b> Berpisah: <b>Goodbye!</b>'},
     {t:'spell',word:'sad',extra:['o','e']},
     {t:'collect',zone:'box',items:[['h1','happy'],['s1','sad'],['h2','happy'],['a1','angry'],['t1','tired'],['h3','happy']],want:{happy:3},say:'Find all the happy faces. Put them in the box.',sayHTML:'Find all the <u>happy</u> faces.',sub:'Artinya: "Cari semua wajah yang senang. Masukkan ke kotak."',ins:L2('Listen and do it. Drag the faces into the box.','Dengarkan perintahnya, lalu seret wajah ke kotak.'),ansEN:'three happy faces',answerSay:'happy, happy, happy',note:'<b>happy</b> = senang. Ada 3 wajah senang. Wajah sad, angry, dan tired tidak dimasukkan.'},
     {t:'listen',sentence:true,say:'I am hungry.',mean:'Aku lapar.',opts:['I am happy.','I am hungry.','I am angry.'],ans:'I am hungry.'},
     {t:'blank',text:'Hello! How ___ you?',opts:['is','are','am'],ans:'are',mean:'Halo! Apa kabar?',showHTML:row(IC.happy,2,70),note:'Kalimat yang benar: <b>How are you?</b> (Apa kabar?). Jawabannya: <b>I am fine.</b>'},
     {t:'build',words:['Good','morning,','teacher!'],mean:'Selamat pagi, Bu/Pak Guru!',showHTML:one(IC.sun,100)}]},
 {key:'family',en:'Family Farm',idn:'Peternakan Keluarga',topic:'My family',c:'#E0466E',cb:'#FFE1EA',icon:()=>IC.mother,words:['father','mother','brother','sister','grandpa','grandma','baby'],
  rule:L2('This is my family. This is my father. This is my mother.','Ini keluargaku. Ini ayahku. Ini ibuku. Pakai "This is my ..." untuk mengenalkan keluarga.'),
  Q:[{t:'listenPic',say:'mother',opts:['father','mother','sister','grandma']},
     {t:'listen',say:'grandpa',opts:['brother','baby','grandpa','father']},
     {t:'match',pairs:['father','sister','baby']},
     {t:'read',show:'grandma',opts:['mother','grandma','sister']},
     {t:'read',show:'brother',opts:['brother','father','baby']},
     {t:'spell',word:'baby',extra:['d','e']},
     {t:'match',pairs:['grandpa','grandma','father','mother'],ins:L2('This is my family tree. Drag the words to the pictures.','Ini pohon keluargaku. Seret kata ke gambar yang cocok.')},
     {t:'listen',sentence:true,say:'This is my sister.',mean:'Ini saudara perempuanku.',opts:['This is my mother.','This is my sister.','This is my brother.'],ans:'This is my sister.'},
     {t:'blank',text:'He is my ___.',opts:['mother','father','sister'],ans:'father',mean:'Dia ayahku.',showHTML:one(IC.father),note:'Gambar menunjukkan ayah. <b>He</b> dipakai untuk laki-laki: He is my <b>father</b>.'},
     {t:'build',words:['I','love','my','mother.'],mean:'Aku sayang ibuku.',showHTML:one(IC.mother)}]},
 {key:'body',en:'Body Beach',idn:'Pantai Tubuh',topic:'My body',c:'#C0533A',cb:'#FFE4DB',icon:()=>IC.head,words:['head','eyes','ears','nose','mouth','hands','feet'],
  rule:L2('I have one head, two eyes, two ears, one nose, and one mouth.','Aku punya satu kepala, dua mata, dua telinga, satu hidung, dan satu mulut. Lebih dari satu, tambahkan -s: eyes, ears, hands.'),
  Q:[{t:'listenPic',say:'nose',opts:['mouth','ears','nose','eyes']},
     {t:'listen',say:'hands',opts:['head','hands','feet','ears']},
     {t:'match',pairs:['eyes','mouth','feet']},
     {t:'read',show:'ears',opts:['eyes','nose','ears']},
     {t:'read',show:'head',opts:['hands','head','mouth']},
     {t:'spell',word:'nose',extra:['a','i']},
     {t:'figure',fig:()=>kidFig(true),ar:'200/240',spots:[['g_head',16,19],['g_mouth',84,26],['g_hands',14,52],['g_feet',86,90]],items:[['t_head','head'],['t_mouth','mouth'],['t_hands','hands'],['t_feet','feet'],['t_ears','ears']],ans:{t_head:'g_head',t_mouth:'g_mouth',t_hands:'g_hands',t_feet:'g_feet'},chips:true,
      ins:L2('Label the body. Drag the words to the boxes.','Beri nama bagian tubuh. Seret kata ke kotak.'),ansEN:'head · mouth · hands · feet',answerSay:'head, mouth, hands, feet',note:'Ikuti garis putus-putus: kepala = <b>head</b>, mulut = <b>mouth</b>, tangan = <b>hands</b>, kaki = <b>feet</b>. Kata <b>ears</b> tidak dipakai.'},
     {t:'listen',sentence:true,say:'Touch your nose.',mean:'Sentuh hidungmu.',opts:['Touch your ears.','Touch your head.','Touch your nose.'],ans:'Touch your nose.'},
     {t:'blank',text:'I see with my ___.',opts:['ears','eyes','mouth'],ans:'eyes',mean:'Aku melihat dengan mataku.',showHTML:one(IC.eyes),note:'Kita melihat (<b>see</b>) dengan mata: <b>eyes</b>. Mendengar dengan <b>ears</b>, makan dengan <b>mouth</b>.'},
     {t:'build',words:['I','have','two','hands.'],mean:'Aku punya dua tangan.',showHTML:one(IC.hands)}]},
 {key:'animals',en:'Animal Jungle',idn:'Hutan Hewan',topic:'Animals',c:'#2E9E5B',cb:'#DDF3E5',icon:()=>IC.cat,words:['cat','dog','rabbit','cow','bird','fish','duck','monkey'],
  rule:L2('The cat says meow. The dog says woof. The cow says moo.','Kucing berbunyi meow, anjing woof, sapi moo. Kita pakai "a": a cat, a dog.'),
  Q:[{t:'listenPic',say:'cat',opts:['dog','rabbit','cat','cow']},
     {t:'listen',say:'rabbit',opts:['monkey','rabbit','duck','bird']},
     {t:'match',pairs:['dog','cow','fish']},
     {t:'read',show:'duck',opts:['bird','fish','duck']},
     {t:'read',show:'monkey',opts:['cow','monkey','cat']},
     {t:'spell',word:'dog',extra:['a','t']},
     {t:'sort',bins:[{id:'4',label:'four legs',sub:'kaki empat'},{id:'2',label:'two legs',sub:'kaki dua'}],items:[['i1','cat','4'],['i2','bird','2'],['i3','cow','4'],['i4','duck','2'],['i5','rabbit','4']],
      ins:L2('How many legs? Sort the animals.','Berapa kakinya? Pilah hewan-hewan ini.'),ansEN:'four legs: cat, cow, rabbit · two legs: bird, duck',answerSay:'Four legs: cat, cow, rabbit. Two legs: bird, duck.',note:'Kucing, sapi, kelinci berkaki empat (<b>four legs</b>). Burung dan bebek berkaki dua (<b>two legs</b>).'},
     {t:'listen',sentence:true,say:'The cow says moo.',mean:'Sapi berbunyi moo.',opts:['The cat says meow.','The cow says moo.','The dog says woof.'],ans:'The cow says moo.'},
     {t:'blank',text:'The cat says ___.',opts:['woof','moo','meow'],ans:'meow',mean:'Kucing berbunyi meow.',showHTML:one(IC.cat),note:'Kucing berbunyi <b>meow</b>. Anjing <b>woof</b>, sapi <b>moo</b>.'},
     {t:'build',words:['I','have','a','cat.'],mean:'Aku punya seekor kucing.',showHTML:one(IC.cat)}]},
 {key:'shapes',en:'Shape Lagoon',idn:'Laguna Bentuk',topic:'Colors & shapes',c:'#8E5BD8',cb:'#EEE5FF',icon:()=>IC.starY,words:['circle','square','triangle','star','heart','red','blue','yellow','green'],
  rule:L2('Say the color first: a red circle, a blue square.','Sebut warna dulu, baru bentuk: a red circle (lingkaran merah), a blue square (persegi biru).'),
  Q:[{t:'listenPic',say:'triangle',opts:['circle','square','triangle','star']},
     {t:'listen',say:'green',opts:['blue','green','red','yellow']},
     {t:'match',pairs:['circle','star','heart']},
     {t:'read',show:'square',opts:['triangle','circle','square']},
     {t:'read',showHTML:one(shape('star',SHC.yellow)),ask:L2('What color is it?','Apa warnanya?'),opts:['red','yellow','blue'],ans:'yellow',ansMean:'kuning',note:'Bintangnya berwarna kuning: <b>yellow</b>.'},
     {t:'spell',word:'star',extra:['o','e']},
     {t:'paint',objs:[['circle','red'],['square','blue'],['triangle','yellow']],paints:['red','blue','yellow','green'],
      lines:[['The circle is red.','Lingkarannya merah.'],['The square is blue.','Perseginya biru.'],['The triangle is yellow.','Segitiganya kuning.']],
      ins:L2('Read and listen. Drag the paint to color the shapes.','Baca dan dengarkan. Seret cat untuk mewarnai bentuk.'),ansEN:'red circle · blue square · yellow triangle',note:'circle = lingkaran → <b>red</b>, square = persegi → <b>blue</b>, triangle = segitiga → <b>yellow</b>. Cat green tidak dipakai.'},
     {t:'listen',sentence:true,say:'It is a blue circle.',mean:'Itu lingkaran biru.',opts:['It is a red circle.','It is a blue square.','It is a blue circle.'],ans:'It is a blue circle.'},
     {t:'blank',text:'It is a red ___.',opts:['star','heart','circle'],ans:'heart',mean:'Itu hati berwarna merah.',showHTML:one(shape('heart',SHC.red)),note:'Bentuknya hati: <b>heart</b>. Jadi: It is a red heart.'},
     {t:'build',words:['The','star','is','yellow.'],mean:'Bintangnya kuning.',showHTML:one(shape('star',SHC.yellow))}]},
 {key:'numbers',en:'Number Cave',idn:'Gua Angka',topic:'Numbers 11–20',c:'#3D7BE0',cb:'#E0EBFF',icon:()=>numCard(15),words:NUMW.slice(10),
  rule:L2('eleven, twelve, thirteen, ... twenty. Thirteen ends with -teen.','11 sampai 19 diakhiri -teen (thirteen, fourteen). Hati-hati: fourteen (14) berbeda dengan forty (40).'),
  Q:[{t:'listenPic',say:'twelve',opts:['twenty','twelve','eleven','fifteen']},
     {t:'listen',say:'seventeen',opts:['eleven','nineteen','seventeen','thirteen']},
     {t:'match',pairs:['fourteen','sixteen','eighteen']},
     {t:'read',show:'twenty',opts:['twelve','two','twenty']},
     {t:'read',showHTML:()=>`<div class="bigpic row stars">${[...Array(13)].map(()=>G(IC.starY,40)).join('')}</div>`,ask:L2('How many stars?','Ada berapa bintang?'),opts:['three','thirteen','thirty'],ans:'thirteen',ansMean:'tiga belas',note:'Hitung: 10 bintang + 3 bintang = 13 = <b>thirteen</b>.'},
     {t:'spell',word:'twelve',extra:['a']},
     {t:'count',item:'starY',n:15,total:18,zone:'jar',say:'Put fifteen stars in the jar.',sayHTML:'Put <u>fifteen</u> stars in the jar.',sub:'Artinya: "Masukkan lima belas bintang ke toples."',ins:L2('Listen and do it. Drag the stars into the jar.','Dengarkan perintahnya, lalu seret bintang ke toples.'),counter:'Stars in the jar',ansEN:'fifteen stars',answerSay:'fifteen stars',note:'<b>fifteen</b> = lima belas. Hitung pelan-pelan bersama Polly sampai fifteen.'},
     {t:'listen',sentence:true,say:'I have fourteen pencils.',mean:'Aku punya empat belas pensil.',opts:['I have four pencils.','I have fourteen pencils.','I have forty pencils.'],ans:'I have fourteen pencils.'},
     {t:'blank',text:'ten, eleven, ___, thirteen',opts:['two','twenty','twelve'],ans:'twelve',mean:'sepuluh, sebelas, dua belas, tiga belas',showHTML:()=>`<div class="nline">${['10','11','?','13'].map(x=>`<span>${x}</span>`).join('')}</div>`,note:'Setelah eleven (11) adalah <b>twelve</b> (12).'},
     {t:'build',words:['I','see','twenty','birds.'],mean:'Aku melihat dua puluh burung.',showHTML:()=>`<div class="bigpic">${G(numCard(20),80)}${G(IC0.burung,90)}</div>`}]},
 {key:'food',en:'Food Market',idn:'Pasar Makanan',topic:'Food & drinks',c:'#E9801C',cb:'#FFEBD6',icon:()=>IC.bread,words:['apple','banana','orange','rice','bread','egg','milk','water','cake'],
  rule:L2('I eat rice. I drink milk. I like apples.','eat = makan, drink = minum, like = suka. Kita makan (eat) nasi dan minum (drink) susu.'),
  Q:[{t:'listenPic',say:'bread',opts:['cake','egg','bread','rice']},
     {t:'listen',say:'milk',opts:['water','milk','rice','orange']},
     {t:'match',pairs:['apple','egg','cake']},
     {t:'read',show:'rice',opts:['bread','milk','rice']},
     {t:'read',show:'water',opts:['water','milk','orange']},
     {t:'spell',word:'cake',extra:['o','i']},
     {t:'collect',zone:'lunch',items:[['f1','apple'],['f2','cake'],['f3','egg'],['f4','banana'],['f5','bread'],['f6','milk']],want:{apple:1,egg:1,bread:1},say:'Put an apple, an egg, and some bread in the lunch box.',sayHTML:'Put <u>an apple</u>, <u>an egg</u>, and <u>some bread</u> in the lunch box.',sub:'Artinya: "Masukkan apel, telur, dan roti ke kotak bekal."',ins:L2('Listen and do it. Pack the lunch box.','Dengarkan, lalu siapkan kotak bekal.'),ansEN:'an apple, an egg, and some bread',answerSay:'an apple, an egg, and some bread',note:'Yang disebut: <b>apple</b> (apel), <b>egg</b> (telur), <b>bread</b> (roti). Cake, banana, dan milk tidak disebut.',tray:'food'},
     {t:'listen',sentence:true,say:'I like bananas.',mean:'Aku suka pisang.',opts:['I like bread.','I like milk.','I like bananas.'],ans:'I like bananas.'},
     {t:'blank',text:'I drink ___.',opts:['bread','milk','egg'],ans:'milk',mean:'Aku minum susu.',showHTML:one(IC.g_milk),note:'Kita minum (<b>drink</b>) susu: <b>milk</b>. Roti dan telur dimakan, bukan diminum.'},
     {t:'build',words:['I','eat','rice','for','lunch.'],mean:'Aku makan nasi untuk makan siang.',showHTML:one(IC.bowl)}]},
 {key:'school',en:'School Castle',idn:'Kastel Sekolah',topic:'School things',c:'#5B5BD6',cb:'#E6E6FF',icon:()=>IC.book,words:['book','pencil','bag','ruler','eraser','chair','table'],
  rule:L2('in = di dalam, on = di atas, under = di bawah. The book is on the table.','in (di dalam), on (di atas), under (di bawah). Contoh: The book is on the table. (Bukunya di atas meja.)'),
  Q:[{t:'listenPic',say:'ruler',opts:['pencil','ruler','eraser','book']},
     {t:'listen',say:'chair',opts:['table','bag','chair','book']},
     {t:'match',pairs:['book','bag','eraser']},
     {t:'read',show:'pencil',opts:['ruler','chair','pencil']},
     {t:'read',show:'table',opts:['table','chair','bag']},
     {t:'spell',word:'book',extra:['a','e']},
     {t:'figure',fig:roomFig,ar:'200/150',spots:[['z_on',30,28,'on the table'],['z_under',30,76,'under the table'],['z_in',80,60,'in the bag']],items:[['t_book','book'],['t_pencil','pencil'],['t_eraser','eraser']],ans:{t_book:'z_on',t_pencil:'z_in',t_eraser:'z_under'},
      lines:[['Put the book on the table.','Taruh buku di atas meja.'],['Put the pencil in the bag.','Taruh pensil di dalam tas.'],['Put the eraser under the table.','Taruh penghapus di bawah meja.']],
      ins:L2('Read and listen. Drag each thing to the right place.','Baca dan dengarkan. Seret benda ke tempat yang benar.'),ansEN:'book on the table · pencil in the bag · eraser under the table',answerSay:'The book is on the table. The pencil is in the bag. The eraser is under the table.',note:'<b>on</b> = di atas, <b>in</b> = di dalam, <b>under</b> = di bawah.'},
     {t:'listen',sentence:true,say:'Open your book.',mean:'Buka bukumu.',opts:['Close your book.','Open your book.','Open your bag.'],ans:'Open your book.'},
     {t:'blank',text:'I write with a ___.',opts:['chair','bag','pencil'],ans:'pencil',mean:'Aku menulis dengan pensil.',showHTML:one(IC.pencil),note:'Kita menulis (<b>write</b>) dengan pensil: <b>pencil</b>.'},
     {t:'build',words:['This','is','my','ruler.'],mean:'Ini penggarisku.',showHTML:one(IC.ruler)}]},
 {key:'clothes',en:'Clothes Cove',idn:'Teluk Pakaian',topic:'Clothes',c:'#D9448A',cb:'#FFE0EF',icon:()=>IC.hat,words:['shirt','hat','shoes','socks','dress','pants'],
  rule:L2('Put on your hat. Take off your shoes.','put on = memakai, take off = melepas. Contoh: Put on your hat. (Pakai topimu.)'),
  Q:[{t:'listenPic',say:'hat',opts:['shirt','socks','hat','dress']},
     {t:'listen',say:'shoes',opts:['socks','pants','shoes','shirt']},
     {t:'match',pairs:['shirt','dress','socks']},
     {t:'read',show:'pants',opts:['hat','pants','shoes']},
     {t:'read',show:'shoes',opts:['socks','shirt','shoes']},
     {t:'spell',word:'hat',extra:['e','o']},
     {t:'figure',fig:()=>kidFig(false),ar:'200/240',spots:[['d_hat',50,6],['d_shirt',50,47],['d_pants',50,72],['d_shoes',50,95]],items:[['c_hat','hat'],['c_shirt','shirt'],['c_dress','dress'],['c_pants','pants'],['c_shoes','shoes']],ans:{c_hat:'d_hat',c_shirt:'d_shirt',c_pants:'d_pants',c_shoes:'d_shoes'},
      say:'Dress Budi. Put on his hat, shirt, pants, and shoes.',sub:'Artinya: "Pakaikan baju Budi: topi, kaos, celana, dan sepatu."',ins:L2('Listen and dress Budi.','Dengarkan, lalu pakaikan baju untuk Budi.'),ansEN:'hat · shirt · pants · shoes',answerSay:'hat, shirt, pants, shoes',note:'Topi (<b>hat</b>) di kepala, kaos (<b>shirt</b>) di badan, celana (<b>pants</b>) di kaki, sepatu (<b>shoes</b>) di telapak kaki. Gaun (<b>dress</b>) tidak disebut.'},
     {t:'listen',sentence:true,say:'Put on your hat.',mean:'Pakai topimu.',opts:['Take off your hat.','Put on your shoes.','Put on your hat.'],ans:'Put on your hat.'},
     {t:'blank',text:'My ___ is red.',opts:['shirt','hat','shoes'],ans:'shirt',mean:'Kaosku berwarna merah.',showHTML:one(IC.shirt),note:'Gambar menunjukkan kaos merah: <b>shirt</b>.'},
     {t:'build',words:['I','wear','a','yellow','hat.'],mean:'Aku memakai topi kuning.',showHTML:one(IC.hat)}]},
 {key:'actions',en:'Action Mountain',idn:'Gunung Aksi',topic:'Actions',c:'#6A9F2A',cb:'#E7F5D6',icon:()=>IC.jump,words:['run','jump','swim','sleep','eat','read'],
  rule:L2('I can run. I can jump. A fish can swim.','can = bisa. I can swim. (Aku bisa berenang.) I cannot fly. (Aku tidak bisa terbang.)'),
  Q:[{t:'listenPic',say:'swim',opts:['run','jump','swim','sleep']},
     {t:'listen',say:'jump',opts:['eat','jump','read','run']},
     {t:'match',pairs:['run','sleep','read']},
     {t:'read',show:'eat',opts:['swim','eat','sleep']},
     {t:'read',show:'fish',ask:L2('What can a fish do?','Apa yang bisa dilakukan ikan?'),opts:['read','swim','run'],ans:'swim',ansMean:'berenang',note:'Ikan bisa berenang: A fish can <b>swim</b>. Ikan tidak bisa membaca atau berlari.'},
     {t:'spell',word:'run',extra:['a','m']},
     {t:'sort',bins:[{id:'y',label:'can',sub:'bisa'},{id:'n',label:'cannot',sub:'tidak bisa'}],items:[['a1','swim','y'],['a2','run','n'],['a3','eat','y'],['a4','read','n'],['a5','jump','n']],
      ins:L2('A fish can... or cannot...? Sort the actions.','Ikan bisa atau tidak bisa? Pilah kegiatannya.'),ansEN:'A fish can swim and eat · A fish cannot run, read, or jump',answerSay:'A fish can swim. A fish can eat. A fish cannot run. A fish cannot read. A fish cannot jump.',note:'Ikan bisa berenang (<b>swim</b>) dan makan (<b>eat</b>). Ikan tidak bisa berlari, membaca, atau melompat.'},
     {t:'listen',sentence:true,say:'I can jump.',mean:'Aku bisa melompat.',opts:['I can run.','I can jump.','I can swim.'],ans:'I can jump.'},
     {t:'blank',text:'I ___ at night.',opts:['swim','run','sleep'],ans:'sleep',mean:'Aku tidur di malam hari.',showHTML:one(IC.sleep),note:'Malam hari kita tidur: <b>sleep</b>.'},
     {t:'build',words:['I','can','swim.'],mean:'Aku bisa berenang.',showHTML:one(IC.swim)}]},
];

/* ---------- contoh tutorial (kata berbeda dari soal) ---------- */
const DEMO={
 listenPic:{t:'listenPic',say:'ball',opts:['car','ball','sun','tree']},
 listen:{t:'listen',say:'sun',opts:['car','kite','sun','boat']},
 read:{t:'read',show:'tree',opts:['boat','tree','kite']},
 match:{t:'match',pairs:['ball','car','sun']},
 spell:{t:'spell',word:'sun',extra:['a','b']},
 blank:{t:'blank',text:'I play with a ___.',opts:['tree','ball','sun'],ans:'ball',mean:'Aku bermain dengan bola.',showHTML:one(IC.ballr)},
 build:{t:'build',words:['I','see','the','sun.'],mean:'Aku melihat matahari.',showHTML:one(IC.sun)},
 sort:{t:'sort',bins:[{id:'s',label:'in the sky',sub:'di langit'},{id:'g',label:'on the ground',sub:'di tanah'}],items:[['d1','sun','s'],['d2','car','g'],['d3','kite','s'],['d4','tree','g']],ins:L2('Sort them: in the sky or on the ground?','Pilah: di langit atau di tanah?')},
 count:{t:'count',item:'ballr',n:3,total:5,zone:'box',say:'Put three balls in the box.',sayHTML:'Put <u>three</u> balls in the box.',ins:L2('Listen and do it.','Dengarkan perintahnya.'),counter:'Balls in the box'},
 collect:{t:'collect',zone:'box',items:[['d1','ball'],['d2','sun'],['d3','car'],['d4','ball'],['d5','kite']],want:{ball:2,car:1},say:'Put two balls and a car in the box.',sayHTML:'Put <u>two balls</u> and <u>a car</u> in the box.',ins:L2('Listen and do it.','Dengarkan perintahnya.')},
 paint:{t:'paint',objs:[['star','yellow'],['heart','red']],paints:['red','yellow','blue'],lines:[['The star is yellow.','Bintangnya kuning.'],['The heart is red.','Hatinya merah.']],ins:L2('Read and color.','Baca dan warnai.')},
 figure:{t:'figure',fig:treeFig,ar:'200/170',spots:[['z_up',50,26,'in the tree'],['z_dn',28,86,'under the tree']],items:[['t_kite','kite'],['t_ball','ball']],ans:{t_kite:'z_up',t_ball:'z_dn'},lines:[['The kite is in the tree.','Layang-layang ada di pohon.'],['The ball is under the tree.','Bola ada di bawah pohon.']],ins:L2('Read and put them in the right place.','Baca dan taruh di tempat yang benar.')},
};
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
const SHORT=['Hello','Family','Body','Animals','Shapes','Numbers','Food','School','Clothes','Actions'];UNITS.forEach((u,i)=>u.short=SHORT[i]);
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

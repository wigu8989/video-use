/* ===== Tema ramah mata: warna mapel lembut (terang/gelap), ikon, ring, ilustrasi, grafik ===== */
const SUBJ_COL={math:['#3B6A98','#8DB4DC'],eng:['#A84A68','#E39AB2'],listen:['#6E52A0','#B9A3E0'],conv:['#985E25','#E0B07A'],mand:['#A8443C','#E8988F'],pkn:['#935438','#DDA383'],sunda:['#3A7653','#8FC9A6'],plh:['#467339','#A3CF8F'],indo:['#7A611B','#DCC27A'],pjok:['#2A716E','#87CFCB'],komp:['#5357A0','#A9ACE6']};
const isDark=()=>{const t=document.documentElement.dataset.theme;if(t)return t==='dark';try{return matchMedia('(prefers-color-scheme: dark)').matches}catch(_){return false}};
function applyTheme(){const d=isDark()?1:0;for(const k in SUBJ_COL)if(SUBJ[k])SUBJ[k].c=SUBJ_COL[k][d]}
applyTheme();
try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>{applyTheme();try{if(typeof Q!=='undefined'&&Q)renderQ();else if(document.querySelector('.rapor'))renderRapor();else render()}catch(_){}})}catch(_){}
const SICO={
 math:'<path d="M5 8h6M8 5v6M14 8h5M5 16l4 4M9 16l-4 4M14 16h5M14 20h5"/>',
 eng:'<path d="M4 5h16v10H9l-4 4V5z"/><path d="M8 12l2-5 2 5M8.7 10.5h2.6M14 7v5h2.2"/>',
 listen:'<path d="M5 14v-2a7 7 0 0 1 14 0v2"/><rect x="3.5" y="13" width="4" height="6" rx="1.6"/><rect x="16.5" y="13" width="4" height="6" rx="1.6"/>',
 conv:'<path d="M3 5h11v7H7l-4 3V5z"/><path d="M10 15v1h7l4 3v-9h-4"/>',
 mand:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 9h8v5H8zM12 6.5v11"/>',
 pkn:'<path d="M12 3l7 3v5c0 5-3.2 8.2-7 10-3.8-1.8-7-5-7-10V6l7-3z"/><path d="M12 8l1.2 2.5 2.7.3-2 1.9.5 2.7-2.4-1.3-2.4 1.3.5-2.7-2-1.9 2.7-.3z"/>',
 sunda:'<path d="M12 3l7 7-7 11L5 10l7-7z"/><path d="M12 3v18M5 10h14M12 21c-1 1.5-2.5 2-4 1.5"/>',
 plh:'<path d="M6 19c-1-6 3-12 13-13-1 9-6 13-13 13z"/><path d="M6 19c3-4 6-6 9-8"/>',
 indo:'<path d="M3 6c3-1.3 6-1.3 9 .5 3-1.8 6-1.8 9-.5v13c-3-1.3-6-1.3-9 .5-3-1.8-6-1.8-9-.5V6z"/><path d="M12 6.5v13"/>',
 pjok:'<circle cx="12" cy="12" r="8"/><path d="M12 4c2.5 2.3 2.5 13.7 0 16M4.5 9.5c4.5 1.4 10.5 1.4 15 0M4.5 14.5c4.5-1.4 10.5-1.4 15 0"/>',
 komp:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4M7 9h1M10 9h1M13 9h1M16 9h1M8 12h8"/>'};
const sico=(k,sz=24)=>SICO[k]?`<svg class="sico" viewBox="0 0 24 24" width="${sz}" height="${sz}" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${SICO[k]}</svg>`:'';
function ring(p,c,sz=44,label){const r=(sz-6)/2,C=2*Math.PI*r,v=Math.max(0,Math.min(100,p||0));return `<svg class="ring" viewBox="0 0 ${sz} ${sz}" width="${sz}" height="${sz}" role="img" aria-label="${label||v+'%'}"><circle cx="${sz/2}" cy="${sz/2}" r="${r}" class="rtrack"/><circle cx="${sz/2}" cy="${sz/2}" r="${r}" stroke="${c}" stroke-dasharray="${(C*v/100).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 ${sz/2} ${sz/2})" class="rval"/></svg>`}
function heroArt(){return `<svg class="art" viewBox="0 0 260 170" aria-hidden="true">
 <rect class="a-wall" x="0" y="0" width="260" height="170" rx="18"/>
 <rect class="a-win" x="22" y="18" width="92" height="74" rx="10"/><path class="a-frame" d="M68 18v74M22 55h92"/>
 <circle class="a-moon" cx="92" cy="38" r="11"/><circle class="a-win" cx="97" cy="34" r="9"/>
 <g class="a-star"><circle cx="38" cy="32" r="1.8"/><circle cx="52" cy="72" r="1.4"/><circle cx="84" cy="74" r="1.6"/><circle cx="44" cy="48" r="1.2"/></g>
 <ellipse class="a-glow" cx="196" cy="112" rx="62" ry="40"/>
 <path class="a-lamp" d="M188 118h22M199 118V76l-16-14"/><path class="a-shade" d="M168 50l26 10-8 18-26-10z"/>
 <rect class="a-desk" x="0" y="122" width="260" height="10" rx="3"/><rect class="a-desk2" x="0" y="132" width="260" height="38"/>
 <rect x="128" y="104" width="46" height="9" rx="2" style="fill:${SUBJ.math.c}"/><rect x="132" y="95" width="40" height="9" rx="2" style="fill:${SUBJ.plh.c}"/><rect x="126" y="86" width="44" height="9" rx="2" style="fill:${SUBJ.mand.c}"/>
 <rect x="130" y="113" width="50" height="9" rx="2" style="fill:${SUBJ.eng.c}"/>
 <path class="a-book" d="M24 120c12-5 24-5 34 0 10-5 22-5 34 0v-18c-12-5-24-5-34 0-10-5-22-5-34 0z"/><path class="a-frame" d="M58 102v18"/>
 <path class="a-line" d="M30 106c8-2 15-2 22 0M30 111c8-2 15-2 22 0M64 106c8-2 15-2 22 0M64 111c8-2 15-2 22 0"/>
 <rect class="a-cup" x="214" y="96" width="22" height="26" rx="4"/><path class="a-pen" d="M219 96l-3-16M225 96v-18M231 96l4-14"/>
</svg>`}
/* grafik batang horizontal: nilai terakhir per mapel, garis acuan 75 */
function scoreChart(rows){const R=rows.filter(r=>r.last);if(!R.length)return `<div class="chartempty">${heroMini()}<p>Grafik nilai akan muncul setelah Hector mengerjakan latihan.</p></div>`;
 return `<figure class="schart"><figcaption><b>Nilai terakhir per mata pelajaran</b><span>Garis putus-putus = batas aman 75</span></figcaption>
 <div class="sc-plot" role="list">${R.map(r=>{const v=r.last.score,low=v<75;return `<div class="sc-row" role="listitem" tabindex="0" data-tip="${esc(r.s.name)}: nilai terakhir ${v}, terbaik ${r.best}, ${r.at.length}× latihan">
  <span class="sc-lab"><i style="background:${r.s.c}"></i>${r.s.name}</span>
  <span class="sc-track"><span class="sc-bar" style="width:${Math.max(2,v)}%"></span><span class="sc-ref" style="left:75%"></span></span>
  <span class="sc-val">${v}${low?' <em>⚠ ulangi</em>':''}</span></div>`}).join('')}</div>
  <div class="sc-axis" aria-hidden="true"><span></span><span class="sc-ticks">${[0,50,75,100].map(v=>`<i style="left:${v}%">${v}</i>`).join('')}</span><span class="sc-val"></span></div></figure>`}
function heroMini(){return `<svg viewBox="0 0 64 48" width="64" height="48" aria-hidden="true"><rect x="4" y="30" width="10" height="14" rx="2" class="mini1"/><rect x="20" y="20" width="10" height="24" rx="2" class="mini2"/><rect x="36" y="10" width="10" height="34" rx="2" class="mini1"/><path d="M2 44h60" class="mini3"/></svg>`}
let TIP=null;function showTip(el){if(!TIP){TIP=document.createElement('div');TIP.className='tip';document.body.appendChild(TIP)}TIP.textContent=el.dataset.tip;const r=el.getBoundingClientRect();TIP.style.display='block';const w=TIP.offsetWidth;TIP.style.left=Math.max(8,Math.min(innerWidth-w-8,r.left+r.width/2-w/2))+'px';TIP.style.top=(r.top-TIP.offsetHeight-6<4?r.bottom+6:r.top-TIP.offsetHeight-6)+'px'}
function hideTip(){if(TIP)TIP.style.display='none'}
document.addEventListener('pointerover',e=>{const t=e.target.closest&&e.target.closest('[data-tip]');if(t)showTip(t);else hideTip()});
document.addEventListener('focusin',e=>{const t=e.target.closest&&e.target.closest('[data-tip]');if(t)showTip(t)});document.addEventListener('focusout',hideTip);addEventListener('scroll',hideTip,{passive:true});

/* ===== MiniWriter: penulis huruf ringan (pengganti Hanzi Writer) =====
   SVG sederhana (tanpa mask/clip), penilaian goresan dengan jumlah langkah tetap. */
const MiniWriter=(function(){
const NS='http://www.w3.org/2000/svg';
const OFF=61.44,SC=0.88; // padding dalam viewBox 1024
const mk=(t,a)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);return e};
function rs(pts,n){if(!pts.length)return [];if(pts.length===1)return Array(n).fill(pts[0]);const L=[0];for(let i=1;i<pts.length;i++)L.push(L[i-1]+Math.hypot(pts[i].x-pts[i-1].x,pts[i].y-pts[i-1].y));const T=L[L.length-1]||1,o=[];let i=1;
 for(let k=0;k<n;k++){const t=T*k/(n-1);while(i<L.length-1&&L[i]<t)i++;const f=(t-L[i-1])/((L[i]-L[i-1])||1);o.push({x:pts[i-1].x+(pts[i].x-pts[i-1].x)*f,y:pts[i-1].y+(pts[i].y-pts[i-1].y)*f})}return o}
const avgd=(a,b)=>{let s=0;for(let i=0;i<a.length;i++)s+=Math.hypot(a[i].x-b[i].x,a[i].y-b[i].y);return s/a.length};
const plen=p=>{let s=0;for(let i=1;i<p.length;i++)s+=Math.hypot(p[i].x-p[i-1].x,p[i].y-p[i-1].y);return s};
function create(el,ch,opt){const data=opt.charDataLoader?null:null;let D=null;opt.charDataLoader(ch,d=>D=d);
 const n=D.strokes.length,med=D.medians.map(m=>m.map(([x,y])=>({x,y})));
 el.innerHTML='';const svg=mk('svg',{viewBox:'0 0 1024 1024',width:'100%',height:'100%',style:'display:block;touch-action:none'});
 const G=t=>mk('g',{transform:`translate(${OFF},${OFF}) scale(${SC}) translate(0,900) scale(1,-1)`});
 const gOut=G(),gDone=G(),gHint=G();const user=mk('polyline',{fill:'none',stroke:opt.drawingColor,'stroke-width':Math.max(28,opt.drawingWidth*3.4),'stroke-linecap':'round','stroke-linejoin':'round'});
 svg.append(gOut,gDone,gHint,user);el.appendChild(svg);
 if(opt.showOutline===false)gOut.style.display='none';
 const outP=D.strokes.map(d=>{const p=mk('path',{d,fill:opt.outlineColor});gOut.appendChild(p);return p});
 const doneP=D.strokes.map(d=>{const p=mk('path',{d,fill:opt.strokeColor,opacity:0});gDone.appendChild(p);return p});
 const hintP=D.strokes.map(d=>{const p=mk('path',{d,fill:opt.highlightColor,opacity:0});gHint.appendChild(p);return p});
 let timers=[];const later=(f,ms)=>{const t=setTimeout(f,ms);timers.push(t);return t};const clearT=()=>{timers.forEach(clearTimeout);timers=[]};
 const showDone=(i,v,anim)=>{const p=doneP[i];p.style.transition=anim?'opacity .25s':'none';p.setAttribute('opacity',v?1:0)};
 const W={_quiz:null,
  showOutline(){gOut.style.display=''},hideOutline(){gOut.style.display='none'},
  hideCharacter(){for(let i=0;i<n;i++)showDone(i,0)},showCharacter(){for(let i=0;i<n;i++)showDone(i,1)},
  cancelQuiz(){clearT();if(W._quiz){W._quiz._isActive=false;W._quiz=null}user.setAttribute('points','');hintP.forEach(p=>p.setAttribute('opacity',0))},
  animateCharacter(o={}){W.cancelQuiz();W.hideCharacter();let i=0;const step=()=>{if(i>=n){o.onComplete&&o.onComplete();return}const h=hintP[i];h.style.transition='none';h.setAttribute('opacity',1);
    later(()=>{h.style.transition='opacity .25s';h.setAttribute('opacity',0);showDone(i,1,true);i++;later(step,opt.delayBetweenStrokes||260)},Math.max(380,plen(med[i])*0.9))};later(step,150)},
  quiz(q){W.cancelQuiz();const st=Math.min(q.quizStartStrokeNum||0,n-1);for(let i=0;i<n;i++)showDone(i,i<st?1:0);let cur=st,miss=0,total=0;
   const QZ={_isActive:true,_currentStrokeIndex:cur,_userStroke:undefined,
    startUserStroke(pt){if(!QZ._isActive)return;if(QZ._userStroke)QZ.endUserStroke();QZ._userStroke={pts:[toC(pt)],ext:[pt]};drawU()},
    continueUserStroke(pt){const u=QZ._userStroke;if(!u)return;const l=u.ext[u.ext.length-1];if(Math.abs(l.x-pt.x)+Math.abs(l.y-pt.y)<2||u.pts.length>500)return;u.ext.push(pt);u.pts.push(toC(pt));drawU()},
    endUserStroke(){const u=QZ._userStroke;QZ._userStroke=undefined;fadeU();if(!u||!QZ._isActive)return;const s=cur;
     const r=judge(u.pts,s,q.leniency||1,gOut.style.display!=='none');
     if(r.ok){showDone(s,1,true);hintP[s].setAttribute('opacity',0);cur++;QZ._currentStrokeIndex=cur;const mos=miss;miss=0;
      q.onCorrectStroke&&q.onCorrectStroke({strokeNum:s,mistakesOnStroke:mos,totalMistakes:total,strokesRemaining:n-cur,drawnPath:{points:u.pts}});
      if(cur>=n){QZ._isActive=false;if(q.highlightOnComplete){doneP.forEach(p=>{p.style.transition='fill .3s';p.setAttribute('fill',opt.highlightColor)});later(()=>doneP.forEach(p=>p.setAttribute('fill',opt.strokeColor)),450)}q.onComplete&&q.onComplete({totalMistakes:total})}}
     else{miss++;total++;q.onMistake&&q.onMistake({strokeNum:s,mistakesOnStroke:miss,totalMistakes:total,strokesRemaining:n-s,drawnPath:{points:u.pts},isBackwards:r.backwards});
      const ha=q.showHintAfterMisses;if(ha!==false&&miss>=(ha||3))flash(s)}}};
   W._quiz=QZ},
  _svg:svg};
 let pid=null;const rel=e=>{const r=svg.getBoundingClientRect();return {x:e.clientX-r.left,y:e.clientY-r.top}};
 svg.addEventListener('pointerdown',e=>{if(!W._quiz||!W._quiz._isActive)return;if(pid!==null&&W._quiz._userStroke)W._quiz.endUserStroke();pid=e.pointerId;try{svg.setPointerCapture(pid)}catch(_){}e.preventDefault();W._quiz.startUserStroke(rel(e))});
 svg.addEventListener('pointermove',e=>{if(e.pointerId!==pid||!W._quiz)return;e.preventDefault();const evs=e.getCoalescedEvents?e.getCoalescedEvents():[e];for(const ev of (evs.length?evs:[e]))W._quiz.continueUserStroke(rel(ev))});
 const up=e=>{if(e.pointerId!==pid)return;pid=null;try{svg.releasePointerCapture(e.pointerId)}catch(_){}W._quiz&&W._quiz.endUserStroke()};
 svg.addEventListener('pointerup',up);svg.addEventListener('pointercancel',up);svg.addEventListener('lostpointercapture',up);
 function toC(pt){const r=svg.getBoundingClientRect(),w=r.width||1;const vx=pt.x/w*1024,vy=pt.y/w*1024;return {x:(vx-OFF)/SC,y:900-(vy-OFF)/SC}}
 function drawU(){const u=W._quiz&&W._quiz._userStroke;if(!u)return;const r=svg.getBoundingClientRect(),w=r.width||1;user.style.transition='none';user.setAttribute('opacity',1);user.setAttribute('points',u.ext.map(p=>(p.x/w*1024).toFixed(1)+','+(p.y/w*1024).toFixed(1)).join(' '))}
 function fadeU(){user.style.transition='opacity .25s';user.setAttribute('opacity',0);later(()=>user.setAttribute('points',''),260)}
 function flash(s){const h=hintP[s];let k=0;const f=()=>{if(k>=4){h.setAttribute('opacity',.55);return}h.style.transition='opacity .2s';h.setAttribute('opacity',k%2?0.2:0.9);k++;later(f,230)};f()}
 function judge(pts,s,len,outline){if(pts.length<2){return {ok:false}}const M=med[s],U=rs(pts,16),R=rs(M,16),Rr=R.slice().reverse();
  const T=(outline?170:195)*len,d=avgd(U,R),rev=avgd(U,Rr),ml=plen(M),ul=plen(pts);
  const se=Math.hypot(U[0].x-R[0].x,U[0].y-R[0].y),ee=Math.hypot(U[15].x-R[15].x,U[15].y-R[15].y);
  const EP=Math.max(120,Math.min(230,ml*0.32))*len;
  const lenOk=ml<150?ul<ml*3+200:(ul>ml*0.6&&ul<ml*2.2+120);
  let closest=true;for(let k=s+1;k<med.length;k++){const dk=avgd(U,rs(med[k],16));if(dk<d*0.85){closest=false;break}}
  const ok=d<T&&se<EP&&ee<EP&&lenOk&&d<=rev*1.02&&closest;
  const se2=Math.hypot(U[0].x-Rr[0].x,U[0].y-Rr[0].y),ee2=Math.hypot(U[15].x-Rr[15].x,U[15].y-Rr[15].y);
  return {ok,backwards:!ok&&rev<T&&rev<d&&se2<EP&&ee2<EP}}
 return W}
return {create};
})();

import sys
p=sys.argv[1];s=open(p,encoding='utf-8').read()
CSS='''/* panggung sinematik bawah laut */
:root{--aq1:#F3FCFD;--aq2:#C9EBF2;--aqglow:rgba(255,255,255,.8);--ray:rgba(255,255,255,.28)}
@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){--aq1:#123B4A;--aq2:#08222D;--aqglow:rgba(120,220,240,.16);--ray:rgba(150,230,245,.08)}}
:root[data-theme="dark"]{--aq1:#123B4A;--aq2:#08222D;--aqglow:rgba(120,220,240,.16);--ray:rgba(150,230,245,.08)}
.theater .stage{position:relative;isolation:isolate;overflow:hidden;background:radial-gradient(ellipse 85% 55% at 50% -12%,var(--aqglow),transparent 72%),linear-gradient(180deg,var(--aq1),var(--aq2));box-shadow:inset 0 0 80px rgba(0,45,65,.2)}
.theater .stage::before{content:"";position:absolute;inset:-10% -15% 0;z-index:-1;pointer-events:none;background:repeating-linear-gradient(104deg,transparent 0 44px,var(--ray) 44px 72px,transparent 72px 150px);-webkit-mask-image:linear-gradient(to bottom,#000 10%,transparent 85%);mask-image:linear-gradient(to bottom,#000 10%,transparent 85%);animation:rays 11s ease-in-out infinite alternate}
.theater .stage::after{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;opacity:.75;background-image:radial-gradient(circle at 12% 60%,rgba(255,255,255,.75) 0 2.5px,transparent 3.6px),radial-gradient(circle at 34% 25%,rgba(255,255,255,.6) 0 1.8px,transparent 2.8px),radial-gradient(circle at 57% 78%,rgba(255,255,255,.7) 0 3px,transparent 4px),radial-gradient(circle at 80% 42%,rgba(255,255,255,.6) 0 2px,transparent 3px),radial-gradient(circle at 93% 88%,rgba(255,255,255,.55) 0 2.6px,transparent 3.6px);background-size:100% 190px;animation:rise 9s linear infinite}
.sweep{position:absolute;inset:0;z-index:6;pointer-events:none;background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,.5) 48%,rgba(255,255,255,.12) 56%,transparent 70%);transform:translateX(-110%);animation:sweep 1.1s cubic-bezier(.3,.6,.3,1) forwards}
@keyframes sweep{to{transform:translateX(110%)}}
@keyframes rays{from{transform:translateX(-5%) skewX(-4deg)}to{transform:translateX(5%) skewX(4deg)}}
@media (prefers-reduced-motion: reduce){.sweep{display:none}}'''
R=[('</style>',CSS+'\n</style>'),
("stage.innerHTML=html;if(RM)return;","stage.innerHTML=html;if(RM)return;{const sw=document.createElement('div');sw.className='sweep';sw.setAttribute('aria-hidden','true');stage.appendChild(sw)}"),
("th.classList.add('show');sfx('curtain')};","th.classList.add('show');sfx('curtain');if(!RM)st.animate([{transform:'scale(1.08)',filter:'blur(4px) brightness(1.15)'},{transform:'none',filter:'none'}],{duration:1600,easing:'cubic-bezier(.2,.7,.2,1)'})};")]
for a,b in R:
    assert s.count(a)==1,(a[:40],s.count(a));s=s.replace(a,b)
open(p,'w',encoding='utf-8').write(s);print('ok')

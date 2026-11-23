import sys
p=sys.argv[1];s=open(p,encoding='utf-8').read()
R=[
(""".nw{animation:pop .55s cubic-bezier(.3,1.6,.5,1) both;transform-box:fill-box;transform-origin:center}""",
""".nw{}
/* panggung */
.theater{position:relative;border-radius:16px;overflow:hidden;background:#5E1220}
.theater .stage{border-radius:0;padding:36px 28px 18px;background:radial-gradient(ellipse 80% 75% at 50% 0%,var(--star-soft),var(--paper) 72%);min-height:210px}
.valance{position:absolute;left:0;right:0;top:0;height:26px;z-index:3;pointer-events:none;background:radial-gradient(circle at 14px 0,#9E1E33 13px,transparent 14px) 0 10px/28px 16px repeat-x,linear-gradient(#9E1E33,#9E1E33) 0 0/100% 12px no-repeat}
.valance::after{content:"";position:absolute;left:0;right:0;top:10px;height:3px;background:repeating-linear-gradient(90deg,#E9B44C 0 8px,transparent 8px 14px)}
.curt{position:absolute;top:0;bottom:0;width:51%;z-index:2;pointer-events:none;background:repeating-linear-gradient(90deg,#B3263A 0 12px,#8E1C2D 12px 18px,#C93A4D 18px 26px)}
.curt.l{left:0;transform:translateX(-96%);border-right:3px solid #E9B44C}
.curt.r{right:0;transform:translateX(96%);border-left:3px solid #E9B44C}
.theater.show .curt.l{animation:curL 1.2s ease-in-out}
.theater.show .curt.r{animation:curR 1.2s ease-in-out}
.narr{display:flex;gap:10px;align-items:flex-start}
.nb{flex:none;width:60px}
.nb svg{display:block;overflow:visible}
.nb .q,.nb .spark{opacity:0;transition:opacity .3s}
.nb.think .q{opacity:1}.nb.happy .spark{opacity:1;animation:twinkle .35s ease-in-out 6 alternate}
.nb .nbody{transform-box:fill-box;transform-origin:center bottom}
.nb.talk .nbody{animation:nTalk .32s ease-in-out 6 alternate}
.nb.happy .nbody{animation:nHappy .9s cubic-bezier(.3,1.6,.5,1)}
.nb.think .nbody{animation:nThink 1.6s ease-in-out}
.cap .w{display:inline-block;animation:wordIn .4s cubic-bezier(.3,1.4,.5,1) both}
.glow{transform-box:fill-box;transform-origin:center;animation:glow .9s ease-in-out infinite alternate}
.burst{transform-box:fill-box;transform-origin:center;animation:burst .9s ease-out forwards;pointer-events:none}
.confetti{position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:50}
.ti .wd{display:inline-block;white-space:nowrap}
.ti .wd span{display:inline-block;animation:tWave .7s cubic-bezier(.3,1.6,.5,1) both;animation-delay:calc(var(--i) * 35ms)}
.ti.drop .wd span{animation-name:tDrop}.ti.zoom .wd span{animation-name:tZoom}.ti.swing .wd span{animation-name:tSwing}
.card{position:relative;overflow:hidden}
.flyby{position:absolute;left:-70px;top:26px;pointer-events:none;animation:fly 2.4s ease-in-out .3s both;z-index:1}
.dance{animation:dance .9s ease-in-out 2;transform-origin:center}
.shake{animation:shake .45s ease-in-out 3;transform-origin:center bottom}
.snd{display:inline-flex;align-items:center;gap:6px;background:var(--space2);color:#fff;border:2px solid #34407A;border-radius:12px;padding:8px 12px;font:900 14px var(--fb);cursor:pointer}
.snd[aria-pressed="true"]{border-color:var(--star);color:var(--star)}
.snd:focus-visible{outline:3px solid var(--star);outline-offset:2px}
@keyframes curL{0%{transform:translateX(-96%)}35%,50%{transform:translateX(0)}100%{transform:translateX(-96%)}}
@keyframes curR{0%{transform:translateX(96%)}35%,50%{transform:translateX(0)}100%{transform:translateX(96%)}}
@keyframes nTalk{from{transform:none}to{transform:translateY(-3px) rotate(-3deg)}}
@keyframes nHappy{0%{transform:none}40%{transform:translateY(-16px) rotate(-14deg)}70%{transform:translateY(0) rotate(8deg)}100%{transform:none}}
@keyframes nThink{0%,100%{transform:none}25%,75%{transform:rotate(-12deg)}}
@keyframes wordIn{from{opacity:0;transform:translateY(9px) scale(.85)}to{opacity:1;transform:none}}
@keyframes glow{from{transform:scale(.85);opacity:.25}to{transform:scale(1.25);opacity:.55}}
@keyframes burst{from{transform:scale(1);opacity:.9}to{transform:scale(2.3);opacity:0}}
@keyframes tWave{0%{transform:translateY(22px);opacity:0}60%{transform:translateY(-8px);opacity:1}100%{transform:none;opacity:1}}
@keyframes tDrop{0%{transform:translateY(-44px) rotate(-14deg);opacity:0}100%{transform:none;opacity:1}}
@keyframes tZoom{0%{transform:scale(0);opacity:0}100%{transform:none;opacity:1}}
@keyframes tSwing{0%{transform:rotateY(90deg) translateX(-10px);opacity:0}100%{transform:none;opacity:1}}
@keyframes fly{0%{transform:translate(0,90px) rotate(55deg);opacity:1}100%{transform:translate(min(1000px,110vw),-60px) rotate(75deg);opacity:0}}
@keyframes dance{0%,100%{transform:none}25%{transform:rotate(-18deg) scale(1.25)}50%{transform:translateY(-8px) scale(1.1)}75%{transform:rotate(18deg) scale(1.25)}}
@keyframes shake{0%,100%{transform:none}25%{transform:rotate(-12deg)}75%{transform:rotate(12deg)}}"""),
(""".cap{margin:0;font-weight:800;font-size:18px;background:var(--paper);border-radius:12px;padding:10px 14px;border-left:6px solid var(--teal);min-height:3.4em}""",
""".cap{margin:0;flex:1;min-width:0;font-weight:800;font-size:18px;background:var(--paper);border:2px solid var(--line);border-radius:4px 18px 18px 18px;padding:10px 14px;min-height:3.4em}"""),
("""<div class="fuel" id="score"><small>Bintang</small><b>0</b><small>dari 20</small></div>""",
"""<div class="fuel" id="score"><small>Bintang</small><b>0</b><small>dari 20</small></div>
      <button class="snd" id="snd" aria-pressed="false"><svg viewBox="0 0 24 24" width="18" aria-hidden="true"><path d="M3 9h4l5-4v14l-5-4H3z" fill="currentColor"/><path d="M16 8q3 4 0 8M19 5q5 7 0 14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg><span>Suara mati</span></button>"""),
("""<article class="card">""","""<article class="card"><div class="flyby" aria-hidden="true"><svg viewBox="-22 -30 44 64" width="44">${rocket(0,0,'#F2602B')}</svg></div>"""),
("""<h2>${q.judul}</h2>""","""<h2 class="ti ${TV[i%4]}" aria-label="${q.judul}">${splitTitle(q.judul)}</h2>"""),
("""opts.forEach(b=>b.onclick=()=>{sel=+b.dataset.k;""","""opts.forEach(b=>b.onclick=()=>{sel=+b.dataset.k;sfx('pick');b.animate([{transform:'scale(1)'},{transform:'scale(1.05)'},{transform:'none'}],{duration:260});"""),
("""<svg viewBox="0 0 40 40" width="46"><polygon""","""<svg viewBox="0 0 40 40" width="46" class="dance"><polygon"""),
("""'<svg viewBox="-24 -32 48 60" width="42"><g'""","""'<svg viewBox="-24 -32 48 60" width="42" class="shake"><g'"""),
("""    stepper($(fb,'#sol'),q.bahas(),fresh);""","""    stepper($(fb,'#sol'),q.bahas(),fresh);
    if(fresh){sfx(ok?'ok':'bad');if(ok)confetti($(fb,'.verdict'))}"""),
("""render();
</script>""","""const sb=document.getElementById('snd');sb.onclick=()=>{setSnd(!SND);if(SND)sfx('ok')};setSnd(SND);
render();
</script>"""),
]
for a,b in R:
    n=s.count(a)
    if n!=1: sys.exit(f'{n} matches for {a[:50]!r}')
    s=s.replace(a,b)
open(p,'w',encoding='utf-8').write(s);print('ok')

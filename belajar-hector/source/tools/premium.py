import sys,urllib.parse
p=sys.argv[1];s=open(p,encoding='utf-8').read()
u=lambda svg:'url("data:image/svg+xml,'+urllib.parse.quote(svg,safe="=:/ ,'()-.")+'")'
pattern=u("<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'><g fill='none' stroke='#2F8F46' stroke-opacity='.11' stroke-width='2'><path d='M20 70 C30 38 64 26 88 36 C66 58 44 70 20 70Z M20 70 L76 40'/><path d='M118 160 C128 128 160 116 176 126 C164 148 142 160 118 160Z M118 160 L170 129'/><path d='M104 34 q12 -20 34 -18 q-6 20 -34 18z'/><circle cx='150' cy='70' r='3'/><circle cx='40' cy='140' r='2.5'/></g></svg>")
leaves=''.join(f"<ellipse cx='{x}' cy='{y}' rx='{rx}' ry='{ry}' fill='{c}' transform='rotate({r} {x} {y})'/>" for x,y,rx,ry,c,r in [(18,16,11,5,'#3C9A52',35),(42,24,12,5.5,'#2E7D3E',-30),(70,20,10,5,'#52B266',40),(98,26,12,5,'#3C9A52',-35),(128,18,11,5,'#2E7D3E',30),(172,18,11,5,'#52B266',-30),(200,26,12,5.5,'#3C9A52',35),(228,20,10,5,'#2E7D3E',-40),(256,26,12,5,'#52B266',30),(284,17,11,5,'#3C9A52',-30)])
fl=''.join(f"<g transform='translate({x} {y})'>"+''.join(f"<circle cx='{dx}' cy='{dy}' r='3.2' fill='{c}'/>" for dx,dy in [(0,-4),(4,0),(0,4),(-4,0)])+"<circle r='2.2' fill='#F5C33B'/></g>" for x,y,c in [(56,30,'#F2708A'),(150,12,'#FFFFFF'),(240,32,'#F2708A')])
garland=u(f"<svg xmlns='http://www.w3.org/2000/svg' width='300' height='46' viewBox='0 0 300 46'><path d='M0 8 Q75 24 150 8 T300 8' stroke='#5E8A3A' stroke-width='3' fill='none'/>{leaves}{fl}</svg>")
mon=u("<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'><g fill='#2E7D3E' opacity='.22'><path d='M0 0 C70 10 120 50 130 120 C90 110 30 80 0 40Z'/></g><g stroke='#1F5A2E' stroke-opacity='.18' stroke-width='3' fill='none'><path d='M0 0 C50 30 90 70 130 120'/><path d='M40 22 l-18 30 M70 46 l-22 30 M95 76 l-22 26'/></g></svg>")
mon2=u("<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><g fill='#3C9A52' opacity='.2'><path d='M160 160 C150 90 100 40 30 30 C50 80 100 130 160 160Z'/></g><g stroke='#1F5A2E' stroke-opacity='.16' stroke-width='3' fill='none'><path d='M160 160 C120 110 80 70 30 30'/></g></svg>")
wood="repeating-linear-gradient(0deg,rgba(255,255,255,.05) 0 2px,transparent 2px 9px),repeating-linear-gradient(90deg,rgba(60,30,10,.08) 0 1px,transparent 1px 60px),linear-gradient(180deg,#B67B44,#946032 55%,#7A4D27)"
css=f'''/* ===== edisi buku cerita ===== */
body{{background-color:var(--bg);background-image:{pattern};background-size:180px 180px}}
h1,h2,h3,.mno,.stp-t,.big,.fuel b,.num,.box,.tile,.opt .let,.letter,.pn,.val,.inb,.kick{{font-family:var(--fd);font-weight:700;letter-spacing:0}}
.sky h1{{font-size:clamp(34px,6.4vw,54px);letter-spacing:-.01em}}
.card{{position:relative;border:0;border-radius:30px;padding-top:clamp(52px,8vw,64px);background:radial-gradient(ellipse 120% 60% at 50% 0,rgba(255,250,225,.75),transparent 60%),var(--paper);box-shadow:0 1px 0 rgba(255,255,255,.8) inset,0 30px 60px -28px rgba(20,60,25,.5),0 2px 0 rgba(30,70,30,.08)}}
.card::before{{content:"";position:absolute;left:0;right:0;top:0;height:46px;background:{garland} repeat-x 0 0/300px 46px;pointer-events:none;z-index:2}}
.top{{gap:10px}}
.mno{{background:linear-gradient(180deg,#FFE08A,#F2B53A);color:#5A3A00;border-radius:999px;padding:4px 16px;font-size:16px;box-shadow:0 3px 0 #C98E1E,0 6px 12px rgba(150,100,0,.25)}}
.tag{{border-radius:10px;font-size:12px;padding:5px 12px;box-shadow:inset 0 -2px 0 rgba(0,0,0,.06)}}
h2{{font-size:clamp(30px,5.5vw,44px);color:var(--teal);text-shadow:0 2px 0 rgba(0,0,0,.06)}}
.bubble{{background:linear-gradient(180deg,#F6FBEF,#EAF4DE);border:2px solid #CFE4BC;border-radius:6px 22px 22px 22px;box-shadow:0 6px 16px -10px rgba(30,80,30,.4)}}
.bubble .who{{color:#C25A12}}
.rules{{position:relative;color:#FFF6E3;background:{wood};border-radius:16px;padding:18px 22px;box-shadow:0 6px 0 #5E3A1E,0 16px 26px -12px rgba(60,30,10,.6);border:2px solid #5E3A1E}}
.rules::before,.rules::after{{content:"";position:absolute;top:10px;width:9px;height:9px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#F4E3C1,#8E7650)}}
.rules::before{{left:10px}}.rules::after{{right:10px}}
.rules h3{{color:#FFE08A;text-shadow:0 2px 0 rgba(0,0,0,.25)}}
.rules li::before{{background:#FFE08A;box-shadow:0 0 0 3px rgba(255,224,138,.25)}}
.ask{{position:relative;background:linear-gradient(135deg,#F28A3B,#E0601F);color:#fff;border-radius:18px;padding:16px 20px;box-shadow:0 6px 0 #B5481A,0 16px 26px -14px rgba(180,70,20,.7)}}
.ask .lb{{color:#FFE7C9;letter-spacing:.14em}}
.ask p{{color:#fff;font-size:21px}}
.ask small.how{{color:#FFE7C9}}
.dnd:not(.static){{position:relative;overflow:hidden;border:3px solid rgba(255,255,255,.9);border-radius:28px;padding:20px 16px;background:{mon} no-repeat left top/170px,{mon2} no-repeat right bottom/150px,radial-gradient(ellipse 80% 55% at 50% 0,rgba(255,252,220,.95),transparent 70%),linear-gradient(180deg,#F4FAE6 0%,#DCEFC8 70%,#C9E3AE 100%);box-shadow:0 0 0 3px #CFE4BC,0 22px 40px -24px rgba(30,80,30,.6),inset 0 -30px 50px -30px rgba(40,90,30,.35)}}
.dnd>*{{position:relative;z-index:1}}
.slot{{border:2px solid rgba(255,255,255,.85);background:linear-gradient(180deg,rgba(255,255,255,.35),rgba(255,255,255,.6));box-shadow:inset 0 3px 10px rgba(40,80,20,.22),0 1px 0 rgba(255,255,255,.9)}}
.slot.hot{{border-color:#F2B53A;background:rgba(255,236,170,.7);box-shadow:0 0 0 4px rgba(242,181,58,.45),inset 0 3px 10px rgba(150,100,0,.2)}}
.sl{{color:#5E7A4A}}
.tok{{background:transparent;border:0;box-shadow:none;padding:2px 4px;gap:3px}}
.tok>svg{{filter:drop-shadow(1.6px 0 0 #fff) drop-shadow(-1.6px 0 0 #fff) drop-shadow(0 1.6px 0 #fff) drop-shadow(0 -1.6px 0 #fff) drop-shadow(0 5px 4px rgba(30,50,20,.35));transition:transform .2s}}
.tok:hover>svg{{transform:translateY(-2px) rotate(-3deg) scale(1.06)}}
.tok span{{background:#fff;color:#2A3A22;border-radius:999px;padding:1px 9px;font-size:11.5px;box-shadow:0 2px 0 rgba(40,70,30,.18)}}
.tok small{{color:#4D6340;background:rgba(255,255,255,.75);border-radius:999px;padding:0 6px}}
.tok:has(.letter),.tok:has(.arrowc){{min-width:54px;min-height:54px;border-radius:12px;background:{wood};box-shadow:0 4px 0 #5E3A1E,0 8px 14px rgba(60,30,10,.35)}}
.tok .letter,.tok .arrowc{{color:#FFF3D6;text-shadow:0 2px 0 rgba(0,0,0,.3)}}
.tok.sel>svg,.tok.sel{{filter:drop-shadow(0 0 8px rgba(242,138,59,.9))}}
.tok.sel{{transform:translateY(-4px)}}
.tok.ok,.tok.bad{{background:transparent}}
.tok.ok>svg{{filter:drop-shadow(1.6px 0 0 #fff) drop-shadow(-1.6px 0 0 #fff) drop-shadow(0 1.6px 0 #fff) drop-shadow(0 -1.6px 0 #fff) drop-shadow(0 0 7px rgba(28,154,91,.9))}}
.tok.bad>svg{{filter:drop-shadow(1.6px 0 0 #fff) drop-shadow(-1.6px 0 0 #fff) drop-shadow(0 1.6px 0 #fff) drop-shadow(0 -1.6px 0 #fff) drop-shadow(0 0 7px rgba(217,65,65,.9))}}
.tok:has(.letter).ok,.tok:has(.arrowc).ok{{box-shadow:0 4px 0 #5E3A1E,0 0 0 3px var(--ok)}}
.tok:has(.letter).bad,.tok:has(.arrowc).bad{{box-shadow:0 4px 0 #5E3A1E,0 0 0 3px var(--bad)}}
.ghost{{background:transparent;box-shadow:none;filter:drop-shadow(0 18px 14px rgba(0,0,0,.35))}}
.tray{{background:{wood};border:2px solid #5E3A1E;border-radius:18px;box-shadow:0 6px 0 #5E3A1E,inset 0 3px 8px rgba(0,0,0,.25);padding:26px 12px 14px}}
.tray-l{{color:#FFE08A;text-shadow:0 1px 0 rgba(0,0,0,.4)}}
.tray-e{{color:#F4E3C1}}
.tray .tok span{{box-shadow:0 2px 0 rgba(0,0,0,.25)}}
.hd{{color:#4D6340}}
.slot.big{{border-radius:20px}}
.fixed.bead,.fixed.wc,.fixed.sud{{background:rgba(255,255,255,.75);box-shadow:inset 0 2px 6px rgba(40,80,20,.15)}}
.meter{{background:rgba(255,255,255,.9);box-shadow:0 3px 0 rgba(40,70,30,.15)}}
.btn{{border-radius:16px;border:2px solid #CFE4BC;background:linear-gradient(180deg,#FFFFFF,#F1F7E8);box-shadow:0 4px 0 #B9D3A3;font-family:var(--fb)}}
.btn:active{{transform:translateY(3px);box-shadow:0 1px 0 #B9D3A3}}
.btn.go{{border:0;background:linear-gradient(180deg,#5FC172,#2F8F46);color:#fff;box-shadow:0 5px 0 #1E6532,0 12px 20px -10px rgba(30,100,50,.8);text-shadow:0 1px 0 rgba(0,0,0,.25)}}
.verdict{{border-radius:22px;box-shadow:0 10px 24px -16px rgba(0,0,0,.4)}}
.why{{background:linear-gradient(180deg,#EAF6EC,#DDF0D8);border:2px solid #C3E2C6}}
.stp{{border:0;background:linear-gradient(180deg,#F3F8EC,#E8F1DD);box-shadow:inset 0 0 0 2px #D2E2C2}}
.stp.sol{{box-shadow:inset 0 0 0 2px var(--teal)}}
.cap{{border:0;box-shadow:0 6px 16px -10px rgba(30,80,30,.5)}}
.peek{{background:#F3F8EC}}
@media (prefers-color-scheme: dark){{:root:not([data-theme="light"]) .card{{background:radial-gradient(ellipse 120% 60% at 50% 0,rgba(255,240,170,.06),transparent 60%),var(--paper)}}:root:not([data-theme="light"]) .bubble{{background:#1E331E;border-color:#2D452B}}:root:not([data-theme="light"]) .btn:not(.go){{background:var(--soft);border-color:var(--line);box-shadow:0 4px 0 #0B160B;color:var(--ink)}}:root:not([data-theme="light"]) .stp,:root:not([data-theme="light"]) .peek{{background:var(--soft)}}:root:not([data-theme="light"]) .why{{background:var(--teal-soft);border-color:var(--line)}}}}
:root[data-theme="dark"] .card{{background:var(--paper)}}:root[data-theme="dark"] .bubble{{background:#1E331E;border-color:#2D452B}}:root[data-theme="dark"] .btn:not(.go){{background:var(--soft);border-color:var(--line);box-shadow:0 4px 0 #0B160B;color:var(--ink)}}:root[data-theme="dark"] .stp,:root[data-theme="dark"] .peek{{background:var(--soft)}}:root[data-theme="dark"] .why{{background:var(--teal-soft);border-color:var(--line)}}
'''
R=[('family=Sniglet:wght@400;800&','family=Fredoka:wght@500;600;700&'),('--fd:"Sniglet",','--fd:"Fredoka",'),('</style>',css+'</style>')]
for a,b in R:
    assert s.count(a)==1,(a,s.count(a));s=s.replace(a,b)
open(p,'w',encoding='utf-8').write(s);print('ok')

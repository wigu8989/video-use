import sys,re,random
src,qf,css,out=sys.argv[1:5]
s=open(src,encoding='utf-8').read();q=open(qf,encoding='utf-8').read()
a=s.index('/* ---------- 20 soal laut ---------- */');b=s.index('</script>')
s=s[:a]+q+'\n'+s[b:]
L=s.split('\n');i=next(k for k,l in enumerate(L) if l.startswith('const NBIP='))
mon='<circle cx="-13" cy="-4" r="6" fill="#8B5A2B"/><circle cx="13" cy="-4" r="6" fill="#8B5A2B"/><circle cx="-13" cy="-4" r="3" fill="#E8B88A"/><circle cx="13" cy="-4" r="3" fill="#E8B88A"/><circle r="13" fill="#A0703F"/><ellipse cy="4" rx="9" ry="7.5" fill="#E8B88A"/><ellipse cx="-4.5" cy="-3" rx="3.4" ry="4" fill="#E8B88A"/><ellipse cx="4.5" cy="-3" rx="3.4" ry="4" fill="#E8B88A"/><circle cx="-4" cy="-2" r="1.7" fill="#1B1B1B"/><circle cx="4" cy="-2" r="1.7" fill="#1B1B1B"/><path d="M-4 6 q4 3 8 0" stroke="#5A3416" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M10 10 q14 6 10 20" stroke="#8B5A2B" stroke-width="3" fill="none" stroke-linecap="round"/>'
L[i]='const NBIP=`<svg viewBox="-36 -50 72 84" width="60" aria-hidden="true"><g class="nbody"><g transform="translate(0 6) scale(1.6)">'+mon+'</g></g><g class="q"><circle cx="25" cy="-40" r="12" fill="#fff" stroke="#5B6684" stroke-width="2"/><text x="25" y="-40" text-anchor="middle" dominant-baseline="central" style="font:900 16px var(--fb);fill:#E8742A">?</text></g><g class="spark"><polygon points="${starPts(-26,-38,8,3.4)}" fill="#F5C33B"/><polygon points="${starPts(28,-28,6,2.5)}" fill="#F5C33B"/></g></svg>`;'
s='\n'.join(L)
random.seed(3)
ff=''.join(f'<circle cx="{random.randint(0,1200)}" cy="{random.randint(120,520)}" r="{random.choice([2,2.5,3])}" fill="#FFF3A0"><animate attributeName="opacity" values="0;1;0" dur="{random.choice([2,2.6,3.2])}s" begin="-{random.randint(0,30)/10}s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;{random.randint(-14,14)} {random.randint(-14,6)};0 0" dur="{random.randint(5,9)}s" repeatCount="indefinite"/></circle>' for _ in range(26))
vines=''.join(f'<path d="M{x} -10 q{s1} {h*.3} 0 {h*.6} q{-s1} {h*.25} 0 {h*.4}" stroke="#1F5A33" stroke-width="5" fill="none"><animateTransform attributeName="transform" type="rotate" values="-3 {x} 0;3 {x} 0;-3 {x} 0" dur="{d}s" repeatCount="indefinite"/></path>'+''.join(f'<ellipse cx="{x+(8 if k%2 else -8)}" cy="{int(h*k/5)+10}" rx="9" ry="5" fill="#3C9A52" transform="rotate({30 if k%2 else -30} {x} {int(h*k/5)+10})"><animateTransform attributeName="transform" type="rotate" values="-3 {x} 0;3 {x} 0;-3 {x} 0" dur="{d}s" repeatCount="indefinite" additive="sum"/></ellipse>' for k in range(1,5)) for x,h,s1,d in [(70,230,18,6),(250,160,-14,7),(980,200,16,6.5),(1140,260,-18,7.5)])
kupu='<path d="M0 0 C-4 -10 -13 -9 -10 -1 C-13 5 -4 8 0 1 C4 8 13 5 10 -1 C13 -9 4 -10 0 0Z" fill="{c}"><animateTransform attributeName="transform" type="scale" values="1 1;.3 1;1 1" dur=".35s" repeatCount="indefinite"/></path>'
bflies=''.join(f'<g>{kupu.format(c=c)}<animateMotion dur="{d}s" repeatCount="indefinite" path="{p}"/></g>' for c,d,p in [('#F2708A',16,'M-40 300 C200 200 380 360 620 260 S1000 180 1260 300'),('#F5C33B',21,'M1260 220 C1000 320 760 160 520 280 S160 200 -40 260')])
rays=''.join(f'<polygon points="{x},0 {x+w},0 {x+w+s2},560 {x+s2-70},560" fill="url(#hjRay)" opacity=".45"><animate attributeName="opacity" values=".15;.6;.15" dur="{d}s" begin="-{b}s" repeatCount="indefinite"/></polygon>' for x,w,s2,d,b in [(620,60,-200,8,0),(760,90,-160,10,3),(900,50,-120,9,5),(1020,80,-90,11,2)])
leaf=lambda x,y,r,sc,c:f'<g transform="translate({x} {y}) rotate({r}) scale({sc})"><path d="M0 0 C40 -60 120 -70 170 -10 C120 30 50 40 0 0Z" fill="{c}"/><path d="M0 0 C60 -20 110 -24 170 -10" stroke="#0E3A1C" stroke-width="3" fill="none" opacity=".5"/><animateTransform attributeName="transform" type="rotate" values="0;3;0" dur="6s" additive="sum" repeatCount="indefinite"/></g>'
scene=f'''<svg class="scene" viewBox="0 0 1200 560" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><defs><linearGradient id="hjRay" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF6C8" stop-opacity=".7"/><stop offset="1" stop-color="#FFF6C8" stop-opacity="0"/></linearGradient><radialGradient id="hjSun" cx=".82" cy="0" r=".6"><stop offset="0" stop-color="#FFF3B0" stop-opacity=".8"/><stop offset="1" stop-color="#FFF3B0" stop-opacity="0"/></radialGradient></defs>
<rect width="1200" height="560" fill="url(#hjSun)"/>{rays}
<path d="M0 360 Q60 300 120 330 Q160 260 230 300 Q300 250 360 300 Q430 240 500 290 Q560 250 640 300 Q700 240 780 290 Q840 250 900 300 Q980 240 1060 290 Q1120 260 1200 300 V560 H0Z" fill="#2C6B3C" opacity=".75"/>
<path d="M0 440 Q80 390 160 420 Q220 370 300 410 Q380 380 460 420 Q540 370 620 415 Q700 385 780 425 Q860 375 940 418 Q1020 380 1100 420 Q1160 400 1200 420 V560 H0Z" fill="#1A4D2A"/>
{vines}{ff}{bflies}
{leaf(-30,560,-60,1.3,'#14472A')}{leaf(1230,560,-120,1.3,'#14472A')}{leaf(-20,600,-35,1,'#1F6B34')}{leaf(1220,610,-145,1,'#1F6B34')}
<path d="M0 520 Q100 495 200 512 Q320 490 440 515 Q560 495 680 516 Q800 492 920 514 Q1060 496 1200 512 V560 H0Z" fill="#0E2E18"/></svg>'''
sub='<svg class="rk" viewBox="-30 -28 60 56" aria-hidden="true"><g><g transform="scale(1.7)">'+mon+'</g><animateTransform attributeName="transform" type="rotate" values="-6;6;-6" dur="3s" repeatCount="indefinite"/></g></svg>'
leafico='<svg class="oyico" viewBox="-20 -20 40 40" aria-hidden="true"><path d="M-14 12 Q-14 -12 14 -14 Q12 12 -14 12Z" fill="#F5C33B"/><path d="M-14 12 L10 -10" stroke="#B88400" stroke-width="2"/><path d="M-14 12 Q-14 -12 14 -14 Q12 12 -14 12Z" fill="url(#xHi)"/></svg>'
m=re.search(r'<header class="sky">.*?</header>',s,re.S);h=m.group(0)
snd=re.search(r'<button class="snd".*?</button>',h,re.S).group(0)
new=f'''<header class="sky">
  {scene}
  <div class="gut">
    <div class="brand">
      {sub}
      <div class="ttl">
        <div class="kick">20 teka-teki seret dan lepas</div>
        <h1>Petualangan Hutan Rimba</h1>
        <p>Menjelajah bersama Kak Dara dan Pipo si monyet. Jawab setiap soal dengan menyeret benda ke tempat yang tepat.</p>
      </div>
    </div>
    <div class="hud"><div class="oy">{leafico}<div class="fuel" id="score"><small>Daun emas</small><b>0</b><small>dari 20</small></div></div><div class="depth" id="depth"></div>{snd}</div>
    <nav class="map" id="map" aria-label="Peta soal"></nav>
  </div>
</header>'''
s=s.replace(h,new)
R=[('<title>Ekspedisi Laut Dalam</title>','<title>Petualangan Hutan Rimba</title>'),('family=Grandstander:wght@600;800&','family=Sniglet:wght@400;800&'),('--fd:"Grandstander",','--fd:"Sniglet",'),('</style>',open(css,encoding='utf-8').read()+'\n</style>')]
for x,y in R:
    assert s.count(x)==1,(x,s.count(x));s=s.replace(x,y)
open(out,'w',encoding='utf-8').write(s);print('built')

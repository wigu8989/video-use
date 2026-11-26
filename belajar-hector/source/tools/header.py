import sys,re,random
p=sys.argv[1];s=open(p,encoding='utf-8').read()
random.seed(7)
fishL=''.join(f'<path transform="translate({x} {y}) scale({sc})" d="M0 0 q9 -6 18 0 q-9 6 -18 0z M0 0 l-6 -5 v10z"/>' for x,y,sc in [(0,0,1),(26,10,.9),(52,-6,1.1),(18,-18,.8),(44,22,.85),(70,6,1),(-22,14,.9),(90,-12,.8),(64,-24,.75)])
fishR=''.join(f'<path transform="translate({x} {y}) scale({sc})" d="M0 0 q-9 -6 -18 0 q9 6 18 0z M0 0 l6 -5 v10z"/>' for x,y,sc in [(0,0,1),(-24,12,.9),(-50,-8,1),(-16,-16,.85),(-40,20,.8),(-66,4,.9)])
snow=''.join(f'<circle cx="{random.randint(0,1200)}" r="{random.choice([1,1.3,1.6,2])}" fill="#E6FBFF" opacity="{random.choice([.3,.45,.6])}"><animate attributeName="cy" values="{random.randint(0,200)};{random.randint(380,560)}" dur="{random.randint(14,30)}s" begin="-{random.randint(0,20)}s" repeatCount="indefinite"/></circle>' for _ in range(28))
def kelp(x,h,c,w,d,b):
    return f'<path d="M{x} 560 q-14 {-h*.25} 4 {-h*.5} q16 {-h*.25} -2 {-h*.5}" stroke="{c}" stroke-width="{w}" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="-4 {x} 560;4 {x} 560;-4 {x} 560" dur="{d}s" begin="-{b}s" repeatCount="indefinite"/></path>'
kelps=''.join(kelp(x,h,c,w,d,b) for x,h,c,w,d,b in [(40,230,'#0B5A49',8,6,1),(70,170,'#127A5E',6,5,2),(310,140,'#0B5A49',6,7,0),(690,190,'#0B5A49',7,6.5,3),(720,130,'#127A5E',5,5.5,1),(1110,250,'#0B5A49',8,6,2),(1150,180,'#127A5E',6,5,4)])
rays=''.join(f'<polygon points="{x},0 {x+w},0 {x+w+s2},560 {x+s2-60},560" fill="url(#hdRay)" opacity=".4"><animate attributeName="opacity" values=".15;.55;.15" dur="{d}s" begin="-{b}s" repeatCount="indefinite"/></polygon>' for x,w,s2,d,b in [(140,70,120,7,0),(420,110,160,9,3),(700,60,140,8,5),(930,90,190,10,2)])
coral='<g opacity=".55"><path d="M150 530 v-40 m0 14 l-16 -18 m16 6 l18 -22 m-18 34 l-12 -8" stroke="#E0533D" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M880 532 v-46 m0 16 l-18 -20 m18 8 l20 -24 m-20 36 l14 -12" stroke="#F2708A" stroke-width="6" fill="none" stroke-linecap="round"/>'+''.join(f'<path d="M560 535 l{dx} -50" stroke="#F5B83D" stroke-width="3" opacity=".8"/>' for dx in (-30,-18,-6,6,18,30))+'<ellipse cx="1000" cy="528" rx="34" ry="18" fill="#8E6BD8" opacity=".6"/><path d="M972 528 q14 -12 28 0 t28 0" stroke="#5E43A8" stroke-width="2" fill="none"/></g>'
scene=f'''<svg class="scene" viewBox="0 0 1200 560" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><defs><linearGradient id="hdRay" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E6FBFF" stop-opacity=".55"/><stop offset="1" stop-color="#E6FBFF" stop-opacity="0"/></linearGradient><linearGradient id="hdFar" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B4B66"/><stop offset="1" stop-color="#052A3B"/></linearGradient><linearGradient id="hdNear" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#05283A"/><stop offset="1" stop-color="#021219"/></linearGradient><radialGradient id="hdSun" cx=".55" cy="0" r=".7"><stop offset="0" stop-color="#C8F6FF" stop-opacity=".5"/><stop offset="1" stop-color="#C8F6FF" stop-opacity="0"/></radialGradient></defs>
<rect width="1200" height="560" fill="url(#hdSun)"/>
<g opacity=".4"><path d="M-200 16 q50 -12 100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0" stroke="#E6FBFF" stroke-width="3" fill="none"><animateTransform attributeName="transform" type="translate" values="0 0;200 0" dur="7s" repeatCount="indefinite"/></path><path d="M-200 34 q60 -10 120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0" stroke="#E6FBFF" stroke-width="2" fill="none" opacity=".6"><animateTransform attributeName="transform" type="translate" values="240 0;0 0" dur="11s" repeatCount="indefinite"/></path></g>
{rays}
<g opacity=".22" fill="#9FE3F2"><path d="M-46 0 Q-22 -8 0 -16 Q22 -8 46 0 Q22 5 5 7 L0 34 L-5 7 Q-22 5 -46 0Z"><animateTransform attributeName="transform" type="scale" values="1 1;1 .6;1 1" dur="3s" repeatCount="indefinite" additive="sum"/></path><animateMotion dur="46s" repeatCount="indefinite" path="M-120 170 C300 120 700 210 1320 140"/></g>
<g fill="#D3F7FF" opacity=".5">{fishL}<animateMotion dur="24s" repeatCount="indefinite" path="M-220 250 C200 200 620 300 1420 230"/></g>
<g fill="#9FD9E8" opacity=".3">{fishR}<animateMotion dur="34s" begin="-12s" repeatCount="indefinite" path="M1420 340 C1000 380 520 300 -220 350"/></g>
{snow}
<path d="M0 470 Q60 428 120 455 Q170 398 232 445 Q300 412 360 450 Q420 402 500 440 Q570 418 640 452 Q700 408 780 448 Q860 418 930 455 Q1000 402 1080 446 Q1140 422 1200 450 V560 H0Z" fill="url(#hdFar)" opacity=".85"/>
{kelps}
<path d="M0 522 Q80 490 150 512 Q220 468 300 505 Q380 484 460 515 Q560 478 650 512 Q740 486 820 516 Q900 480 1000 510 Q1090 484 1200 508 V560 H0Z" fill="url(#hdNear)"/>
{coral}</svg>'''
sub='''<svg class="rk" viewBox="-40 -34 150 68" aria-hidden="true"><defs><linearGradient id="hdBeam" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FFF6C8" stop-opacity=".75"/><stop offset="1" stop-color="#FFF6C8" stop-opacity="0"/></linearGradient><linearGradient id="hdSubSh" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".35"/></linearGradient></defs><path d="M20 2 L108 -30 L108 34 Z" fill="url(#hdBeam)"><animate attributeName="opacity" values=".7;1;.7" dur="2.5s" repeatCount="indefinite"/></path><circle class="fl" cx="-31" cy="-8" r="3.2" fill="#BDEFE8"/><circle class="fl" cx="-28" cy="7" r="2.2" fill="#BDEFE8" style="animation-delay:.6s"/><rect x="-4" y="-23" width="4" height="11" fill="#C98E00"/><rect x="-4" y="-25" width="11" height="4" rx="2" fill="#C98E00"/><rect x="-7" y="-18" width="15" height="8" rx="3" fill="#F5C518"/><ellipse cx="0" cy="0" rx="22" ry="13" fill="#F5C518"/><ellipse cx="0" cy="0" rx="22" ry="13" fill="url(#hdSubSh)" stroke="#A97A00" stroke-width="1.5"/><path d="M-16 -6 Q0 -12 16 -6" stroke="#fff" stroke-width="2" opacity=".6" fill="none"/><circle cx="-8" cy="1" r="5" fill="#1B4B66" stroke="#C9D3DD" stroke-width="2.5"/><circle cx="7" cy="1" r="5" fill="#1B4B66" stroke="#C9D3DD" stroke-width="2.5"/><circle cx="5.5" cy="-.5" r="1.6" fill="#BFEFFF"/><circle cx="-9.5" cy="-.5" r="1.6" fill="#BFEFFF"/><circle cx="21" cy="2" r="3" fill="#FFF6C8"/><ellipse cx="-24" cy="0" rx="2.5" ry="8" fill="#8E97B5"><animate attributeName="ry" values="8;1;8" dur=".35s" repeatCount="indefinite"/></ellipse></svg>'''
oy='''<svg class="oyico" viewBox="0 0 48 40" aria-hidden="true"><defs><radialGradient id="hdPearl" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#fff"/><stop offset=".6" stop-color="#F3E9F2"/><stop offset="1" stop-color="#BDB3C9"/></radialGradient></defs><path d="M4 22 Q24 2 44 22 Q24 16 4 22Z" fill="#8C7A9E"/><path d="M4 24 Q24 40 44 24 Q24 30 4 24Z" fill="#A893B8"/><circle cx="24" cy="22" r="7" fill="url(#hdPearl)"><animate attributeName="r" values="6.5;7.3;6.5" dur="2.4s" repeatCount="indefinite"/></circle><circle cx="21.5" cy="19.5" r="2" fill="#fff"/></svg>'''
m=re.search(r'<header class="sky">.*?</header>',s,re.S);h=m.group(0)
snd=re.search(r'<button class="snd".*?</button>',h,re.S).group(0)
new=f'''<header class="sky">
  {scene}
  <div class="gut">
    <div class="brand">
      {sub}
      <div class="ttl">
        <div class="kick">20 teka-teki berpikir logis</div>
        <h1>Ekspedisi Laut Dalam</h1>
        <p>Menyelam bersama Profesor Lina dan Oki si gurita. Setiap soal punya pertunjukan contoh, jadi tonton dulu sebelum menjawab.</p>
      </div>
    </div>
    <div class="hud"><div class="oy">{oy}<div class="fuel" id="score"><small>Mutiara</small><b>0</b><small>dari 20</small></div></div><div class="depth" id="depth"></div>{snd}</div>
    <nav class="map" id="map" aria-label="Peta soal"></nav>
  </div>
</header>'''
s=s.replace(h,new)
R=[('style="background:${PC[i%10]}"','style="--c:${PC[i%10]};animation-delay:-${(i*.37)%3}s"'),
("document.getElementById('score').innerHTML=`<small>Mutiara</small><b>${score()}</b><small>dari ${Q.length}</small>`;","document.getElementById('score').innerHTML=`<small>Mutiara</small><b>${score()}</b><small>dari ${Q.length}</small>`;{const dp=document.getElementById('depth');if(dp)dp.innerHTML=`<svg viewBox=\"0 0 24 24\" width=\"22\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"none\" stroke=\"#BDEFE8\" stroke-width=\"2\"/><path d=\"M12 12 L${(12+7*Math.sin(Math.min(st.cur,19)/19*4.2-2.1)).toFixed(1)} ${(12-7*Math.cos(Math.min(st.cur,19)/19*4.2-2.1)).toFixed(1)}\" stroke=\"#FFD86B\" stroke-width=\"2.4\" stroke-linecap=\"round\"/></svg><span><small>Kedalaman</small><b>${Math.min(st.cur+1,20)*25} m</b></span>`}"),
("const sb=document.getElementById('snd');","if(RM){const sc=document.querySelector('.scene');sc&&sc.pauseAnimations&&sc.pauseAnimations()}const sb=document.getElementById('snd');"),
('</style>',open(sys.argv[2],encoding='utf-8').read()+'\n</style>')]
for a,b in R:
    assert s.count(a)==1,(a[:50],s.count(a));s=s.replace(a,b)
open(p,'w',encoding='utf-8').write(s);print('ok')

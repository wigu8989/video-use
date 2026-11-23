s=open('src.html').read()
def cut(a,b,new):
    global s
    i=s.index(a);j=s.index(b,i);s=s[:i]+new+s[j:]
cut('function mapSVG()','function startQuiz',open('blockA.js').read())
cut('function summary()','\nrenderMap();',open('blockB.js').read())
def R(a,b):
    global s
    assert s.count(a)==1,a[:60];s=s.replace(a,b)
R("{key:'animals',en:'Animal Island',idn:'Pulau Hewan',","{key:'animals',en:'Jungle Trail',idn:'Jalur Hutan',topic:'Animals',")
R("{key:'colors',en:'Color Island',idn:'Pulau Warna',","{key:'colors',en:'Rainbow Falls',idn:'Air Terjun Pelangi',topic:'Colors',")
R("{key:'numbers',en:'Number Island',idn:'Pulau Angka',","{key:'numbers',en:'Number Cave',idn:'Gua Angka',topic:'Numbers',")
R("{key:'fruits',en:'Fruit Island',idn:'Pulau Buah',","{key:'fruits',en:'Fruit Valley',idn:'Lembah Buah',topic:'Fruits',")
R("{key:'classroom',en:'School Island',idn:'Pulau Kelas',","{key:'classroom',en:'School Castle',idn:'Kastel Sekolah',topic:'School things',")
i=s.index('const TYPE=');j=s.index('\n',i)
s=s[:i]+"const TYPE={listen:'Listen',read:'Read',match:'Match',spell:'Spell',build:'Sentence',colorize:'Color',count:'Count',basket:'Choose',prep:'Place'};"+s[j:]
R('<span class="qno">Soal ${V.qi+1} dari ${I.Q.length}</span>','<span class="qno">Quest ${V.qi+1} / ${I.Q.length}</span>')
# polly explorer hat
R('<svg class="polly" viewBox="0 0 80 96" aria-hidden="true">','<svg class="polly" viewBox="0 -10 80 106" aria-hidden="true">')
R('<path d="M34 9 q-2 -8 6 -9 q-1 6 2 7 q3 -7 9 -4 q-5 3 -4 7z" fill="#E5484D"/><circle cx="44" cy="24" r="17" fill="#2FB86A"/>',
  '<circle cx="44" cy="24" r="17" fill="#2FB86A"/><ellipse cx="43" cy="10" rx="22" ry="5" fill="#A8743C"/><path d="M30 10 q0 -15 13 -15 q13 0 13 15z" fill="#C9954F"/><path d="M30.5 7 h25" stroke="#7A3E1A" stroke-width="3.5"/><path d="M36 -1 q4 -3 7 -3" stroke="#E6BC7E" stroke-width="2" fill="none" stroke-linecap="round"/>')
# css
R(".tip{display:flex",""".scene{position:relative;border-radius:24px;overflow:hidden;height:clamp(130px,26vw,180px);box-shadow:0 8px 20px rgba(0,0,0,.2),inset 0 0 0 3px rgba(255,255,255,.35)}
.scene svg{position:absolute;inset:0;width:100%;height:100%}
.scene-t{position:absolute;left:16px;bottom:12px;color:#fff;display:flex;flex-direction:column;text-shadow:0 2px 0 rgba(0,0,0,.35),0 0 12px rgba(0,0,0,.35)}
.scene-t small{font-weight:800;font-size:13px;letter-spacing:.08em;text-transform:uppercase;opacity:.95}
.scene-t b{font-family:var(--f-disp);font-weight:700;font-size:clamp(28px,7vw,42px);line-height:1}
.scene-t span{font-weight:800;font-size:15px}
.fall{animation:fall .7s linear infinite}@keyframes fall{to{stroke-dashoffset:-24}}
.fly{animation:fly 2.4s ease-in-out infinite alternate}@keyframes fly{from{opacity:.25}to{opacity:1}}
.floaty{animation:floaty 3s ease-in-out infinite}@keyframes floaty{50%{translate:0 -8px}}
.flame{animation:flame .35s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:bottom}@keyframes flame{to{transform:scaleY(.82) scaleX(1.1)}}
.swing{animation:floaty 2.6s ease-in-out infinite}
.pulse{animation:fly 1.2s ease-in-out infinite alternate}
.glow{animation:fly 1.4s ease-in-out infinite alternate}
.tip.win{background:#FFF3C4}
.icard .stg{display:block;font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--c)}
.hud .pc{color:#B3362B}
.bub .en{font-size:18px}
.bub .tr{font-style:italic}
.fb .sm{display:block;font-weight:700;color:var(--muted);font-size:14px}
.fb .ansl{margin:8px 0 2px;font-size:18px}.fb .ansl .en{font-size:22px}
.fb .note{margin:0 0 8px;font-weight:700;font-size:15px;color:var(--muted)}
.reward{display:flex;gap:14px;align-items:center;justify-content:center;flex-wrap:wrap;background:#FFF3C4;border-radius:20px;padding:12px 16px;text-align:left}
.reward .en{font-size:20px}.reward .sm{display:block;font-weight:700;color:var(--muted);font-size:14px}
.tip{display:flex""")
R(".mlab{font-family:var(--f-disp);font-weight:700;font-size:19px;fill:var(--ink)}",".mlab{font-family:var(--f-disp);font-weight:700;font-size:17px;fill:#5E3A1E}")
R("box-shadow:0 10px 30px rgba(11,92,126,.25),inset 0 0 0 4px rgba(255,255,255,.6);background:var(--sea)}","box-shadow:0 10px 30px rgba(90,60,20,.3),inset 0 0 0 4px rgba(122,74,34,.4);background:#E2C389}")
R(".hud{margin-left:auto;display:flex;flex-direction:column;",".hud{margin-left:auto;display:grid;grid-template-columns:auto auto;column-gap:8px;")
R("@media (max-width:520px){.top{flex-wrap:wrap}.top .polly{width:58px}.hud{margin-left:0;flex-direction:row;gap:8px;align-items:center;width:100%}}","@media (max-width:520px){.top{flex-wrap:wrap}.top .polly{width:58px}.hud{margin-left:0;width:100%;justify-items:start}}")
open('src.html','w').write(s)

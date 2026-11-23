import sys
src,qf,out=sys.argv[1:4]
s=open(src,encoding='utf-8').read();q=open(qf,encoding='utf-8').read()
L=s.split('\n')
a=next(i for i,l in enumerate(L) if '/* ---------- 20 misi ---------- */' in l)
b=next(i for i,l in enumerate(L) if '/* ---------- aplikasi ---------- */' in l)
L[a:b]=q.split('\n')+['']
i=next(i for i,l in enumerate(L) if l.startswith('const NBIP='))
L[i]="""const NBIP=`<svg viewBox="-36 -50 72 84" width="60" aria-hidden="true"><g class="nbody">${octo(0,4,'#F2708A',1.15)}</g><g class="q"><circle cx="25" cy="-40" r="12" fill="#fff" stroke="#5B6684" stroke-width="2"/><text x="25" y="-40" text-anchor="middle" dominant-baseline="central" style="font:900 16px var(--fb);fill:#E8553F">?</text></g><g class="spark"><circle cx="-26" cy="-34" r="5" fill="#BDEFE8" stroke="#3CC9BD" stroke-width="1.5"/><circle cx="28" cy="-24" r="3.5" fill="#BDEFE8" stroke="#3CC9BD" stroke-width="1.5"/><circle cx="-20" cy="-44" r="2.5" fill="#BDEFE8"/></g></svg>`;"""
i=next(i for i,l in enumerate(L) if '<svg class="rk"' in l)
L[i]='      <svg class="rk" viewBox="-36 -30 72 60" aria-hidden="true"><circle class="fl" cx="-31" cy="-8" r="3.2" fill="#BDEFE8"/><circle class="fl" cx="-28" cy="7" r="2.2" fill="#BDEFE8" style="animation-delay:.6s"/><rect x="-4" y="-22" width="4" height="10" fill="#E0A100"/><rect x="-4" y="-24" width="10" height="4" rx="2" fill="#E0A100"/><ellipse cx="0" cy="0" rx="22" ry="13" fill="#F5C518" stroke="#B88400" stroke-width="2"/><rect x="-6" y="-17" width="14" height="7" rx="3" fill="#F5C518" stroke="#B88400" stroke-width="2"/><circle cx="-7" cy="0" r="5" fill="#9EDCF5" stroke="#B88400" stroke-width="2"/><circle cx="7" cy="0" r="5" fill="#9EDCF5" stroke="#B88400" stroke-width="2"/><path d="M-22 0 l-7 -6 v12 z" fill="#E0A100"/></svg>'
s='\n'.join(L)
CSS=open(sys.argv[4],encoding='utf-8').read()
R=[('<title>Misi Galaksi Bip</title>','<title>Ekspedisi Laut Dalam</title>',1),
('family=Lilita+One&','family=Grandstander:wght@600;800&',1),
('--fd:"Lilita One",','--fd:"Grandstander",',1),
('<div class="kick">20 misi berpikir logis</div>','<div class="kick">20 teka-teki berpikir logis</div>',1),
('<h1>Misi Galaksi Bip</h1>','<h1>Ekspedisi Laut Dalam</h1>',1),
('Bantu Kapten Rara dan robot Bip menjelajah galaksi. Setiap soal punya tayangan contoh, jadi tonton dulu sebelum menjawab.','Menyelam bersama Profesor Lina dan Oki si gurita. Setiap soal punya pertunjukan contoh, jadi tonton dulu sebelum menjawab.',1),
('<small>Bintang</small>','<small>Mutiara</small>',2),
('aria-label="Peta misi"','aria-label="Peta soal"',1),
("const PC=['#F2602B','#4C8DF0','#22A06B','#9B6BDF','#E8B10C','#E0457B','#0F9C92','#7C5CD6','#E0603E','#3D8BE0'];","const PC=['#FF6F59','#13B5A6','#3D8BE0','#F5A623','#8E6BD8','#F2708A','#0E8F86','#FF9F43','#3FA34D','#1F7FA6'];",1),
("const KEY='misi-galaksi-bip-v1';","const KEY='ekspedisi-laut-dalam-v1';",1),
("""<svg viewBox="-22 -30 44 64" width="44">${rocket(0,0,'#F2602B')}</svg>""","""<svg viewBox="-32 -24 64 48" width="64">${fish(0,0,'#FF9F43',1.3)}</svg>""",1),
('Misi ${i+1}','Soal ${i+1}',3),
('Kapten Rara</div>','Profesor Lina</div>',1),
('Kirim jawaban ke Kapten','Periksa jawaban',1),
('← Misi sebelumnya','← Soal sebelumnya',1),('Misi berikutnya →','Soal berikutnya →',1),
('Misi berhasil! Kamu dapat 1 bintang.','Hebat! Kamu dapat 1 mutiara.',1),
("""bip(0,0).replace('<g','<svg viewBox="-24 -32 48 60" width="42" class="shake"><g')+'</svg>'""","""'<svg viewBox="-26 -28 52 62" width="44" class="shake">'+octo(0,0)+'</svg>'""",1),
('misi. Ketuk planet yang belum dikunjungi di peta.','soal. Ketuk gelembung bernomor yang belum dibuka.',1),
('kapten galaksi','penjelajah laut dalam',1),('Ulangi misi','Ulangi soal',1),('setiap misi','setiap soal',1),
('Laporan misi','Laporan ekspedisi',1),(' bintang</span>',' mutiara</span>',1),('Mulai misi dari awal','Mulai lagi dari awal',1),
('</style>',CSS+'\n</style>',1)]
for x,y,n in R:
    c=s.count(x)
    if c!=n: sys.exit(f'{c} != {n} for {x[:60]!r}')
    s=s.replace(x,y)
open(out,'w',encoding='utf-8').write(s);print('built')

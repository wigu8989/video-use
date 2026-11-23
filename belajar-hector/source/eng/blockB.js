function summary(){const I=ISL[V.i],n=V.res.filter(Boolean).length,stars=n===6?3:n>=4?2:1;
  const prev=SAVE[I.key]||{};SAVE[I.key]={done:true,stars:Math.max(prev.stars||0,stars),best:Math.max(prev.best||0,n)};persist();
  const all=ISL.every(x=>SAVE[x.key]?.done),pieces=ISL.filter(x=>SAVE[x.key]?.done).length;
  const nxt=(V.i+1)%ISL.length;V.view='sum';
  const piece=`<svg viewBox="0 0 120 90" width="120" aria-hidden="true"><path d="M8 10 L60 4 L112 12 L106 48 L114 82 L58 86 L6 80 L12 46Z" fill="#F2DFAF" stroke="#8A6234" stroke-width="3"/><path d="M20 60 q20 -30 40 -10 t40 -20" stroke="#B3362B" stroke-width="3" stroke-dasharray="6 5" fill="none"/><path d="M92 22 l10 10 M102 22 l-10 10" stroke="#B3362B" stroke-width="4" stroke-linecap="round"/><g transform="translate(34 52) scale(.7)">${islBase}</g></svg>`;
  app.innerHTML=`${DEFS}${barHTML(I,2)}<div class="card sum"><div class="bigstars">${[0,1,2].map(j=>STAR(j<stars)).join('')}</div>
   <h2 style="font-size:32px;color:var(--ac)">${stars===3?'Perfect!':stars===2?'Great job!':'Keep practicing!'}</h2>
   <p style="margin:0;font-weight:700">${stars===3?'Sempurna!':stars===2?'Bagus sekali!':'Terus berlatih, ya!'} Kamu benar <b>${n} dari 6</b> pada percobaan pertama.</p>
   <div class="reward">${all?G(chestSVG(true),110):piece}<div><b class="en">${all?'You found the treasure!':`You got a map piece! (${pieces}/5)`}</b><span class="sm">${all?'Kamu menemukan harta karun! Semua pulau selesai.':`Kamu mendapat potongan peta! Kumpulkan 5 untuk membuka peti harta.`}</span></div></div>
   <div class="say" style="text-align:left;width:100%">${polly('happy')}<div class="bub"><span class="en">New stickers for your Treasure Book!</span><span class="sm">Stiker kata baru untuk Buku Stikermu. Ketuk untuk mendengar lagi.</span></div></div>
   <div class="stk" style="width:100%">${I.words.map(k=>`<button class="st" data-say="${k}">${pic(k,44)}<span>${k}</span></button>`).join('')}</div>
   <div class="act"><button class="btn alt" id="again">Play again</button><button class="btn" data-open="${nxt}">Next island ›</button><button class="btn alt" data-go="map">Map</button></div></div>`;
  document.getElementById('again').onclick=()=>openIsland(V.i);
  sfx.fan();confetti();if(all)setTimeout(confetti,900);scrollTo({top:0,behavior:'smooth'})}

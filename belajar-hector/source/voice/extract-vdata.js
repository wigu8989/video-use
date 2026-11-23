const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.goto('file://'+process.argv[2]);await p.waitForTimeout(400);
const d=await p.evaluate(()=>{const M=__H.QS.mand,P=window.PYM||{};const out={kata:[],kalimat:[],hafalan:[],eng:[]};const seen=new Set();
 M.forEach(q=>{let m=/^Bab (\d) · Apa arti (.+)\?$/.exec(q.q);if(m&&q.zh&&!seen.has(q.zh)){seen.add(q.zh);out.kata.push({t:q.zh,py:P[q.zh]||'',m:q.a,g:'Bab '+m[1]})}});
 M.forEach(q=>{if(q.build&&!q.bid&&typeof q.bab==='number')out.kalimat.push({t:q.build.join(''),py:'',m:q.sub,g:'Bab '+q.bab})});
 M.forEach(q=>{if(q.bab==='cerita'&&q.speak&&q.py)out.hafalan.push({t:q.speak,py:q.py,m:q.sub,g:'孔融让梨'})});
 __H.QS.conv.forEach(q=>{if(q.speak)out.eng.push({t:q.speak,py:'',m:(q.q||'').replace(/<[^>]+>/g,''),g:/Fuzzy|bear|hair|wasn|was a|had no/i.test(q.speak)?'Fuzzy Wuzzy':'Percakapan'})});
 return out});
console.log(Object.fromEntries(Object.entries(d).map(([k,v])=>[k,v.length])),JSON.stringify(d.eng.slice(0,3)),JSON.stringify(d.kalimat[0]));
require('fs').writeFileSync('../voice/vdata.json',JSON.stringify(d));await b.close()})();

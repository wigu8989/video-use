const norm=s=>s.toLowerCase().replace(/[’']/g,'').replace(/[^a-z\s]/g,' ').split(/\s+/).filter(Boolean);
function lev(a,b){const d=[...Array(b.length+1)].map((_,i)=>[i]);for(let j=1;j<=a.length;j++)d[0][j]=j;for(let i=1;i<=b.length;i++)for(let j=1;j<=a.length;j++)d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(b[i-1]===a[j-1]?0:1));return d[b.length][a.length]}
const ZP=/[，。！？、：；“”‘’,.!?\s]/g;
const TRAD={'個':'个','歲':'岁','讓':'让','媽':'妈','買':'买','來':'来','許':'许','盤':'盘','聰':'聪','哥':'哥','給':'给','裡':'里','裏':'里','說':'说','嗎':'吗','謝':'谢','對':'对','見':'见','關':'关','係':'系','貌':'貌','禮':'礼','語':'语','學':'学','習':'习','書':'书','筆':'笔','講':'讲','會':'会','還':'还','飯':'饭','餓':'饿','貓':'猫','間':'间','東':'东','麵':'面','蛋':'蛋','歡':'欢','兒':'儿','歌':'歌','漢':'汉','門':'门','開':'开','聽':'听','誰':'谁','訴':'诉','時':'时','嗎':'吗','爺':'爷','園':'园','鳥':'鸟','們':'们','這':'这','並':'并','體':'体','實':'实','發':'发'};
const ALIAS={'俐':'利力立丽例厉莉粒','梨':'离里理李黎犁璃丽','融':'荣容蓉溶熔绒','孔':'空恐控','伶':'灵玲铃零龄凌','聪':'葱从匆','盘':'盆判攀','主':'住注祝煮助','意':'义亿以艺议易','岁':'睡碎随','弟':'地第帝的','让':'嚷','叫':'较教觉','留':'流刘六','己':'几挤给机','把':'吧爸巴','只':'之知支直','吃':'持迟池','着':'这者著','突':'图涂','然':'燃','许':'需须','多':'都','来':'莱','分':'份粉','看':'砍','中':'钟终','有':'又右友','了':'啦乐','个':'各','四':'4是','小':'晓笑','名':'明鸣','明':'名鸣','心':'新欣','大':'达打','哥':'歌','给':'几','自':'子字','妈':'吗马','买':'卖迈','说':'所','的':'得地'};
const DIG={'0':'零','1':'一','2':'二','3':'三','4':'四','5':'五','6':'六','7':'七','8':'八','9':'九'};
const zhNorm=s=>[...s.replace(ZP,'')].map(c=>TRAD[c]||DIG[c]||c);
const zhEq=(c,x)=>x===c||(ALIAS[c]||'').includes(x);
function scoreZh(t,h){const T=[...t.replace(ZP,'')],H=zhNorm(h),used=new Set();return T.map(c=>{const k=H.findIndex((x,i)=>!used.has(i)&&zhEq(c,x));if(k>=0){used.add(k);return true}return false})}
const scoreQ=(q,h)=>q.slang==='zh'?scoreZh(q.speak,h):score(q.speak,h);
function score(t,h){const T=norm(t),H=norm(h),used=new Set();return T.map(w=>{const k=H.findIndex((x,i)=>!used.has(i)&&(x===w||(w.length>=4&&lev(w,x)<=1)||(w==='wuzzy'&&/^(wuzz|wuss|woozy|wusy|was|whoozy)/.test(x))||(w==='fuzzy'&&/^(fuzz|fuss|fussy|fozzy)/.test(x))));if(k>=0){used.add(k);return true}return false})}

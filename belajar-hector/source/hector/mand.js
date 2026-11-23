/* ===== Mandarin: soal dari bahan sekolah (Bab 1–6 + 孔融让梨) ===== */
(function(){
let sd=29;const rnd=()=>{sd=(sd*9301+49297)%233280;return sd/233280};
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const uniq=a=>[...new Set(a)];
const opt=(a,pool,k=2)=>shuf([a,...shuf(uniq(pool).filter(x=>x!==a)).slice(0,k)]);
const M=[];const add=(b,q)=>{q.bab=b;M.push(q)};
/* ---------- kosakata [hanzi, pinyin, arti, bab] ---------- */
const V=[
 ['在','zài','di (kata depan)',1],['我们','wǒmen','kami; kita',1],['教','jiāo','mengajar',1],['汉语','Hànyǔ','bahasa Mandarin',1],['写','xiě','menulis',1],['字','zì','huruf',1],['汉字','hànzì','huruf Tionghoa',1],['读','dú','membaca',1],['儿歌','érgē','puisi / lagu anak-anak',1],['画画儿','huà huàr','menggambar',1],['喜欢','xǐhuan','menyukai',1],['不喜欢','bù xǐhuan','tidak suka',1],['在家','zài jiā','di rumah',1],['在学校','zài xuéxiào','di sekolah',1],['在花园里','zài huāyuán li','di taman bunga',1],['画太阳','huà tàiyáng','menggambar matahari',1],['山水画儿','shānshuǐ huàr','lukisan pemandangan',1],['年画儿','niánhuàr','lukisan tahun baru Imlek',1],['读书','dúshū','membaca buku',1],['汉语老师','Hànyǔ lǎoshī','guru bahasa Mandarin',1],['喜欢上学','xǐhuan shàngxué','suka pergi ke sekolah',1],
 ['里','lǐ','di dalam',2],['教室','jiàoshì','ruang kelas',2],['教室里','jiàoshì lǐ','di dalam kelas',2],['不是','bú shì','bukan',2],['这','zhè','ini',2],['那','nà','itu',2],['吗','ma','apakah (kata tanya)',2],['她','tā','dia (perempuan)',2],['书','shū','buku',2],['笔','bǐ','alat tulis',2],['铅笔','qiānbǐ','pensil',2],['尺','chǐ','penggaris',2],['橡皮','xiàngpí','penghapus',2],['本子','běnzi','buku tulis',2],['和','hé','dan; dengan',2],['讲中文','jiǎng Zhōngwén','berbicara bahasa Mandarin',2],['家里','jiā lǐ','di dalam rumah',2],['我的','wǒ de','punya saya',2],['大的','dà de','yang besar',2],['红笔','hóng bǐ','pensil merah',2],['新帽子','xīn màozi','topi baru',2],['奶奶','nǎinai','nenek',2],['爷爷','yéye','kakek',2],
 ['上学','shàngxué','bersekolah',3],['放学','fàngxué','usai sekolah',3],['今天','jīntiān','hari ini',3],['星期五','xīngqīwǔ','hari Jumat',3],['告诉','gàosu','memberi tahu',3],['下午','xiàwǔ','sore hari',3],['上午','shàngwǔ','pagi hari',3],['中午','zhōngwǔ','siang hari',3],['问','wèn','bertanya',3],['谁','shéi','siapa',3],['朋友','péngyou','teman',3],['新朋友','xīn péngyou','teman baru',3],['老朋友','lǎo péngyou','teman lama',3],['听','tīng','mendengar',3],['听写','tīngxiě','dikte',3],['听歌','tīng gē','dengar lagu',3],['开心','kāixīn','merasa senang',3],['问老师','wèn lǎoshī','bertanya pada guru',3],['真开心','zhēn kāixīn','sungguh senang',3],['星','xīng','bintang',3],
 ['讲礼貌','jiǎng lǐmào','memperhatikan sopan santun',4],['礼貌','lǐmào','sopan santun',4],['有礼貌','yǒu lǐmào','punya sopan santun',4],['没有礼貌','méiyǒu lǐmào','tidak sopan',4],['礼貌用语','lǐmào yòngyǔ','kata-kata sopan santun',4],['用笔','yòng bǐ','memakai pensil',4],['记下来','jì xiàlai','dicatat',4],['日记','rìjì','catatan harian',4],['笔记本','bǐjìběn','buku catatan',4],['你好','nǐ hǎo','halo',4],['请坐','qǐng zuò','silakan duduk',4],['请问','qǐngwèn','mau bertanya',4],['请说中文','qǐng shuō Zhōngwén','silakan berbicara bahasa Mandarin',4],['谢谢','xièxie','terima kasih',4],['谢谢老师','xièxie lǎoshī','terima kasih, Guru',4],['不用谢','bú yòng xiè','sama-sama',4],['对不起','duìbuqǐ','maaf',4],['没关系','méi guānxi','tidak apa-apa',4],['没有','méiyǒu','tidak punya',4],['再见','zàijiàn','sampai jumpa',4],['再来','zài lái','datang lagi',4],['做朋友','zuò péngyou','menjadi teman',4],['孩子','háizi','anak',4],['好孩子','hǎo háizi','anak baik',4],['小孩子','xiǎo háizi','anak kecil',4],
 ['买','mǎi','membeli',5],['东西','dōngxi','barang',5],['买东西','mǎi dōngxi','berbelanja',5],['今年','jīnnián','tahun ini',5],['岁','suì','umur',5],['昨天','zuótiān','kemarin',5],['前天','qiántiān','kemarin lusa',5],['明天','míngtiān','besok',5],['后天','hòutiān','lusa',5],['生日','shēngrì','ulang tahun',5],['一家','yìjiā','sekeluarga',5],['给','gěi','memberi / untuk',5],['蛋糕','dàngāo','kue bolu',5],['面包','miànbāo','roti',5],['包子','bāozi','bakpao',5],['书包','shūbāo','tas sekolah',5],['牛奶','niúnǎi','susu sapi',5],['水果','shuǐguǒ','buah',5],['玩具','wánjù','mainan',5],['哥哥','gēge','kakak laki-laki',5],['姐姐','jiějie','kakak perempuan',5],['张','zhāng','lembar (kata satuan)',5],['卡','kǎ','kartu',5],['生日卡','shēngrì kǎ','kartu ulang tahun',5],['一起','yìqǐ','bersama',5],['唱','chàng','menyanyi',5],['唱歌','chàng gē','bernyanyi',5],['生日歌','shēngrì gē','lagu ulang tahun',5],['一天','yì tiān','seharian',5],['生日蛋糕','shēngrì dàngāo','kue ulang tahun',5],
 ['会','huì','bisa; mampu',6],['不会','bú huì','tidak bisa',6],['做','zuò','mengerjakan; melakukan',6],['事','shì','pekerjaan; urusan',6],['做事','zuò shì','mengerjakan pekerjaan',6],['做的事','zuò de shì','pekerjaan yang dilakukan',6],['小学','xiǎoxué','Sekolah Dasar',6],['小学生','xiǎoxuéshēng','murid SD',6],['可是','kěshì','tetapi',6],['别','bié','jangan',6],['别说','bié shuō','jangan katakan',6],['别人','biérén','orang lain',6],['收拾','shōushi','membereskan',6],['收起来','shōu qǐlai','mulai membereskan',6],['房间','fángjiān','kamar',6],['房子','fángzi','rumah',6],['书房','shūfáng','kamar belajar',6],['还','hái','masih; juga',6],['洗','xǐ','mencuci',6],['洗衣','xǐ yī','mencuci baju',6],['洗手','xǐ shǒu','mencuci tangan',6],['洗头','xǐ tóu','mencuci rambut',6],['洗澡','xǐzǎo','mandi',6],['猫','māo','kucing',6],['饿','è','lapar',6],['不饿','bú è','tidak lapar',6],['喂','wèi','memberi makan',6],['大事','dà shì','hal besar',6],['小事','xiǎo shì','hal kecil',6],['高兴的事','gāoxìng de shì','hal yang menyenangkan',6],['真不少','zhēn bù shǎo','sungguh banyak',6]];
const byB=b=>V.filter(v=>v[3]===b);
V.forEach(([z,p,m,b])=>add(b,{zh:z,say:z,q:`Bab ${b} · Apa arti ${z}?`,o:opt(m,byB(b).map(v=>v[2])),a:m,n:`${z} <b>${p}</b> = ${m}.`}));
V.forEach(([z,p,m,b],i)=>{if(i%3===1)add(b,{q:`Bab ${b} · 翻译词语 · Bahasa Mandarin untuk "${m}" adalah …`,o:opt(z,byB(b).map(v=>v[0])),a:z,n:`"${m}" = <b>${z}</b> (${p}).`})});
V.forEach(([z,p,m,b],i)=>{if(i%3===0)add(b,{zh:z,nopy:1,q:`Bab ${b} · Pinyin yang benar untuk ${z} adalah …`,o:opt(p,byB(b).map(v=>v[1])),a:p,n:`${z} dibaca <b>${p}</b> (${m}).`})});
V.forEach(([z,p,m,b],i)=>{if(i%3===2)add(b,{say:z,lang:'zh',q:`Bab ${b} · 听力 · Dengarkan, lalu pilih kata yang kamu dengar.`,o:opt(z,byB(b).map(v=>v[0])),a:z,n:`Yang dibacakan: ${z} <b>${p}</b> (${m}).`})});
/* ---------- dikte ---------- */
const DK={1:['我妈妈在学校教汉语。','我在家喜欢和爸爸说汉语。','学生们喜欢学写汉字。','我在家爱画山水画儿。','老师教同学们读中文儿歌。'],
 5:['小朋友们一起去买水果。','他哥哥不喜欢唱中文歌。','星期天我们去花园玩儿。','姐姐给我买面包和牛奶。','早上爸爸买了八个包子。'],
 6:['姐姐会做的事真不少。','今天我们学了不少新汉字。','谁在收拾你的玩具和文具？','她会画小鸟，还会唱生日歌。','别看我小，我会收拾小房间。']};
Object.entries(DK).forEach(([b,L])=>L.forEach(s=>add(+b,{say:s,lang:'zh',q:`Bab ${b} · 听写 · Dengarkan kalimat dikte, lalu pilih yang benar.`,o:opt(s,L),a:s,n:`<b>${s}</b>`})));
const D5=[['五张卡','lima lembar kartu'],['七岁了','umur tujuh tahun'],['给老师','untuk guru'],['新玩具','mainan baru'],['我们一家','kami sekeluarga'],['谁的生日','ulang tahun siapa'],['昨天下午','kemarin sore']];
D5.forEach(([z,m])=>add(5,{zh:z,say:z,q:`Bab 5 · 听写 · ${z} artinya …`,o:opt(m,D5.map(x=>x[1])),a:m,n:`${z} = <b>${m}</b>.`}));
const D6=[['真饿','sangat lapar'],['还没来','masih belum datang'],['别去了','jangan pergi lagi'],['收起来','mulai membereskan'],['不会洗衣','tidak bisa mencuci baju']];
D6.forEach(([z,m])=>{if(z!=='收起来')add(6,{zh:z,say:z,q:`Bab 6 · 听写 · ${z} artinya …`,o:opt(m,D6.map(x=>x[1])),a:m,n:`${z} = <b>${m}</b>.`})});
/* ---------- hari & waktu ---------- */
const HARI=[['星期一','Senin'],['星期二','Selasa'],['星期三','Rabu'],['星期四','Kamis'],['星期五','Jumat'],['星期六','Sabtu'],['星期天','Minggu']];
HARI.forEach(([z,i],k)=>{if(k%2===0)add(3,{zh:z,say:z,q:`Bab 3 · ${z} artinya hari …`,o:opt(i,HARI.map(x=>x[1])),a:i,n:`${z} = hari <b>${i}</b>. (星期日 juga hari Minggu)`});else add(3,{q:`Bab 3 · Bahasa Mandarin untuk hari ${i} adalah …`,o:opt(z,HARI.map(x=>x[0])),a:z,n:`Hari ${i} = <b>${z}</b>.`})});
add(3,{q:'Bab 3 · 今天星期二，后天星期几？',o:['后天星期四。','后天星期三。','后天星期五。'],a:'后天星期四。',n:'Hari ini Selasa (星期二). Lusa (后天) = <b>星期四</b>, Kamis.'});
add(3,{q:'Bab 3 · 今天星期五，后天星期几？',o:['后天星期天。','后天星期六。','后天星期一。'],a:'后天星期天。',n:'Jumat + 2 hari = Minggu, <b>星期天</b>.'});
add(3,{q:'Bab 3 · 上午、中午、下午. Sore hari (13.00–17.00) adalah …',o:['下午','上午','中午'],a:'下午',n:'上午 pagi, 中午 siang (12.00), <b>下午</b> sore.'});
add(5,{q:'Bab 5 · 前天、昨天、今天、明天、后天. "Besok" adalah …',o:['明天','昨天','后天'],a:'明天',n:'前天 kemarin lusa · 昨天 kemarin · 今天 hari ini · <b>明天</b> besok · 后天 lusa.'});
add(5,{q:'Bab 5 · 今天星期三，昨天星期几？',o:['昨天星期二。','昨天星期四。','昨天星期一。'],a:'昨天星期二。',n:'Kemarin (昨天) dari Rabu = <b>星期二</b>, Selasa.'});
add(5,{q:'Bab 5 · 今天星期一，明天星期几？',o:['明天星期二。','明天星期天。','明天星期三。'],a:'明天星期二。',n:'Besok (明天) dari Senin = <b>星期二</b>, Selasa.'});
/* ---------- jumlah goresan ---------- */
const ST={1:[['在','zài',6],['教','jiāo',11],['汉','hàn',5],['语','yǔ',9],['写','xiě',5],['字','zì',6],['读','dú',10],['画','huà',8]],
 2:[['吗','ma',6],['不','bù',4],['那','nà',6],['她','tā',6],['本','běn',5],['子','zǐ',3],['笔','bǐ',10],['讲','jiǎng',6],['室','shì',9],['里','lǐ',7],['书','shū',4]],
 3:[['歌','gē',14],['喜','xǐ',12],['欢','huān',6],['问','wèn',6],['谁','shéi',10],['听','tīng',7],['心','xīn',4],['告','gào',7],['诉','sù',7],['朋','péng',8],['友','yǒu',4],['午','wǔ',4],['放','fàng',8],['今','jīn',4],['星','xīng',9],['期','qī',12]],
 4:[['再','zài',6],['孩','hái',9],['对','duì',5],['起','qǐ',10],['没','méi',7],['关','guān',6],['系','xì',7],['用','yòng',5],['记','jì',5],['请','qǐng',10],['谢','xiè',12]],
 5:[['张','zhāng',7],['卡','kǎ',5],['唱','chàng',11],['买','mǎi',6],['岁','suì',6],['昨','zuó',9],['给','gěi',9],['蛋','dàn',11],['糕','gāo',16],['包','bāo',5],['果','guǒ',8],['玩','wán',8],['具','jù',8],['哥','gē',10],['姐','jiě',8]],
 6:[['会','huì',6],['事','shì',8],['可','kě',5],['别','bié',7],['收','shōu',6],['拾','shí',9],['房','fáng',8],['间','jiān',7],['还','hái',7],['洗','xǐ',9],['澡','zǎo',16],['饿','è',10]]};
const CN=['','一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五','十六','十七'];
Object.entries(ST).forEach(([b,L])=>L.forEach(([z,p,n])=>add(+b,{zh:z,say:z,q:`Bab ${b} · 数笔画 · Berapa jumlah goresan huruf ${z} (${p})?`,o:shuf([String(n),String(n+1),String(n-1)]),a:String(n),n:`${z} ditulis dengan <b>${n} goresan</b> (${CN[n]}画).`})));
/* ---------- radikal ---------- */
const RAD=['讠','口','门','月','日','人','氵','女','纟','饣','犭','扌','户','辶','刂','宀','王','米','子','攵','木','⺮'];
[[3,'谁','讠'],[3,'诉','讠'],[3,'听','口'],[3,'问','门'],[3,'朋','月'],[3,'期','月'],[3,'星','日'],[3,'今','人'],
 [1,'语','讠'],[1,'读','讠'],[1,'汉','氵'],[1,'字','宀'],[2,'讲','讠'],[2,'她','女'],[2,'吗','口'],[2,'室','宀'],[2,'笔','⺮'],
 [4,'请','讠'],[4,'谢','讠'],[4,'记','讠'],[4,'孩','子'],
 [5,'唱','口'],[5,'给','纟'],[5,'姐','女'],[5,'昨','日'],[5,'玩','王'],[5,'糕','米'],[5,'果','木'],
 [6,'洗','氵'],[6,'澡','氵'],[6,'饿','饣'],[6,'猫','犭'],[6,'拾','扌'],[6,'房','户'],[6,'间','门'],[6,'还','辶'],[6,'别','刂'],[6,'收','攵']]
 .forEach(([b,z,r])=>add(b,{zh:z,say:z,fz:z,q:`Bab ${b} · 部首 · Radikal huruf ${z} adalah …`,o:opt(r,RAD),a:r,n:`Radikal ${z} adalah <b>${r}</b>.`}));
/* ---------- 组词 ---------- */
[[3,'放','学','usai sekolah',['天','心']],[3,'今','天','hari ini',['学','友']],[3,'星','期','pekan',['天','心']],[3,'告','诉','memberi tahu',['学','歌']],[3,'朋','友','teman',['期','心']],[3,'开','心','senang',['学','友']],
 [1,'喜','欢','suka',['天','歌']],[1,'儿','歌','puisi anak-anak',['期','诉']],[1,'汉','字','huruf Tionghoa',['友','期']],[1,'读','书','membaca buku',['字','心']],
 [3,'听','写','dikte',['友','诉']],[3,'下','午','sore hari',['心','学']],[4,'礼','貌','sopan santun',['写','期']],
 [2,'教','室','ruang kelas',['书','本']],[2,'本','子','buku tulis',['室','里']],[2,'铅','笔','pensil',['书','子']],[2,'橡','皮','penghapus',['笔','子']],
 [4,'再','见','sampai jumpa',['谢','起']],[4,'对','不起','maaf',['关系','谢谢']],[4,'没','关系','tidak apa-apa',['不起','礼貌']],[4,'孩','子','anak',['见','坐']],[4,'请','坐','silakan duduk',['见','子']],
 [5,'蛋','糕','kue bolu',['包','果']],[5,'面','包','roti',['糕','具']],[5,'水','果','buah',['包','奶']],[5,'玩','具','mainan',['果','西']],[5,'东','西','barang',['具','奶']],[5,'牛','奶','susu sapi',['果','西']],[5,'生','日','ulang tahun',['西','果']],[5,'昨','天','kemarin',['日','西']],
 [6,'房','间','kamar',['澡','事']],[6,'洗','澡','mandi',['间','拾']],[6,'收','拾','membereskan',['澡','间']],[6,'可','是','tetapi',['事','间']],[6,'做','事','mengerjakan pekerjaan',['是','拾']],[6,'小学','生','murid SD',['事','间']]]
 .forEach(([b,a1,c,m,w])=>add(b,{q:`Bab ${b} · 组词 · Lengkapi kata: ${a1} ＿ (${m})`,o:shuf([c,...w]),a:c,fz:a1+c,n:`<b>${a1}${c}</b> = ${m}.`}));
/* ---------- 找出不同类的词 ---------- */
[[5,['哥哥','姐姐','爸爸','面包'],'面包','面包 (roti) adalah makanan, yang lain anggota keluarga.'],
 [5,['蛋糕','面包','牛奶','生日卡'],'生日卡','生日卡 (kartu ulang tahun) bukan makanan/minuman.'],
 [5,['昨天','今天','明天','水果'],'水果','水果 (buah) bukan kata waktu.'],
 [5,['笔','本子','书包','包子'],'包子','包子 (bakpao) makanan, yang lain perlengkapan sekolah.'],
 [5,['买','唱','给','玩具'],'玩具','玩具 (mainan) kata benda, yang lain kata kerja.'],
 [6,['洗手','洗头','洗澡','房间'],'房间','房间 (kamar) bukan kegiatan mencuci.'],
 [6,['猫','小鸟','小马','书房'],'书房','书房 (kamar belajar) bukan hewan.'],
 [6,['房间','书房','房子','洗衣'],'洗衣','洗衣 (mencuci baju) bukan tempat.'],
 [2,['铅笔','尺','橡皮','奶奶'],'奶奶','奶奶 (nenek) bukan alat tulis.'],
 [4,['谢谢','对不起','再见','房子'],'房子','房子 (rumah) bukan kata sopan santun.']]
 .forEach(([b,o,a,n])=>add(b,{q:`Bab ${b} · 找出不同类的词 · Mana yang <u>tidak sejenis</u>?`,o:shuf(o),a,n}));
/* ---------- 连一连 ---------- */
[[5,'唱','歌',['东西','面包']],[5,'买','东西',['歌','澡']],[5,'一张','生日卡',['蛋糕','牛奶']],[5,'喝','牛奶',['玩具','卡']],
 [6,'收拾','房间',['澡','歌']],[6,'喂','小猫',['房间','衣']],[6,'洗','衣',['猫','歌']],
 [1,'读','儿歌',['汉语','太阳']],[1,'教','汉语',['儿歌','太阳']],[1,'画','太阳',['汉语','书']],[2,'讲','中文',['本子','铅笔']],[4,'请','坐',['关系','不起']]]
 .forEach(([b,x,a,w])=>add(b,{q:`Bab ${b} · 连一连 · Pasangan yang tepat: ${x} ＿`,o:shuf([a,...w]),a,fz:x+a,n:`<b>${x}${a}</b>`}));
/* ---------- 选字填空 ---------- */
[[6,'我会＿拾小房间。','收',['手','受']],[6,'我还会洗衣和洗＿。','澡',['早','操']],[6,'小猫＿了，我会喂。','饿',['我','鹅']],[6,'小猫饿了，我会＿。','喂',['为','位']],[6,'可是你＿说我小。','别',['列','到']],[6,'我是一个小小学＿。','生',['声','星']],[6,'＿是你别说我小。','可',['哥','河']],[6,'我会做的事真不＿。','少',['小','沙']],
 [4,'＿见！ (sampai jumpa)','再',['在','菜']],[4,'我＿家里讲中文。','在',['再','菜']],[2,'这是你的书＿？','吗',['妈','马']],[2,'这＿是我的书。','不',['布','步']],[5,'妈妈＿我买了蛋糕。','给',['和','的']],[5,'哥哥和姐姐给我买了一＿生日卡。','张',['个','本']],[5,'今年我六＿了。','岁',['睡','水']],[5,'＿天是我的生日。','昨',['作','做']]]
 .forEach(([b,g,a,w])=>add(b,{q:`Bab ${b} · 选字填空 · Pilih huruf yang tepat: ${g}`,o:shuf([a,...w]),a,fz:g.replace('＿',a),n:`<b>${g.replace('＿',a)}</b>`}));
/* ---------- 课文填空 ---------- */
const T1='我在崇仁学校学习。老师教我们说汉语，写汉字，读儿歌，画画儿。我喜欢学中文。';
const T2='这是你的书吗？——这不是我的书。这是云云的书。那是她的笔和本子吗？——是她的。你在家里讲中文吗？——我在家里讲中文。爸爸、妈妈喜欢和我讲中文。';
const T3='今天星期五，放学了，爸爸在车上告诉我：“下午有一个小朋友来我们家。”我问：“他是谁？”爸爸说：“是云云。”云云是我的好朋友，我听了，真开心。';
const T4='小朋友，讲礼貌，礼貌用语记心里。“你好！”“请坐。”“谢谢！”“对不起。”“没关系。”“再见！”做个有礼貌的好孩子。';
const T5='今年我六岁了，昨天是我的生日，我们一家去买东西。妈妈给我买了蛋糕、面包、牛奶和水果。爸爸给我买了笔、本子和我喜欢的玩具。哥哥和姐姐给我买了一张生日卡。';
const T6='我是一个小小学生，可是你别说我小。我会收拾小房间，还会洗衣和洗澡。小猫饿了我会喂，我会做的事真不少。';
[[1,T1,'我在崇仁学校学＿。','习',['字','歌']],[1,T1,'老师＿我们说汉语','教',['读','写']],[1,T1,'写汉＿，读儿歌','字',['语','歌']],[1,T1,'读儿＿，画画儿','歌',['字','画']],[1,T1,'我喜＿学中文。','欢',['心','学']],
 [2,T2,'这是你的书＿？','吗',['的','她']],[2,T2,'这不是我的＿。','书',['笔','字']],[2,T2,'那是＿的笔和本子吗？','她',['他','我']],[2,T2,'你在家里＿中文吗？','讲',['读','写']],[2,T2,'爸爸、妈妈喜欢＿我讲中文。','和',['给','在']],
 [3,T3,'今天星期＿，放学了','五',['四','天']],[3,T3,'爸爸在车上＿诉我','告',['问','听']],[3,T3,'“＿午有一个小朋友来我们家。”','下',['上','中']],[3,T3,'我问：“他是＿？”','谁',['问','听']],[3,T3,'云云是我的好＿友','朋',['老','新']],[3,T3,'我听了，真开＿。','心',['学','友']],
 [4,T4,'小朋友，讲＿貌','礼',['理','李']],[4,T4,'礼貌用语＿心里。','记',['说','讲']],[4,T4,'“请＿。”','坐',['做','走']],[4,T4,'“没关＿。”','系',['西','习']],[4,T4,'做个有礼貌的好＿子。','孩',['孙','学']],
 [5,T5,'今年我＿岁了','六',['七','五']],[5,T5,'我们一家去买东＿。','西',['系','习']],[5,T5,'妈妈给我买了蛋糕、面包、牛奶和水＿。','果',['东','具']],[5,T5,'爸爸给我买了笔、本子和我喜欢的玩＿。','具',['果','卡']],[5,T5,'哥哥和姐姐给我买了一张生日＿。','卡',['歌','包']],
 [6,T6,'我是一个小小学生，＿是你别说我小。','可',['哥','还']],[6,T6,'我会收拾小房＿','间',['门','问']],[6,T6,'＿会洗衣和洗澡。','还',['不','可']],[6,T6,'小猫＿了我会喂','饿',['我','喂']],[6,T6,'我会做的事真不＿。','少',['小','多']]]
 .forEach(([b,t,g,a,w])=>add(b,{read:t,q:`Bab ${b} · 课文填空 · Huruf yang tepat: ${g}`,o:shuf([a,...w]),a,fz:g.replace('＿',a),n:`Lihat teks bacaan: <b>${g.replace('＿',a)}</b>`}));
/* ---------- 连词成句 ---------- */
[[1,['我','在','崇仁学校','学习'],'Saya belajar di Sekolah Harapan Kasih.'],[1,['老师','教','我们','说','汉语'],'Guru mengajar kami berbicara bahasa Mandarin.'],[1,['我','喜欢','学','中文'],'Saya suka belajar bahasa Mandarin.'],[1,['我妈妈','在','学校','教','汉语'],'Ibu saya mengajar bahasa Mandarin di sekolah.'],[1,['学生们','喜欢','学写','汉字'],'Para murid suka belajar menulis huruf Mandarin.'],[1,['老师','教','同学们','读','中文儿歌'],'Guru mengajar teman-teman membaca puisi anak Mandarin.'],
 [2,['这','不是','我的','书'],'Ini bukan buku saya.'],[2,['那是','她的','笔和本子','吗'],'Apakah itu alat tulis dan buku tulis dia?'],[2,['同学们','在','教室里','写','汉字'],'Teman-teman menulis huruf Mandarin di dalam kelas.'],[2,['这','是','谁的','新帽子'],'Ini topi baru siapa?'],[2,['我们','用','笔','写','汉字'],'Kami menulis huruf Mandarin dengan pena.'],
 [3,['云云','是','我的','好朋友'],'Yunyun adalah teman baik saya.'],[3,['下午','有','一个','小朋友','来','我们家'],'Sore nanti ada seorang teman datang ke rumah kita.'],[3,['天上','的','星星','真','好看'],'Bintang di langit sungguh indah.'],
 [4,['大家','要','讲','礼貌'],'Semua harus sopan.'],[4,['礼貌用语','记','心里'],'Kata-kata sopan diingat di dalam hati.'],[4,['做个','有礼貌的','好孩子'],'Jadilah anak baik yang sopan.'],
 [5,['我们','一家','去','买东西'],'Kami sekeluarga pergi berbelanja.'],[5,['哥哥和姐姐','给我','买了','一张生日卡'],'Kakak membelikan saya selembar kartu ulang tahun.'],[5,['小朋友们','一起','去','买水果'],'Anak-anak bersama-sama pergi membeli buah.'],[5,['妈妈','给我','买了','蛋糕'],'Ibu membelikan saya kue bolu.'],[5,['早上','爸爸','买了','八个包子'],'Pagi hari ayah membeli delapan bakpao.',['爸爸早上买了八个包子']],
 [6,['我','是','一个','小学生'],'Saya adalah seorang murid SD.'],[6,['我','会','收拾','小房间'],'Saya bisa membereskan kamar kecil.'],[6,['我','还会','洗衣和洗澡'],'Saya juga bisa mencuci baju dan mandi.'],[6,['姐姐','会做的事','真不少'],'Pekerjaan yang bisa kakak lakukan sungguh banyak.'],[6,['别','看','我','小'],'Jangan lihat saya kecil.'],[6,['妈妈','在','家里','教','我','说','汉语'],'Ibu mengajar saya berbicara bahasa Mandarin di rumah.']]
 .forEach(([b,w,m,alt])=>add(b,{build:w,alt:alt||[],say:w.join(''),q:`Bab ${b} · 连词成句 · Susun kata menjadi kalimat`,sub:m,n:`<b>${w.join('')}</b> = ${m}`}));
/* ---------- 翻译 ---------- */
[[2,'Pagi ini Xiaoyun datang ke rumah saya.','今天早上小云来我家。',['今天下午小云来我家。','今天早上我去小云家。']],[2,'Ini adalah topi baru siapa?','这是谁的新帽子？',['这是我的新帽子。','那是谁的写字本？']],[2,'Saya di rumah berbicara bahasa Mandarin dengan kakek dan nenek.','我在家里和爷爷奶奶讲中文。',['我在学校和老师讲中文。','爷爷奶奶在家里看中文书。']],[2,'Anak kecil itu tidak suka membaca buku bahasa Mandarin.','那个小朋友不喜欢看中文书。',['那个小朋友喜欢看中文书。','这个小朋友不喜欢画画儿。']],[2,'Hari Minggu Fangfang pergi ke taman bunga untuk menggambar.','星期天方方去花园画画儿。',['星期五方方去学校画画儿。','星期天方方在家里读儿歌。']],[3,'Hari ini hari Jumat, sudah pulang sekolah.','今天星期五，放学了。',['今天星期四，上学了。','后天星期五，放学了。']],
 [5,'Kemarin adalah hari ulang tahun saya.','昨天是我的生日。',['今天是我的生日。','昨天是姐姐的生日。']],[5,'Ibu membelikan saya roti dan susu.','妈妈给我买了面包和牛奶。',['妈妈给我买了蛋糕和水果。','爸爸给我买了面包和牛奶。']],[6,'Saya bisa membereskan kamar.','我会收拾房间。',['我不会收拾房间。','我会洗衣和洗澡。']],[6,'Kucing kecil lapar.','小猫饿了。',['小猫不饿。','小鸟饿了。']]]
 .forEach(([b,id,a,w])=>add(b,{q:`Bab ${b} · 翻译 · Terjemahkan: "${id}"`,o:shuf([a,...w]),a,n:`<b>${a}</b>`}));
/* ---------- 回答问题 ---------- */
[[1,'你在哪里学习中文？','我在崇仁三语学校学习中文。',['我在家里看书。','我有五个好朋友。']],[1,'老师在学校里教你什么？','老师教我说汉语，写汉字，读儿歌，画画儿。',['我在崇仁学校学习。','今天星期三。']],[2,'这是你画的小鸟吗？','是的，这是我画的小鸟。',['我喜欢听中文歌。','后天星期四。']],[2,'这是谁的书？','这是云云的书。',['这是我的笔。','是星期五。']],[2,'你在家里讲中文吗？','我在家里讲中文。',['我在学校写汉字。','我有一本书。']],[3,'你有几个好朋友？','我有五个好朋友。',['我是你的好朋友。','我在家里讲中文。']],[3,'他是谁？','是云云。',['是星期五。','是下午。']],
 [5,'你今年几岁？','我今年六岁。',['我昨天买东西。','我有一张卡。']],[5,'昨天是谁的生日？','昨天是我的生日。',['昨天是星期五。','我们一家去买东西。']],[5,'妈妈给你买了什么？','妈妈给我买了蛋糕、面包、牛奶和水果。',['哥哥给我买了生日卡。','我喜欢唱歌。']],[5,'哥哥和姐姐给你买了什么？','他们给我买了一张生日卡。',['他们给我买了玩具。','妈妈给我买了面包。']],
 [6,'你会做什么事？','我会收拾小房间，还会洗衣和洗澡。',['我是一个小学生。','小猫饿了。']],[6,'小猫饿了，你会做什么？','我会喂小猫。',['我会洗澡。','我会唱歌。']],[6,'你是小学生吗？','是的，我是一个小学生。',['我会收拾房间。','我今年六岁。']]]
 .forEach(([b,q,a,w])=>add(b,{say:q,lang:'zh',q:`Bab ${b} · 回答问题 · Dengarkan pertanyaan: ${q} Jawaban yang tepat adalah …`,o:shuf([a,...w]),a,n:`${q} → <b>${a}</b>`}));
/* ---------- Bab 4 礼貌: situasi & 对话 ---------- */
[['Temanmu memberimu hadiah. Kamu berkata …','谢谢你！',['对不起！','没关系！']],['Temanmu berkata 谢谢！ Kamu menjawab …','不谢。',['对不起。','再见。']],['Kamu tidak sengaja menabrak teman. Kamu berkata …','对不起！',['谢谢！','你好！']],['Temanmu berkata 对不起！ Kamu menjawab …','没关系。',['不用谢。','谢谢你。']],['Pulang sekolah, kamu pamit kepada guru …','老师，再见！',['老师，对不起！','老师，没关系！']],['Tamu datang ke rumah. Kamu mempersilakan duduk …','请坐。',['再见。','没关系。']],['Bertemu teman di pagi hari, kamu menyapa …','你好！',['再见！','对不起！']],['A: 请坐。 B: …','谢谢。',['没关系。','再见。']],['Kamu ingin bertanya di mana kelas: 请问，教室在＿？','哪里',['谁','什么']],['Guru minta kami berbicara Mandarin: 请说＿＿！','中文',['再见','礼貌']],['大家要讲＿＿。 (Semua harus sopan.)','礼貌',['中文','朋友']]]
 .forEach(([q,a,w])=>add(4,{q:`Bab 4 · 礼貌 · ${q}`,o:shuf([a,...w]),a,n:`Jawaban: <b>${a}</b>`}));
/* ---------- Hafalan 孔融让梨 (urut, tidak diacak) ---------- */
const KL=[['有个四岁的小弟弟','yǒu ge sì suì de xiǎo dì di','Ada seorang adik kecil berusia empat tahun'],
 ['名叫孔融，聪明伶俐','míng jiào Kǒng Róng, cōng míng líng lì','Namanya Kong Rong, pintar dan cerdas'],
 ['妈妈买来许多的梨','mā ma mǎi lái xǔ duō de lí','Ibu membeli banyak pir'],
 ['说让孔融来分梨','shuō ràng Kǒng Róng lái fēn lí','Ibu meminta Kong Rong membagikan pir'],
 ['孔融看着盘中的梨','Kǒng Róng kàn zhe pán zhōng de lí','Kong Rong melihat pir di atas piring'],
 ['突然心中有了主意','tū rán xīn zhōng yǒu le zhǔ yì','Tiba-tiba ia punya sebuah ide'],
 ['哥哥弟弟吃大的梨','gē ge dì di chī dà de lí','Kakak dan adik-adik makan pir yang besar'],
 ['只把小梨留给自己','zhǐ bǎ xiǎo lí liú gěi zì jǐ','Ia hanya menyimpan pir kecil untuk dirinya sendiri']];
const KB=[['有个','四岁的','小弟弟'],['名叫','孔融，','聪明','伶俐'],['妈妈','买来','许多的','梨'],['说','让','孔融','来','分梨'],['孔融','看着','盘中的','梨'],['突然','心中','有了','主意'],['哥哥弟弟','吃','大的','梨'],['只把','小梨','留给','自己']];
const KF=[['有个四＿的小弟弟','岁',['睡','水']],['名叫孔融，聪明伶＿','俐',['利','里']],['妈妈买来许多的＿','梨',['里','李']],['说让孔融来＿梨','分',['份','公']],['孔融看着＿中的梨','盘',['盒','般']],['突然心中有了主＿','意',['以','音']],['哥哥弟弟吃＿的梨','大',['小','太']],['只把小梨留给自＿','己',['已','几']]];
const KT='孔融让梨 · ';
add('cerita',{poem:KL,q:KT+'Dengar, lalu ucapkan setiap baris',sub:'Semua 8 baris harus diucapkan dengan benar sebelum lanjut. Kalau sudah lancar, coba mode "Tutup huruf" atau "Hanya huruf pertama".'});
KL.forEach(([z,p,m],i)=>{
 add('cerita',{build:KB[i],say:z,q:`${KT}Baris ${i+1} · Susun baris hafalan`,sub:`${m} — ${p}`,n:`<b>${z}</b><br>${p}`});
 add('cerita',{read:KL.map((x,k)=>k===i?'<b>'+KF[i][0]+'</b>':x[0]).join('<br>'),q:`${KT}Baris ${i+1} · Huruf yang hilang: ${KF[i][0]}`,o:shuf([KF[i][1],...KF[i][2]]),a:KF[i][1],fz:z,n:`<b>${z}</b> (${p})`});
 add('cerita',{speak:z,slang:'zh',py:p,q:`${KT}Baris ${i+1} · Ucapkan baris ini`,sub:m,n:`Baris ${i+1}: ${z}`});
});
KL.slice(0,-1).forEach(([z],i)=>add('cerita',{q:`${KT}背一背 · Baris sesudah 「${z}」 adalah …`,o:opt(KL[i+1][0],KL.map(x=>x[0]).filter(x=>x!==z)),a:KL[i+1][0],say:z,lang:'zh',n:`${z} → <b>${KL[i+1][0]}</b>`}));
add('cerita',{q:KT+'背一背 · Baris pertama hafalan adalah …',o:opt(KL[0][0],KL.map(x=>x[0])),a:KL[0][0],n:`<b>${KL[0][0]}</b>`});
add('cerita',{q:KT+'背一背 · Baris terakhir hafalan adalah …',o:opt(KL[7][0],KL.map(x=>x[0])),a:KL[7][0],n:`<b>${KL[7][0]}</b>`});
add('cerita',{speak:KL.map(x=>x[0]).join('，')+'。',slang:'zh',q:KT+'Tantangan · Ucapkan seluruh hafalan tanpa melihat buku',sub:'Boleh dengar dulu sekali, lalu ucapkan semuanya.',n:'Hebat! Hafalan 孔融让梨 selesai.'});
const KR=KL.map(x=>x[0]).join('，')+'。';
[['孔融几岁？','四岁',['六岁','七岁']],['妈妈买来了什么？','梨 (pir)',['面包','蛋糕']],['孔融给哥哥弟弟吃什么梨？','大的梨',['小的梨','没有梨']],['孔融留给自己什么梨？','小梨',['大梨','两个梨']],['Apa pelajaran dari cerita ini?','Mengalah dan memberi yang terbaik untuk orang lain',['Selalu ambil yang paling besar','Tidak usah berbagi']]]
 .forEach(([q,a,w])=>add('cerita',{read:KR,q:`${KT}Pahami isi · ${q}`,o:shuf([a,...w]),a,n:'孔融 menghormati yang lebih tua, peduli pada orang lain, dan memilih yang paling kecil untuk dirinya. 我们要学习孔融的谦让和孝心！'}));
add('cerita',{q:KT+'友爱孝悌，谦虚礼让 artinya …',o:shuf(['Saling menyayangi dan berbakti, rendah hati dan sopan berbagi','Rajin belajar dan menulis huruf','Membeli banyak buah pir']),a:'Saling menyayangi dan berbakti, rendah hati dan sopan berbagi',say:'友爱孝悌，谦虚礼让',lang:'zh',fz:'友爱孝悌，谦虚礼让',n:'<b>友爱孝悌，谦虚礼让</b> yǒu ài xiào tì, qiān xū lǐ ràng.'});
/* peta pinyin untuk tombol Pinyin */
const PYM=window.PYM={};V.forEach(([z,p])=>PYM[z]=p);Object.values(ST).forEach(L=>L.forEach(([z,p])=>{if(!PYM[z])PYM[z]=p}));
Object.assign(PYM,{'星期一':'xīngqīyī','星期二':'xīngqīèr','星期三':'xīngqīsān','星期四':'xīngqīsì','星期五':'xīngqīwǔ','星期六':'xīngqīliù','星期天':'xīngqītiān',
 '五张卡':'wǔ zhāng kǎ','七岁了':'qī suì le','给老师':'gěi lǎoshī','新玩具':'xīn wánjù','我们一家':'wǒmen yìjiā','谁的生日':'shéi de shēngrì','昨天下午':'zuótiān xiàwǔ',
 '真饿':'zhēn è','还没来':'hái méi lái','别去了':'bié qù le','不会洗衣':'bú huì xǐ yī','收起来':'shōu qǐlai',
 '猫':'māo','人':'rén','心':'xīn','后天星期四。':'hòutiān xīngqīsì.','后天星期天。':'hòutiān xīngqītiān.','昨天星期二。':'zuótiān xīngqīèr.','明天星期二。':'míngtiān xīngqīèr.',
 '下午':'xiàwǔ','明天':'míngtiān','谢谢你！':'xièxie nǐ!','不谢。':'bú xiè.','对不起！':'duìbuqǐ!','没关系。':'méi guānxi.','老师，再见！':'lǎoshī, zàijiàn!','请坐。':'qǐng zuò.','你好！':'nǐ hǎo!','谢谢。':'xièxie.','哪里':'nǎlǐ','中文':'Zhōngwén','礼貌':'lǐmào',
 '四岁':'sì suì','大的梨':'dà de lí','小梨':'xiǎo lí','友爱孝悌，谦虚礼让':'yǒu ài xiào tì, qiān xū lǐ ràng'});
KL.forEach(([z,p])=>PYM[z]=p);
M.forEach(q=>{if(q.zh&&!q.nopy&&PYM[q.zh])q.zpy=PYM[q.zh]});
/* latihan menulis dari Panduan Menulis */
false&&(window.WLIST||[]).forEach(([b,c,p,mm,w,n])=>add('w'+b,{write:c,wpy:p,wm:mm,ww:w,wn:n,fz:c,q:`Bab ${b} · 写字 · Tulis huruf ${c}`}));
QS.mand=M;
SUBJ.mand.sub='ASAS Bab 1–6 · dari bahan sekolah';
SUBJ.mand.babs=[1,2,3,4,5,6,'cerita'];SUBJ.mand.bonus=['cerita'];SUBJ.mand.blbl={cerita:'Hafalan 孔融让梨',w1:'Menulis Bab 1',w2:'Menulis Bab 2',w3:'Menulis Bab 3',w4:'Menulis Bab 4',w5:'Menulis Bab 5',w6:'Menulis Bab 6'};
})();

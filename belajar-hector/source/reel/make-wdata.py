import json,sys,os
src=sys.argv[1];out=sys.argv[2]
W=[(1,'在','zài','di','在家'),(1,'教','jiāo','mengajar','教汉语'),(1,'汉','hàn','Han (Tionghoa)','汉字'),(1,'语','yǔ','bahasa','汉语'),(1,'写','xiě','menulis','写字'),(1,'字','zì','huruf','汉字'),(1,'读','dú','membaca','读书'),(1,'画','huà','menggambar','画画儿'),
(2,'室','shì','ruangan','教室'),(2,'里','lǐ','di dalam','教室里'),(2,'书','shū','buku','读书'),(2,'吗','ma','apakah','你好吗'),(2,'不','bù','tidak','不是'),(2,'那','nà','itu','那是'),(2,'她','tā','dia (perempuan)','她的'),(2,'本','běn','satuan buku','本子'),(2,'子','zǐ','imbuhan','本子'),(2,'笔','bǐ','pensil','铅笔'),(2,'讲','jiǎng','berbicara','讲中文'),
(3,'歌','gē','lagu','儿歌'),(3,'喜','xǐ','suka','喜欢'),(3,'欢','huān','senang','喜欢'),(3,'问','wèn','bertanya','问老师'),(3,'谁','shéi','siapa','他是谁'),(3,'听','tīng','mendengar','听写'),(3,'心','xīn','hati','开心'),(3,'告','gào','memberi tahu','告诉'),(3,'诉','sù','memberi tahu','告诉'),(3,'朋','péng','teman','朋友'),(3,'友','yǒu','teman','朋友'),(3,'午','wǔ','siang','下午'),(3,'放','fàng','melepas','放学'),(3,'今','jīn','sekarang','今天'),(3,'星','xīng','bintang','星期'),(3,'期','qī','periode','星期'),
(4,'再','zài','lagi','再见'),(4,'孩','hái','anak','孩子'),(4,'对','duì','betul','对不起'),(4,'起','qǐ','bangun','对不起'),(4,'没','méi','tidak','没关系'),(4,'关','guān','menutup','没关系'),(4,'系','xì','berkaitan','没关系'),(4,'用','yòng','memakai','用语'),(4,'记','jì','ingat; mencatat','记下来'),(4,'请','qǐng','silakan','请坐'),(4,'谢','xiè','terima kasih','谢谢'),(4,'做','zuò','menjadi; melakukan','做朋友'),
(5,'张','zhāng','lembar','一张卡'),(5,'卡','kǎ','kartu','生日卡'),(5,'唱','chàng','bernyanyi','唱歌'),(5,'买','mǎi','membeli','买东西'),(5,'岁','suì','umur','六岁'),(5,'昨','zuó','kemarin','昨天'),(5,'给','gěi','memberi; untuk','给我'),(5,'蛋','dàn','telur','蛋糕'),(5,'糕','gāo','kue','蛋糕'),(5,'包','bāo','bungkus','面包'),(5,'果','guǒ','buah','水果'),(5,'玩','wán','main','玩具'),(5,'具','jù','alat','玩具'),(5,'哥','gē','kakak laki-laki','哥哥'),(5,'姐','jiě','kakak perempuan','姐姐'),
(6,'会','huì','bisa','我会'),(6,'事','shì','pekerjaan; hal','做事'),(6,'可','kě','boleh','可是'),(6,'别','bié','jangan','别说'),(6,'收','shōu','menerima','收拾'),(6,'拾','shí','merapikan','收拾'),(6,'房','fáng','ruangan; rumah','房间'),(6,'间','jiān','ruangan','房间'),(6,'还','hái','masih','还会'),(6,'洗','xǐ','mencuci','洗衣'),(6,'澡','zǎo','mandi','洗澡'),(6,'饿','è','lapar','饿了')]
D={};L=[]
for b,c,p,m,w in W:
    j=json.load(open(os.path.join(src,c+'.json'),encoding='utf-8'))
    D[c]={'strokes':j['strokes'],'medians':j['medians']}
    if 'radStrokes' in j: D[c]['radStrokes']=j['radStrokes']
    L.append([b,c,p,m,w,len(j['strokes'])])
open(out,'w',encoding='utf-8').write('window.WDATA='+json.dumps(D,ensure_ascii=False,separators=(',',':'))+';\nwindow.WLIST='+json.dumps(L,ensure_ascii=False,separators=(',',':'))+';\n')
print(len(L),os.path.getsize(out))
for x in L: print(x[1],x[5],end='  ')

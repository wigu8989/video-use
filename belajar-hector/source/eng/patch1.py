s=open('src.html').read()
def R(a,b,n=1):
    global s
    c=s.count(a)
    assert c==n,(c,a[:80])
    s=s.replace(a,b)
# bilingual instructions
R("ins:q.sentence?'Dengarkan kalimatnya, lalu pilih gambar yang cocok.':'Dengarkan katanya, lalu pilih gambar yang benar.'",
  "ins:q.sentence?['Listen to the sentence. Which animal do you hear?','Dengarkan kalimatnya. Hewan apa yang kamu dengar?']:['Listen and choose the right word.','Dengarkan, lalu pilih kata yang benar.'],ansEN:q.sentence?q.say:ans")
R("ins:q.ask||'Gambar apa ini? Pilih kata yang benar.'","ansEN:ans,ins:q.ask||['What is this? Choose the right word.','Gambar apa ini? Pilih kata yang benar.']")
R("ask:'Ada berapa apel? Pilih kata yang benar.'","ask:['How many apples? Choose the right word.','Ada berapa apel? Pilih kata yang benar.']")
R("ins:'Seret setiap kata ke gambar yang cocok.'","ansEN:q.pairs.join(' · '),ins:['Drag each word to the right picture.','Seret setiap kata ke gambar yang cocok.']")
R("ins:'Susun huruf menjadi nama gambar ini.'","ansEN:q.word,ins:['Spell the word. Drag the letters.','Eja katanya. Seret huruf menjadi nama gambar ini.']")
R("ins:'Susun kata menjadi kalimat yang benar.'","ansEN:s,ins:['Make a sentence. Drag the words in order.','Susun kata menjadi kalimat yang benar.']")
R("ins:'Baca kalimatnya. Seret cat ke gambar agar warnanya benar.'","ansEN:'red apple · yellow banana · green frog',ins:['Read and listen. Drag the paint to color the pictures.','Baca dan dengarkan. Seret cat ke gambar agar warnanya benar.']")
R("ins:'Dengarkan perintahnya, lalu seret ikan ke kolam.'","ansEN:'five fish',ins:['Listen and do it. Drag the fish into the pond.','Dengarkan perintahnya, lalu seret ikan ke kolam.']")
R("ins:'Dengarkan, lalu masukkan buah yang disebut ke keranjang.'","ansEN:'apples and bananas',ins:['Listen. Put the fruit you hear in the basket.','Dengarkan, lalu masukkan buah yang disebut ke keranjang.']")
R("ins:'Baca dan dengarkan. Seret benda ke tempat yang benar.'","ansEN:'in the bag · on the chair · under the chair',ins:['Read and listen. Drag each thing to the right place.','Baca dan dengarkan. Seret benda ke tempat yang benar.']")
# bubble rendering
R("<div class=\"bub\">${q.ins}${q.sub?`<span class=\"sm\">${q.sub}</span>`:''}</div>",
  "<div class=\"bub\"><span class=\"en\">${q.ins[0]}</span><span class=\"sm\">${q.ins[1]}</span>${q.sub?`<span class=\"sm tr\">${q.sub}</span>`:''}</div>")
# listen: English word options
R("""<div id="ws" class="word-shown" ${V.shown?'':'hidden'}>${q.say}</div><div style="text-align:center"><button class="reveal" id="rv" ${V.shown?'hidden':''}>Tampilkan tulisan</button></div>
     <div class="opts four" style="margin-top:12px">${q.opts.map(k=>`<button class="opt" data-pick="${k}" aria-label="Pilihan gambar ${W[k].id}">${pic(k,88)}</button>`).join('')}</div>`;
    document.getElementById('rv').onclick=e=>{e.currentTarget.hidden=true;document.getElementById('ws').hidden=false};""",
  """${HAS_TTS?'':`<div class="word-shown">${q.say}</div>`}
     <div class="opts four" style="margin-top:12px">${q.opts.map(k=>`<button class="opt w" data-pick="${k}">${k}</button>`).join('')}</div>`;""")
R("${spkBtn(q.say)}${spkBtn(q.say,'Pelan','slow').replace(SPK,TURTLE)}","${spkBtn(q.say,'Listen')}${spkBtn(q.say,'Slow','slow').replace(SPK,TURTLE)}")
R("spkBtn('Put five fish in the pond.')","spkBtn('Put five fish in the pond.','Listen')")
R("spkBtn('I like apples and bananas. Put them in the basket.')","spkBtn('I like apples and bananas. Put them in the basket.','Listen')")
R("Di kolam: ${n} ikan","In the pond: ${n} fish")
R("`Baru ${n} ikan. Tambah lagi!`:`Ada ${n} ikan. Terlalu banyak!`","`Baru ${n} ikan. Tambah lagi! (More fish!)`:`Ada ${n} ikan. Terlalu banyak! (Too many!)`")
R("tray:'Huruf'","tray:'letters'");R("tray:'Kata'","tray:'words'");R("tray:'Cat'","tray:'paint'");R("tray:'Ikan'","tray:'fish'");R("tray:'Buah'","tray:'fruit'");R("tray:'Benda'","tray:'things'")
R("<span class=\"hint\">Semua sudah dipasang</span>","<span class=\"hint\">All done! · Semua sudah dipasang</span>")
R("<button class=\"btn alt\" id=\"rs\">Ulang</button><button class=\"btn\" id=\"ck\" ${ready?'':'disabled'}>Periksa</button>","<button class=\"btn alt\" id=\"rs\">Reset</button><button class=\"btn\" id=\"ck\" ${ready?'':'disabled'}>Check ✓</button>")
R("'Belum tepat. Dengarkan sekali lagi, lalu coba lagi!':'Belum tepat. Coba lagi!'","'Try again! · Dengarkan sekali lagi, lalu coba lagi.':'Try again! · Belum tepat, coba lagi.'")
R("r.hint||'Ada yang belum tepat (warna merah). Coba lagi!'","r.hint||'Try again! · Yang merah belum tepat.'")
# feedback
R("const praise=['Hebat!','Pintar!','Keren!','Mantap!','Bagus sekali!','Luar biasa!'][V.qi%6];","const praise=[['Great job!','Hebat!'],['Awesome!','Keren!'],['Super!','Pintar!'],['Well done!','Bagus sekali!'],['Excellent!','Luar biasa!'],['Amazing!','Mantap!']][V.qi%6];")
R("""<h3>${ok?(first?praise:'Akhirnya benar!'):'Yuk, lihat jawabannya'}</h3>
    <p>${q.exp}</p>""","""<h3>${ok?(first?praise[0]:'You did it!'):'Look at the answer'}</h3><span class="sm">${ok?(first?praise[1]:'Akhirnya benar!'):'Yuk, lihat jawabannya.'}</span>
    <p class="ansl">Answer: <span class="en">${q.ansEN||q.answerSay}</span></p><p class="note">${q.exp}</p>""")
R("${spkBtn(q.answerSay,'Dengar jawaban','slow')}<button class=\"btn\" id=\"nx\">${V.qi<V.Q.length-1?'Lanjut ›':'Lihat hadiah ›'}</button>",
  "${spkBtn(q.answerSay,'Listen','slow')}<button class=\"btn\" id=\"nx\">${V.qi<V.Q.length-1?'Next ›':'Treasure ›'}</button>")
open('src.html','w').write(s)

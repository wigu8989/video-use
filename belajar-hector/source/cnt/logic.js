  if(q.t==='count'){const z=q.zone,T=[...Array(q.total)].map((_,i)=>({id:'f'+i,type:q.item,cls:'pic',html:pic(q.item,54)}));const inZ=P=>Object.keys(P).filter(k=>P[k]===z);
    return {...q,dnd:true,T,slots:[z],cap:{[z]:99},
      onPlace:(P)=>{const n=inZ(P).length;if(n>0&&n<=10)say(NUMW[n-1],.9)},
      top:`<div class="listen">${spkBtn(q.say,'Listen')}<span class="en" style="font-size:20px">${q.sayHTML}</span></div>`,
      L:(S,P)=>`<div class="counter" style="width:100%">${q.counter}: ${inZ(P).length}</div>${S(z,z,'',99)}`,
      ready:P=>inZ(P).length>0,
      chk:P=>{const ids=inZ(P),n=ids.length,m={};ids.forEach((id,i)=>m[id]=i<q.n);return {ok:n===q.n,m,hint:n<q.n?`More! · Baru ${n}. Tambah lagi.`:`Too many! · Ada ${n}. Terlalu banyak.`}},
      solve:()=>{const P={};for(let i=0;i<q.n;i++)P['f'+i]=z;return P},exp:q.note}}
  if(q.t==='collect'){const z=q.zone,T=q.items.map(([id,k])=>({id,type:k,cls:'pic',html:pic(k,54)}));
    return {...q,dnd:true,T,slots:[z],cap:{[z]:99},
      top:`<div class="listen">${spkBtn(q.say,'Listen')}<span class="en" style="font-size:19px">${q.sayHTML}</span></div>`,
      L:(S)=>S(z,z,'',99),ready:P=>Object.values(P).some(s=>s===z),
      chk:P=>{const m={},cnt={};let ok=true;T.forEach(t=>{if(P[t.id]!==z)return;cnt[t.type]=(cnt[t.type]||0)+1;m[t.id]=cnt[t.type]<=(q.want[t.type]||0)});
        Object.entries(q.want).forEach(([k,n])=>{if((cnt[k]||0)!==n)ok=false});if(Object.values(m).includes(false))ok=false;
        const extra=Object.values(m).includes(false),miss=Object.entries(q.want).some(([k,n])=>(cnt[k]||0)<n);
        return {ok,m,hint:extra?'Too many! · Ada benda yang tidak disebut atau kebanyakan.':miss?'More! · Masih ada yang kurang.':''}},
      solve:()=>{const P={},c={};T.forEach(t=>{const w=q.want[t.type]||0;c[t.type]=(c[t.type]||0);if(c[t.type]<w){P[t.id]=z;c[t.type]++}});return P},exp:q.note}}
  if(q.t==='sort'){const T=q.items.map(([id,k])=>({id,type:k,cls:'pic lab',html:pic(k,46)+`<span>${k}</span>`}));const ans=Object.fromEntries(q.items.map(([id,k,b])=>[id,'bin_'+b]));
    return {...q,dnd:true,T,ans,slots:q.bins.map(b=>'bin_'+b.id),cap:Object.fromEntries(q.bins.map(b=>['bin_'+b.id,99])),
      ins:q.ins||['Sort them. Can we count it?','Pilah benda: bisa dihitung atau tidak?'],
      ready:P=>Object.keys(P).length===T.length,
      L:(S)=>q.bins.map(b=>`<div class="bin"><div class="binh"><b>${b.label}</b><small>${b.sub}</small></div>${S('bin_'+b.id,'binz','',99)}</div>`).join(''),
      exp:q.note,tray:'things'}}
}
function build(q,isl,qi){const r=build0(q,isl,qi);if(q.note)r.exp=q.note;if(q.ins)r.ins=q.ins;if(q.ansEN)r.ansEN=q.ansEN;if(q.answerSay)r.answerSay=q.answerSay;if(q.tray)r.tray=q.tray;return r}

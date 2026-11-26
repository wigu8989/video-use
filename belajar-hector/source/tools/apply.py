import sys
src,spec=sys.argv[1],sys.argv[2]
lines=open(src,encoding='utf-8').read().split('\n')
blocks=open(spec,encoding='utf-8').read().split('=====DONE')
for b in blocks:
    b=b.strip('\n')
    if not b.strip(): continue
    bl=b.split('\n')
    start=bl[0][len('=====START '):]; end=bl[1][len('=====END '):]; body=bl[2:]
    idx=[k for k,l in enumerate(lines) if start in l]
    if len(idx)!=1: sys.exit(f'start marker {start!r} found {len(idx)} times')
    i=idx[0]; j=next(k for k in range(i,len(lines)) if end in lines[k])
    lines[i:j+1]=body
    print('replaced',repr(start[:30]),i+1,'-',j+1)
open(src,'w',encoding='utf-8').write('\n'.join(lines))

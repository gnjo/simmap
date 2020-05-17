# simmap
simulation


demo
https://codepen.io/gnjo/pen/gOaBBQq?editors=1010
```
//simmap(x,y,whitelist,data,mask,di)
let fn={}
fn.q=(s,doc=document)=>{return doc.querySelector(s)}
fn.str2map=(str)=>{return str.trim().split('\n').map(d=>d.split(''))}
fn.map2str=(map)=>{return map.map(d=>d.join('')).join('\n')}
fn.clone=fn.deep=d=>JSON.parse(JSON.stringify(d));

let data=fn.str2map(`
■■■■■■■■■■
■　　　　　　　　■
■　　　　　　　　■
■■■■■　■■　■
■　　　＠　　■　■
■　　　　　　■　■
■　■■■■■■　■
■　■　　■　　　■
■　■■　■　　　■
■　　　　　　　　■
■■■■■■■■■■
`)
let whitelist='　＠'.split('')
let mask=simmap(4,4,whitelist,data)
console.log(mask)
//
```

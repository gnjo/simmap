/*usage
let fn={}
fn.q=(s,doc=document)=>{return doc.querySelector(s)}
fn.str2map=(str)=>{return str.trim().split('\n').map(d=>d.split(''))}
fn.map2str=(map)=>{return map.map(d=>d.join('')).join('\n')}
fn.clone=fn.deep=d=>JSON.parse(JSON.stringify(d)); 

let str=`
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
`
;
fn.pad=(num)=>{return('__'+num).slice(-2)}
let maps=fn.str2map(str)
let whitelist='　＠'.split('')
let mask=simmap(4,4,9,whitelist,maps)
fn.q('pre').textContent=str
let wk=fn.str2map(str)
mask.map(d=>{ wk[d[1]][d[0]]=fn.pad(d[2]) })
fn.q('pre.ret2').textContent=fn.map2str(wk)
*/

function simmap(x,y,mv,list,data,mask,di){
// de.x++;
 ;
 if(!mask) mask={},mv=mv+1
 if((y < 0 || x < 0|| y > data.length-1 || x > data[0].length-1))return;//out of range
 ;
 let key=x+'_'+y,oldmv=(mask[key])?mask[key][2]:0 
 ,down=(list.filter(d=>d===data[y][x]).pop() === void 0)?99:1 //ウェイト
 if(mv-down<0)return;// 歩数がマイナスで思考中断 
 if(oldmv>mv)return;//以前より歩数がかかる場合は思考中断　百分の一程度削減
 ;
 mask[key]=[x,y,mv];// マーク
 ;
 //元の進行方向には探索をかけない。//１が上、２が右、３が下、４が左
 if(di!=3)simmap(x,y-1,mv-down,list,data,mask,1);
 if(di!=4)simmap(x+1,y,mv-down,list,data,mask,2);
 if(di!=1)simmap(x,y+1,mv-down,list,data,mask,3);
 if(di!=2)simmap(x-1,y,mv-down,list,data,mask,4);
 ;
 return Object.keys(mask).map(key=>mask[key]);
}

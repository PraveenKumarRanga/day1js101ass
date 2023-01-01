// let b="";
// let a="masai";
// for (let i=0; i<a.length; i++){
//   b+=a[i]+" ";
  
// }
// console.log(b);

let a="masai";
let b="";

for(let i=0; i<a.length; i++){
  if (i==0){
    b+="a";
  }
  else{
    b+=a[i];
  }
}
console.log(b);
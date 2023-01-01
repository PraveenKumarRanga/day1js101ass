let a="google";
let b="";

for (let i=(a.length/2)-1; i>=0; i--){
  b+=a[i];
}
for(let i=(a.length-1); i>=(a.length/2); i--){
  b+=a[i];
}
console.log(b);

//  try for odd string

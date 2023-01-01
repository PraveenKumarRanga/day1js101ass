let a="hello moto he";
let space=0;

for(let i=0; i<a.length; i++){
  if (a[i]==" "){
    space++;
  }
}
console.log("word", space+1);

let arr=["hello", "my","dear","amor"];
let sum=0;
for(let i=0; i<arr.length; i++){
    sum+= arr[i].length;
}
console.log(sum);

let x=["neel","nitin","nittu","amor","hello"];
let count=0;
for(let i=0; i<x.length; i++){
  if (x[i][0]== "n"){
    count++;
  }
}
console.log(count);
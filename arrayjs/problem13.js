// let a=["George", "Marry","Oalar","Celin"];
// let count=0;
// for (let i=0; i<=a.length-1; i++){
//   let str =a[i];
//   if (str[0]!="A" || str[0]!="E"||str[0]!="I"|| str[0]!="O"||str[0]!="U"){
//     count++;
//   }
// }
// console.log(count);

// let size =5;
// let arr =[];
// for (let i=1; i<size; i++){
//   arr.push(i+3);
// }
// console.log(arr[arr.length-1]);

// let str="i m I M";
// let sum=0;
// let count=0;

// for (let i=0; i<=str.length-1; i++){
//   if (str[i]==" "){
//     count++;
//     count=count * count;
//     sum+=count;
    
//   }
// }
// console.log(sum);

let a=[12,14,15,23,36,46];
for (let i=0; i<=a.length; i++){
  if ((a[i]%2==0 || a[i]%3==0) && a[i]<=40){
    console.log(a[i]);
  }
}
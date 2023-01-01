let char="e";
let x=["a","b","c","d","e"];
let y=["A","B","C","D","E"];
for(let i=0; i<x.length; i++){
  if (char==x[i]){
    char=y[i];
  }
}
console.log(char);
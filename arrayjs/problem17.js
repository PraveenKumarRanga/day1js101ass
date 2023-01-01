let a=["aaa","aaa","aaa"];
let count=false;
for(let i=0; i<a.length; i++){
  if (a[i]==a[i+1]){
    count=true;
    break;
   
  }
 
  }
 if (count){
      console.log("same");
    }
  else {
    console.log("no")
  }

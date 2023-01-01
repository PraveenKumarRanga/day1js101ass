let a="go%.a$.";
let b="";
for(let i=0; i<a.length; i++){
  if (a[i]=="%"){
    
    b+="h";
  }
  else if(a[i]=="$"){
   
     b+="n";
  }
  else if (a[i]=="."){
    b+="";
  }
  else{
    b+=a[i];
  }
    
  
}
console.log(b);
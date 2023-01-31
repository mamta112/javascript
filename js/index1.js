/*var sum=function(x,y){
    return x+y;
}

var a=sum(2,3);
console.log(a);*/
/*
{
   console.log("block 1");
   let a=1;
   {
    console.log("block 2");
    let a=2;
    console.log(a);
  }
   console.log(a);
}*/

function superr()
{
function xyz(){
   var x=5, y=0;
   function zyx(){
    console.log(x);
   }
   return zyx;
}
 return xyz;
}
var a=superr()();
a();
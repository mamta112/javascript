/*console.log("start");

setTimeout(function cb(){
     console.log("callback function");
},0);
console.log("end");*/

console.log("start");

setTimeout(function cb(){
     console.log("callback function");
},5000);

let startTime=new Date().getTime();
let endTime=startTime;

while(endTime < startTime+10000){
    endTime=new Date().getTime();
}
console.log("while ended");
console.log("end");
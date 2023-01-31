   /*function x(){
    for(var i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }

    console.log("hello javascript");
}
x();
      o/p hello javascript
      6 6 6 6 6


 using let keyword        
function x(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){ 
            console.log(i);                      explained in index1.js file
        },i*1000);
    }

    console.log("hello javascript");
}
x();
*/
//using var only

function x(){
    for(var i=1;i<=5;i++){
        function close(x){
            setTimeout(function(){
                console.log(x);
            },x*1000);
        }
        close(i);
    }
    console.log("hello javascript");
}

x();
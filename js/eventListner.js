function counter(){
let add=0;
document.getElementById("clickMe").addEventListener("click",function(){
     
    console.log("button clicked",++add);
});
}

counter();
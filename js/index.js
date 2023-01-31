"use strict";
/* 
  the directive looks like a string: "use strict" or 'use strict'
   When it is located at the top of a script, the whole script works the “modern” way.


var a=10;
let b=5;
{
    console.log(a);
    console.log(b); Cannot access 'b' before initialization
    var a=100;
    let b=45;
    console.log(a);
    console.log(b);
}
console.log(a);


 
console.log(b);*/

function x() {
    var a=10;
    function y(){
        console.log(a);
    }
   // in this not only function is return but whole closure(funct+lexical environment) is returned
    return y;                              
}

var z=x();
console.log(z);      
z();      
/*how come that by calling funct. z it gives output 10 even when execution context of x is removed 
  from memory ?  Ans:- while returning funct. y it not only return function but also reference to
  its parent lexical environment i.e. the refference to function x.
  (which is called tight scope chaining) that's how when function z(which directly means contain y()) 
   is called it search for 'a' in its own scope if not found then find it in function x   
*/





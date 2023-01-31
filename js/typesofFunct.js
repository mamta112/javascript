//1.) function statement or function declaration
//a();          a is initialize with its function body
//b();          gives an error b is not a function right now it is a variable with undefined value
function a() {
    console.log("called a");
}
//2.) function expression
var b = function () {
    console.log("b called");
}
a(); b();
// 1.a) major difference btw funct. statement and funct. expression is hoisting 
// 1.b) execution hits the line 8 then only b will be initialized with function 

/* 3.) anonymous function (a function without name and it is used when we want to use funct. as a value)
            function(){

            }
          so always assign this function as a value to some variable otherwise it will give an error
          (give some name to function)
*/

//4.) Named function expression
var c = function xyz() {
    console.log("xyz function");
    // console.log(xyz); stores whole function body
}
c(); //correct way 
// xyz(); wrong way gives error coz xyz has a local scope not global scope


/* 5.)difference btw parameter and argument
    function x(par1,par2,...){ //parameters

    }
    x(arg1,arg2,....) arguments
*/

/* 6.) first class function or first class citizen - ability to be used as value means ability to pass funct.
 as argument and return a whole funct. from another funct.*/



//7.) arrow function




// Block 1 ------------
var x = 10;
console.log(x);
if (true) {
    var x = 20;
    console.log(x);
}
console.log(x);
// 10
// 20
// 20

console.log("------------2");
// Block 2 ------------
var x = 10;
console.log(x);
if (true) {
    (function () {
        var x = 20;
        console.log(x);
    })();
}
console.log(x);
// 10
// 20
// 20 (x) --- 10 (v) x inside the function and outside the function are two different variables

console.log("------------3");
// Block 3 -----------
var x = 10;
console.log(x);
function test() {
    var x = 20;
    console.log(x);
    if (x > 10) {
        let x = 30;
        console.log(x);
    }
    console.log(x);
}
test();
console.log(x);
// 10
// 20
// 30
// 30 (x) --- 20 (v) this x is declared with let so it is scoped to the block only (if block)
/* 30 (x) --- 10 (v) variable x inside the function declared with var
 is different than the one declared in the if block 
 also different than the one declared outside the function and it is scoped only insole the function */

console.log("------------4");
// Block 4 -----------
// var x;
// x = 10;
// function test() {
//     var x;
//     if (x > 20) {
//         x = 50;
//     }
//     console.log(x);
// }
// test();
// undefined

console.log("------------5");
// Block 5 ------------
// function test() {
//     var x, y;
//     if (false) {
//         x = 50;
//     }
//     console.log(x);
//     console.log(y);
//     y = 100;
//     console.log(y);
// }
// test();
// undefined
// undefined
// 100

console.log("------------6");
// Block 6 ------------
// function test() {
//     foo();
//     bar();
//     // Function defined
//     // using function declaration
//     function foo() {
//         console.log('foo');
//     }
//     // Function defined
//     // using function expression
//     var bar = function () {
//         console.log('bar');
//     }
// }
// test();

/* foo --- is a function declaration with type one hoisting which allows 
    access, using and referencing before declaration line, */

/* bar (x) --- bar is not a function (v) ---> because it is a function expression 
which is not hoisted with type one (allows to use before declaration line) 
but the variable declared with var is hoisted with type 2 which allows referencing the variable 
before the line it is declared in with initial value of undefined always */

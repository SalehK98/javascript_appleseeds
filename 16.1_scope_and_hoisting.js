// block 1 ----------
function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
        return 2;
    }
}
funcA();
/* undefined (v) var is hoisted with initial value of undefined (type 2 hoisting)
which allows access before declaration line*/

/* 2 (v) because functions declarations are hoisted with type 1 hoisting 
which allows access before deceleration line */

console.log("----------- 2");
// block 2 -----------
var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return fullName;
        }
    }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());
// Aurelio De Rosa
// Aurelio De Rosa (x) ----- undefined (v) ??


console.log("----------- 3");
// block 3 -----------
function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);
/* error : a is not defined (x) --- undefined  (v) => because it is declared with let in function scope,
so it is not accessible outside the function in the log statement we ask the type of a variable a,
so it is declared as a new variable with initial value of undefined and type of undefined is undefined*/

/* error : b is not defined (x) --- number (v) variable b is declared as global variable because it was 
declared without any keyword (let, var, const) let only applies to variable a, since it is a global
variable it can be accessed from any where in the global scope*/


console.log("----------- 4");
// block 4 -----------
function funcC() {
    console.log("1");
}
funcC();
function funcC() {
    console.log("2");
}
funcC();
/* 1 (x) --- 2 (v) because function declarations are hoisted (type 1 - value hoisting) 
    so the second declaration is overwriting the first function declaration (before the call line) 
    and it logs 2 both times the function is called  */

// 2 (v) 


console.log("----------- 5");
// block 5 -----------
function funcD1() {
    d = 1;
}
funcD1();
console.log(d);
function funcD2() {
    var e = 1;
}
funcD2();
console.log(e)
/*error : d is not defined (x) ---- 1 (v) because it is declared as a global variable 
without any keywords (let, var, const)*/

/* undefined (x) --- error e is not defined (v) because e is only scoped to funcD1() (the function scope),
so e in the log statement is creating a new variable e with initial value undefined*/


console.log("----------- 6");
// block 6 -----------
function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
/* Value of f in local scope: undefined (v) --- log statement outside the function -> 
    type 2 hoisting for declaring with var, so initial value of undefined is assigned to the variable */

/*Value of f in local scope: 1 (v) --- log statement inside the function, 
 function call after declaration line for variable f */

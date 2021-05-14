"use strict";
// functions : 
// A function declaration tells the compiler about a function's name, return type, and parameters.
// A function definition provides the actual body of the function.
// explicit definition 
var greet;
greet = function () {
    console.log("Hiyaa!");
};
// greet = 'true' ; //error
// passing parameters
var add = function (a, b) {
    console.log(a + b); // Return type void, since the () isn't returning anything.
};
add(5, 10);
// Passing Optional Parameters : 2 ways 
// Way-1 : using "?:"
var addNew = function (a, b, c) {
    console.log(a + b); // Return type void, since the () isn't returning anything.
    console.log(c); //undefined when optional value not passed during () call.
};
addNew(5, 10);
// Way-2 : Passing default value 
var addNewTest = function (a, b, c) {
    if (c === void 0) { c = 100; }
    console.log(a + b); // Return type void, since the () isn't returning anything.
    console.log(c); //c = 500, as the value is over-written during () call.
};
addNewTest(5, 10, 500);
// A parameter cannot be declared optional and default at the same time. Try & see error!!! 
// Return types  : Typescript infers the type from the return statement.
var minus = function (a, b, c) {
    if (c === void 0) { c = 100; }
    return (a - b);
};
minus(10, 3); //returns number
// Explicitly defining return type :
var minusNew = function (a, b, c) {
    if (c === void 0) { c = 100; }
    return (a - b);
};
// minus(10,'heyy'); //error.
minusNew(1, 0.2);
// Rest Parameters : Rest parameters don’t restrict the number of values that you can pass to a function.
//  However, the values passed must all be of the same type.
// To declare a rest parameter, the parameter name is prefixed with three periods.
//  Any nonrest parameter should come before the rest parameter.
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("Sum of numbers : " + sum);
}
addNumbers(10, 20);
addNumbers(10, 20, 45, 67);
// Default Parameters
// Function parameters can also be assigned values by default.
//  However, such parameters can also be explicitly passed values.
// Syntax
// function function_name(param1[:type],param2[:type] = default_value) { 
// }
// Note − A parameter cannot be declared optional and default at the same time.
// Anonymous () : Functions that are not bound to an identifier (function name).
//  Dynamically declared at runtime,  Anonymous functions can accept inputs and return outputs,
//  just as standard functions do.
// Functions that are not bound to an identifier (function name) are called as anonymous functions.
//  These functions are dynamically declared at runtime. Anonymous functions can accept inputs and return outputs, just as standard functions do.
// These () can have parameters. 
var msg = function () {
    return "Hello world!";
};
console.log("Message from function expression (msg) :  " + msg); //prints () definition
//Message from function expression (msg) :  function () {
//     return "Hello world!";
// }
console.log("Message from function expression (msg()) :  " + msg()); //Message from function expression (msg()) :  Hello world!
/* Function Expression and Function Declaration ─ Are they synonymous?
Function expression and function declaration are not synonymous. Unlike a function expression,
a function declaration is bound by the function name.

The fundamental difference between the two is that, function declarations are parsed before their execution.
On the other hand, function expressions are parsed only when the script engine encounters
it during execution.

When the JavaScript parser sees a function in the main code flow, it assumes Function Declaration.4
When a function comes as a part of a statement, it is a Function Expression. */
// Lambda Functions : mechanism to represent anonymous functions.
//  These functions are also called as Arrow functions.
var foo = function (x) { return console.log(x + 10); };
foo(100); //110

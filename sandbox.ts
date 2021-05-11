// Array Destructuring : Refers to breaking up the structure of an entity. 
// TypeScript supports destructuring when used in the context of an array.

var arr : number[] = [12,13];
var [x,y] = arr;

// On compiling to Javascript, it appears as : 
// var x = arr[0], y = arr[1];

console.log("Destructing x : " + x);
console.log("Destructing y : " + y);


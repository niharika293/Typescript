// Looping Constructs 
// 1. (Index, Element Property)
// (A) : for, for-in : gives you access to index in an array, not the actual element. 
var arr = ['a', 'b', 'c'];
console.log("Traversing using (for) : "); //a,b,c
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("Traversing using (for-in) : "); //a,b,c
for (var i in arr) {
    console.log(arr[i]);
}
// (B) : for-each, for-of : access to array element itself is given.
// For-each lets you have array index, for-of doesn't.
arr.forEach(function (value, index) { return console.log("Printing value from for-each :" + value); }); //a,b,c
arr.forEach(function (value, index) { return console.log("Printing index from for-each :" + index); }); //0,1,2

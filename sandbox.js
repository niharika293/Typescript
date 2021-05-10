// Array Methods
// 1. concat : Combines two or more arrays. 
// This method returns a new array without modifying any existing arrays.
var arr_names = ['Mario', 'Luigi'];
arr_names.concat();
console.log(arr_names); //["Mario", "Luigi"]
console.log(arr_names.concat('1', '2')); // retuns new array.  ["Mario", "Luigi", "1", "2"]
console.log(arr_names); //doesn't modify the original array. ["Mario", "Luigi"]
// 2. every() : Determines whether all the members of an array satisfy the specified test.
// Callback () - A function that accepts up to three arguments.
//  The every method calls the predicate function for each element in the array until
//  the predicate returns a value which is coercible to the Boolean value false,
//  or until the end of the array.
// doesn't modify the original array.
var arr_numbers = [50, 20, 30, 51];
console.log("Checking larger :" + arr_numbers.every(checkLarger)); //true
function checkLarger(element, index, array) {
    return (element >= 20);
}
function checkEven(element, index, array) {
    if (element % 2 == 0) {
        return element += 2;
    }
}
console.log("Checking even results : " + arr_numbers.every(checkEven)); //false
// 3. filter() : Returns the elements of an array that meet the condition specified in a callback function.
var checkFilteredOutput = arr_numbers.filter(checkLarger);
console.log("From filter output" + checkFilteredOutput); //From filter output50,20,30,51
// 4. map() : Calls a defined callback function on each element of an array, 
// and returns an array that contains the results.
var mapOutputRoots = arr_numbers.map(Math.sqrt);
console.log("From Map Output : " + mapOutputRoots); //From Map Output : 7.0710678118654755,4.47213595499958,5.477225575051661,7.14142842854285
// 5. reduce() : reduce() method applies a function simultaneously against two values of the array 
// (from left-to-right) as to reduce it to a single value.
// Returns the reduced single value of the array.
var total = [0, 1, 2, 3].reduce(function (a, b) {
    return a + b;
});
console.log("Total after reduce : " + total); //6
// 6. reduceRight(): from right to left reduction into a single value.
var newTotal = [2, 4, 6, 8].reduceRight(function (a, b) {
    return b - a;
});
console.log("New Total after reduce-right " + newTotal); //-4
// 7. forEach() : forEach() method calls a function for each element in the array.
arr_numbers.forEach(function (value) {
    console.log("Printing from for-each : " + value);
});
// 8. indexOf() : Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log("Index of 51 : " + arr_numbers.indexOf(51)); //3
// 9. lastIndexOf() : Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
var arr_ducks = ['Lui', 'dui', 'Hui', 'Lui'];
console.log("Last Index of Lui : " + arr_ducks.lastIndexOf('Lui')); //3
// 10. join() : Adds all the elements of an array into a string, separated by the specified separator string.
console.log("Names Joined : " + arr_names.join(" & ")); //Names Joined : Mario & Luigi
arr_names.push("Yagami");
console.log("Names Joined : " + arr_names.join(" & ")); // Names Joined : Mario & Luigi & Yagami
console.log(arr_names); //["Mario", "Luigi", "Yagami"]
// 11. pop() : Removes the last element from an array and returns it.
//  If the array is empty, undefined is returned and the array is not modified.
console.log("Popping now : " + arr_names.pop()); // ["Mario", "Luigi"]
// 12. push() : Appends new elements to the end of an array, and returns the new length of the array.
arr_names.push('Remy');
console.log("After Pushing the array is : " + arr_names); //Pushing : Mario,Luigi,Remy
console.log("While Pushing the array is : " + arr_names.push('Barbie')); //Pushing 4
// 13. reverse() : Reverses the elements in an array in place. 
// This method mutates the array and returns a reference to the same array.
console.log("reversing now  : " + arr_names.reverse()); //reversing now  : Barbie,Remy,Luigi,Mario
// 14. shift() : Removes the first element from an array and returns it. 
// If the array is empty, undefined is returned and the array is not modified.
console.log("Shifting now : " + arr_names.shift()); //Shifting now : Barbie
console.log("Array after shifting : " + arr_names); //Array after shifting : Remy,Luigi,Mario
// 15. slice() : slice() method extracts a section of an array and returns a new array.
console.log("Slicing (1) : " + arr_names.slice(1)); //Slicing (1) : Luigi,Mario
console.log("Slicing (0,2) : " + arr_names.slice(0, 2)); //Slicing (0,2) : Remy,Luigi
console.log("After slicing : " + arr_names); // After slicing : Remy,Luigi,Mario
// 16. some() : Returns true if at least one element in this array satisfies the provided testing function.
console.log("Checking some() :  " + arr_numbers.some(checkEven)); //Checking some() :  true
// 17. sort() : Sorts an array in place. This method mutates the array and returns a reference to the same array.
console.log("Sorting : " + arr_numbers.sort()); // Sorting : 20,30,50,51
// Sorting in descending order : 51,50,30,20
console.log("Sorting in descending order :" + arr_numbers.sort(function (a, b) { return a < b ? 1 : a > b ? -1 : 0; }));
// 18. splice() : Removes elements from an array and, 
// if necessary, inserts new elements in their place, returning the deleted elements.
// array.splice(index, howMany, [element1][, ..., elementN]);
// index − Index at which to start changing the array.
// howMany − An integer indicating the number of old array elements to remove. 
// If howMany is 0, no elements are removed.
// element1, ..., elementN − The elements to add to the array. 
// If you don't specify any elements, splice simply removes the elements from the array.
console.log("Before Splicing : " + arr_numbers); // Before Splicing : 51,50,30,20
console.log("Splicing (1) : " + arr_numbers.splice(1)); //Splicing  (1) : 50,30,20
console.log("After splicing (1) : " + arr_numbers); //After splicing (1) : 51
// 19. toString() : Returns a string representation of an array.
arr_numbers.push(31, 22, 44, 770);
console.log("Converting to string : " + arr_numbers.toString()); // Converting to string : 51,31,22,44,770
// 20. unshift() : Inserts new elements at the start of an array, and returns the new length of the array.
console.log("Unshifting : " + arr_numbers.unshift(10)); //Unshifting : 6
console.log("Array after unshifting : " + arr_numbers); //Array after unshifting : 10,51,31,22,44,770

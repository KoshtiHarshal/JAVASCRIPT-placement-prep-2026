let num = [1,2,3,4,5,6,7];
console.log(num);

// Array Methods

// Converting Array to String
let a = num.toString();
console.log(a,typeof a);

// Join Method : Joins all the array elements using a separator.
let b = num.join(":)")
console.log(b,typeof b);

//Push Method : Add new element at the end of the array.
let c = num.push(8)
console.log(num,c);

// Pop Method : Removes the last element from the array.
let d = num.pop()
console.log(num,d);

// There are many Array Method Available in JavaScript.
// Some are used above and some are mentioned below.

// Shift() : Removes first element and returns it.
// Unshift() : Adds element to the beginning and returns new array length.
// Delete() : Array element can be deleted using the this.
// Concat() : Used to join(Concatenate) multiple arrays to a new array.
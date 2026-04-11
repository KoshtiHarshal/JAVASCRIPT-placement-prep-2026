// Array in JavaScript

let marks = [78,87,65,75,68];
console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]); //Will be undefined because index 5 does not exist
console.log(marks.length);
marks[2] = 90;  //Changing the value of the array.
marks[5] = 82;  //Adding a new value to the array.
console.log(marks);
console.log(typeof marks);
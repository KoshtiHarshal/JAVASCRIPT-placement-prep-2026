let num = [3,4,6,34,56,65,2,9,8,7];
console.log(num);

// Some more Array Methods
// Sort Method : sort() method is used to sort an array alphabetically even it is numbers.
num.sort(); //Modify original Array.
console.log(num);

// To Sort the number Ascending or Descending we need to create compare function.
let descending = (a,b)=>{
    return b-a
}
console.log(num.sort(descending));

let ascending = (a,b)=>{
    return a-b
}
console.log(num.sort(ascending));

// Reverse Method : Reverses the element in the source array
let letter = ["a","b","c","d","e","f","g"];
console.log(letter.reverse());

// Splice and Slice Methods.

// Splice() : Splice can be used to add new items to an Array.
    // splice(index,No. of elements to remove,new elements separating with comas",")
num.splice(7,3,10,11,12,13,14,15);
console.log(num);

// Slice() : Slices out a piece from an array. It creates a new array
let num_new1 = num.slice(7);
console.log(num_new1);
let num_new2 = num.slice(3,8);
console.log(num_new2);
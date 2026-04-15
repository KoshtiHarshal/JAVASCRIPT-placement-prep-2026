// Map ,Filter & Reduce are Higher Order Array Methods modern. 
// This are modern JavaScript Methods use to save time.

// Map : Creates a new array by performing some operation in each array element.
let num1 = [34,43,56,76];
let a = num1.map((value,index,array)=>{
    console.log(value,index,array);
    return value*2;
})
console.log(a);

// Filter : Filters an array with values that passes a test. Creates new array.
let num2 = [12,3,6,18,5,9,15];
let b = num2.filter((b)=>{
    return b>5;
})
console.log(b);

//Reduce : Reduces an array to a single value.
let num3 = [2,2,2,2,2];
let c = num3.reduce((sum)=>{
    return sum+sum;
})
console.log(c);
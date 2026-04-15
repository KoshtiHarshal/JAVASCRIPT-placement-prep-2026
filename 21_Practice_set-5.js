// Q-1  Create an Array of number and take input from the user to add number to this Array.
let num1 = [1,3,5,7,9];
let a = prompt("Enter the value to add in the array :");
a = Number.parseInt(a);
num1.push(a);
console.log(num1);

// Q-2  Keep adding number to the array in Q-1 until 0 is added to the array.
b = 0;
b = Number.parseInt(b);
let i;
while (i != b) {
    i = prompt("Enter the value to add in the array :");
    i = Number.parseInt(i);
    num1.push(i);
    console.log(num1)
};
console.log(num1)

// Q-3  Filter for number divisible by 10 from a given Array.
let num2 = [12,16,20,27,33,40,50,65,70];
let c = num2.filter((c)=>{
    return c%10 == 0;
})
console.log(c)

// Q-4  Create an array of Square of given Number.
let num3 = [1,2,3,4,5,6,7,8,9];
let j = num3.map((x)=>{
    return x*x
})
console.log(j)

// Q-5  Use reduce to calculate factorial of a given number from an array of first n natural number.(n being the number whose factorial needs to be calculated.)
let num4 = [1,2,3,4,5];
let n = num4.reduce((n1,n2)=>{
    return n1*n2;
})
console.log(n)
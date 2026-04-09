// Q-1  Use Logical Operator to find wheather the age of a person lies betwwen 10 to 20?

let age = prompt("Enter your age :"); 
age = Number.parseInt(age)
if(age>10 && age<20){
    alert("The age is between 10 to 20");
}
else{
    alert("The age is not between 10 to 20")
}

// Q-2  Demonstrate the use of switch case statement in javascript.

switch (age){
    case 11:
        console.log("This age belong to the special age group");
        break
    
    case 12:
        console.log("This age belong to the special age group");
        break
    
    case 13:
        console.log("This age belong to the special age group");
        break
    
    case 14:
        console.log("This age belong to the special age group");
        break
    
    case 15:
        console.log("This age belong to the special age group");
        break
    
    case 16:
        console.log("This age belong to the special age group");
        break
    
    case 17:
        console.log("This age belong to the special age group");
        break
    
    case 18:
        console.log("This age belong to the special age group");
        break
    
    case 19:
        console.log("This age belong to the special age group");
        break
    
    default:
        console.log("This age doesn't belong to the special age group");
}

// Q-3  Write a JavaScript program to cheak wheather the number is divisible by 2 and 3.
                                         // or
// Q-4  Write a Javascript program to cheak wheather a number is divisible by either 2 and 3.
let num = prompt("Enter the Dividend value :");
num = Number.parseInt(num)

if (num%2 == 0 && num%3 == 0){
    console.log("The Dividend is divisible by both 2 and 3");
}
else if (num%2 == 0 || num%3 == 0){
    console.log("The Dividend is only divisible by one of the divisor");
}
else {
    console.log("The Dividend is not divisible by Either of them")
}

// Q-5  Print "You can Drive" or "You cannot Drive" based on age being greater than 18 using Ternary Operator.

let a = age>18? "You can Drive":"You cannot Drive"
console.log(a)
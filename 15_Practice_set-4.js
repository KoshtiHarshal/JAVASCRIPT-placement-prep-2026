// Q-1  What will the following print in JavaScript?
//         console.log("har\"".length)
// Ans-1  The output will be 4.
console.log("har\"".length);

// Q-2  Explore the includes,startswith & endswith function of a String.
const sentence ="The Quick brown fox jumps over the lazy dog";
console.log(sentence.includes("lazy"));
console.log(sentence.startsWith("The"));
console.log(sentence.endsWith("dog"));

// Q-3  Write a program to convert a given string to lowercase.
let word = "HARCOtops";
console.log(word.toLowerCase());
console.log(word.toUpperCase());

// Q-4  Extract the amount out of this String.
        // "Please give Rs 1000"
let str1 = "Please give Rs 1000";
let amount1 = Number.parseInt(str1.slice("Please give Rs ".length));
let amount2 = Number.parseInt(str1.slice(15));
console.log(amount1)
console.log(amount2)
console.log(typeof amount1)

// Q-5  Try to change 4th Character of a given string. How you can able to do it?
let Name = "Harshal";
console.log(Name.replace("s","S"));
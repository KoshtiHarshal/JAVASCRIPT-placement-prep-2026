// Q-1  Create a variable of type string and try to add a number to it.

let str1 = "HARCO@"
let num1 = 195
console.log(str1+num1)

// Q-2  Use typeof operator to find datatype of sting in last question.

console.log(typeof(str1+num1))

// Q-3  Create a const object in Javascript. Can you change it to hold a number later/

const obj1 = {
    Name : "HARSHAL",
    Age : 20,
}
console.log(obj1)
obj1['Age'] = 19 // const object can be changed externally. 
console.log(obj1)

// Q-4  Try to add a new key to the const object in question 3. Where you are able to it?

obj1['Gender'] = "Male"
console.log(obj1)

// Q-5  Write a word meaning dictionary of 3 words.

const dict = {
    Neatnik : "A person who is extremely neat about surroundings, appearance, etc.",
    Gloze : "To make explanatory notes or glosses on (a text)",
    Boomerasking : "Some people asking questions just to get asked the same questions about themselves",
}
console.log(dict['Neatnik'])
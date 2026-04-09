// Q-1  Write a program to print the marks of a student in an object using for loop.
        // obj = { Harshal : 97, Rohan : 93, Kaushal : 90}

let marks = { 
    Harshal : 97, 
    Rohan : 93, 
    Kaushal : 90
}
for (let i=0; i<Object.keys(marks).length;i++){
    console.log("The marks of "+ Object.keys(marks)[i]+" are "+ marks[Object.keys(marks)[i]])
}

// Q-2  Write the program in Q-1 using for in loop.

for (let a in marks){
    console.log(a +"="+marks[a])
}

// Q-3  Write a program to print "try again" until the user enter the Correct Number.

let CN = 69
let i

while (i != CN) {
    console.log("Try Again")
    i = prompt("Enter a number : ")
}
console.log("You have entered a correct number")

// Q-4  Write a function to find mean of 5 numbers.

function toFindMean(a,b,c,d,e){
    return (a+b+c+d+e)/5
}

console.log(toFindMean(1,2,3,4,5))

const mean = (p,q,r,s,t)=>{
    return (p+q+r+s+t)/5
}
console.log(mean(1,2,3,4,5))

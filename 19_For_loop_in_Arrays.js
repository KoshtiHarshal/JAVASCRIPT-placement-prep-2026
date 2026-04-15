// for loop
let num = [1,2,3,4,5,6,7];
for(i=0;i<num.length;i++){
    console.log(num[i]);
}

// forEach loop
num.forEach((element)=>{
    console.log(element*element)
})

// Array.from
let Name = "Harshal";
let arr = Array.from(Name);
console.log(arr)

// for...of
for (let a of num){  // The output of this would be the values of an array.
    console.log(a)
}
// for...in
for (let b in num){  // The output of this would be the keys of an array.
    console.log(b)
}
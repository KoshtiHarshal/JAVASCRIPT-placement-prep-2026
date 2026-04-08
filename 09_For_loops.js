// for loop

for(i=0;i<=100;i++){
    console.log(i)
} 
let sum = 0
for(i=0;i<4;i++){
    sum += (i+1)
}
console.log(sum)

// Quiz Question : Write a sample for loop of your choice.

for(j=100;j>0;j--){
    console.log(j)
}

// Types of for loop :
// 1) for in
// 2)for of

let obj = {
    Harshal : 78,
    Trisha : 89,
    Mohan : 68,
    Bhakti : 65,
    Shubham : 87,
}

// 1) Usage of "for in"
for ( let a in obj){
    console.log(a +"="+obj[a])
}

// 2) Usage of "for of"
for ( let a of "Harshal"){
    console.log(a)
}

// There are two ways to use function :
// 1) Old Approach - By creating a name function using "function" keyword.
// 2) Arrow Function Approach - By using Arrows to create function "()=>"

// 1) Old Approach
function areaOfShape(x,y){
    return x*y
}

console.log("Areas")
console.log(areaOfShape(12,8))
console.log(areaOfShape(7,5))
console.log(areaOfShape(11,3))

// 2) Arrow Function Approach
const Perimeter = (a,b)=>{
    return (a+b)*2
}
console.log("Perimeters")
console.log(Perimeter(12,8))
console.log(Perimeter(7,5))
console.log(Perimeter(11,3))
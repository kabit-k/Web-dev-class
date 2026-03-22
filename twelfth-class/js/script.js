 console.log("hello")
 var c=7;
var b=9;
var sum = b+c;
console.log(sum);

let x = 25;
let y = 4;
let remainder = x % y;
console.log(remainder);

var a = 4;
if (true) {
    var a = 5; 
}
console.log(a); 

let a = 5;
if (true) {
    console.log(a);
    let a = 7;
    console.log(a); 
}
console.log(a);

let a1 = 5;
let b1 = 6;
let c1 = 7;
function Sum(a1, b1) {
    return a1 + b1;
}
console.log(Sum(a1, b1));
console.log(Sum(b1, c1));
console.log(Sum(a1, c1));
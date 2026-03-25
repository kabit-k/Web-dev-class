let animals = ["cow", "goat"];

let last = animals.pop();  
animals.push("horse", "camel");
animals.push(last);
console.log(animals);

console.log("Concat start")

let arr1 = ["horse", "cow"];
let arr2 = ["zebra", "tiger"];

let combined = arr1.concat(arr2);

console.log("Array 1:", arr1);       
console.log("Array 2:", arr2);          
console.log("Combined Array:", combined);

arr1.forEach(arr=>{
console.log(arr)
})

let num = [1, 2, 3, 4, 5];
let newNum = [];

num.forEach(function(n) {
    newNum.push(n + 5);
});

console.log("Original array:", num);
console.log("New array (+5):", newNum);
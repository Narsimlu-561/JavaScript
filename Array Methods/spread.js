let Min=Math.min(1,2,4,5,6,8,0);
console.log(Min);

let arr=[1,2,3,4,5];
let min=Math.min(arr[0],arr[1],arr[2],arr[3],arr[4]);
console.log(min);
//instead of writing all these the spread is introduced
//Syntax :-- (...arrName)
console.log("minimum ");
let array=[1,2,3,0,1,2,3,4,5];
let minimum=Math.min(...arr);
console.log(minimum);

console.log("maximum ");
let max=Math.max(...arr);
console.log(max);

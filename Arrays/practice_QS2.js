let months=["january","july","march","august"];
console.log(months);
console.log(months.splice(0,2,"july","june"));
console.log(months);

let languages=["c","c++","html","javascript","python","java","c#","sql"];
console.log(languages)
// console.log(languages.reverse().indexof());

console.log(" i am hoping in a hopless situation ");


let arr1=[];
let arr2=[];
console.log(arr1===arr2);

console.log("equating arrays: ")
let arr=[1,2,3];
let arrcopy=arr;
console.log(arr===arrcopy);
arrcopy.push(4);
arrcopy.push(5);
console.log(arr);
console.log(arrcopy==arr);


const arr5=[1,2,3,4,5];
let chars=['a','b','c'];
arr5=chars;
console.log(arr5);
console.log(arr5===chars);

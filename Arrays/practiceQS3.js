let game=[['X','null','O'],['null','X','null'],['O','null','X']];
console.log(game);

let arr=[7,9,0,-2];
arr.pop();
let n=arr;
console.log(n);
arr.push(-2);
arr.shift();
console.log(arr);

//Qs3. Write a JavaScript program to check whether a string is blank or not.
let str="Black";
if(str=="Black"){
  console.log("yes ! the string is black");
}
else{
  console.log("No the string is not black")
}

//Write a JavaScript program to test whether the character at the given (character) index is lower case.
let array=['a','B','c','D'];
let ind=3;
if(array[ind]==array[ind].toLowercase){
  console.log("character is lowercase");
}
else{
  console.log("character is not lowercase");
}

//Write a JavaScript program to strip leading and trailing spaces from a string.
let org=" Apna College ";
console.log(`original array: ${org}`);
console.log(`after removing leading & trialing spaces${org.trim()}`);

//Write a JavaScript program to check if an element exists in an array or not.
let Arr=[1,2,5,4,3];
let element=2;
if(Arr[element]){
  console.log("present");
}
else{
  console.log("not present");
}
//function scope
function Sum(a,b){
  let add=a+b;
  return add;
}
console.log(Sum(2,3));

//Global Scope
let sum=54;
function calSum(a,b){
  console.log(sum);
}
console.log(calSum(2,3));
console.log(sum);

//Block scope
let age=19;
if(age >=18){
  let isAdult="is Adult";
}
// console.log(isAdult);//Uncaught ReferenceError: isAdult is not defined

//example 2
for(let i=0;i<=10;i++){
  console.log(i);
}
// console.log(i);//func_scope.js:27 Uncaught ReferenceError: i is not defined

//Lexicalscope
console.log("Lexicalscope");
function outerMostFunc(){
  console.log("outer Most Function");
  let x=5;
  let y=10;
  function outerFunc(x,y){
    console.log("outer Function");
    console.log(x);
    console.log(y);
    function innerFunc(x,y){
      console.log("inner Function");
      let sum=x+y;
      console.log(sum);
    }
    innerFunc(x,y);
  }
  outerFunc(x,y);
}
console.log(outerMostFunc());

//example
let greet="hello";
function changeGreet(){
  let greet="namaste";
  console.log(greet);
  function innerGreet(){
    console.log(greet);
  }
}
console.log(greet);
changeGreet();
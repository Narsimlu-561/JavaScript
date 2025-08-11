function sum(a,b){
  let sum=a+b;
  console.log(`sum is : ${sum}`);
}
sum(5,5);

function Sum(a,b){

  return a+b;
}
Sum(5,5);

function Add(a,b){
  let addition=a+b;

  return addition;
}
Add(5,5);

//functions can not detect the statements which are written after return keyword
function Addition(a,b){
  console.log("before return statement");
  return a+b;
  console.log("after return statement");
}
console.log(Addition(2,3));

//it also return string/char/boolean/number/...
function isAdult(age){
  if(age >=18){
    return "adult";
  }
  else{
    return "not adult";
  }
}
console.log(isAdult(17));
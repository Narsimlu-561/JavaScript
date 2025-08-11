function printName(name){
  console.log(name);
}
printName("shradha");

//passing multiple values
function printInfo(name,age){
  console.log(`${name}'s age is ${age}`);
}
printInfo("shradha",23);

//parameter order
function info(name,age){
  console.log(`${name}'s age is ${age}`);
}
info(20);

//avg of three numbers
console.log("avg of three numbers: ");
function avg(a,b,c){
  console.log((a+b+c)/3);
}
avg(3,3,3);
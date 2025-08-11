
function hello(){
  console.log("inside hello function");
  console.log("hello world");
}
function demo(){
  console.log("calling hello function");
  hello();
}
console.log("calling demo function");
demo();
console.log("done, bye");
console.log("---------------------------------------");

function one(){
  return 1;
}
function two(){
  return one()+one();
}
function three(){
  let res=two()+one();
  console.log(res);
}
three();
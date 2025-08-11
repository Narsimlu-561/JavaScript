let sum=function(a,b){
  return a+b;
}
sum(2,3);
console.log(sum);

let hello=function(){
  console.log("hello");
}
console.log(hello);

//Higher order function
console.log("Higher order function");
let greet=function(){
  console.log("hello");
}

function multipleGreet(func,n){
  for(let i=0;i<n;i++){
    func();
  }
}
multipleGreet(greet,5);

let arr=[1,2,3,4,5];
let print=function(el){
  console.log(el);
}
arr.forEach(print);
console.log("--------------------------------");
arr.forEach(function(el){
  console.log(el);
});
console.log("using arrow function");
arr.forEach((el)=>{
  console.log(el);
});

let res=arr.forEach((el)=>{
  console.log(el);
});
console.log(res);
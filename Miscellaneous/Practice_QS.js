
const square=(n)=>{
  return n*n;
}
console.log(square(5));

let id=setInterval(()=>{
  console.log("Hello world");
},5000);
console.log(id);

setTimeout(()=>{
  clearInterval
  console.log("clear interval ran");
},10000);
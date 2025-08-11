let button=document.querySelector('button');
let p=document.querySelector('p');
let h1=document.querySelector('h1');
let h3=document.querySelector('h3')
function changeColor(){
  console.log(this.innerText);
  this.style.backgroundColor="orange";
};

//code refactoring
button.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);


//Normal code
// p.addEventListener("click",function(){
//   console.log(this.innerText);
//   this.style.backgroundColor="yellow";
// });
// h1.addEventListener("click",function(){
//   console.log(this.innerText);
//   this.style.backgroundColor="green";
// });
// h3.addEventListener("click",function(){
//   console.log(this.inerText);
//   this.style.backgroundColor="blue";
// })
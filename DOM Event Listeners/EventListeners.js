let btns=document.querySelectorAll('button');
for(btn of btns){
  btn.addEventListener("click",sayHello);
  btn.addEventListener("click",sayName);
}
function sayName(){
  console.log("Apna College!")
}
function sayHello(){
  console.log("Hello")
}
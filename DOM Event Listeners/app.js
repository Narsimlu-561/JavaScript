let btn=document.querySelector("button");
console.dir(btn);
btn.onclick=function(){
  console.log("button was clicked!")
}

let button=document.createElement('button');
button.innerText="Click mee!";
document.querySelector('body').append(button);
function sayHello(){
  alert("Hello!");
}
button.onclick=sayHello;
function sayName(){
  console.log("Apna College");
}

//multiple button functionality
let butns=document.querySelectorAll('button');

for(btn of butns){
  btn.onmouseenter=function(){
    console.log("you entered a button!!");
  }
  btn.onclick=sayHello;
  btn.onclick=sayName;
}
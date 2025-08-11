
// let p=document.createElement('p');
// p.innerText="Hey i'm red";
// p.style.color="red"
// console.log(p);

// let h=document.createElement('h3');
// h.innerHTML="i'm a blue h3!";
// h.setAttribute(Style=color,green);
// h.style.color="blue";
// console.log(h);

// let div=document.createElement('div');
// div.style.border=" solid black";
// let h1=document.createElement('h1');
// h1.innerText="I'm in a div";
// div.insertAdjacentElement('afterend',h1);
// let para=document.createElement('p');
// para.innerText="ME TOO!";
// div.insertAdjacentElement('afterend',para);
// console.log(div);

let para1=document.createElement('p');
para1.innerText="Hey i'm red";
document.querySelector('body').append(para1);
// para1.style.color="red";
para1.classList.add("red");

let h3=document.createElement('h3');
h3.innerText="i'm a blue h3!";
h3.classList.add("blue");
document.querySelector('body').append(h3);

let div=document.createElement('div');
let h1=document.createElement('h1');
let para=document.createElement('p');
h1.innerText="I'm in a div";
para.innerText="ME TOO!";

div.append(h1);
div.append(para);
div.classList.add("box");
document.querySelector('body').append(div);
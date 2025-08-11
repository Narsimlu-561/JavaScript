let heading=document.querySelector('h1');
console.log(heading);
heading.innerHTML=`<u>${heading.innerText}</u>`;
console.dir(heading);

let img=document.querySelector('img'); //img
img.getAttribute('id');
img.setAttribute('id','spiderman-img');
img.setAttribute('src','https://i.redd.it/tz37xsjgnih81.jpg');
console.log(img);

let links=document.querySelectorAll('.box a');

for(let i=0;i<links.length;i++){
  links[i].style.color="yellow";
}
for(link of links){
  link.style.color="purple";   
} 

let underline=document.querySelector('h1');
underline.classList.add('underline');
underline.classList.remove('underline');

underline.setAttribute('class','green');
console.log(underline.classList.contains('underline'));
console.log(underline.classList.contains('green'));
console.log(underline.classList.contains('blue'));

//Toggle
console.log(heading.classList.toggle("green"));
console.log(heading.classList);
console.log(heading.classList.toggle("underline"));
console.log(heading.classList.toggle("green"));
console.log(heading.classList);

//Navigation
let box=document.querySelector('.box');
console.log(box.childCount);
let h4=document.querySelector('h4');
console.log(h4.parentElement);
console.log(h4.parentElementCount);
let ul=document.querySelector('ul');
console.log(ul.parentElement);
console.log(ul.childElementCount);
console.log(ul.children);

console.log(img.previousElementSibling.style.color="green");
console.log(img.previousElementSibling.style.color="ornage");

let Box=document.querySelector('.box');
console.log(Box);
console.dir(Box);

let newPara=document.createElement('p');
console.dir(newPara);

let Para=document.createElement('p');
console.dir(Para);

//inserting Adjacent elements
let button=document.createElement('button');
button.innerText="Click me!";
pa.insertAdjacentElement('beforebegin',button)

pa.insertAdjacentElement('afterbegin',button)

pa.insertAdjacentElement('beforeend',button)

pa.insertAdjacentElement('afterend',button)



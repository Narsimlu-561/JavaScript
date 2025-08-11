let smallimages=document.getElementsByClassName("oldImg");
for(let i=0;i<smallimages.length;i++){
  smallimages[i].src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmDyHos1ur49mH0tq7vnxx7ANkm39YEiEpg&s" ;
  console.log(`value of image no. ${i} is changed`);
}

let elem=document.getElementsByTagName("p")[1].innerText="abc";
console.log(elem);

//Query selector
console.dir(document.querySelector("p"));
console.dir(document.querySelector("#descripton"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector("div a"));
console.dir(document.querySelectorAll("div a"));
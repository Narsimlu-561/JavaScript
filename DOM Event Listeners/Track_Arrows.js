let input=document.querySelector('input');
input.addEventListener("keydown",function(event){
  console.log("code = ",event.code);
  if(event.code=="ArrowUp"){
    console.log("Arrow moves forward");
  }
  else if(event.code=="ArrowDown"){
    console.log("Arrow moves backward");
  }
  else if(event.code=="ArrowLeft"){
    console.log("Arrow moves left");
  }
  else if(event.code=="ArrowRight"){
    console.log("Arrow moves right");
  }
})
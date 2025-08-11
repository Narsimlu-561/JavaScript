
let h1=document.querySelector('h1');

function changeColor(color,delay,nextColorChange){
  setTimeout(()=>{
    h1.style.color=color;
    if(nextColorChange) nextColorChange();
  },delay);
}

//Nesting of callbacks
changeColor("red",1000, ()=>{    //1sec after red
  changeColor("orange",1000,()=>{     //1sec after orange
    changeColor("green",1000,()=>{
      changeColor("blue",1000);
    })    //1sec after green
  })
});
//callbacks nesting -> callback hell

// changeColor("red",1000);
// changeColor("orange",1000);
// changeColor("green",1000);


// setTimeout(changeColor("red"),1000);
// setTimeout(changeColor("orage"),2000);
// setTimeout(changeColor("green"),3000);
  

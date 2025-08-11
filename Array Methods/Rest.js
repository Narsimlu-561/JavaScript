function sum(...args){
  for(let i=0;i<args.length;i++){
    console.log("you gave us: ",args[i]);
  }
}
console.log(sum(1));
console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6,7,8,9));

// function min(...args){
//   return arguments.reduce((min,el)=>{

//   })
//   console.log(arguments);
//   console.log(arguments.length);
// }
// console.log(min());

function min(...args){
  return args.reduce((min,el)=>{
    if(min > el){
      return el;
    }else{
      return min;
    }
  })
}
console.log(min(1,2,3,4,5));
console.log(min(5,84,10,20,30));

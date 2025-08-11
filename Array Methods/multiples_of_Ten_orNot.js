let num=[10,52,28,50,60,30,40];
let res=num.every((el)=>(el %10==0));
console.log(res);

//finding min mumber in array
function getMin(arr){
  let min=arr.reduce((min,el)=>{
    if(min <el){
      return min;
    }else{
      return el;
    }
  });
  return min;
}
let arr=[10,20,30,40,50,60,70,80];
console.log(getMin(arr));

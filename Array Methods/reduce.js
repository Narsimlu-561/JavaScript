let nums=[1,2,3,4];
let finalVal=nums.reduce((res,el)=>{
  console.log(res);
  return res+el;
});
console.log(finalVal);

console.log("Multiplication of all numbers: ");
let n=[1,2,3,4,5];
let mul=n.reduce((res,el)=>{
  console.log(res);
  return res*el;
});

//same code using reduce func
console.log("-------------------------------");
console.log("finding max number from arr");
let arr=[1,2,3,4,5,6,7,8,9];
let Max=-1;
for(let i=0;i<arr.length;i++){
  if(Max<arr[i]){
    Max=arr[i];
  }
}
console.log(Max);
console.log("-------------------------------");
console.log("finding max number from arr using reduce ()");
let Arr=[1,2,3,4,5,6,7,8,9];
let max=Arr.reduce((max,el)=>{
  if(max<el){
    return el;
  }else{
    return max;
  }
});
console.log(max);
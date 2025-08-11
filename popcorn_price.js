let size="XL";
if(size==="XL"){
  console.log(`price is Rs. ${250}`);
}
else if(size==="L"){
  console.log(`price is Rs. ${200}`);
}
else if(size==="M"){
  console.log(`price is Rs. ${100}`);
}
else {
  console.log(`price is Rs. ${50}`);
}
console.log("-----------------------------------");
let str="apple";
if((str[0]==='a')&&(str.length>3)){
  console.log("Good");
}
else{
  console.log("Not Good !");
}

let num=12;
if((num %3===0)&&(num+1===15)||(num-1===11)){
  console.log("safe");
}
else{
  console.log("not safe");
}
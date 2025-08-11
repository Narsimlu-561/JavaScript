const data={
  mail:"ironman@gmail.com",
  password: "abcd",
}
console.log(data);
let dataCopy={...data,id:123};
console.log(dataCopy);

let arr=[1,2,3,4,5];
let obj1={...arr};
console.log(obj1);

let obj2={..."hello"};
console.log(obj2);
function simple(a,b=3){
  return a+b;
}
console.log(simple(1));// a=1 ,b=3  -->1+3=4
console.log(simple(2,4));// a=2,  b=4    --> 2+4=6

function complex(a=2,b){
  return a+b;
}
console.log(complex(2));// a=2 ,b=undefined  -->a+b=NaN
console.log(complex(5,2));// a=5, b=2   -->5+2=7
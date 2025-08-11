const Student={
  name : "narsimlu",
  age : 20,
  eng : 97,
  math : 98,
  phy : 99,
  getAvg(){
    let avg=(eng + math + phy)/3;
    console.log(avg);
  }
}
// console.log(student.getAvg());
//the above code is the problematic to access the variables(parameters)
// to access the variables we need to use 'this' keyword
const student={
  name : "shradha",
  age : 23,
  eng : 95,
  math : 93,
  phy : 97,
  getAvg(){
    console.log(this);
    let avg=(this.eng + this.math + this.phy)/3;
    console.log(`${this.name} got avg marks : ${avg}`);
  }
}
console.log(student.getAvg());
function getAvg(){
  console.log(this);
}
console.log(getAvg());

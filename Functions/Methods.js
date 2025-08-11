console.log("-----------Methods-----------");
let Calculator={
  add : function(a,b){
    return a+b;
  },
  sub: function(a,b){
    return a-b;
  },
  mul : function(a,b){
    return a*b;
  },
  div : function(a,b){
    return a/b;
  }
}
console.log(Calculator.add(2,5));
console.log(Calculator.sub(4,2));
console.log(Calculator.mul(2,5));
console.log(Calculator.div(8,2));

//shorthand
console.log("-----------Methods shorthand-----------");
let calculator={
  add(a,b){
    return a+b;
  },
  sub(a,b){
    return a-b;
  },
  mul(a,b){
    return a*b;
  },
  div(a,b){
    return a/b;
  }
}
console.log(calculator.add(2,5));
console.log(calculator.sub(4,2));
console.log(calculator.mul(2,5));
console.log(calculator.div(8,2));

//to generate a random number( 0 to 1)
let step1=Math.random();
console.log(step1);

//to get the generated random number int the range(0 to 9);
let step2=step1 * 10;
console.log(step2);

//to elemenate the Decimal value
let step3=Math.floor(step2);
console.log(step3);

//to get the value in the range(1 to 10)
/// the random() never generate 1 so, to do that we need to add 1
let step4=step3+1;
console.log(step4);

//we can do the entire thing in a single line i.e
let num=Math.floor(Math.random() * 10)+1
console.log(num);


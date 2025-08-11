let num=8;
let user=prompt("guess my number");
while(true){
  user=prompt("try again ");
  if(user =="quit"){
    console.log("quitting application");
    break;
  }
  if(num >user){
    console.log("number is greater");
  }
  else if(num < user){
    console.log("number is lesser");
  }
  if(num ==user){
    console.log("Yeah ! your guess is correct .");
  }
}
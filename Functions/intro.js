function hello(){
  console.log("hello");
}
hello();

console.log("printing Name :")
function printName(){
  console.log("Apna College");
}
printName();

console.log("printing the numbers from 1 to 10 :");
function print1to10(){
  for(let i=1;i<=10;i++){
    console.log(i);
  }
}
print1to10();

console.log("checking the person is adult or not :");
function isAdult(){
  let age=18;
  if(age >=18){
    console.log("adult");
  }
  else{
    console.log("not adult");
  }
}
isAdult();

console.log("printing A poem: ");
function poem(){
  console.log("Twinkle, twinkle, little star,");
  console.log("How I wonder what you are!");
  console.log("Up above the world so high,");
  console.log("Like a diamond in the sky.");

  console.log("When the blazing sun is gone,");
  console.log("When he nothing shines upon,");
  console.log("Then you show your little light,");
  console.log("Twinkle, twinkle, all the night.");

  console.log("Then the trav'ller in the dark,");
  console.log("Thanks you for your tiny spark,");
  console.log("He could not see which way to go,");
  console.log("If you did not twinkle so.");

  console.log("In the dark blue sky you keep,");
  console.log("And often thro' my curtains peep,");
  console.log("For you never shut your eye,");
  console.log("Till the sun is in the sky.");

  console.log("'Tis your bright and tiny spark,");
  console.log("Lights the trav'ller in the dark:");
  console.log("Tho' I know not what you are,");
  console.log("Twinkle, twinkle, little star.");
}
poem();

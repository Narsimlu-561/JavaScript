const favMovie="vedam";
let guess=prompt("Guess my fav movie: ");
while((guess!=favMovie) && (guess!="quit")){
  guess=prompt("wrong guess. Please try agian");
}
if(guess==favMovie){
  console.log("congrats !!!");
}
else{
  console.log("you quit");
}

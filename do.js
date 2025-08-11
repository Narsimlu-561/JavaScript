let todo=[];
let task=prompt("please enter your request");
while(true){
  task=prompt("please enter your request");
  if(task == "quit"){
    console.log("quitting the application");
    break;
  }
  if(task =="list"){
    console.log("-----------------");
    for(let i=0;i<todo.length;i++){
      console.log(i,todo[i]);
    }
    console.log("-----------------");
  }
  else if(task=="add"){
    let task=prompt("enter the task you want to add");
    todo.push(task);
    console.log("task is added");
  }
  else if(task =="delete"){
    let ind=prompt("enter the index pos to delete the task");
    todo.splice(ind, 1);// here ind is the index position, 1 means 1 element to be deleted
    console.log("task is removed");
  }
  else{
    console.log("invalid request");
  }
 
}
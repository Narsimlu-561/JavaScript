
// function savetoDB(data,success,failure){
//   let internetSpeed=Math.floor(Math.random()*10)+1;
//   if(internetSpeed > 4){
//     success();
//   }else{
//     failure();
//   }
  
// }
// savetoDB(
//   "Apna College",
//   ()=>{
//   console.log("success : your data was saved ");
//   savetoDB("hello world",()=>{
//     console.log("success 2 : data2 saved");
//     savetoDB("shradha",
//       ()=>{
//       console.log("success3 : data3 saved")
//     },
//     ()=>{
//       console.log("failure3 : weak connection")
//     }
//   );
//   },
//   ()=>{
//     console.log("failure 2 : weak connection")
//   });
//   },
//   ()=>{
//     console.log("failure : weak connection. data not saved!")
//   }
// );

function savetoDB(data){
  return new Promise((resolve,reject)=>{
    let internetSpeed=Math.floor(Math.random() *10)+1;
    if(internetSpeed > 4){
      resolve("success : data was saved");
    }else{
      reject("failure : weak connection")
    }
  })
}

savetoDB("apnacollege")
  .then(()=>{
    console.log("promise was resolved");
  })
  .catch(()=>{
    console.log("promise was rejected !");
  })

let url='https://catfact.ninja/fact';
fetch(url)
  .then((response)=>{
    return response.json();
  })
  .then((data1)=>{
    console.log("data 1 : ",data1.fact);
    return fetch(url);
  })
  .then((response)=>{
    return response.json();
  })
  .then((data2)=>{
    console.log("data 2 : ",data2.fact);
  })
  .catch((err)=>{
    console.log("ERROR -",err);
  }) 

console.log("data transfer is done !")

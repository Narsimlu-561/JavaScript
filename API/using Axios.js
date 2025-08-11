let btn=document.querySelector('button')
let url="https://catfact.ninja/fact";

btn.addEventListener("click",async()=>{
  let fact=await getFacts();
  // console.log(fact);
  let p=document.querySelector('p');
  p.innerText=fact;
})
async function getFacts(){
  try{
    let res=await axios.get(url);
    return res.data.fact;
  }catch(e){
    console.log("error ",e);
    return "No fact found!";
  }
}
getFacts();
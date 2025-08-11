

let jokes="https://icanhazdadjoke.com/";
async function getJokes(){
  try{
    const config={headers: {Accept:"application/json"}};
    let res=await axios.get(jokes);
    console.log(res, config);
  }catch(err){
    console.log(err);
  }
}
getJokes();
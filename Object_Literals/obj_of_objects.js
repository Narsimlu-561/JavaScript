const classInfo={
  aman :{
    grade: "A+",
    city : "delhi"
  },
  shradha : {
    grade : "A",
    city : "Pune",
  },
  narsimlu : {
    grade : "A",
    city : "Hyderabad"
  }
}
console.log(classInfo);

//Accessing the values
console.log(classInfo.aman);
console.log(classInfo.shradha);
console.log(classInfo.shradha.city);

//modifying the values
classInfo.aman.city="Delhi";
classInfo.narsimlu.city="Medak";
console.log(classInfo);
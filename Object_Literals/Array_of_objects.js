const classInfo =[
  {
    name : "aman",
    grade : "A+",
    city : "Dlhi"
  },
  {
    name : "shradha",
    grade : "A",
    city : "Pune"
  },
  {
    name : "narsimlu",
    grade : "A",
    city : "Hyderabad"
  }
]
console.log(classInfo);

//Accessing values
console.log(classInfo[0]);
console.log(classInfo[1]);
console.log(classInfo[1].name);
console.log(classInfo[1].city);

//Modifying the values
console.log(classInfo[2]);
classInfo[2].city="Medak";
console.log(classInfo[2]);

//Adding new value pairs
console.log(classInfo);
classInfo[1].gender="female";
console.log(classInfo[1]);


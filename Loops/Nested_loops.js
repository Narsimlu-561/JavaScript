let heroes=[
  ["ironman","spiderman","thor"],
  ["superman","wonder woman","flash"]
]
for(let i=0;i<heroes.length;i++){
  console.log(i,heroes[i],heroes[i].length);
  for(let j=0;j<heroes[i].length;j++){
    console.log(`j=${j},${heroes[i][j]}`);
  }
}

//student details
console.log("--------------student details--------------");
let student=[["aman",90],["shradha",98],["narsimlu",97]];
for(let i=0;i<student.length;i++){
  console.log(`info of student #${i}`);
  for(let j=0;j<student[i].length;j++){
    console.log(student[i][j]);
  }
}
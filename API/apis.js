let APIRes=
  '{"fact":"When a domestic cat goes after mice, about 1 pounce in 3 results in a catch.","length":76}'
console.log(APIRes.fact);
let validjson=JSON.parse(APIRes);
console.log(validjson);

let student={
  name:"shradha",
  age:23
}
let stringify=JSON.stringify(student);
console.log(stringify);
let student={
  name:"karan",
  class:9,
  age:14,
  username:"karan123",
  password:1234,
};
//but it is a worst way to access our values
// let username=student.username;
// let password=student.password;
// console.log(username);
// console.log(password);

let {username:user,password:pass}=student;
console.log(user);
console.log(pass);
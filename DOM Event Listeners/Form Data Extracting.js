let form=document.querySelector('form');
form.addEventListener("submit",function(event){
  event.preventDefault();

  ///    way  -->1
  // let user=document.querySelector('#user');
  // let pass=document.querySelector('#pass');

    ///   way ->2
  // let user=form.elements[0];
  // let pass=form.elements[1];


  ///way -> 3
  let user=this.elements[0];
  let pass=this.elements[1];


  console.dir(user);
  console.log("username: ", user.value);

  console.dir(pass);
  console.log("password: ",pass.value);
  alert(`Hi ${user.value} your password is set to ${pass.value}`);
});

import React  from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const[user , setUser]=useState(
    {
      name:'',
      email:'',
      password:''
    }
  );
  const submithandler =(e)=>{
    e.preventdefault();
  }
  console.log(user);
  return (
    <div >
      <form className='w-50 m-auto form' onSubmit={submithandler}>
        <center><h2 className='login'>Login Form</h2></center>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input required type="text" class="form-control" name="name" onChange={(e)=>setUser({...user, name:e.target.value})}
     id="exampleInputEmail1" aria-describedby="emailHelp"/></div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input required type="email" class="form-control" name="email"onChange={(e)=>setUser({...user, email:e.target.value})}
      id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input required type="password" class="form-control" name="password"onChange={(e)=>setUser({...user, password:e.target.value})}
      id="exampleInputPassword1"/>
  </div>
  <Link to='/login'><button type="login" class="btn btn-danger mx-3">Login</button></Link>
  <Link to='/register'><button type="register" class="btn btn-danger my-3">Register</button></Link>
</form>
    </div>
  )
}

export default Register;
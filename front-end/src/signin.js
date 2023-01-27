import React, { useState } from 'react'
import './signin.css'
import { useNavigate } from "react-router-dom";



export default function Signin() {
 
  const [Cred, SetCred] = useState({email:"",password:""})
  const navigate = useNavigate();
 const handleclick= async(e)=>{
    e.preventDefault()
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
             },
      body: JSON.stringify({email:Cred.email,password:Cred.password})
    });
    const note = await response.json();
    console.log(note.authtoken)
    if(note.success){
      localStorage.setItem('token',note.authtoken)
      navigate("/note")

    }  
    else{
      window.alert("Invalid Credentials")
    }
 }
  
 const onChanges = (e) => {
  SetCred({ ...Cred, [e.target.name]: e.target.value })
}




  return (
    <div className="position-absolute top-50 start-50 translate-middle my-2">
    <div className="cont">

      <h2 style={{ marginTop: '1.5rem', marginBottom: '1.5rem' ,fontFamily: 'Righteous'}}>Welcome</h2>

      <div className="cont2">
        <input type="email" className="input"    value={Cred.email}     id="email"   name='email' onChange={onChanges} aria-describedby="emailHelp" placeholder="Enter email" />
        <input type="password" className="input" value={Cred.password} id="password" name='password' onChange={onChanges} placeholder="Password"></input>
      </div>

      <div className="cont3">

        <button type="button" className="btn btn-primary btn2" onClick={handleclick}   >SIGN IN</button>


      </div>
      <hr className='hrsty' />
      <div className="cont4">
        <a href="https://www.google.com" target="_blank" ><i className="fa-brands fa-google fav"></i></a>
        
        <a href="https://www.facebook.com" target="_blank" ><i className="fa-brands fa-facebook fav"></i></a>
        <a href="https://www.github.com" target="_blank" ><i className="fa-brands fa-github   fav"></i></a>
      </div>




    </div>

  </div>

  )
}

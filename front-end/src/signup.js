import React ,{useState} from 'react'
import './signup.css'
import { useNavigate } from "react-router-dom";
// import { Navigate } from 'react-router-dom';

export default function Signup() {
 
  
  const [user,setuser]=useState({
    name:"",email:"",password:"",cpassword:""
  });
   
  // const history=useHistory()
  const navigate = useNavigate();
  let name ,value
  const handleInputs=(e)=>{

    name=e.target.name;
    value=e.target.value
    setuser({...user,[name]:value})


    console.log(user)

  }

  const postData= async(e)=>{
    e.preventDefault();
    const{name, email,password ,cpassword}=user;
    const res= await fetch('http://localhost:5000/api/auth/createuser',{
      method:'POST',
      headers:{
       'Content-type':'application/json'
      },
      body:JSON.stringify({
            name:name,email:email,password:password,cpassword:cpassword
      })

    })
    const data = await res.json()
    
    if(res.status===401) {
      window.alert('Enter Information properly')
    }
    else if(res.status===405){
      window.alert('Incorrect Password')
    }
    else if(!data || res.status===400){
      window.alert('Invalid User')
    }
    else{
      window.alert('Registered Successfully')
         
      // <Navigate to="/signin" replace={true} />
      navigate("/")
      // history.push('/signin')
    }


  }

   
  return (
    <div>
  
           
           <div className="position-absolute top-50 start-50 translate-middle my-2">
    <div className="con">

      <h2 style={{ marginTop: '3vh', marginBottom: '10vh' ,fontFamily: 'Righteous'}}>Create New User</h2>
      {/* <hr className='hrsty' /> */}

      <div className="con2">
        <input type="name" className="input" name='name' id='name' value={user.name}  onChange={handleInputs} autoComplete='off' placeholder="Enter your Name" />
        
        <input type="email" className="input" name='email' id="email" value={user.email} onChange={handleInputs} autoComplete='off' aria-describedby="emailHelp" placeholder="Enter email" />
       
        <input type="password" className="input" name='password' id="password" value={user.password} onChange={handleInputs} autoComplete='off' placeholder="Password"></input>
        <input type="password" className="input" name='cpassword' id="cpassword" value={user.cpassword} onChange={handleInputs} autoComplete='off' placeholder=" Confirm Password"></input>
      </div>

      <div className="con3">

        <button type="button" className="btn btn-primary btn2 " onClick={postData}>SIGN UP</button>


      </div>
      <hr className='hrsty' />
      {/* <div className="con4">
        <i className="fa-brands fa-google   fav"></i>
        <i className="fa-brands fa-facebook fav"></i>
        <i className="fa-brands fa-github   fav"></i>
      </div> */}




    </div>

  </div>


    </div>
  )
}

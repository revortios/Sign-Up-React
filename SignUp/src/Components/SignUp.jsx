import React from 'react'
import "./SignUp.css"

const SignUp = () => {

    let a = "password"

  return (
    <div className='container'>
       
        
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Email Id' />
        <input type={a} placeholder='Password' />
        

        <button>Sign Up</button>
        <button>Login</button>
        
    </div>
  )
}

export default SignUp
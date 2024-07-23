import React from 'react'
import "./SignUp.css"

const SignUp = () => {

    

  return (
    <div className='container'>
       
        <input type="text" placeholder='Name' className='input' />
        <input type="text" placeholder='Email Id' className='input' />
        <input type="password" placeholder='Password' className='input' />

        <i className="gg-eye"></i>
        

        <button className='button'>Sign Up</button>
        <button className='button'>Login</button>
        
    </div>
  )
}

export default SignUp
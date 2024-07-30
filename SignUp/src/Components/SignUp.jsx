import React from 'react';
import "./SignUp.css";

import email_icon from '../assets/icons8-email-50.png';
import user_icon from '../assets/icons8-person-50.png';
import password_icon from '../assets/icons8-password-50.png';

const SignUp = () => {
  return (
    <div className='container'>
      <div className='input-group'>
        <img src={user_icon} alt="User Icon" className='icon' />
        <input type="text" placeholder='Name' className='input' />
      </div>
      <div className='input-group'>
        <img src={email_icon} alt="Email Icon" className='icon' />
        <input type="text" placeholder='Email Id' className='input' />
      </div>
      <div className='input-group'>
        <img src={password_icon} alt="Password Icon" className='icon' />
        <input type="password" placeholder='Password' className='input' />
      </div>
      <button className='button'>Sign Up</button>
      <button className='button'>Login</button>
    </div>
  );
};

export default SignUp;

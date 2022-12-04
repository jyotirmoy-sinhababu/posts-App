import React from 'react';

import './form.css';

const Login = () => {
  return (
    <div>
      <form className='frm-cnt'>
        <input className='login-inp' type='text' name='email' />
        <input className='login-inp' type='text' name='password' />
        <div className='login-btn-cnt'>
          <button className='login-btn'>LogIn</button>
          <div>
            <p className='login-btn'>if not sign up</p>
            <button>sign up</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

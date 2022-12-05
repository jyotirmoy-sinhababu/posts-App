import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';

import './form.css';

const LogIn = () => {
  const navigate = useNavigate();

  const [logInData, setLogInData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = logInData;

  const handleChange = (e) => {
    setLogInData({ ...logInData, [e.target.name]: e.target.value });
  };

  const handleLogInSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(email, password).then(
        (res) => {
          console.log(res);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='main-frm-cnt'>
      <form onSubmit={() => {}} className='frm-cnt'>
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          className='login-inp'
          type='text'
          name='email'
          placeholder='Enter your email'
        />
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          className='login-inp'
          type='text'
          name='password'
          placeholder='Enter your password'
        />
        <div className='login-btn-cnt'>
          <button type='submit' className='login-btn'>
            LogIn
          </button>
          <div className='signup-navigate-cnt'>
            <p className='btn-txt'>if not sign up ?</p>
            <button
              className='navigate-btn'
              onClick={() => {
                navigate('/signup');
              }}
            >
              sign up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;

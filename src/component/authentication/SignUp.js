import React, { useState } from 'react';

import { auth } from '../firebase/FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import './form.css';

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = signUpData;
  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };
  console.log(signUpData);

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then((res) => {
        console.log(res);
      });
    } catch (err) {}
  };

  return (
    <>
      <div className='main-frm-cnt'>
        {' '}
        <form
          className='frm-cnt'
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUpSubmit(e);
          }}
        >
          <input
            className='signup-inp'
            type='text'
            name='name'
            placeholder='Enter your name'
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            className='signup-inp'
            type='text'
            name='email'
            placeholder='Enter your email'
          />
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            className='signup-inp'
            type='text'
            name='password'
            placeholder='Enter your password'
          />
          <div className='signup-btn-cnt'>
            <button type='submit' className='signup-btn'>
              SignUp
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;

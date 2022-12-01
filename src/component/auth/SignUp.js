import React, { useState } from 'react';

const SignUp = () => {
  const [signUpData, setSignUpData] = useState('');

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };
  console.log(signUpData);
  return (
    <>
      <form>
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
        <div className='signup-btn'>
          <button>SignUp</button>
        </div>
      </form>
    </>
  );
};

export default SignUp;

import React from 'react';

const Login = () => {
  return (
    <div>
      <form>
        <input className='login-inp' type='text' name='email' />
        <input className='login-inp' type='text' name='password' />
      </form>
    </div>
  );
};

export default Login;

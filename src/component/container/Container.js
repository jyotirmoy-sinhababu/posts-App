import React from 'react';
import AuthCnt from '../auth/AuthCnt';
import Nav from '../navbar/Nav';

import './container.css';

const Container = () => {
  return (
    <div>
      <Nav />
      <div className='auth-cnt'>
        <AuthCnt />
      </div>
    </div>
  );
};

export default Container;

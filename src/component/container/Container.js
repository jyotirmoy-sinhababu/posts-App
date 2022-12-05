import React from 'react';
import Nav from '../navbar/Nav';
import { Outlet } from 'react-router-dom';

import './container.css';

const Container = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Container;

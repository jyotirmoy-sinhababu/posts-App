import React from 'react';
import Nav from '../navbar/Nav';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';

import './container.css';

const Container = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Outlet />
    </div>
  );
};

export default Container;

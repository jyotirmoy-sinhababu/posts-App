import React from 'react';
import { useNavigate } from 'react-router-dom';

import './header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='header-btn-cnt'>
      <div>
        {!user ? (
          <button
            className='header-btn'
            onClick={() => {
              navigate('/login');
            }}
          >
            Log in
          </button>
        ) : (
          <button> Sign out </button>
        )}
      </div>
    </div>
  );
};

export default Header;

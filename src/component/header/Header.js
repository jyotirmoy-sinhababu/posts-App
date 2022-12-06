import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/Context';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/FirebaseConfig';

import './header.css';

const Header = () => {
  const user = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <div className='header-btn-cnt'>
      <div>
        {user ? (
          <button
            onClick={() => {
              signOut(auth);
              console.log('done');
            }}
          >
            Sign out
          </button>
        ) : (
          <button
            className='header-btn'
            onClick={() => {
              navigate('/login');
            }}
          >
            Log in
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC_lD52hE4YrAAYtrLVfzMeBYBNGBuf6Lk',
  authDomain: 'posts-45e1f.firebaseapp.com',
  projectId: 'posts-45e1f',
  storageBucket: 'posts-45e1f.appspot.com',
  messagingSenderId: '138939744655',
  appId: '1:138939744655:web:e7a3dde9818223920e8bfa',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };

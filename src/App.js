import './App.css';
import { Routes, Route } from 'react-router-dom';

import Container from './component/container/Container';
import SignUp from './component/authentication/SignUp';
import LogIn from './component/authentication/LogIn';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Container />}>
          <Route index element={<LogIn />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

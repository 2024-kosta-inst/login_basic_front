import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import OAuthVerification from './components/OAuthVerification';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/oauth/:provider" element={<OAuthVerification />}/>
    </Routes>
  );
}

export default App;

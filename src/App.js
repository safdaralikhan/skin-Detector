import logo from './logo.svg';
import './App.css';
import {
  Router as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom';
import SignUp from './pages/auth/Signup';
import Login from './pages/auth/Login';
import ForgetPassword from './pages/auth/ForgetPassword';
import NewPassword from './pages/auth/NewPassword';
import VerificationCode from './pages/auth/VerificationCode';
function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/SignUp" element={<SignUp />} />
     <Route path="/ForgetPassword" element={<ForgetPassword />} />
     <Route path="/VerificationCode" element={<VerificationCode />} />
     <Route path="/NewPassword" element={<NewPassword />} />


     </Routes>
    </BrowserRouter>
  );
}

export default App;

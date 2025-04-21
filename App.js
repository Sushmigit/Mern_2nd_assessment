
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter as Router, Routes , Route, BrowserRouter} from "react-router-dom"
import ForgotPassword from './components/ForgotPassword';

import FeedBack from './components/FeedbackForm';
function App() {
  return (
 
  <Router>
  <Routes>
    <Route path='/' element={<Login />}></Route>
    <Route path='/register' element={<Register />}></Route>
    <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
    <Route path='/home' element={<FeedBack/>}></Route>
  </Routes>
  </Router>

  );
}

export default App;

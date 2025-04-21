import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './style.css'
function ValidationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(''); 
  };

  const validateForm = () => {
    let isValid = true;

  
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    }

    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
     
      alert('Login successful!');
      navigate('/home')
      setEmail('');
      setPassword('');
      setEmailError('');
      setPasswordError('');
    }
  };

  return (
    <div>
        <h1 className='text-center'>Login</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
        {emailError && <p className="error">{emailError}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" className="form-control" value={password} onChange={handlePasswordChange} />
        {passwordError && <p className="error">{passwordError}</p>}
      </div>
      <br></br>
      <button type="submit" className="btn btn-primary">Login</button>
      <br></br>
      <br></br>
      <a className="btn btn-primary" href="/forgotpassword" role="button">ForgotPassword</a>
      <br></br>
      <br></br>
      <p>Sign Up ?</p>
      <a className="btn btn-primary" href="/register" role="button">Register</a>
    </form>
    </div>
  );
}


export default ValidationForm;
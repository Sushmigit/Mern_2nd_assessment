import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Register() {
  const[fname,setFname] = useState('');  
  const[lname,setLname] = useState('');  
  const[mobile,setMobile] = useState('');  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmpasswordError, setconfirmPasswordError] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(''); 
  };
  const handleconfirmPasswordChange = (e) => {
    setconfirmPassword(e.target.value);
    setconfirmPasswordError(''); 
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
    if(password !== confirmpassword)
    {
        setconfirmPasswordError('Confirm Password and password should match');
        isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
     
      alert('Registeration successful!');
      navigate('/');
      setEmail('');
      setPassword('');
      setEmailError('');
      setPasswordError('');
      setFname('');
      setLname('');
      setMobile('');
    setconfirmPassword('');
    }
  };

  return (
    <div>
        <h1 className='text-center'>Register</h1>
   
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="first-name">First Name:</label>
        <input type="text" id="fname" value={fname} className="form-control" onChange={(e)=>{setFname(e.target.value)}} required />
      </div>
      <div>
        <label htmlFor="last-name">Last Name:</label>
        <input type="text" id="lname" value={lname} className="form-control" onChange={(e)=>{setLname(e.target.value)}} required/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} className="form-control" onChange={handleEmailChange} />
        {emailError && <p className="error">{emailError}</p>}
      </div>
      <div>
        <label htmlFor="mobile">Mobile:</label>
        <input type="text" id="mobile" value={mobile} className="form-control" onChange={(e)=>{setMobile(e.target.value)}} required/>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} className="form-control" onChange={handlePasswordChange} />
        {passwordError && <p className="error">{passwordError}</p>}
      </div>
      <div>
        <label htmlFor="confirmpassword">Confirm Password:</label>
        <input type="password" id="password" value={confirmpassword} className="form-control" onChange={handleconfirmPasswordChange} />
        {confirmpasswordError && <p className="error">{confirmpasswordError}</p>}
      </div>
      <br></br>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
    <br></br>
      <br></br>
      <p>Login</p>
      <a className="btn btn-primary" href="/" role="button">Register</a>
    </div>
  );
}


export default Register;
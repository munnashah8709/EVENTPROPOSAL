import React, { useState } from 'react';
import "../../style/signup.css"
function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleUserLogin = () => {
      // Handle user login here
    };
  
    const handleVendorLogin = () => {
      // Handle vendor login here
    };
  
    const handleForgotPassword = () => {
      // Handle forgot password here
    };
  
    const handleCreateAccount = () => {
      // Handle create account here
    };
  
    return (
        <div className='card card-container'>
      <div >
      <h4 >Sign in your Account</h4>
        <input
         type="text" 
         id="username"
         placeholder='Email/Phone'
          value={username} 
          onChange={handleUsernameChange} />

        <input
         type="password" 
         id="password" 
         placeholder='Password'
         value={password}
          onChange={handlePasswordChange} />
  
        <button onClick={handleUserLogin}>User Login</button>
        <button onClick={handleVendorLogin}>Vendor Login</button>
  
        <a href="#" onClick={handleForgotPassword}>Forgot Password?</a>
        <a href="#" onClick={handleCreateAccount}>Create Account</a>
      </div>
      </div>
    );
}

export default Signup
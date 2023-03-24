import React from 'react'
import{ useState } from "react";
import "../style/signin.css"
function Signin() {
    const [userPhone, setUserPhone] = useState("");
    const [password, setPassword] = useState("");
  
  return (
    <div className='card-container'>
    <div className='card auth-card'>
    <div className='option'>
        <label>Login As:</label>
        <select>
          <option value="user">User</option>
          <option value="vendor">Vendor</option>
        </select>
      </div>
      
    <h4 >Sign in your Account</h4>
    
    <div className='input1'>
        <input
          type="text"
          placeholder='User/Phone'
          value={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
        />
     </div>
     <div className='input2'>
        <input
        placeholder='Password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
     </div>
<div className='btn'>
      <button type="submit">Sign In</button>
      </div>
      <h6>
        <a href='#'>Forgot Password?</a>
      </h6>
      <h6>
        <a href='#'>Create Account</a>
      </h6>

    </div>
    </div>
  
  )
}

export default Signin
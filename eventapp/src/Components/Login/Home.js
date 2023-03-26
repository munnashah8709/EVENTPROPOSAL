import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../style/home.css"
import { toast } from 'react-toastify';
import axios from 'axios';

const Home = () => {
  //vendorlogin data
  const [email, setemail]=useState("")
  const [password, setpassword]=useState("")


  // userlogin data
  const [userEmail, setuserEmail]=useState("");
  const [userPassword, setuserPassword]=useState("");


  //displaying success message
  const [Loginmessage,SetLoginmessage]=useState("");


  const VendorLogin= async()=>{
    const resp = await fetch("http://localhost:8080/vendorsignin", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          email,
          password
      })
  })
  const data = await resp.json();
  console.log(data)

  if (data.token) {
    localStorage.setItem("jwt", data.token)
    localStorage.setItem("Vendor", JSON.stringify(data.vendor))
  }
  if(data){
    SetLoginmessage("login successfull")
  }
  }


  const UserLogin= async()=>{
   console.log(userEmail,userPassword);
   
   const resp=await fetch("http://localhost:8080/usersignin",{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
      email:userEmail,
      password:userPassword
    })
   })
   const datas = await resp.json();
  console.log(datas)
  if (datas.token) {
    localStorage.setItem("jwt", datas.token)
    localStorage.setItem("User", JSON.stringify(datas.user))
  }
  if(datas){
    SetLoginmessage("login successfull")
  }



  //  const res=  await fetch("http://localhost:8080/usersignin",{
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       userEmail,
  //       userPassword
  //     })
  //   })

  }


  




    const navigate=useNavigate();
    const RegistrationPage=()=>{
      navigate("/Vendor")
    }

    function RoutToUserLogin(){
      navigate("/UserLogin")
    }

    function RoutToVendor(){
      navigate("/")
    }

   
   
     
  return (
<>
<div className="conatiner1" style={{ display:"flex", float:"right", backgroundColor:"white", marginTop:"150px", marginRight:"200px"}}>
<div className="tab-content" style={{padding:"20px", justifyContent:"center", width:"382px"}}  >
{/* userbutton and vendor butoon */}

<h2>{Loginmessage}</h2>

<ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li className="nav-item" role="presentation">
    <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true" onClick={RoutToVendor} >Vendor</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
      aria-controls="pills-login" aria-selected="false" onClick={RoutToUserLogin} >User</a>
  </li>
</ul>

{/* vendor sigin form */}
 
<div className="tab-content">
  <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
      <div>
        <p>Sign with Your Account</p>
      </div>
      <br></br>
      <div className="form-outline mb-4">
        <input type="text" placeholder='Phone / Email' className='inputs' name='email' onChange={(e) => setemail(e.target.value)} />
      </div>
      <div className="form-outline mb-4">
        <input type="password" 
         placeholder='Password' 
         className='inputs' 
         name='password'
         onChange={(e) => setpassword(e.target.value)}
         />
      </div>
      <div className="row mb-4">
        <div className="col-md-6 d-flex justify-content-center">
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <a href="">Forgot password?</a>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6 d-flex justify-content-center" onClick={RegistrationPage}>Create Account</div>
        <div className="col-md-6 d-flex justify-content-center">
        <button type="submit"
         className="btn btn-primary btn-block mb-4" onClick={()=>{VendorLogin()}}>Sign in</button>
        </div>
      </div>
  </div>



{/* user sigin form */}
  <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
       <div>
        <p>Sign with Your Account</p>
      </div>
      <br></br>

      <div className="form-outline mb-4">
        <input type="text" 
        placeholder='Phone / Email' 
        className='inputs'
        onChange={(e) => setuserEmail(e.target.value)}
        />
      </div>

      <div className="form-outline mb-4">
        <input type="password" 
          placeholder='Password' 
          className='inputs' 
          onChange={(e) => setuserPassword(e.target.value)}
          />
      </div>

      <div className="row mb-4">
        <div className="col-md-6 d-flex justify-content-center">
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <a href="">Forgot password?</a>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 d-flex justify-content-center"  onClick={RegistrationPage}>Create Account</div>
        <div className="col-md-6 d-flex justify-content-center">
        <button type="submit" 
        className="btn btn-primary btn-block mb-4" onClick={()=>{UserLogin()}}>Sign in</button>
        </div>
      </div>
  </div>
</div>



  </div>
  </div>

      </>
  )
}

export default Home

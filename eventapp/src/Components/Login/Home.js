import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../style/home.css"
import { toast } from 'react-toastify';

const Home = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  //toast function
  const notifyA=(msg)=>toast.error(msg)
  const notifyB=(msg)=>toast.success(msg)

  
  const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
  



  const data=()=>{
    if(!email || !password){
      notifyA("Please add all the fields")
     }
     else if(!emailRegex.test(email)){
      notifyA("Invalid email")
    
     }else if(!passwordRegex.test(password)){
      notifyA("The Password must be eight characters or longer,must contain at least 1 lowercase alphabetical character, must contain at least 1 uppercase alphabetical character, must contain at least 1 numeric character, must contain at least one special character")
 
     }else 
      notifyB("Signed in successfull")
 
     
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
    <form>
      <div>
        <p>Sign with Your Account</p>
      </div>
      <br></br>

      <div className="form-outline mb-4">
        <input type="text" 
        placeholder='Phone / Email' 
        value={email} 
        className='inputs' 
        onChange={(e)=>{
        setEmail(e.target.value)
        }} />
      </div>

      <div className="form-outline mb-4">
        <input type="password" 
         placeholder='Password' 
         value={password}
         className='inputs' 
         onChange={(e)=>{
          setPassword(e.target.value)
         }}/>
      </div>


      <div className="row mb-4">
        <div className="col-md-6 d-flex justify-content-center">
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <a href="">Forgot password?</a>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 d-flex justify-content-center" onClick={RegistrationPage} >Create Account</div>
        <div className="col-md-6 d-flex justify-content-center">
        <button type="submit"
         className="btn btn-primary btn-block mb-4" onClick={()=>{data()}}>Sign in</button>
        </div>
      </div>
    </form>
  </div>


{/* user sigin form */}
  <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
  <form>
  <div>
        <p>Sign with Your Account</p>
      </div>
      <br></br>

      <div className="form-outline mb-4">
        <input type="text" 
          value={email}
        placeholder='Phone / Email' 
        className='inputs'
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
         />
      </div>

 
      <div className="form-outline mb-4">
        <input type="password" 
          value={password} 
          placeholder='Password' 
          className='inputs' 
      
          onChange={(e)=>{
          setPassword(e.target.value)
        }}
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
        className="btn btn-primary btn-block mb-4" onClick={()=>{data()}}>Sign in</button>
        </div>
      </div>
    </form>
  </div>
</div>



  </div>
  </div>

      </>
  )
}

export default Home

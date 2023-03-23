import React from 'react'
import { useNavigate } from 'react-router-dom'

import "../style/home.css"

const Home = () => {

    const navigate=useNavigate();

    const RegistrationPage=()=>{
      navigate("/Register")
    }


  return (
<>
<div className="conatiner1" style={{ display:"flex", float:"right", backgroundColor:"white", marginTop:"150px", marginRight:"200px"}}>
<div className="tab-content" style={{padding:"20px", justifyContent:"center", width:"382px"}}  >


{/* userbutton and vendor butoon */}
<ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li className="nav-item" role="presentation">
    <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true">Vendor</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
      aria-controls="pills-login" aria-selected="false">User</a>
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
        <input type="email" placeholder='Phone / Email'  className='inputs' />
      </div>

      <div className="form-outline mb-4">
        <input type="password"  placeholder='Password' className='inputs' />
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
        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
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
        <input type="email" placeholder='Phone / Email' className='inputs' />
      </div>

 
      <div className="form-outline mb-4">
        <input type="password"  placeholder='Password' className='inputs' />
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
        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
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

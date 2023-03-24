import React from 'react'
import party from "../../asset/party.png"
import logo from "../../asset/logo.png"
import "../../style/home.css"
import Signin from '../Signin'
import Signup from './Signup'
function Home() {
    return (
        <div className='bgimg' style={{ backgroundImage: `url(${party})` }}>
            <div className='logo-container'> 
                <img className='logo' src={logo} alt="Logo" />
            </div>
            <div className='text-container'> 
                <p className='text'>Text will <br/>
                be displayed <br/> here</p>
            </div>
            <div>
            <Signin/>
            {/* <Signup/> */}
            </div>

        </div>
    )
}

export default Home
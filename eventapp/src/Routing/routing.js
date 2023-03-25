import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Login/Home'
import Registration from '../Components/registration/Registration'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/UserLogin' element={<Home />} />

          <Route path="/user" element={<Registration />} />
          <Route path="/Vendor" element={<Registration />} />
        </Routes>
        <ToastContainer theme="dark"/>
      </BrowserRouter>
      
    </div>
  )
}

export default Routing

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Login/Home'
import Registration from '../Components/registration/Registration'

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/Register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default Routing

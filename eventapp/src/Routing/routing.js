import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Login/Home'
import Registration from '../Components/registration/Registration'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VenodorDasbord from '../Components/Dashboard/VendorDashboard';
import UserDeshboard from '../Components/Dashboard/UserDeshboard';
import CreateProposal from '../Components/Proposals/CreateProposal';
import ProposalsDetails from '../Components/Proposals/ProposalsDetails';


const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/UserLogin' element={<Home />} />
          <Route path="/user" element={<Registration />} />
          <Route path="/Vendor" element={<Registration />} />
          <Route path="/User_Dashboard" element={<UserDeshboard />} />
          <Route path="/Vendor_Dashboard" element={<VenodorDasbord />} />
          <Route path="/CreateProposal" element={<CreateProposal />} />
          <Route path="/editProposal/id" element={<CreateProposal />} />
          <Route path="/proposalsDetails" element={< ProposalsDetails/>}/>

          

        </Routes>
        <ToastContainer theme="dark" autoClose={1000}/>
      </BrowserRouter>
      
    </div>
  )
}

export default Routing

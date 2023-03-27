import React, { useEffect, useState } from "react";
import logo from "../../image/logo.png";
import profile_image from "../../image/profile_image.png";
import { GrLogout } from 'react-icons/gr';

const UserDeshboard = () => {
  const [name,setName]=useState("")

  
  const userName=localStorage.getItem("User")
  const U=JSON.parse(userName)

  useEffect(()=>{
    setName(U.name)

  },[])
 


  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <img
          className="logo-image"
          src={logo}
          alt=""
          style={{ width: "70px", height: "70px", marginLeft: "10px" }}
        />
        <div className="form-inline">
          <p>{name}</p>
          <img
            src={profile_image}
            alt=""
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50px",
              marginRight: "20px",
            }}
          />
          <GrLogout style={{marginRight:"15px",width:"30px",height:"30px"}}/>
        </div>
      </nav>
    </>
  );
};

export default UserDeshboard;

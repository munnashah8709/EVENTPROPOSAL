import React, { useEffect, useState } from "react";
import logo from "../../image/logo.png";
import profile_image from "../../image/profile_image.png";
import userImage from "../../image/userImage.jpg";
import card_1 from '../../image/card_1.jpg';
import { GrLogout } from "react-icons/gr";
import "./UserDashboard.css";

const UserDeshboard = () => {
  const [name, setName] = useState("");

  const userName = localStorage.getItem("User");
  const U = JSON.parse(userName);

  useEffect(() => {
    setName(U.name); 
  }, []);

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <img
          className="logo-image"
          src={logo}
          alt=""
          style={{ width: "90px", height: "80px", marginLeft: "10px" }}
        />
        <div className="form-inline">
          <p id="user-name">{name}</p>
          <img
            src={profile_image}
            alt=""
            style={{
              width: "50px",
              height: "30px",
              borderRadius: "50px",
              marginRight: "20px",
            }}
          />
          <GrLogout
            style={{ marginRight: "15px", width: "20px", height: "20px" }}
          />
        </div>
      </nav>
      <div>
        <img
          src={userImage}
          alt=""
          style={{ width: "100%", height: "150px" }}
        />
      </div>
      <div className="card-container">
        <p id="proposals-title">PROPOSALS</p>
        <div className="card">
          <img src={card_1} className="card-img-top" alt="" />
          <div className="card-body">
            <p className="card-title">Vendor Name</p>
            <p className="price">22,000/-</p>
            <p className="place">Banglore</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDeshboard;
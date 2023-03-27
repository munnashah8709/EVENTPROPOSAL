import React, { useEffect, useState } from "react";
import logo from "../../image/logo.png";
import profile_image from "../../image/profile_image.png";
import userImage from "../../image/userImage.jpg";
import card_1 from "../../image/card_1.jpg";
import { GrLogout } from "react-icons/gr";
import "./UserDashboard.css";
import axiox from "axios"

const UserDeshboard = () => {
   
  const [allevents, setallevents]=useState([]);

  const [name, setName] = useState("");
  const userName = localStorage.getItem("User");
  const U = JSON.parse(userName);
  useEffect(() => {
    setName(U.name);
  }, []);


  useEffect(()=>{
    axiox.get("http://localhost:8080/findAllProposal").then((res)=>{
    setallevents(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])


  console.log(allevents)

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



      <p id="proposals-title">PROPOSALS</p>

      <div className="card-container">
     {
      allevents.map((allval, key)=>{
         return (
          <div className="card" key={key} style={{marginLeft:"10px", marginTop:"20px"}} >
          <img src={card_1} className="card-img-top" alt="" />
          <div className="card-body">
            <p className="card-title">{allval.eventName}</p>
            <p className="price">Rs. {allval.budget}</p>
            <p className="place">{allval.place}</p>
          </div>
        </div>
         )
      })
     }
     

        
        
      </div>
    </>
  );
};

export default UserDeshboard;

// http://localhost:8080/findAllProposal

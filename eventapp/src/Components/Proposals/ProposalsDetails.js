import React from "react";
import logo from "../../image/logo.png";
import { useEffect, useState } from "react";
import profile_image from "../../image/profile_image.png";
import { GrLogout } from "react-icons/gr";
import card_1 from "../../image/card_1.jpg";
import album1 from "../../image/album1.jpg"
import album2 from "../../image/album2.jpg"
import album3 from "../../image/album3.jpg"
import "./ProposalsDetails.css";

const ProposalsDetails = () => {
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
      
      <div className="container2">
    


        <div className="card1" id="card1">
            <h6> PROPOSALS - John Contract</h6>
            <img src={album3} alt="" style={{width:"250px",height:"80px"}}/>
            <p id="id"> <span>ID:</span>0001</p>
            <p><span>NAME:</span>Vendor Name</p>
            <p><span>EMAIL:</span>shreya@gmail.com</p>
            <p><span>START DATE:</span>20 Dec 2023</p>
            <p><span>END DATE:</span>25 Dec 2021</p>
            <p><span>EVENT TYPE:</span>Marriage</p>
            <p><span>EVENT CLASS:</span>Class A</p>

            </div>


        <div className="card1" id="card2">
            <h6>VENUE AND ARRANGEMENTS</h6>
            <p className="para1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing </p>
            </div>


        <div className="card1" id="card3">
            <h6>FOOD PREFERENCES</h6>
            <p className="para1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing  </p>
            </div>
            <button className="btn">select</button>
           

        <div className="card1" id="card4">
            <h6>MY ALBUMS</h6>
            <img  className="album" src={album1} alt="" style={{width:"60px",height:"60px"}}/>
            <img  className="album" src={album2} alt="" style={{width:"60px",height:"60px"}}/>
            <img  className="album" src={album3} alt="" style={{width:"60px",height:"60px"}}/>
            <br/>
            <img className="album" src={album2} alt="" style={{width:"60px",height:"60px"}}/>
            <img className="album" src={album1} alt="" style={{width:"60px",height:"60px"}}/>
            <img className="album" src={album3} alt="" style={{width:"60px",height:"60px"}}/>
            </div>

        <div className="card1" id="card5">
            <h6 id="h6">Contacts | 12</h6>
            <p>Contact1<br/>+917865487654</p>
            <p>Contact1<br/>+917865487654</p>
           


            </div>

        <div className="card1" id="card6">
            <h6>EVENTS</h6>
            <p className="para1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type make a type </p>
            </div>
        </div>
      


    </>
  );
};

export default ProposalsDetails;

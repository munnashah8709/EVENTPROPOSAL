import React, { useEffect, useState } from "react";
import logo from "../../image/logo.png";
import profile_image from "../../image/profile_image.png";
import { GrLogout } from "react-icons/gr";
import { BsFillFunnelFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./vendor_Desbord.css";

const VendorDashboard = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const CreateNewProposal = () => {
    navigate("/CreateProposal");
  };

  const vendorName = localStorage.getItem("Vendor");
  const V = JSON.parse(vendorName);

  useEffect(() => {
    setName(V.name);
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
            style={{ marginRight: "15px", width: "30px", height: "30px" }}
          />
        </div>
      </nav>

      <div className="maincontainer">
        <div class="navbar navbar-light bg-light">
          <div id="aa" class="form-inline">
            <p className="pro">PROPOSALS</p>
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ marginLeft: "20px" }}
            />
            <button
              id="aaa"
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </div>

          <div className="form-inline">
            <BsFillFunnelFill style={{ marginRight: "15px" }} />
            <button
              type="button"
              class="btn btn-primary"
              style={{ marginRight: "15px" }}
              onClick={CreateNewProposal}
            >
              Create
            </button>
          </div>
        </div>

        <div class="card">
          <div class="card-body">This is some text within a card body.</div>
        </div>
      </div>
    </>
  );
};

export default VendorDashboard;
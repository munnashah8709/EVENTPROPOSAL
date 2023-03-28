import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./createProposal.css";

const Upadateproposal = () => {

  const hiddenInputFile = useRef(null);
  const [image, setImage] = useState([]);
  const [eventName, setEventName] = useState("");
  const [place, setPlace] = useState("");
  const [proposalType, setProposalType] = useState("");
  const [eventType, setEventType] = useState("");
  const [budget, setBudget] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [description, setDescription] = useState("");
  const [food, setFood] = useState("");
  const [events, setEvents] = useState("");
  const [url, setUrl] = useState("");

  const location=useLocation();
  const id=location.state.updatedetails._id;
 
const navigate =useNavigate()
  useEffect(()=>{
    if(url){
      fetch(`http://localhost:8080/update/${id}`,{
        method:"put",
        headers:{"Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
           },
        body:JSON.stringify({
        eventName: eventName,
        place:place,
        proposalType:proposalType,
        eventType:eventType,
        budget:budget,
        date_from:dateFrom,
        date_to:dateTo,
        description:description,
        albums:url,
        food:food,
        events:events,
        })
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.error){
    alert(data.error)
        }else{
        alert("post saved")
        navigate("/Vendor_Dashboard")
      }
    })
    .catch(error=>{
        console.log(error)
    })

    }
    },[url])
  const postImage=()=>{
    const data=new FormData();
    data.append("file",image);
    data.append("upload_preset","Event-Proposal");
    data.append("cloud_name","dfqxuq3qn");
    fetch("https://api.cloudinary.com/v1_1/dfqxuq3qn/image/upload",{
        method:"post",
        body:data
    })
    .then(res=>res.json())
    .then(data=>{setUrl(data.url)})
    .catch(error=>{console.log(error)})

}


useEffect(()=>{
    setEventName(location.state.updatedetails.eventName);
    setFood(location.state.updatedetails.food);
    setDescription(location.state.updatedetails.description);
    setBudget(location.state.updatedetails.budget);
    setEvents(location.state.updatedetails.events);
    // setDateFrom(location.state.updatedetails.date_from);
    // setDateTo(location.state.updatedetails.date_to)
    setPlace(location.state.updatedetails.place);
    setProposalType(location.state.updatedetails.proposalType);
    setEventType(location.state.updatedetails.eventType);
    setImage(location.state.updatedetails.albums[0])

},[])

  
  const loadfile = (event) => {
    var output = document.getElementById('output');
    var imgs = output.files.length;
  for (let i = 0; i < imgs; i++) {
      var urls = URL.createObjectURL(event.target.files[i]);
      document.getElementById("galeria").innerHTML += '<img src="' + urls + '">';
    }
  }
  const handleclick = () => {
    hiddenInputFile.current.click()
  }




  return (
    <>
      <div className="C-proposal_container">
        <div>
          <h2 style={{ textAlign: "center" }}>Update Proposal</h2>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col-5">
            <div className="row" style={{ marginLeft: "20px" }}>
              <label htmlFor="eventName">Event Name</label>
              <input
                type="text"
                id="eventName"
                value={eventName}
                onChange={(event) => setEventName(event.target.value)}
                required
              />
            </div>

            <div className="row" style={{ marginLeft: "20px" }}>
              <div className="col-6">
                <label htmlFor="">Place Of Event</label>
                <br />
                <select
                  id="code-select"
                  onChange={(e) => {
                    setPlace(e.target.value);
                  }}
                  value={place}
                >
                  <option value="Select">Select</option>
                  <option value="Patna">Kanpur</option>
                  <option value="Ranchi">Lucknow</option>
                  <option value="Banglore">Agra</option>
                </select>
              </div>
              <div className="col-1"></div>
              <div className="col-5">
                <label htmlFor="">Proposal Type</label>
                <br />
                <select
                  id="code-select"
                  onChange={(e) => {
                    setProposalType(e.target.value);
                  }}
                  value={proposalType}
                >
                  <option value="Select">Select</option>
                  <option value="Venue">Venue</option>
                </select>
              </div>
            </div>
            <br></br>

            <div className="row" style={{ marginLeft: "20px" }}>
              <div className="col-6">
                <label htmlFor="eventType">Event Type</label>
                <select
                  id="code-select"
                  onChange={(e) => {
                    setEventType(e.target.value);
                  }}
                  value={eventType}
                >
                  <option value="Select">Select</option>
                  <option value="Marriage">Marriage</option>
                  <option value="Birthday Party">Birthday Party</option>
                  <option value="Seminar">Seminar</option>
                  <option value="Engagement">Engagement</option>
                </select>
              </div>

              <div className="col-1"></div>

              <div className="col-3">
                <label htmlFor="budget">Budget</label>
                <input type="number" placeholder="00000" onChange = {(e)=>{setBudget(e.target.value)}} value={budget}/>
              </div>
            </div>

            <br></br>

            <div className="row" style={{ marginLeft: "20px" }}>
              <div className="col-4">
                <label htmlFor="dateFrom">Date From</label>
                <input
                  type="date"
                  id="dateFrom"
                  value={dateFrom}
                  onChange={(event) => setDateFrom(event.target.value)}
                  required
                />
              </div>
              <div className="col-3"></div>

              <div className="col-3">
                <label htmlFor="dateTo">Date To</label>
                <input
                  type="date"
                  id="dateTo"
                  value={dateTo}
                  onChange={(event) => setDateTo(event.target.value)}
                  required
                />
              </div>
            </div>
 <br></br>


            <div className="row" style={{ marginLeft: "20px" }}>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(event) =>setDescription(event.target.value)}
              ></textarea>
            </div>


            <br></br>
          </div>

          <div className="col-1"></div>

          <div className="col-5">
            <div className="row">
              <label htmlFor="albums" onClick={handleclick}>Add</label>
              <input id="output" className="fileinp" multiple type="file" accept="image/*" onChange={(e) => { loadfile(e); setImage(e.target.files[0]) }} ref={hiddenInputFile} style={{ display: "none" }} />
            </div>
          
            <div className="imgcontainer">
            <div className="card"  id="galeria" style={{width:"50px", height:"50px"}}>
            <img  style={{width:"50px", height:"50px"}} src={require("../../image/logo.png")} alt=""></img>
            </div>
          </div>
           


            <div className="row">
              <label htmlFor="food">Food</label>
              <textarea
                id="description"
                value={food}
                onChange={(event) => setFood(event.target.value)}
              ></textarea>
            </div>

            <div className="row">
              <label htmlFor="events">Events</label>
              <textarea
                id="description"
                value={events}
                onChange={(event) =>setEvents(event.target.value)}
              ></textarea>
            </div>

          </div>
        </div>

        <hr></hr>
        <button type="submit" style={{marginLeft:"40%"}} onClick={()=>postImage()}>Update Proposal</button>
        <br></br>
        <br></br>
      </div>
    </>
  );
};

export default Upadateproposal;
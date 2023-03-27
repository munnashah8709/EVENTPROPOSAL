import React, { useState } from 'react'
import './createProposal.css'
const CreateProposal = () => {
  const [eventName, setEventName] = useState('');
  const [place, setPlace] = useState('');
  const [proposalType, setProposalType] = useState('');
  const [eventType, setEventType] = useState('');
  const [budget, setBudget] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [description, setDescription] = useState('');
  const [albums, setAlbums] = useState([]);
  const [food, setFood] = useState('');
  const [events, setEvents] = useState('');

  const handleSubmit = () => {

  }
  return (
   <>
   <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="eventName">Event Name</label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(event) => setEventName(event.target.value)}
          required
        />
        <label htmlFor="">Place Of Event</label><br />
        <select id="code-select" onChange={(e) => { setPlace(e.target.value) }} value={place}>
          <option value="Select">Select</option>
          <option value="Patna">Kanpur</option>
          <option value="Ranchi">Lucknow</option>
          <option value="Banglore">Agra</option>
        </select>
        <label htmlFor="">Proposal Type</label><br />
        <select id="code-select" onChange={(e) => { setProposalType(e.target.value) }} value={proposalType}>
          <option value="Select">Select</option>
          <option value="Venue">Venue</option>
        </select>
        <label htmlFor="eventType">Event Type</label>
        <input
          type="text"
          id="eventType"
          value={eventType}
          onChange={(event) => setEventType(event.target.value)}
          required
        />
        <label htmlFor="budget">Budget</label>
        <input
          type="number"
          id="budget"
          placeholder='00000'
          value={budget}
          onChange={(event) => setBudget(event.target.value)}
          required
        />
        <label htmlFor="dateFrom">Date From</label>
        <input
          type="date"
          id="dateFrom"
          value={dateFrom}
          onChange={(event) => setDateFrom(event.target.value)}
          required
        />
        <label htmlFor="dateTo">Date To</label>
        <input
          type="date"
          id="dateTo"
          value={dateTo}
          onChange={(event) => setDateTo(event.target.value)}
          required
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
        <label htmlFor="albums">
        </label>
        <input
          type="file"
          id="albums"
          multiple
          onChange={(event) => setAlbums(event.target.files)}
        />
        <label htmlFor="food">Food</label>
        <input
          type="text"
          id="food"
          value={food}
          onChange={(event) => setFood(event.target.value)}
        />
        <label htmlFor="events">Events</label>
        <input
          type="text"
          id="events"
          value={events}
          onChange={(event) => setEvents(event.target.value)}
        />
        <button type="submit">Submit Proposal</button>
      </form>
    </div>
   </>
  );
}

export default CreateProposal
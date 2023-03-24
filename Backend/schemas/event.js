const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Event proposal schema
const eventProposalSchema = new Schema({
  eventName: {
    type: String,
    required: true
  },
  placeOfEvent: {
    type: String,
    required: true
  },
  proposalType: {
    type: String,
    enum: ['Corporate', 'Wedding', 'Birthday', 'Anniversary'],
    required: true
  },
  eventType: {
    type: String,
    enum: ['Indoor', 'Outdoor'],
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  fromDate: {
    type: Date,
    required: true
  },
  toDate: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  foodPreferences: {
    type: [String],
    enum: ['Vegetarian', 'Vegan', 'Non-Vegetarian']
  },
  events: {
    type: [String],
    enum: ['Dinner', 'Cocktail Party', 'Reception', 'Conference', 'Meeting']
  }
});

// Event proposal model
const EventProposal = mongoose.model('EventProposal', eventProposalSchema);

module.exports = EventProposal;
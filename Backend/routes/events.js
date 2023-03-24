const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")


router.post('/createevent', (req, res) => {
    const { eventName, placeOfEvent,proposalType, eventType,budget,fromDate,toDate, description, image,foodPreferences,events } = req.body;
    if (!eventName|| !placeOfEvent|| !proposalType|| !eventType,budget|| !fromDate|| !toDate || !description|| !foodPreferences|| !events) {
        return res.status(422).json({ error: "please add all the field" })
    }
    res.json({message:"sucessfully posted"})

})


module.exports=router
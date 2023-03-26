const express = require('express');
const router = express.Router();
const proposalSchema = require('../schemas/proposal');

// posting data
router.post('/createProposal', async (req, res) => {
    try {
        const { eventName, place, proposalType, eventType, budget, date_from, date_to, description,
            albums, food, events } = req.body;        
        if (!eventName) {
            return res.status(404).json({
                status: "failed",
                error: "enter all fields"
            })
        }
        else {
            req.vendor
            const proposal = await proposalSchema.create({
                eventName, place, proposalType, eventType, budget, date_from, date_to, description,
                albums, food, events,
                postedBy: req.user
            });
            return res.status(200).json({
                status: "success",
                proposal
            })
        }
    }
    catch (e) {
        return res.status(422).json({
            status: 'failure',
            message: e.message
        })
    }
})


router.get('/findAllProposal', async(req,res)=>{

    try {
        const data = await proposalSchema.find().populate('postedBy')
        res.status(200).json({
            data
        })
    } catch (error) {
        res.status(400).send('Error in fetch proposals')
    }
})










module.exports=router
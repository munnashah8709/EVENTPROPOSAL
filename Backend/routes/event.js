const express = require('express');
const router = express.Router();
const proposalSchema = require('../schemas/proposal');
const requireLogin=require("../middleware/requireLogin")

// posting data
router.post('/createProposal',requireLogin, async (req, res) => {
    try {
        const { eventName, place, proposalType, eventType, budget, date_from, date_to, description,
            albums, food, events } = req.body;        
        if (!eventName ||! place||!proposalType||!eventType||!budget||!date_from||!date_to||!description ||! albums ||! food ||! events) {
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


router.get('/allProposal', requireLogin, async (req, res) => {
    try {
        const data = await proposalSchema.find({ postedBy: req.user._id }).populate('postedBy', "_id name");        
        return res.status(200).json({
            status: "success",
            data
        })
    }
    catch (e) {
        res.status(422).json({
            status: "failure",
            error: e.error,
        })
    }
})

// find on behalf of id
router.get('/proposal/:id', async (req, res) => {
    try {
        const data = await proposalSchema.findOne({ _id: req.params.id });
        return res.status(200).json({
            status: "success",
            data
        })
    }
    catch (e) {
        res.status(422).json({
            status: "failure",
            error: e.error
        })
    }
})

// update proposal
router.put('/update/:id', async (req, res) => {
    try {
        let data = await proposalSchema.findByIdAndUpdate({ _id: req.params.id }, req.body);
        let newdata = await proposalSchema.findOne({ _id: req.params.id });
        return res.status(200).json({
            message: "updated successfully",
            newdata
        })
    }
    catch (e) {
        res.status(422).json({
            status: "failure",
            error: e.error
        })
    }
})

// delete proposal
router.delete('/delete/:id', async (req, res) => {
    try {
        const data = await proposalSchema.findOne({ _id: req.params.id })
        data.remove()
        return res.status(200).json({
            message: "post deleted successfully"
        })

    }
    catch (e) {
        res.status(422).json({
            status: "failure",
            error: e.error
        })
    }
})

router.get('/findAllProposal',async(req,res)=>{
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
const express=require('express')
const app=express()
const PORT=8080;
require("./connection/connection")

app.get("/user", (req, res)=>{
    res.send("this is get api")
})


app.listen(PORT, ()=>{
    console.log("server starting on port "+ PORT)
})
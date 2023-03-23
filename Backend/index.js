const express=require('express')
const app=express()
const PORT=8080;
require("./connection/connection")
require("./model/user")
require("./model/vendor")
require("./model/event")

app.use(express.json())
app.use(require("./routes/users"))
app.use(require("./routes/vendors"))
app.use(require("./routes/events"))

app.listen(PORT, ()=>{
    console.log("server starting on port "+ PORT)
})
const express = require("express");
const taskRouter = require("./routes/TaskRoutes")
const app = express();

const cors = require("cors")
app.use(cors())
app.use(express.urlencoded());
app.use(express.json())

app.get("/",async(req,res)=>{

res.send({"Name":"Abhishek"})
})


app.use("/task",taskRouter)
app.listen(3000,()=>{
    console.log("connected");
})

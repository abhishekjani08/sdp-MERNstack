//wasl2 and docker
const express = require("express")

const mongoose=require("mongoose")
const todos = require("./todos")
mongoose.connect("mongodb://127.0.0.1:27017/sdp_db", (error)=>{
    if(error)
        console.log("connection error",error)
    else
        console.log("connnection established")
})
const app= express()
app.get("/greetings",(req,res)=>{
    res.status(201).send("Hello world")
})

app.get("/todos.js", (req,res)=>{
    const newTodo = req.body

    return Promise.resolve()
        .then(()=>{
            if(!newTodo.title)
                throw Error("Title not found")  
            return Todo.create(newTodo)

        })
        .then(data=>{
                res.status(201).json({
                    message:"Todo Created"

                })
        })
        .catch({

        })
})

app.post("/todos.js", (req,res)=>{
    res.status(201).json({
       "message":"todo is created"
    })
})

app.listen(8000,()=>{
    console.log("server is running on port no : 8000")
})
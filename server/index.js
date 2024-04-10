const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const todomodel=require('./todo')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/test')

app.get("/",(req,res)=>{
    todomodel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.post("/",async(req,res)=>{
    const name=req.body.name;
    todomodel.create({
        name:name
    }).then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.delete('/:id',(req,res)=>{
    const {id}=req.params;
    todomodel.findByIdAndDelete({_id:id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.listen(3000,()=>{
    console.log("SERVER STARTED")
})
const mongoose = require('mongoose')

const todoschema=new mongoose.Schema({
    name:String,
})

const todomodel=mongoose.model("todos",todoschema)
module.exports=todomodel
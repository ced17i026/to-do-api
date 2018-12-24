//here is all the schema we want to have for our dataBase
var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: "Name cannot be Left Blank"
    },
    completed:{
        type: Boolean,
        default: false
    },
    created_date:{
        type: Date,
        default: Date.now()
    }
})
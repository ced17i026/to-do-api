var db = require("../models");


exports.listData = function(req,res){
    db.todo.find()
    .then((data)=>res.json(data))
    .catch((err)=>console.log(err));
};

exports.InsertData = function(req,res){
    db.todo.create(req.body)
    .then(data=>{
        res.send(data);
    })
    .catch((err)=>{
        console.log(err);
    });
};

exports.updateData = function(req,res){
    db.todo.findOneAndUpdate({_id:req.params.todoId},req.body,{new: true})
    .then((todo)=>res.send(todo))
    .catch((err)=>res.send(err));
};

exports.deleteData = function(req,res){
    db.todo.deleteOne({_id:req.params.todoId})
    .then((data)=>res.redirect('/'))
    .catch((err)=>console.log(err));
};

module.exports = exports;
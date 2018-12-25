var express = require("express");
var app = express.Router();
var db = require("../models/index");
var helper = require('../helper/todosfunc');

app.route('/')
    .get(helper.listData)
    .post(helper.InsertData);
    
app.route('/:todoId')
    .put(helper.updateData)
    .delete(helper.deleteData);

module.exports = app;
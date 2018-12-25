var express = require("express"),
    app = express(),
    todos = require("./routes/todos"),
    bodyParser = require("body-parser");
app.use(express.static(__dirname+'/views'));
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.render("index.html");
});
app.use('/api/todos',todos);
app.listen(process.env.PORT,function(){
    console.log("Server is Running....");
});

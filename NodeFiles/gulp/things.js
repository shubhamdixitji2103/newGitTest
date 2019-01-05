//New files routes are created and Express.Router are created to Avoid tediousness
var express = require('express');
var router = express.Router();

router.get('/',function(req,res) //   /hello page //#Routed to  /hello page this isa routing
        {
     res.send("coming from Things.js!!!!!");
 });

router.post('/',function(req,res) //   /hello page //#Routed to  /hello page this isa routing
        {
     res.send(" POST coming from Things.js!!!!!");
 }); 

modules.exports=router; 
 
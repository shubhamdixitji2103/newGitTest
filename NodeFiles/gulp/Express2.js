/* ID only 
var express = require('express');
var app = express();
 app.get('/:id',function(req,res)
        {
     res.send("the id you specified is "+req.params.id);
 });

app.listen(3045); */
//Express2.js

/* Name only
var express = require('express');
var app = express();
 app.get('/:name',function(req,res)
        {
     res.send("the name you specified is "+req.params.name);
 });

app.listen(3045); */


//Name and Id both
/* var express = require('express');
var app = express();
 app.get('/:name/:id',function(req,res)
        {
     res.send("the name you specified is "+req.params.name+" & the id you specified is "+req.params.id);
 });

app.listen(3045); */

//Regex and Validator page
/* var express = require('express');
var app = express();
 app.get('/:id([0-9]{4})',function(req,res) //THIS IS ONLY GOING TO TAKE THOSE PAGES THAT ARE REGEX Ones here with four digits
        {
     res.send("The id you specified is "+req.params.id+" PAAJI!");
 });

 
app.get('*',function(req,res) //THIS Gives search other then trhe specified one, this one should only be placed after all the allowed routes have been exhausted 
        {
     res.send("Ye page to nahi mila PAAJI!, 4 digit wala search karo na ");
 });
 

app.listen(3045); */
/* var express = require('express');
var app = express();
 app.get('/hello',function(req,res) //   /hello page //#Routed to  /hello page this isa routing
        {
     res.send("Express Started successfully Shubham on 3045!");
 });
 
 Expressjs1.js
 K:\Javascript\NodeFiles\gulp
 
 http://localhost:3045/hello

app.listen(3045); */

/*var express = require('express');
var app = express();
 app.all('/test',function(req,res) //   /hello page
        {
     res.send("HTTP DOENT HAVE ANY EFFECT ON THIS ROUTE");
 });


app.listen(3045); */ 
var express = require('express');
var app = express();
var things = require('./things.js');
 app.use('/things',things);
app.listen(3045); 
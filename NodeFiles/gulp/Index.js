 /* var express = require('express');
var app = express();
 app.get('/',function(req,res)
        {
     res.send("Express Started successfully Shubham!");
 });

app.listen(3045); */

/*
var express = require('express');
var app = express();

app.set('view engine','pug');
app.set('gulp','./gulp');
app.get('/',function(req,res){
    res.render('First_view');
});
app.listen(3045);
*/


//DYNAMIC Variable PASSING 1
 /*var express = require('express');
var app = express();

app.set('view engine','pug');
app.set('gulp','./gulp');
app.get('/dynamic_view',function(req,res){
    res.render('dynamic',{
        name: "Google",
        url : "http://www.google.com" // will be seen at : http://localhost:3045/dynamic_view
    });
});
app.listen(3045); */
var express = require('express');
var app = express();
app.set('view engine','pug');
app.set('gulp','./gulp');
app.use(express.static('public'));
app.get('/home',function(req,res){
    res.render('Static');
});
app.listen(3045);
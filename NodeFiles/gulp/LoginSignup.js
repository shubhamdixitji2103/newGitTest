 var express = require('express');
var app = express();

app.set('view engine','pug');
app.set('gulp','./gulp');
app.get('/dynamic_view',function(req,res){
    res.render('LoginSignup',{
        name: "Google",
        url : "http://www.google.com" ,// will be seen at : http://localhost:3045/dynamic_view
        user : {name1 :"Ayush", age : "20"}
    });
});
app.listen(3045); 
//LoginSignup.js
//let
/* let x=1;
console.log("First x "+x)
{
    let x = 2;
    console.log("Second x "+x);
}
console.log("Third x "+x); */

//var
/* var x=1;
console.log("First x "+x)
{
    var x = 2;
    console.log("Second x "+x);
}
console.log("Third x "+x); */ 
//Error encountered because var dont treat variables out of scope 

//This keyword
/*var obj = {a : 'Custom'};

var a = 'Global';

function whatsThis()
{
    console.log(this.a);   
}
whatsThis(); // Global
whatsThis.call(obj); // Custom
whatsThis.apply(obj); // Custom */


//CONST keyword,  It can not be reassigned
/* const a = 78;
try{
a=45;
}
catch(Error){
    console.log(Error);
}
console.log(a); */
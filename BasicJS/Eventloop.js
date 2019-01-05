/* const s = new Date().getSeconds();
setTimeout(function()
          {
    console.log("Ran After "+(new Date().getSeconds()-s)+" Seconds");
    
},500
          );

while(true)
    {
        if(new Date().getSeconds()-s >= 2)
            {
                console.log("Good , Looped for 2 Seconds");
                break;
            }
        
    }
    */

/* Stack Trace */
/* function foo()
{
 throw new Error("Stack Ban gaya");    
}
function bar()
{
   foo();
}
function baz()
{
    bar();
}
function StackStart()
{
    baz();
}
StackStart(); */

 /* 
 // cALL STACK EXCEEDED
 function A()
{
    return A();
}
A(); */

//Asynchronus call
console.log("Starts");

setTimeout(function cb()
          {
    console.log("Middle");
});
console.log("Ends");
setTimeout(function cb1()
          {
    console.log("Middle1");
},00);
//This was the Essence of Event Loop
/* With this mechanism, JS gives an illusion of being a Multi threaded Language */
/* Event Queue----->Stack------>WebAPI for 5000 Ms----->Event Queue------>Stack */ 
/* Call Back is nothing but the setTimeout function be called again once the main stack is finished with its execution. */

function greeting(name)
{
    alert("Hello "+name);    
}

function processUserInput(callback)
{
    var name = prompt("Please Enter your name");
    callback(name);
}
processUserInput(greeting);
//Create a promise
let myFirstPromise = new Promise((resolve,reject) => {
    
    setTimeout(function(){
               
               resolve("Sucess");
            
               },250);
});

myFirstPromise.then((successMessage)=>{
    
    console.log("Yay "+successMessage);
});
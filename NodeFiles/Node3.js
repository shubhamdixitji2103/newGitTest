var shubham=
    {
        printname : function(){console.log(this===shubham)},
        
        
    };
shubham.printname();


function worthless()
{
    console.log(this===global);
}

worthless();
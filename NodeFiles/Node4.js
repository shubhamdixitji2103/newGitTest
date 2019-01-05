//Prototyping

function Person(name)
{
    this.name = name;
    
    
}

Person.prototype={
    greet : function(){console.log("Hello am prototype wala function "+this.name)}
    
};

var frank = new Person("Shubham Dixit");
frank.greet();


//Inheritance With Prototypes

/* let  f = function(){
    this.a=1;
    this.b=2;
}
let g= new f();
f.prototype.b=3;
f.prototype.c=4;

console.log(g.a);
console.log(g.b); //Display of 2 and not 3 means property shadowings //as property Parent wali dont permit it.
console.log(g.c); /*Parent me c property nahi hai but prototype me hai to prototype me se copy kardo
*/ 
/* console.log(g.d); Naa Parent object me hai na Prototype me hai to undefined to hona hi hai bhaiyon */




//Inheriting  Methods
var f=
{
    a : 20,
    m : function(){
        return this.a+2;
    }
    
};
console.log(f.m());
var o =Object.create(f); //Value is 22
o.a=45;
 console.log(o.m()); //Vlue is 47 After Inheriting, This points to Current Object
console.log(f.isPrototypeOf)

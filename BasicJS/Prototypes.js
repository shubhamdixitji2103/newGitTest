function Person(name,age,height){
    this.name =name;
    this.age=age;
    this.height=height;

}
/* Function.Prototype---->Person.Prototype-----father */
Person.prototype.getName=function(name){return "Name is "+this.name}; //Create a prototype of Function Person




let father = new Person("PD",50,166); 
let  mother = new Person("VD",45,187);//father Also inherit getName
Person.prototype.getAge=function(age){return "age is "+this.age};
console.log(father.getName(father.name));
console.log(mother.getName(mother.name));
console.log(mother.getAge());
console.log(father.getAge());
console.log(Function.prototype.length);
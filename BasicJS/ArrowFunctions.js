 /* var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];*/

/* console.log(materials.map(material => material.length)); */

/* shorter functions and no existence of this keyword. */

/* console.log(materials.map(x=>x.length)); */


//BASIC FUNCTIONS TO ARROW FUNCTIONS
/*const sayhello =function(name){
    
    return "Hey There, "+name+" !";
}
console.log(sayhello("Dixit")); */




/*var sayhello =(name)=>('Hey There '+name);  //Remove Function Step 
console.log(sayhello('Dixit')); */

//CODE IS DRASTICALLY Reduced to a line
/* const todos = [
    {title: 'Buy Bread', isDone : true},{title: 'GO Gym', isDone : true},{title: 'Record youtube VDO', isDone : false}
];

const thingsDone =todos.filter((todo)=>todo.isDone==true);
console.log(thingsDone);
*/
//Assignment

const todos = [
    {title : 'Go Office', isDone : false},{title : 'JS Learn', isDone : true},{title : 'The Hindu', isDone : true },{title : 'Agile Training', isDone : false},{title : 'Breakfast', isDone :true},{title : 'Ghar call', isDone : false}
]
const obj = new todos();
obj = todos.filter((todo)=> todo.isDone==false);
console.log();


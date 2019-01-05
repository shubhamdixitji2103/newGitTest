
/*console.log(today.getDate());
console.log(today.getDay());
console.log(today.getFullYear());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getMonth());*/



function myFunction()
{
    var today = new Date();
     var date =("Date : "+(today.getDate())+"-"+(today.getMonth()+1)+"-"+(today.getFullYear()));  
    var y= ("Time : "+(today.getHours())+":"+(today.getMinutes())+":"+(today.getSeconds()));
  return date;
}


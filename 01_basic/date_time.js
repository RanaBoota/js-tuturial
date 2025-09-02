let mydate=new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toLocaleString());

let newdate= new Date()
console.log(newdate.getMonth()+1);

newdate.toLocaleString('default',{
    weekday: "long"
})

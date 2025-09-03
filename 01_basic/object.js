// Object literal
let mysym=Symbol("key1")

let jsuser={
    name:"Haider",
    "full name":"Haider Ali",
    [mysym]:"mykey1",
    age:18,
    location:"jaranwala",
    email:"boota106@gmail.com",
    lastloginday:["Monday", "Saturday"]

}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mysym]);

// jsuser.email="boota123@gmail.com";
// Object.freeze(jsuser)
// jsuser.email="haiderali@.com"
// console.log(jsuser);

// jsuser.greeting=function () {
//     console.log("Hello User");
    
// }
// jsuser.greetingtwo=function (params) {
//     console.log(`Hello User ${this.name}`);
    

// }
// console.log(jsuser.greeting());
// console.log(jsuser.greetingtwo());



// ++++++++++++++++ Object sigleton +++++++++++++
// const tinderuser=new Object()  singleton object

const tinderuser={}

tinderuser.id="123abc"
tinderuser.name="Bravo"
tinderuser.islogged="false"

// console.log(tinderuser);

const regularname={
    email:"some123@gmail.come",
    fullname:{
name:{
firstname:"Boota",
lastname:"Ashraf"
}
    }
}
// console.log(regularname.fullname.name.firstname);

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}
// const obj3= Object.assign({}, obj1, obj2)
const obj3={...obj1, ...obj2}
// console.log(obj3);

const user=[
{
    id:1,
    email:"fdsa@gmail.com"
},
{
    id:1,
    email:"fdsa@gmail.com"
},
{
    id:1,
    email:"fdsa@gmail.com"
},
{
    id:1,
    email:"fdsa@gmail.com"
}
]

console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('islogged'));



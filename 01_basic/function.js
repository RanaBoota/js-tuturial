// function addtwonumber(number1, number2) {
//     console.log(number1 + number2);
    
// }
function addtwonumber(number1, number2) {
    let result=number1 + number2
    return result
    
}
const result=addtwonumber(4, 5)
// console.log("Result", result);

function loginuser(usrename) {
    if (usrename===undefined) {
        console.log("Please enter a User name");
        return
    }
    return `${usrename} just login`
}
// console.log(loginuser("Tayyab"));
// console.log(loginuser());

function calculatecardprice(...num1) {
    return num1
 }
// console.log(calculatecardprice(200, 400, 5000, 20000));

const user={
    username:"Boota",
      price:200
}

function handleobject(anyobject) {
    console.log(`Usre name is ${anyobject.username} and price for ${anyobject.price}`);
    
}
handleobject({
    username:"sam",
    price:"300"
})

const newarr=[200,400, 500]

function returnsecondvalue(getarr){
return getarr;
}

console.log(returnsecondvalue(newarr))
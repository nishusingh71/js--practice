

function syMyName(){
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("U");
}
syMyName();

function addTwoNumbers(num1,num2){
    let res=num1+num2
    return res
}
console.log(addTwoNumbers(4,"6"));
console.log(addTwoNumbers(4,"a"));
console.log(addTwoNumbers(4,null));

function loginUserMessages(usser){
    if(!usser){
        console.log("please enter a username")
        return
    }
    return `${usser} just logged in`
}
console.log(loginUserMessages("nishu"));
console.log(loginUserMessages());

function calcCartPrice(val1,val2,...num1){//rest operator
return num1
}
console.log(calcCartPrice(200,400,500,2000))

const user={
    username:"nishu",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username:"sam",
    price:488
})

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([200,400,500,1000]));


//arrow fuc
const users={
    username:"nishu",
    price:999,
    
    welcomeMessage:function(){
        consolelog(`${this.username}, welcome to web`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

console.log(this);



// function chai(){
//     let username="nishu"
//     console.log(this.username);
// }

const chai =() =>{
    let username="nishu"
    console.log(this);
}
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
const addTwo=(num1,num2)=>({username:"nishu"})
// const addTwo=(num1,num2)=>num1+num2
// const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(3,4))

//Invoked Function
//IIFE
// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
//Singleton- made through Constructor






//Object literals
// Object.create
const mySym=Symbol("key1")
const JsUser={
    name:"Hitesh",
    age:18,
    [mySym]:"myKey1",
    location:"Noida",
    email:"ns@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser.mySym);
console.log(JsUser[mySym]);

JsUser.email="nschatgpt@gmail.com"
// Object.freeze(JsUser)
JsUser.email="nnns"
console.log(JsUser.email);

JsUser.greeting=function(){
    console.log("hello js user");
}
JsUser.greetingTwo=function(){
    console.log(`hello js user ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());


// const tinderUser=new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Nishu",
            lastname:"Singh"

        }
    }
}
console.log(regularUser.fullname?.userfullname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2,...obj4}
// console.log(obj3);
const users=[
    {
        id:1,
        email:"ns@gmail.com",
    }
]
users[0].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object. values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogged'));
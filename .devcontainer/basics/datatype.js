"use strict"; 
console.log(3+3)
console.log("Nishu")
let name="nishu"
let age=18
let isLoggedIn=false
let state;

// number=>2 to power 53
//bigint
//String=>""
//boolean=> true/false
//null=>standalone value
//undefined=>
//symbol=>unique
//object
console.log(typeof null);//object
console.log(typeof undefined);//undefined

//Memory
//Stack(primitive),Heap(Non-primitive)
let myYoutubeName="androcoding"
let anotherName="myYoutubeName"
console.log(anotherName);
console.log(myYoutubeName);
let userOne={
    email:"nishusgmail.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="nishu@google.com"

console.log(userOne.email);
console.log(userTwo.email);



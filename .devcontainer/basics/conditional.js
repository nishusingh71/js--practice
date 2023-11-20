const temperature=41;
if(temperature===41){
    console.log("less than 50");
}else{
    console.log("greater than 50");
}

const score=200
if(score>100){
    let power="fly"
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`);

const bal=10000
if(bal>500) console.log("test");

if(bal<500){
    console.log("less than 500");
}else if(bal<750){
    console.log("less than 750");
}else{
    console.log("less than 1000000");
}

const userLoggedIn=true
const debitCard=true













//Switch Case
const month=3
switch (month) {
    case 0:
        console.log("jan");
        break;
    case 1:
        console.log("feb");
        break;
    case 2:
        console.log("mar");
        break;
    case 3:
        console.log("apr");
        break;
    case 4:
        console.log("may");
        break;
    case 5:
        console.log("jun");
        break;
    case 6:
        console.log("jul");
        break;
    case 7:
        console.log("aug");
        break;
    case 8:
        console.log("sept");
        break;
    case 9:
        console.log("oct");
        break;
    case 10:
        console.log("nov");
        break;
    case 11:
        console.log("dec");
        break;

    default:
        console.log("Not Match")
        break;
}


//Truthy 

const userEmail="nishus877@gmail.com"
if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");

}

//falsy values
// false, 0,-0,BigInt,0n,"",null,undefined,NaN

// truthy
//"0",'false'," ",[],{}, function(){}
if(userEmail.length===0){
    console.log("Array is empty");
}

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator(??): null undefined

let val1;
// val1=5?? 10

val1=null??10
val1=undefined??15
val1=null??10??20



console.log(val1);


//Terniary Operator
const iceTeaPrice=100
iceTeaPrice<=80?console.log("less than 80"):console.log("more than 80")
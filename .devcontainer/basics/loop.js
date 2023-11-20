//Iterations -for
for (let i = 0; i <=10; i++) {
    const element = i;
    if(element==5){
        console.log(element);
    }
    console.log(element);
    
}

for (let i = 1; i < 10; i++) {
  for (let j = 1; j <10; j++) {
    console.log(i+"*"+j+"="+i*j);
    
  }
    
}

const myHeros=["IronMan","BatMan","SuperMan"]
for (let index = 0; index < myHeros.length; index++) {
    const element = array[index];
    console.log(element);
}

for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log('Detected 5');
        break;
    }
   console.log('Value of i is ${index}');
    
}
for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log('Detected 5');
        continue
    }
   console.log('Value of i is ${index}');
    
}

//While
let index=0
while (index<=10) {
    console.log(index);
    index=index+2
}
let myArray=['flash','batman','superman']
let arr=0
while (arr<myArray.length) {
    console.log(myArray[arr]);
    arr=arr+1
}

let score=1
do {
    console.log(score);
    score++
} while (score<=10);

//High Order

//for of
// ["","",""]
// [{},{},{}]

const arrs=[1,2,3,4,5]
for (const num of arrs) {
    console.log(num);
}

const greetings="heelo world"
for (const greet of greetings) {
    console.log(greet);
}

//Maps
const map=new Map()
map.set('IN',"India")
map.set('Eng',"England")
for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myObject={
    'game1':'NFS',
    'game2':'spiderman'
}
// for (const [key,value] of map) {
//     console.log(key,':-',value);
// } not iterable

//Objects
const Object={
js:'javascript',
cpp:'c++',
rb:'ruby',
swift:'swift by apple',
}
for(const key in Object){
    console.log(Object[key]);
}

const program=["js","java"]
for (const key in program) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }
    console.log(key);
}

//ForEach

const coding =["js","ruby","py"]
coding.forEach(function (item){
    console.log(item);
})
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach((item,index))

const myCooding=[
    {
        langName:"js",
        langFileName:"js",
    },
    {
        langName:"js",
        langFileName:"js",
    },
    {
        langName:"js",
        langFileName:"js",
    },
    {
        langName:"js",
        langFileName:"js",
    },
    {
        langName:"js",
        langFileName:"js",
    }

]

myCooding.forEach((item)=>{
    console.log(item.langName);
})
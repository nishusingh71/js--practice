const name="nishu"
const repoCount=60
// console.log(name+repoCount+"value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName=new String('nishu-singh')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));
const newString=gameName.substring(0,4)
console.log(newString);
const anotherString=gameName.slice(-10,4)
console.log(anotherString);
const newStringOne="   Nishu  "
console.log(newStringOne.trim());
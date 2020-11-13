// CHALLENGE 2
// Types Challenge

/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
*/
var suitColors = ['red', 'black', 'gold']

let ironman = {
    color: suitColors,
    age: 44,
    isMetal: true,
    realName: "Tony Stark",
    codeWord: undefined
}
console.log(ironman);
console.log(ironman.color[2]);
console.log(typeof ironman.age);

/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console 
log 'What are you?!'
*/

let valueToCheck = ironman.codeWord;

if (typeof valueToCheck == "boolean"){
    console.log(valueToCheck + " is a boolean.")
} else if (typeof valueToCheck == "string"){
    console.log(valueToCheck + " is a string.")
} else if (typeof valueToCheck == "object"){
    console.log(valueToCheck + " is an object.")
} else if (typeof valueToCheck == "number"){
    console.log(valueToCheck + " is a number.")
} else
    console.log("What are you?!")
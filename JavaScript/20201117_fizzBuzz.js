/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/
var FB = 30;

if (FB % 3 === 0 && FB % 5 === 0){
    console.log("Fizz Buzz");
} else if (FB % 3 === 0) {
    console.log("Fizz");
} else if (FB % 5 === 0) {
    console.log("Buzz");
} else
    console.log(FB + " is not evenly divided by either 3 nor 5.");


switch (true) {
    case (FB % 3 === 0 && FB % 5 === 0):
        console.log("Fizz Buzz");
        break;
    case (FB % 3 === 0):
        console.log("Fizz");
        break;
    case (FB % 5 === 0):
        console.log("Buzz");
        break;
    default:
        console.log(FB + " is not evenly divided by either 3 nor 5.");
}

// Online ternary solution
var f = FB % 3 === 0, b = FB % 5 === 0;
console.log(f ? b ? "Fizz Buzz" : "Fizz" : b ? "Buzz" : FB);

//Class ternary solution
(fb % 15 === 0)
    ? console.log('Fizz Buzz')
    : (FB % 5 === 0)
        ? console.log('Buzz')
        : (FB % 3 === 0)
            ? console.log('Fizz')
            : console.log(FB);

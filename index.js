
console.log('hello'); //this one printed in console
//variable
//************************************************* */
//cann not be a reselved keyword
//cann not start with a number
//can not contain space or hyphen
let name = "Mosh";
console.log(name);
//to reasign variable use let
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
//not want to reasign use constant cons
const number = 1;
console.log(number);
//************************************************* */
//*Primitives/value type/
let firstName = 'Mosh'; //string literal
let age = 30; //number literal
let isApproved = false //boolean literal
letSelectedColor = null // we use it in situation we want to create value

//function performing a tast
function greet(name, lastname)
{
    console.log('Hello ' + name + ' ' + lastname)
}
greet('john', 'Smith'); //argument
greet('Mary', 'him');
//function calculating a value
function square(number)
{
    return number * number;
}
//let number = square(2);
console.log(square(2)); //square is function call, console also

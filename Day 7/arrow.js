// Tradional JS Function 
function greet(name){
    return "Hello, "+name+"!";

}

console.log(greet("Darlene"));

function isPositive(number){
    return number >=0;
}

//arrow functions

let greetName = (name) => "Hello, "+name+"!";
console.log(greetName("Wyatt"));

let isPositiveNumber =(number) => number >=0;
console.log(isPositiveNumer(5));

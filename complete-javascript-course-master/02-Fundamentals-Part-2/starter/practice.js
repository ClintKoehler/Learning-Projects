'use strict';

// //? FUNCTIONS

// function logger() {
//   console.log('My name is Clint');
// }

// logger();

// function fruitProcessor(apples, oranges) {
//   // const juice = `Juice with ${apples} apples and ${oranges} oranges.`; //
//   // return appleJuice; // another way to do it
//   return `Juice with ${apples} apples and ${oranges} oranges.`;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangJuice = fruitProcessor(2, 4);
// console.log(appleOrangJuice);

// //? FUNCTION DECLARATIONS vs EXPRESSIONS

//! function declaration, can invoke before declaration
function calcAge1(birthYear) {
  return 2022 - birthYear;
}
const age1 = calcAge1(1980);

//! function expression, cannot invoke before declaration
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(1990);

console.log(age1, age2);

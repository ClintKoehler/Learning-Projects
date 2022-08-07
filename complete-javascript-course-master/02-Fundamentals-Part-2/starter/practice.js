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
// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }
// const age1 = calcAge1(1980);

//! function expression, cannot invoke before declaration
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };
// const age2 = calcAge2(1990);

// console.log(age1, age2);

// //? ARROW FUNCTIONS

//! arrow function

// const calcAge3 = (birthYear) => 2022 - birthYear;
// // return is implicit (do not have to specify 'return' unless it is more than one line of code
// const age3 = calcAge3(2000);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1980, 'Clint'));

// //? FUNCTIONS CALLING OTHER FUNCTIONS

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// //? REVIEW

// //! function declaration
// function calcAge(birthYear) {
//   return 2022 - birthYear;
// }

// //! function expression
// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// //! arrow function
// const calcAge = (birthYear) => 2022 - birthYear;

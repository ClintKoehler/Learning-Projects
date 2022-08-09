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

// //? ARRAYS (ARE NOT PRIMITIVE VALUES)

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends); // literal syntax

// // const years = new Array(1991, 1984, 2008, 2020);
// // console.log(years[2]);

// console.log(friends.length); // number of elements in array
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay'; //replaces
// console.log('friends', friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2022 - 1991, 'teacher', friends];
// console.log('jonas', jonas);

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];
// console.log(calcAge(years)); // NaN

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// // can place function calls into array elements
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log('ages', ages);

// //? METHODS (ARRAY OPERATIONS)

// const friends = ['Michael', 'Steven', 'Peter'];

// //! add elements
// const newLength = friends.push('Jay'); // append to the end, it also returns the length to the new variable
// console.log('newLength', newLength);
// console.log('friends', friends);

// friends.unshift('John');
// console.log('friends', friends); // adds element to the beginning, also returns the length

// //! remove elements
// friends.pop(); //removes the last element of array and returns the removed element
// const popped = friends.pop();
// console.log('popped', popped);
// console.log('friends', friends);

// friends.shift(); // removes the first element
// console.log('friends', friends);

// //!
// console.log(friends.indexOf('Steven')); // returns the index that steven is located [1]
// // returns -1 is the element is not there

// console.log(friends.includes('Steven')); // ==> true (strict equality)

// if (friends.includes('Steven')) {
//   console.log('You have a friend called Steven');
// }

// //? OBJECTS

// const jonasArray = [
//   'Jonas',
//   'Schmedtmann',
//   2022 - 1991,
//   'teacher',
//   ['Micheal', 'Peter', 'Steven'],
// ];

//! object literal
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2022 - 1991,
//   job: 'teacher',
//   friends: ['Micheal', 'Peter', 'Steven'],
// }; // OBJECT jonas has 5 properties here

// //? DOT NOTATION

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2022 - 1991,
//   job: 'teacher',
//   friends: ['Micheal', 'Peter', 'Steven'],
// };
// console.log(jonas.lastName);
// console.log(jonas.friends[1]); // can use any expression including functions
// console.log(jonas['lastName']);

// //! does not work with dot notation, only brackets
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = console.log(
//   `What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends`
// );

// if (jonas[interestedIn] > true) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(`Please input a legit value`);
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`
// );

// //? OBJECT METHODS

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYear: 1991,
//   job: 'teacher',
//   friends: ['Micheal', 'Peter', 'Steven'],
//   hasDriversLicense: true,
//! any function attached to an object is a method
//! value is passed in externally
// calcAge: function (birthYear) {
//   return 2022 - birthYear;
// },
//! use 'this' to access object
// calcAge: function () {
//   console.log(this);
//   return 2022 - this.birthYear;
// },
//! calculate and store the result
/*
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year-old ${
      this.job
    }, and he ${
      this.hasDriversLicense
 /       ? 'has a drivers license'
        : 'has no drivers license'
    }.`;
  },
};

// console.log(jonas.calcAge(1980));
// console.log(jonas['calcAge'](1990));
// console.log(jonas.calcAge(jonas.birthYear));
console.log(jonas.calcAge());
console.log(jonas.age);

console.log(jonas.getSummary());
*/

// //? ITERATION FOR LOOPS

'use strict';

//! //////////////DEFAULT PARAMTERES//////////////////
//! //////////////////////////////////////////////////
// const bookings = [];

// //? We set default param using ES6 below
// //? The order of params is important for calculations
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //? Old ES5 way to set default paramaters
//   //? || OR uses first truthy value
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);
// //? undefined is the same as not setting it
// createBooking('LH123', undefined, 1000);

//! //////////////VALUES VS REFERENCE/////////////////
//! //////////////////////////////////////////////////
// //? How primitives and objects work in reference to functions
// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 235495720938,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 235495720938) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport');
//   }
//   console.log(flightNum);
// };

// checkIn(flight, jonas);
// console.log(flight); //* ==> LH234 because it just creates a copy of the original value AKA reference
// //* You have to log flightNum in the function to get the new flightNum value
// console.log(jonas);

// //? Example
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(jonas); //* this makes the passport check fail, obviously
// console.log('jonas object', jonas);
// checkIn(flight, jonas);
// console.log(jonas.passport); //* updated

//? JS ONLY passes by value, not reference

//! ///////FIRST CLASS & HIGHER ORDER FUNCTIONS//////
//! /////////////////////////////////////////////////
//? Functions are treated as values, they are just another type of object
//? Higher order function is a function recieves another function as an arguement OR returns a new function

//! /////FUNCTIONS ACCEPTING CALLBACK FUNCTIONS//////
//! /////////////////////////////////////////////////
// //? Callbacks allow us to create abstraction
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //? Higher order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
//   //* ==> Transformed by: upperFirstWord
// };

// transformer('JaveScript is the best!', upperFirstWord);
// console.log('----------');
// transformer('JaveScript is the best!', oneWord);

// //? JS uses callbacks all the time because:
// //? Splits up functionality
// //? Allows abstraction
// const high5 = function () {
//   console.log('👋');
// };

// //? eventlistener is the high order function here
// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5); //* 3 high5's

//! /////////FUNCTIONS RETURNING FUNCTIONS///////////
//! /////////////////////////////////////////////////
// //? Very usful for functional programing
// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };

// //? Challenge, I swapped greet for greet2
// //? Arrow function version, technically doesn't need brackets or return due to being one line of code
// const greet2 = greeting => {
//   return name => console.log(`${greeting} ${name}`);
// };

// //? greeterHey is now a function
// const greeterHey = greet2('Hey');

// //? This works because of closures (don't worry about it yet)
// greeterHey('Jonas'); //* Hey Jonas
// greeterHey('Steven'); //* Hey Steven

// greet2('Hello')('Jonas'); //* Hello Jonas

//! /////////////CALL AND APPLY METHODS//////////////
//! /////////////////////////////////////////////////
// //? Bookings properties need to all be the same for these examples
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function () {} //? old way
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

// //? book is no longer a method, it is now a function
// //? this will now point to undefined
const book = lufthansa.book;

// // book(23, 'Sarah Williams'); //? Does not work

// //? CALL METHOD
// //? eurowings specifies what .this should point to using the call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// //? APPLY METHOD
// //? Same thing, but does not revieve list of argument, just takes an array of elements
// const flightData = [583, 'George Cooper'];
// book.apply(lufthansa, flightData);
// console.log(lufthansa);

// //? Not used very much anymore because call is better with spread operator
// //? Below is the same as the apply example above
// book.call(lufthansa, ...flightData);

//! //////////////////BIND METHOD////////////////////
//! /////////////////////////////////////////////////
// //? bookEW is now bound to euroWings object
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

//? Below always books a eurowings flight 23 flight
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');

//? With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //? without the bind method this points to button element so you get NaN, this because eventlistener is calling the button element

//? Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//? Null because this keyword is not in fn and does not matter
//? Rate value is now set by bind
//? Remember the order of values matters!
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

//? Below is how you write it with a fn that returns an fn
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

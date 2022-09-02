'use strict';

//! //////////////DEFAULT PARAMTERES//////////////////
//! //////////////////////////////////////////////////
// const bookings = [];

// //? createBooking() builds an object
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers //? Price is dynamically calculated with this default value. Must define parameters used before this parameter, (numPassengers)
// ) {
//   // //? default values ES5 way (OLD WAY)
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
// //? to skip the middle parameter use undefined
// createBooking('LH123', undefined, 1000);

//! //////////////VALUES VS REFERENCE/////////////////
//! //////////////////////////////////////////////////

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 223479754498,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 223479754498) {
//     alert('Check in');
//   } else alert('Wrong passport!');
// };

// checkIn(flight, jonas);
// console.log(flight); //* ==> LH234 (unchanged, PRIMITIVE)
// console.log(jonas); //* ==> Mr. Jonas... (changed, OBJECT)

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas); //* ==> Alert(Wrong passport!)

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

// //? Higher order function (takes in a function)
// const transformer = function (str, fn) {
//   console.log(`Original string ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// //? upperFirstWord and oneWord are CALLBACK functions
// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('👋');
// };

// //? addEventListener is the higher order function
// //? high5 is the callback function
// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5); //* 3 waves

//! /////////FUNCTIONS RETURNING FUNCTIONS///////////
//! /////////////////////////////////////////////////
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// //? Same as above but with arrow function, but more confusing
// const greet = greeting => name => console.log(`${greeting} ${name}`);

// //? greeterHey is now a function, function(name) from above
// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas'); //* ==> Hello Jonas

//! /////////////CALL AND APPLY METHODS//////////////
//! /////////////////////////////////////////////////
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {} // OLD WAY
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Sarah Williams'); //* ==> Error, this is undefined

//? .call makes euroWings replace .this
book.call(euroWings, 23, 'Sarah Williams');
console.log(euroWings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

//? .apply method, used to push values from array
//? not used much anymore, spread is easier
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);

console.log(swiss);

//! //////////////////BIND METHOD////////////////////
//! /////////////////////////////////////////////////
//? bookEW is now bound to euroWings object
const bookEW = book.bind(euroWings);
bookEW(23, 'Steven Williams');

const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

const bookEW23 = book.bind(euroWings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

//? With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

//? Below results in NaN since the function is attached to the .buy object
//? Use bing because the call method would call it immediately?
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//? Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//? Below null is replacing .this, which is not needed in this example
const addVAT = addTax.bind(null, 0.23);
//? Above is same as writing:
//? addVat = value => value + value * 0.23;

console.log(addVAT(100)); //* ==> 123

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100)); //* ==> 123

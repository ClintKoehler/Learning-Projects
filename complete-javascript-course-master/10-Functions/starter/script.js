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
//? Callbacks allow us to create abstraction
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//? Higher order function (takes in a function)
const transformer = function (str, fn) {
  console.log(`Original string ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

//? upperFirstWord and oneWord are CALLBACK functions
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('👋');
};

//? addEventListener is the higher order function
//? high5 is the callback function
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5); //* 3 waves

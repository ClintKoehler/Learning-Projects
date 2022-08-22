'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //? Method (this one takes 2 indexes)
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //? Objects inside of objects, which is inside the restaurant object
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//! /////////////DESTRUCTURING OBJECTS//////////////////
//! ////////////////////////////////////////////////////
//? Destructure object using curly braces {}
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); //* ==> all that info from the object

//? Have different variable names than the property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags); //* ==> the same as example above, but with new variable names

//? Setting DEFAULT values (set to empty array bellow)
//? Very helpful when getting data from API's
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); //* ==> [], [everything in starterMenu]

//? MUTATING variables while destructuring objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// {a, b} = obj; //* ==> Unexpected token
({ a, b } = obj);
console.log(a, b); //* ==> 23 7

//? NESTED objects (we already declared and assigned openingHours)
const { fri } = openingHours;
console.log(fri); //* ==> {open: 11, close: 23}

//! ///////////////DESTRUCTURING ARRAYS/////////////////
//! ////////////////////////////////////////////////////
// //? Slow way
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// //? Fast way (Destructuring)
// const [x, y, z] = arr;
// console.log(x, y, z); //* ==> 2 3 4

// //? Take the first two elements from array
// let [main, secondary] = restaurant.categories;
// console.log(main, secondary); //* ==> Italian Pizzeria
// //? To take the first and third element, [first, , third]

// //? Slow way to switch variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); //* ==> Pizzeria Italian

// //? Fast way to switch variables (Destructuring)
// [main, secondary] = [secondary, main];
// console.log(main, secondary); //* ==> Italian Pizzeria

// //? Receive 2 return values from a function
// console.log(restaurant.order(2, 0)); //* ==> (2) ['Garlic Bread', 'Pizza']
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse); //* ==> Garlic Bread Pizza

// //? Destructure NESTED arrays
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); //* ==> (2) [5, 6]

// const [l, , [m, n]] = nested;
// console.log(l, m, n); //* ==> 2 5 6

// //? Default values (when you don't know the length of the array)
// const [p, q, r] = [8, 9];
// console.log(p, q, r); //* ==> 8 9 undefined
// const [pp = 1, qq = 1, rr = 1] = [8, 9];
// console.log(pp, qq, rr); //* ==> 8 9 1

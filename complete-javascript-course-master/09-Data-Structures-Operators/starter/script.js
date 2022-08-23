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

  //? Method (this one takes 2 indexes)
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //? The objects is immediatley destructured
  //? Arguments need to match, but order does not matter
  //? We also set default values if property is not passed in
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  //? Method to order pasta with exactly 3 ingredients
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  //? otherIndredients puts all the remaining arguments into an array
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//! ////////REST PATTERN and PARAMETERS////////////
//! //////////////////////////////////////////////
// //? ///////////////DESTRUCTURING//////////////////
// //? Used to pack elements into an array

// //? Below is REST because it is on the left of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); //* ==> 1 2 [3, 4, 5]
// // const [a, b, others] = [1, 2, 3, 4, 5]; //* ==> 1 2 3

// //? REST element must be the LAST element
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood); //* ==> Pizza Risotto [Everything in mainMenu and starterMenu]

// //? OBJECTS
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays); //* ==> {thu:, fri:}
// console.log(sat); //* ==> {open: 0, close: 24}

// //? ////////////////FUNCTIONS/////////////////////
// const add = function (...numbers) {
//   console.log(numbers); //* ==> Builds passed #'s to arrays
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x); //* ==> spreads all number into the function

// //? RW Example
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// //* ==> mushrooms
// //* ==> [onion, olives, spinach]

// restaurant.orderPizza('sausage');
// //* ==> sausage
// //* ==> []

//! /////////////SPREAD OPERATOR//////////////////
//! //////////////////////////////////////////////
// //? Used to build new arrays  by unpacking an array or to pass multiple values to a function
// //? Only used where values are seperated by commas
// //? Below is SPREAD because the dots are on the right side of the assignment operator (=)
// const arr = [1, 2, ...[3, 4]];

// const arr = [7, 8, 9];
// //? Bad way to add to array
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr); //* ==> [1, 2, 7, 8, 9]

// //? Good way to add to array
// const goodNewArr = [1, 2, ...arr];
// console.log(goodNewArr); //* ==> [1, 2, 7, 8, 9]
// console.log(...goodNewArr); //* ==> 1 2 7 8 9
// //? If you just added the array
// const newArr = [1, 2, arr];
// console.log(newArr); //* ==> [1, 2, Array(3)]

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu); //* ==> Adds 'Gnocci' to newMenu array with all mainMenu items

// //? COPY array (shallow copy)
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy); //* ==> ['Pizza', 'Pasta', 'Risotto']

// //? JOIN 2 arrays or more into one new array
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //? ITERABLES: strings, arrays, maps, sets
// //? but NOT OBJECTs

// //? Iterate a String
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters); //* ==> [J, o, n, a, s, ' ', S.]
// console.log(...str); //* ==> J o n a s
// // console.log(`${...str}`); //* ==> Unexpected token

// //? RW Example
// // const ingredients = [
// //   prompt(`Let's make pasta! Ingredient 1?`),
// //   prompt(`Let's make pasta! Ingredient 2?`),
// //   prompt(`Let's make pasta! Ingredient 3?`),
// // ];
// // console.log(ingredients);
// // restaurant.orderPasta(...ingredients);

// //? OBJECTS (copy entire restaurant object and add to it)
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name); //* ==> Ristorante Roma
// console.log(restaurant.name); //* ==> Classico Italiano

//! /////////////DESTRUCTURING OBJECTS//////////////////
//! ////////////////////////////////////////////////////
// //? Destructure object using curly braces {}
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories); //* ==> all that info from the object

// //? Have different variable names than the property names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags); //* ==> the same as example above, but with new variable names

// //? Setting DEFAULT values (set to empty array bellow)
// //? Very helpful when getting data from API's
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters); //* ==> [], [everything in starterMenu]

// //? MUTATING variables while destructuring objects
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// // {a, b} = obj; //* ==> Unexpected token
// ({ a, b } = obj);
// console.log(a, b); //* ==> 23 7

// //? NESTED objects (we already declared and assigned openingHours)
// // const { fri } = openingHours;
// // console.log(fri); //* ==> {open: 11, close: 23}
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close); //* ==? 11 23

// //? RW Example... Passes in ONE object
// //? USE CURLY BRACES!!!
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

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

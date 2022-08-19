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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//? OR assignment operator
// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// Below is the same as what is above
// rest1.numGuests ||= 10; // Use ?? to make the 0 work
// rest1.numGuests ??= 10;
// rest2.numGuests ||= 10;

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

//! KNOWLEDGE COALESCING OPERATOR

// restaurant.numGuests = 0;

// const guests = restaurant.numGuests || 10;
// console.log(guests);

//? Nullish: null and undefined (Not 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//! SHORT CIRCUIT

// console.log('-------- OR -------');

//? Use ANY data type, return ANY data type, short circuiting... Returns the first truthy value
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || '23' || null); // ==> Hello

//? The 2 examples below will not work if numGuests is 0
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 20;
// console.log(guests2);

// console.log('-------- AND -------');

// //?  Short circuits when the first value is falsey
// console.log(0 && 'Jonas');
//? If all are true it returns the last value
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'Jonas'); // null

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('Apples', 'Oranges');

//! DESTRUCTURING

//? Spread because on right side of =
//? SPREAD = EXPAND
// const arr = [1, 2, ...[3, 4]]; // [1, 2, 3, 4]

//? Rest syntax becayse on the left side of =
//? REST = COMPRESS
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// rest must be the last element
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

//? Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//! FUNCTIONS

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [123, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach ');
// restaurant.orderPizza('mushrooms');

//? Bad way to add to an array
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

//? Good way to add to an aray with spread operator
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

//? This builds a new array
// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

//? Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

//? Join two or more arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

//? Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

//? Real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

//? Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//////////////////////////////////////
//! Destructuring Objects

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

//? Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//? Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

//? Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// //? Destructuring an array
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//? long hand way to switch variables
// const temp = main;
// main = secondary;
// secondary = temp;

//? Quick way
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //? Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //? Nested destructuring
// const nested = [2, 4, [5, 6]];
//? const [i, , j] = nested;
//? console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //? Default value
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

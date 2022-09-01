'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//! ///////////////STRINGS PART 3//////////////////
//! ///////////////////////////////////////////////
// //? .split method
// console.log('a+very+nice+string'.split('+')); //* ==> [a, very, nice. string]
// console.log('Jonas Schmedtmann'.split(' ')); //* ==> [Jonas, Schmedtmann]

// //? Using split and join with destructuring
// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
// //? .join method
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName); //* ==> Mr. Jonas SCHMEDTMANN

// //? Capitalizes the first letter of every word
// const capitalizName = function (name) {
//   const names = name.split(' '); //* creates arrat
//   const namesUpper = [];

//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper);
// };

// capitalizName('jessica ann smith davis');
// capitalizName('jonas schmedtmann');

// //? Padding a string
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+')); //* ==> ++++++++++Go to gate 31! (entire length of string will be 25, then fill with +)
// console.log('Jonas'.padStart(25, '+')); //* ==> +++++++++++++++++Jonas
// console.log('Jonas'.padEnd(25, '+')); //* ==> Jonas++++++++++
// console.log('Jonas'.padStart(10, '-').padEnd(20, '-')); //* ==> -----Jonas--------

// const maskCreditCard = function (number) {
//   const str = number + ''; //? converts to string
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(545645121598784221654));
// console.log(maskCreditCard('465456421878979878672332')); //* ==> *****************2332

// //? .repeat method
// const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(5)); //* Repeats five times

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
// };

// planesInLine(5); //* ==> There are 5 planes in line ✈️✈️✈️✈️✈️
// planesInLine(3);
// planesInLine(12);

//! ///////////////STRINGS PART 2//////////////////
//! ///////////////////////////////////////////////
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(airline.toLowerCase()); //* Lowercase
// console.log(airline.toUpperCase()); //* Uppercase
// console.log('jonas'.toUpperCase()); //* Uppercase

// //? Fix capitalization in name
// const passenger = 'jonAS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect); //* ==> Jonas

// //? Function I created to fix name case
// function correctCase(name) {
//   const nameLower = name.toLowerCase();
//   console.log(nameLower);
//   const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
//   console.log(nameCorrect);
// }
// correctCase('clINt');

// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// //? .trimStart and .trimEnd can also be useful
// const trimmedEmail = lowerEmail.trim(); //* removes white space
// console.log(trimmedEmail); //* email is now fixed

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail); //* does the same as above
// //? Compare
// console.log(normalizedEmail);
// console.log(email === normalizedEmail); //* true

// //? REPLACING
// const priceGB = '288,97£';
// //? 1st argument what to replace, 2nd with what
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS); //* ==> 288.97$

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// //? Note that replaceAll is now in JS and would work
// console.log(announcement.replace('door', 'gate')); //* only replaced the first door to gate, not the second
// //? Old way, regular expression
// console.log(announcement.replace(/door/g, 'gate')); //* does the same as above. g = global

// //? BOOLEANS, self explanatory
// const plane2 = 'Airbus A320neo';
// console.log(plane2.includes('A320')); //* ==> true
// console.log(plane2.includes('Boeing')); //* ==> false
// console.log(plane2.startsWith('Air')); //* ==> true

// if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
//   console.log('Part of the new Airbus family');
// } //* ==> Part of the new Airbus family

// //? Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

//! ///////////////STRINGS PART 1//////////////////
//! ///////////////////////////////////////////////
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]); //* ==> A
// console.log('B737'[0]); //* ==> B
// console.log(airline.length); //* ==> 16
// console.log('B737'.length); //* ==> 4
// console.log(airline.indexOf('r')); //* ==> 6
// console.log(airline.lastIndexOf('r')); //* ==> 10
// console.log(airline.lastIndexOf('portugal')); //* ==> -1 because it cannot be found in the string (lowercase p)

// console.log(airline.slice(4)); //* ==> Air Portugal, it begins extracting everything from position 4
// console.log(airline.slice(4, 7)); //* ==> Air, it begins extracting everything from position 4 ends at 7

// console.log(airline.slice(0, airline.indexOf(' '))); //* ==> TAP
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //* ==> Portugal. Need to add plus one to remove empty space
// console.log(airline.slice(-2)); //* ==> al, (last 2 letters from Portugal)
// console.log(airline.slice(1, -1)); //* AP Air Portuga (beginning and end)

// //? Example
// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('You got lucky');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas')); //* JS converts strings to objects so you can use methods, then converts back to a string to return your result
// console.log(typeof new String('jonas')); //* ==> object

//! ////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const hours = {
//   //? Example to reference weekdays variable for thu and friday
//   //* thu
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   //* fri
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//? Old way to reference object outside of this object
// openingHours: openingHours,

//? ES6 Enahanced Object Literals
//? We changed the openingHours key to hours
//? hours,

// //? Objects inside of objects, which is inside the restaurant object
// openingHours: {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// },

//   //? Method (this one takes 2 indexes)
//   //? OLD way
//   // order: function (starterIndex, mainIndex) {
//   //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   // },

//   //? ES6 NEW way from above
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   //? The objects is immediatley destructured
//   //? Arguments need to match, but order does not matter
//   //? We also set default values if property is not passed in
//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   //? Method to order pasta with exactly 3 ingredients
//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
//     );
//   },

//   //? otherIndredients puts all the remaining arguments into an array
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

//! ///////////////MAPS ITERATION//////////////////
//! ///////////////////////////////////////////////
// //? Maps are iterable
// //? Same structure as Object.entries (Array of Arrays), first element is the key and the second is value
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again'],
// ]);
// console.log(question); //* ==> creates the map {[]}

// //? Convert object to map
// //? Object.entries converts hours object to iterable
// const hoursMap = new Map(Object.entries(hours));
// console.log(hoursMap); //* ==> creates array of arrays

// //? Quiz app
// //? Access question
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// //? My way
// // answer === 3
// //   ? console.log(question.get(true))
// //   : console.log(question.get(false));

// //? His way
// console.log(question.get(question.get('correct') === answer));

// //? Convert MAP to ARRAY
// console.log([...question]);
// //? .entries is the same as above
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

//! ////////////////////MAPS///////////////////////
//! ///////////////////////////////////////////////
// //? Can have any kind of key including, object and arrays
// const rest = new Map();
// //? Add new element to data structure
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// console.log(rest); //* ==> {<Everything above>}

// //? Chaining additions
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');
// //? Read from a map with .get
// console.log(rest.get('name')); //* ==> Classico Italiano
// console.log(rest.get(true)); //* ==> We are open

// //? Example of booleans as map keys
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //* ==> We are open

// //? Check if map contains a certain key using .has
// console.log(rest.has('categories')); //* ==> true
// rest.delete(2); //* ==> removes 2, Lisbon, Portugal
// console.log(rest);
// console.log(rest.size); //* ==> size
// //? clear everything in the map
// // rest.clear();
// console.log(rest);

// rest.set([1, 2], 'Test');
// console.log(rest); //* ==> adds the array and test to position 7
// console.log(rest.get([1, 2]));

// const arr = [1, 2];
// const myMap = new Map();
// myMap.set(arr, 'I am mapped to an array');
// console.log(myMap.get(arr)); //* ==> I am mapped to an array
// console.log(arr); //* ==> (2) [1,2]

//! ////////////////////SETS///////////////////////
//! ///////////////////////////////////////////////
// //? Below is an array since it is iterable
// //? Values are unique (removes duplicates)
// //? Order of values is irrelevant
// //? Sets do NOT have an index
// //? Sets do not allow you to retrieve individual values
// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(orderSet); //* ==> {Pasta, Pizza, Risotto}

// //? Uterates over the string
// console.log(new Set('Jonas')); //* {J, o, n, a, s}
// console.log(orderSet.size); //* ==> 3
// //? .has to check if element is there or not
// console.log(orderSet.has('Pizza')); //* ==> true
// //? .add to add elements
// orderSet.add('Garlic Bread');
// //? .delete to delete elements
// orderSet.delete('Risotto');
// //? delete ALL elements
// // orderSet.clear()

// //? Looping over a set
// for (const order of orderSet) console.log(order); //* ==> Pasta, Pizza, Garlic Bread

// //? Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
// console.log(staffUnique); //* ==> {Waiter, Chef, Manager}
// //? Convert a set to array
// const staffArray = [...new Set(staff)];
// console.log(staffArray); //* ==> [Waiter, Chef, Manager]
// //? Use .size at the end of the array to find the amount of UNIQUE items
// console.log(new Set('jonassschmedtmann').size); //* ==> 11

//! ///LOOPING OBJECTS: OBJ KEYS, VALUES, ENTRIES//
//! ///////////////////////////////////////////////
// //? Objects are not iterables, but can be iterated over in indirect way
// //? Loop over KEYS (Property Names)
// for (const day of Object.keys(hours)) {
//   console.log(day); //* ==> thu, fri, sat
// }
// console.log(hours); //* ==> {thu: {...}}, ...etc

// //? Property NAMES
// const properties = Object.keys(hours);
// console.log(properties); //* ==> [thu, fri, sat]

// // TODO Practice what is below!!!
// let openStr = `We are open on ${properties.length} days, `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr); //* ==> We are open on 3 days, thu, fri sat,

// //? Property VALUES
// const values = Object.values(hours);
// console.log(values); //* ==> (3) {...}, ...{...} and inside is {open: 12, close: 22}, ...{open: 11, close: 23}

// //? Entire object
// //? ENTRIES = NAMES and VALUES together
// const entries = Object.entries(hours);
// // console.log(entries); //* ==> [Array(2)], ... and in each array 0: thu 1: {open: 12, close: 22}

// // TODO Practice what is below!!!
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// } //* ==> On thu we open at 12 and close at 22
// //* ==> On fri we open at 11 and close at 23
// //* ==> On sat we open at 0 and close at 24

//! //////////////OPTIONAL CHAINING////////////////
//! ///////////////////////////////////////////////
// console.log(restaurant.hours.mon); //* ==> undefined (mon does not exist)
// // console.log(restaurant.hours.mon.open); //* ==> error
// //? Using optional chaining (if mon exists)
// console.log(restaurant.hours.mon?.open); //* ==> undefined
// console.log(restaurant.hours?.mon?.open); //* ==> undefined

// //? RW Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   //? ? = If open exists
//   const open = restaurant.hours[day]?.open ?? `closed`;
//   console.log(`on ${day}, we open at ${open}`);
// }

// //? Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); //* ==> (2) [Focaccia, Pasta]
// console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist'); //* ==> Method does not exist

// //? Arrays
// //? ? Does value on the left exist
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// console.log(users[0]?.name ?? 'User array empty'); //* ==> Jonas

// const users1 = [];
// console.log(users1[0]?.name ?? `User array empty`); //* ==> User array empty

// //? Same as doing old way below
// if (users.length > 0) console.log(users[0].name);
// else console.log('User array empty'); //* ==> Jonas

//! ////////////ENHANCED OBJECT LITERALS///////////
//! ///////////////////////////////////////////////
//? See example in how the restaurant object in function syntax changes and moving hours out of the object, but still being able to reference them and different way to reference each day.

//! /////////////////FOR OF LOOP///////////////////
//! ///////////////////////////////////////////////
// //? Can still use CONTINUE and BREAK
// //? Mostly meant to get just elements, harder to get index
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item); //* ==> Prints each element from both menues

// //? User .entries to get the indexes
// for (const item of menu.entries()) {
//   console.log(item);
// } //* ==> [0, Focaccia], [1, Brushetta], ...etc

// //? i = position [0], element = position [1]
// for (const [i, element] of menu.entries()) {
//   console.log(`${i + 1}: ${element}`);
// } //* ==> 1: Focaccia, 2: Bruschetta, ...etc

// console.log([...menu.entries()]);

//! /////////LOGICAL ASSIGNMENT OPERATORS//////////
//! ///////////////////////////////////////////////
// const rest1 = {
//   name: 'Capri',
//   // numGuests: '20',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };
// //? Now we want to add numGuests to objects without them
// // rest1.numGuests = rest1.numGuests || 10; //* ==> 20
// // rest2.numGuests = rest2.numGuests || 10; //* ==> 10

// //? Same as above using OR ASSIGNMENT operator
// //? If the value is falsey, it assigns a value
// rest2.numGuests ||= 10;
// //? rest1.numGuests ??= 10 since 0 is falsey;
// //? using ||= ==> 10 so ?? is better here
// rest1.numGuests ??= 10;
// console.log(rest1.numGuests); //* ==> 0
// console.log(rest2.numGuests); //* ==> 10

// //? Logical AND operator
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// //? Same as above, 1st is truthy, so second is evaluated
// rest2.owner &&= '<ANONYMOUS>';
// console.log(rest2); //* ==> owner: <ANONYMOUS>

// rest1.owner &&= '<ANONYMOUS>';
// console.log(rest1); //* ==> does not add ANONYMOUS because owner did not exist and short circuits immediately

//! ////////KNOWLEDGE COALESCING OPERATOR//////////
//! ///////////////////////////////////////////////
// //? Use ?? to work with nullish values
// //? Nullish values = null and undefined (Not 0 or '')
// //? So 0 and '' are truthy values for ?? operator
// //? Only triggers with null or undefined
// restaurant.numGuests = 0;
// const guests3 = restaurant.numGuests ?? 10;
// console.log(guests3);

//! ///////////SHORT CIRCUITING////////////////////
//! ///////////////////////////////////////////////
//? Use and return ANY data type, short-circuiting
//? OR operator returns first TRUE value or last value if all are false
// console.log('----OR----');
// console.log(3 || 'Jonas'); //* ==> 3
// console.log('' || 'Jonas'); //* true Jonas
// console.log(true || 0); //* ==? true
// console.log(undefined || null); //* ==> null
// console.log(undefined || 0 || '' || 'Hello' || 23); //* ==> Hello

// //? If restaurant.numbGuests exists ? then result is restaurant.numGuests : if it does not exists then default value of numGuests = 10
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); //* ==> 10

// //? Short circuit to replicate above example
// //? It's 10 in both examples because numGuests does not exist
// //? Neither would work if numGuests was 0 since 0 is flasey
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2); //* ==> 10

// //? AND operator returns the first false value
// //? If all values are true it returns the last one
// console.log('----AND----');
// console.log(0 && 'Jonas'); //* ==> 0
// console.log(7 && 'Jonas'); //* ==> Jonas

// //? orderPizza exists, evaluating as true
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('pepperoni', 'spinach');
// } //* ==> pepperoni [spinach]

// //? same as above using short circuiting. orderPizza exists so it does performs the function
// restaurant.orderPizza && restaurant.orderPizza('pepperoni', 'spinach'); //* ==> pepperoni [spinach]

// ! ////////REST PATTERN and PARAMETERS////////////
// ! //////////////////////////////////////////////
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
// console.log(sat); //* ==> {open: 0, close: 24}
// console.log(weekdays); //* ==> {thu:, fri:}

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
// //? Used to build new arrays by unpacking an array or to pass multiple values to a function
// //? Only used where values are seperated by commas
// //? Below is SPREAD because the dots are on the right side of the assignment operator (=)
// // const arr = [1, 2, ...[3, 4]];
// // console.log(arr); //* ==> [1, 2, 3, 4]

// const arr = [7, 8, 9];

// //? Bad way to add to array
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr); //* ==> [1, 2, 7, 8, 9]

// //? Good way to add to array
// const goodNewArr = [1, 2, ...arr];
// console.log(goodNewArr); //* ==> [1, 2, 7, 8, 9]
// //? Below unpacks the elements from the array
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
// //? menu did not exist before
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
// console.log(restaurant.order(2, 0)); //* ==> ['Garlic Bread', 'Pizza']
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

'use strict';

//! ///////////CALL BACK FUNCTIONS//////////
//! ////////////////////////////////////////
// function morning(name) {
//   return `Good morning ${name.toUpperCase()}`;
// }

// function afternoon(name) {
//   return `Good afternoon ${name.repeat(3)}`;
// }

// function greet(name, callBack) {
//   const myName = 'john';
//   console.log(`${callBack(name)}, my name is ${myName}`);
// }

// greet('bobo', morning);
// greet('peter', afternoon);

//! /////////////ARRAY ITERATORS////////////
//! ////////////////////////////////////////
// const numbers = [0, 1, 2, 3, 4];

// //? Show all functions

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

//! ////////////////FOR EACH////////////////
//! ////////////////////////////////////////
//? Does not return a new array
//? Able to access each element without a loop
// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'susy', age: 30, position: 'the boss' },
// ];

// // function showPerson(person) {
// //   console.log(person.position.toUpperCase());
// // }

// // people.forEach(showPerson);

// people.forEach(function (item) {
//   console.log(item.name.toUpperCase(), item.age, item.position.toUpperCase());
// });

//! ///////////////////MAP//////////////////
//! ////////////////////////////////////////
//? Returns a new array
//? Does not change the size of original array
// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'susy', age: 30, position: 'the boss' },
//   { name: 'anna', age: 35, position: 'the boss' },
// ];

// const ages = people.map(function (person) {
//   return person.age + 20;
// });

// const newPeople = people.map(function (person) {
//   return {
//     firstName: person.name.toUpperCase(),
//     oldAge: person.age + 20,
//   };
// });

// const names = people.map(function (person) {
//   return `<h1>${person.name}</h1>`;
// }); //* ==> [<h1>bob</h1>, ..., ..., ...]

// document.body.innerHTML = names.join('');

// console.log(names);

//! ////////////////FILTER//////////////////
//! ////////////////////////////////////////
//? Does return a new array
//? Can manipulate the size of new array
//? Returns based on condition
// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'susy', age: 30, position: 'the boss' },
//   { name: 'anna', age: 35, position: 'the boss' },
// ];

// const youngPeople = people.filter(function (person) {
//   return person.age <= 25;
// });

// const developers = people.filter(function (person) {
//   return person.position === 'developer';
// });

// console.log(developers); //* ==> bob object, would return empty array if there were no 'developers'
// console.log(youngPeople); //* ==> bob, peter objects

//! ////////////////FIND////////////////////
//! ////////////////////////////////////////
//? returns single instance, this case objects
//? returns FIRST match, if no match, undefined
//? great for getting unique values
//? bad for values that are repeating
//? Great for APIs
// const people = [
//   { name: 'bob', age: 20, position: 'developer', id: 1 },
//   { name: 'peter', age: 25, position: 'designer', id: 2 },
//   { name: 'susy', age: 30, position: 'the boss', id: 3 },
//   { name: 'anna', age: 35, position: 'the boss', id: 4 },
// ];

// const names = ['bob', 'peter', 'suzy'];
// console.log(
//   names.find(function (name) {
//     return name === 'bob';
//   })
// ); //* ==> bob because names is all strings

// const person = people.find(function (person) {
//   return person.id === 3;
// });

// console.log(person); //* ==> suzy object
// console.log(person.name); //* ==> susy

// const person2 = people.filter(function (person) {
//   return person.id === 3;
// });

// console.log(person2); //* ==> susy array
// console.log(person2[0].name); //* ==> susy

//! //////////////REDUCE////////////////////
//! ////////////////////////////////////////
//? iterates, callback function
//? reduces to a single value - number, array, object
//? 1 param ('acc') - total of all calculations
//? 2 param ('curr') - current iteration/value
const people = [
  { name: 'bob', age: 20, position: 'developer', id: 1, salary: 200 },
  { name: 'peter', age: 25, position: 'designer', id: 2, salary: 300 },
  { name: 'susy', age: 30, position: 'the boss', id: 3, salary: 500 },
  { name: 'anna', age: 35, position: 'the boss', id: 4, salary: 500 },
];

const total = people.reduce(function (acc, currItem) {
  //! ALWAYS RETURN THE ACCUMALATOR (ACC)
  console.log(`total ${acc}`);
  console.log(`current money: ${currItem.salary}`);
  acc += currItem.salary;
  return acc;
}, 0);

console.log(total); //* ==> 1500

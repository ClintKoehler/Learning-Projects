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
const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'the boss' },
];

const ages = people.map(function (person) {
  return person.age + 20;
});

const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

const names = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
}); //* ==> [<h1>bob</h1>, ..., ..., ...]

document.body.innerHTML = names.join('');

console.log(names);

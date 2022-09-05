'use strict';

// function myFunction(a, n) {
//   return a.charAt(n - 1);
// }

// console.log(myFunction('gfedcba', 3)); //* e

//!
// function myFunction(a) {
//   return console.log(typeof a);
// }

// myFunction(['array']); //* object
// myFunction(false); //* boolean

//!

// function myFunction(a) {
//   return a.slice(0, 3);
// }

// console.log(myFunction([99, 1, 1])); //* [99, 1, 1]
// console.log(myFunction([5, 4, 3, 2, 1, 0])); //* [5, 4, 3]
// console.log(myFunction([1, 2, 3, 4])); //* [1, 2, 3]

//!
// function myFunction(a, n) {
//   return a[n - 1];
// }

// console.log(myFunction([10, 9, 8, 7, 6], 5)); //* 6

//!
// function myFunction(a, b) {
//   return a < b ? a / b : a * b;
// }

// console.log(myFunction(10, 100)); //* 0.1

//!
// function myFunction(arr) {
//   return arr.sort();
// }

// console.log(myFunction(['b', 'c', 'd', 'a'])); //* [a, b, c, d]

//!
// function myFunction(a) {
//   return a.slice(3);
// }

// console.log(myFunction([5, 4, 3, 2, 1, 0])); //* [2, 1, 0]

//!
// function myFunction(a) {
//   return a.slice(3);
// }

// console.log(myFunction('fgedcba')); //* dcba

//!
// function myFunction(a) {
//   return a.slice(0, -3);
// }

// console.log(myFunction('fgedcba')); //* fged
// console.log(myFunction('1234')); //* 1

//!
// function myFunction(a, b) {
//   return (a / 100) * b;
// }

// console.log(myFunction(100, 50)); //* 50
// console.log(myFunction(10, 1)); //* 0.1
// console.log(myFunction(500, 25)); //* 125

//!
// function myFunction(a) {
//   return a.slice(0, a.length / 2);
// }

// console.log(myFunction('abcdefgh')); //* abcd
// console.log(myFunction('1234')); //* 12

//!
// function myFunction(a, b) {
//   return a.includes(b) ? b + a : a + b;
// }

// //? Their way:
// function myFunction(a, b) {
//   return a.indexOf(b) === -1 ? a + b : b + a;
// }

// console.log(myFunction('cheese', 'cake')); //* cheesecake
// console.log(myFunction('lips', 's')); //* slips
// console.log(myFunction(' think, therefore I am', 'I')); //* I think, therefore I am

//!
function myFunction(a) {
  return a.toFixed(2);
}

console.log(myFunction(2.12397)); //* 2.12
console.log(myFunction(3.136)); //* 3.14
console.log(myFunction(1.12397)); //* 1.12
console.log(myFunction(26.1379)); //* 26.14

//!

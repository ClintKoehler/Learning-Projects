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
// function myFunction(a) {
//   return a.toFixed(2);
// }

// console.log(myFunction(2.12397)); //* 2.12
// console.log(myFunction(3.136)); //* 3.14
// console.log(myFunction(1.12397)); //* 1.12
// console.log(myFunction(26.1379)); //* 26.14

//!
// function myFunction(a, b, c, d, e, f) {
//   return (((a + b - c) * d) / e) ** f;
// }

// console.log(myFunction(6, 5, 4, 3, 2, 1)); //* 10.5
// console.log(myFunction(6, 2, 1, 4, 2, 3)); //* 2744
// console.log(myFunction(2, 3, 6, 4, 2, 3)); //* -8

//!
// function myFunction(a) {
//   return a === Math.floor(a) ? true : false;
// }

// //? Their method
// function myFunction(a) {
//   return a - Math.floor(a) === 0;
// }

// console.log(myFunction(4)); //* true
// console.log(myFunction(1.123)); //* false
// console.log(myFunction(1048)); //* true
// console.log(myFunction(10.48)); //* false

//!
// function myFunction(a) {
//   return a % 2 === 0 ? true : false;
// }

// //? Their method
// function myFunction(a) {
//   return a % 2 === 0;
// }

// console.log(myFunction(10)); //* true
// console.log(myFunction(-4)); //* true
// console.log(myFunction(5)); //* false
// console.log(myFunction(-111)); //* false

//!
// function myFunction(a, b) {
//   return b.split(a).length - 1;
// }

// console.log(
//   myFunction('m', 'how many times does the character occur in this sentence?')
// ); //* 2
// console.log(
//   myFunction('h', 'how many times does the character occur in this sentence?')
// ); //* 4
// console.log(
//   myFunction('?', 'how many times does the character occur in this sentence?')
// ); //* 1
// console.log(
//   myFunction('z', 'how many times does the character occur in this sentence?')
// ); //* 0

//!
// function nextChar(c) {
//   return String.fromCharCode(c.charCodeAt(0) + 1);
// }

// function myFunction(str) {
//   let word = '';
//   for (let i = 0; i < str.length; i++) {
//     word += String.fromCharCode(str[i].charCodeAt(0) + 1);
//   }
//   return word;
// }

// //? Their solution
// function myFunction(str) {
//   const arr = [...str];
//   const correctedArray = arr.map((e) =>
//     String.fromCharCode(e.charCodeAt() + 1)
//   );
//   return correctedArray.join('');
// }

// console.log(myFunction('bnchmf')); //* coding
// console.log(myFunction('bgddrd')); //* cheese
// console.log(myFunction('sdrshmf')); //* testing

//!

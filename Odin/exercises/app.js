// for (let hash = '#'; hash.length <= 7; hash += '#') {
//   console.log(hash);
// }

////////////////////////////////////////////////

// // adds 7
// function add7(number) {
//   return number + 7;
// }

// sum = add7(10);
// console.log(sum);

// // multiply two numbers
// function multiply(num1, num2) {
//   return num1 * num2;
// }

// let sum2 = multiply(10, 40);
// console.log(sum2);

// // join() takes array items and joins into a single string
// const myArray = ['I', 'love', 'chocolate', 'frogs'];
// const madeAString = myArray.join(' ');
// console.log(madeAString);

// // generates a random number between 0 and 1
// const myNumber = Math.random();
// console.log(myNumber);

// // Chris is the default parameter if none is given
// function hello(name = 'Chris') {
//   console.log(`Hello ${name}!`);
// }

// hello('Ari');
// hello();

// // default argument example
// function showMessage(from, text = 'no text given') {
//   alert(from + ': ' + text);
// }

// showMessage('Ann'); // Ann: no text given

// ANOTHER EXAMPLE
// function showMessage(text) {
//   // ...

//   if (text === undefined) {
//     // if the parameter is missing
//     text = 'empty message';
//   }

//   alert(text);
// }

// showMessage(); // empty message

// ANOTHER EXAMPLE
// function showMessage(text) {
//   // if text is undefined or otherwise falsy, set it to 'empty'
//   text = text || 'empty';

//   alert(text);
// }

// showMessage(); // empty message
// //
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   'Do you agree?',
//   function () {
//     alert('You agreed.');
//   },
//   function () {
//     alert('You canceled the execution.');
//   }
// );

// function add(a, b) {
//   return a + b;
// }

// function average(a, b) {
//   return add(a, b) / 2;
// }

// let x = average(10, 20);

// console.log(x);

// // returns a string in all lowercase except for the first letter

// function capitalize(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// }

// result = capitalize('fucKiNg gIbErRiSH');

// console.log(result);

// returns only the last letter of a string

// function lastLetter(string) {
//   return string.slice(-1);
// }

// result = lastLetter('Fuckbastard');
// console.log(result);

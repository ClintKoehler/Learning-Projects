// function calculate(value) {
//   // const newValue = value * 2.54;
//   // return = newValue;
//   // or
//   // console.log('The value in cm is : ' + value * 2.54 + ' cm');
//   // or
//   return value * 2.54;
// }

// let wallWidth = 80;
// width = calculate(wallWidth);
// const height = calculate(100);

// const dimensions = [width, height];
// console.log(dimensions);
/////////////////////////////////////////////
// function addValues(num1, num2) {
//   return num1 + num2;
// }

// const firstValue = addValues(3, 4);
// const secondValue = addValues(12, 34);
// // function expression
// const add = function addValues(num1, num2) {
//   return num1 + num2;
// };
// const thirdValue = add(5, 6);

// const values = [firstValue, secondValue, thirdValue];
// console.log(values);

///////////OBJECTS///////////

// const person = {
//   name: 'Fucker',
//   lastName: 'Face',
//   age: 40,
//   education: false,
//   married: true,
//   siblings: ['bastard', 'dickhead', 'cocksucker'],
//   greeting() {
//     console.log('Hello my name is Fucker');
//   },
// };

// const age = person.age;
// console.log(age);
// console.log(person.siblings[2]);
// person.name = 'jerkoff';
// person.greeting();
// console.log(person.name);

////////////CONDITIONAL STATEMENTS/////////////
// >, <, >=, <=, ==, ===, !=, !===

// const value = 2 > 3;

// if (value) {
//   console.log('Hello World');
// } else {
//   console.log('Hello People');
// }
////////

// const num1 = 6;
// const num2 = 6;
// const result = num1 >= num2;

// if (num1 > num2) {
//   console.log('First number is bigger than second.');
// } else if (result) {
//   console.log('First number is equal to second');
// } else {
//   console.log('Second number is bigger than first');
// }

///////////

// const num1 = 7;
// const num2 = 6;
// const result = num1 >= num2;

// // exclamation mark now looks for a false statement
// if (!result) {
//   console.log('Value is false');
// } else {
//   console.log('Value is true');
// }

///////////
// ==checks only value
// === checks value and type

// const num1 = 6;
// const num2 = '6';

// const value = num1 == num2;
// const value2 = num1 === num2;

// console.log(value);
// console.log(value2);

/////////LOGICAL OPERATORS///////////
// (|| - OR), (&& - AND), !

// const name = 'peter';
// const age = 24;

// if (name !== 'bob' && age === 24) {
//   console.log('hello there user');
// } else {
//   console.log('wrong values');
// }

///////////////SWITCH///////////////
// if and else version. Uses keywords switch and case. break means if nothing meet the conditions, do this.

// const dice = 1;

// switch (dice) {
//   case 1:
//     console.log('You got one');
//     break;
//   case 2:
//     console.log('You got two');
//     break;
//   case 3:
//     console.log('You got three');
//     break;
//   default:
//     console.log('You did not roll the dice');
// }

// ELSE IF EXAMPLE
// if (dice === 1) {
//   console.log('You got one');
// } else if (dice === 2) {
//   console.log('You got two');
// } else {
//   console.log('You did not roll the dice');
// }

// ALL IF EXAMPLE
// if (dice === 1) {
//   console.log('You got one');
// }

// if (dice === 2) {
//   console.log('You got one');
// }

// if (dice < 1 || dice > 6) {
//   console.log('You did not roll the dice');
// }

////////////////LOOPS////////////////////
// while, always set up an escape

// let amount = 10;

// while (amount > 0) {
//   console.log('I have ' + amount + ' dollars and I am going to the mall.');
//   amount--;
// }

/////////////////DO WHILE////////////////
// code block first, condition second
// will run at least once

// let money = 0;

// do {
//   console.log('You have ' + money + ' dollars');
//   money++;
// } while (money < 10);

////////////FOR LOOPS/////////////

// let i;
// for (i = 0; i < 10; i++) {
//   console.log('The number is : ' + i);
// }
// ////

// for (let number = 11; number >= 0; number--) {
//   console.log('The number is : ' + number);
// }

////////////STRING PROPERTIES AND METHODS////////
// const person = {
//   name: 'Peter', // property
//   greeting() {
//     //method
//     console.log("Hey, I'm Peter");
//   },
// };

// console.log(person);
// console.log(person.name);
// person.greeting();
///////////////////////
// let text = ' Peter Jordan';
// // one method
// let result = text.length;
// console.log(result);
// // examples using another way
// console.log(text.length);
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.charAt(3));
// console.log(text.charAt(text.length - 1));
// console.log(text.indexOf('e'));
// console.log(text.trim());
// console.log(text.trim().toLocaleLowerCase().startsWith('peter'));
// console.log(text.includes('eter'));
// console.log(text.slice(0, 8)); //start at 0 go to 8
// console.log(text.slice(-5));

//////////TEMPLATE LITERALS///////////
// Interpolation ${} - Insert expression(value)
// const name = 'john';
// const age = 25;
// const sentence = "Hey it's " + name + ' and he is ' + age + ' years old';

// const value = `Hey it's ${name} and he is ${age} years old. And here is some simple math: ${
//   4 + 4
// }`;

// console.log(sentence);
// console.log(value);

///////////////////////////////////////////////

// let names = ['john', 'bobo', 'barry', 'olga', 'ben'];

// // length
// console.log(names[names.length - 1]);
// // concat
// const lastNames = ['pepper', 'onion', 'banana'];
// const allNames = names.concat(lastNames);
// console.log(allNames);

// // reverse the array
// console.log(allNames.reverse());

// //unshift add to the beginning of the arrray
// allNames.unshift('susy');
// console.log(allNames);

// //shift remove from the beginning of the array
// allNames.shift();
// console.log(allNames);

// //push add to end of array
// //pop remove from teh end of array
// //splice - mutates original array
// const specificNames = allNames.splice(0, 3);
// console.log(specificNames);
// console.log(allNames);

//////////////ARRAYS AND FOR LOOPS////////////

// const names = ['anna', 'susy', 'bob', 'jordan'];
// const lastName = 'shithead';
// let newArray = [];

// for (let i = 0; i < names.length; i++) {
//   console.log(i);
//   console.log(names[i]);

//   // one way to do it below
//   newArray.push(`${names[i]} ${lastName}`);
// }
// // another way to do it below
// // const fullName = `${names[i]} ${lastName}`;
// // newArray.push(fullName);

// console.log(newArray);

///////FUNCTIONS, RETURN, IF, ARRAYS, FOR LOOP///

// const gas = [20, 40, 100, 30];
// const food = [10, 40, 50];

// function calculateTotal(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   if (total > 100) {
//     console.log(`Whoa! You are spending way too much!`);
//     return total;
//   }
//   console.log(`You are good, total is less than 100.`);
//   return total;
// }

// const gasTotal = calculateTotal(gas);
// const foodTotal = calculateTotal(food);
// const randomTotal = calculateTotal([200, 4000, 500, 1]);

// console.log({
//   gas: gasTotal,
//   food: foodTotal,
//   random: randomTotal,
// });

////////////////TERNARY OPERATOR////////////
// true or false

// const value = 1 < 0;
// value ? console.log('Value is true') : console.log('Value is false');

//////////GLOBAL SCOPE///////////////////
// Any variable OUTSIDE code block {} is said to be in global scope.
// can be accessed anywhere in the program

////////////LOCAL SCOPE///////////////
// Use keywords (let, const, var) in function {} code to keep the variables localStorage. Declaring a variable without a keyword in a function makes it global.

/////////VARIABLE LOOKUP////////////////////

// const globalNumber = 5;
// // WILL GRAB THIS GLOBAL SCOPE LAST

// function add(num1, num2) {
//   const globalNumber = 20;
//   // WILL GRAB THIS LOCAL SCOPE SECOND.
//   const result = num1 + num2 + globalNumber;
//   function multiply() {
//     // const globalNumber = 100; WILL GRAB THIS LOCAL SCOPE VARIABLE FIRST.
//     const multiplyResult = result * globalNumber;
//     console.log(multiplyResult);
//   }
//   multiply();
//   return result;
// }

// console.log(add(3, 4));

/////////////POWERFUL ARRAY METHODS////////////
// forEACH

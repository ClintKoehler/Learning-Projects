// let javascriptIsFun = true;
// console.log(typeof javascriptIsFun);

// 2**3 means 2 to the power of 3 (2 x 2 x 2 = 8)
// //? ASSIGNMENT OPERATORS

// let x = 10 + 5;
// x += 10; // x = x + 10 so x is 15 + 10
// x *= 4; // x = x * 4 so x is now 100
// x++; // 101
// x--; // 100
// console.log(x)
// //? COMPARISON OPERATORS

// let myAge = 42;
// const isFullAge = myAge >= 18;
// console.log(isFullAge);
// //? IF ELSE

// const age = 15;

// if (age >= 18) {
//   console.log('Sarah can start driving license 🚗') // emoji winkey + .
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// };

// const birthYear = 2012;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century)

// //? TYPE CONVERSION
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'))
// console.log(typeof NaN); // invalid number, but still a number

// console.log(String(23), 23);

// //? TYPE COERCION
// console.log('I am ' + 23 + ' years old'); // plus converts to string
// console.log('23' - '10' - 3); // minus converts to numbers
// console.log('23' * '2'); // multiply converts to numbers
// console.log('23' / '2'); // converts to numbers
// //? 5 FALSEY VALUES: 0, '', undefined, null, NaN

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean('Jonas')); // true
// console.log(Boolean({})); // true, empty OBJECT

// const money = 0;
// if (money) {
//   console.log(`Don't spend it all ;)`);
// } else {
//   console.log(`You should get a job`);
// } // falsey

// let height;
// if (height) {
//   console.log('Yay, height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// } // false
// //? EQUALITY OPERATORS

// const age = 18;

// if (age === 18) console.log('You just became an adult');

// const favorite = Number(prompt('What is your favorite number?'));
// console.log(favorite);

// if (favorite == 23) {
//   console.log('Cool! 23 is an amazing number!');
// } else if (favorite === 7) {
//   console.log('7 is also a cool number');
// } else if (favorite === 8) {
//   console.log('8 is also a cool number');
// } else {
//   console.log('Number is not 23, 8 or 7');
// }

// if (favorite !== 23) console.log('Why not 23?');
// //? SWITCH STATEMENTS

// let day;

// function changeDay() {
//   for (let i = 0; i < 6; i++)
//     switch (i) {
//       case 0:
//         day = 'monday';
//         printDay();
//         break;
//       case 1:
//         day = 'tuesday';
//         printDay();
//         break;
//       case 2:
//         day = 'wednesday';
//         printDay();
//         break;
//       case 3:
//         day = 'thursday';
//         printDay();
//         break;
//       case 4:
//         day = 'friday';
//         printDay();
//         break;
//       case 5:
//         day = 'saturday';
//         printDay();
//         break;
//       case 6:
//         day = 'sunday';
//         printDay();
//         break;
//     }

//   function printDay() {
//     switch (day) {
//       case 'monday':
//         console.log('Monday');
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         console.log('------');
//         break;
//       case 'tuesday':
//         console.log('Tuesday');
//         console.log('Prepare theory videos');
//         console.log('------');
//         break;
//       case 'wednesday':
//       case 'thursday':
//         console.log('Wednesday and Thursday');
//         console.log('Write code examples');
//         console.log('------');
//         break;
//       case 'friday':
//         console.log('Friday');
//         console.log('Record videos');
//         console.log('------');
//       case 'saturday':
//       case 'sunday':
//         console.log('Satgurday and Sunday');
//         console.log('Enjoy the weekend');
//         console.log('------');
//         break;
//       default:
//         console.log('Not a valid day');
//     }
//   }
// }

// changeDay();

// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//   console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('Write code examples');
// } else if (day === 'friday') {
//   console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekend');
// } else {
//   console.log('Not a valid day');
// }
// //? TERNARY OPERATOR

// const age = 18;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');
//! has three parts: condition, if, else...condition ? exprIfTrue : exprIfFalse
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

//! same as below
// let drink2;
// if (age >= 18) {
//   drink2 = 'wine';
// } else {
//   drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

// console.log(`The bill value is: ${bill}
// The recommended tip is: ${tip}
// The total bill is: ${bill + tip}`);

// //? ARRAYS

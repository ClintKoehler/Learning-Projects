// const myName = 'Clint';
// if (myName === 'Clint') {
//   console.log('Hello!');
// }

// let isLoggedIn = true;
// if (!isLoggedIn) {
//   console.log('User is NOT logged in!');
// }
// // won't run code because the boolean is false
// const enteredUserName = ''; // empty string is false
// if (enteredUserName) {
//   console.log('Input is valid!');
// }
///////////FOR LOOP///////////
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//////////FOR OF LOOP/////////
const users = ['Max', 'Anna', 'Joel'];

for (const user of users) {
  console.log(user);
}
// user just describes what you are getting from the array
/////////FOR IN LOOP////////
// key is often used to describe the property names it pulls
const loggedInUser = {
  name: 'Clint',
  age: 42,
  isAdmin: true,
};

for (const key in loggedInUser) {
  console.log(key);
  console.log(loggedInUser[key]); // access the values
}
////////////////WHILE LOOPS////////////////
let isFinished = false;

while (!isFinished) {
  isFinished = confirm('Do you want to quit?');
}

console.log('done');

// let age = 32;
// let userName = 'Max';
// let hobbies = ['Skiing', 'Cooking', 'Reading'];
// let job = {
//   title: 'Developer',
//   place: 'New York',
//   salary: 50000,
// };

// let adultYears;

// function calculateAdultYears(userAge) {
//   return userAge - 18;
// }

// adultYears = calculateAdultYears(age);

// alert(adultYears);

// let course = 'Math';
// let cost = 200;
// let goals = ['learn', 'study', 'graduate'];

// let courseInfo = {
//   course: 'Math',
//   cost: 200,
//   goals: ['learn', 'study', 'graduate'],
// };

// console.log(
//   courseInfo.course + ' ' + courseInfo.cost + ' ' + ' ' + courseInfo.goals
// );
// console.log(courseInfo.goals[1]);

// function printGoals(array, arrayIndex) {
//   let arrayElement = array[arrayIndex];
//   return arrayElement;
// }

// let thirdGoal = printGoals(courseInfo.goals, 2);

// console.log(thirdGoal);

// let userName = ['Chewbacca', 'Catface', 'Max', 'Sherry'];
// console.log(userName.length);

// document.body.children[1].children[0].href = 'https://google.com';

// // in chrome dev tools
// document.body.firstChild;
// document.body.firstElementChild;
// document.body.children[];
// document.body.childNodes;
// //

// let anchorElement = document.getElementById('external-link');
// anchorElement.href = 'https://google.com';

// let anchorElement = document.querySelector('p a');
// anchorElement.href = 'https://academind.com';

let h1Element = document.body.children[0];
console.dir(h1Element);

console.dir(h1Element.parentElement);
console.dir(h1Element.nextElementSibling);

h1Element = document.getElementById('header-element');
console.dir(h1Element);

let pElement = document.querySelector('.paragraph-header');
console.dir(pElement);

pElement.textContent = 'I changed this text!';

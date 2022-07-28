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
/////////////////////////////////////
// let h1Element = document.body.children[0];
// console.dir(h1Element);

// console.dir(h1Element.parentElement);
// console.dir(h1Element.nextElementSibling);

// h1Element = document.getElementById('header-element');
// console.dir(h1Element);

// let pElement = document.querySelector('.paragraph-header');
// console.dir(pElement);

// pElement.textContent = 'I changed this text!';
/////////////////////////////////////
// ADD AN ELEMENT
//  1. Create new element
// let newAnchorElement = document.createElement('a');
// newAnchorElement.href = 'https://google.com';
// newAnchorElement.textContent = 'This leads to google';
// //  2. Get access to the parent element
// let firstParagraph = document.querySelector('p');
// //  3. Insert new element into parent
// firstParagraph.append(newAnchorElement);
// /////////////////////////////////////
// // REMOVE AN ELEMENT
// //  1. Select an element to remove
// let firstH1Element = document.querySelector('h1');
// // 2. Remove it
// firstH1Element.remove();
// ////////////////////////////////////
// // MOVE AN ELEMENT
// firstParagraph.parentElement.append(firstParagraph);
// // use .append or .insertBefore()
// ///////////////////////////////////
// // innerHTML (includes text and html elements)
// // (parses the html as well)
// firstParagraph.innerHTML = 'Hi! This is <strong>important!</strong>';
/////////CALLBACK FUNCTION//////////////////
let paragraphElement = document.querySelector('p');

function changeParagraphText() {
  paragraphElement.textContent = 'Clicked!';
}

paragraphElement.addEventListener('click', changeParagraphText); // omitting the () tells the browser to wait for the event before running the function. If you leave the () it runs it as soon as the page loads

'use strict';

// const populations = [84, 125, 83, 10];
// const percentages = [];

// console.log(populations.length === 4);

// function percentageOfWorld1(arr) {
//   return (arr / 7900) * 100;
// }

// for (let i = 0; i < populations.length; i++) {
//   const percentage = percentageOfWorld1(populations[i]).toFixed(2);
//   percentages.push(percentage);
// }

// console.log(percentageOfWorld1(populations));
// console.log(percentages);

// // turkey 84
// // japan 125
// // germany83
// // portugal 10
//! ////////////////////////////////////////////////

// const neighbors = ['Portugal', 'France'];
// neighbors.push('Utopia');
// console.log('neighbors', neighbors);
// neighbors.pop();
// console.log('neighbors', neighbors);

// if (neighbors.includes('Germany')) {
//   console.log('Probably a Central European Country');
// } else {
//   console.log('Probably not a Central European Country');
// }

// neighbors[1] = 'Republic of France';
// console.log('neighbors', neighbors);
//! ///////////////////////////////////////////////

// console.log('----------');
// const myCountry = {
//   country: 'Turkey',
//   capital: 'Istanbul',
//   language: 'Turkish',
//   population: 84,
//   neighbors: [
//     'Bulgaria',
//     'Greece',
//     'Syria',
//     'Iraq',
//     'Georgia',
//     'Armenia',
//     'Iran',
//   ],
//   describe: function () {
//     return `${this.country}'s capital is ${this.capital} and the spoken language is ${this.language}. `;
//   },
//   checkIsIsland: function () {
//     this.neighbors.length >= 1
//       ? (this.isIsland = false)
//       : (this.isIsland = true);
//   },
// };

// myCountry.population = myCountry.population + 2;
// myCountry['population'] = myCountry.population - 2;

// console.log(
//   `${myCountry.country} has ${myCountry.population} million people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`
// );

// console.log(myCountry.describe());

// myCountry.checkIsIsland();
// console.log(myCountry);
//! //////////////////////////////////////////////////

// for (let i = 1; i < 51; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }

const populations = [84, 125, 83, 10];
const percentages = [];

function percentageOfWorld1(arr) {
  return (arr / 7900) * 100;
}

for (let i = 0; i < populations.length; i++) {
  const percentage = percentageOfWorld1(populations[i]).toFixed(2);
  percentages.push(percentage);
}

console.log(percentages);

console.log(`-------------`);

const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbor: ${listOfNeighbours[i][y]}`);

console.log(`-------------`);

const populations2 = [84, 125, 83, 10];
const percentages2 = [];

let i = 0;
while (i < populations2.length) {
  const percentage = percentageOfWorld1(populations2[i]).toFixed(2);
  percentages2.push(percentage);
  i++;
}

console.log(percentages2);

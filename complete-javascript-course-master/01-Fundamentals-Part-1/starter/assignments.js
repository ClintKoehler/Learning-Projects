// const country = 'United Sates';
// const continent = 'North America';
// let population = 325500000;

// console.log(country);
// console.log(continent);
// console.log(population);

// const isIsland = false;
// const language = 'english';

// console.log(typeof country);

// let populationSplit = population / 2;

// console.log(populationSplit);
// population++;
// console.log(population);

// let finlandPopulation = 6000000;
// let moreOrLessThanFinland = population > finlandPopulation;
// console.log(moreOrLessThanFinland);

// let averageCountryPopulation = 33000000;
// let myCountryPopBiggerOrSmallerThanAverage =
//   population > averageCountryPopulation;
// console.log(myCountryPopBiggerOrSmallerThanAverage);

// let description = `Portugal is in Europe, and its 11 million people speak portuguese`;
// console.log(description);

// description = `Portugal is in Europe, and its 11 million people speak portuguese`;
// console.log(description);

// if (population > 33000000) {
//   console.log(`The USA's population is above average.`);
// } else {
//   console.log(`The USA's population is below average.`);
// }

// // const numNeighbors = +prompt(
// //   'How many neighbor countries does your country have?'
// // );

// // if (numNeighbors === 1) {
// //   console.log(`Only 1 border!`);
// // } else if (numNeighbors > 1) {
// //   console.log(`More than 1 border!`);
// // } else {
// //   console.log(`No borders!`);
// // }

// if (language === 'english' && population <= 50000000 && isIsland === false) {
//   console.log(`You should live in the US`);
// } else {
//   console.log(`The US does not fit your criteria.`);
// }

// switch (language) {
//   case 'chinese':
//   case 'mandarin':
//     console.log(`Most number of native speakers`);
//     break;
//   case 'spanish':
//     console.log(`2nd place in number of native speakers`);
//     break;
//   case 'english':
//     console.log(`3rd place`);
//     break;
//   case 'hindi':
//     console.log(`Number 4`);
//     break;
//   case 'arabic':
//     console.log(`5th most spoken language`);
//     break;
//   default:
//     console.log('Great language too');
// }

// console.log(
//   `${country}'s population is ${
//     population >= 33000000 ? 'above' : 'below'
//   } average`
// );

//! ///////////////////PART 2//////////////////////

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

const turkey = describeCountry('Turkey', '84 Million', 'Istanbul');
const japan = describeCountry('Japan', '125 Million', 'Tokyo');
const germany = describeCountry('Germany', '83 Million', 'Berlin');

console.log(`${turkey}
--------
${japan}
--------
${germany}`);

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// const turkeyPercentage2 = percentageOfWorld2(84).toFixed();
// const japanPercentage2 = percentageOfWorld2(125).toFixed();
// const germanyPercentage2 = percentageOfWorld2(83).toFixed();

// console.log(`Turkey: ${turkeyPercentage2}%`);
// console.log(`Japan: ${japanPercentage2}%`);
// console.log(`Germany: ${germanyPercentage2}%`);

// const popPercent = population => (population / 7900) * 100;

// const turkeyPercentage3 = popPercent(84).toFixed();
// const japanPercentage3 = popPercent(125).toFixed();
// const germanyPercentage3 = popPercent(83).toFixed();

// console.log(`Turkey: ${turkeyPercentage3}%`);
// console.log(`Japan: ${japanPercentage3}%`);
// console.log(`Germany: ${germanyPercentage3}%`);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const turkeyPercentage1 = percentageOfWorld1(84).toFixed();
const japanPercentage1 = percentageOfWorld1(125).toFixed();
const germanyPercentage1 = percentageOfWorld1(83).toFixed();

console.log(`Turkey: ${turkeyPercentage1}%`);
console.log(`Japan: ${japanPercentage1}%`);
console.log(`Germany: ${germanyPercentage1}%`);

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population).toFixed(2);
  return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
}

const india = describePopulation('India', 1380);
const mexico = describePopulation('Mexico', 128);
const spain = describePopulation('Spain', 47);
console.log(india);
console.log(mexico);
console.log(spain);

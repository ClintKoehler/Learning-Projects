const country = 'United Sates';
const continent = 'North America';
let population = 325500000;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
const language = 'english';

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

let populationSplit = population / 2;

console.log(populationSplit);
population++;
console.log(population);

let finlandPopulation = 6000000;
let moreOrLessThanFinland = population > finlandPopulation;
console.log(moreOrLessThanFinland);

let averageCountryPopulation = 33000000;
let myCountryPopBiggerOrSmallerThanAverage =
  population > averageCountryPopulation;
console.log(myCountryPopBiggerOrSmallerThanAverage);

let description =
  'Portugal is in Europe, and its 11 million people speak portuguese';
console.log(description);

description = `Portugal is in Europe, and its 11 million people speak portuguese`;
console.log(description);

const populations = [84, 125, 83, 10];
const percentages = [];

console.log(populations.length === 4);

function percentageOfWorld1(arr) {
  return (arr / 7900) * 100;
}

for (let i = 0; i < populations.length; i++) {
  const percentage = percentageOfWorld1(populations[i]).toFixed(2);
  percentages.push(percentage);
}

console.log(percentageOfWorld1(populations));
console.log(percentages);

// turkey 84
// japan 125
// germany83
// portugal 10
////////////////////////////////////////////////

const neighbors = ['Portugal', 'France'];
neighbors.push('Utopia');
console.log('neighbors', neighbors);
neighbors.pop();
console.log('neighbors', neighbors);

if (neighbors.includes('Germany')) {
  console.log('Probably a Central European Country');
} else {
  console.log('Probably not a Central European Country');
}

neighbors[1] = 'Republic of France';
console.log('neighbors', neighbors);
///////////////////////////////////////////////

console.log('----------');
const myCountry = {
  country: 'Turkey',
  capital: 'Istanbul',
  language: 'Turkish',
  population: '84',
  neighbors: [
    'Bulgaria',
    'Greece',
    'Syria',
    'Iraq',
    'Georgia',
    'Armenia',
    'Iran',
  ],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`
);

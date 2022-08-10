'use strict';

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     debugger;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);

// console.log(amplitudeNew);

// //?

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     //! C) FIX
//     value: Number(prompt('Degrees celsius:')),
//   };
//   //! B) FIND
//   console.table(measurement);

//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// //! A) IDENTIFY THE BUG
// console.log(measureKelvin());

// //? Coding challenge #1

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

let printString = '';

const printForecast = function (arr) {
  let printString = '';
  for (let i = 0; i < arr.length; i++) {
    printString += `...${arr[i]}°C in ${i + 1} days`;
  }
  printString += '...';
  console.log(printString);
};

printForecast(data1);
printForecast(data2);

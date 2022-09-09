// have access to students from data.js
//? MAP
// const updatedStudents = students.map(function (student) {
//   // console.log(student);
//   student.role = 'student';
//   return student;
// });

// console.log(updatedStudents);
// console.log('------------');

//? FILTER - Returns array
// const highScores = students.filter(function (student) {
//   return student.score >= 80;
// });

// console.log(highScores);
// console.log('------------');

// //? FIND - Returns specific item
// const specificId = students.find(function (student) {
//   return student.id === 3;
// });

// console.log(specificId);
// console.log('------------');

//? REDUCE
const averageScore =
  students.reduce(function (scoresTotal, student) {
    return scoresTotal + student.score;
  }, 0) / students.length;

console.log(averageScore);

//? Square Bracket Notation
//? Dynamically changes
// const subject = 'math';

// const total = {};

// total[subject] = 'Some value';
// console.log(total); //* ==> {math: Some value}
console.log('------------');
const survey = students.reduce(function (survey, student) {
  const favSubject = student.favoriteSubject;

  if (survey[favSubject]) {
    survey[favSubject] = survey[favSubject] + 1;
  } else {
    survey[favSubject] = 1;
  }
  return survey;
}, {});

console.log(survey);

//? Math object
//? Standard built-in objects -always available

const number = 4.56789;
const result = Math.floor(number); //* Rounds down (4)
const result2 = Math.ceil(number); //* Rounds up (5)
const result3 = Math.sqrt(number); //* Sq root of number (2.137)
const result4 = Math.min(4, 5, 6, 7); //* Lowest number (4)
//* Math.max ==> Highest number
//* Math.random() ==> 0.XXXXXXXXX
//* Math.floor((Math.random) * 10 + 1) ==> floor removes decimals 1-10

//? Date object
const months = [
  'January',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const date = new Date();
const month = date.getMonth() + 1; //* 9
console.log(months[month]); //* ==> September

const day = date.getDay() - 1; //* 3
console.log(days[day]); //* ==> Thursday

/*
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
*/
// const updatedStudents = students.map(function (student) {
//   // console.log(student);
//   student.role = 'student';
//   return student;
// });

// // console.log(updatedStudents);

// const highScores = students.filter(function (student) {
//   // if (student.score >= 80) {
//   //   return student; //  a value that coerces to true
//   // }

//   // if (student.score >= 80) return student;
//   return student.score >= 80;
// });

// // console.log(highScores);

// const specificId = students.find(function (banana) {
//   return banana.id === 6;
// });

// const fruits = ['banana', 'orange'];

// const random = fruits.find(function (fruit) {
//   return fruit === 'orange';
// });

// // console.log(random);
// // console.log(specificId);

// const averageScore =
//   students.reduce(function (scoresTotal, student) {
//     // console.log(student);
//     // console.log(scoresTotal);
//     return scoresTotal + student.score;
//   }, 0) / students.length;

// // console.log(averageScore);

// const subject = 'art';

// const total = {};
// total[subject] = 'some value';
// // console.log(total);

// const survey = students.reduce(function (survey, student) {
//   // console.log(student.favoriteSubject);
//   const favSubject = student.favoriteSubject;
//   if (survey[favSubject]) {
//     survey[favSubject] = survey[favSubject] + 1;
//   } else {
//     survey[favSubject] = 1;
//   }
//   return survey;
// }, {});

// console.log(survey);

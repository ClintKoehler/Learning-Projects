// have access to students from data.js
//? MAP
const updatedStudents = students.map(function (student) {
  // console.log(student);
  student.role = 'student';
  return student;
});

console.log(updatedStudents);

//? FILTER - Returns array
const highScores = students.filter(function (student) {
  return student.score >= 80;
});

console.log(highScores);

//? FIND - Returns specific item
const specificId = students.find(function (student) {
  return student.id === 3;
});

console.log(specificId);

//? REDUCE
const averageScore =
  students.reduce(function (scoresTotal, student) {
    return scoresTotal + student.score;
  }, 0) / students.length;

console.log(averageScore);

//? Square Bracket Notation
//? Dynamically changes
const survey = {
  english: 1,
  history: 1,
  math: 3,
};

console.log(survey);

const subject = 'math';

const total = {};

total[subject] = 'Some value';
console.log(total); //* ==> {math: Some value}

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

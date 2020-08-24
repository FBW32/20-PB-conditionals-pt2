let markMass = 90;
let markHeight = 1.99;
let person1 = "Mark";
let person2 = "John";
let johnMass = 88;
let johnHeight = 1.7;
let bmiMark = markMass / (markHeight * markHeight);
let bmiJohn = johnMass / (johnHeight * johnHeight);

let bmiMarkIsHeigher = bmiMark > bmiJohn ? true : false;
console.log(
  `Is Mark's BMI higher than John's? Why yes, it's ${bmiMarkIsHeigher} , it is`
);

if (bmiMark > bmiJohn) {
  console.log(`${person1} has a heighr BMI= ${bmiMark}`);
} else {
  console.log(`${person2} has a heighr BMI= ${bmiJohn}`);
}

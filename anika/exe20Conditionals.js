// ************EXERCISE 20 CONDITIONALS************

// # Programming Basics: Conditionals Part 2

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

// 1. Store Mark's and John's mass and height in variables.

let markHeight = parseFloat("1.65m");
console.log(markHeight); // 1.65
console.log(typeof markHeight); // number

let markMass = parseInt("72kg");
console.log(markMass); // 72
console.log(typeof markMass); // number

let johnHeight = parseFloat("1.75");
let johnMass = parseInt("82kg");

// 2. Calculate both their BMIs and store their BMIs in variables.

let markBMI = markMass / (markHeight * markHeight);
console.log(markBMI); // 26.44628099173554

let johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI); // 26.775510204081634

// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.

// If Mark has a higher BMI than John, print true.
// Else, print false.

// Input:
// markBMI
// johnBMI

// Output:
// true
// false

if (markBMI > johnBMI) {
  let compareBMI = true;
} else {
  compareBMI = false;
}
console.log(compareBMI); // false

// 4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").

console.log(`Is Mark's BMI higher than John's BMI? It is ${compareBMI} that
Mark's BMI is higher than John's BMI.`);
// Is Mark's BMI higher than John's BMI? It is false that
// Mark's BMI is higher than John's BMI.

// 5. Create an *if* statement which prints the name and BMI of the person with the highest BMI.

// If BMI of person is higher than BMI of other person, print name and
// BMI of person with higher BMI.

if (markBMI > johnBMI && markBMI !== johnBMI) {
  console.log(`Mark, ${markBMI}`);
} else {
  console.log(`John, ${johnBMI}`);
}

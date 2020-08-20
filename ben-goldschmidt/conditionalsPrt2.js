// Programming Basics: Conditionals Part 2
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 

//BMI = mass / (height * height)
// (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

// Store Mark's and John's mass and height in variables.
let massMark = 72.5;
let heightMark = 1.65;
let massJohn = 80;
let heightJohn = 2.0;



// Calculate both their BMIs and store their BMIs in variables.
let BMIMark = ((massMark) / (heightMark * heightMark));
console.log(BMIMark);
// 26.629935720844816
let BMIMarkRounded = Math.round(BMIMark * 100) / 100;
console.log(BMIMarkRounded)
// or rounded to 26.63


let BMIJohn = ((massJohn) / (heightJohn * heightJohn));
console.log(BMIJohn);
// 20



// Create a boolean variable containing information about whether Mark has a higher BMI than John.
let higherBMI = (BMIMark > BMIJohn) ? true : false;



// Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").
console.log(`Is Mark's BMI higher than John's? Why yes, it's ${higherBMI}, it is!`);
// Is Mark's BMI higher than John's? Why yes, it's true, it is!



// Create an if statement which prints the name and BMI of the person with the highest BMI.

// If Mark's BMI is greater than John's, print- `Mark's BMI is greater with ${BMIMark}`
// else (if John's BMI is greater than Mark's), print- `John's BMI is greater with ${BMIJohn}`

if (BMIMark > BMIJohn) {
    greaterBMI = `Mark's BMI is greater with ${BMIMarkRounded}`;
}
else {
    greaterBMI = `John's BMI is greater with ${BMIJohn}`;
}
console.log(greaterBMI);
// Mark's BMI is greater with 26.63
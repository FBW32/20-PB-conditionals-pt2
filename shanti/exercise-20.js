// Programming Basics: Conditionals Part 2
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

/* 1. Store Mark's and John's mass and height in variables. */
let markHeight = 1.65;
let markWeight = 72.5;

let johnHeight = 1.72;
let johnWeight = 81.5;

/* 2. Calculate both their BMIs and store their BMIs in variables. */
let bmiMark = markWeight/Math.pow(markHeight, 2);
console.log('Mark BMI is: ', Math.round(bmiMark)); // Mark BMI is:  27
let bmiJohn = johnWeight/Math.pow(johnHeight, 2);
console.log('John BMI is: ', Math.round(bmiJohn)); // John BMI is:  28

/* 3. Create a boolean variable containing information about whether Mark has a higher BMI than John. */
let higherBmi = (bmiMark > bmiJohn) ? true : false;
console.log(higherBmi); // false

/* 4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). */
console.log(`Is Mark's BMI higher than John's? No, it's ${higherBmi}, it is.`); // Is Mark's BMI higher than John's? No, it's false, it is.

/* 5. Create an if statement which prints the name and BMI of the person with the highest BMI. */
if (bmiMark > bmiJohn){
    console.log('Mark has the highest BMI than John.');
} else {
    console.log('John has the highest BMI than Mark.');
}
// John has the highest BMI than Mark.

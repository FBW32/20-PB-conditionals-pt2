// 23.08.2020
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

// EXERCISE 1

// Store Mark's and John's mass and height in variables.

let markBMI =  67;
let johnBMI = 87;
let markHeight = 1.62;
let johnHeight = 1.82;

// EXERCISE 2
// Calculate both their BMIs and store their BMIs in variables.

let totalBMI;
let mark = (markBMI/(markHeight * markHeight));
let john = (johnBMI/(johnHeight * johnHeight));
if (mark > john) {
    totalBMI = true;
} else {
    totalBMI = false;
}
console.log(totalBMI); // false

// EXERCISE 3
// Create a boolean variable containing information about whether Mark has a higher BMI than John.
let higherBMI = (markBMI > johnBMI) ? true : false;
console.log(higherBMI); // false

// EXERCISE 4
// Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").

console.log(`is Mark's BMI higher than john's? : ${higherBMI}`); // false

// EXERCISE 5
// Create an if statement which prints the name and BMI of the person with the highest BMI.

if (markBMI > johnBMI) {
    console.log(`Mark BMI is higher:` + markBMI);
} else if (johnBMI > markBMI) {
    console.log(`John's BMI is higher:` + johnBMI);
}



// COMPLETED..

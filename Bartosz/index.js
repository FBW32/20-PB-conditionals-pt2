// Programming Basics: Conditionals Part 2

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

// 1. Store Mark's and John's mass and height in variables.

let markMass = 70;
let markHeight = 1.88;

let johnMass = 82.5;
let johnHeight  = 1.92;

// 2. Calculate both their BMIs and store their BMIs in variables. 

let markBMI = Math.round(markMass / (markHeight * markHeight));
console.log(markBMI); // 20

let johnBMI = Math.round(johnMass / (johnHeight * johnHeight));
console.log(johnBMI); // 22

// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.

let higherBMI = (markBMI > johnBMI) ? true : false;
console.log(higherBMI); // false

// 4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). 

console.log(`Is Mark's BMI higher than John's ? : ${higherBMI}`); // Is Mark's BMI higher than John's ? : false

// 5. Create an *if* statement which prints the name and BMI of the person with the highest BMI.

if (markBMI > johnBMI){
    console.log(`Mark's BMI is higher: ` + markBMI);
} else if (johnBMI > markBMI){
    console.log(`John's BMI is higher: ` + johnBMI);
} // John's BMI is higher: 22
// # Programming Basics: Conditionals Part 2

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

// 1. Store Mark's and John's mass and height in variables.

// 2. Calculate both their BMIs and store their BMIs in variables. 
// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
// 4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). 
// 5. Create an *if* statement which prints the name and BMI of the person with the highest BMI. 

let heightMark = 1.76;
let heightJohn = 1.80;
let massMark = 85;
let massJohn = 70; 
let result;
let john = (massJohn/(heightJohn*heightJohn));
let mark = (massMark/(heightMark*heightMark));
if (mark > john) {
    result = true;
}
else {
    result = false;
}
console.log(typeof result); // boolean
console.log(`Is Mark's BMI higher than John's? Yes, it's ${result}.`); //Is Mark's BMI higher than John's? Yes, it's true.
if (mark > john) {
    console.log(`Mark has the BMI of ${mark}, hence greater BMI than John`);
} 
else {
    console.log(`John has the BMI of ${john}, hence greater BMI than Mark`);
}

//Another type: https://medium.com/javascript-in-plain-english/javascript-algorithm-calculate-body-mass-index-6f14dce4075d


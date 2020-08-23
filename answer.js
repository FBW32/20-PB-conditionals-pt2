// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

// Store Mark's and John's mass and height in variables.
let massOfMark = 90;
let massOfJohn = 67;        //(m1,m2, h1,h2) are numbers
let heightOfMark = 1.80;
let heightOfJohn = 1.70;

// Calculate both their BMIs and store their BMIs in variables.
let markBmi = massOfMark / (heightOfMark * heightOfMark)  // 0r = massOfMark / (Math.pow(heightOfMark, 2))
    console.log(markBmi);

let  johnBmi = massOfJohn / (heightOfJohn * heightOfJohn)  // 0r = massOfJohn / (Math.pow(heightOfJohn, 2))
console.log(johnBmi);
// Create a boolean variable containing information about whether Mark has a higher BMI than John.

if (markBmi > johnBmi) { console.log(true);
    
    
} else { console.log(false);
    
}
// Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").
if (markBmi > johnBmi) { console.log(`Is Mark's BMI higher than John's? Why yes, it's [boolean], it is`);
    
    
} else { console.log(`who cares`);
    
}
// 
// Create an if statement which prints the name and BMI of the person with the highest BMI.
if (markBmi > johnBmi) {console.log("Mark has the highest BMI");
    
} else {
    console.log("John has the highest BMI");
    
}
    

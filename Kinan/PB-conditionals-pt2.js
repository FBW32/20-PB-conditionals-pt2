/* Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula:
BMI = mass / (height * height).
(mass in kg, i.e. 72.5, and height in metres, i.e. 1.65). */
//1. Store Mark's and John's mass and height in variables.
let markHeight = 1.68;
let markWeight = 65;
let johnHeight=1.95
let johnWeight=94;
//------------##---------------
//2. Calculate both their BMIs and store their BMIs in variables. 
//------------##---------------
//BMI = mass / (height * height)
let markBmi= (Math.round(markWeight/(markHeight*markHeight)));
console.log(markBmi); // expacted return  [23]
let johnBmi= (Math.round(johnWeight/(johnHeight*johnHeight)));
console.log(johnBmi); // expacted return [25]
//------------##---------------
//3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
let comper= (markBmi>johnBmi);
//------------##---------------
/* 4. Print a string to the console containing the variable from step 3 using string interpolation.
(e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). */
//------------##---------------
console.log(`Is Mark's BMI higher than John's? Why yes, it's ${comper}, it is`)
//Is Mark's BMI higher than John's? Why yes, it's false, it is
//------------##---------------
console.log((markHeight>johnHeight)? (`the highest BMI is for Mark and it is${markHeight}`) :
(`the highest BMI is for John and it is ${johnBmi}`));
//------------##---------------
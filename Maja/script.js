/* 1. Store Mark's and John's mass and height in variables. */
/* 2. Calculate both their BMIs and store their BMIs in variables.
 */

let name1 = "Mark";
let MarksMass = 72.5;
let MarksHeight = 1.65;
let MarksHeight2 = MarksHeight * MarksHeight;
console.log(MarksHeight2);  // 2.7224999999999997
let MarksBMI = MarksMass / MarksHeight2;
console.log(MarksBMI);  // 26.629935720844816
let MarksBMIfixed = MarksBMI.toFixed(3);  // 26.630
console.log(MarksBMIfixed);

let name2 = "John";
let JohnMass = 69.9;
let JohnHeight = 1.86;
let JohnHeight2 = JohnHeight * JohnHeight;
console.log(JohnHeight2);  // 3.4596000000000005
let JohnBMI = JohnMass / JohnHeight2;
console.log(JohnBMI);  // 20.20464793617759
let JohnBMIfixed = JohnBMI.toFixed(3);  //20.205
console.log(JohnBMIfixed);

/* 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
 */
 /* 4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). */

let t = true;
let f = false;

if (MarksBMIfixed > JohnBMIfixed) {
    console.log(`${t}, ${name1} has higher BMI`);
} else {
    console.log(`${f}, ${name1} has higher BMI`);
}  // true, Marks has higher BMI


/* 5. Create an if statement which prints the name and BMI  of the person with the highest BMI.
 */

if (MarksBMIfixed > JohnBMIfixed) {
    console.log(`${name1} with his ${MarksBMIfixed} of BMI is the winner!`);
}  // Mark with his 26.630 of BMI is the winner!
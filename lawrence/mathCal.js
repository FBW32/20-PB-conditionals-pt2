//1. Store Mark's and John's mass and height in variables.

let markMass = 78;
let markHeight = 1.69;
let johnMass = 82;
let johnHeight = 1.78;

// 2. Calculate both their BMIs and store their BMIs in variables. 

let indBMis1 = ((markMass/(markHeight * markHeight)).toFixed(1));
let indBMis2 = ((johnMass/(johnHeight * johnHeight)).toFixed(1));

//console.log(indBMis1.toFixed(1));  //  27.3
//console.log(indBMis2.toFixed(1)); // 25.9

//3. Create a boolean variable containing information about whether Mark has a higher BMI than John.

let boolVar = (indBMis1 > indBMis2) ? true : false;
 

//4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). 

console.log( `Is Mark's BMI is higher than John's ? its ${boolVar} it is`);  //Is Mark's BMI higher than John's ? false it is


//5. Create an *if* statement which prints the name and BMI of the person with the highest BMI. 

if (indBMis1 > indBMis2){

    console.log(`John's BMI is the highest with ${indBMis1}`);
} else{
    console.log(`Mark's BMI is the smallest with ${indBMis2}`);
}   //John's BMI is the highest with 27.3


//1
let MarkMass;
let JohnMass;
let MarkHeight;
let JohnHeight;

//2
function calculateBMI(mass, height) {
  let BMI = mass / (height * height);
  return BMI;
}
let MarkBMI = calculateBMI(MarkMass, MarkHeight);

let JohnBMI = calculateBMI(JohnMass, JohnHeight);
//3
let isMarksBMIHeighter = MarkBMI > JohnBMI ? true : false;
//4
console.log(
  "Is Mark's BMI higher than John's?Why yes, it's " +
    isMarksBMIHeighter +
    " ,it is"
);
//5
if (MarkBMI > JohnBMI) {
  console.log(MarkBMI);
} else if (JohnBMI > MarkBMI) {
  console.log(JohnBMI);
} else {
  console.log("They have the same BMI");
}

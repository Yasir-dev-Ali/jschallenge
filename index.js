
console.log('Wellcome to JavaScript Challenge');
// challenge start Here 
// Write a program that outputs the phrase "Hello, world!" to the console.
console.log("Hello, world");


// 2> Write a Program to print this:
// My Name is “Your Name”
// I am Learning JavaScript via Full Stack Bootcamp of DiaaTech
// I will become the best developer by hard work.
// I am making commitment to do code with consistency.

console.log(`My Name is Yasir Ali
             I am Learning JavaScript via Full Stack Bootcamp of DiaaTech
             I will become the best developer by hard work.
             I am making commitment to do code with consistency.` 
);



// Variables
//1 => Write a program that declares two variables, one with your name and
// one with a number value of your age. Concatenate the two variables and
// output the result to the console.

let name ='Yasir ';
let age=21;
const fullName = ` Name was ${name} & Age  ${age}`; // concatenation operator
console.log(fullName);


// 2 =>  Repeat the coding task 2 of output by putting these strings in variables
// and then outputting variables.







// 3=>. Initialize two variables and output their sum, minus, multiply and
// division.
var x =50 ; var y=49;
console.log(`${x+y}`);
console.log(`${x-y}`);
console.log(`${x*y}`);
console.log(`${x/y}`)



// 4=>
// BMI
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using
// Task 
// 1. Store Mark's and John's mass and height in variables

let markMass = 70;
let markHeight =  1.68;
let johnMass = 90;
let johnHeight = 1.95;

//2. Calculate both their BMIs using the formula

let  markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);

console.log("Mark's BMI: " + markBMI);
console.log("John's BMI: " + johnBMI);

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark
// has higher BMI than John. Print it out on the screen.
if(markHeight>johnHeight){
    console.log('Mark\'s Height Is Greater Than John');
}else{
    console.log('John\'s Height Is Greater Than Mark')
}


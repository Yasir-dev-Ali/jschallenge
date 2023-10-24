// Destructuring
// 1. Write a program that defines an object with properties name, age, and
// email. Use destructuring to assign each property to a variable with a
// different name. Then, output the variables to the console.

// const user={
//     name:'Yasir',
//     age:22,
//     email:'yaseenyasir786110@gmail.com',
// }
// const nameD=user.name='Ali';
// const ageD=user.age=22;
// const emailD=user.email='yasir786110@gmail.com';




// 2. Write a function that takes an object with properties firstName and
// lastName as an argument and returns the full name by using
// destructuring.


// const intro={

//     firstName:'Yasir',
//     lastName:'Ali'  
    
// };

// function fullName({firstName, lastName}) {
// 	return firstName + lastName ;
// }
// const add=fullName();
// console.log(add);


// Spread Operator


// 1. Write a program that defines two arrays arr1 and arr2, each with three
// numbers. Use the spread operator to create a new array arr3 that
// contains all the numbers from both arrays. Then, output arr3 to the
// console.

// const arr1=[1,2,3];
// const arr2=[4,5,6];
// const arr3 =[...arr1,...arr2];
// console.log(arr3);




// console.log({fullName});




// 2. Write a function called getLargest that takes an array of numbers as an
// argument and returns the largest number in the array. Use the spread
// operator to pass the array to the Math.max() function.


// function getLargest(arr){
//     return Math.max(...arr)

// }
// let num=[1,2,3,4,5,6,7,8,9,10];
// let numadd=getLargest(num);
// console.log(numadd);


// Rest Operator

// 1. Write a function called sum that takes any number of arguments and
// returns their sum. Use the rest operator to allow the function to take
// any number of arguments.

// const sum = (...args) => [...args].reduce((a, b) => a + b, 0);

// console.log(sum(2,3));




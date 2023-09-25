// Function Task


// 1. Write a function called sum that takes in two numbers as parameters
// and returns their sum.
/*
function add(a, b) {
    return (a + b);
    }
    console.log(`The result of the addition is ${add(20 ,55)}`);

*/

// 2. Write a function called isEven that takes in a number as a parameter and
// returns true if the number is even and false if it is odd.
// const isEven = num => !(num % 2 === 0 ? 'false' : "true"); //returning boolean values
/*
function isEven(num){
    if(num % 2 === 0){
        console.log("even")
        }else
        {console.log('odd')
    }
    }
    isEven(-436789)
*/
// 3. Write a function called reverseString that takes in a string as a
// parameter and returns the string in reverse order.
/*
function  reverseString(str){
    return str.split('').reverse().join('')
    
}

console.log(reverseString('Yasir'));
*/


// 4. Write a function called calculateFactorial that takes in a number as a
// parameter and returns the factorial of that number (i.e. the product of
// all positive integers up to that number).
// const fact = n=>n<=1?1:fact(n-1)*n;
/*

function calculateFactorial(number) {
    if (number < 0) {
      return "Factorial is not defined for negative numbers";
    }
  
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }

  const inputNumber = 5;
  const factorialResult = calculateFactorial(inputNumber);
  console.log(`The factorial of ${inputNumber} is: ${factorialResult}`); // Output: "The factorial of 5 is: 120"
  
*/



// 5. Write a function called convertTemperature that takes in a temperature
// in Celsius as a parameter and returns the equivalent temperature in
// Fahrenheit.
/*
function convertTemperature(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  

  const celsiusTemperature = 25;
  const fahrenheitTemperature = convertTemperature(celsiusTemperature);
  console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);

  */
  
//6:  Write a function called countVowels that takes in a string as a parameter
//   and returns the number of vowels in the string. For example,
//   countVowels("hello") should return 2.
/*
function countVowels(inputString) {
     Convert the input string to lowercase to handle both uppercase and lowercase vowels
    const lowerCaseString = inputString.toLowerCase();
    
     Define a string of vowels
    const vowels = "aeiou";
    
     Initialize a count to store the number of vowels
    let vowelCount = 0;
    
     Iterate through each character in the string
    for (let i = 0; i < lowerCaseString.length; i++) {
       Check if the current character is a vowel
      if (vowels.includes(lowerCaseString[i])) {
        vowelCount++;
      }
    }
    
    return vowelCount;
  }
  
  const inputString = "Yasir Ali";
  const numberOfVowels = countVowels(inputString);
  console.log(`The number of vowels in "${inputString}" is: ${numberOfVowels}`);
  

  */
// Array
// Write a program that prompts the user to enter five numbers and stores
// them in an array. Then, output the sum of the numbers to the console


// var sum=0;
// var len=(Number(prompt("Enter len of array")));
// var ar=new Array();

// for(var i=0;i<len;i++){
//   ar.push(Number(prompt("Enter array elements:"+ar[i])));
// }
// for(var i=0;i<len;i++){
//   sum+=ar[i];
// }

// document.write(`Sum of values ${sum}`);


// 2. Write a function called findMax that takes in an array of numbers as a
// parameter and returns the largest number in the array.
/*
function findMax(numbers) {
    if (numbers.length === 0) {
        // If the array is empty, return undefined or handle it as per your requirements
        return undefined;
    }

    let max = numbers[0]; // Assume the first number is the largest initially

    // Loop through the array to find the maximum number
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            // If the current number is greater than the current max, update max
            max = numbers[i];
        }
    }

    return max; // Return the maximum number
}


const numbers = [44, 221, 70, 10, 91, 51];
const largestNumber = findMax(numbers);
console.log("The largest number in the array is: " + largestNumber);
*/




// Write a program that prompts the user to enter a sentence and stores
// each word in an array. Then, output the length of the array to the
// console.


/*
// Prompt the user to enter a sentence
const sentence = prompt("Enter a sentence:");

// Split the sentence into an array of words
const wordsArray = sentence.split(" ");

// Output the length of the array (number of words) to the console
console.log("Number of words in the sentence: " + wordsArray.length);

*/
// Write a program to take an array and print average of all the elements of
// array.


// const arr = [1, 2, 3, 4, 5];
//  var sum = 0;
//  arr. forEach((num) => { sum += num });
//   average = sum / arr. length;
//    console. log(average);



// Write a program to output only those elements who are multiple of
// three(3) or five(5).

/*

// Function to filter elements that are multiples of three (3) or five (5)
function filterNum(numbers) {
    // Use the filter method to filter elements that are multiples of 3 or 5
    const multiples = numbers.filter(num => num % 3 === 0 || num % 5 === 0);
    return multiples;
}

// Example array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15];

// Filter and output elements that are multiples of three (3) or five (5)
const multiples = filterNum(numbers);
console.log(`Elements that are multiples of 3 or 5: ${multiples} `)
*/
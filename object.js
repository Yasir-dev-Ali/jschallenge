// Question 1
// Make 3 Objects like:
// Car 1: {Make: Honda Model: Civic Year: 2019}
// Car 2: {Make: Toyota Model: Camry Year: 2020}
// Car 3: {Make: Ford Model: Mustang Year: 2018}


/*

const Car1={
    Make:"Honda",
    Model: "Civic",
    Year: 2019


}
console.log(Car1);

const Car2={
    Make:"Toyota",
    Model: "Camry",
    Year: 2020


}
console.log(Car2);
const Car3={
    Make:"Ford",
    Model: "Mustang",
    Year: 2018

}
console.log(Car3);
*/



// Part 1
// Write a program that prompts the user to enter the details of a book - title,
// author, and number of pages - and stores the data in an object. Then, output
// the details of the book to the console.
/*

// Empty object 
let infoBook={}
// Enter User Data 
let book_title=prompt('Enter Book Title ');
let book_author=prompt('Enter Book Author ');
let book_pages=prompt('Enter Book Pages ');
// store the data into object 
infoBook.book_title=book_title;
infoBook.book_author=book_author;
infoBook.book_pages=book_pages;
console.log(infoBook);
*/




// Part 2
// Write a function called findOldestPerson that takes in an array of people (each
// person represented as an object with properties for name and age) as a
// parameter and returns the name of the oldest person in the array.

/*
// Define the function findOldestPerson
function findOldestPerson(people) {
    // Check if the input array is empty
    if (people.length === 0) {
        return "No people in the array.";
    }

    // Use the reduce method to find the person with the highest age
    let oldestPerson = people.reduce(function (oldest, currentPerson) {
        return (oldest.age > currentPerson.age) ? oldest : currentPerson;
    });

    // Return the name of the oldest person
    return oldestPerson.name;
}

// Example usage
let people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 45 },
    { name: "Charlie", age: 60 }
];

let oldestPerson = findOldestPerson(people);
console.log("The oldest person is: " + oldestPerson); 
*/
// Output: The oldest person is: Charlie



// Write a program that prompts the user to enter the details of three movies -
// title, director, and year - and stores the data in an array of objects. Then, sort
// the array by the year and output the details of each movie to the console.

// Create Empty array
/*
let movies=[];
// prompt the user for moives details
for(let i=0;i<3;i++){
    let title=prompt("Enter the title of Movie:");
    let director=prompt("Enter the  of Movie director:");
    let year=prompt("Enter the Year of Movie:");

    // Create Object of each Moive & add it array
    let moive={
          title:title,
          director: director,
          year: year
        
        
    };
    movies.push(moive);
}


// Sort the Array of moives by year 
movies.sort((a,b)=>a.year-b.year);

// Output the details of each Moive to the console

for(let moive of movies){
    console.log((`Title : ${moive.title}, Director: ${moive.director} , Year ${moive.year}` ));
}
*/



// Part 4
// Write a function called calculateTotalPrice that takes in an array of items (each
// item represented as an object with properties for name and price) and returns
// the total price of all items in the array.

// Define the function calculateTotalPrice
function calculateTotalPrice(items) {
    // Initialize a variable to store the total price
    let totalPrice = 0;

    // Loop through the items array and add up the prices
    for (let i = 0; i < items.length; i++) {
        totalPrice += items[i].price;
    }

    // Return the total price
    return totalPrice;
}

// Example usage
let items = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 20 },
    { name: "Item 3", price: 30 }
];

let total = calculateTotalPrice(items);
console.log("Total Price: $" + total); // Output: Total Price: $60

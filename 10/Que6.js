// Program to swap two numbers


let num1 = 5;   // Declare and initialize num1 with a value of 5
let num2 = 10;  // Declare and initialize num2 with a value of 10


// Print the values of num1 and num2 before swapping
console.log(`Before swapping: num1 = ${num1}, num2 = ${num2}`);


// Swap the numbers using a temporary variable
let temp = num1;
num1 = num2;
num2 = temp;


// Print the values of num1 and num2 after swapping
console.log(`After swapping: num1 = ${num1}, num2 = ${num2}`);

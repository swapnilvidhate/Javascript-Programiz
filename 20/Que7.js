// Function to count the number of digits in an integer
function countDigits(number) {
    return Math.abs(number).toString().length;  // Handle negative numbers and count digits
}

const number = 40;

// Call the function and display the result
console.log(`The number of digits in ${number} is: ${countDigits(number)}`);

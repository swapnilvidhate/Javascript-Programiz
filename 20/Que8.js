// Function to reverse a number
function reverseNumber(number) {
    // Convert the number to a string, split it into an array, reverse it, then join it back together
    let reversedStr = number.toString().split('').reverse().join('');

    // Convert the reversed string back to a number
    return parseInt(reversedStr);
}

// Input from the user
let num = parseInt(prompt("Enter a number: "));

// Calling the function and displaying the result
console.log("Reversed number is:", reverseNumber(num));

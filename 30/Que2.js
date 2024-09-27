// Input from the user for the first number
let num1 = parseFloat(prompt("Enter the first number: "));

// Input from the user for the second number
let num2 = parseFloat(prompt("Enter the second number: "));

// Input from the user for the operation
let operation = prompt("Enter an operator (+, -, *, /): ");

let result;  // Variable to store the result

// Perform calculation based on the operator
switch (operation) {
    case '+':
        result = num1 + num2;  // Addition
        break;
    case '-':
        result = num1 - num2;  // Subtraction
        break;
    case '*':
        result = num1 * num2;  // Multiplication
        break;
    case '/':
        if (num2 !== 0) {
            result = num1 / num2;  // Division
        } else {
            result = "Error! Division by zero.";  // Error for division by zero
        }
        break;
    default:
        result = "Invalid operator! Please use +, -, *, or /.";  // Error for invalid operator
}

// Display the result
console.log("Result: " + result);

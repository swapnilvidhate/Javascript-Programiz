// Function to compute quotient and remainder
function computeQuotientAndRemainder(dividend, divisor) {

    let quotient = Math.floor(dividend / divisor);  // Computes the quotient
    let remainder = dividend % divisor;  // Computes the remainder
    return { quotient, remainder };

}

// declaration 
let dividend = 10;
let divisor = 3;

let result = computeQuotientAndRemainder(dividend, divisor);


console.log("Quotient: " + result.quotient);   // Quotient: 3
console.log("Remainder: " + result.remainder); // Remainder: 1

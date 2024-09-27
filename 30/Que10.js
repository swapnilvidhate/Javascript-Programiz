// Program to Check if a String is Numeric

// Input from the user
let inputString = "swapnil238";

// Check if the string is numeric using a regular expression
if (/^\d+(\.\d+)?$/.test(inputString)) {
    console.log(`"${inputString}" is a numeric string.`);
} else {
    console.log(`"${inputString}" is not a numeric string.`);
}

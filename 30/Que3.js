
// Input from the user
let str = prompt("Enter a string: ");

// Remove all whitespaces from the string
let result = str.replace(/\s+/g, ''); // Replace all whitespace characters with an empty string

// Display the result
console.log("String after removing all whitespaces: '" + result + "'");

// The expression /\s +/g is a regular expression
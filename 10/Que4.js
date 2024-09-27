// Program to Find ASCII Value of a character

function findAsciiValue(char) {
    return char.charCodeAt(0);
    // charCodeAt(0) is used to get the ASCII value of the first character in a string.
    // charCodeAt() is a method of the String object in JavaScript.
}

let character = 'S';
let asciiValue = findAsciiValue(character)

console.log(asciiValue)
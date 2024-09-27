// Function to check if a number is a palindrome

function isPalindrome(number) {
    // Convert the number to a string
    let str = number.toString();

    // Reverse the string
    let reversedStr = str.split('').reverse().join('');

    // Check if the original string and the reversed string are the same
    return str === reversedStr;
}

// Input from the user

let num = parseInt(prompt("Enter a number: "));

// Calling the function and displaying the result

if (isPalindrome(num)) {
    console.log(num + " is a palindrome.");
}

else {
    console.log(num + " is not a palindrome.");
}

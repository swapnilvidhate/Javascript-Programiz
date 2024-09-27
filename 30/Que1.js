// Input from the user
let num = 20;

console.log("The factors of " + num + " are:");

// Loop through numbers from 1 to the given number
for (let i = 1; i <= num; i++) {
    // Check if the number is divisible by i
    if (num % i === 0) {
        console.log(i);  // Print the factor
    }
}

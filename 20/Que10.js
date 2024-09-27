// Input from the user
let num = parseInt(prompt("Enter a number: "));

if (num <= 1) {
    console.log(num + " is not a prime number.");  // Prime numbers must be greater than 1
}

else if (num === 2 || num === 3) {
    console.log(num + " is a prime number.");  // 2 and 3 are prime numbers
}

else if (num % 2 === 0 || num % 3 === 0) {
    console.log(num + " is not a prime number.");  // If divisible by 2 or 3, it's not prime
}

else {
    console.log(num + " is a prime number.");  // If it passes above checks, it's prime
}

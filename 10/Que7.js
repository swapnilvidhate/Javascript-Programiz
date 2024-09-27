// Program to Check Whether a Number is Even or Odd 

function checkEvenOdd(number) {

    if (number % 2 == 0) {
       return console.log("The Number Is Sum")
    }
    else {
       return console.log("The Number Is Odd")
    }
}

const userInput = parseInt(prompt("Enter A Valid Number"))

if (!isNaN(userInput)) {
    const result = checkEvenOdd(userInput)
}
else {
    alert("Enter A Valid Number Please")
}
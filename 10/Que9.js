// Function to find the largest of three numbers

function findLargest(num1, num2, num3) {

    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } 
    else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } 
    else {
        return num3;
    }

}

// Input from the user
const num1 = 40
const num2 = 90
const num3 = 80

// Check and display the largest number
const largest = findLargest(num1, num2, num3);

console.log(largest)
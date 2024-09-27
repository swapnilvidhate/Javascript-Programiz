
const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 

for (let i = 0; i < alphabets.length; i++) {
    console.log(alphabets[i]); // Print each character
}


// or 

// Function to display alphabets from A to Z
function displayAlphabets() {
    console.log("Alphabets from A to Z:");
    for (let i = 65; i <= 90; i++) { // ASCII values for A to Z
        console.log(String.fromCharCode(i)); // Convert ASCII value to character
    }
}

// Call the function to display alphabets
displayAlphabets();
// Function to check if a character is a vowel or consonant

function checkVowelConsonant(char) {

    // Convert the character to lowercase to handle both cases
    char = char.toLowerCase();

    // Check if the character is a vowel

    if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
        return "Vowel";
    }

    else if (char >= 'a' && char <= 'z') {
        return "Consonant";
    }

    else {
        return "Not a valid alphabet";
    }
}

let inputChar = 's'

const result = checkVowelConsonant(inputChar);
console.log(result)


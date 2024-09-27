//first array
let array1 = [1, 2, 3];

//second array
let array2 = [4, 5, 6];

// Concatenate the arrays using the concat() method
let concatenatedArray1 = array1.concat(array2);
console.log(concatenatedArray1);

// Concatenate the arrays using the spread operator
let concatenatedArray2 = [...array1, ...array2];
console.log(concatenatedArray2);

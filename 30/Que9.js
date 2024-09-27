// Define the first list (array)
let list1 = [1, 2, 3, 4];

// Define the second list (array)
let list2 = [5, 6, 7, 8];

// Join the two lists using concat() method

let joinedList1 = list1.concat(list2);
console.log("Joined List using concat():", joinedList1);

// Join the two lists using spread operator

let joinedList2 = [...list1, ...list2];
console.log("Joined List using spread operator:", joinedList2);

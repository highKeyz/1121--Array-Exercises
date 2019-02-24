// Return an array by adding an opening [ and closing ] (square brackets)
function newArray() {
 
    return [];

}

// Return an array with a string. Add the string between the two square brackets
function arrayOneString() {
 
    return ["zwade"];

}

// Return an array with two strings. To separate the strings add a comma in between
function arrayTwoStrings() {
   
    return ["zwade","outstanding"];

}

// Return an array with five numbers
function listFiveNumbers() {
    
    return [1,2,3,4,5];

}

// Get and return the first element of an array by adding square brackets and selecting the 0 index
// BEFORE: ["Matt", "Alexis"] => AFTER: "Matt"
function firstElement(names) {
    
    return names [0];

}

// Get and return the second element
// BEFORE: ["Logan", "Guardians of the Galaxy"] => AFTER: "Guardians of the Galaxy"
function secondElement(movies) {
    
    return movies [1];

}

// Get and return the fifth element
// BEFORE: [90, 100, 24, 78, 80] => AFTER: 80
function fifthElement(highScores) {
    
    return highScores [4];

}

// The array will contain two elements, a first name and a last name.
// Combine and return the first name, followed by a space, then followed by the last name
// BEFORE: ["Bruce", "Wayne"] => AFTER: "Bruce Wayne"
function sayName(name) {
   
   return name [0] + " "+ name[1];

}

// The array will contain three elements, a first, middle and last name.
// Get the first and last elements and return it as an array
// BEFORE: ["Barack", "Hussein", "Obama"] => AFTER: ["Barack", "Obama"]
function arrayProperName(fullName) {
    
    return [fullName[0] , fullName[2]];
}

// The array will contain three elements with numbers.
// Add and return the sum of the three numbers
// BEFORE: [1, 2, 3] => AFTER: 6
function sumGrades(grades) {
    
    return sumGrades[0]+sumGrades[1]+sumGrades[2];
    
}

// The array will contain three elements with numbers.
// Add and return the average of the three numbers
// BEFORE: [1, 2, 3] => AFTER: 2
function avgGrade(grades) {
    return avgGrade[0]+avgGrade[1]+avgGrade[2];
}

// The array will contain three elements with numbers.
// Make and return a new array that contains each element multiplied by 2
// BEFORE: [1, 2, 3] => AFTER: [2, 4, 6]
function doubleNumbers(points) {
    return doubleNumbers[0]+doubleNumbers[1]+doubleNumbers[2];
}

// Write a function named lastElement with a parameter colors
// The array will vary in length.
// You will need to use .length method (use Google or ask a mentor!) to get and return the last element of the array
// BEFORE: ["Red", "Blue", "Yellow"] => AFTER: "Yellow"


// Write a function named firstPlusLastElement with a parameter edges
// The array will vary in length
// Use what you learned on the last problem to solve this problem.
// Add and return the sum of the first and last elements of the array.
// BEFORE: [1, 2, 3] => AFTER: 4


// Write a function named firstPlusCenterPlusLastElement with a parameter edges
// The array will always be an odd number > 2
// Add and return the first, middle and last elements of the array.
// BEFORE: [1, 2, 3, 4, 5] => AFTER: 9


// Write a function named sumGradesImproved with a parameter grades
// The grades array will have 3 elements and may contain positive and negative values
// Go through every element of this array then add and return only the positive values
// BEFORE: [10, -10, 5] => AFTER: 15

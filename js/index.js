// Prevent us from attempting to use variables
// that are not declared
"use strict"
// example of if statement
let nineLives = false;

if (nineLives === true) {
    console.log("You have more life");
}

// example of if/else statement

let danIsADog = false;

if (danIsADog === true) {
    console.log("WOOF");
} else {
    console.log("Dan is a human.");
}

//example of if/else if/else

let healthPoints = 7;

if (healthPoints >= 10) {
    console.log("Hero is healthy.");
} else if (healthPoints < 10 && healthPoints >= 5) {
    console.log("Hero is slightly damaged.");
} else {
    console.log("Hero is close to death.");
}
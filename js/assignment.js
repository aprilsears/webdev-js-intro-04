"use strict";

const ageInputEl = document.getElementById("age-input");
const submissionBtn = document.getElementById("submission-btn");
const responseEl = document.getElementById("response");
let age;

function checkAgeAndRespond() {
    age = parseInt(ageInputEl.value);
    
    if (age >= 21) {
        responseEl.textContent = "You can vote and purchase alcohol.";
    } else if (age >= 18) {
        responseEl.textContent = "You can vote, but you cannot purchase alcohol.";
    } else {
        responseEl.textContent = "You cannot vote and you cannot purchase alcohol.";
    }
}

submissionBtn.addEventListener("click", checkAgeAndRespond);

function validateInput(event) {
    const invalidCharacters = ["e", "E", "-", "+"];
    if (invalidCharacters.includes(event.key)) {
        event.preventDefault();
    }
}

ageInputEl.addEventListener("keydown", validateInput);
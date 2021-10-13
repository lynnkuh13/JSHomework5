// Number to guess (random)
// Have a space for user to enter 
// Have a submit button
// Tell me does the number that I guessed lower,higher, or correct than the random number

// Tracking
// How many total tries the user has
// How many correct answer the user has 

// Settings
// Provide a button to reset the number
// Provide a button to reset the score, tries I get 

// HTML, Flexbox

// Function to create random number

function randomNumberGen() {

   let number =  parseInt(Math.floor(Math.random() * 100)) + 1;
   return number;

}

// Function to reset the number
function resetNumber() {
    let resetNumber = randomNumberGen();
    console.log("reset the number");
}

// Function to reset the tries
function resetTries() {

    let inputbox = document.getElementById("input").placeholder;
    inputbox = "Enter a number";
    let result = document.getElementById("result");
    result.innertext = "";
}

// Function to reset the score

function resetScore() {

    let result = document.getElementById("result");
    result.innertext = "";
    correctAnswer = 0;
}

// get the number from the user
let userNumber = parseInt(document.getElementById("userinput").value);
 console.log(userNumber);

let randomNumber = randomNumberGen();
console.log(randomNumber);

let result = document.getElementById("result");
let tries = document.getElementById("tries");
let score = document.getElementById("score");

let triesDone = 0;
let correctAnswer = 0;


function guesses() {

    let userNumber = parseInt(document.getElementById("userinput").value);
        console.log(userNumber);

    if ( userNumber === randomNumber) {

        console.log("userNumber " + userNumber);
        console.log("Congratulations you got the number");
        result.innerText = "Congratulations you got the number.";
        correctAnswer++;
        score.innerText = "You have " + correctAnswer + "number of correct answers";
        triesDone++;
        console.log("The number of tries is: ", triesDone);
        tries.innerText = "You have " + triesDone + " tries.";
        console.log("The number of correct answers ", correctAnswer);
    }
    else if ( userNumber > randomNumber) {

        console.log("The number is lower");
        result.innerText = "The number is lower";
        triesDone++;
        tries.innerText = "You have " + triesDone + " tries.";
        console.log("The number of tries is: ", triesDone);
        score.innerText = "You have " + correctAnswer + "number of correct answers";
    }
    else {
        console.log("The number is higher");
        console.log("userNumber " + userNumber);
        result.innerText = "The number is higher";
        triesDone++;
        tries.innerText = "You have " + triesDone + " tries.";
        console.log("The number of tries is: ", triesDone);
        score.innerText = "You have " + correctAnswer + " number of correct answers";


    }


}
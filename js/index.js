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

   let number =  Math.ceil(Math.random()) * 100;
   return number;

}

// Function to reset the number
function resetNumber() {
    let resetNumber = randomNumberGen();
}

// Function to reset the score, tries I get
function resetTries() {

    let inputbox = document.getElementById("input");
    inputbox. value = "";
    innertext = "";
    innertext = "";
}

// get the number from the user
let userNumber = document.getElementById("input");

let randomNumber = randomNumberGen();

let tries = 0;
let correctAnswer = 0;


userNumber.addEventListener("click", function() {


    if ( userNumber === randomNumber) {

        console.log("Congratulations you got the number");
        tries++;
    }
    else if ( userNumber > randomNumber) {

        console.log("The number is lower");
        tries++;
        correctAnswer++;
        console.log("The number of tries is:", tries);
        console.log("The number of correct answers:", correctAnswer);
    }
    else {
        console.log("The number is higher");
        tries++;

    }


})
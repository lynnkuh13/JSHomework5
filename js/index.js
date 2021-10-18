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

var result = document.getElementById("result");
var tries = document.getElementById("tries");
var score = document.getElementById("score");

var triesDone = 0;
var correctAnswer = 0;

let randomNumber = randomNumberGen();
console.log(randomNumber);
textBoxFocus();

// Function to create random number

function randomNumberGen() {

   let number =  parseInt(Math.floor(Math.random() * 100)) + 1;
   console.log(number);
   return number;

}

// Function to reset the number
function resetNumber() {

   this.randomNumber = parseInt(Math.floor(Math.random() * 100)) + 1;
   console.log(this.randomNumber);

}

// Function to reset the tries
function resetTries() {

    var inputbox = document.getElementById("userinput").placeholder;
    console.log("inputbox" + inputbox);
    inputbox.value = "Enter a number";
    textBoxFocus();
    let tries = document.getElementById("tries");
    tries.style.backgroundColor = "transparent";
    tries.innerText = "";
    triesDone = 0;
    
   return triesDone;

}

// Function to reset the score

function resetScore() {

    var inputbox = document.getElementById("userinput").placeholder;
    console.log("inputbox" + inputbox);
    inputbox.value = "Enter a number";  
    textBoxFocus();
    let score = document.getElementById("score");
    score.innerText = "";
    score.style.backgroundColor = "transparent";
    console.log("this.correctAnswer " + correctAnswer);
    correctAnswer = 0;
    console.log("this.correctAnswer " + correctAnswer);
  
    
}

// function to onFocus() the textbox

function textBoxFocus() {
    document.getElementById("userinput").focus();
}


function guesses() {

    let userNumber = parseInt(document.getElementById("userinput").value);
        console.log(userNumber);

    if ( userNumber === randomNumber) {

        console.log("userNumber " + userNumber);
        console.log("Congratulations you got the number");
        result.style.backgroundColor = "indigo";
        result.innerText = "Congratulations you got the number.";
        correctAnswer++;
        score.style.backgroundColor = "indigo";
        score.innerText = "You have " + correctAnswer + " correct answers";
        triesDone++;
        console.log("The number of tries is: ", triesDone);
        tries.style.backgroundColor = "indigo";
        tries.innerText = "You have " + triesDone + " tries.";
        console.log("The number of correct answers ", correctAnswer);
        var input = document.getElementById("userinput");
        console.log("input " + input);
        input.value = "";
        var inputbox = document.getElementById("userinput").placeholder;
        console.log("inputbox " + inputbox);
        inputbox.value = "Enter a number";  
        textBoxFocus();

    }
    else if ( userNumber > randomNumber) {

        console.log("The number is lower");
        result.style.backgroundColor = "indigo";
        result.innerText = "The number is lower";
        triesDone++;
        tries.style.backgroundColor = "indigo";
        tries.innerText = "You have " + triesDone + " tries.";
        console.log("The number of tries is: ", triesDone);
        score.style.backgroundColor = "indigo";
        score.innerText = "You have " + correctAnswer + " of correct answers";
        var input = document.getElementById("userinput");
        console.log("input " + input);
        input.value = "";
        var inputbox = document.getElementById("userinput").placeholder;
        console.log("inputbox" + inputbox);
        inputbox.value = "Enter a number"; 
        textBoxFocus();
    }
    else {
        console.log("The number is higher");
        console.log("userNumber " + userNumber);
        result.style.backgroundColor = "indigo";
        result.innerText = "The number is higher";
        triesDone++;
        tries.style.backgroundColor = "indigo";
        tries.innerText = "You have " + triesDone + " tries.";
        console.log("The number of tries is: ", triesDone);
        score.style.backgroundColor = "indigo";
        score.innerText = "You have " + correctAnswer + "  of correct answers";
        var input = document.getElementById("userinput");
        console.log("input " + input);
        input.value = "";
        var inputbox = document.getElementById("userinput").placeholder;
        console.log("inputbox" + inputbox);
        inputbox.value = "Enter a number"; 
        textBoxFocus();


    }


}
let x = Math.floor(Math.random() * 100);
let compChoice = "";
let humChoice = prompt("What's your choice? (1) rock / (2) paper / (3) scissors");
humanScore = 0;
compScore = 0;

// Make computer choose randomly.

function getComputerChoice(x, compChoice) {
    if (x >= 0 && x <= 33) {
        return compChoice = "rock";
    } else if (x >= 34 && x <= 66) {
        return compChoice = "paper";
    } else if (x >= 67 && x <= 99) {
        return compChoice = "scissors";
    }
}

getComputerChoice(x, compChoice);


// Prompt for user choice.

function getHumanChoice(humChoice) {
    if (humChoice === "1") {
        return humChoice = "rock";
    } else if (humChoice === "2") {
        return humChoice = "paper";
    } else if (humChoice === "3") {
        return humChoice = "scissors";
    } else {
        return humChoice = "Invalid!";
    }
}

getHumanChoice(humChoice);

// Gameplay

function playRound(humChoice, compChoice) {
    if (humChoice === "rock" && compChoice === "scissors"
        || humChoice === "paper" && compChoice === "rock"
        || humChoice === "scissors" && compChoice === "paper") {
        return console.log(`${humChoice} vs. ${compChoice} - you win!`);
    } else if (humChoice === "rock" && compChoice === "paper"
        || humChoice === "paper" && compChoice === "scissors"
        || humChoice === "scissors" && compChoice === "rock") { 
        return console.log(`${humChoice} vs. ${compChoice} - computer wins!`);
    } else if (humChoice === "rock" && compChoice === "rock" 
        || humChoice === "paper" && compChoice === "paper"
        || humChoice === "scissors" && compChoice === "scissors") {
        return console.log(`${humChoice} vs. ${compChoice} - it's a tie!`);
    }
}

const humSelection = getHumanChoice(humChoice);
const compSelection = getComputerChoice(x, compChoice);

playRound(humSelection, compSelection);
// Make computer choose randomly.

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 100);
    if (compChoice >= 0 && compChoice <= 33) {
        return compChoice = "rock";
    } else if (compChoice >= 34 && compChoice <= 66) {
        return compChoice = "paper";
    } else {
        return compChoice = "scissors";
    }
}

// Prompt for user choice.

function getHumanChoice() {
    let humChoice = prompt("What's your choice? (1) rock / (2) paper / (3) scissors");
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

// Gameplay - individual round

let humanScore = 0;
let compScore = 0;

function playRound(humChoice, compChoice) {
    if (humChoice === "rock" && compChoice === "scissors"
        || humChoice === "paper" && compChoice === "rock"
        || humChoice === "scissors" && compChoice === "paper") {
        return [console.log(humanScore++, `${humChoice} vs. ${compChoice} - you win! human: ${humanScore} - computer: ${compScore}`)];
    } else if (humChoice === "rock" && compChoice === "paper"
        || humChoice === "paper" && compChoice === "scissors"
        || humChoice === "scissors" && compChoice === "rock") { 
        return console.log(compScore++, `${humChoice} vs. ${compChoice} - computer wins! human: ${humanScore} - computer: ${compScore}`);
    } else if (humChoice === "rock" && compChoice === "rock" 
        || humChoice === "paper" && compChoice === "paper"
        || humChoice === "scissors" && compChoice === "scissors") {
        return console.log(`${humChoice} vs. ${compChoice} - it's a tie! human: ${humanScore} - computer: ${compScore}`);
    } else {
        return console.log("Try again.");
    }
}

// Gameplay - full game

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humSelection = getHumanChoice();
        if (humSelection === "Invalid!") {
            console.log("Invalid. Please choose (1) rock, (2) paper, or (3) scissors.");
            i--; // Repeat if input is invalid
            continue;
        }
        const compSelection = getComputerChoice();
        playRound(humSelection, compSelection);
    }
    
    // Display winner
    if (humanScore > compScore) {
        console.log("you win the game!");
    } else if (compScore > humanScore) {
        console.log("computer wins the game!");
    } else {
        console.log("tie!");
    }
}

playGame ();
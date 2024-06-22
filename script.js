let x = Math.floor(Math.random() * 100);
let compChoice = "";
let humChoice = prompt("What's your choice? (1) rock / (2) paper / (3) scissors");
humanScore = 0;
compScore = 0;

// Make computer choose randomly.

function getComputerChoice(x, compChoice) {
    if (x >= 0 && x <= 33) {
        return console.log(compChoice = "rock");
    } else if (x >= 34 && x <= 66) {
        return console.log(compChoice = "paper");
    } else if (x >= 67 && x <= 99) {
        return console.log(compChoice = "scissors");
    }
}

getComputerChoice(x, compChoice);


// Prompt for user choice.

function getHumanChoice (humChoice) {
    if (humChoice === "1") {
        return console.log(humChoice = "rock");
    } else if (humChoice === "2") {
        return console.log(humChoice = "paper");
    } else if (humChoice === "3") {
        return console.log(humChoice = "scissors");
    } else {
        return console.log(humChoice = "Invalid!");
    }
}

getHumanChoice (humChoice);
let x = Math.floor(Math.random() * 100);

let choice = "";

function getComputerChoice(x, choice) {
    if (x >= 0 && x <= 33) {
        return console.log(choice = "rock");
    } else if (x >= 34 && x <= 66) {
        return console.log(choice = "paper");
    } else if (x >= 67 && x <= 99) {
        return console.log(choice = "scissors");
    }
}

getComputerChoice(x, choice);
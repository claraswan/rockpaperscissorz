function returnRandomStringFromArray(array) {
    return array[Math.floor ( Math.random() * array.length )];
}

function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    return returnRandomStringFromArray(choices);
}

function playRound(playerSelection, computerSelection) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Choose rock, paper, or scissors!");

    playerSelection.toLowerCase();

    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return ("You win! Rock beats scissors.");
        } else if (computerSelection == "paper") {
            return ("You lose! Paper beats rock.");
        } else if (computerSelection == "rock") {
            return ("It's a tie!");
        }

    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return ("You lose! Scissors beat paper.");
        } else if (computerSelection == "rock") {
            return ("You win! Paper beats rock.");
        } else if (computerSelection == "paper") {
            return ("It's a tie!");
        }

    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return ("You lose! Rock beats scissors.");
        } else if (computerSelection == "paper") {
            return ("You win! Scissors beat paper.");
        } else if (computerSelection == "scissors") {
            return ("It's a tie!");
        }

    } else {
        return ("Please choose either rock, paper, or scissors.");
    }
}

let playerSelection = prompt("Choose rock, paper, or scissors!");

for (let i = 0; i < 5; i++) {
    console.log(playRound());
 }


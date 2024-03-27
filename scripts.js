function getComputerChoice() {

    let choice = Math.floor(Math.random()*3);

    if (choice === 0) {
        return ("rock");
    } else if (choice === 1) {
        return ("paper");
    } else {
        return ("scissors");
    }
}

function playRound (playerSelection, computerSelection) { 

    if (playerSelection.toLowerCase() === computerSelection) {
        return ("Tie!");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return ("You won. Rock beats scissors!");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return ("You lost. Paper beats rock");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return ("You lost. Rock beats scissors");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return ("You won. Scissors beats paper");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return ("You won. Paper beats rock");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return ("You lost. Scissors beats paper");
        
    }
    }
    


const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));






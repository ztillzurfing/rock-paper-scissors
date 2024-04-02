let playerScore = 0;
let computerScore = 0;

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

    if (playerSelection === computerSelection) {
        return ("Tie!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return ("You won. Rock beats scissors!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return ("You lost. Paper beats rock");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return ("You lost. Rock beats scissors");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("You won. Scissors beats paper");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return ("You won. Paper beats rock");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return ("You lost. Scissors beats paper");
        
    }
    }

function playGame() {  

    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt("Rock, Paper or Scissors?");
        playerSelection = playerSelection.toLowerCase();
        
        const computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        alert("The computer chose " + computerSelection); 
        alert(result);
        if (result.includes("won")) {
            playerScore++;
            
        } else if (result.includes("lost")) {
            computerScore++;
                  
            
        }    
            }
       
    if (playerScore > computerScore) {
        alert("you win the game!");
    } else if(computerScore > playerScore) {
            alert("you lose the game!")
        }
        
        
    }        
    
playGame();
    











let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    let compChoice = Math.floor(Math.random() * 3);
        
    if (compChoice === 0) {
        return ("rock");
    } else if (compChoice === 1) {
        return ("paper");
    } else {
        return ("scissors");
    }
    }
    
 

function getHumanChoice() {

        let text = prompt("Rock Paper or Scissors?", "");
        let humChoice = text.toLowerCase();

        if (humChoice === "rock") {
            return ("rock");
        } else if (humChoice === "paper") {
            return ("paper");
        } else if (humChoice === "scissors") {
            return ("scissors")
        } else {
            return ("not valid")
        }
    } 


function playRound (humanChoice, computerChoice) {
  
    if (humanChoice === computerChoice) {
        console.log("Tie!");

    } else if ((humanChoice === "rock" && computerChoice === "scissors")  ||
               (humanChoice === "scissors" && computerChoice === "paper") ||
               (humanChoice === "paper" && computerChoice === "rock")
              ) 
              { ++humanScore; 
                console.log (`You won! ${humanChoice} beats ${computerChoice}!`);

    } else if ((humanChoice === "rock" && computerChoice === "paper")    ||
               (humanChoice === "scissors" && computerChoice === "rock") ||
               (humanChoice === "paper" && computerChoice === "scissors")
              ) {
                ++computerScore;
                console.log(`You lost! ${computerChoice} beats ${humanChoice}!`)
              }      
 
}



function playGame() {

    
    
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
        
    playRound(humanSelection, computerSelection);
    console.log("humanity:",humanScore,"The machine spirit:",computerScore);
    

    if (humanScore > computerScore) {
        console.log("you won the game! humanity:",humanScore,"The machine spirit:",computerScore);
    } else if (computerScore > humanScore) {
        console.log("you lost the game! humanity:",humanScore,"The machine spirit:",computerScore);
    } else if (humanScore === computerScore) {
        console.log("it's a draw! humanity:",humanScore,"The machine spirit:",computerScore);
    }
   

}

// const rockBtn = document.querySelector("#rockBtn");
// rockBtn.onclick = () => alert("Hello World");

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


    const result = document.querySelector(".result");   

    function playRound (humanChoice, computerChoice) {
    
        if (humanChoice === computerChoice) {
            result.textContent = "Tie!";


        } else if ((humanChoice === "rock" && computerChoice === "scissors")  ||
                (humanChoice === "scissors" && computerChoice === "paper") ||
                (humanChoice === "paper" && computerChoice === "rock")
                ) 
                { ++humanScore; 
                    result.textContent = `You won! ${humanChoice} beats ${computerChoice}!`;

        } else if ((humanChoice === "rock" && computerChoice === "paper")    ||
                (humanChoice === "scissors" && computerChoice === "rock") ||
                (humanChoice === "paper" && computerChoice === "scissors")
                ) {
                    ++computerScore;
                    result.textContent = `You lost! ${computerChoice} beats ${humanChoice}!`;
                }      
    
    }
    function endGame() {
        if (humanScore === 5) {
            result.textContent += "\nyou won the game!"
        } else if (computerScore === 5) {
            result.textContent += "\nyou lost the game!"
       
        }
    }

    function playGame() {
      
    
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {
            const computerSelection = getComputerChoice();
            playRound(button.id, computerSelection)
            result.textContent += ` Humanity: ${humanScore} The Machine Spirit: ${computerScore}`
            endGame();
            
        })
    }); 
    

    }
  
    playGame();
    


   
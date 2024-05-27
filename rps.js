const humanScoreE = document.querySelector("#human-score");
const computerScoreE = document.querySelector("#computer-score");
const choiceButtonsE = document.querySelector("#choice-menu");
const dialogueE = document.querySelector("#dialogue");

let humanScore = 0; 
let computerScore = 0;

// human clicks choice
choiceButtonsE.addEventListener("click", (event) => {
    let computerChoice = getComputerChoice();
    let humanChoice = event.target;
    switch(humanChoice.id) {
        case 'rock':
            switch(computerChoice) {
                case 1:
                    tiedRound();
                    break;
                case 2:
                    computerWinsRound();
                    break;
                case 3:
                    humanWinsRound();
                    break;
            }
            break;
        case 'paper':
            switch(computerChoice) {
                case 1:
                    humanWinsRound();
                    break;
                case 2:
                    tiedRound();
                    break;
                case 3:
                    computerWinsRound();
                    break;
            }
            break;
        case 'scissors':
            switch(computerChoice) {
                case 1:
                    computerWinsRound();
                    break;
                case 2:
                    humanWinsRound();
                    break;
                case 3:
                    tiedRound();
                    break;
            }
            break;
    }
    updateScore(humanScoreE, humanScore, computerScoreE, computerScore);
    if (computerScore>4) {
        dialogueE.innerText = "Computer wins the game!";
        humanScore = 0;
        computerScore = 0;
    }
    else if (humanScore>4) {
        dialogueE.innerText = "Human wins the game!";
        humanScore = 0;
        computerScore = 0;
    }
})

function getComputerChoice() {
    return Math.floor(Math.random() * (4 - 1) + 1);
}

function humanWinsRound() {
    humanScore++;
    dialogueE.innerText = "You win this round! Make your next move.";
}

function tiedRound() {
    dialogueE.innerText = "No one wins this round. Make your next move.";
}

function computerWinsRound() {
    computerScore++;
    dialogueE.innerText = "The computer wins this round! Make your next move.";
}

function updateScore(humanScoreE, humanScore, computerScoreE, computerScore) {
    humanScoreE.innerText = humanScore;
    computerScoreE.innerText = computerScore;
}



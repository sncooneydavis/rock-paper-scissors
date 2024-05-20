function playGame() {
    let round = 1; 
    let humanScore = 0; 
    let computerScore = 0;
    let computerChoice, humanChoice;
    while (round < 6) {
        console.log(`Round: ${round}`);
        computerChoice = Math.floor(Math.random() * (4 - 1) + 1);
        humanChoice = getHumanChoice();
        let scoreUpdate = roundWinner(computerChoice, computerScore, humanChoice, humanScore);
        computerScore = scoreUpdate[0];
        humanScore = scoreUpdate[1];
        console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);
        round++;
    }
    console.log("~GAME OVER~");
    gameWinner(humanScore, computerScore);  
    return;    
}

// get human choice (input)
function getHumanChoice() {
    while (true) {
        stringChoice = prompt("What is your choice?:");
        if (stringChoice == "rock") {
            console.log("You play ROCK.");
            return 1;
        }
        else if (stringChoice == "paper") {
            console.log("You play PAPER.");
            return 2;
        }
        else if (stringChoice == "scissors") {
            console.log("You play SCISSORS.");
            return 3;
        }
    }
}

// find round winner
function roundWinner(computerChoice, computerScore, humanChoice, humanScore) {
    switch(computerChoice) {
        case 1:
            console.log("Computer plays ROCK.");
            switch(humanChoice) {
                case 3:
                    console.log("You lose this round.");
                    return [++computerScore, humanScore];
                case 2:
                    console.log("You win this round!");
                    return [++computerScore, humanScore];
                case 1:
                    console.log("You are tied.");
                    return [computerScore, humanScore];
            }
            break;
        case 2:
            console.log("Computer plays PAPER.");
            switch(humanChoice) {
                case 1:
                    console.log("You lose this round.");
                    scoreUpdate = [++computerScore, humanScore];
                    return scoreUpdate;
                case 3:
                    console.log("You win this round!");
                    return [computerScore, ++humanScore];
                case 2:
                    console.log("You are tied.");
                    return [computerScore, humanScore];
            }
            break;
        case 3:
            console.log("Computer plays SCISSORS.");
            switch(humanChoice) {
                case 1:
                    console.log("You win this round.");
                    return [computerScore, ++humanScore];
                case 2:
                    console.log("You lose this round!");
                    return [++computerScore, humanScore];
                case 3:
                    console.log("You are tied.");
                    return [computerScore, humanScore];
            }
    }
}

function gameWinner (humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("You Win the Game!!!")
    }
    else if (computerScore > humanScore) {
        console.log("You lose the game...")
    }
    else console.log("The game is tied.")
}



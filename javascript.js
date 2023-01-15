function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    return choice; /*=== 1 ? "Rock" :
    choice === 2 ? "Paper" :
    choice === 3 ? "Scissors":
    "Nan";*/
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == 2){
        computerScore++;
        return alert("You lose, Paper beats Rock");
    }
    else if (playerSelection == "paper" && computerSelection == 1){
        playerScore++;
        return alert("You win, Paper beats Rock");
    }
    else if (playerSelection == "rock" && computerSelection == 3){
        playerScore++;
        return alert("You win, Rock beats Scissors");
    }
    else if (playerSelection === "scissors" && computerSelection === 1){
        computerScore++;
        return alert("You lose, Rock beats Scissors");
    }
    else if (playerSelection === "paper" && computerSelection === 3){
        computerScore++;
        return alert("You lose, Scissors beats Paper");
    }
    else{
        playerScore++;
        return alert("You win, Scissors beats Paper");
    }
}



function game (){
    for (let i = 1; i <=5 ; i++){

        let playerSelection = prompt("?");
        const computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
    }
}

game();
alert("Your score is: " + playerScore + "\n Computer score is: " + computerScore);
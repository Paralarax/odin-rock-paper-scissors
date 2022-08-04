
var buttons = document.querySelectorAll("img");
var scores = document.querySelectorAll(".score p");
var info = document.querySelectorAll(".info p");

var counter = 0;
var playerScore = 0;
var computerScore = 0;


function button(e) {
    let choice = "";

    if (e.target.alt === "rock button") {
        choice = "rock";
    }
    else if (e.target.alt === "paper button") {
        choice = "paper";
    }
    else if (e.target.alt === "scissors button") {
        choice = "scissors";
    }
    WinLose(choice);
}

buttons.forEach(element => {
    element.addEventListener("click", function(e) {button(e)});
});



function ComputerChoice() {
    const random = Math.floor(Math.random() * 3)

    let choice = "";

    if (random === 0) {
        choice = "rock";
    }
    else if (random === 1) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    return choice
}

function updateScore() {

    counter++;

    scores[0].textContent = "Player score: " + playerScore.toString();
    scores[1].textContent = "Computer score: " + computerScore.toString();

    if (counter === 5) {
        if (playerScore === computerScore) {
            info[0].textContent = "GAME OVER, It's a tie";
        }
        else if (playerScore > computerScore) {
            info[0].textContent = "GAME OVER, You win!";
        }
        else {
            info[0].textContent = "GAME OVER, You lose!";
        }

        counter = 0;
        playerScore = 0;
        computerScore = 0;
    }
}

function WinLose(choice) {

    playerChoice = choice;
    computerChoice = ComputerChoice();

    if (playerChoice === computerChoice) {
        info[0].textContent = "It's a tie!";
        info[1].textContent = "";
    }
    else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        info[0].textContent = "You win!";
        info[1].textContent = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1) + " beats " + computerChoice;
    }
    else {
        computerScore++;
        info[0].textContent = "You lose!";
        info[1].textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + playerChoice;
    }

    updateScore();
}

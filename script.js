
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
    console.log(choice);
    return choice
}

function WinLose(choice) {

    counter++;

    playerChoice = choice;
    computerChoice = ComputerChoice();

    if (playerChoice == computerChoice) {
        console.log("It's a tie!");
        info[0].textContent = "It's a tie!";
    }
    else if (playerChoice == "rock") {
        if (computerChoice == "scissors") {
            console.log("You win!");
            playerScore++;
            info[0].textContent = "You win!";
            info[1].textContent = "Rock beats scissors!";
        }
        else {
            console.log("You lose!");
            computerScore++;
            info[0].textContent = "You lose!";
            info[1].textContent = "Paper beats rock!";
        }
    }
    else if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win!");
            playerScore++;
            info[0].textContent = "You win!";
            info[1].textContent = "Paper beats rock!";
        }
        else {
            console.log("You lose!");
            computerScore++;
            info[0].textContent = "You lose!";
            info[1].textContent = "Scissors beats paper!";
        }
    }
    else if (playerChoice == "scissors") {
        if (computerChoice == "paper") {
            console.log("You win!");
            playerScore++;
            info[0].textContent = "You win!";
            info[1].textContent = "Scissors beats paper!";
        }
        else {
            console.log("You lose!");
            computerScore++;
            info[0].textContent = "You lose!";
            info[1].textContent = "Rock beats scissors!";
        }
    }

    scores[0].textContent = "Player score: " + playerScore.toString();
    scores[1].textContent = "Computer score: " + computerScore.toString();

    if (counter === 5) {
        if (playerScore === computerScore) {
            console.log("Endgame: It's a tie");
            info[0].textContent = "GAME OVER, It's a tie";
        }
        else if (playerScore > computerScore) {
            console.log("Endgame: Player wins!");
            info[0].textContent = "GAME OVER, You win!";
        }
        else {
            console.log("Endgame: Computer wins!");
            info[0].textContent = "GAME OVER, You lose!";
        }

        counter = 0;
        playerScore = 0;
        computerScore = 0;
    }
    
}

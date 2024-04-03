// Finished coding in replit
let playerScore = 0;
let computerScore = 0;
let draw = 0;
let round = 0;
let number = 0;
const gameArray = [playRound(), playRound(), playRound(), playRound(), playRound()]

function computerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock"
  } else if (randomNum === 1) {
    return "paper"
  }
  else if (randomNum === 2) {
    return "scissors"
  }
  return randomNum;
};

function playRound() {
  let computerSelection = computerChoice();
  let playerSelection = prompt("What do you think? rock, paper, or scissors?").toLowerCase();
  if (playerSelection === computerSelection) {
    draw++
    round++
    console.log(playerSelection);
    console.log(computerSelection);
    console.log("Your score: " + playerScore + ".\n Computer score: " + computerScore + ".\n draws: " + draw + ".\n Round: " + round + ".");
  } else if (playerSelection === "rock" && computerSelection === "scissors"
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper") {
    console.log(playerSelection);
    console.log(computerSelection);
    playerScore++
    round++
    console.log("Your score: " + playerScore + ".\n Computer score: " + computerScore + ".\n draws: " + draw + ".\n Round: " + round + ".");

  } else if (playerSelection === "scissors" && computerSelection === "rock"
    || playerSelection === "rock" && computerSelection === "paper"
    || playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++
    round++
    console.log(playerSelection);
    console.log(computerSelection);
    console.log("Your score: " + playerScore + ".\n Computer score: " + computerScore + ".\n draws: " + draw + ".\n Round: " + round + ".");

  }

  return playerSelection, computerSelection, playerScore, computerScore, round;
};

// Can't get this to play each round individually
function playGame() {
  gameArray
  if (computerScore > playerScore) {
    console.log("Computer wins!")
  } else if (playerScore > computerScore) {
    console.log("Player wins!")
  } else if (playerScore === computerScore || draw > playerScore && computerScore)
    console.log("It's a draw!")
}

playGame();
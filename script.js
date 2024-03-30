// Tried a lot of things at this point. Do I need a param? Do I need to assign Rock / Paper / Scissors to a value?
// Thank you guys this part is working now!!! 
// Made them all if statements!

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    
    if (randomNum === 0) {
        return 'rock'
    } if (randomNum === 1) {
        return 'paper'
    } if (randomNum === 2) {
        return 'scissors'
    }
}

function playerChoice() {
    parseInt(prompt("Choose rock, paper, or scissors.").toLowerCase);
    return 'rock' | 'paper' | 'scissors';
}
// Starting the playRound() here. I didn't need a pop up? I used parseInt but that did not seem to be the direction I was supposed to go.
// This is showing correctly in console.log(playRound)
/* 
It is correct but it isn't logically determining a winner. How do I set the params
for each iteration? 
Rock beats scissors, loses to paper, draws rock. 
Paper loses to scissors, ties paper. 
Scissors ties scissors.
*/

function playRound(playerSelection, computerSelection) {
    if ( playerSelection === 'rock' && computerSelection === 'rock'){
        return "Draw!";
    }
    if ( playerSelection === 'paper' && computerSelection === 'rock'){
        return "Loser!";
    }
    if ( playerSelection === 'scissors' && computerSelection === 'rock'){
        return "Win!";
    }
    if ( playerSelection === 'rock' && computerSelection === 'paper'){
        return "Loser!";
    }
    if ( playerSelection === 'rock' && computerSelection === 'scissors'){
        return "Win!";
    }
    if ( playerSelection === 'paper' && computerSelection === 'paper'){
        return "Draw!";
    }
    if ( playerSelection === 'paper' && computerSelection === 'scissor'){
        return "Loser!";
    }
    if ( playerSelection === 'scissors' && computerSelection === 'paper'){
        return "Win!";
    }
    if ( playerSelection === 'scissors' && computerSelection === 'scissors'){
        return "Draw!";
    }
    
}

/* function playGame(playRound) {
}
*/

// I feel like these should go to the top of my code?

const playerSelection = playerChoice(); 
//Commented this out to get rid of pop up everytime...
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

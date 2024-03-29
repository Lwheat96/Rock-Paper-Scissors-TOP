
function add2(num) {
    return num + 2;
}

console.log(add2(2));
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

// Starting the playRound() here. I didn't need a pop up? I used parseInt but that did not seem to be the direction I was supposed to go.
// This is showing correctly in console.log(playRound)

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'You tied!'
    }
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose!'
    }
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win!'
    }
}

/* function playGame(playRound) {
}
*/

// I feel like these should go to the top of my code?

const playerSelection = parseInt(prompt("Enter rock, paper, or scissors").toLowerCase);
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

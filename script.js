// Tried a lot of things at this point. Do I need a param? Do I need to assign Rock / Paper / Scissors to a value?
// Thank you guys this part is working now!!! 
// Made them all if statements!
const a = 'You win!';
const b = 'You lose!';
const c = 'Draw!';
const playerSelection = prompt('Choose rock, paper, or scissors.').toLowerCase();
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;
let draw = 0;
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
/* 
It is correct but it isn't logically determining a winner. How do I set the params
for each iteration? 
Rock beats scissors, loses to paper, draws rock. 
Paper loses to scissors, ties paper. 
Scissors ties scissors.
*/

function playRound(playerSelection, computerSelection) {
    if ( playerSelection == 'rock' && computerSelection == 'rock'){
        return c;
    }
    else if ( playerSelection === 'paper' && computerSelection === 'rock'){
        return b;
    }
    else if ( playerSelection === 'scissors' && computerSelection === 'rock'){
        return a;
    }
    else if ( playerSelection === 'rock' && computerSelection === 'paper'){
        return b;
    }
    else if ( playerSelection === 'rock' && computerSelection === 'scissors'){
        return a;
    }
    else if ( playerSelection === 'paper' && computerSelection === 'paper'){
        return c;
    }
    else if ( playerSelection === 'paper' && computerSelection === 'scissors'){
        return b;
    }
    else if ( playerSelection === 'scissors' && computerSelection === 'paper'){
        return a;
    }
    else if ( playerSelection === 'scissors' && computerSelection === 'scissors'){
        return c;
    }
    
}



// I think I can equal pS and cS to 1 and then count it to 3 to display the winner of the game?
function playGame() {
    if (playRound() === a) {
        ++playerScore
    } else {

    }
    if(playRound() === b) {
        ++computerScore
    } else {

    }
    if(playRound() === c) {
        draw++
    }

    return playRound(playerSelection, computerSelection);

}



// I feel like these should go to the top of my code?


console.log(playerSelection);
console.log(computerSelection);
console.log(playGame(playRound));
console.log(playerScore);
console.log(computerScore);

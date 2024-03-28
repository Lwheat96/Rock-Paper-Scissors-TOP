
function add2(num) {
    return num + 2;
}

console.log(add2(2));
// Tried a lot of things at this point. Do I need a param? Do I need to assign Rock / Paper / Scissors to a value?

function getComputerChoice() {
    let Rock = 0
    let Paper = 1
    let Scissors = 2
    if (getComputerChoice() === 0){
        return 'Rock';
    }
    if (getComputerChoice() === 1){
        return 'Paper';
    }
    if (getComputerChoice() === 0){
        return 'Scissors';
    }
    return Math.floor(Math.random() * 3 );

}

console.log(getComputerChoice())
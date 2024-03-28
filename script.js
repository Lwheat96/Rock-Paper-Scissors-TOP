
function add2(num) {
    return num + 2;
}

console.log(add2(2));
// Tried a lot of things at this point. Do I need a param? Do I need to assign Rock / Paper / Scissors to a value?

function getComputerChoice() {
    let Rock = 1
    let Paper = 2
    let Scissors = 3
    Math.floor(Math.random() + 3)
}

console.log(getComputerChoice())
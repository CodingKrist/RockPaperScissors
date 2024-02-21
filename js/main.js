// Get a random number for Computer
function getComputerChoice() {
    let random = Math.floor(Math.random()*100)
    if (random < 33) {
        return "rock"
    } else if (random < 66) {
        return "paper"
    } else {
        return "scissors"
    }
}


// Victory points of the players
let p1Win = 0; //player
let p2Win = 0; //computer


//Single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {

    if( (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ) {
            p1Win += 1;
            return `You win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === computerSelection) {
        return `It is a tie! You choose ${playerSelection} and your opponent ${computerSelection} too`
    } else {
        p2Win += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}


//The game play a "num" of times and show the victory
function playGame(num) {

    for (let i=1; i <= num; i++) {

        let playerSelection = prompt("Write your choice! (rock, paper or scissors").toLowerCase();
        let computerSelection = getComputerChoice();
        
        console.log(playRound(playerSelection, computerSelection))
        console.log(`${p1Win} vs ${p2Win}`)      
    }
    if(p1Win > p2Win) {
        console.log(`You WIN THE GAME! You've got ${p1Win} points`)
    } else if (p1Win < p2Win) {
        console.log(`You LOSE THE GAME! You've got only ${p1Win} points vs ${p2Win}`)
    } else {
        console.log(`THE GAME is a TIE! You both have ${p1Win} points`)
    }
}
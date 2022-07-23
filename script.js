const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    return randomChoice
}


const playRound = (playerSelection, computerSelection) => {
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase()

    console.log(computerSelection)
    console.log(playerSelection)

    if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return `You lose. ${computerSelection} beats ${playerSelection}`
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return `You lose. ${computerSelection} beats ${playerSelection}`
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return `You lose. ${computerSelection} beats ${playerSelection}`
    } else if (computerSelection === playerSelection) {
        return "It's a draw."
    } else {
        return "Please enter a valid response"
    }
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        console.log(playRound())
    }
}

// const compareOutcomes = () => {
//     if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
//         return `You lose. ${computerSelection} beats ${playerSelection}`
//     } else if (computerSelection === 'Rock' && playerSelection === 'Paper') {
//         return `You win! ${playerSelection} beats ${computerSelection}`
//     } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
//         return `You win! ${playerSelection} beats ${computerSelection}`
//     } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
//         return `You lose. ${computerSelection} beats ${playerSelection}`
//     } else if (computerSelection === 'Scissors' && playerSelection === 'Rock') {
//         return `You win! ${playerSelection} beats ${computerSelection}`
//     } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
//         return `You lose. ${computerSelection} beats ${playerSelection}`
//     } else {
//         return "It's a draw."
//     }
// }
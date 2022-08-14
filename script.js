const buttons = document.querySelectorAll('button')
const container = document.querySelector('.container')

const resultsDiv = document.createElement('div')


const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    return randomChoice
}

let playerScore = 0
let computerScore = 0

const playRound = (playerSelection, computerSelection) => {
    computerSelection = getComputerChoice().toLowerCase();

    if (computerSelection === 'rock' && playerSelection === 'scissors') {
  
        resultsDiv.textContent = `You lose. ${computerSelection} beats ${playerSelection}`
        computerScore++
  
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
   
        resultsDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`
        playerScore++

    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {

        resultsDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`
        playerScore++

    } else if (computerSelection === 'paper' && playerSelection === 'rock') {

        resultsDiv.textContent = `You lose. ${computerSelection} beats ${playerSelection}`
        computerScore++

    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
   
        resultsDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`
        playerScore++

    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {

        resultsDiv.textContent = `You lose. ${computerSelection} beats ${playerSelection}`
        computerScore++

    } else if (computerSelection === playerSelection) {
        resultsDiv.textContent = "It's a draw."

    } else {
        resultsDiv.textContent = "Please enter a valid response"

    }
    container.appendChild(resultsDiv)

    updateScore()

}

function updateScore() {
    document.querySelector('.playerScore').textContent = playerScore
    document.querySelector('.computerScore').textContent = computerScore

    if (playerScore === 5) {
        alert("You win!")
        return
    }
    if (computerScore === 5) {
        alert("Computer wins.")
        return
    }
}


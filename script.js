const buttons = document.querySelectorAll('button')
const container = document.querySelector('.container')
const wrapper = document.querySelector('.wrapper')

const resultsDiv = document.createElement('div')
resultsDiv.className = 'selections'


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
  
        resultsDiv.innerHTML = `<h3>You lose. Computer played ${computerSelection}.</h3>`
        computerScore++
  
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
   
        resultsDiv.innerHTML = `<h3>You win! Computer played ${computerSelection}.</h3>`
        playerScore++

    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {

        resultsDiv.innerHTML = `<h3>You win! Computer played ${computerSelection}.</h3>`
        playerScore++

    } else if (computerSelection === 'paper' && playerSelection === 'rock') {

        resultsDiv.innerHTML = `<h3>You lose. Computer played ${computerSelection}.</h3>`
        computerScore++

    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
   
        resultsDiv.innerHTML = `<h3>You win! Computer played ${computerSelection}.</h3>`
        playerScore++

    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {

        resultsDiv.innerHTML = `<h3>You lose. Computer played ${computerSelection}.</h3>`
        computerScore++

    } else if (computerSelection === playerSelection) {
        resultsDiv.innerHTML = `<h3>It's a draw. Computer also played ${computerSelection}.</h3>`

    } else {
        resultsDiv.innerHTML = `<h3>Please enter a valid response</h3>`

    }
    wrapper.appendChild(resultsDiv)

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


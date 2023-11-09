function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random() * 3)]
}


function play(playerSelection, computerSelection) {


    if (playerSelection == computerSelection)
        return "Draw"

    let playerWin

    if      (playerSelection == "Rock" && computerSelection == "Scissors") 
        playerWin = true
    else if (playerSelection == "Rock" && computerSelection == "Paper")
        playerWin = false

    else if (playerSelection == "Paper" && computerSelection == "Scissors")
        playerWin = false
    else if (playerSelection == "Paper" && computerSelection == "Rock")
        playerWin = true
        
    else if (playerSelection == "Scissors" && computerSelection == "Rock")
        playerWin = false
    else if (playerSelection == "Scissors" && computerSelection == "Paper")
        playerWin = true


    
    
    if (playerWin)
        return "You win!" // Because" + playerSelection + " beats " + computerSelection
    else
        return "You Lose!" // Because " + computerSelection + " beats " + playerSelection
    
}

function game(playerSelection = null) {
    let playerScore = 0
    let computerScore = 0

    if (playerSelection == null) {
        
        for (let i = 0; i < 5; i++) {
            let playerChoice = prompt("Rock, Paper or Scissors? ")
            let result = play(playerChoice, getComputerChoice())
    
            if (result == "You win!")
                playerScore++
            else
                computerScore++
        }
        let result = "Player: " + playerScore + " Computer: " + computerScore
        console.log(result)
    }

    else {
        let playerScore = 0
        let computerScore = 0
        
        while(playerScore != 0 || computerScore != 0) {
            let result = play(playerSelection, getComputerChoice())

            if (result == "You win!")
                playerScore++
            else
                computerScore++

        }
    }

}

//////////////////////////////////////////////////////////////
const rock =        document.getElementById('rock')
const paper =       document.getElementById('paper')
const scissors =    document.getElementById('scissors')

const rockImg =        document.querySelector('.rock')
const paperImg =       document.querySelector('.paper')
const scissorsImg =    document.querySelector('.scissors')

const userScore = document.querySelector('.user-score')
const computerScore = document.querySelector('.computer-score')

const log = document.querySelector('.log')

rock.addEventListener('click', function(e){
    gameOn('Rock')
})

paper.addEventListener('click', function(e){
    gameOn('Paper')
})

scissors.addEventListener('click', function(e){
    gameOn('Scissors')
})

rockImg.addEventListener('click', function(e){
    gameOn('Rock')
})

paperImg.addEventListener('click', function(e){
    gameOn('Paper')
})

scissorsImg.addEventListener('click', function(e){
    gameOn('Scissors')
})



function gameOn(playerSelection) {

    if (userScore.textContent == 5 || computerScore.textContent == 5){
        computerScore.textContent = 0
        userScore.textContent = 0
        log.textContent = ''
    }

    result = play(playerSelection, getComputerChoice())

    if (result == "You win!") {
        userScore.textContent++
        console.log("User wins")
    } 
    else if (result == "You Lose!") {
        computerScore.textContent++
        console.log("Computer Wins")
    }
    else {
        console.log("Draw!")
    }

    latest = document.createElement('p')
    latest.textContent = result

    log.appendChild(latest)

    if (userScore.textContent == 5){
        latest.textContent = "You win the game"
        latest.style.cssText = "font-size: 20px; font-weight: 900; color:darkred;"
        latest.style.fontWeight = "900";
        log.appendChild(latest)
    } else if (computerScore.textContent == 5) {
        latest.textContent = "Computer wins the game"
        latest.style.cssText = "font-size: 20px; font-weight: 900; color:darkred;"
        latest.style.fontWeight = "900";
        log.appendChild(latest)
    }



}
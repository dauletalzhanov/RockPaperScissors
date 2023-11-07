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

    else
        console.log("butt")

}
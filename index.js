
function game(){

const array = ["rock", "paper", "scissor"]

function getComputerChoice(arr){
    //get a random number for the length of arr
    const choice = Math.floor(Math.random() * arr.length)
    //put the random number as index of arr and store its value in item
    const item = arr[choice]

    return item
}

function playRound(playerSelection, computerSelection){
    //check possibility for player to win
    if (playerSelection == "rock" && computerSelection == "scissor" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissor" && computerSelection == "paper")
    {
        return `Player Won! ${playerSelection} beats ${computerSelection}.`
    }
    //check if both choice is equal
    else if (playerSelection === computerSelection)
    {
        return `It's a Tie! both selected ${playerSelection}.`
    }
    //check possibility for computer to win
    else if (computerSelection == "rock" && playerSelection == "scissor" || 
        computerSelection == "paper" && playerSelection == "rock" || 
        computerSelection == "scissor" && playerSelection == "paper")
    {
        return `Computer Won! ${computerSelection} beats ${playerSelection}.`
    }

}

//ask the user for input and make it case insensitive
const askedInput = prompt("Rock Paper or Scissor").toLowerCase()
const playerSelection = askedInput
const computerSelection = getComputerChoice(array)
//console log the output
console.log(playRound(playerSelection, computerSelection))

}
//loop to play the game for 5 times
for (let i = 0; i < 5; i++)
{
    game()
}
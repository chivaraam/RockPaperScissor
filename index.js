let playerPoint = 0;
let computerPoint = 0;
const container = document.querySelector('#displayPoint');
const buttons = document.querySelectorAll('#choices');

function computerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

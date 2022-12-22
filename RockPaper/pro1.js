// Project: Rock Paper Scissors

const arrayGame = ["rock", "paper", "scissors"];

let computerPoint = 0;
let playerPoint = 0;
let playerChoice = '';
let roundPlayed = 0;

function playRound(computerChoice, playerChoice) {

   if (computerChoice === playerChoice) {
    console.log("\nIt's tie!");
   } 
   else if ((computerChoice === "rock " && playerChoice === "scissors") || (computerChoice === "paper" && playerChoice == "rock") || (computerChoice == "scissors" && playerChoice == "paper")){
    computerPoint += 1;
   }
   else{
    playerPoint += 1
   }
   
   const pPoint = document.querySelector('.player');
   pPoint.textContent = playerPoint;

   const cPoint = document.querySelector('.computer');
   cPoint.textContent = computerPoint;
}




const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', ()=> {
        roundPlayed += 1
        let computerChoice = arrayGame[Math.floor(Math.random() * arrayGame.length )];
        const cChoice = document.querySelector('#cc');
        cChoice.textContent = computerChoice;
        id = button.id
        switch(id){
            case 'btn1':
                playerChoice = 'rock';
                break;
            case 'btn2':
                playerChoice = 'paper';
                break;
            case 'btn3':
                playerChoice = 'scissors';
                break;
        }
        
        playRound(computerChoice, playerChoice)
        
        if (roundPlayed == 5){
            const winner = document.querySelector('.winner');
            if (computerPoint > playerPoint){
                msg = (`Computer won with ${computerPoint} points.`);
                winner.textContent = msg
            }
            else if (playerPoint > computerPoint) {
                msg = (`Player won with ${playerPoint} points.`);
                winner.textContent = msg
            }
            else{
                msg = (`It's a draw. Player and Computer has ${playerPoint} and ${computerPoint} respectively.`);
                winner.textContent = msg
            }
        }

    })
}) 

        


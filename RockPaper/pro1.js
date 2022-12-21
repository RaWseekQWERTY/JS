// Project: Rock Paper Scissors

const arrayGame = ["rock", "paper", "scissors"];

let computerPoint = 0;
let playerPoint = 0;

function playRound(computerChoice, playerChoice) {
   if (computerChoice === playerChoice) {
    console.log("\nIt's tie!");
   } 

   else if ((computerChoice === "rock " && playerChoice === "scissors") || (computerChoice === "paper" && playerChoice == "rock") || (computerChoice == "scissors" && playerChoice == "paper")){
    computerPoint += 1;
    console.log(`\nComputer won!, ${computerChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}`);
   }
   else{
    playerPoint += 1
    console.log(`\nPlayer won!, ${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`);
   }
   console.log(`Points: Player-${playerPoint} Computer-${computerPoint}`);
}

function game() {
    for (let i=0; i<5; i++){
        let computerChoice = arrayGame[Math.floor(Math.random() * arrayGame.length )];
        let playerChoice = prompt("Pick your choice: ").toLowerCase();
        playRound(computerChoice, playerChoice)
    }

    if (computerPoint > playerPoint){
        console.log(`Computer won with ${computerPoint} points.`);
    }
    else if (playerPoint > computerPoint) {
        console.log(`Player won with ${playerPoint} points.`);
    }
    else{
        console.log(`It's a draw. Player and Computer has ${playerPoint} and ${computerPoint} respectively.`)
    }
}

game()
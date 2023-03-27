const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const result = choice[Math.floor(Math.random() * choice.length)];
  return result;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}
  
function game(){
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i <= 5; i++){
    const playerSelection = prompt('Enter you choice');
    const computerSelection = getComputerChoice();
   console.log(playRound(playerSelection, computerSelection));
   const result = playRound(playerSelection, computerSelection);
   if (result == 'You win! ' + playerSelection + ' beats ' + computerSelection){
   playerScore++;
   }else if ( result == "You lose! " + computerSelection + " beats " + playerSelection){
    computerScore++;
   }
   console.log(`Final score: Player ${playerScore} - ${computerScore} Computer`);
}
}
 console.log(game());

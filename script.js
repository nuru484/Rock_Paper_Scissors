const rockk = document.querySelector('#rock');
const paperr = document.querySelector('#paper');
const scissorss = document.querySelector('#scissors');
const resultsWindow1 = document.querySelector('.results1');
const resultsWindow2 = document.querySelector('.results2');

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
let playerScore = 0;
let computerScore = 0;
let playerSelection = '';

rockk.addEventListener('click', function(){
  playerSelection = 'rock';
  game();
});

paperr.addEventListener('click', function(){
  playerSelection = 'paper';
  game();
});

scissorss.addEventListener('click', function(){
  playerSelection = 'scissors';
  game();
});

function game(){
    const computerSelection = getComputerChoice();
   const result = playRound(playerSelection, computerSelection);
   if (result == 'You win! ' + playerSelection + ' beats ' + computerSelection){
   playerScore++;
   }else if ( result == "You lose! " + computerSelection + " beats " + playerSelection){
    computerScore++;
   }
   resultsWindow2.textContent = result;
 resultsWindow1.textContent=(`Scores: Player ${playerScore} - ${computerScore} Computer`);

 if(playerScore === 5){
  const finalScoreElement = document.querySelector('h1');
  finalScoreElement.style.textAlign = "center";
  finalScoreElement.textContent = `The player win, with a score of 5 against computer with a score of ${computerScore}`;
  document.open();
  document.write(finalScoreElement.outerHTML);
  document.close();
} else if (computerScore === 5){
  const finalScoreElement = document.querySelector('h1');
  finalScoreElement.classList.add('centered');
  finalScoreElement.style.textAlign = "center";
  finalScoreElement.textContent = `The Computer won, with a score of 5 against player with a score of ${playerScore}`;
  document.open();
  document.write(finalScoreElement.outerHTML);
  document.close();
}
}

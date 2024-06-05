function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

const computerChoice = getComputerChoice();
console.log(computerChoice);

function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper, scissors").toLocaleLowerCase();

  if(humanChoice === null){
    return null; // Si el usuario hace clic en cancelar en el cuadro de diálogo, detenemos la función.
  }

  while(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
    alert("Please enter a valid option");
    humanChoice = prompt("Choose rock, paper, scissors").toLocaleLowerCase();
  }

  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {

  humanChoice = humanChoice.toLocaleLowerCase();

  if(humanChoice === computerChoice){
    console.log("It's a tie!");
  }else if(
    (humanChoice === "scissors" && computerChoice === "paper") || 
    (humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "paper" && computerChoice === "rock")
  ){
    console.log("You win!");
    humanChoice++;
  }else{
    console.log("You lose!");
    computerChoice++;
  }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);










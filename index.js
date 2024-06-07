function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

const computerChoice = getComputerChoice();

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
    return ("You win!");
  }else{
    return ("You lose!");
  }

}


function playGame(){
  
  for(let i = 0; i < 4; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

  }

  if(humanScore > computerScore){
    alert("Congratulation! You won game");
  }else{
    alert("Oh no! You lose Game. Try Again!"); //Siempre pone que perdio aunque gane
  };

}

let result = playGame();

console.log(result);
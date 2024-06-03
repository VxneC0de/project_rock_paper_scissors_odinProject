function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

const computerChoice = getComputerChoice();
console.log(computerChoice);

function getHumanChoice(){

  let humanChoice = prompt("Choose rock, paper, scissors").toLocaleLowerCase();

  while(humanChoice !== "rock" || humanChoice !== "paper" || humanChoice !== "scissors" || humanChoice === null){
    alert("Please enter a valid option")
    getComputerChoice();
  }

}

getHumanChoice();




/*if(humanChoice === null){
    return null; // Si el usuario hace clic en cancelar en el cuadro de diálogo, detenemos la función.
  }


  while(humanChoice !== "rock" || humanChoice !== "paper" || humanChoice !== "scissors"){
    
  }
  */



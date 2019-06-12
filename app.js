function play(playerChoice) {

  let index = Math.floor(Math.random() * 3);

  let computerOptions = ["rock", "paper", "scissors"]
  let computerChoice = computerOptions[index]

  console.log("Computer played " + computerChoice)


  if (playerChoice === computerChoice) {
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
  } else if (playerChoice === "paper" && computerChoice === "rock") {
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
  } else if (playerChoice === "rock" && computerChoice === "paper") {
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
  }
  update(playerChoice, computerChoice)
}

function update(playerChoice, computerChoice) {
  document.getElementById("player-rps").innerHTML = playerChoice
  document.getElementById("computer-rps").innerHTML = computerChoice
}
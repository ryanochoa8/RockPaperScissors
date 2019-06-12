let gameResult = ["Player 1 Wins!!!", "Computer Wins...", "It's a tie"]

function play(playerChoice) {
  let playerPoint = 0
  let computerPoint = 0


  let index = Math.floor(Math.random() * 3);

  let computerOptions = ["ROCK", "PAPER", "SCISSORS"]
  let computerChoice = computerOptions[index]


  if (playerChoice === computerChoice) {
    playerPoint++;
    computerPoint++
  } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
    playerPoint++
  } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
    playerPoint++
  } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
    playerPoint++
  } else if (playerChoice === "ROCK" && computerChoice === "PAPER") {
    computerPoint++
  } else if (playerChoice === "PAPER" && computerChoice === "SCISSORS") {
    computerPoint++
  } else if (playerChoice === "SCISSORS" && computerChoice === "ROCK") {
    computerPoint++
  }
  update(playerChoice, computerChoice, playerPoint, computerPoint);
}




function update(playerChoice, computerChoice, playerPoint, computerPoint) {
  document.getElementById("player-rps").innerHTML = playerChoice
  document.getElementById("computer-rps").innerHTML = computerChoice
  if (playerPoint > computerPoint) {
    document.getElementById("game-result").innerHTML = gameResult[0]
    document.getElementById("game-result").style.color = "green"
  } else if (playerPoint < computerPoint) {
    document.getElementById("game-result").innerHTML = gameResult[1]
    document.getElementById("game-result").style.color = "red"
  } else if (playerPoint = computerPoint) {
    document.getElementById("game-result").innerHTML = gameResult[2]
    document.getElementById("game-result").style.color = "blue"
  }
}


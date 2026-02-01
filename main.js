function machinePlay() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
// rules for choices

const rules = {
  rock: "paper",
  paper: "scissor",
  scissor: "rock",
};

function playGame(playerChoice) {
  const machineChoice = machinePlay();
  result1.textContent = `You Chose ${playerChoice}. machine Chose ${machineChoice}.`;

  if (playerChoice === machineChoice) {
    result2.textContent = "it's a Tie";
    return;
  }
  if (rules[playerChoice] === machineChoice) {
    result2.textContent = "machine Wins";
  } else {
    result2.textContent = "you Win";
  }
  if (!rules[playerChoice]) return;
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    playGame(button.id);
  });
});

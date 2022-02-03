const compPlay = function () {
  const options = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * options.length);
  return options[random];
};

const playRound = function (playerSelect, compSelect) {
  if (playerSelect === "" || playerSelect === null) {
    console.log("Wrong input! 😫");
    return;
  }
  playerSelect = playerSelect.toLowerCase();
  compSelect = compSelect.toLowerCase();
  console.log(playerSelect, compSelect);
  if (
    playerSelect !== "rock" &&
    playerSelect !== "scissors" &&
    playerSelect !== "paper"
  ) {
    console.log("Wrong input! 😫");
    return;
  }
  if (
    (playerSelect === "rock" && compSelect === "paper") ||
    (playerSelect === "paper" && compSelect === "scissors") ||
    (playerSelect === "scissors" && compSelect === "rock")
  ) {
    return `You Lose!😐 ${compSelect} beats ${playerSelect} `;
  } else if (playerSelect === compSelect) return "Tied! Try again. 🙄";
  else return `You win!😄 ${playerSelect} beats ${compSelect}`;
};

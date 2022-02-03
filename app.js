const choice = document.querySelectorAll(".choice");
const results = document.querySelector(".result");
const playerUI = document.querySelector(".player");
const compUI = document.querySelector(".comp");

let player = 0;
let comp = 0;

const compPlay = function () {
  const options = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * options.length);
  return options[random];
};

const playRound = function (playerSelect, compSelect) {
  console.log(playerSelect, compSelect);
  if (
    (playerSelect === "Rock" && compSelect === "Paper") ||
    (playerSelect === "Paper" && compSelect === "Scissors") ||
    (playerSelect === "Scissors" && compSelect === "Rock")
  ) {
    results.innerText = `You Lose!😐 ${compSelect} beats ${playerSelect}. `;
    comp++;
    compUI.innerText = `AI: ${comp}`;
  } else if (playerSelect === compSelect) {
    results.innerText = "Tied! Try again. 🙄";
  } else {
    results.innerText = `You win!😄 ${playerSelect} beats ${compSelect}`;
    player++;
    playerUI.innerText = `Player: ${player}`;
  }

  if (player === 5) {
    results.innerText = "YOU WIN! Humanity is safe for now.";
    return;
  }
  if (comp === 5) {
    results.innerText = "YOU LOSE! Humanity was doomed from the start.";
    return;
  }
};

choice.forEach((el) =>
  el.addEventListener("click", function () {
    playRound(el.alt, compPlay());
  })
);

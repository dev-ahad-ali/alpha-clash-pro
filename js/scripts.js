function continueGame() {
  const alphabet = getARandomAlphabet();

  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  addBgById(alphabet);
}
function play() {
  // hide everything show only play-ground
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");

  // reset score and life
  setScoreLifeValue("current-life", 5);
  setScoreLifeValue("current-score", 0);

  isGamePlayOn = true;

  continueGame();
}
// Home screen game bug fix
let isGamePlayOn = false;

function handleKeyboardButtonPress(event) {
  if (isGamePlayOn === false) {
    return;
  }
  const playerPressed = event.key;

  // stop the game if player pressed "Esc"
  if (playerPressed === "Escape") {
    gameOver();
  }
  // get expected press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText.toLocaleLowerCase();

  // Add audio
  const audio = new Audio();
  const artBoard = document.getElementById("artboard");
  // check matched or not
  if (playerPressed === currentAlphabet) {
    console.log("point");
    // update score

    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // const newScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;

    audio.src = "../audio/success.wav";
    audio.play();
    const currentScore = getScoreLifeValue("current-score");
    const newScore = currentScore + 1;
    setScoreLifeValue("current-score", newScore);

    // start a new round
    removeBgById(currentAlphabet);
    continueGame();
  } else {
    console.log("lost life");
    // update life

    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // const newLife = currentLife - 1;
    // currentLifeElement.innerText = newLife;

    audio.src = "../audio/error.wav";
    audio.play();
    const currentLife = getScoreLifeValue("current-life");
    const newLife = currentLife - 1;

    const newLifePercentage = (newLife / 5) * 100;
    artBoard.style.background = `linear-gradient(#ffffffb3 ${newLifePercentage}%,red)`;
    setScoreLifeValue("current-life", newLife);

    if (newLife === 0) {
      gameOver();
    }
  }
}
document.addEventListener("keyup", handleKeyboardButtonPress);

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");

  // update final score
  const lastScore = getScoreLifeValue("current-score");
  setScoreLifeValue("game-score", lastScore);

  //  clear last selected alphabet highlight
  const currentAlphabet = getElementTextById("current-alphabet");
  removeBgById(currentAlphabet);
  isGamePlayOn = false;

  artBoard.style.background = "linear-gradient(#ffffffb3 100%,red)";
}
// Modal
const modal = document.getElementById("modal-box");
function modalOpen(event) {
  if (event.clientY < 20) {
    modal.classList.remove("hidden");
  }
}
function modalClose() {
  modal.classList.add("hidden");
}
document.body.onmousemove = modalOpen;
document.getElementById("modal-close").addEventListener("click", modalClose);
// window.onbeforeunload = function () {
//   return modalOpen();
// };

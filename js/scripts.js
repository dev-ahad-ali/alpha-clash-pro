function continueGame() {
  const alphabet = getARandomAlphabet();

  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  addBgById(alphabet);
}
function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}

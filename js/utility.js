function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function addBgById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
function removeBgById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}
function getARandomAlphabet() {
  // get alphabet
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  // get random number between 0 - 25
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  return alphabet;
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function getScoreLifeValue(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const elementValue = parseInt(elementValueText);
  return elementValue;
}
function setScoreLifeValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

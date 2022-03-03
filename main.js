var currentGame = new Game;

// QUERY SELECTORS AND GET ELEMENTS

//Game Pieces
var choiceBox = document.querySelector(".choices");
var rockButton = document.querySelector(".rock");
var paperButton = document.querySelector(".paper");
var scissorsButton = document.querySelector(".scissors");

//Human Data
var humanIcon = document.getElementById("human-icon");
var humanName = document.getElementById("human-name");
var humanScore = document.getElementById("human-score");

//Computer Data
var compIcon = document.getElementById("comp-icon");
var compName = document.getElementById("comp-name");
var compScore = document.getElementById("comp-score");

//Page Views
var choosePage = document.querySelector(".center-section");
var resultsPage = document.querySelector(".results-page");

// Player choices
var humanChoice = document.getElementById("human-choice");
var compChoice = document.getElementById("comp-choice");
var resultsText = document.querySelector(".result-text");

// EVENT LISTENERS

choiceBox.addEventListener("click", function() {
  currentGame.players[0].takeTurn(event);
  currentGame.players[0].calculateScore();
  currentGame.seeResults();
  currentGame.returnHome();
});

window.addEventListener("load", renderPlayerData);

// Functions
function getRandomItem() {
  return Math.floor(Math.random() * 3);
};

function renderScore() {
  humanScore.innerText = `Wins: ${currentGame.players[0].wins}`;
  compScore.innerText = `Wins: ${currentGame.players[1].wins}`;
};

function renderPlayerData() {
  humanName.innerText = currentGame.players[0].name;
  compName.innerText = currentGame.players[1].name;
  humanIcon.innerText = currentGame.players[0].token;
  compIcon.innerText = currentGame.players[1].token;
};

function renderChoices() {
  humanChoice.innerText = currentGame.playerChoices[0];
  compChoice.innerText = currentGame.playerChoices[1];
};

function switchViews(element) {
  element.classList.toggle("hidden");
};

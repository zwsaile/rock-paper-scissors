var currentGame = new Game;

// QUERY SELECTORS AND GET ELEMENTS

// Login page

var letsPlay = document.querySelector(".submit-button");
var nameValue = document.getElementById("name");
var normalCheck = document.getElementById("normal");
var hardCheck = document.getElementById("hard");

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
var loginPage = document.querySelector(".login-page")
var normalPage = document.querySelector(".center-section");
var resultsPage = document.querySelector(".results-page");

// Results Page
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

normalCheck.addEventListener("click", function() {
  normalCheck.classList.toggle("checked")
});

hardCheck.addEventListener("click", function() {
  hardCheck.classList.toggle("checked")
});

letsPlay.addEventListener("click", loginNormal);

window.addEventListener("load", renderPlayerData);

// FUNCTIONS

function getRandomItem() {
  return Math.floor(Math.random() * 3);
};

function loginNormal() {
  if (normalCheck.className === "checked") {
    humanName.innerText = nameValue.value;
    switchViews(loginPage)
    switchViews(normalPage)
  };
};

function loginHard() {
  if (hardCheck.className === "checked") {
    humanName.innerText = nameValue.value;
    switchViews(loginPage)
    switchViews(normalPage)
  };
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

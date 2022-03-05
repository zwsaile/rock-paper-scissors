var currentGame = new Game;

// QUERY SELECTORS AND GET ELEMENTS

// Login page

var letsPlayButton = document.querySelector(".submit-button");
var nameValue = document.getElementById("name");
var iconValue = document.getElementById("icon");
var normalCheck = document.getElementById("normal");
var hardCheck = document.getElementById("hard");

//Game Pieces
var choiceBoxNormal = document.getElementById("normal-choices");
var choiceBoxHard = document.getElementById("hard-choices");
var rockButton = document.querySelector(".rock");
var paperButton = document.querySelector(".paper");
var scissorsButton = document.querySelector(".scissors");
var lizardButton = document.querySelector(".lizard");
var spockButton = document.querySelector(".spock");

//Human Data
var humanIcon = document.getElementById("human-icon");
var humanName = document.getElementById("human-name");
var humanScore = document.getElementById("human-score");

//Computer Data
var compIcon = document.getElementById("comp-icon");
var compName = document.getElementById("comp-name");
var compScore = document.getElementById("comp-score");

//Page Views
var loginPage = document.querySelector(".login")
var normalPage = document.querySelector(".normal-page");
var hardPage = document.querySelector(".hard-page");
var resultsPage = document.querySelector(".results-page");

// Results Page
var humanChoice = document.getElementById("human-choice");
var compChoice = document.getElementById("comp-choice");
var resultsText = document.querySelector(".result-text");

// EVENT LISTENERS

choiceBoxNormal.addEventListener("click", function() {
  currentGame.players[0].takeTurnNormal(event);
  currentGame.players[0].calculateScore();
  currentGame.seeResults(normalPage);
  currentGame.returnHome(normalPage);
});

choiceBoxHard.addEventListener("click", function() {
  currentGame.players[0].takeTurnHard(event);
  currentGame.players[0].calculateScore();
  currentGame.seeResults(hardPage);
  currentGame.returnHome(hardPage);
});

normalCheck.addEventListener("click", function() {
  normalCheck.classList.toggle("checked")
});

hardCheck.addEventListener("click", function() {
  hardCheck.classList.toggle("checked")
});

letsPlayButton.addEventListener("click", function() {
  loginNormal();
  loginHard();
});

window.addEventListener("load", function() {
  renderPlayerData();
  humanScore.innerText = `Wins: ${currentGame.players[0].wins}`;
  compScore.innerText = `Wins: ${currentGame.players[1].wins}`;
});

// FUNCTIONS

function getRandomItem(items) {
  return Math.floor(Math.random() * items);
};

function loginNormal() {
  if (normalCheck.className === "checked") {
    humanName.innerText = nameValue.value;
    humanIcon.innerText = iconValue.value;
    switchViews(loginPage)
    switchViews(normalPage)
  };
};

function loginHard() {
  if (hardCheck.className === "checked") {
    humanName.innerText = nameValue.value;
    humanIcon.innerText = iconValue.value;
    switchViews(loginPage)
    switchViews(hardPage)
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

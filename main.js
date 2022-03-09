var currentGame = new Game;

// QUERY SELECTORS AND GET ELEMENTS

// Login Page
var letsPlayButton = document.querySelector(".submit-button");
var nameValue = document.getElementById("name");
var iconValue = document.getElementById("icon");
var normalCheck = document.getElementById("normal");
var hardCheck = document.getElementById("hard");

//Buttons and Button Containers
var choiceBoxNormal = document.getElementById("normal-choices");
var choiceBoxHard = document.getElementById("hard-choices");
var rockButton = document.querySelector(".rock");
var paperButton = document.querySelector(".paper");
var scissorsButton = document.querySelector(".scissors");
var lizardButton = document.querySelector(".lizard");
var spockButton = document.querySelector(".spock");
var clearButton = document.getElementById("clear");
var homeButton = document.getElementById("home");

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

choiceBoxNormal.addEventListener("click", runNormalCycle);

choiceBoxHard.addEventListener("click", runHardCycle);

normalCheck.addEventListener("click", checkNormalBox);

hardCheck.addEventListener("click", checkHardBox);

letsPlayButton.addEventListener("click", login);

clearButton.addEventListener("click", clearScores);

homeButton.addEventListener("click", returnHome)

window.addEventListener("load", displayPlayerInfo);

// FUNCTIONS

function getRandomItem(items) {
  return Math.floor(Math.random() * items);
};

function login() {
  humanName.innerText = nameValue.value;
  humanIcon.innerText = iconValue.value;
  if (normalCheck.className === "checked") {
    switchViews(loginPage);
    switchViews(normalPage);
  } else if (hardCheck.className === "checked") {
    switchViews(loginPage);
    switchViews(hardPage);
  };
};

function checkNormalBox() {
  normalCheck.classList.toggle("checked");
  hardCheck.className = " ";
}

function checkHardBox() {
  hardCheck.classList.toggle("checked");
  normalCheck.className = " ";
}

function renderScore() {
  humanScore.innerText = `Wins: ${currentGame.players[0].wins}`;
  compScore.innerText = `Wins: ${currentGame.players[1].wins}`;
};

function renderChoices() {
  humanChoice.innerText = currentGame.playerChoices[0];
  compChoice.innerText = currentGame.playerChoices[1];
};

function switchViews(element) {
  element.classList.toggle("hidden");
};

function returnHome() {
  if (!normalPage.className.includes("hidden")) {
    switchViews(normalPage);
    switchViews(loginPage);
  } else if (!hardPage.className.includes("hidden")) {
    switchViews(hardPage);
    switchViews(loginPage);
  };
};

function displayPlayerInfo() {
  humanName.innerText = currentGame.players[0].name;
  compName.innerText = currentGame.players[1].name;
  humanIcon.innerText = currentGame.players[0].token;
  compIcon.innerText = currentGame.players[1].token;
  humanScore.innerText = `Wins: ${currentGame.players[0].wins}`;
  compScore.innerText = `Wins: ${currentGame.players[1].wins}`;
};

function clearScores() {
  localStorage.clear();
  currentGame.players[0].wins = 0;
  currentGame.players[1].wins = 0;
  humanScore.innerText = `Wins: ${currentGame.players[0].wins}`;
  compScore.innerText = `Wins: ${currentGame.players[1].wins}`;
};

function runNormalCycle() {
  currentGame.players[0].takeTurnNormal(event);
  currentGame.players[0].calculateScore();
  currentGame.seeResults(normalPage);
  currentGame.returnHome(normalPage);
};

function runHardCycle() {
  currentGame.players[0].takeTurnHard(event);
  currentGame.players[0].calculateScore();
  currentGame.seeResults(hardPage);
  currentGame.returnHome(hardPage);
};

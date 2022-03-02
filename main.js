var currentGame = new Game;

// Query Selectors & Get Elements

var choiceBox = document.querySelector(".choices");
var rockButton = document.querySelector(".rock");
var paperButton = document.querySelector(".paper");
var scissorsButton = document.querySelector(".scissors");

var humanIcon = document.getElementById("human-icon");
var humanName = document.getElementById("human-name");
var humanScore = document.getElementById("human-score");

var compIcon = document.getElementById("comp-icon");
var compName = document.getElementById("comp-name");
var compScore = document.getElementById("comp-score");

// Event Listeners

choiceBox.addEventListener("click", function() {
  humanPlayer.takeTurn(event);
});

window.addEventListener("load", renderPlayerData)

// Functions
function getRandomItem() {
  return Math.floor(Math.random() * 3);
}


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

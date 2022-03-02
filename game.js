var humanPlayer = new Player("Human", "🧍");
var compPlayer = new Player("AI", "👾");
var itemlist = ["rock", "paper", "scissors"]

class Game {
  constructor () {
    this.gameType = "normal";
    this.playerChoices = [];
    this.players = [humanPlayer, compPlayer];
  };

  countHumanWin() {
    if (this.playerChoices[0] === "rock" && this.playerChoices[1] === "scissors") {
      this.players[0].wins += 1;
      renderScore(humanScore);
      return `${this.players[0].name} wins! Nice!`;
    } else if (this.playerChoices[0] === "scissors" && this.playerChoices[1] === "paper") {
      this.players[0].wins += 1;
      renderScore(humanScore);
      return `${this.players[0].name} wins! Nice!`;
    } else if (this.playerChoices[0] === "paper" && this.playerChoices[1] === "rock") {
      this.players[0].wins += 1;
      renderScore(humanScore);
      return `${this.players[0].name} wins! Nice!`;
    };
  };

  countCompWin() {
    if (this.playerChoices[1] === "rock" && this.playerChoices[0] === "scissors") {
      this.players[1].wins += 1;
      renderScore();
      return `${this.players[1].name} wins! Nice!`;
    } else if (this.playerChoices[1] === "scissors" && this.playerChoices[0] === "paper") {
      this.players[1].wins += 1;
      renderScore();
      return `${this.players[1].name} wins! Nice!`;
    } else if (this.playerChoices[1] === "paper" && this.playerChoices[0] === "rock") {
      this.players[1].wins += 1;
      renderScore();
      return `${this.players[1].name} wins! Nice!`;
    };
  };


  // countDraw() {
  //   if (playerChoices.humanChoice === playerChoices.compChoice)
  //   return `Dang! A draw!`
  // };

};

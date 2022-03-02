var humanPlayer = new Player("Human", "🧍");
var compPlayer = new Player("AI", "👾");
var itemlist = ["rock", "paper", "scissors"]

class Game {
  constructor () {
    this.gameType = "normal";
    this.playerChoices = [];
    this.players = [humanPlayer, compPlayer];
  };

  changeHumanScore() {
    this.players[0].wins += 1;
    renderScore();
    return `${this.players[0].name} wins! Nice!`;
  };

  changeCompScore() {
    this.players[1].wins += 1;
    renderScore();
    return `${this.players[1].name} wins! Nice!`;
  };

  countHumanWin() {
    if (this.playerChoices[0] === "rock" && this.playerChoices[1] === "scissors") {
      this.changeHumanScore();
    } else if (this.playerChoices[0] === "scissors" && this.playerChoices[1] === "paper") {
      this.changeHumanScore();
    } else if (this.playerChoices[0] === "paper" && this.playerChoices[1] === "rock") {
      this.changeHumanScore();
    };
  };

  countCompWin() {
    if (this.playerChoices[1] === "rock" && this.playerChoices[0] === "scissors") {
      this.changeCompScore()
    } else if (this.playerChoices[1] === "scissors" && this.playerChoices[0] === "paper") {
      this.changeCompScore()
    } else if (this.playerChoices[1] === "paper" && this.playerChoices[0] === "rock") {
      this.changeCompScore()
    };
  };


  // countDraw() {
  //   if (playerChoices[0] === playerChoices.[1])
  //   return `Dang! A draw!`
  // };

};

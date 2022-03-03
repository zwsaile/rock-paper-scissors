class Game {
  constructor () {
    this.gameType = "normal";
    this.playerChoices = [];
    this.players = [new Player("Human", "🧍"), new Player("AI", "👾")];
  };

  changeHumanScore() {
    this.players[0].wins += 1;
    renderScore();
  };

  changeCompScore() {
    this.players[1].wins += 1;
    renderScore();
  };

  countHumanWin() {
    if (this.playerChoices[0] === "scissors" && this.playerChoices[1] === "paper") {
      this.changeHumanScore();
    } else if (this.playerChoices[0] === "paper" && this.playerChoices[1] === "rock") {
      this.changeHumanScore();
    } else if (this.playerChoices[0] === "rock" && this.playerChoices[1] === "scissors") {
      this.changeHumanScore();
    };
  };

  countCompWin() {
    if (this.playerChoices[1] === "rock" && this.playerChoices[0] === "scissors") {
      this.changeCompScore();
    } else if (this.playerChoices[1] === "scissors" && this.playerChoices[0] === "paper") {
      this.changeCompScore();
    } else if (this.playerChoices[1] === "paper" && this.playerChoices[0] === "rock") {
      this.changeCompScore();
    };
  };


  convertResults() {
    for (var i = 0; i < 2; i++) {
      if (this.playerChoices[i] === "rock") {
        this.playerChoices[i] = "🪨"
      } else if (this.playerChoices[i] === "paper") {
        this.playerChoices[i] = "📄"
      } else if (this.playerChoices[i] === "scissors") {
        this.playerChoices[i] = "✂️"
      };
    };
  };

  seeResults() {
    this.convertResults();
    switchViews(normalPage);
    switchViews(resultsPage);
    renderChoices();
  };

  returnHome() {
    setTimeout(switchViews, 3*1000, normalPage);
    setTimeout(switchViews, 3*1000, resultsPage);
  };

};

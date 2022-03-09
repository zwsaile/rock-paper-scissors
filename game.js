class Game {
  constructor () {
    this.playerChoices = [];
    this.players = [new Player("Human", "🧍", parseInt(localStorage.getItem('human-score'))), new Player("AI", "👾", parseInt(localStorage.getItem('comp-score')))];
  };

  changeHumanScore() {
    this.players[0].wins += 1;
    localStorage.setItem('human-score', `${this.players[0].wins}`);
    renderScore();
  };

  changeCompScore() {
    this.players[1].wins += 1;
    localStorage.setItem('comp-score', `${this.players[1].wins}`);
    renderScore();
  };

  countHumanWin() {
    if ((this.playerChoices[0] === "scissors") && (this.playerChoices[1] === "paper" || this.playerChoices[1] === "lizard")) {
      this.changeHumanScore();
    } else if ((this.playerChoices[0] === "paper") && (this.playerChoices[1] === "rock" || this.playerChoices[1] === "spock")) {
      this.changeHumanScore();
    } else if ((this.playerChoices[0] === "rock") && (this.playerChoices[1] === "scissors" || this.playerChoices[1] === "lizard")) {
      this.changeHumanScore();
    } else if ((this.playerChoices[0] === "lizard") && (this.playerChoices[1] === "paper" || this.playerChoices[1] === "spock")) {
      this.changeHumanScore();
    } else if ((this.playerChoices[0] === "spock") && (this.playerChoices[1] === "rock" || this.playerChoices[1] === "scissors")) {
      this.changeHumanScore();
    };
  };

  countCompWin() {
    if ((this.playerChoices[1] === "scissors") && (this.playerChoices[0] === "paper" || this.playerChoices[0] === "lizard")) {
      this.changeCompScore();
    } else if ((this.playerChoices[1] === "paper") && (this.playerChoices[0] === "rock" || this.playerChoices[0] === "spock")) {
      this.changeCompScore();
    } else if ((this.playerChoices[1] === "rock") && (this.playerChoices[0] === "scissors" || this.playerChoices[0] === "lizard")) {
      this.changeCompScore();
    } else if ((this.playerChoices[1] === "lizard") && (this.playerChoices[0] === "paper" || this.playerChoices[0] === "spock")) {
      this.changeCompScore();
    } else if ((this.playerChoices[1] === "spock") && (this.playerChoices[0] === "rock" || this.playerChoices[0] === "scissors")) {
      this.changeCompScore();
    };
  };


  convertResults() {
    for (var i = 0; i < 4; i++) {
      if (this.playerChoices[i] === "rock") {
        this.playerChoices[i] = "🪨";
      } else if (this.playerChoices[i] === "paper") {
        this.playerChoices[i] = "📄";
      } else if (this.playerChoices[i] === "scissors") {
        this.playerChoices[i] = "✂️";
      } else if (this.playerChoices[i] === "lizard") {
        this.playerChoices[i] = "🦎";
      } else if (this.playerChoices[i] === "spock") {
        this.playerChoices[i] = "🖖🏽";
      };
    };
  };

  seeResults(page) {
    this.convertResults();
    switchViews(page);
    switchViews(resultsPage);
    renderChoices();
  };

  returnHome(page) {
    setTimeout(switchViews, 3*1000, page);
    setTimeout(switchViews, 3*1000, resultsPage);
  };

};

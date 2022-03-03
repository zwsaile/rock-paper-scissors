class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
  };

  takeTurnNormal(event) {
    var newCompPick = getRandomItem(3);
    currentGame.playerChoices[0] = event.target.className;
    currentGame.playerChoices[1] = newCompPick;
      if (newCompPick === 0) {
        currentGame.playerChoices[1] = "rock";
      } else if (newCompPick === 1) {
        currentGame.playerChoices[1] = "paper";
      } else if (newCompPick === 2) {
        currentGame.playerChoices[1] = "scissors";
      };
  };

  takeTurnHard(event) {
    var newCompPick = getRandomItem(5);
    currentGame.playerChoices[0] = event.target.className;
    currentGame.playerChoices[1] = newCompPick;
      if (newCompPick === 0) {
        currentGame.playerChoices[1] = "rock";
      } else if (newCompPick === 1) {
        currentGame.playerChoices[1] = "paper";
      } else if (newCompPick === 2) {
        currentGame.playerChoices[1] = "scissors";
      } else if (newCompPick === 3) {
        currentGame.playerChoices[1] = "lizard";
      } else if (newCompPick === 4) {
        currentGame.playerChoices[1] = "spock";
      };
  };

  calculateScore() {
    currentGame.countHumanWin();
    currentGame.countCompWin();
  };

};

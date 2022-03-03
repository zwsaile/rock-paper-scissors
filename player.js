class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
  };

  takeTurn(event) {
    var newCompPick = getRandomItem();
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

  calculateScore() {
    currentGame.countHumanWin();
    currentGame.countCompWin();
  };

};

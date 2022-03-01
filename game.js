class Game {
  constructor (gameType) {
    this.gameType = gameType;
    this.playerChoices = [];
    this.players = [new Player("Human", "🧍", 0), new Player("AI", "👾", 0)];
  };

  countWin() {
    this.players[i].wins += 1;
    return `${this.players[i].name} wins! Nice!`
  };

  countDraw() {
    if (playerChoices[0] === playerChoices[1])
    return `Dang! A draw!`
  };

};

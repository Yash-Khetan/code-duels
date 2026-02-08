// create a duel manager class that will handle the duels between players
export default class DuelManager {
  constructor() {
    this.waitingPlayers = [];
  }
  
  addPlayer(ws) {
    this.waitingPlayers.push(ws);
  }

  removePlayer(ws) {
    this.waitingPlayers = this.waitingPlayers.filter(player => player !== ws);
  }

  getWaitingPlayers() {
    return this.waitingPlayers;
  }
}

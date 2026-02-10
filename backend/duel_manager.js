import questions from "./resources/questions.js";

export default class DuelManager {
  constructor() {
    this.waitingPlayers = [];
    this.activeDuels = new Map(); // ws -> duel
  }

  addPlayer(ws) {
    this.waitingPlayers.push(ws);

    if (this.waitingPlayers.length >= 2) {
      const p1 = this.waitingPlayers.shift();
      const p2 = this.waitingPlayers.shift();

      const duel = this.createDuel(p1, p2);

      this.activeDuels.set(p1, duel);
      this.activeDuels.set(p2, duel);

      this.sendDuelStart(p1, duel);
      this.sendDuelStart(p2, duel);

      this.startTimer(duel);
    }
  }

  createDuel(player1, player2) {
    // pick 2 questions for now
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 2);

    return {
      player1,
      player2,
      questions: selected,
      solved: {
        player1: new Set(),
        player2: new Set()
      },
      startTime: Date.now(),
      durationMs: 5 * 60 * 1000, // 5 minutes
      finished: false
    };
  }

  sendDuelStart(ws, duel) {
    ws.send(JSON.stringify({
      type: "duel_start",
      payload: {
        questions: duel.questions.map(q => ({
          id: q.id,
          title: q.title,
          difficulty: q.difficulty,
          problemStatement: q.problemStatement,
          stdinFormat: q.stdinFormat,
          stdoutFormat: q.stdoutFormat,
          testCases: q.testCases
        })),
        startTime: duel.startTime,
        durationMs: duel.durationMs
      }
    }));
  }

  startTimer(duel) {
    setTimeout(() => {
      if (!duel.finished) {
        this.endDuel(duel);
      }
    }, duel.durationMs);
  }

  getDuel(ws) {
    return this.activeDuels.get(ws);
  }

  markSolved(ws, questionId) {
    const duel = this.getDuel(ws);
    if (!duel || duel.finished) return;

    const key = duel.player1 === ws ? "player1" : "player2";
    duel.solved[key].add(questionId);
  }

  endDuel(duel) {
    duel.finished = true;

    const p1Score = duel.solved.player1.size;
    const p2Score = duel.solved.player2.size;

    let resultP1 = "DRAW";
    let resultP2 = "DRAW";

    if (p1Score > p2Score) {
      resultP1 = "WIN";
      resultP2 = "LOSE";
    } else if (p2Score > p1Score) {
      resultP1 = "LOSE";
      resultP2 = "WIN";
    }

    duel.player1.send(JSON.stringify({
      type: "duel_end",
      payload: { score: p1Score, result: resultP1 }
    }));

    duel.player2.send(JSON.stringify({
      type: "duel_end",
      payload: { score: p2Score, result: resultP2 }
    }));

    this.activeDuels.delete(duel.player1);
    this.activeDuels.delete(duel.player2);
  }

  removePlayer(ws) {
    this.waitingPlayers = this.waitingPlayers.filter(p => p !== ws);
    const duel = this.activeDuels.get(ws);

    if (duel && !duel.finished) {
      duel.finished = true;
      const opponent = duel.player1 === ws ? duel.player2 : duel.player1;

      opponent.send(JSON.stringify({
        type: "opponent_left"
      }));

      this.activeDuels.delete(opponent);
      this.activeDuels.delete(ws);
    }
  }
}

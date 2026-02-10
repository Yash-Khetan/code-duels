import { WebSocketServer } from "ws";
import DuelManager from "./duel_manager.js";
import { code_submission } from "./code_submit.js";

const wss = new WebSocketServer({ port: 8080 });
const duelManager = new DuelManager();

wss.on("connection", ws => {
  ws.on("message", async msg => {
    const data = JSON.parse(msg.toString());

    if (data.type === "init_duel") {
      duelManager.addPlayer(ws);
    }

    if (data.type === "code_submission") {
      const duel = duelManager.getDuel(ws);
      if (!duel || duel.finished) return;

      const { questionId, lang, code } = data.payload;
      const question = duel.questions.find(q => q.id === questionId);
      if (!question) return;

      const result = await code_submission(
        lang,
        code,
        question.testCases
      );

      if (result.verdict === "ACCEPTED") {
        duelManager.markSolved(ws, questionId);

        ws.send(JSON.stringify({
          type: "question_result",
          payload: { questionId, verdict: "ACCEPTED" }
        }));
      } else {
        ws.send(JSON.stringify({
          type: "question_result",
          payload: {
            questionId,
            verdict: "WRONG_ANSWER",
            failed: result.failedTestCase
          }
        }));
      }
    }
  });

  ws.on("close", () => duelManager.removePlayer(ws));
});

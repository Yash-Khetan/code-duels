import { WebSocketServer } from "ws";
import { code_submission } from "./code_submit.js";
import DuelManager from "./duel_manager.js";
const wss = new WebSocketServer({ port: 8080 });
const waiting_players = [] ;

wss.on('connection', ws => {
  console.log('Client connected');

  ws.on('message', async message => {
    const data = JSON.parse(message.toString());
    wss.clients.forEach(async client => {
      if (data.type === "message"){
        if (client !== ws && client.readyState === client.OPEN){
       
        client.send(JSON.stringify({
          type :" message", 
          payload: data.payload
        }))
      }
      }
    })



      if (data.type === "init_duel"){
        waiting_players.push(ws);
        console.log(waiting_players.length);
        
        if (waiting_players.length >= 2){
          const player1 = waiting_players.shift();
          const player2 = waiting_players.shift();
          const duel = new DuelManager(player1, player2);
          player1.send(JSON.stringify({
            type: "duel_start", 
            payload: {
              questions: [], 
              stdin: [],
              stdout: [], 
            }
          }))
          player2.send(JSON.stringify({
            type: "duel_start", 
            payload: "You are player 2"
          }))
        }
      } 
    

      else if (data.type === "code_submission"){
      const response =  await code_submission(data.payload.lang, data.payload.code);
      if (response.statusCode === 200){
        wss.clients.forEach(client => {
          if (client !== ws && client.readyState === client.OPEN){
            client.send(JSON.stringify({
              type: "code_accepted", 
              payload: "success"
            }))
        }})
      }
    }
      
    })
    ws.send('Welcome to Code-Duels!');


  ws.on('close', () => {
    console.log('Client disconnected');
  });


});
console.log('WebSocket server running on port 8080');

  

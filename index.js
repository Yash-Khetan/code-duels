import { WebSocketServer } from "ws";
import { code_submission } from "./code_submit.js";
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', ws => {
  console.log('Client connected');

  ws.on('message', message => {
    const data = JSON.parse(message.toString());
    wss.clients.forEach(client => {
      if (data.type === "message"){
        if (client !== ws && client.readyState === client.OPEN){
       
        client.send(JSON.stringify({
          type :" message", 
          payload: data.payload
        }))
      }
      }
      
    })
  });

  ws.on('message', async code => {
    // we handle the code submission here 
    const data = JSON.parse(code.toString());
    if (data.type === "code_submission"){
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
      

      // console.log("Code received: ", data.payload.code);
      // console.log("Language: ", data.payload.lang);
    }
  })


  ws.on('close', () => {
    console.log('Client disconnected');
  });

  ws.send('Welcome to the WebSocket server!');
});

console.log('WebSocket server running on port 8080');

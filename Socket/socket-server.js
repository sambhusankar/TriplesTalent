const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const clients = new Map();

wss.on('connection', (ws) => {
  // Assign a unique ID to each client
  const userId = Date.now();
  clients.set(userId, ws);

  // Notify the client of their user ID
  ws.send(JSON.stringify({ type: 'welcome', userId }));

  // Handle incoming messages
  ws.on('message', (message) => {
    const parsedMessage = JSON.parse(message);

    // Broadcast the message to the intended recipient
    const recipientWs = clients.get(parsedMessage.recipientId);
    if (recipientWs) {
      recipientWs.send(JSON.stringify({
        senderId: userId,
        message: parsedMessage.message,
      }));
    }
  });

  // Handle client disconnect
  ws.on('close', () => {
    clients.delete(userId);
  });
});

console.log('WebSocket server is running on ws://localhost:8080');

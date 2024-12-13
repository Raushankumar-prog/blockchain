import WebSocket from 'ws';

export const createWebSocketServer = (port:number) => {
  const server = new WebSocket.Server({ port });
  console.log(`WebSocket Server running on port ${port}`);
  return server;
};




export const createWebSocketClient = (url:string) => {
  const client = new WebSocket(url);

  client.on('open', () => {
    console.log(`WebSocket Client connected to ${url}`);
  });

  client.on('error', (error) => {
    console.error(`WebSocket Client error on ${url}:`, error);
  });

  

  return client;
};

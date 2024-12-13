import WebSocket from 'ws';

const BINANCE_WEBSOCKET_URL = 'wss://stream.binance.com:9443/ws';

export class BinanceWebSocketService {
  private socket: WebSocket;

  constructor() {
    this.socket = new WebSocket(BINANCE_WEBSOCKET_URL);

    this.socket.on('open', () => {
      console.log('Connected to Binance WebSocket');
    });

    this.socket.on('message', (data) => {
      console.log('Received data from Binance:', data.toString());
    });

    this.socket.on('error', (err) => {
      console.error('Binance WebSocket Error:', err);
    });

    this.socket.on('close', () => {
      console.log('Binance WebSocket connection closed');
    });
  }

  sendMessage(message: any) {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    } else {
      console.error('WebSocket is not open');
    }
  }
}

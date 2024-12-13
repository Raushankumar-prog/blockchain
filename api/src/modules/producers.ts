import { createWebSocketClient } from "../utils/webSocket.js";
import kafka from "../utils/kafkaClient.js";

const BINANCE_WS_URL = "wss://testnet.binance.vision/ws/btcusdt@trade";


const producer = kafka.producer();

async function setupKafkaProducer() {
  await producer.connect();
  console.log("Kafka producer connected!");
}


const binanceWs = createWebSocketClient(BINANCE_WS_URL);

binanceWs.on("open", () => {
  console.log("Connected to Binance WebSocket API.");

  
  const request = {
    method: "SUBSCRIBE",
    params: ["btcusdt@trade"], 
    id: 1,
  };

  binanceWs.send(JSON.stringify(request));
});

binanceWs.on("message", async (data) => {
  console.log("Received message from Binance:", data.toString());

  try {
    await producer.send({
      topic: "binance_topic",
      messages: [{ value: data.toString() }],
    });
    console.log("Message sent to Kafka!");
  } catch (err) {
    console.error("Error sending to Kafka:", err);
  }
});



binanceWs.on("error", (error) => {
  console.error("WebSocket error:", error);
});


export { setupKafkaProducer };

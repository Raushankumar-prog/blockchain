import kafka from "../../utils/kafkaClient.js";
import Prisma from "../../utils/prismaClient.js";


const consumer = kafka.consumer({ groupId: "binance_topic" });


async function setupKafkaConsumer() {
  try {

    await consumer.connect();
    console.log("Kafka consumer connected!");

    
    await consumer.subscribe({ topic: "binance_topic", fromBeginning: true });

    
     await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        try {
          const data = JSON.parse((message.value as Buffer).toString());
          console.log(`Received message from topic ${topic}, partition ${partition}:`, data);
        } catch (error) {
          console.error("Error processing message:", error);
        }
      },
    });
  } catch (err) {
    console.error("Error setting up Kafka consumer:", err);
  }
}



 export {setupKafkaConsumer};

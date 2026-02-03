import { configDotenv } from "dotenv";
import { WebSocket } from "ws";

configDotenv();

const url = "wss://ws.backpack.exchange";
const ws = new WebSocket(url);

console.log("Starting price poller service at 3003");

ws.on("open", () => {
    const subscribeMessage = {
        method: "SUBSCRIBE",
        params: ["bookTicker.BTC_USDC"],
        id: 1,
    };
    ws.send(JSON.stringify(subscribeMessage));
});

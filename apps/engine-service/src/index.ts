import { client } from "./client";
import { ENGINE_STREAM } from "./constants";
import { state } from "./state";

async function engine() {
    console.log("Trading Engine initialized on port 3002");
    while (true) {
        try {
            const res = await client.xread("BLOCK", 0, "STREAMS", ENGINE_STREAM, state.lastId);
            if (!res?.length) continue;
        } catch (err) {
            console.error("engine-loop error:", err);
        }
    }
}

engine();

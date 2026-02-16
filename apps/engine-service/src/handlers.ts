import { state } from "./state";
import type { PriceUpdatePayload } from "@repo/types";

export async function handlePriceUpdate(payload: PriceUpdatePayload) {
    if (!payload?.s) return;
    state.prices[payload.s] = {
        bid: Number(payload.b),
        ask: Number(payload.a),
        timestamp: Date.now()
    };
}

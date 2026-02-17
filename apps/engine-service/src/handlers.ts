import { state } from "./state";
import type { PriceUpdatePayload, CreateOrderPayload } from "@repo/types";
import { client } from "./client";

export async function handlePriceUpdate(payload: PriceUpdatePayload) {
    if (!payload?.s) return;
    state.prices[payload.s] = {
        bid: Number(payload.b),
        ask: Number(payload.a),
        timestamp: Date.now()
    };
}

export async function handleCreateOrder(payload: CreateOrderPayload) {
    console.log(`[ENGINE] Processing order creation for user ${payload.userId}`);
}

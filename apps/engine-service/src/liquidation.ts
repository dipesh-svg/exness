import { Side } from "@repo/types";

export function calculateUnrealizedPnL(
    side: Side,
    qty: number,
    openingPrice: number,
    currentPrice: number
): number {
    if (side === "long") {
        return (currentPrice - openingPrice) * qty;
    } else {
        return (openingPrice - currentPrice) * qty;
    }
}

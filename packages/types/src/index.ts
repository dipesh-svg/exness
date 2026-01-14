export type Symbol = "USDC" | "BTC";
export type Side = "long" | "short";
export type OrderStatus = "open" | "closed";
export type CloseReason = "TakeProfit" | "StopLoss" | "Manual" | "Liquidation";

export interface Order {
    id: string;
    userId: string;
    asset: string;
    side: "long" | "short";
    qty: number;
    leverage?: number;
    openingPrice: number;
    createdAt: number;
    status: string;
    takeProfit?: number;
    stopLoss?: number;
}

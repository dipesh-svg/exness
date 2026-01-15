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

export interface UserBalance {
    symbol: Symbol;
    balance: number;
    decimals: number;
}

export interface PriceData {
    symbol: string;
    bid: number;
    ask: number;
    timestamp: number;
}

export interface BalanceAsset {
    symbol: string;
    balance: number;
    decimals: number;
}

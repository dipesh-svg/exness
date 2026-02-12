import { prisma } from "./client";
import { Symbol } from "@repo/types";

export async function getUserBalance(userId: string, symbol: Symbol) {
    return await prisma.asset.findUnique({
        where: {
            userId_symbol: {
                userId,
                symbol,
            }
        }
    });
}

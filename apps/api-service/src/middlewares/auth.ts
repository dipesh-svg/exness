import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function isAuth(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Token missing" });
    next();
}

import { Request, Response, NextFunction } from "express";
import HTTPException from "@/utils/exceptions/http.exception";

function errorMiddleware(
    error: HTTPException,
    req: Request,
    res: Response,
    next: NextFunction
): void {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';

    res.status(status).json({
        status,
        message
    });
}

export default errorMiddleware;
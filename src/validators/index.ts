import { type NextFunction, type Request, type Response } from "express";
import type { ZodType } from "zod";

type RequestSource = "body" | "query" | "params";

export const validateIncoming = (
    schema: ZodType,
    source: RequestSource = "body"
) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req[source]);
            next();
        } catch (error) {
            res.status(400).json({
                message: `Invalid request ${source}`,
                success: false,
                error,
            });
        }
    };
};
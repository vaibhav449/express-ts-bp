import { type NextFunction, type Request, type Response } from "express";
import type { ZodType } from "zod";
import logger from "../config/logger.config.js";

type RequestSource = "body" | "query" | "params";

export const validateIncoming = (
    schema: ZodType,
    source: RequestSource = "body"
) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            logger.info("validating request", { source, data: req[source] });
            await schema.parseAsync(req[source]);
            next();
        } catch (error) {
            logger.error("Request validation failed", { source, data: req[source], error });
            res.status(400).json({
                message: `Invalid request ${source}`,
                success: false,
                error,
            });
        }
    };
};
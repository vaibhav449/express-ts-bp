import { z } from "zod";

export const pingMessageSchema = z.string().trim().min(1).max(255);

export const pingBodySchema = z
    .object({
        message: pingMessageSchema,
    })

export const pingQuerySchema = z
    .object({
        message: pingMessageSchema,
    })

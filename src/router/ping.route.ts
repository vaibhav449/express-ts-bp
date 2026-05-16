import  Express  from "express";
const router = Express.Router();
import { healthController, pingController } from "../controller/ping.controller.js";
import { validateIncoming } from "../validators/index.js";
import { pingBodySchema,pingQuerySchema } from "../validators/ping.validator.js";

router.post("/", validateIncoming(pingBodySchema, "body"),validateIncoming(pingQuerySchema, "query"), pingController);
router.get("/health", healthController);

export default router;  

import  Express  from "express";
const router = Express.Router();
import { healthController, pingController } from "../controller/ping.controller.js";

router.get("/", pingController);
router.get("/health", healthController);

export default router;  

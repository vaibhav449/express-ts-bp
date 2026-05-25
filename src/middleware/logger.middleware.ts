import {type Request, type Response, type NextFunction} from "express";
import { v4 as uuidv4 } from "uuid";
import {asyncLocalStorage} from "../helper/request.helper.js";
export const handleLogging = (req:Request, res:Response, next:NextFunction) => {
    const correlationId = uuidv4();
    // i could add this id in the req head but that will not work for async tasks like producer consumer some background task
    asyncLocalStorage.run({ correlationId:correlationId }, () => {
        next();
    });
}
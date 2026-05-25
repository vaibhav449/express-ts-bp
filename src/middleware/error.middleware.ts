import { type Request, type Response, type NextFunction } from "express";
import { type customError} from "../utils/error/app.error.js";
export const genericErrorHandler = (err:customError,req:Request,res:Response,next:NextFunction)=>{
    res.status(err.statusCode || 500).json({
        success:false,
        message: err.message || "Something went wrongggggg",
        codeKisneLikhaTha: err.codeKisneLikhaTha || "Unknown author of the error",
        name: err.name || "UnknownError",
    })
}
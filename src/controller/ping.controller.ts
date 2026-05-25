import { type Request, type Response, type NextFunction } from "express";
import fs from "fs/promises";
import { InternalServerError } from "../utils/error/app.error.js";
import logger from "../config/logger.config.js";

export async function pingController(req: Request, res: Response,next:NextFunction) {
    logger.info("called ping controller");
//    fs.readFile("hello", "utf-8", (err, data) => {
//     if (err) {
//        throw new Error("File not found");
//     }
//     res.send(data);
//  }); will not throw an error as it is an asynchronous operation, the error will be passed to the callback function and not thrown in the main thread. To handle this error properly, you can use a try-catch block or handle the error in the callback function.
 
    // try {
    //     fs.readFile("hello", "utf-8", (err, data) => {
    //         if (err) {
    //             throw new Error("File not found");
    //         }
    //         res.send(data);
    //     });
    // } catch (err) {
    //     res.status(500).send("File not found");
    // }

    // fs.readFile("hello", "utf-8", (err, data) => {
    //     if (err) {
    //        next(err);
    //     }
    //     res.send(data);
    // });
    
    //  try {
    //     const data = await fs.readFile("hello", "utf-8");
    //     res.send(data);
    // } catch (err) {
    //     const errorToThrow:customError = {
    //         statusCode: 500,
    //         message: "File not found",
    //         codeKisneLikhaTha: "vbv",
    //         name: "FileNotFoundError",
    //     };
    //     next(errorToThrow);
    // }
    //      try {
    //     const data = await fs.readFile("hello", "utf-8");
    //     res.send(data);
    // } catch (err) {
    //    throw new InternalServerError("File not found","vbv");
    // }

    return res.send("pong");
};

export function healthController(req: Request, res: Response) {
    console.log(req.ip)
    res.send("ok");
    console.log("Response sent");
    logger.info("Pinged health endpoint");
}
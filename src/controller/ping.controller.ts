import { type Request, type Response } from "express";


export function pingController(req: Request, res: Response) {
    console.log(req.ip)
    res.send("pong");
    console.log("Response sent");
}

export function healthController(req: Request, res: Response) {
    console.log(req.ip)
    res.send("ok");
    console.log("Response sent");
}
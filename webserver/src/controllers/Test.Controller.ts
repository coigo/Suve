import { Request, Response } from "express";

export class TestController {
    async handle ( req:Request, res:Response ) {
        console.log(req);
        return "ok"
    }

}
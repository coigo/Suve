
import Express ,{ Request, Response } from "express";
import WatchService from "../service/WatchService";

export default class WatchControler {

    async handle ( req: Request, res: Response ) {

        try {

            const stream = new WatchService()
            const s = stream.startStreaming()
            s.pipe(res)

        }
        catch ( err ) {
            res.status(500).end()
        }



    }

}
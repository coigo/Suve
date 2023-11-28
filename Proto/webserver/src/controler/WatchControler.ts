
import Express ,{ Request, Response } from "express";
import WatchService from "../service/WatchService";

export default class WatchControler {

    async handle ( req: Request, res: Response ) {

        try {
            const video = req.query.video
            const { range } = req.headers

            const watch = new WatchService({ range })

            const size = watch.startStreaming()
            res.json(size)
        }
        catch ( err ) {
            res.status(500).end()
        }



    }

}
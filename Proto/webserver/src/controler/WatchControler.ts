
import Express ,{ Request, Response } from "express";
import WatchService from "../service/WatchService";
import VideoRepository from "../repository/videoRepository";

export default class WatchControler {

    async handle ( req: Request, res: Response ) {
        try {
            const video_id = req.query.video
            console.log(video_id)
            const driveBack = res
            const watchService = new WatchService(
                driveBack,
                new VideoRepository()
            )
            const videoStream = watchService.startStreaming( video_id )
        }
        catch ( err ) {
            return res.status(500)
        }
    }
}

import Express, { Request, Response } from "express";
import WatchService from "../service/WatchService";
import VideoRepository from "../repository/videoRepository";

export default class WatchController {

    async handle(req: Request, res: Response) {
        try {
            
            const video_id = req.query.video
            const stream = res
            const watchService = new WatchService(
                stream,
                new VideoRepository()
            )
            const videoStream = watchService.startStreaming(video_id)
        }
        catch (err) {
            return res.status(500)
        }
    }
}
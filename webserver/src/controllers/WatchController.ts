
import Express, { Request, Response } from "express";
import WatchService from "../service/WatchService";
import VideoRepository from "../repository/videoRepository";

export default class WatchController {

    async handle(req: Request, res: Response) {
        try {
            
            const video_id= req.query.video as string
            const stream = res
            const watchService = new WatchService(
                stream,
                new VideoRepository()
            )
            const video = await watchService.startStreaming(video_id)
            res.writeHead(200, {
                    'Content-Type': 'video/mp4'
                })

            video.pipe(res)

        }
        catch (err) {
            return res.status(500)
        }
    }
}
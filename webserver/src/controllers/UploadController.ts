import type { Request, Response } from "express";
import UploadService from "../service/UploadService";
import VideoRepository from "../repository/videoRepository";


export default class UploadController {

    async handle(req: Request, res: Response) {
        
        const { file, body: { videoTitle } } = req
        
        if (file) {
            const upload = new UploadService(new VideoRepository())

            const video = await upload.writefile({
                originalname: file.originalname,
                filename: file.filename,
                size: file.size,
                videoTitle,
                upvotes: 0, 
            })
            return res.json({ publicId: video }).end()
        }
        return res.status(400)
    }

}
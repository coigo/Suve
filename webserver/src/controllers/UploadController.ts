import type { Request, Response } from "express";
import UploadService from "../service/UploadService";
import VideoRepository from "../repository/videoRepository";
import { AuthRequest } from "../infra/shared/AuthRequest";


export default class UploadController {

    async handle(req: AuthRequest, res: Response) {
        return res.json({publicId:"123"})
        const { file } = req
        try {
            if (file) {
                const upload = new UploadService(new VideoRepository())
    
                const video = await upload.writefile(file.buffer)
                console.log(video)
                return res.json({ publicId: video })
            }
            
        }
        catch(err: any) {
            console.log(err)
            return res.status(400)
        }
    }

}
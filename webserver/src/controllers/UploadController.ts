import type { Request, Response } from "express";
import UploadService from "../service/UploadService";
import VideoRepository from "../repository/videoRepository";
import { AuthRequest } from "../infra/shared/AuthRequest";


export default class UploadController {

    async handle(req: AuthRequest, res: Response) {
        
        const { file } = req
        if (file) {
            const upload = new UploadService(new VideoRepository())

            const video = await upload.writefile(file.buffer)
            return res.json({ publicId: video }).end()
        }
        return res.status(400)
    }

}
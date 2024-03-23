import { Request, Response } from "express";
import UploadService from "../service/UploadService";
import VideoRepository from "../repository/videoRepository";


export default class UploadControler {

    async handle ( req: Request, res: Response ) {
        const file = req.file
        if ( file ) {
            const upload = new UploadService( new VideoRepository() ) 
            const write = upload.writefile({
                originalname: file.originalname,
                filename: file.filename,
                size: file.size
            })
            return res.status(200)
        }
        return res.status(400)
    }

}
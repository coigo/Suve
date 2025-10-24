import multer from "multer";
import  path from "node:path";
import { randomUUID } from "node:crypto";
import dotenv from 'dotenv'
import { Request } from "express";

dotenv.config()



export default {

    storage: multer.memoryStorage(),
    fileFilter: (req: Request, file: Express.Multer.File , cb: multer.FileFilterCallback) => {
        const allowedMimes = [
            'video/mp4'
        ]

        if (allowedMimes.includes(file.mimetype)) {
            console.log(file)
            cb( null, true )
        }
        else cb(new Error ("Invalid Mipetype"))

    }

}
import multer from "multer";
import  path from "node:path";
import { randomUUID } from "node:crypto";
import dotenv from 'dotenv'
import { Request } from "express";

dotenv.config()



export default {

    storage: multer.diskStorage({
       destination: (req, file, callback) => {
           callback (null, path.resolve('videoImages'))
       },
    
       filename: (req, file, callback) => {
            const fileName = `${randomUUID()}`
           callback(null, fileName)
           req.body.imagemName = fileName
       },
    }),
    
    fileFilter: (req: Request, file: Express.Multer.File , cb: multer.FileFilterCallback) => {
        const allowedMimes = [
            'image/png'
        ]

        if (allowedMimes.includes(file.mimetype)) {
            console.log(file)
            cb( null, true )
        }
        else cb(new Error ("Invalid Mipetype"))

    }

}
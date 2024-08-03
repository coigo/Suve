import multer from "multer";
import  path from "node:path";
import { randomUUID } from "node:crypto";

export default {

    storage: multer.diskStorage({
       destination: (req, file, callback) => {
        console.log(file);
        
           callback (null, path.resolve('videos'))
       },
    
       filename: (req, file, callback) => {
           callback(null, `${randomUUID()}.mp4`)
       }
    }),
    
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'video/mp4'
        ]

        if (allowedMimes.includes(file.mimetype)) {
            cb( null, true )
        }
        else cb(new Error ("Invalid Mipetype"))

    }

}
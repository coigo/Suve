import multer from "multer";
import path from "path";
import { randomUUID } from "crypto";

export const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback (null, path.resolve('videos'))
    },

    filename: (req, file, callback) => {
        callback(null, `${randomUUID()}.mp4`)
    }
})
import multerConfig from "../multer-config";
import multer from "multer";
import { NextFunction, Request, Response } from "express";


interface uploader {
    writeVideo ( props: fileProps ): Promise<boolean> | {}
}

type fileProps = {
    originalname: string
    filename: string
    size: number
}

export default class UploadService {

    private repository: uploader
    
    constructor ( repository : uploader ) {
        this.repository = repository
    }
    
    
    async writefile (  props: fileProps ) {
        try {
            return await this.saveFileInfos(props)
        } catch ( err ) {
            console.log(err)
            throw err
        }
    }


    private async saveFileInfos( file: fileProps) {
        const write = await this.repository.writeVideo(file);
        if ( write ) {
            return true
        }   
        return false
    }
}


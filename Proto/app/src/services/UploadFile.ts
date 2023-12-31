import axios from "axios"
import api from "./Api"


interface fileProps {
    readableSize: string 
    file: File
    
}

interface acceptedUploads {
    UploadType: 'video' | 'image'
}

export default class UploadFile {

    protected UploadType

    constructor({ UploadType }: acceptedUploads ) {
        this.UploadType = UploadType
    }


    public async processUpload(uploadedFile: fileProps) {
        const data = new FormData()
        const { file } = uploadedFile
        console.log(file)
        data.append('file', file)
        try {
            api.post(`/upload`, data)
            return true
        } catch ( err ) {
            console.log(err)
            return false
        }
    }
}
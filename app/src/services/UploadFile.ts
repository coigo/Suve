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


    public async processUploadVideo(uploadedFile: fileProps) {
        const data = new FormData()
        const { file } = uploadedFile
        console.log(file)
        data.append('file', file)
        try {
            return api.post('/upload', data)
        } catch ( err ) {
            console.log(err)
            return false
        }
    }
    
    public async processUploadImage(uploadedFile: fileProps) {
        const data = new FormData()
        const { file } = uploadedFile
        console.log(file)
        data.append('file', file)
        try {
            return api.post('/upload/image', data)
        } catch ( err ) {
            console.log(err)
            return false
        }
        
    }
}
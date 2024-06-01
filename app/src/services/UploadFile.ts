import {api} from "./Api"
import Video from "../pages/upload/Video"


interface uploadProps {
    readableSize: string 
    video: Video 
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

    public async processUploadVideo({file, video}: uploadProps) {
        const data = new FormData()
        data.append('file', file)
        data.append('videoTitle',  video.getVideoTitle())
        
        try {
            return api.post('/upload', data)
        } catch ( err ) {
            console.log(err)
            return false
        }
    }
    


    public async processUploadImage(uploadedFile: uploadProps) {
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
import Api from "./Api"
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

    public async processUploadVideo({ file, video }: uploadProps) {
        const data = new FormData()
        data.append('file', file)
        data.append('videoTitle', video.getVideoTitle())
        
        return await Api.post({
            path: '/auth/upload', 
            data,
            config: {
                headers: {
                    "Content-Type": "video/mp4",
                }
            }
        })

    }
    


    // public async processUploadImage(uploadedFile: uploadProps) {
    //     const data = new FormData()
    //     const { file } = uploadedFile
    //     console.log(file)
    //     data.append('file', file)
    //     try {
    //         return api.post('/auth/upload/image', data)
    //     } catch ( err ) {
    //         console.log(err)
    //         return false
    //     }
        
    // }
}
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
        const formData = new FormData()
        formData.append('file', file)
        formData.append('videoTitle', video.getVideoTitle())
        
        const data  = await Api.post({
            path: '/auth/upload', 
            data: formData,
            config: {
                headers: {
                    "Content-Type": "video/mp4",
                }
            }
        })
        
        return data

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
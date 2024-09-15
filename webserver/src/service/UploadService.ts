
interface uploader {
    writeVideo ( props: fileProps ): Promise<boolean> | {}
}

type fileProps = {
    originalname: string
    videoTitle: string
    filename: string
    publicId?: string
    upvotes?:number
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
        const publicId = this.removeDotmp4(file.filename)    
        await this.repository.writeVideo({
            publicId,
            ...file
        });
        return publicId
    }

    private removeDotmp4(filename: string) {
        const idWithoutMP4 = filename.split('.mp4')
        return idWithoutMP4[0]
    }
}


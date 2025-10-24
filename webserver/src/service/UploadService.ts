import { randomUUID } from "crypto"

interface uploader {
    writeVideo(publicId: string, stream: Buffer): Promise<void>
}

type fileProps = {
    originalname: string
    videoTitle: string
    publicId?: string
    filename: string
    upvotes?: number
    userId: number
    size: number
}

export default class UploadService {

    private repository: uploader

    constructor(repository: uploader) {
        this.repository = repository
    }

    async writefile(stream: Buffer) {
        try {
            const publicId = randomUUID()

            await this.repository.writeVideo(publicId, stream);
            return publicId
        } catch (err) {
            console.log(err)
            throw err
        }
    }

}


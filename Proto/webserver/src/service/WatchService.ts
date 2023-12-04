
import { createReadStream, ReadStream, statSync} from 'fs'
import { Readable, pipeline } from 'stream'
import { promisify } from 'util'
import { Response } from 'express'


type props = {
    id: string
}

interface videosStreamProps {
    driveBack: Response
    repository? ( video: string ): string | {}
}



export default class WatchService {

    constructor ({driveBack, repository }: videosStreamProps ) {
        console.log(driveBack)
        this.external = { driveBack, repository }

    }    

    private external: videosStreamProps


    public async startStreaming ( props ) {
        
        try {
            const PromissedPipeline = promisify(pipeline)
            const videoPath = './videos/video.mp4'
            
            const stream = createReadStream(videoPath)
            stream.on('data', data => {
                console.log(data.toString())
                this.external.driveBack.write(data)
            })
            stream.on('end', () => {
                this.external.driveBack.end()
            })

        }
        catch (err) {
            console.log('deu ruim')
  
        }
    }

}
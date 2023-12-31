
import { createReadStream } from 'fs'
import { Response } from 'express'


type props = {
    id: string
}

interface videosStreamProps {
    find (video_id: any): Promise<string | null | undefined>
}

type driveback = Response

export default class WatchService {

    constructor ( driveBack: driveback, repository: videosStreamProps ) {
        console.log(driveBack)
        this.driveBack =  driveBack
        this.repository = repository

    }    

    private driveBack: driveback
    private repository: videosStreamProps


    public async startStreaming ( video_id ) {
        
        try {
            console.log(this.repository)
            const videoPath = await this.repository.find(video_id)
            if( videoPath ) {
                const stream = createReadStream(videoPath)
                stream.on('data', data => {
                    this.driveBack.write(data)
                })
                stream.on('end', () => {
                    this.driveBack.end()
                })
            }

        }
        catch (err) {
            console.log('deu ruim')
            throw err
  
        }
    }

}
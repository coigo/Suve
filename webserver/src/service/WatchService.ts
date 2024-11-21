
import { createReadStream } from 'node:fs'
import type { Response } from 'express'


type props = {
    id: string
}

interface videosStreamProps {
    find (video_id: string): Promise<string | null | undefined>
}

type stream = Response

export default class WatchService {

    constructor ( stream: stream, repository: videosStreamProps ) {
        console.log(stream)
        this.stream =  stream
        this.repository = repository

    }    

    private stream: stream
    private repository: videosStreamProps


    public async startStreaming ( video_id ) {
        
        try {
            console.log(this.repository)
            const videoPath = await this.repository.find(video_id)
            if( videoPath ) {
                const stream = createReadStream(videoPath)
                stream.on('data', data => {
                    this.stream.write(data)
                })
                stream.on('end', () => {
                    this.stream.end()
                })
            }

        }
        catch (err) {
            console.log('deu ruim')
            throw err
  
        }
    }

}
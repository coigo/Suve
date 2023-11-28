
import { ReadStream, statSync} from 'fs'

type props = {
    id: string
}

interface headers {
    range: string,
}

export default class WatchService {

    constructor ( headers: headers ) {
        
        this.headers = headers
        
    }
    
    private headers: headers
    private chunk_size = 10e6
    

    startStreaming (  ) {
        
        
        try {
            const videoPath =  'C:/Users/CODIG/SUVE/Proto/webserver/videos/video.mp4'
            const size = this.videoSize( videoPath )

            const { range } = this.headers

            const chunk_start = Number( range.replace( /\D/g, "" ))
            const chunk_end = Math.min( chunk_start + this.chunk_size, size -1 )
            const video_length = chunk_end - chunk_start +1

            const headers

            
        }
        catch ( err ) {
            console.log(err)
            throw err
        }
        
    }
    
    
    private  videoSize ( videoPath: string ) {
        
        try {            
            const videoSize = statSync(videoPath).size
            return videoSize

        }
        catch ( err ) {
            throw err
        }

    }

    

}
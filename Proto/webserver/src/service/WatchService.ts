
import { createReadStream, ReadStream, statSync} from 'fs'


type props = {
    id: string
}

interface headers {
    range: string,
}

export default class WatchService {

    constructor ( headers?: headers ) {
        
        
        
    }
    
    private headers: headers
    private chunk_size = 10e6
    

    startStreaming (  ) {
        
        
        try {
            const videoPath = './videos/video.mp4'
            
            return createReadStream(videoPath)

            
            
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
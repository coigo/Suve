import Express, {Request, Response}  from 'express'
import {createReadStream} from 'fs'
import { Readable } from 'stream'
import { pipeline } from 'stream/promises'


const app = Express()




app.get('/', (req: Request, res: Response) => {
    
    res.writeHead(200, {
        "Content-Type":"video/mp4"
    })

        try {
            const stream = createReadStream('videos/video.mp4')
            stream.pipe(res)

        }
        catch(err){
            console.log(err)
        }
    
    

})

app.listen(3000, () => {
    console.log('Aplicação aberta na porta 3000')
})
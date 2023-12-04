import Express, {Request, Response}  from 'express'
import {createReadStream} from 'fs'
import cors from 'cors'



const app = Express()

app.use(cors({origin:['http://localhost:5173']}))

app.get('/', (req: Request, res: Response) => {
    
    res.writeHead(200, {
        "Content-Type":"video/mp4"
    })

    try {
            console.log('deu certo')
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
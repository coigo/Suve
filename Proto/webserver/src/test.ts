import Express, {Request, Response}  from 'express'
import {createReadStream} from 'fs'
import cors from 'cors'
import multer from 'multer'
import { randomUUID } from 'crypto'
import { storage } from './multer-config'



// const app = Express()

// app.use(cors({origin:['http://localhost:5173']}))

// app.get('/', (req: Request, res: Response) => {
    
//     res.writeHead(200, {
//         "Content-Type":"video/mp4"
//     })

//     try {
//             console.log('deu certo')
//             const stream = createReadStream('videos/video.mp4')
//             stream.pipe(res)

//         }
//         catch(err){
//             console.log(err)
//         }

    
    

// })

// app.listen(3000, () => {
//     console.log('Aplicação aberta na porta 3000')
// })



const upload = multer({storage:storage})

const app = Express()

app.post('/upload', upload.single('file'), (req: Request, res:Response) => {
console.log('chegou o disco voador')
})



app.listen('3000', () => {
    console.log('Aplicação aberta a porta 3000')
})
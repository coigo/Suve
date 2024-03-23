import Express from "express";
import { router } from "./routes";
import MongoConnect from "./MongoConnect";
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = Express()
const PORT = 3000
const mongoPath = process.env.mongoPath 
const url = process.env.appUrl

MongoConnect(mongoPath)

app.use(cors({origin: ["http://localhost:5173"] }))
app.use(Express.urlencoded({extended: true}))
app.use('/', router)

app.listen(PORT, () => {
    console.log(`
        Aplicação aberta na porta ${PORT} \n 
        ${url}:${PORT}
    `)
})
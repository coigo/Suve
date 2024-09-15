import Express from "express";
import { router } from "./routes";
import MongoConnect from "../mongoDb/MongoConnect";
import dotenv from 'dotenv'
import cors from 'cors'
import { globalErrorHandler } from "../../controllers/ErrorController";
import cookieParser from 'cookie-parser'
import { authenticate } from "../middleware/auth";

dotenv.config()

const app = Express()
const PORT = process.env.apiPort
const mongoPath = process.env.mongoPath
const url = process.env.appUrl

const user = process.env.mongoUser
const pass = process.env.mongoPass

await MongoConnect(mongoPath, {
    user,
    pass
})



app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:5173"],
    }),
);
app.use('/', cookieParser())
app.use(Express.json())
app.use('/auth', authenticate)
app.use('/', router)


app.use(globalErrorHandler)

app.listen(PORT, () => {
    console.log(`
        Aplicação aberta na porta ${PORT} \n 
        ${url}:${PORT}
    `)
})
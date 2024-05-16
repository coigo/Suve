import Express from "express";
import { router } from "./routes";
import MongoConnect from "./MongoConnect";
import dotenv from 'dotenv'
import cors from 'cors'
import { globalErrorHandler } from "./controler/ErrorControler";
import cookieParser from 'cookie-parser'

dotenv.config()

const app = Express()
const PORT = process.env.apiPort 
const mongoPath = process.env.mongoPath 
const url = process.env.appUrl

MongoConnect(mongoPath)



app.use(
	cors({
		credentials: true,
		origin: ["http://localhost:5173"],
	}),
);
app.use(Express.urlencoded({extended: true}))
app.use(Express.json())
app.use('/', router)
app.use('/', cookieParser())


app.use(globalErrorHandler)

app.listen(PORT, () => {
    console.log(`
        Aplicação aberta na porta ${PORT} \n 
        ${url}:${PORT}
    `)
})
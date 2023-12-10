import Express, { Request, Response } from 'express';
import multer from 'multer';
import { randomUUID } from "crypto";
import { storage } from './multer-config.ts'

const app = Express()

app.post('/upload', (req: Request, res:Response) => {

})



app.listen('3000', () => {
    console.log('Aplicação aberta na porta 3000')
})
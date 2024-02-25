import Express, { Request, Response } from 'express';

const app = Express()

app.post('/upload', (req: Request, res:Response) => {

})



app.listen('3000', () => {
    console.log('Aplicação aberta na porta 3000')
})
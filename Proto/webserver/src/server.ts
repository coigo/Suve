import Express from "express";
import { router } from "./routes";

const app = Express()
const PORT = 3000

app.use('/', router)

app.listen(PORT, () => {
    console.log(`
        Aplicação aberta na porta ${PORT} \n 
        http://localhost:3000/
    `)
})
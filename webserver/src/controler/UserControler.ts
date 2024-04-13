import UserService from "../service/UserService";
import type { Request, Response } from "express";

export default class UserControler {
    private user
    constructor () {
        this.user = new UserService
    }
    

    public signUp ( req: Request, res: Response ) {
        const { body } = req 
        const user = new UserService()
        
        
        const signUp = user.signUp(body)
        return res.send(body).status(200)
        
    }

    public signIn ( req: Request, res: Response ) {
        const { body } = req
        const user = new UserService()

        const signIn = user.signInRequest(body)
        
        return res.send(body).status(200)

    }

}
import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { AuthRequest } from "../shared/AuthRequest";
dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET as string



export function authenticate(req: AuthRequest, res: Response, next: NextFunction) {
    const { headers: { authorization }  } = req
    
    if ( authorization ) {
        const token = authorization.replace(/^Bearer\s+/, "")

        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401)
            }
            req.user = decoded
            next()
        })

    }
    return res.statusCode = 401



}
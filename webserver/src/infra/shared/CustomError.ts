export class CustomError extends Error {
    public statusCode: number
    public message: string
    public status: string

    constructor (message: string, statusCode: number) {
        super(message)
        this.message = message
        this.statusCode = statusCode
        this.status = '123'

        
        Error.captureStackTrace(this, this.constructor)
    }



}
import type { Request, Response, NextFunction } from "express"


export function globalErrorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    error.statusCode = error.statusCode || 400
    error.status = error.status || 'error'
    res.json({ message: error.message })

    res.status(error.statusCode).send({
        status: error.statusCode,
        message: error.message,
        stack: () => {
            return error.stack.split('\n')
        }

    }
    )
}
type AsyncFunction = (req: Request, res: Response, next: NextFunction) => Promise<unknown>;

type AsyncErrorHandler = (func: AsyncFunction) => (req: Request, res: Response, next: NextFunction) => void;

export const asyncErrorHandler: AsyncErrorHandler = (func) => {
    return (req: Request, res: Response, next: NextFunction) => {
        func(req, res, next).catch(err => {
            next(err)
        });
    };
};
import { Request, Response, NextFunction } from 'express';
import { appError } from '../errors/appError';

const handleErrorMiddleware = async(error: Error, req: Request, res: Response, next: NextFunction)=>{
    
    if(error instanceof appError){
        return res.status(error.statusCode).json({
            message: error.message
        })
    }
    console.log(error)

    return res.status(500).json({
        message: 'Internal Server Error'
    })
}

export default handleErrorMiddleware
import { Request, Response, NextFunction} from "express";

const ensureAdmDeleteMiddleware = async(req: Request, res: Response, next: NextFunction) => {
  if(!req.user.isAdm){
    return res.status(403).json({message: "User is not an admin"})
  }

  return next()
}

export default ensureAdmDeleteMiddleware;
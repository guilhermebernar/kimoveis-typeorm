import { Request, Response } from "express"
import listSchedService from "../../services/schedules/listSchedule.service"

const listSchedController = async (req: Request, res: Response) =>{
    
    const id = req.params.id
    const schedule = await listSchedService(id)

    return res.send(schedule)
}

export default listSchedController
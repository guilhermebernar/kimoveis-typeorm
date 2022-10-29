import { Request, Response } from "express"
import createSchedService from "../../services/schedules/createSchedule.service"


const createSchedController = async (req: Request, res: Response) => {
    const {date, hour, propertyId} = req.body
    const userId = req.user.id
    const newSchedule = await createSchedService({date, hour, propertyId, userId})

    return res.status(201).json({message: newSchedule})
}

export default createSchedController
export interface IScheduleRequest {
    userId: string
    propertyId: string
    date: string
    hour: string
}

export interface IScheduleCreate {
    userId: string
    propertyId: string
    date: Date
    hour: Date
}
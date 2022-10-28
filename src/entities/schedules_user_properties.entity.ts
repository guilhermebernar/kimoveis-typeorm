import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { Properties } from "./properties.entity";

@Entity("schedules_user_properties")
class Schedules{

    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({type: "date"})
    date: Date

    @Column({type: "time"})
    hour: Date

    @ManyToOne(() => Properties, (property) => property.schedules)
    property: Properties

    @ManyToOne(() => User, (user) => user.schedule, {
        eager: true
    })
    user: User


}

export {Schedules}
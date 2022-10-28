import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { Address } from "./addresses.entity";
import { Categories } from "./categories.entity";
import { Schedules } from "./schedules_user_properties.entity";

@Entity('properties')
class Properties{

    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({default: false})
    sold: boolean

    @Column({
        type: "decimal", 
        precision: 12, 
        scale: 2, 
        default: 0
    })
    value: number

    @Column({type: "integer"})
    size: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne((type) => Address, {eager: true})
    @JoinColumn()
    adresses: Address

    @ManyToOne((type) => Categories, {eager: true})
    categories: Categories

    @OneToMany((type) => Schedules, (schedule) => schedule.property)
    schedules: Schedules[]
}

export {Properties}
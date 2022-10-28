import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import {Exclude} from 'class-transformer'
import { Schedules } from './schedules_user_properties.entity';

@Entity('users')
class User {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column({length: 60})
    name: string;

    @Column({length: 60, unique: true})
    email: string;

    @Column({length: 60})
    @Exclude()
    password: string;

    @Column({default: false})
    isAdm: boolean;

    @Column({default: true})
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Schedules, (schedule) => schedule.user)
    schedule: Schedules
}

export {User}

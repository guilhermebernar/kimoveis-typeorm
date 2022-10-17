import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
class User {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column({length: 60})
    name: string;

    @Column({length: 60, unique: true})
    email: string;

    @Column({length: 60})
    password: string;

    @Column({default: false})
    isAdm: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

export {User}

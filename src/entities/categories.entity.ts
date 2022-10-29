import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Properties } from "./properties.entity";
// import { Properties } from "";

@Entity('categories')
class Categories{

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column()
    name: string;
    
    @OneToMany(() => Properties, (property) => property.category)
    properties: Properties[]

}

export {Categories}
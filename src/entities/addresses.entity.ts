import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('addreses')
class Address{

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column()
    district: string;

    @Column()
    zipcode: string;

    @Column()
    number: string;

    @Column()
    city: string;

    @Column()
    state: string;
}

export {Address}
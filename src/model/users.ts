import {Column, Entity, PrimaryGeneratedColumn,OneToMany} from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    idUser: number;
    @Column({type: 'varchar', length: 255})
    userName: string;
    @Column()
    password: string;
    @Column()
    fullName: string;
    @Column()
    birthDay: string;
    @Column()
    role: string;
    @Column()
    status: string;
    @Column({type: 'text'})
    image: string;
}
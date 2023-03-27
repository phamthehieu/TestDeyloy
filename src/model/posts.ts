import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    idPost: number;
    @Column({type: 'text'})
    content: string;
    @Column()
    imagePost: string;
    @Column()
    idUser: number;
    @Column()
    role: string;
    @Column()
    time: string
}
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Likes {
    @PrimaryGeneratedColumn()
    idLike: number;
    @Column()
    idUser: number;
    @Column()
    idPosts: number;
}
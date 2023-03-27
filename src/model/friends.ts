import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Friends {
    @PrimaryGeneratedColumn()
    idFriend: number;
    @Column()
    idSender: number;
    @Column()
    idReceiver: number;
    @Column({type: 'varchar', length: 255})
    status: string;
}
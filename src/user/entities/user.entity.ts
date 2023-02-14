import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import{ User } from'../interfaces/user.interface';

@Entity('user')

export class UserRepository implements User{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    emailId:string
    @Column()
    username:string
    @Column()
    password:string
}

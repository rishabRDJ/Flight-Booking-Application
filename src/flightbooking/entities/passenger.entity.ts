import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { BookingEntity } from "./booking.entity";
import { Passenger } from "../interface/passenger.interface";

@Entity('passenger')

export class PassengerEntity implements Passenger{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string;
    @Column()
    gender:string;
    @Column()
    age:number;
    @ManyToMany(type=>BookingEntity,booking =>booking.passengers)
    bookings:BookingEntity[]
}

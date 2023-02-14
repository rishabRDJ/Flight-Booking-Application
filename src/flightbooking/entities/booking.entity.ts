import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Booking } from "../interface/booking.interface";
import { PassengerEntity } from "./passenger.entity";

@Entity('booking')

export class BookingEntity implements Booking{
    @PrimaryGeneratedColumn()
    pnr?: number;
    @Column()
    flight_id: number;
    @Column()
    booked_by: string;
    @Column()
    emailId: string;
    @Column()
    number_of_seats: string;
    @Column()
    selected_meal: string;
    @Column({nullable:true})
    selected_seat_number: string;
    @Column({default:'Active'})
    status: string;
    @ManyToMany(type=>PassengerEntity, passenger => passenger.id,{
        cascade:true
    })
    @JoinTable()
    passengers:PassengerEntity[];
}

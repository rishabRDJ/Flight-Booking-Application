import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AirlineEntity } from "../../airline/entities/airline.entity";
import { Flight } from "../interface/flight.interface";

@Entity('flight')

export class FlightEntity implements Flight{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    flight_number:number
    @Column()
    from_place:string
    @Column()
    to_place:string
    @Column()
    start_time:string
    @Column()
    end_time:string
    @Column()
    total_number_of_business_class_seats:string
    @Column()
    total_number_of_nonbusiness_class_seats:string
    @Column()
    ticket_cost:string
    @Column()
    total_number_of_seats:string
    @Column()
    meal:string
    @ManyToOne(type=>AirlineEntity,airline=>airline.id,{
        nullable: true,
        cascade: true,
    })
    airline_id:AirlineEntity
}

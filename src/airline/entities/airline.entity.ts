import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Airline } from "../interface/airline.interface";
import { FlightEntity } from "../../flightbooking/entities/flight.entity";

@Entity('airline')

export class AirlineEntity implements Airline {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name: string;
    @Column({default:"no"})
    blocked?: string;
    @OneToMany(type=>FlightEntity,flight=>flight.airline_id)
    flights:FlightEntity[]
}

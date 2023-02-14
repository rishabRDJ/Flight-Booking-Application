import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingEntity } from './entities/booking.entity';
import { FlightEntity } from './entities/flight.entity';
import { Booking } from './interface/booking.interface';
import { Flight } from './interface/flight.interface';

@Injectable()

export class FlightbookingService {
    constructor(
        @InjectRepository(FlightEntity) private flightRepository:Repository<FlightEntity>,
        @InjectRepository(BookingEntity) private bookingRepository:Repository<BookingEntity>
        ){}

    async addFlight(flight:Flight):Promise<FlightEntity>{
        return await this.flightRepository.save(flight)
    }

    async searchFlight(search:Flight):Promise<FlightEntity[]>{
        return await this.flightRepository.find(
            {where:{
                from_place:search.from_place,to_place:search.to_place
            }  
          })
        }

        async bookFlight(booking:Booking):Promise<BookingEntity>{
            return await this.bookingRepository.save(booking)
        }

        async bookingHistory(emailId:string):Promise<BookingEntity[]>{
            return await this.bookingRepository.find(
                {where:{emailId:emailId},
                relations:{
                    passengers:true
                }
            })
        }

        async ticketDetails(pnr:number):Promise<BookingEntity[]>{
            return await this.bookingRepository.find(
                {where:{pnr:pnr},
                relations:{
                    passengers:true
                }
            })
        }
        
        async cancelTicket(pnr:number):Promise<any>{
            return await this.bookingRepository.update(pnr,{status:'Inactive'})
        }
}

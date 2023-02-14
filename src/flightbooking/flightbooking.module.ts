import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirlineEntity } from 'src/airline/entities/airline.entity';
import { BookingEntity } from './entities/booking.entity';
import { FlightEntity } from './entities/flight.entity';
import { PassengerEntity } from './entities/passenger.entity';
import { FlightbookingController } from './flightbooking.controller';
import { FlightbookingService } from './flightbooking.service';

@Module({
  imports:[TypeOrmModule.forFeature([FlightEntity,AirlineEntity,BookingEntity,PassengerEntity])],
  controllers: [FlightbookingController],
  providers: [FlightbookingService],
  exports:[FlightbookingModule]
})

export class FlightbookingModule {}

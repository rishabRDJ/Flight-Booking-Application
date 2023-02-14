import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightEntity } from 'src/flightbooking/entities/flight.entity';
import { AirlineController } from './airline.controller';
import { AirlineService } from './airline.service';
import { AirlineEntity } from './entities/airline.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AirlineEntity,FlightEntity])],
  controllers: [AirlineController],
  providers: [AirlineService],
  exports:[AirlineModule]
})

export class AirlineModule {}

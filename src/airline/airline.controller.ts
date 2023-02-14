import { Body, Controller, Post,Put } from '@nestjs/common';
import { Airline } from './interface/airline.interface';
import { AirlineService } from './airline.service';

@Controller('airline')

export class AirlineController {
    constructor(private airlineService:AirlineService){}
    @Post()
    async addAirline(@Body() airline:Airline){
        try{
           let savedAirline=this.airlineService.addAirline(airline)
            return savedAirline;
        }catch(e){
            throw new Error('Airline not saved')
        }
    }
    
    @Put()
    async updateAirline(@Body() airline:Airline){
        try{
            let updateAirline=this.airlineService.updateAirline(airline)
            return updateAirline;
        }catch(e){
            throw new Error('Airline not updated')
        }
    }
}

import { Controller, Body, Post, Req , Get, Param, Put, Response } from '@nestjs/common';
import { Flight } from './interface/flight.interface';
import { FlightbookingService } from './flightbooking.service';
import { Booking } from './interface/booking.interface';
import { HttpStatus } from '@nestjs/common/enums';

@Controller('flightbooking')

export class FlightbookingController {
    constructor(private flightbookingService:FlightbookingService){}

    @Post()
    async addFlight(@Body() flight:Flight){
        console.log(JSON.stringify(flight))
        try{
            return this.flightbookingService.addFlight(flight)
        }catch(e){
            throw new Error('flight not saved')
        }
    }

    @Get()
    async searchFlight(@Body() search:Flight){
        console.log(JSON.stringify(search))
        try{
            return this.flightbookingService.searchFlight(search)
        }catch(e){
            throw new Error('flight not saved')
        }
    }

    @Post('booking')
    async bookFlight(@Body() booking:Booking){
        console.log(JSON.stringify(booking))
        try{
            return this.flightbookingService.bookFlight(booking)
        }catch(e){
            throw new Error('flight not saved')
        }
    }

    @Get('history/:emailId')
    async bookingHistory(@Param('emailId') emailId:string){
        console.log(emailId)    
        try{
            return this.flightbookingService.bookingHistory(emailId)
        }catch(e){
            throw new Error('flight not saved')
        }
    }

    @Get('ticket/:pnr')
    async ticketDetails(@Param('pnr') pnr:number){
        console.log(pnr)
        try{
            return this.flightbookingService.ticketDetails(pnr)
        }catch(e){
            throw new Error('flight not saved')
        }
    }
    
    @Put('cancel/:pnr')
    async cancelTicket(@Param('pnr') pnr:number,@Response()res){
        console.log(pnr)
        try{
           await this.flightbookingService.cancelTicket(pnr);
          res.status(HttpStatus.NO_CONTENT).send()
        }catch(e){
            throw new Error('flight not saved')
        }
    }
}

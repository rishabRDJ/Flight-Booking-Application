import { Controller,Post, UseGuards,Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';

@Controller('auth')

export class AuthController {
    constructor(private authService: AuthService) {}

    @Get()test(){
        console.log('get')
    }
    
    @UseGuards(AuthGuard("local"))

    @Post('/login')

    async login(@Request() req){        
        return this.authService.generateToken(req.user)
    }
}

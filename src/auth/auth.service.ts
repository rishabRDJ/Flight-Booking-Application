import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserRepository } from'./../user/entities/user.entity';
import { JwtService } from'@nestjs/jwt';

@Injectable()

export class AuthService {
    constructor(private readonly userService:UserService,
        private readonly jwtService:JwtService){
    }

   async validateUser(userName:string,password:string):Promise<any>{
    console.log("auth")
       let foundUser= await this.userService.findOne(userName,password);
       console.log(foundUser)
       if(!!foundUser){
        return foundUser
       }
       return null;
    }

    async generateToken(user:UserRepository){
        console.log('generate token')
        console.log({...user});
        const{username,emailId}=user;
        const payload={username,emailId}
        console.log(payload);
        const token=this.jwtService.sign(payload)
        return {
            token:token
        }
    }
}

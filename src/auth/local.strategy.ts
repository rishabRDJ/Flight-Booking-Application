import { Injectable } from "@nestjs/common";
import { UnauthorizedException } from "@nestjs/common/exceptions";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UserRepository } from "../user/entities/user.entity";
import { AuthService } from "./auth.service";

@Injectable()

export class LocalStrategy extends PassportStrategy(Strategy){

    constructor(private readonly authservice:AuthService){
        super();
    }
    
    async validate(username:string,password:string):Promise<UserRepository>{
    console.log(JSON.stringify(username)+"local")
    console.log(JSON.stringify(password)+"local")
    const user= await this.authservice.validateUser(username,password);
    console.log(user)
    if(!user){
        throw new UnauthorizedException();
    }
    return user
   }
}

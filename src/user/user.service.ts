import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import{UserRepository}from'./entities/user.entity';

@Injectable()

export class UserService {
    constructor(@InjectRepository(UserRepository) private userRepository:Repository<UserRepository>)
    {}
    async findOne(username:string,password:string):Promise<UserRepository |undefined>{
        return this.userRepository.findOneBy({username:username,password:password})
    }
}

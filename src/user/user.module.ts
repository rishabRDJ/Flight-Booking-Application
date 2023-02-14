import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin/admin.controller';
import { UserRepository } from './entities/user.entity';
import { GuestController } from './guest/guest.controller';
import { UserService } from './user.service';

@Module({
  imports:[TypeOrmModule.forFeature([UserRepository])],
  controllers: [AdminController, GuestController],
  providers: [UserService],
  exports: [TypeOrmModule, UserService],
})

export class UserModule {}

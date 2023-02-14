import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UserService } from '../user/user.service';
import { JwtModule } from'@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports:[
    JwtModule.register({
      signOptions:{ 
        expiresIn: '1d'
      },
      secret: jwtConstants.secret
    }),
    UserModule,PassportModule
  ],
  controllers: [AuthController],
  providers: [AuthService,UserService,LocalStrategy],
  exports:[AuthService]
})

export class AuthModule {}

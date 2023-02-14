import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { FlightbookingModule } from './flightbooking/flightbooking.module';
import { AirlineModule } from './airline/airline.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    AuthModule,
    UserModule,
    FlightbookingModule,
    AirlineModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) || 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true
      })
    }),
    ConfigModule.forRoot(
      {
        envFilePath: '.env',
        ignoreEnvFile: false,
      }
    )
  ],

  controllers: [AppController],
  
  providers: [
    AppService,
    JwtService
  ]
})

export class AppModule {}

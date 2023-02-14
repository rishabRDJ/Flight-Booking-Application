import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const builder =  new DocumentBuilder()
  .setTitle("SWAGGER")
    .setDescription("Flightbooking")
    .setVersion("v2.34")
    .setContact("Capstone Project", "/", "demo@gmail.com")
  .build();

const config = SwaggerModule.createDocument(app, builder);
  SwaggerModule.setup("api", app, config);
  await app.listen(3000);
}

bootstrap();

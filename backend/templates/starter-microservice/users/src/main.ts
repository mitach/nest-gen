import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { ConfigService } from '@nestjs/config';
import { Transport, TcpOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(UsersModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: new ConfigService().get('PORT'),
    },
  } as TcpOptions);

  await app.listenAsync();
}

bootstrap();

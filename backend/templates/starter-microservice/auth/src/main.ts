import { NestFactory } from '@nestjs/core';
import { AuthModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Transport, TcpOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AuthModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: new ConfigService().get('PORT'),
    },
  } as TcpOptions);

  await app.listenAsync();
}

bootstrap();

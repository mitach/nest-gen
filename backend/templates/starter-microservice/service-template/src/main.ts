import { NestFactory } from '@nestjs/core';
// <!-- MODULE_IMPORT_PLACEHOLDER -->
import { ConfigService } from '@nestjs/config';
import { Transport, TcpOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    // <!-- MODULE_BOOTSTRAP_PLACEHOLDER -->
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: new ConfigService().get('PORT'),
      },
    } as TcpOptions);

  await app.listenAsync();
}

bootstrap();

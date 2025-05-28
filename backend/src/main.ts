import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false,
  });

  // await app.listen(process.env.PORT ?? 5000);
  const port = process.env.PORT || 5000;
  await app.listen(port, '0.0.0.0');
}
bootstrap();

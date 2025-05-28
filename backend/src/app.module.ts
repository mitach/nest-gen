import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeneratorModule } from './generator/generator.module';
import { ConfigModule } from '@nestjs/config';
import { FeaturesModule } from './features/features.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GeneratorModule,
    FeaturesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

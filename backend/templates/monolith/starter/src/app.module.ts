import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';


@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
})

export class AppModule { }

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { HealthService } from './services/healthz.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, HealthService],
})
export class AppModule {}

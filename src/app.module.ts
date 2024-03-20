import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { HealthService } from './services/healthz.service';
import { MailService } from './services/mail.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true
    })
  ],
  controllers: [AppController],
  providers: [
    HealthService,
    MailService,
  ],
})
export class AppModule {}

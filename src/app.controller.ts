// Replacement of routes/index.js
import { Controller, Get, Post, Render } from '@nestjs/common';

import { AppService } from './services/app.service';
import { AppRootResponse } from './models/app.model';
import { HealthService } from './services/healthz.service';
import { HealthCheckResponse } from 'src/models/health.model';
import { MailService } from './services/mail.service';
import { ReqBodySendMail, RespBodySendMail } from './models/mail.model';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly healthService: HealthService,
    private readonly mailService: MailService,
  ) {}

  // Note that responsibility of render is in controller, not services
  @Get()
  @Render('home')
  root() : AppRootResponse {
    return this.appService.root();
  }

  @Get('/healthz')
  healthz(): HealthCheckResponse {
    return this.healthService.healthz();
  }

  @Post('/mail')
  mail(): Promise<RespBodySendMail> {
  // TODO: Fetch data from views
    const body: ReqBodySendMail = {
      sender: {
        email: 'test@example.com',
        name: 'hwakabh'
      },
      to: [{
        email: 'hrykwkbys1024@gmail.com',
        name: 'admin'
      }],
      subject: '[Brevo] test mail',
      textContent: 'This is a test mail body.'
    }

    return this.mailService.sendmail(body);
  }
}

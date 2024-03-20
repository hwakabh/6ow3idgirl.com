// Replacement of routes/index.js
import { Body, Controller, Get, Post, Render } from '@nestjs/common';

import { AppRootResponse } from './models/app.model';
import { HealthService } from './services/healthz.service';
import { HealthCheckResponse } from 'src/models/health.model';
import { MailService } from './services/mail.service';
import { MailBody, ReqBodySendMail, RespBodySendMail } from './models/mail.model';

@Controller()
export class AppController {
  constructor(
    private readonly healthService: HealthService,
    private readonly mailService: MailService,
  ) {}

  // Note that responsibility of render is in controller, not services
  @Get('/')
  @Render('home')
  root() : AppRootResponse {
    return { message: "with Nest" }
  }

  @Get('/healthz')
  healthz(): HealthCheckResponse {
    return this.healthService.healthz();
  }

  @Post('/mail')
  mail(
    @Body() mailBody: MailBody
  ): Promise<RespBodySendMail> {

    const body: ReqBodySendMail = {
      sender: {
        email: mailBody.email,
        name: mailBody.name
      },
      to: [{
        email: 'hrykwkbys1024@gmail.com',
        name: 'admin'
      }],
      subject: `[6ow3idgirl] Submission via Contact Form: from ${mailBody.name}`,
      textContent: mailBody.message
    }

    return this.mailService.sendmail(body);
  }
}

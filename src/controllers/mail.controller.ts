// Replacement of routes/index.js
import { Body, Controller, Post } from '@nestjs/common';

import { MailService } from '../services/mail.service';
import { MailBody, ReqBodySendMail, RespBodySendMail } from '../models/mail.model';


@Controller()
export class MailController {
  constructor(
    private readonly mailService: MailService,
  ) {}

  // TODO: implemented dedicated controller
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

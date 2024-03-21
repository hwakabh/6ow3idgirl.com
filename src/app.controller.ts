// Replacement of routes/index.js
import { Body, Controller, Get, Post, Render, Param } from '@nestjs/common';

import { AppRootResponse } from './models/app.model';
import { HealthService } from './services/healthz.service';
import { HealthCheckResponse } from 'src/models/health.model';
import { MailService } from './services/mail.service';
import { MailBody, ReqBodySendMail, RespBodySendMail } from './models/mail.model';
import { MusicService } from './services/music.db.service';
import { MovieService } from './services/movie.db.service';

@Controller()
export class AppController {
  constructor(
    private readonly healthService: HealthService,
    private readonly mailService: MailService,
    private readonly musicService: MusicService,
    private readonly movieService: MovieService,
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

  // TODO: implement dedicated controller/module for release(=music+movie)
  @Get('/music')
  readAllMusic() {
    return this.musicService.readAll();
  }

  @Get('/music/:id')
  readOneMusic(@Param('id') id: number) {
    return this.musicService.readOne(id);
  }

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

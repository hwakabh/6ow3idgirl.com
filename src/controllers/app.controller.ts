// Replacement of routes/index.js
import { Body, Controller, Get, Post, Render, Param } from '@nestjs/common';

import { AppRootResponse } from '../models/app.model';
import { HealthService } from '../services/healthz.service';
import { HealthCheckResponse } from 'src/models/health.model';
import { MailService } from '../services/mail.service';

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

}

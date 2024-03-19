// Replacement of routes/index.js
import { Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './services/app.service';
import { HealthService } from './services/healthz.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly healthService: HealthService,
  ) {}

  // Note that responsibility of render is in controller, not services
  @Get()
  @Render('home')
  root() : object {
    return this.appService.root();
  }

  @Get('/healthz')
  healthz(): object {
    return this.healthService.healthz();
  }
}

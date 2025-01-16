// Replacement of routes/index.js
import { Controller, Get, Render } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

import { AppRootResponse } from './models/app.model';
import { HealthService } from './services/healthz.service';
import { ConfigService } from '@nestjs/config';
import { HealthCheckResponse } from 'src/models/health.model';

@Controller()
export class AppController {
  constructor(
    private readonly healthService: HealthService,
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  // Note that responsibility of render is in controller, not services
  @Get('/')
  @Render('home')
  async root() : Promise<AppRootResponse> {
    // platform specific for Nest MVC to fetch URL of application backend
    const url: string = this.configService.get('URL') ?? 'http://localhost:8080';

    const musics: object = await firstValueFrom(this.httpService.get(url + '/music'));
    const movies: object = await firstValueFrom(this.httpService.get(url + '/movie'));

    return {
      message: "with Nest",
      musics: musics,
      movies: movies,
    }
  }

  @Get('/healthz')
  healthz(): HealthCheckResponse {
    return this.healthService.healthz();
  }

}

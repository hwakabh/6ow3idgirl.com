// Replacement of routes/index.js
import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('home')
  // case if not pass any variables
  // root() {}
  root() {
    return { message: 'with Nest' };
  }

  @Get('/healthz')
  healthz() {
    return { status: 'ok' };
  }
}

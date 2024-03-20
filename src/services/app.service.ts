import { Injectable } from '@nestjs/common';
import { AppRootResponse } from 'src/models/app.model';

@Injectable()
export class AppService {
  root(): AppRootResponse {
    return { message: 'with Nest' };
  }
}

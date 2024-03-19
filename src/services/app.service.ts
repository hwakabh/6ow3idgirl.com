import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // should be replaced from object to Types
  root(): object {
    return { message: 'with Nest' };
  }
}

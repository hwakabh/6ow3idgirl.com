import { Injectable } from '@nestjs/common';
import { HealthCheckResponse } from 'src/models/health.model';


@Injectable()
export class HealthService {
  // should be replaced from object to Types
  healthz(): HealthCheckResponse {
    return { status: 'ok' };
  }
}

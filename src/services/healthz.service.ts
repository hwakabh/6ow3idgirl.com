import { Injectable } from '@nestjs/common';
import { HealthCheckResponse } from 'src/models/health.model';

@Injectable()
export class HealthService {
  healthz(): HealthCheckResponse {
    return { status: 'ok' };
  }
}

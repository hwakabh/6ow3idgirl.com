import { Injectable } from '@nestjs/common';
import { ReqBodySendMail, RespBodySendMail } from 'src/models/mail.model';


@Injectable()
export class HealthService {
  healthz(payload: ReqBodySendMail): RespBodySendMail {
    // TODO: actual logics to call Brevo endpoint here
    return { messageId: '<202403061225.81258789567@smtp-relay.mailin.fr>' };
  }
}

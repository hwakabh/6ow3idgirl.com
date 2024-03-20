import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

import { ReqBodySendMail, RespBodySendMail } from 'src/models/mail.model';

@Injectable()
export class MailService {
  constructor (
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async sendmail(payload: ReqBodySendMail): Promise<RespBodySendMail> {
    console.log(payload);

    const url: string = 'https://api.brevo.com/v3/smtp/email';
    const hs: object = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "api-key": this.configService.get('BREVO_API_KEY')
    };
    const { data }  = await firstValueFrom(this.httpService.post(url, payload, {headers: hs}));
    console.log(data);

    return data
  }
}

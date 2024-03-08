import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  // https://docs.nestjs.com/first-steps#platform
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // const app = await NestFactory.create(AppModule);

  // https://docs.nestjs.com/techniques/mvc
  // https://github.com/nestjs/nest/tree/master/sample/15-mvc
  // __dirname returns 'PROJECT_ROOT/dist'
  app.useStaticAssets(join(__dirname, '..', '/src/public'));
  app.setBaseViewsDir(join(__dirname, '..', '/src/views'));
  app.setViewEngine('pug');

  await app.listen(8080);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';

// Express general
import { NestExpressApplication } from '@nestjs/platform-express';
import express from 'express';
// import { Request, Response, NextFunction } from "express";

// middlewares by express-generator
// import createHttpError from "http-errors";
import cookieParser from "cookie-parser";
import logger from "morgan";

async function bootstrap() {
  // https://docs.nestjs.com/first-steps#platform
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // const app = await NestFactory.create(AppModule);

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // https://docs.nestjs.com/techniques/mvc
  // https://github.com/nestjs/nest/tree/master/sample/15-mvc
  // __dirname returns 'PROJECT_ROOT/dist'
  app.useStaticAssets(join(__dirname, '..', '/src/public'));
  app.setBaseViewsDir(join(__dirname, '..', '/src/views'));
  app.setViewEngine('pug');

  app.use(cookieParser());
  app.use(logger("dev"));

  // TODO: should be replaced with helmet
  app.disable('x-powered-by');

  // TODO: fix 404 with import controllers(routers)
  // // Error handler
  // app.use((req: Request, res: Response, next: NextFunction) =>
  //   next(createHttpError(404))
  // );
  // app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  //   res.locals.message = err.message;
  //   res.locals.error = req.app.get("env") === "development" ? err : {};

  //   res.status(err.status || 500);
  //   res.render("error");
  // });

  await app.listen(8080);
}
bootstrap();

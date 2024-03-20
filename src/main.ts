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
import Helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.useStaticAssets(join(__dirname, '..', '/src/public'));
  app.setBaseViewsDir(join(__dirname, '..', '/src/views'));
  app.setViewEngine('pug');

  app.use(cookieParser());
  app.use(logger("dev"));
  app.use(Helmet());

  // // TODO: fix 404 with import controllers(routers)
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

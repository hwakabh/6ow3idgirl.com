import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Music } from './entities/musics.entity';
import { Movie } from './entities/movies.entity';

import { AppController } from './app.controller';
import { MailController } from './controllers/mail.controller';
import { ReleaseController } from './controllers/release.controller';

import { HealthService } from './services/healthz.service';
import { MailService } from './services/mail.service';
import { MusicService } from './services/music.db.service';
import { MovieService } from './services/movie.db.service';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOSTNAME,
      port: Number(process.env.MYSQL_PORT),
      database: process.env.MYSQL_DATABASE,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      entities: ['dist/entities/*.js'],
      migrations: ['dist/migrations/*.js'],
      logging: true,
      // if true, data will be automatically updated with detecting changes
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Music, Movie]),
    ConfigModule.forRoot({
      isGlobal: true
    }),
  ],
  controllers: [
    AppController,
    MailController,
    ReleaseController,
  ],
  providers: [
    HealthService,
    MailService,
    MusicService,
    MovieService,
  ],
})
export class AppModule {}

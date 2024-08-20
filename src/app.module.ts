import { join } from 'path';

import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicEntity } from './entities/musics.entity';
import { MovieEntity } from './entities/movies.entity';

import { AppController } from './app.controller';
import { HealthService } from './services/healthz.service';
import { MailService } from './services/mail.service';
import { MusicService } from './services/music.db.service';
import { MovieService } from './services/movie.db.service';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '0.0.0.0',
      port: 3306,
      database: '6ow3idgirl',
      username: 'root',
      password: 'root',
      entities: ['dist/entity/*.js'],
      migrations: ['dist/migrations/*.js'],
      logging: true,
      // if true, data will be automatically updated with detecting changes
      synchronize: false,
    }),
    TypeOrmModule.forFeature([MusicEntity, MovieEntity]),
    ConfigModule.forRoot({
      isGlobal: true
    }),
  ],
  controllers: [AppController],
  providers: [
    HealthService,
    MailService,
    MusicService,
    MovieService,
  ],
})
export class AppModule {}

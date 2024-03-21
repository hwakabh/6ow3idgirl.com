import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './typeOrm.config';
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
    TypeOrmModule.forRoot(typeormConfig),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    // TODO: added DTO & dedicated modules/services
    TypeOrmModule.forFeature([MusicEntity, MovieEntity]),
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

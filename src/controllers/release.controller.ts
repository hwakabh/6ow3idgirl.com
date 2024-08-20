import { Controller, Get, Param } from '@nestjs/common';

import { MusicService } from '../services/music.db.service';
import { MovieService } from '../services/movie.db.service';


@Controller()
export class ReleaseController {
  constructor(
    private readonly musicService: MusicService,
    private readonly movieService: MovieService,
  ) {}

  // TODO: implement dedicated controller/module for release(=music+movie)
  @Get('/music')
  readAllMusic() {
    return this.musicService.readAll();
  }

  @Get('/music/:id')
  readOneMusic(@Param('id') id: number) {
    return this.musicService.readOne(id);
  }
}

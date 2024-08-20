import { Controller, Get, Param } from '@nestjs/common';

import { MusicService } from '../services/music.db.service';
import { MovieService } from '../services/movie.db.service';


@Controller()
export class ReleaseController {
  constructor(
    private readonly musicService: MusicService,
    private readonly movieService: MovieService,
  ) {}

  @Get('/music')
  readAllMusic() {
    return this.musicService.readAll();
  }

  @Get('/music/:id')
  readOneMusic(@Param('id') id: number) {
    return this.musicService.readOne(id);
  }

  @Get('/movie')
  readAllMovie() {
    return this.movieService.readAll();
  }

  @Get('/movie/:id')
  readOneMovie(@Param('id') id: number) {
    return this.movieService.readOne(id);
  }

}

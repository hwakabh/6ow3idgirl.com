import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from 'src/entities/movies.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async readOne(id: number): Promise<Movie> {
    return await this.movieRepository.findOneBy({ id: id });
  }

  async readAll(): Promise<Movie[]> {
    return await this.movieRepository.find({});
  }

}

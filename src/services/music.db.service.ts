import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { CreateMusicDTO, UpdateMusicDTO } from '../dto/music.dto';
import { Music } from '../entities/musics.entity';

@Injectable()
export class MusicService {
  constructor(
    @InjectRepository(Music)
    private readonly musicRepository: Repository<Music>,
  ) {}

  // async createOne(dto: CreateMusicDTO): Promise<Music> {
  //   return await this.musicRepository.save(dto);
  // }

  async readOne(id: number): Promise<Music> {
    return await this.musicRepository.findOneBy({ id: id });
  }

  async readAll(): Promise<Music[]> {
    return await this.musicRepository.find({});
  }

  // async updateOne(music: Music, dto: UpdateMusicDTO): Promise<Music> {
  //   return await this.musicRepository.save({ ...music, ...dto });
  // }

  // async deleteOne(music: Music): Promise<Music> {
  //   return await music.remove();
  // }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { CreateMusicDTO, UpdateMusicDTO } from '../dto/music.dto';
import { MusicEntity } from '../entities/musics.entity';

@Injectable()
export class MusicService {
  constructor(
    @InjectRepository(MusicEntity)
    private readonly musicRepository: Repository<MusicEntity>,
  ) {}

  // async createOne(dto: CreateMusicDTO): Promise<MusicEntity> {
  //   return await this.musicRepository.save(dto);
  // }

  async readOne(id: number): Promise<MusicEntity> {
    return await this.musicRepository.findOneBy({ id: id });
  }

  async readAll(): Promise<MusicEntity[]> {
    return await this.musicRepository.find({});
  }

  // async updateOne(music: MusicEntity, dto: UpdateMusicDTO): Promise<MusicEntity> {
  //   return await this.musicRepository.save({ ...music, ...dto });
  // }

  // async deleteOne(music: MusicEntity): Promise<MusicEntity> {
  //   return await music.remove();
  // }
}

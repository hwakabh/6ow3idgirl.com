import { Column, Entity, BaseEntity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('musics')
export class MusicEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'ID of Music release' })
  readonly id: number;

  @Column('varchar', { comment: 'Title of music release' })
  title: string;

  @Column('varchar', { comment: 'Relative path of jacket image file' })
  url_local: string;

  @Column('varchar', { comment: 'URL of Spotify' })
  url_spotify: string;

  @Column('varchar', { comment: 'URL of Apple Music' })
  url_apple: string;

  @Column('varchar', { comment: 'URL of LINE Music' })
  url_line: string;

  @Column('varchar', { comment: 'URL of Amazon Music' })
  url_amazon: string;

  @Column('varchar', { comment: 'URL of BIG UP' })
  url_bigup: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

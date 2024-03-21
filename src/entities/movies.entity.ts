import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('movies')
export class MovieEntity {
  @PrimaryGeneratedColumn({ comment: 'ID of Movie release' })
  readonly id: number;

  @Column('varchar', { comment: 'Name of movie' })
  title: string;

  @Column('varchar', { comment: 'Short descriptions of movie' })
  descriptions: string;

  @Column('varchar', { comment: 'Relative path of thumbnail image file' })
  url_local: string;

  @Column('varchar', { comment: 'URL of YouTube' })
  url_youtube: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(title: string) {
    this.title = title;
  }
}

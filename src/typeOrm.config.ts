import { join } from 'path';

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  database: '6ow3idgirl',
  port: 3306,
  username: 'root',
  password: 'root',
  entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, '../**/*.migrations{.ts,.js}')],
  logging: true,
  // if true, data will be automatically updated with detecting changes
  synchronize: false,
}


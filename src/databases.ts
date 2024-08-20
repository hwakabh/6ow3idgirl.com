import { join } from "path";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '0.0.0.0',
  port: 3306,
  database: '6ow3idgirl',
  username: 'root',
  password: 'root',
  entities: ['dist/entities/*.js'],
  migrations: ['dist/migrations/*.js'],
  logging: true,
  // if true, data will be automatically updated with detecting changes
  synchronize: false,
});

module.exports = AppDataSource;
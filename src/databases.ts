import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOSTNAME ?? '0.0.0.0',
  port: Number(process.env.MYSQL_PORT) ?? 3306,
  database: process.env.MYSQL_DATABASE ?? 'roza',
  username: process.env.MYSQL_USERNAME ?? 'root',
  password: process.env.MYSQL_PASSWORD ?? 'root',
  entities: ['src/entities/*.ts'],
  migrations: ['src/migrations/*.ts'],
  logging: true,
  // if true, data will be automatically updated with detecting changes
  synchronize: false,
});

module.exports = AppDataSource;

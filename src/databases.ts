import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOSTNAME,
  port: Number(process.env.MYSQL_PORT),
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  entities: ['src/entities/*.ts'],
  migrations: ['src/migrations/*.ts'],
  logging: true,
  // if true, data will be automatically updated with detecting changes
  synchronize: false,
});

module.exports = AppDataSource;

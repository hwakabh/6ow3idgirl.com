import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.JAWSDB_URL.split(/\/|:|@/)[5] ?? '0.0.0.0',
  port: Number(process.env.JAWSDB_URL.split(/\/|:|@/)[6]) ?? 3306,
  database: process.env.JAWSDB_URL.split(/\/|:|@/)[7] ?? 'roza',
  username: process.env.JAWSDB_URL.split(/\/|:|@/)[3] ?? 'root',
  password: process.env.JAWSDB_URL.split(/\/|:|@/)[4] ?? 'root',
entities: ['src/entities/*.ts'],
  migrations: ['src/migrations/*.ts'],
  logging: true,
  // if true, data will be automatically updated with detecting changes
  synchronize: false,
});

module.exports = AppDataSource;

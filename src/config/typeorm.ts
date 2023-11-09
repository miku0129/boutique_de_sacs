import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'boutique.db',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: false, //差異を検出し自動更新するので productionでは禁忌, そのためにmigrationを使用する
  migrations: ['dist/src/migrations/*.js'],
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);

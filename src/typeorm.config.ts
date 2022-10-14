import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const typeorm_configuration: SqliteConnectionOptions = {
  database: 'db',
  type: 'sqlite',
  entities: ['dist/src/**/*.entity{.js,.ts}'],
  synchronize: true,
};

export default typeorm_configuration;

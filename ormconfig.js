const env = {
  localhost: {
    type: 'postgres',
    host: 'hostels-api-db',
    port: 5432,
    username: 'hostels-api-user',
    password: 'hostels',
    database: 'hostels-api-database',
  },
};

const cli = {
  migrationsDir: 'src/database/migrations',
  entitiesDir: 'src',
};

module.exports = {
  cli,
  entities: ['dist/modules/**/entities/*.entity.js'],
  migrations: ['dist/database/migrations/**/*.js'],
  migrationsTableName: 'migrations_hostels-api',
  ...(env[process.env.NODE_ENV] || {}),
};

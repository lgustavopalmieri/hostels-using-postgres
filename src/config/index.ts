interface IConfig {
  database: {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
}
const localhost = {
  database: {
    type: 'postgres',
    host: 'hostels-api-db',
    port: 5432,
    username: 'hostels-api-user',
    password: 'hostels',
    database: 'hostels-api-database',
  },
};
export default (): IConfig => {
  const env = { localhost };
  return env[process.env.NODE_ENV] || env.localhost;
};

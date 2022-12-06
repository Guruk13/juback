module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 37001),
      database: env('DATABASE_NAME', 'database'),
      user: env('DATABASE_USERNAME', 'mysql'),
      password: env('DATABASE_PASSWORD', 'mysql'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});

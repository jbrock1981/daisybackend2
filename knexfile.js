module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/DaisyDb'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + 'ssl=true'
  }
};

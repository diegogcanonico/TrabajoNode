require("dotenv").config();
const { DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "qfqbsiyomvmwda",
    password: "902ba2b8849ab08cbc5f193bd2a1b0ebebbd7a7870e5c9af380a0883f7be8f66",
    database: "d3tflev3vpiodi",
    host: "ec2-52-3-130-181.compute-1.amazonaws.com",
    dialect: "postgres",
    port: 5432
  },
};
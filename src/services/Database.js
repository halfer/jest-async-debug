const mysql = require('mysql2/promise');

export default class Database {

  setConfig(config) {
    this.config = config;

    return this;
  }

  getConfig() {
    if (!this.config) {
      throw 'No configuration set';
    }

    return this.config;
  }

  databaseInit() {
    const config = this.getConfig();

    return mysql.createConnection({
      host: config.host, user: config.username,
      password: config.password,
      database: config.database
    }).then((connection) => {
      this.connection = connection;
    });
  }

  getConnection() {
    return this.connection;
  }

}

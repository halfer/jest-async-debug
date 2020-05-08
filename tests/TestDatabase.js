const mysql = require('mysql2/promise');

export default class TestDatabase {

  constructor(config) {
    this.config = config;
  }

  beforeEachTest(environmentName) {
    console.log('Before a test');

    return this.setForeignKeyChecks(false).then(() => {
      return this.truncateTables();
    }).then(() => {
      return this.setForeignKeyChecks(true);
    }).catch((error) => {
      console.log('Failed to clear down database: ' + error);
    });
  }

  connect(environmentName) {
    const config = this.getEnvConfig(environmentName);

    return mysql.createConnection({
      host: config.host, user: config.username,
      password: config.password
    }).then((connection) => {
      this.connection = connection;
      return this.useDatabase(environmentName);
    }).catch((error) => {
      console.log('Failed to connect to the db');
    });
  }

  getConnection() {
    if (!this.connection) {
      throw 'Database not connected';
    }

    return this.connection;
  }

  dropDatabase(environmentName) {
    const config = this.getEnvConfig(environmentName);

    return this.getConnection().query(
      `DROP DATABASE IF EXISTS ${config.database}`
    );
  }


  createDatabase(environmentName) {
    const config = this.getEnvConfig(environmentName);

    return this.getConnection().query(
      `CREATE DATABASE IF NOT EXISTS ${config.database}`
    );
  }

  useDatabase(environmentName) {
    const config = this.getEnvConfig(environmentName);

    return this.getConnection().query(
      `USE ${config.database}`
    );
  }

  setForeignKeyChecks(value) {
    // Make injected value safe
    var boolStr = value ? '1' : '0';

    return this.getConnection().query(
      `SET FOREIGN_KEY_CHECKS = ${boolStr}`
    );
  }

  getTables() {
    return ['contribution', 'donation', 'expenditure',
      'tag', 'expenditure_tag'];
  }

  truncateTables() {
    return Promise.all(
      this.getTables().map(table => this.truncateTable(table))
    );
  }

  truncateTable(table) {
    return this.getConnection().query(
      `TRUNCATE TABLE ${table}`
    );
  }

  /**
   * Close is synchronous so there is no returned promise
   */
  close() {
    this.getConnection().close();
  }

  getEnvConfig(environmentName) {
    if (!environmentName) {
      throw 'Please supply an environment name'
    }
    if (!this.config[environmentName]) {
      throw 'Cannot find database environment data'
    }

    return this.config[environmentName];
  }
}

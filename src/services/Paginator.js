import Database from "./Database";

export default class Paginator extends Database {

  setPaginationSize(paginationSize) {
    this.paginationSize = paginationSize;

    return this;
  }

  setPage(page) {
    this.page = page;

    return this;
  }

  fetchPage(table, orderBy) {
    return new Promise((resolve, reject) => {
      resolve([
        {id: 1}, {id: 2},
      ]);
    });
    // const limit = parseInt(this.paginationSize);
    // const offset = 0; // FIXME
    // const sql = `
    //     SELECT * FROM ${this.cleanEntity(table)}
    //     ORDER BY ${this.cleanEntity(orderBy)}
    //     LIMIT ${limit} OFFSET ${offset}
    // `;
    // return this
    //   .getConnection()
    //   .execute(sql);
  }

  /**
   * Ensures that a bad entity can't be injected into SQL
   *
   * @param {string} entity
   * @returns {string}
   */
  cleanEntity(entity) {
    return entity; // FIXME
  }
}

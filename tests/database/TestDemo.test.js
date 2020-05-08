import TestDatabase from '../TestDatabase';
var config = require('../../config/config.json');
import FetchDonations from "../../src/services/FetchDonations";
const envName = 'test';

let database = new TestDatabase(config);

// Connect before all tests
beforeAll(() => {
  console.log('Connect Jest database');
  return database.connect(envName);
});

// Disconnect after all tests
afterAll(async done => {
  console.log('Disconnect Jest database');
  database.close();
  done();
});

describe('Database tests', () => {

  // Before every test
  beforeEach(() => database.beforeEachTest(envName));

  test('Describe this demo test', () => {
    console.log('Test #1');
    expect(true).toEqual(true);
  });

  test('Describe this demo test 2', () => {
    console.log('Test #2');
    expect(true).toEqual(true);
  });

  // test('Select from an empty donations table', () => {
  //
  //   console.log('Test #3');
  //
  //   const fetcher = new FetchDonations();
  //   fetcher
  //     .setPaginationSize(20)
  //     .setPage(1)
  //     .setConfig(config[envName]);
  //   fetcher.databaseInit();
  //
  //   return fetcher
  //     .databaseInit()
  //     .then(() => {
  //       return fetcher.fetch();
  //     }).then((data) => {
  //       expect(data).toBe([{ id: 1 }, { id : 2 }]);
  //     });
  // });

});

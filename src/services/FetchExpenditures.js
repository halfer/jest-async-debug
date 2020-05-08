import Paginator from "./Paginator";

export default class FetchExpenditures extends Paginator {

  fetch() {
    return this.fetchPage('expenditure', 'id');
  }

}

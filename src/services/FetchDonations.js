import Paginator from "./Paginator";

export default class FetchDonations extends Paginator {

  fetch() {
    return this.fetchPage('donation', 'id');
  }

}

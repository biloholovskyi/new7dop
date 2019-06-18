export default class Serv {
  constructor() {
    this._apiBase = "http://localhost:3000";
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  getAllBestsellers() {
    return this.getResource('/bestsellers/');
  }

  getAllCoffee() {
    return this.getResource('/coffee/');
  }

  getAllGoods() {
    return this.getResource('/goods/');
  }
}
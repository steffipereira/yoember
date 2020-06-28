import Route from '@ember/routing/route';

export default class AdminProductsRoute extends Route {
  model() {
    return this.store.findAll('product');
  }
}

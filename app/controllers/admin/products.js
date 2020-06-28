import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminProductsController extends Controller {
  @action
  addNewProduct(productName, sku, unitPrice) {
    return this.store.createRecord('product', {
      productName, sku, unitPrice
    }).save()
  }

  @action
  editProduct(product) {
    product.set('isEdit',true);
  }

  @action
  async updateProduct(product) {
    await product.save();
    product.set('isEdit', false);
  }

  @action
  cancelEdit(product) {
    product.set('isEdit', false);
  }

  @action
  deleteProduct(product) {
    return product.destroyRecord();
  }

  @action
  selectCategory() {
    debugger;
  }
}

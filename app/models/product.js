import Model, { attr, belongsTo } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('string') productName;
  @attr('string') sku;
  @attr('number') unitPrice;
  @belongsTo category;

  isEdit = false;
}

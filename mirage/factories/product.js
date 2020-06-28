import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  productName() {
    return faker.commerce.department();
  },

  sku() {
    return faker.lorem.slug();
  },

  unitPrice() {
    return faker.commerce.price();
  }

});

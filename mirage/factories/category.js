import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({

  name(){
    return faker.commerce.department();
  },

  afterCreate(category, server) {
    server.createList('product', 5, { category })
  }
});

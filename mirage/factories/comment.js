import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({

  text() {
    return faker.lorem.sentence()
  },

  createdAt() {
    return faker.date.past()
  }

});

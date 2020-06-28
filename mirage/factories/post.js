import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  title() {
    return faker.lorem.sentence();
  },

  body() {
    return faker.lorem.paragraph();
  },

  createdAt() {
    return faker.date.past();
  },

  afterCreate(post, server) {
    server.createList('comment', 3,  { post });
  }
});

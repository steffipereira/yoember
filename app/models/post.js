import Model from '@ember-data/model';
import { attr, hasMany } from '@ember-data/model';

export default class PostModel extends Model {

  @attr('string') title;
  @attr('string') body;
  @attr('date') createdAt;
  @hasMany comments;

  get formattedCreatedAt() {
    return this.createdAt.toLocaleDateString("en-US");
  }
}

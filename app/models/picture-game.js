import Model, { belongsTo } from '@ember-data/model';

export default class PictureGameModel extends Model {
  @belongsTo('picture', { async: false}) templatePicture;
  @belongsTo('picture', { async: false }) playerPicture;

  // constructor() {
  //   super(...arguments)
  //   this.set('templatePicture', this.store.createRecord('picture'));
  //   this.set('playerPicture', this.store.createRecord('picture'));
  // }
}

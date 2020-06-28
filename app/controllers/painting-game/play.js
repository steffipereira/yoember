import Controller from '@ember/controller';

export default class PaintingGamePlayController extends Controller {
  color = 'primary';

  constructor (){
    super(...arguments);
    //this.set('game', this.store.createRecord('game'));
  }
  model() {
    return this.store.createRecord('pictureGame', {
    });
  }
}

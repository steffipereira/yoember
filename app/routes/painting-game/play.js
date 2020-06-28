import Route from '@ember/routing/route';

export default class PaintingGamePlayRoute extends Route {
  // model() {
  //   return this.store.createRecord('pictureGame', {
  //   });
  // }
  afterModel() {
    return this.store.createRecord('picture', {
      templatePicture: this.templatePicture,
      pictureTemplate: this.pictureTemplate,
    });
  }
}

import Route from '@ember/routing/route';

export default class PostsPostsRoute extends Route {
   model({ post_id }) {
    return this.store.findRecord('post', post_id, { include: 'comments'});
  }
  // afterModel(model) {
  //   // const comment = this.store.createRecord('comment');
  //   // model.comments.pushObject(comment);
  //   // return model;
  // }
}

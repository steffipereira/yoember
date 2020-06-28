import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class PostsController extends Controller {

  @action
  addPost(e) {
    e.preventDefault();
    this.store.createRecord('post', {
      title: this.newTitle,
      body: this.newBody,
      createdAt: new Date()
    }).save();
    this.setProperties({
      newTitle: '',
      newBody: ''
    });
  }
}

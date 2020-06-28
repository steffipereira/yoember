import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PostsPostController extends Controller {
  @tracked newText;

  @action
   addComment() {
    const comment = this.store.createRecord('comment', {
      body: this.newText,
      createdAt: new Date(),
      post: this.model,
    });
    comment.save()
  }
}

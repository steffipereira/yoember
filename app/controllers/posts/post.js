import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class PostsPostController extends Controller {
  @tracked newText;

  @action
  async deletePost(post) {
    await post.destroyRecord();
    this.transitionToRoute('/posts');
  }

  @action
   addComment(e) {
     e.preventDefault();
    const comment = this.store.createRecord('comment', {
      text: this.newText,
      createdAt: new Date(),
      post: this.model,
    });
    this.newText = '';
    comment.save()
  }
}
